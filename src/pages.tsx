import { useState, type ReactNode } from 'react'
import { ChevronRight, Check, Mail, Phone, Plane, GraduationCap, Handshake, Megaphone, Users, Globe2 } from 'lucide-react'
import { Instagram, Arrow, Btn, Eyebrow, Img, Link, MaskLines, Reveal, useApp } from './lib'
import {
  CAPS, CONTACT, DEPARTMENTS, IMG, PILLARS, PROJECTS, VALUES, BOARD, STORIES,
} from './data'
import {
  AlgeriaMap, Governance, Goals, Green, HowWeWork, ImpactNumbers, International, MVW, Opportunities, PartnerCTA, ProjectCard, Stories, Who, Join as JoinBand,
} from './home'

function PageHero({ eyebrow, title, lead, crumb }: { eyebrow: string; title: ReactNode[]; lead?: string; crumb: string }) {
  const { t } = useApp()
  return (
    <section className="on-navy relative overflow-hidden bg-[#0b2c66] pb-[clamp(56px,8vw,112px)] pt-[clamp(128px,14vw,200px)] text-white dark:bg-[#0b2148]">
      <span className="pointer-events-none absolute -end-10 top-20 h-72 w-72 rounded-full border border-white/10" aria-hidden />
      <span className="pointer-events-none absolute -end-28 top-10 h-[28rem] w-[28rem] rounded-full border border-white/[0.06]" aria-hidden />
      <div className="wrap relative">
        <nav aria-label="Breadcrumb" className="mb-8 flex items-center gap-2 text-[13px] text-white/70">
          <Link to="/" className="hover:text-white">{t('Home', 'الرئيسية')}</Link>
          <ChevronRight size={14} className="rtl:-scale-x-100" aria-hidden />
          <span aria-current="page" className="text-white">{crumb}</span>
        </nav>
        <Eyebrow onNavy>{eyebrow}</Eyebrow>
        <h1 className="t-state mt-7 max-w-[16ch]">
          <MaskLines lines={title} />
        </h1>
        {lead && <p className="t-lead a-rise mt-8 text-white/80" style={{ '--d': '300ms' } as React.CSSProperties}>{lead}</p>}
      </div>
    </section>
  )
}

function Chips<T extends string>({ items, value, onChange }: { items: { k: T; label: string }[]; value: T; onChange: (k: T) => void }) {
  return (
    <div className="flex flex-wrap gap-2" role="group">
      {items.map((i) => (
        <button key={i.k} type="button" aria-pressed={value === i.k} onClick={() => onChange(i.k)} className={`inline-flex min-h-[44px] items-center gap-2 rounded-full border px-5 text-sm font-semibold transition-colors duration-200 ${value === i.k ? 'border-ink bg-ink text-bg' : 'border-bd text-ink hover:border-ink'}`}>
          {value === i.k && <Check size={15} strokeWidth={2.4} aria-hidden />}
          {i.label}
        </button>
      ))}
    </div>
  )
}

