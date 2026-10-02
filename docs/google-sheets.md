# Contact form to Google Sheets

The frontend sends contact submissions to `/api/contact` by default. The Vercel Function forwards them to Apps Script. The repository does not contain a sheet URL, account email, service credentials, or deployment secret.

## Apps Script setup

1. Create a private Google Sheet and a tab named `Messages`.
2. Open **Extensions > Apps Script**.
3. Paste the script below and replace `MESSAGES_TAB` if needed.
4. In **Project Settings > Script properties**, add `CONTACT_TOKEN` with a long random value.
5. Deploy as a web app, execute as the sheet owner, and restrict access according to the account policy.
6. In Vercel project settings, set `GOOGLE_APPS_SCRIPT_URL` to the deployed web-app URL and `GOOGLE_CONTACT_TOKEN` to the same Script Property value. Keep both variables server-only. Set `CONTACT_ALLOWED_ORIGIN` to the production site origin.

```javascript
const MESSAGES_TAB = 'Messages';

function doPost(e) {
  try {
    const body = JSON.parse(e.postData.contents || '{}');
    if (String(body.website || '').trim()) return json({ ok: false, error: 'spam' }, 400);

    const expected = PropertiesService.getScriptProperties().getProperty('CONTACT_TOKEN');
    if (!expected || body.token !== expected) return json({ ok: false, error: 'unauthorized' }, 401);

    const required = ['name', 'email', 'message'];
    if (required.some((key) => !String(body[key] || '').trim())) {
      return json({ ok: false, error: 'validation' }, 422);
    }

    const lock = LockService.getScriptLock();
    lock.waitLock(10000);
    try {
      const sheet = SpreadsheetApp.getActive().getSheetByName(MESSAGES_TAB);
      if (!sheet) return json({ ok: false, error: 'missing_sheet' }, 500);
      if (sheet.getLastRow() === 0) {
        sheet.appendRow(['Submitted at', 'Name', 'Organisation', 'Country', 'Email', 'Topic', 'Message', 'Language']);
      }
      sheet.appendRow([
        new Date(),
        text(body.name),
        text(body.organisation),
        text(body.country),
        text(body.email),
        text(body.topic),
        text(body.message),
        text(body.language),
      ]);
    } finally {
      lock.releaseLock();
    }
    return json({ ok: true }, 200);
  } catch (error) {
    return json({ ok: false, error: String(error) }, 500);
  }
}

function text(value) {
  const safe = String(value || '').slice(0, 5000);
  return safe.startsWith('=') || safe.startsWith('+') || safe.startsWith('-') || safe.startsWith('@') ? "'" + safe : safe;
}

function json(value, status) {
  return ContentService.createTextOutput(JSON.stringify(value)).setMimeType(ContentService.MimeType.JSON);
}
```

The current frontend shows success only after the Vercel Function receives `{ ok: true }` from Apps Script. If the variables are missing, it shows a configuration error and does not claim the message was saved. Test with one real submission and confirm the new row in `Messages` before considering the integration complete.
