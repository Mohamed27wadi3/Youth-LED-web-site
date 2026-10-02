type ContactBody = {
  name?: string
  organisation?: string
  country?: string
  email?: string
  topic?: string
  message?: string
  language?: string
  submittedAt?: string
}

type VercelRequest = { method?: string; body?: ContactBody }
type VercelResponse = {
  status: (code: number) => VercelResponse
  json: (value: unknown) => void
  setHeader: (name: string, value: string) => void
}

const text = (value: unknown, limit = 5000) => String(value ?? '').trim().slice(0, limit)

export default async function handler(req: VercelRequest, res: VercelResponse) {
  res.setHeader('Access-Control-Allow-Origin', process.env.CONTACT_ALLOWED_ORIGIN || '*')
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type')
  if (req.method === 'OPTIONS') return res.status(204).json({ ok: true })
  if (req.method !== 'POST') return res.status(405).json({ ok: false, error: 'method_not_allowed' })

  const body = req.body || {}
  const payload = {
    name: text(body.name, 160),
    organisation: text(body.organisation, 160),
    country: text(body.country, 120),
    email: text(body.email, 254),
    topic: text(body.topic, 160),
    message: text(body.message),
    language: text(body.language, 8),
    submittedAt: text(body.submittedAt, 80),
    website: '',
    token: process.env.GOOGLE_CONTACT_TOKEN || '',
  }
  if (!payload.name || !payload.email || !payload.message) return res.status(422).json({ ok: false, error: 'validation' })

  const scriptUrl = process.env.GOOGLE_APPS_SCRIPT_URL
  if (!scriptUrl || !process.env.GOOGLE_CONTACT_TOKEN) return res.status(503).json({ ok: false, error: 'contact_not_configured' })

  try {
    const response = await fetch(scriptUrl, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(payload),
    })
    const result = await response.json().catch(() => ({ ok: false }))
    if (!response.ok || result.ok !== true) return res.status(502).json({ ok: false, error: 'sheet_rejected' })
    return res.status(200).json({ ok: true })
  } catch {
    return res.status(502).json({ ok: false, error: 'sheet_unreachable' })
  }
}