/* ───────── ABOUT ───────── */
function Values() {
  const { t } = useApp()
  const [a, setA] = useState(0)
  return (
    <section className="sec bg-bg">
      <div className="wrap grid gap-14 lg:grid-cols-[4fr_8fr] lg:gap-20">
        <div>
          <Reveal><Eyebrow>{t('OUR VALUES', 'قيمنا')}</Eyebrow></Reveal>
          <h2 className="t-h2 mt-6 text-ink"><MaskLines lines={[t('Six values,', 'ست قيم،'), t('one way of working.', 'طريقة عمل واحدة.')]} /></h2>
        </div>
        <ul className="border-t border-bd">
          {VALUES.map((v, i) => (
            <li key={i} className="border-b border-bd">
              <button type="button" aria-expanded={a === i} onMouseEnter={() => setA(i)} onFocus={() => setA(i)} onClick={() => setA(i)} className="flex min-h-[44px] w-full items-center gap-5 py-5 text-start">
                <span className="t-num text-xs text-tx2" dir="ltr">0{i + 1}</span>
                <span className={`t-num flex-1 text-[clamp(1.75rem,4.4vw,3.75rem)] transition-all duration-300 ease-[var(--ease)] ${a === i ? 'text-brand ltr:translate-x-2 rtl:-translate-x-2' : 'text-ink/35'}`} style={{ fontFamily: 'var(--fd)' }}>{t(v.name.en, v.name.ar)}</span>
                <span className={`h-3 w-3 rounded-full transition-all duration-300 ${a === i ? 'scale-100 bg-accent' : 'scale-0 bg-accent'}`} aria-hidden />
              </button>
              <div className={`grid transition-[grid-template-rows] duration-[400ms] ease-[var(--ease)] ${a === i ? 'grid-rows-[1fr]' : 'grid-rows-[0fr]'}`}>
                <p className="t-body overflow-hidden ps-9 text-tx2"><span className="block pb-6">{t(v.desc.en, v.desc.ar)}</span></p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}

export function Departments() {
  const { t } = useApp()
  const [a, setA] = useState(0)
  return (
    <section className="sec bg-tint">
      <div className="wrap">
        <Reveal><Eyebrow>{t('DEPARTMENTS', 'الإدارات')}</Eyebrow></Reveal>
        <h2 className="t-h2 mt-6 text-ink"><MaskLines lines={[t('How the work is organised.', 'كيف ينتظم العمل.')]} /></h2>
        <div className="mt-14 grid gap-12 lg:grid-cols-[7fr_5fr] lg:gap-20">
          <div className="border-t border-ink/15">
            {DEPARTMENTS.map((d, i) => (
              <div key={i} className="border-b border-ink/15">
                <h3>
                  <button type="button" aria-expanded={a === i} onClick={() => setA(i)} className="group flex min-h-[44px] w-full items-center gap-5 py-6 text-start">
                    <span className="t-num text-sm text-brand" dir="ltr">0{i + 1}</span>
                    <span className={`t-h4 flex-1 transition-colors ${a === i ? 'text-brand' : 'text-ink group-hover:text-brand'}`}>{t(d.name.en, d.name.ar)}</span>
                  </button>
                </h3>
                <div className={`grid transition-[grid-template-rows] duration-[400ms] ease-[var(--ease)] ${a === i ? 'grid-rows-[1fr]' : 'grid-rows-[0fr]'}`}>
                  <div className="overflow-hidden">
                    <div className="pb-8 ps-10">
                      <p className="t-body text-ink/80">{t(d.desc.en, d.desc.ar)}</p>
                      <ul className="mt-4 flex flex-wrap gap-2">
                        {d.skills.map((s, k) => <li key={k} className="rounded-full border border-ink/25 px-4 py-2 text-[13px] font-medium text-ink">{t(s.en, s.ar)}</li>)}
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="relative aspect-[4/5] overflow-hidden rounded-[20px] bg-bg2 lg:sticky lg:top-28 lg:self-start">
            {DEPARTMENTS.map((d, i) => (
              <div key={i} className="absolute inset-0 transition-opacity duration-500 ease-[var(--ease)]" style={{ opacity: a === i ? 1 : 0 }}>
                <Img src={d.img} alt={`${d.name.en} (placeholder image)`} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export function About() {
  const { t } = useApp()
  return (
    <>
      <PageHero crumb={t('About', 'من نحن')} eyebrow={t('ABOUT', 'من نحن')} title={[t('AN ASSOCIATION', 'جمعية'),t('BUILT BY YOUTH.', 'بناها الشباب.')]} lead={t('Youth LED stands for Youth Leadership & Entrepreneurship Development: an inter-Wilaya non-profit youth association in Algeria, founded in 2018 for young people aged 18–35.', 'شباب ليد اختصار لـ«القيادة الشبابية وتنمية ريادة الأعمال»: جمعية شبابية غير ربحية بين الولايات في الجزائر، تأسست سنة 2018 للشباب من 18 إلى 35 سنة.')} />
      <Who />
      <MVW />
      <Values />
      <Governance />
      <Departments />
      <PartnerCTA />
    </>
  )
}

/* ───────── WHAT WE DO ───────── */
export function WhatWeDo() {
  const { t } = useApp()
  return (
    <>
      <PageHero crumb={t('What We Do', 'ماذا نفعل')} eyebrow={t('WHAT WE DO', 'ماذا نفعل')} title={[t('LEARN. SPEAK.', 'تعلّم. تحدّث.'), t('BUILD. CONNECT.', 'ابنِ. تواصل.')]} lead={t('Four pillars turn practical skills into youth-led initiatives.', 'أربع ركائز تحوّل المهارات العملية إلى مبادرات يقودها الشباب.')} />
      <section className="bg-bg">
        {PILLARS.map((p, i) => (
          <div key={p.key} className={`py-[clamp(56px,8vw,112px)] ${i % 2 ? 'bg-bg2' : ''}`}>
            <div className="wrap grid items-center gap-10 lg:grid-cols-2 lg:gap-20">
              <div className={i % 2 ? 'lg:order-2' : ''}>
                <p className="t-num text-xs text-tx2" dir="ltr">0{i + 1} / 04</p>
                <p className="t-num mt-3 text-[clamp(3.5rem,9vw,7.5rem)] text-ink" style={{ fontFamily: 'var(--fd)' }}>{t(p.word.en, p.word.ar)}<span className="text-accent">.</span></p>
                <p className="t-h4 mt-4 text-brand">{t(p.line.en, p.line.ar)}</p>
                <p className="t-body mt-4 text-tx2">{t(p.desc.en, p.desc.ar)}</p>
                <ul className="mt-6 flex flex-wrap gap-2">{p.tags.map((g, k) => <li key={k} className="rounded-full border border-bd px-4 py-2 text-[13px] font-medium text-ink">{t(g.en, g.ar)}</li>)}</ul>
              </div>
              <Reveal kind={i % 2 ? 'clip-s' : 'clip-b'} className="overflow-hidden rounded-[20px] bg-tint"><div className="aspect-[4/3]"><Img src={p.img} alt={`${p.word.en} (placeholder image)`} /></div></Reveal>
            </div>
          </div>
        ))}
      </section>
      <HowWeWork />
      <Goals />
      <PartnerCTA />
    </>
  )
}

/* ───────── PROJECTS ───────── */
export function Projects() {
  const { t } = useApp()
  const [f, setF] = useState<'all' | 'training' | 'entrepreneurship' | 'dialogue' | 'community'>('all')
  const list = PROJECTS.filter((p) => f === 'all' || p.kind === f)
  return (
    <>
      <PageHero crumb={t('Projects', 'المشاريع')} eyebrow={t('PROJECTS & ACTIVITIES', 'المشاريع والأنشطة')} title={[t('WHAT WE HAVE', 'ما أنجزناه'), t('BUILT TOGETHER.', 'معاً.')]} lead={t('Trainings, dialogues, meetups and community projects run by Youth LED Algeria.', 'دورات وحوارات ولقاءات ومشاريع مجتمعية تنفّذها جمعية شباب ليد الجزائر.')} />
      <section className="sec bg-bg">
        <div className="wrap">
          <Chips value={f} onChange={setF} items={[
            { k: 'all', label: t('All', 'الكل') }, { k: 'training', label: t('Training', 'التكوين') }, { k: 'entrepreneurship', label: t('Entrepreneurship', 'ريادة الأعمال') }, { k: 'dialogue', label: t('Dialogue', 'الحوار') }, { k: 'community', label: t('Community', 'المجتمع') },
          ]} />
          <div className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {list.map((p, i) => <ProjectCard key={p.id} p={p} delay={i * 60} />)}
          </div>
        </div>
      </section>
      <PartnerCTA />
    </>
  )
}

export function ProjectDetail({ id }: { id?: string }) {
  const { t } = useApp()
  const p = PROJECTS.find((x) => x.id === id)
  if (!p) return <NotFound />
  const others = PROJECTS.filter((x) => x.id !== p.id).slice(0, 3)
  return (
    <>
      <PageHero crumb={t(p.title.en, p.title.ar)} eyebrow={t(p.cat.en, p.cat.ar).toUpperCase()} title={[t(p.title.en, p.title.ar)]} lead={t(p.outcome.en, p.outcome.ar)} />
      <section className="sec bg-bg">
        <div className="wrap">
          <Reveal kind="clip-b" className="overflow-hidden rounded-[20px] bg-tint"><div className="aspect-[16/8]"><Img src={p.img} alt={`${p.title.en} (placeholder image)`} /></div></Reveal>
          <div className="mt-16 grid gap-12 lg:grid-cols-[4fr_8fr] lg:gap-20">
            <dl className="space-y-6 border-t border-bd pt-6 lg:border-t-0 lg:pt-0">
              <div><dt className="eyebrow text-tx2">{t('Category', 'الفئة')}</dt><dd className="t-h4 mt-2 text-ink">{t(p.cat.en, p.cat.ar)}</dd></div>
              <div><dt className="eyebrow text-tx2">{t('Organiser', 'المنظِّم')}</dt><dd className="t-h4 mt-2 text-ink">Youth LED Algeria</dd></div>
              <div><dt className="eyebrow text-tx2">{t('Year & location', 'السنة والمكان')}</dt><dd className="mt-2 text-tx2">{t('To be confirmed', 'في انتظار التأكيد')}</dd></div>
            </dl>
            <div className="space-y-12">
              {[
                [t('The idea', 'الفكرة'), t(p.outcome.en, p.outcome.ar)],
                [t('How we worked', 'كيف اشتغلنا'), t('Non-formal, participatory methods: young people learn by doing and by exchanging with peers.', 'أساليب غير نظامية تشاركية: يتعلّم الشباب بالممارسة وبالتبادل مع أقرانهم.')],
                [t('Full project story', 'القصة الكاملة للمشروع'), t('Detailed outcomes, photos and testimonials will be added with verified project material.', 'ستُضاف النتائج التفصيلية والصور والشهادات مع معطيات المشروع الموثّقة.')],
              ].map(([h, b], i) => (
                <Reveal key={i}><h2 className="t-h3 text-ink">{h}</h2><p className="t-body mt-4 text-tx2">{b}</p></Reveal>
              ))}
            </div>
          </div>
        </div>
      </section>
      <section className="sec bg-bg2">
        <div className="wrap">
          <h2 className="t-h2 text-ink">{t('More activities', 'المزيد من الأنشطة')}</h2>
          <div className="mt-10 grid gap-6 md:grid-cols-3">{others.map((o) => <ProjectCard key={o.id} p={o} />)}</div>
        </div>
      </section>
    </>
  )
}

/* ───────── IMPACT ───────── */
export function Impact() {
  const { t } = useApp()
  return (
    <>
      <PageHero crumb={t('Impact', 'الأثر')} eyebrow={t('IMPACT', 'الأثر')} title={[t('EVIDENCE,', 'الدليل،'), t('NOT SLOGANS.', 'لا الشعارات.')]} lead={t('Eight years of activity, a growing volunteer network and a national footprint.', 'ثماني سنوات من النشاط، وشبكة متطوعين تتّسع، وحضور وطني.')} />
      <ImpactNumbers compact />
      <Green />
      <AlgeriaMap />
      <PartnerCTA />
    </>
  )
}

/* ───────── INTERNATIONAL ───────── */
export function InternationalPage() {
  const { t } = useApp()
  const mods = [
    { i: Globe2, h: t('Our International Vision', 'رؤيتنا الدولية'), b: t('Connect Algerian youth with learning, exchange and cooperation, and bring local mobilisation capacity to partnerships.', 'ربط الشباب الجزائري بفرص التعلّم والتبادل والتعاون، وتقديم قدرة محلية على التعبئة للشراكات.') },
    { i: Handshake, h: t('Erasmus+ Experience', 'تجربة إيراسموس+'), b: t('Verified Erasmus+ project information and assets will be published here once supplied and approved.', 'ستُنشر هنا معطيات مشاريع إيراسموس+ الموثّقة فور تزويدنا بها واعتمادها.') },
    { i: Plane, h: t('Youth Mobility', 'تنقّل الشباب'), b: t('Structured preparation, selection and follow-up for young people taking part in exchanges.', 'إعداد منظّم واختيار ومتابعة للشباب المشاركين في التبادلات.') },
    { i: GraduationCap, h: t('Training & Capacity Building', 'التكوين وبناء القدرات'), b: t('Trainers and facilitators experienced in non-formal education and soft-skills delivery.', 'مكوّنون وميسّرون لهم خبرة في التعليم غير النظامي وتقديم المهارات الناعمة.') },
    { i: Users, h: t('Intercultural Learning', 'التعلّم بين الثقافات'), b: t('Dialogue formats that turn different perspectives into shared outcomes.', 'صيغ حوار تحوّل اختلاف وجهات النظر إلى نتائج مشتركة.') },
    { i: Megaphone, h: t('Our Contribution', 'مساهمتنا'), b: t('Youth outreach, workshop delivery, communication and event organisation for project consortia.', 'استقطاب الشباب وتنفيذ الورشات والاتصال وتنظيم الفعاليات لفائدة شراكات المشاريع.') },
  ]
  return (
    <>
      <PageHero crumb={t('International', 'دولي')} eyebrow={t('ERASMUS+ & EURO-MEDITERRANEAN COOPERATION', 'إيراسموس+ والتعاون الأورو-متوسطي')} title={[t('READY TO', 'جاهزون'), t('COOPERATE.', 'للتعاون.')]} lead={t('Structure, experience and youth engagement capacity for international partners, presented without exaggeration.', 'هيكل وخبرة وقدرة على إشراك الشباب لفائدة الشركاء الدوليين، دون مبالغة.')} />
      <section className="sec bg-bg">
        <div className="wrap grid gap-x-12 gap-y-14 md:grid-cols-2 lg:grid-cols-3">
          {mods.map((m, i) => (
            <Reveal key={i} delay={(i % 3) * 80} className="border-t-2 border-ink/15 pt-6">
              <m.i size={30} strokeWidth={1.75} className="text-brand" aria-hidden />
              <h2 className="t-h4 mt-5 text-ink">{m.h}</h2>
              <p className="t-body mt-3 text-tx2 !text-[15.5px]">{m.b}</p>
            </Reveal>
          ))}
        </div>
      </section>
      <International cta={false} />
      <section className="sec bg-bg2">
        <div className="wrap grid gap-12 lg:grid-cols-[5fr_7fr] lg:gap-20">
          <div>
            <Eyebrow>{t('PARTNER PROFILE', 'تعريف الشريك')}</Eyebrow>
            <h2 className="t-h2 mt-6 text-ink">{t('Youth LED Algeria at a glance', 'شباب ليد الجزائر في لمحة')}</h2>
          </div>
          <dl className="grid gap-px overflow-hidden rounded-2xl border border-bd bg-bd sm:grid-cols-2">
            {[
              [t('Type', 'النوع'), t('Inter-Wilaya non-profit youth association', 'جمعية شبابية غير ربحية بين الولايات')],
              [t('Founded', 'التأسيس'), '2018'],
              [t('Target group', 'الفئة المستهدفة'), t('Young people aged 18–35', 'الشباب من 18 إلى 35 سنة')],
              [t('Reach', 'الانتشار'), t('7+ provinces in Algeria', 'أكثر من 7 ولايات في الجزائر')],
              [t('Registration details', 'بيانات التسجيل'), t('Provided on request', 'تُقدَّم عند الطلب')],
              [t('Contact', 'التواصل'), CONTACT.email],
            ].map(([k, v], i) => (
              <div key={i} className="bg-bg2 p-6"><dt className="eyebrow text-tx2">{k}</dt><dd className="t-h4 mt-2 break-words text-ink">{v}</dd></div>
            ))}
          </dl>
        </div>
      </section>
      <PartnerCTA />
    </>
  )
}

/* ───────── TEAM ───────── */
export function PersonCard({ name, role, dept, bio, img, linkedin }: { name: string; role: string; dept: string; bio: string; img: string; linkedin?: string }) {
  return (
    <article className="card zoom-host group overflow-hidden">
      <div className="zoom-img relative aspect-[4/5] bg-tint">
        <Img src={img} alt={name} />
        <div className="absolute inset-0 bg-[#0b2c66]/35 transition-opacity duration-300 group-hover:opacity-0" />
        {linkedin && <a href={linkedin} aria-label={`${name} on LinkedIn`} className="absolute end-4 top-4 grid h-11 w-11 place-items-center rounded-full bg-white text-[#0b2c66] sm:opacity-0 sm:transition-opacity sm:group-hover:opacity-100">in</a>}
      </div>
      <div className="p-6">
        <span className="mb-3 block h-[3px] w-6 rounded-full bg-accent transition-all duration-300 group-hover:w-12" />
        <h3 className="t-h4 text-ink">{name}</h3>
        <p className="mt-1 text-sm font-semibold text-brand">{role}</p>
        <p className="eyebrow mt-2 text-tx2">{dept}</p>
        <p className="mt-3 text-sm leading-relaxed text-tx2">{bio}</p>
      </div>
    </article>
  )
}

export function Team() {
  const { t } = useApp()
  const groups = [t('Executive Board', 'المكتب التنفيذي'), t('Department Managers', 'مسؤولو الإدارات'), t('Team', 'الفريق'), t('Trainers', 'المكوّنون'), t('Volunteers', 'المتطوعون')]
  return (
    <>
      <PageHero crumb={t('Team', 'الفريق')} eyebrow={t('TEAM', 'الفريق')} title={[t('THE PEOPLE', 'الأشخاص'), t('BEHIND IT.', 'خلف العمل.')]} lead={t('Youth LED Algeria is run by young volunteers organised in an Executive Board and five departments.', 'يديرها شباب متطوعون منظّمون في مكتب تنفيذي وخمس إدارات.')} />
      <section className="sec bg-bg">
        <div className="wrap">
          <Eyebrow>{t('EXECUTIVE BOARD FUNCTIONS', 'وظائف المكتب التنفيذي')}</Eyebrow>
          <div className="mt-10">
            <div className="mx-auto w-fit rounded-2xl bg-[#0b2c66] px-8 py-5 text-center text-white dark:bg-[#102955]"><p className="eyebrow text-accent">01</p><p className="t-h4 mt-1">{t(BOARD[0].en, BOARD[0].ar)}</p></div>
            <div className="mx-auto h-8 w-px bg-ink/25" aria-hidden />
            <ul className="grid gap-3 border-t border-ink/25 pt-8 sm:grid-cols-2 lg:grid-cols-5">
              {BOARD.slice(1).map((b, i) => (
                <li key={i} className="card p-5"><p className="t-num text-xs text-brand" dir="ltr">0{i + 2}</p><p className="t-h4 mt-2 text-ink">{t(b.en, b.ar)}</p></li>
              ))}
            </ul>
          </div>
          <div className="mt-20 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {groups.map((g, i) => (
              <Reveal key={i} delay={i * 60} className="rounded-2xl border border-dashed border-bd p-7">
                <p className="eyebrow text-tx2">{g}</p>
                <p className="mt-3 text-[15px] leading-relaxed text-tx2">{t('Portraits, names and roles will appear here once supplied by Youth LED Algeria.', 'ستظهر هنا الصور والأسماء والأدوار فور تزويدنا بها من الجمعية.')}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
      <Departments />
      <JoinBand />
    </>
  )
}

/* ───────── NEWS ───────── */
export function News() {
  const { t } = useApp()
  const [c, setC] = useState('all')
  const cats = [t('Youth Stories', 'قصص شبابية'), t('Projects', 'المشاريع'), t('Events', 'فعاليات'), t('Training', 'التكوين'), t('Opportunities', 'فرص'), t('International', 'دولي')]
  return (
    <>
      <PageHero crumb={t('News', 'الأخبار')} eyebrow={t('STORIES & NEWS', 'قصص وأخبار')} title={[t('STORIES FROM', 'قصص من'), t('THE FIELD.', 'الميدان.')]} />
      <section className="bg-bg2 pt-12">
        <div className="wrap">
          <Chips value={c} onChange={setC} items={[{ k: 'all', label: t('All', 'الكل') }, ...cats.map((x) => ({ k: x, label: x }))]} />
        </div>
        <Stories full />
      </section>
      <section className="sec bg-bg">
        <div className="wrap">
          <Eyebrow>{t('OPPORTUNITIES', 'الفرص')}</Eyebrow>
          <h2 className="t-h2 mb-10 mt-6 text-ink">{t('Take part', 'شارك')}</h2>
          <Opportunities />
          <p className="mt-4 text-xs text-tx2">{t('Sample entries. Live calls will be published here.', 'إدخالات تجريبية. ستُنشر النداءات الفعلية هنا.')}</p>
        </div>
      </section>
    </>
  )
}

/* ───────── FORMS ───────── */
function Field({ label, children }: { label: string; children: ReactNode }) {
  return (
    <label className="block">
      <span className="mb-2 block text-sm font-semibold text-ink">{label}</span>
      {children}
    </label>
  )
}
const inputCls = 'min-h-[52px] w-full rounded-xl border border-bd bg-surface px-4 text-base text-tx placeholder:text-tx2/70 transition-colors focus:border-brand disabled:opacity-50'

function ContactForm({ topics }: { topics: string[] }) {
  const { t } = useApp()
  const [state, setState] = useState<'idle' | 'loading' | 'done'>('idle')
  const [topic, setTopic] = useState(topics[0])
  return state === 'done' ? (
    <div className="rounded-2xl border border-bd bg-surface p-8" role="status">
      <span className="grid h-12 w-12 place-items-center rounded-full bg-accent text-[#0b2c66]"><Check /></span>
      <p className="t-h3 mt-5 text-ink">{t('Thank you.', 'شكراً لك.')}</p>
      <p className="t-body mt-2 text-tx2">{t('Your message is ready. For now, please also write to us at', 'رسالتك جاهزة. في الوقت الحالي، يرجى مراسلتنا أيضاً على')} {CONTACT.email}.</p>
    </div>
  ) : (
    <form onSubmit={(e) => { e.preventDefault(); setState('loading'); setTimeout(() => setState('done'), 900) }} className="grid gap-5 sm:grid-cols-2">
      <div className="sm:col-span-2">
        <span className="mb-3 block text-sm font-semibold text-ink">{t('Topic', 'الموضوع')}</span>
        <Chips value={topic} onChange={setTopic} items={topics.map((x) => ({ k: x, label: x }))} />
      </div>
      <Field label={t('Name', 'الاسم')}><input required className={inputCls} autoComplete="name" /></Field>
      <Field label={t('Organisation', 'المؤسسة')}><input className={inputCls} autoComplete="organization" /></Field>
      <Field label={t('Country', 'البلد')}><input className={inputCls} autoComplete="country-name" /></Field>
      <Field label={t('Email', 'البريد الإلكتروني')}><input required type="email" className={inputCls} autoComplete="email" dir="ltr" /></Field>
      <div className="sm:col-span-2"><Field label={t('Message', 'الرسالة')}><textarea required rows={5} className={`${inputCls} py-3`} /></Field></div>
      <div className="sm:col-span-2"><Btn type="submit" loading={state === 'loading'}>{t('Send Message', 'إرسال الرسالة')}</Btn></div>
    </form>
  )
}

export function Contact() {
  const { t } = useApp()
  const topics = [t('General Inquiry', 'استفسار عام'), t('International / Erasmus+', 'دولي / إيراسموس+'), t('Partnership', 'شراكة'), t('Training', 'تكوين'), t('Media', 'إعلام'), t('Other', 'أخرى')]
  return (
    <>
      <PageHero crumb={t('Contact', 'اتصل بنا')} eyebrow={t('CONTACT', 'اتصل بنا')} title={[t("LET'S TALK.", 'لنتحدّث.')]} />
      <section className="sec bg-bg">
        <div className="wrap grid gap-14 lg:grid-cols-[4fr_8fr] lg:gap-20">
          <ul className="space-y-6">
            <li><a href={`mailto:${CONTACT.email}`} className="flex items-start gap-4 break-all text-ink hover:text-brand"><Mail className="mt-1 shrink-0 text-brand" size={22} strokeWidth={1.75} />{CONTACT.email}</a></li>
            <li><a href={`tel:${CONTACT.phone.replace(/\s/g, '')}`} dir="ltr" className="flex items-center gap-4 text-ink hover:text-brand"><Phone className="shrink-0 text-brand" size={22} strokeWidth={1.75} />{CONTACT.phone}</a></li>
            <li><a href={`https://instagram.com/${CONTACT.instagram}`} dir="ltr" className="flex items-center gap-4 text-ink hover:text-brand"><Instagram className="shrink-0 text-brand" size={22} strokeWidth={1.75} />@{CONTACT.instagram}</a></li>
          </ul>
          <ContactForm topics={topics} />
        </div>
      </section>
    </>
  )
}

export function Partner() {
  const { t } = useApp()
  return (
    <>
      <PageHero crumb={t('Partner With Us', 'كن شريكنا')} eyebrow={t('PARTNER WITH US', 'كن شريكنا')} title={[t('A LOCAL PARTNER', 'شريك محلي'), t('BUILT FOR REAL', 'مبني لانخراط')]} lead={t('Youth engagement, delivered. Twelve capabilities, shown through evidence rather than claims.', 'انخراط شبابي حقيقي. اثنتا عشرة قدرة، تُثبتها الأدلة لا الادعاءات.')} />
      <section className="sec bg-bg">
        <div className="wrap">
          <h2 className="t-h2 max-w-[18ch] text-ink"><MaskLines lines={[t('YOUTH ENGAGEMENT.', 'انخراط شبابي.')]} /></h2>
          <ul className="mt-14 grid border-t border-bd sm:grid-cols-2 lg:grid-cols-3">
            {CAPS.map((c, i) => (
              <Reveal as="li" key={i} delay={(i % 3) * 60} className="flex items-center gap-4 border-b border-bd py-6 sm:pe-6">
                <span className="t-num text-xs text-brand" dir="ltr">{String(i + 1).padStart(2, '0')}</span>
                <span className="t-h4 text-ink">{t(c.en, c.ar)}</span>
              </Reveal>
            ))}
          </ul>
        </div>
      </section>
      <section className="sec bg-tint">
        <div className="wrap grid gap-14 lg:grid-cols-[4fr_8fr] lg:gap-20">
          <div><Eyebrow>{t('START A CONVERSATION', 'ابدأ النقاش')}</Eyebrow><h2 className="t-h2 mt-6 text-ink">{t('Tell us about your project.', 'حدّثنا عن مشروعك.')}</h2></div>
          <ContactForm topics={[t('Partnership', 'شراكة'), t('International / Erasmus+', 'دولي / إيراسموس+'), t('Training', 'تكوين'), t('Media', 'إعلام')]} />
        </div>
      </section>
    </>
  )
}

export function JoinPage() {
  const { t } = useApp()
  return (
    <>
      <PageHero crumb={t('Join Youth LED', 'انضمّ إلينا')} eyebrow={t('JOIN', 'انضمّ')} title={[t('YOUR NEXT INITIATIVE', 'مبادرتك القادمة'), t('CAN START HERE.', 'تبدأ من هنا.')]} lead={t('Learn, participate, meet people and build. There is a place for you.', 'تعلّم وشارك والتق بالناس وابنِ. هناك مكان لك.')} />
      <section className="sec bg-bg">
        <div className="wrap grid gap-14 lg:grid-cols-[4fr_8fr] lg:gap-20">
          <div><Eyebrow>{t('OPPORTUNITIES', 'الفرص')}</Eyebrow><h2 className="t-h2 mt-6 text-ink">{t('Ways to take part', 'طرق المشاركة')}</h2><p className="mt-4 text-xs text-tx2">{t('Sample entries.', 'إدخالات تجريبية.')}</p></div>
          <Opportunities />
        </div>
      </section>
      <section className="sec bg-tint">
        <div className="wrap grid gap-14 lg:grid-cols-[4fr_8fr] lg:gap-20">
          <div><h2 className="t-h2 text-ink">{t('Say hello', 'قل مرحباً')}</h2></div>
          <ContactForm topics={[t('Join the community', 'الانضمام للمجتمع'), t('Volunteer', 'التطوع'), t('Attend a programme', 'حضور برنامج')]} />
        </div>
      </section>
    </>
  )
}

export function NotFound() {
  const { t } = useApp()
  return (
    <section className="on-navy grid min-h-[100svh] place-items-center bg-[#0b2c66] px-6 text-center text-white dark:bg-[#0b2148]">
      <div>
        <p className="t-num text-[clamp(6rem,24vw,16rem)]" dir="ltr">4<span className="text-accent">0</span>4</p>
        <h1 className="t-h3 mt-4">{t('This page has not been built yet.', 'هذه الصفحة لم تُبنَ بعد.')}</h1>
        <div className="mt-8"><Btn to="/" variant="accent">{t('Back to home', 'العودة إلى الرئيسية')}</Btn></div>
      </div>
    </section>
  )
}

export { STORIES, IMG }
