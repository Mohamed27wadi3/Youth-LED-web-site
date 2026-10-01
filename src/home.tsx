import { useEffect, useRef, useState, type CSSProperties } from 'react'
import {
  Users, Briefcase, Lightbulb, MessagesSquare, Sprout, Network, Plus, Minus, Globe2, Quote,
} from 'lucide-react'
import {
  Arrow, Btn, CountUp, Eyebrow, Img, Link, MaskLines, Reveal, reducedMotion, useApp, useScrollProgress,
} from './lib'
import {
  BOARD, CAPS, DEPARTMENTS, GOALS, IMG, INTL, OPPS, PILLARS, PROJECTS, STAGES, STATS, STORIES, WORKS,
} from './data'

/* ───────────────────────── HERO ───────────────────────── */
export function Hero() {
  const { t } = useApp()
  const ref = useRef<HTMLElement>(null)
  useEffect(() => {
    if (reducedMotion()) return
    let raf = 0
    const on = () => {
      raf = 0
      const el = ref.current
      if (!el) return
      const p = Math.min(1, Math.max(0, window.scrollY / window.innerHeight))
      const k = window.innerWidth < 768 ? 0.4 : window.innerWidth < 1100 ? 0.5 : 1
      el.style.setProperty('--p', String(p * k))
    }
    const h = () => !raf && (raf = requestAnimationFrame(on))
    window.addEventListener('scroll', h, { passive: true })
    return () => window.removeEventListener('scroll', h)
  }, [])
  const d = (n: number) => ({ '--d': `${n}ms` }) as CSSProperties
  return (
    <section ref={ref} className="on-navy relative isolate min-h-[100svh] overflow-hidden bg-[#0b2c66] text-white" style={{ '--p': 0 } as CSSProperties}>
      <div className="absolute inset-0 -z-10" style={{ transform: 'translate3d(0,calc(var(--p) * 7%),0)' }}>
        <div className="a-zoom h-[114%] w-full -translate-y-[6%]">
          <img src={IMG.hero} alt="Young participants collaborating during a workshop (placeholder for an authentic Youth LED photo)" className="h-full w-full object-cover" />
        </div>
      </div>
      <div className="absolute inset-0 -z-10 bg-[#0b2c66]/70" />
      <div className="absolute inset-x-0 bottom-0 -z-10 h-2/3 bg-gradient-to-t from-[#06152f]/85 to-transparent" />

      <div className="wrap flex min-h-[100svh] flex-col justify-end pb-8 pt-36 sm:pb-12">
        <p className="eyebrow a-rise mb-7 flex flex-wrap items-center gap-x-4 gap-y-1 text-white/90" style={d(150)}>
          <span className="h-[3px] w-6 rounded-full bg-accent" aria-hidden />
          <span>{t('YOUTH LED ALGERIA', 'شباب ليد الجزائر')}</span>
          <span className="text-white/60">{t('EST. 2018 • ALGERIA', 'تأسست 2018 • الجزائر')}</span>
        </p>
        <h1 className="t-hero max-w-[16ch]" style={{ transform: 'translate3d(0,calc(var(--p) * -3.5%),0)' }}>
          <span className="ml a-line" style={d(260)}>
            <span>{t('FROM SKILLS', 'من المهارات')}</span>
          </span>
          <span className="ml a-line" style={d(380)}>
            <span>
              {t('TO INITIATIVES', 'إلى المبادرات')}
              <span className="text-accent">.</span>
            </span>
          </span>
        </h1>
        <p className="t-lead a-rise mt-8 max-w-[38rem] text-white/85" style={d(500)}>
          {t(
            'We equip Algerian youth with practical skills, strong networks and real opportunities to lead, build and launch initiatives that create lasting impact.',
            'نزوّد الشباب الجزائري بالمهارات العملية وشبكات العلاقات والفرص الحقيقية ليقودوا ويبنوا ويطلقوا مبادرات تترك أثراً مستداماً.',
          )}
        </p>
        <div className="a-rise mt-9 flex flex-wrap gap-3" style={d(620)}>
          <Btn to="/about">{t('Discover Youth LED', 'اكتشف شباب ليد')}</Btn>
          <Btn to="/partner" variant="inverse">{t('Partner With Us', 'كن شريكنا')}</Btn>
        </div>
        <div className="a-rise mt-14 flex items-end justify-between gap-6 border-t border-white/15 pt-6" style={d(750)}>
          <p className="fd flex flex-wrap items-center gap-x-4 gap-y-1 text-[13px] font-semibold tracking-[0.18em] sm:text-sm" aria-label="Learn, Speak, Build, Connect">
            {PILLARS.map((p, i) => (
              <span key={p.key} className="flex items-center gap-4">
                {t(p.word.en, p.word.ar)}
                {i < 3 && <span className="text-accent" aria-hidden>•</span>}
              </span>
            ))}
          </p>
          <div className="hidden items-center gap-3 sm:flex" aria-hidden>
            <span className="eyebrow text-white/65">{t('Scroll', 'مرّر')}</span>
            <span className="relative block h-12 w-px overflow-hidden bg-white/25">
              <span className="absolute inset-x-0 top-0 block h-full bg-accent" style={{ animation: 'scrollDot 2s var(--ease) infinite' }} />
            </span>
          </div>
        </div>
      </div>
    </section>
  )
}

/* ───────────────────────── STRIP ───────────────────────── */
export function Strip() {
  const { t } = useApp()
  return (
    <section className="border-b border-bd bg-bg2" aria-label={t('Youth LED in numbers', 'شباب ليد بالأرقام')}>
      <div className="wrap">
        <div className="grid grid-cols-2 md:grid-cols-5">
          {STATS.map((s, i) => (
            <Reveal
              key={i}
              delay={i * 80}
              className={`border-bd py-9 md:py-12 ${i % 2 === 1 ? 'ps-6 md:ps-0' : ''} ${i > 0 ? 'md:border-s md:ps-8' : ''} ${i >= 2 ? 'border-t md:border-t-0' : ''} ${i === 4 ? 'col-span-2 md:col-span-1' : ''}`}
            >
              <div className="t-num text-[clamp(2.5rem,4.6vw,4.5rem)] text-ink">
                {s.s ? <CountUp to={s.n} suffix={s.s} /> : <CountUp to={s.n} />}
              </div>
              <p className="mt-3 max-w-[14ch] text-sm leading-snug text-tx2">{t(s.label.en, s.label.ar)}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}

/* ───────────────────────── WHO WE ARE ───────────────────────── */
export function Who() {
  const { t } = useApp()
  return (
    <section className="sec bg-bg">
      <div className="wrap grid items-center gap-12 lg:grid-cols-[5fr_7fr] lg:gap-20">
        <div>
          <Reveal><Eyebrow>{t('WHO WE ARE', 'من نحن')}</Eyebrow></Reveal>
          <h2 className="t-state mt-7 text-ink">
            <MaskLines lines={[t('POTENTIAL IS EVERYWHERE.', 'الإمكانات في كل مكان.'), <span key="b" className="text-brand">{t("OPPORTUNITY ISN'T.", 'أما الفرص فلا.')}</span>]} />
          </h2>
          <Reveal delay={150}>
            <p className="t-lead mt-8 text-tx2">
              {t(
                'Youth LED Algeria is an inter-Wilaya youth association that helps young Algerians strengthen leadership, life skills and social entrepreneurship through experiential non-formal learning and peer-to-peer networking.',
                'شباب ليد الجزائر جمعية شبابية بين الولايات، تساعد الشباب الجزائري على تعزيز القيادة والمهارات الحياتية وريادة الأعمال الاجتماعية عبر التعلّم غير النظامي القائم على التجربة وشبكات الأقران.',
              )}
            </p>
          </Reveal>
          <Reveal delay={250} className="mt-8">
            <Link to="/about" className="tlink text-brand">
              {t('About the association', 'عن الجمعية')} <Arrow />
            </Link>
          </Reveal>
        </div>
        <div className="relative">
          <Reveal kind="clip-s" className="zoom-host overflow-hidden rounded-[20px] bg-tint" >
            <div className="zoom-img aspect-[5/4]" data-cursor="VIEW">
              <Img src={IMG.who} alt="Young people working together around a table (placeholder for an authentic Youth LED photo)" />
            </div>
          </Reveal>
          <Reveal delay={450} className="absolute -bottom-6 end-4 max-w-[17rem] rounded-2xl border border-bd bg-surface p-5 shadow-[0_10px_30px_rgba(11,44,102,0.12)] sm:end-8">
            <p className="eyebrow text-brand">{t('Since 2018', 'منذ 2018')}</p>
            <p className="mt-2 text-sm leading-relaxed text-tx">{t('Non-profit, inter-Wilaya, for young people aged 18–35.', 'جمعية غير ربحية بين الولايات، للشباب من 18 إلى 35 سنة.')}</p>
          </Reveal>
        </div>
      </div>
    </section>
  )
}

/* ───────────────────────── POTENTIAL → IMPACT ───────────────────────── */
export function Pipeline() {
  const { t } = useApp()
  const ref = useRef<HTMLDivElement>(null)
  const p = useScrollProgress(ref)
  const n = STAGES.length
  const idx = Math.min(n - 1, Math.floor(p * n))
  return (
    <section className="bg-tint">
      {/* Desktop: sticky horizontal storytelling */}
      <div ref={ref} className="relative hidden h-[360vh] lg:block">
        <div className="sticky top-0 flex h-screen flex-col justify-between overflow-hidden py-28">
          <div className="wrap flex w-full items-start justify-between">
            <Eyebrow>{t('THE TRANSFORMATION', 'مسار التحوّل')}</Eyebrow>
            <span className="t-num text-sm text-tx2" dir="ltr">0{idx + 1} / 0{n}</span>
          </div>
          <div className="wrap relative w-full flex-1">
            {STAGES.map((s, i) => {
              const state = i === idx ? 'active' : i < idx ? 'past' : 'next'
              return (
                <div
                  key={i}
                  aria-hidden={state !== 'active'}
                  className="absolute inset-x-[clamp(20px,5.6vw,80px)] top-1/2 transition-[opacity,transform] duration-[600ms] ease-[var(--ease)]"
                  style={{
                    opacity: state === 'active' ? 1 : 0,
                    transform: `translateY(calc(-50% + ${state === 'active' ? 0 : state === 'past' ? -24 : 24}px))`,
                  }}
                >
                  <p className="t-num text-[clamp(3rem,10vw,9.5rem)] text-brand" style={{ fontFamily: 'var(--fd)' }}>{t(s.word.en, s.word.ar)}</p>
                  <p className="t-lead mt-6 text-ink">{t(s.desc.en, s.desc.ar)}</p>
                </div>
              )
            })}
          </div>
          <div className="wrap w-full">
            <div className="relative">
              <div className="absolute inset-x-0 top-[7px] h-px bg-ink/20" />
              <div
                className="absolute start-0 top-[6px] h-[3px] rounded-full bg-accent transition-[width] duration-300 ease-out"
                style={{ width: `${Math.min(80, p * n * 20)}%` }}
              />
              <ol className="relative grid grid-cols-5">
                {STAGES.map((s, i) => (
                  <li key={i} className={`transition-opacity duration-500 ${i <= idx ? 'opacity-100' : 'opacity-40'}`}>
                    <span className={`block h-[15px] w-[15px] rounded-full border-2 transition-colors duration-500 ${i === idx ? 'border-brand bg-brand' : i < idx ? 'border-ink bg-ink' : 'border-ink bg-tint'}`} />
                    <span className={`eyebrow mt-4 block ${i === idx ? 'text-brand' : 'text-ink'}`}>{t(s.word.en, s.word.ar)}</span>
                  </li>
                ))}
              </ol>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile / tablet: vertical progression */}
      <div className="sec wrap lg:hidden">
        <Eyebrow>{t('THE TRANSFORMATION', 'مسار التحوّل')}</Eyebrow>
        <ol className="relative mt-10 border-s-2 border-ink/15 ps-8">
          {STAGES.map((s, i) => (
            <Reveal as="li" key={i} className="relative pb-12 last:pb-0">
              <span className={`absolute -start-[41px] top-2 h-4 w-4 rounded-full border-2 ${i === n - 1 ? 'border-accent bg-accent' : 'border-brand bg-tint'}`} />
              <p className="t-num text-[clamp(2.25rem,11vw,4.5rem)] text-brand">{t(s.word.en, s.word.ar)}</p>
              <p className="t-body mt-3 text-ink">{t(s.desc.en, s.desc.ar)}</p>
            </Reveal>
          ))}
        </ol>
      </div>
    </section>
  )
}

/* ───────────────────────── PILLARS ───────────────────────── */
export function Pillars() {
  const { t } = useApp()
  const ref = useRef<HTMLDivElement>(null)
  const p = useScrollProgress(ref)
  const idx = Math.min(3, Math.floor(p * 4))
  return (
    <section className="bg-bg">
      <div className="wrap pt-[clamp(72px,10vw,140px)]">
        <Reveal><Eyebrow>{t('LEARN · SPEAK · BUILD · CONNECT', 'تعلّم · تحدّث · ابنِ · تواصل')}</Eyebrow></Reveal>
        <h2 className="t-h2 mt-6 max-w-[18ch] text-ink">
          <MaskLines lines={[t('HOW WE TURN', 'كيف نحوّل'), t('LEARNING INTO ACTION', 'التعلّم إلى عمل')]} />
        </h2>
      </div>

      {/* Desktop sticky storytelling */}
      <div ref={ref} className="relative hidden h-[400vh] lg:block">
        <div className="sticky top-0 flex h-screen items-center">
          <div className="wrap grid w-full grid-cols-[6fr_6fr] items-center gap-16">
            <div>
              <ul>
                {PILLARS.map((pl, i) => (
                  <li key={pl.key} className={`t-num text-[clamp(4rem,9.5vw,8.75rem)] leading-[1.02] transition-[opacity,transform,color] duration-[700ms] ease-[var(--ease)] ${i === idx ? 'translate-x-0 text-ink opacity-100' : 'text-ink opacity-[0.16] ltr:-translate-x-0 rtl:translate-x-0'}`} style={{ fontFamily: 'var(--fd)' }}>
                    <span className="inline-flex items-center gap-5">
                      {t(pl.word.en, pl.word.ar)}
                      <span className={`h-[6px] rounded-full bg-accent transition-all duration-700 ease-[var(--ease)] ${i === idx ? 'w-14' : 'w-0'}`} aria-hidden />
                    </span>
                  </li>
                ))}
              </ul>
              <div className="relative mt-10 h-[9.5rem] max-w-md">
                {PILLARS.map((pl, i) => (
                  <div key={pl.key} className="absolute inset-0 transition-[opacity,transform] duration-[700ms] ease-[var(--ease)]" style={{ opacity: i === idx ? 1 : 0, transform: `translateY(${i === idx ? 0 : 20}px)` }} aria-hidden={i !== idx}>
                    <p className="t-h4 text-brand">{t(pl.line.en, pl.line.ar)}</p>
                    <p className="t-body mt-3 text-tx2">{t(pl.desc.en, pl.desc.ar)}</p>
                  </div>
                ))}
              </div>
              <div className="mt-6 flex max-w-md items-center gap-4">
                <span className="t-num text-xs text-tx2" dir="ltr">0{idx + 1}</span>
                <span className="relative h-[3px] flex-1 overflow-hidden rounded-full bg-bd">
                  <span className="absolute inset-y-0 start-0 rounded-full bg-accent transition-[width] duration-500 ease-[var(--ease)]" style={{ width: `${((idx + 1) / 4) * 100}%` }} />
                </span>
                <span className="t-num text-xs text-tx2" dir="ltr">04</span>
              </div>
            </div>
            <div className="relative aspect-[4/5] max-h-[72vh] w-full overflow-hidden rounded-[20px] bg-tint" data-cursor="EXPLORE">
              {PILLARS.map((pl, i) => (
                <div key={pl.key} className="absolute inset-0 transition-[opacity,transform] duration-[700ms] ease-[var(--ease)]" style={{ opacity: i === idx ? 1 : 0, transform: `scale(${i === idx ? 1 : 1.06})` }}>
                  <Img src={pl.img} alt={`${pl.word.en} — documentary workshop image (placeholder)`} />
                  <div className="absolute inset-0 bg-[#0b2c66]/10" />
                </div>
              ))}
              <div className="absolute bottom-5 start-5 rounded-lg bg-[#0b2c66] px-3 py-2 text-xs font-semibold tracking-[0.16em] text-white">
                <span className="text-accent">0{idx + 1}</span> &nbsp;{t(PILLARS[idx].word.en, PILLARS[idx].word.ar)}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile stacked */}
      <div className="wrap space-y-16 pb-[clamp(72px,10vw,140px)] pt-12 lg:hidden">
        {PILLARS.map((pl, i) => (
          <Reveal key={pl.key}>
            <p className="t-num text-xs text-tx2" dir="ltr">0{i + 1}</p>
            <p className="t-num mt-2 text-[clamp(3rem,15vw,6rem)] text-ink">{t(pl.word.en, pl.word.ar)}<span className="text-accent">.</span></p>
            <div className="mt-5 aspect-[4/3] overflow-hidden rounded-[18px] bg-tint"><Img src={pl.img} alt={`${pl.word.en} — documentary workshop image (placeholder)`} /></div>
            <p className="t-h4 mt-6 text-brand">{t(pl.line.en, pl.line.ar)}</p>
            <p className="t-body mt-3 text-tx2">{t(pl.desc.en, pl.desc.ar)}</p>
          </Reveal>
        ))}
      </div>
    </section>
  )
}

/* ───────────────────────── MISSION / VISION / WHY ───────────────────────── */
export function MVW() {
  const { t } = useApp()
  const items = [
    { k: t('MISSION', 'الرسالة'), v: t("Improve young people's lives through innovative, practical non-formal learning programmes.", 'تحسين حياة الشباب عبر برامج تعلّم غير نظامي مبتكرة وعملية.') },
    { k: t('VISION', 'الرؤية'), v: t('A conscious and committed Algerian youth equipped to lead and drive positive community development.', 'شباب جزائري واعٍ وملتزم، يملك ما يلزم لقيادة التنمية المجتمعية الإيجابية.') },
    { k: t('WHY', 'لماذا'), v: t('Close the education-to-labour-market gap by building practical skills, networks and real opportunities.', 'سدّ الفجوة بين التعليم وسوق العمل ببناء المهارات العملية والشبكات والفرص الحقيقية.') },
  ]
  return (
    <section className="sec bg-bg2">
      <div className="wrap grid gap-14 lg:grid-cols-[4fr_8fr] lg:gap-20">
        <div className="lg:sticky lg:top-32 lg:self-start">
          <Reveal><Eyebrow>{t('WHAT DRIVES US', 'ما يحرّكنا')}</Eyebrow></Reveal>
          <h2 className="t-h2 mt-6 text-ink">
            <MaskLines lines={[t('Skills.', 'مهارات.'), t('Networks.', 'شبكات.'), <span key="o" className="text-brand">{t('Opportunities.', 'فرص.')}</span>]} />
          </h2>
          <Reveal delay={200}><p className="t-body mt-6 text-tx2">{t('Young people do not only need motivation. They need all three.', 'الشباب لا يحتاجون إلى الحماس وحده، بل يحتاجون إلى الثلاثة معاً.')}</p></Reveal>
        </div>
        <ol className="border-t border-bd">
          {items.map((it, i) => (
            <Reveal as="li" key={i} delay={i * 80} className="group grid gap-4 border-b border-bd py-10 sm:grid-cols-[5rem_1fr] sm:gap-8 sm:py-14">
              <span className="t-num text-2xl text-brand transition-transform duration-300 ease-[var(--ease)] group-hover:translate-x-1 rtl:group-hover:-translate-x-1" dir="ltr">0{i + 1}<span className="text-accent">.</span></span>
              <div>
                <p className="eyebrow text-tx2">{it.k}</p>
                <p className="t-h3 mt-4 max-w-[26ch] text-ink">{it.v}</p>
              </div>
            </Reveal>
          ))}
        </ol>
      </div>
    </section>
  )
}

/* ───────────────────────── GOALS ───────────────────────── */
const GOAL_ICONS = [Users, Briefcase, Lightbulb, MessagesSquare, Sprout, Network]
export function Goals({ bg = 'bg-tint' }: { bg?: string }) {
  const { t } = useApp()
  const [open, setOpen] = useState(0)
  return (
    <section className={`sec ${bg}`}>
      <div className="wrap grid gap-14 lg:grid-cols-[5fr_7fr] lg:gap-20">
        <div>
          <Reveal><Eyebrow>{t('STRATEGIC GOALS', 'الأهداف الاستراتيجية')}</Eyebrow></Reveal>
          <h2 className="t-h2 mt-6 text-ink">
            <MaskLines lines={[t('Six objectives.', 'ستة أهداف.'), t('One direction.', 'اتجاه واحد.')]} />
          </h2>
          <Reveal delay={150}><p className="t-body mt-6 text-tx2">{t('Everything we run ties back to six strategic objectives, from individual confidence to national reach.', 'كل ما ننفّذه يرتبط بستة أهداف استراتيجية، من ثقة الفرد إلى الانتشار الوطني.')}</p></Reveal>
        </div>
        <div className="border-t border-ink/15" role="list">
          {GOALS.map((g, i) => {
            const Icon = GOAL_ICONS[i]
            const isOpen = open === i
            return (
              <div key={i} className="border-b border-ink/15" role="listitem">
                <h3>
                  <button type="button" aria-expanded={isOpen} onClick={() => setOpen(isOpen ? -1 : i)} className="group flex min-h-[44px] w-full items-center gap-5 py-6 text-start sm:gap-8 sm:py-7">
                    <span className={`t-num text-sm transition-colors duration-300 ${isOpen ? 'text-brand' : 'text-tx2'}`} dir="ltr">0{i + 1}</span>
                    <span className={`t-h3 flex-1 transition-colors duration-300 ${isOpen ? 'text-brand' : 'text-ink group-hover:text-brand'}`}>{t(g.title.en, g.title.ar)}</span>
                    <span className={`grid h-10 w-10 shrink-0 place-items-center rounded-full border transition-colors duration-300 ${isOpen ? 'border-accent bg-accent text-[#0b2c66]' : 'border-ink/25 text-ink'}`} aria-hidden>
                      {isOpen ? <Minus size={18} strokeWidth={2} /> : <Plus size={18} strokeWidth={2} />}
                    </span>
                  </button>
                </h3>
                <div className={`grid transition-[grid-template-rows] duration-[400ms] ease-[var(--ease)] ${isOpen ? 'grid-rows-[1fr]' : 'grid-rows-[0fr]'}`}>
                  <div className="overflow-hidden">
                    <div className="flex items-start gap-5 pb-8 ps-[calc(0.875rem+1.25rem)] sm:ps-[calc(1.5rem+2rem)]">
                      <Icon size={26} strokeWidth={1.75} className="mt-1 shrink-0 text-brand" aria-hidden />
                      <p className="t-body text-ink/80">{t(g.desc.en, g.desc.ar)}</p>
                    </div>
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

/* ───────────────────────── HOW WE WORK ───────────────────────── */
export function HowWeWork() {
  const { t } = useApp()
  const [hover, setHover] = useState(0)
  const pos = [
    [50, 6],
    [94, 50],
    [50, 94],
    [6, 50],
  ]
  return (
    <section className="sec bg-bg">
      <div className="wrap">
        <Reveal><Eyebrow>{t('HOW WE WORK', 'كيف نعمل')}</Eyebrow></Reveal>
        <h2 className="t-h2 mt-6 max-w-[20ch] text-ink">
          <MaskLines lines={[t('HOW WE DRIVE', 'كيف نحقق'), t('PRACTICAL YOUTH IMPACT', 'أثراً شبابياً عملياً')]} />
        </h2>
        <div className="mt-16 grid items-center gap-14 lg:grid-cols-2 lg:gap-24">
          <Reveal className="relative mx-auto aspect-square w-full max-w-[460px]">
            <svg viewBox="0 0 100 100" className="absolute inset-0 h-full w-full" aria-hidden>
              <circle cx="50" cy="50" r="44" fill="none" stroke="var(--bd)" strokeWidth="0.4" />
              <g style={{ transformOrigin: '50px 50px', animation: reducedMotion() ? undefined : 'spin 60s linear infinite' }}>
                <circle cx="50" cy="50" r="44" fill="none" stroke="var(--brand)" strokeWidth="0.5" strokeDasharray="1.2 3.2" />
              </g>
              <circle cx="50" cy="50" r="26" fill="none" stroke="var(--bd)" strokeWidth="0.4" />
              {pos.map(([x, y], i) => (
                <line key={i} x1="50" y1="50" x2={50 + (x - 50) * 0.6} y2={50 + (y - 50) * 0.6} stroke={hover === i ? 'var(--accent)' : 'var(--bd)'} strokeWidth="0.6" style={{ transition: 'stroke .3s' }} />
              ))}
            </svg>
            <div className="absolute inset-0 grid place-items-center">
              <div className="text-center">
                <p className="t-num text-3xl text-ink sm:text-4xl">{t('YOUTH', 'الشباب')}</p>
                <p className="eyebrow mt-2 text-tx2">{t('at the centre', 'في المركز')}</p>
              </div>
            </div>
            {pos.map(([x, y], i) => (
              <button
                key={i}
                type="button"
                onMouseEnter={() => setHover(i)}
                onFocus={() => setHover(i)}
                aria-label={t(WORKS[i].title.en, WORKS[i].title.ar)}
                className={`absolute grid h-14 w-14 -translate-x-1/2 -translate-y-1/2 place-items-center rounded-full border-2 text-sm font-bold transition-all duration-300 ease-[var(--ease)] ${hover === i ? 'scale-110 border-accent bg-accent text-[#0b2c66]' : 'border-brand bg-surface text-brand'}`}
                style={{ left: `${x}%`, top: `${y}%` }}
                dir="ltr"
              >
                0{i + 1}
              </button>
            ))}
          </Reveal>
          <ol>
            {WORKS.map((w, i) => (
              <li key={i} onMouseEnter={() => setHover(i)} className={`flex gap-6 border-t border-bd py-7 transition-opacity duration-300 last:border-b ${hover === i ? 'opacity-100' : 'opacity-55'}`}>
                <span className="t-num text-sm text-brand" dir="ltr">0{i + 1}</span>
                <div>
                  <h3 className="t-h4 text-ink">{t(w.title.en, w.title.ar)}</h3>
                  <p className="t-body mt-2 text-tx2">{t(w.desc.en, w.desc.ar)}</p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  )
}

/* ───────────────────────── GREEN IMPACT ───────────────────────── */
export function Green() {
  const { t } = useApp()
  const steps = [
    { k: t('Challenge', 'التحدّي'), v: t('How can young people turn environmental concern into practical, local economic action?', 'كيف يحوّل الشباب الاهتمام بالبيئة إلى عمل اقتصادي محلي وعملي؟') },
    { k: t('Learning', 'التعلّم'), v: t('Participants were trained in green entrepreneurship and circular-economy thinking through hands-on, non-formal methods.', 'تدرّب المشاركون على ريادة الأعمال الخضراء وتفكير الاقتصاد الدائري بأساليب عملية غير نظامية.') },
    { k: t('Youth participation', 'مشاركة الشباب'), v: t('Young people shaped ideas themselves, as designers and decision-makers rather than spectators.', 'صاغ الشباب الأفكار بأنفسهم، كمصمّمين وصانعي قرار لا كمتفرجين.') },
    { k: t('Community action', 'العمل المجتمعي'), v: t('Ideas moved out of the training room and into local awareness and action.', 'خرجت الأفكار من قاعة التدريب إلى التوعية والعمل المحلي.') },
    { k: t('Results', 'النتائج'), v: t('300+ young people engaged and sensitised. 115 participants trained.', 'أكثر من 300 شاب وشابة تم إشراكهم وتحسيسهم، و115 مشاركاً تم تدريبهم.') },
  ]
  const [a, setA] = useState(0)
  return (
    <section className="on-navy relative isolate overflow-hidden bg-[#06152f] text-white">
      <div className="absolute inset-0 -z-10">
        <Img src={IMG.green} alt="Green Impact project participants (placeholder for an authentic Youth LED photo)" />
        <div className="absolute inset-0 bg-[#06152f]/82" />
      </div>
      <div className="wrap sec">
        <div className="flex flex-wrap gap-2" aria-label="Categories">
          {[t('GREEN ENTREPRENEURSHIP', 'ريادة الأعمال الخضراء'), t('CIRCULAR ECONOMY', 'الاقتصاد الدائري'), t('YOUTH CAPACITY BUILDING', 'بناء قدرات الشباب')].map((c) => (
            <span key={c} className="eyebrow rounded-full border border-white/25 px-4 py-2 text-white/85">{c}</span>
          ))}
        </div>
        <h2 className="t-state mt-10 max-w-[14ch]">
          <MaskLines lines={[t('GREEN IDEAS.', 'أفكار خضراء.'), <span key="r">{t('REAL LOCAL ACTION', 'عمل محلي حقيقي')}<span className="text-accent">.</span></span>]} />
        </h2>
        <div className="mt-16 grid gap-12 lg:grid-cols-[7fr_5fr] lg:gap-20">
          <div>
            <div role="tablist" aria-label="Green Impact story" className="flex flex-wrap gap-2">
              {steps.map((s, i) => (
                <button key={i} role="tab" type="button" aria-selected={a === i} onClick={() => setA(i)} className={`min-h-[44px] rounded-lg border px-4 text-sm font-semibold transition-colors duration-200 ${a === i ? 'border-accent bg-accent text-[#0b2c66]' : 'border-white/25 text-white/85 hover:bg-white/10'}`}>
                  <span className="opacity-70" dir="ltr">0{i + 1}</span> &nbsp;{s.k}
                </button>
              ))}
            </div>
            <div role="tabpanel" key={a} className="a-rise mt-10 min-h-[9rem]">
              <p className="t-h3 max-w-[30ch]">{steps[a].v}</p>
            </div>
            <div className="mt-8">
              <Btn to="/projects/green-impact" variant="inverse" cursor="OPEN">{t('Read the project', 'اقرأ عن المشروع')}</Btn>
            </div>
          </div>
          <div className="grid content-start gap-8 border-t border-white/15 pt-8 lg:border-s lg:border-t-0 lg:ps-12 lg:pt-0">
            <div>
              <p className="t-num text-[clamp(3.5rem,7vw,6rem)]"><CountUp to={300} suffix="+" /></p>
              <p className="mt-3 text-white/80">{t('young people engaged and sensitised', 'شاب وشابة تم إشراكهم وتحسيسهم')}</p>
            </div>
            <div>
              <p className="t-num text-[clamp(3.5rem,7vw,6rem)]"><CountUp to={115} /></p>
              <p className="mt-3 text-white/80">{t('participants trained', 'مشاركاً تم تدريبهم')}</p>
            </div>
            <p className="text-xs leading-relaxed text-white/60">{t('Historical project evidence.', 'معطيات تاريخية موثّقة من المشروع.')}</p>
          </div>
        </div>
      </div>
    </section>
  )
}

/* ───────────────────────── PROJECTS ───────────────────────── */
export function ProjectsShowcase() {
  const { t } = useApp()
  const [f, ...rest] = PROJECTS
  const med = rest.slice(0, 2)
  const more = rest.slice(2)
  return (
    <section className="sec bg-bg">
      <div className="wrap">
        <div className="flex flex-wrap items-end justify-between gap-6">
          <div>
            <Reveal><Eyebrow>{t('SELECTED ACTIVITIES', 'أنشطة مختارة')}</Eyebrow></Reveal>
            <h2 className="t-h2 mt-6 text-ink"><MaskLines lines={[t('Real events.', 'فعاليات حقيقية.'), t('Real skills.', 'مهارات حقيقية.')]} /></h2>
          </div>
          <Link to="/projects" className="tlink text-brand">{t('All projects', 'كل المشاريع')} <Arrow /></Link>
        </div>
        <div className="mt-14 grid gap-6 lg:grid-cols-12">
          <ProjectCard p={f} big className="lg:col-span-7 lg:row-span-2" />
          {med.map((p, i) => <ProjectCard key={p.id} p={p} delay={(i + 1) * 100} className="lg:col-span-5" />)}
        </div>
        <ul className="mt-14 border-t border-bd">
          {more.map((p) => (
            <li key={p.id}>
              <Link to={`/projects/${p.id}`} data-cursor="VIEW" className="group grid grid-cols-[1fr_auto] items-center gap-4 border-b border-bd py-6 transition-colors sm:grid-cols-[14rem_1fr_auto_auto] sm:gap-8">
                <span className="eyebrow hidden text-tx2 sm:block">{t(p.cat.en, p.cat.ar)}</span>
                <span className="t-h4 text-ink transition-colors group-hover:text-brand">{t(p.title.en, p.title.ar)}</span>
                <span className="hidden h-14 w-24 overflow-hidden rounded-lg bg-tint sm:block"><Img src={p.img} alt="" /></span>
                <span className="grid h-11 w-11 place-items-center rounded-full border border-bd text-ink transition-all duration-300 group-hover:border-accent group-hover:bg-accent group-hover:text-[#0b2c66]"><Arrow /></span>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}

export function ProjectCard({ p, big, className = '', delay = 0 }: { p: (typeof PROJECTS)[number]; big?: boolean; className?: string; delay?: number }) {
  const { t } = useApp()
  return (
    <Reveal delay={delay} className={className}>
      <Link to={`/projects/${p.id}`} data-cursor="VIEW" className={`card zoom-host group flex h-full flex-col overflow-hidden ${big ? '' : 'sm:flex-row lg:flex-col xl:flex-row'}`}>
        <div className={`zoom-img shrink-0 overflow-hidden bg-tint ${big ? 'aspect-[4/3] lg:aspect-auto lg:min-h-[26rem] lg:flex-1' : 'aspect-[16/10] sm:w-2/5 sm:aspect-auto lg:aspect-[16/10] lg:w-full xl:aspect-auto xl:w-2/5'}`}>
          <Img src={p.img} alt={`${p.title.en} (placeholder image)`} />
        </div>
        <div className="flex flex-1 flex-col p-6 sm:p-8">
          <p className="eyebrow text-brand">{t(p.cat.en, p.cat.ar)}</p>
          <h3 className={`mt-3 text-ink ${big ? 't-h3' : 't-h4'}`}>{t(p.title.en, p.title.ar)}</h3>
          <p className="t-body mt-3 text-tx2 !text-[15px]">{t(p.outcome.en, p.outcome.ar)}</p>
          <span className="tlink mt-auto pt-6 text-brand self-start">{t('View Project', 'عرض المشروع')} <Arrow /></span>
        </div>
      </Link>
    </Reveal>
  )
}

/* ───────────────────────── IMPACT NUMBERS ───────────────────────── */
export function ImpactNumbers({ compact = false }: { compact?: boolean }) {
  const { t } = useApp()
  const nums = [
    { n: 500, s: '+', l: t('Beneficiaries reached', 'مستفيد تم الوصول إليهم'), d: t('Young people reached through workshops, trainings and events.', 'شباب وصلت إليهم الورشات والدورات والفعاليات.') },
    { n: 50, s: '+', l: t('Active volunteers', 'متطوع نشط'), d: t('The people who organise, facilitate and carry every activity.', 'من ينظّمون وييسّرون ويحملون كل نشاط.') },
    { n: 60, s: '+', l: t('Activities conducted', 'نشاط منجز'), d: t('Trainings, dialogues, meetups and community projects.', 'دورات وحوارات ولقاءات ومشاريع مجتمعية.') },
    { n: 7, s: '+', l: t('Provinces', 'ولايات'), d: t('An inter-Wilaya association with local bureaux.', 'جمعية بين الولايات بمكاتب محلية.') },
    { n: 8, s: '', l: t('Years active', 'سنوات من النشاط'), d: t('Continuous work since 2018.', 'عمل متواصل منذ 2018.') },
  ]
  return (
    <section className="sec bg-bg2">
      <div className="wrap">
        {!compact && (
          <>
            <Reveal><Eyebrow>{t('IMPACT', 'الأثر')}</Eyebrow></Reveal>
            <h2 className="t-state mt-7 max-w-[15ch] text-ink">
              <MaskLines lines={[t('IMPACT IS WHAT', 'الأثر هو ما'), t('HAPPENS AFTER', 'يحدث بعد'), <span key="x" className="text-brand">{t('THE WORKSHOP ENDS.', 'أن تنتهي الورشة.')}</span>]} />
            </h2>
          </>
        )}
        <div className={`grid gap-x-10 gap-y-14 lg:grid-cols-12 ${compact ? '' : 'mt-20'}`}>
          <Reveal className="lg:col-span-6">
            <p className="t-num text-[clamp(5rem,15vw,12rem)] text-ink"><CountUp to={500} suffix="+" duration={1800} /></p>
            <p className="t-h3 mt-4 text-ink">{nums[0].l}</p>
            <p className="t-body mt-3 text-tx2">{nums[0].d}</p>
          </Reveal>
          <div className="grid gap-x-10 gap-y-12 sm:grid-cols-2 lg:col-span-6 lg:pt-6">
            {nums.slice(1).map((x, i) => (
              <Reveal key={i} delay={i * 90} className="border-t-2 border-ink/15 pt-6">
                <p className="t-num text-[clamp(3rem,5.5vw,4.75rem)] text-ink"><CountUp to={x.n} suffix={x.s} /></p>
                <p className="t-h4 mt-3 text-ink">{x.l}</p>
                <p className="mt-2 text-[15px] leading-relaxed text-tx2">{x.d}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

/* ───────────────────────── INTERNATIONAL ───────────────────────── */
export function International({ cta = true }: { cta?: boolean }) {
  const { t } = useApp()
  return (
    <section className="on-navy sec relative overflow-hidden bg-[#0b2c66] text-white dark:bg-[#0b2148]">
      <Globe2 className="pointer-events-none absolute -end-24 -top-10 h-[34rem] w-[34rem] text-white/[0.05]" strokeWidth={0.6} aria-hidden />
      <div className="wrap relative">
        <Reveal><Eyebrow onNavy>{t('INTERNATIONAL COOPERATION', 'التعاون الدولي')}</Eyebrow></Reveal>
        <h2 className="t-state mt-7 max-w-[14ch]">
          <MaskLines lines={[t('LOCAL ROOTS.', 'جذور محلية.'), <span key="i">{t('INTERNATIONAL CONNECTIONS', 'روابط دولية')}<span className="text-accent">.</span></span>]} />
        </h2>
        <div className="mt-14 grid gap-14 lg:grid-cols-[6fr_6fr] lg:gap-24">
          <div>
            <Reveal>
              <p className="t-lead text-white/85">
                {t(
                  'Youth LED Algeria connects Algerian youth with learning, exchange, dialogue and international cooperation opportunities, while bringing strong local youth mobilisation and programme implementation capacity to international partnerships.',
                  'تربط جمعية شباب ليد الجزائر الشباب الجزائري بفرص التعلّم والتبادل والحوار والتعاون الدولي، وتقدّم للشراكات الدولية قدرة محلية قوية على تعبئة الشباب وتنفيذ البرامج.',
                )}
              </p>
            </Reveal>
            {cta && (
              <Reveal delay={150} className="mt-10 flex flex-wrap gap-3">
                <Btn to="/international">{t('Explore International', 'اكتشف المسار الدولي')}</Btn>
                <Btn to="/partner" variant="inverse">{t('Partner With Us', 'كن شريكنا')}</Btn>
              </Reveal>
            )}
            <p className="mt-10 max-w-md border-s-2 border-accent ps-4 text-sm leading-relaxed text-white/70">
              {t('Youth LED Algeria is an independent Algerian youth association. It is not an EU institution and does not represent the Erasmus+ programme.', 'شباب ليد الجزائر جمعية شبابية جزائرية مستقلة، وليست مؤسسة تابعة للاتحاد الأوروبي ولا تمثّل برنامج إيراسموس+.')}
            </p>
          </div>
          <ul className="border-t border-white/15">
            {INTL.map((x, i) => (
              <Reveal as="li" key={i} delay={i * 50} className="group flex items-center gap-5 border-b border-white/15 py-5">
                <span className="t-num text-xs text-accent" dir="ltr">0{i + 1}</span>
                <span className="t-h4 flex-1 transition-transform duration-300 ease-[var(--ease)] group-hover:translate-x-1 rtl:group-hover:-translate-x-1">{t(x.en, x.ar)}</span>
              </Reveal>
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}

/* ───────────────────────── MAP ───────────────────────── */
const OUTLINE: [number, number][] = [
  [11.999506, 23.471668], [8.572893, 21.565661], [5.677566, 19.601207], [4.267419, 19.155265], [3.158133, 19.057364], [3.146661, 19.693579],
  [2.683588, 19.85623], [2.060991, 20.142233], [1.823228, 20.610809], [-1.550055, 22.792666], [-4.923337, 24.974574], [-8.6844, 27.395744],
  [-8.665124, 27.589479], [-8.66559, 27.656426], [-8.674116, 28.841289], [-7.059228, 29.579228], [-6.060632, 29.7317], [-5.242129, 30.000443],
  [-4.859646, 30.501188], [-3.690441, 30.896952], [-3.647498, 31.637294], [-3.06898, 31.724498], [-2.616605, 32.094346], [-1.307899, 32.262889],
  [-1.124551, 32.655222], [-1.388049, 32.864015], [-1.733455, 33.919713], [-1.792986, 34.527919], [-2.169914, 35.168396], [-1.208603, 35.714849],
  [-0.127454, 35.888662], [0.503877, 36.301273], [2.466919, 36.605647], [3.161699, 36.783905], [4.815758, 36.865037], [5.32012, 36.716519],
  [6.26182, 37.110655], [7.330385, 37.118381], [7.737078, 36.885708], [8.420964, 36.946427], [8.217824, 36.433177], [8.376368, 35.479876],
  [8.140981, 34.655146], [7.524482, 34.097376], [7.612642, 33.344115], [8.430473, 32.748337], [8.439103, 32.506285], [9.055603, 32.102692],
  [9.48214, 30.307556], [9.805634, 29.424638], [9.859998, 28.95999], [9.683885, 28.144174], [9.756128, 27.688259], [9.629056, 27.140953],
  [9.716286, 26.512206], [9.319411, 26.094325], [9.910693, 25.365455], [9.948261, 24.936954], [10.303847, 24.379313], [10.771364, 24.562532],
  [11.560669, 24.097909], [11.999506, 23.471668],
]
const proj = ([lo, la]: [number, number]) => [(lo + 9) * 34, (37.5 - la) * 34] as const
const NODES: [number, number][] = [[-0.6, 35.6], [3.0, 36.4], [6.2, 36.2], [2.8, 34.0], [7.0, 34.6], [5.0, 31.0], [-0.5, 32.0]]

export function AlgeriaMap() {
  const { t } = useApp()
  const [h, setH] = useState<number | null>(null)
  const path = OUTLINE.map((p, i) => `${i ? 'L' : 'M'}${proj(p).map((v) => v.toFixed(1)).join(' ')}`).join(' ') + 'Z'
  return (
    <section className="sec bg-tint">
      <div className="wrap grid items-center gap-14 lg:grid-cols-[5fr_7fr] lg:gap-16">
        <div>
          <Reveal><Eyebrow>{t('ALGERIA REACH', 'الانتشار في الجزائر')}</Eyebrow></Reveal>
          <p className="t-num mt-8 text-[clamp(5rem,12vw,9rem)] text-ink"><CountUp to={7} suffix="+" /></p>
          <h2 className="t-h3 mt-2 text-ink">{t('provinces, one network', 'ولايات، شبكة واحدة')}</h2>
          <Reveal><p className="t-body mt-6 text-tx2">{t('Local bureaux and volunteers carry Youth LED activities across wilayas. Exact locations and programmes will be published here once verified by the association.', 'تحمل المكاتب المحلية والمتطوعون أنشطة شباب ليد عبر الولايات. ستُنشر المواقع والبرامج بدقة هنا بعد توثيقها من الجمعية.')}</p></Reveal>
        </div>
        <Reveal kind="rv-fade" className="relative">
          <svg viewBox="-20 -20 760 660" className="mx-auto w-full max-w-[640px]" role="img" aria-label={t('Stylised outline of Algeria', 'خريطة مبسّطة للجزائر')}>
            <path d={path} fill="var(--bg2)" stroke="var(--brand)" strokeWidth="1.6" strokeLinejoin="round" />
            {NODES.map((n, i) => {
              const [x, y] = proj(n)
              return (
                <g key={i} onMouseEnter={() => setH(i)} onMouseLeave={() => setH(null)} onFocus={() => setH(i)} onBlur={() => setH(null)} tabIndex={0} role="button" aria-label={t('Wilaya — to be confirmed', 'ولاية — في انتظار التأكيد')} className="cursor-pointer outline-none">
                  <circle cx={x} cy={y} r="9" fill="var(--accent)" opacity="0.5" style={{ transformOrigin: `${x}px ${y}px`, animation: reducedMotion() ? undefined : `pulse 2.4s ${i * 0.3}s ease-out infinite` }} />
                  <circle cx={x} cy={y} r={h === i ? 9 : 6} fill="var(--accent)" stroke="#0b2c66" strokeWidth="2" style={{ transition: 'r .25s' }} />
                </g>
              )
            })}
          </svg>
          <div className={`pointer-events-none absolute start-2 top-2 max-w-[15rem] rounded-xl border border-bd bg-surface p-4 text-sm shadow-[0_10px_30px_rgba(11,44,102,0.12)] transition-opacity duration-200 ${h === null ? 'opacity-0' : 'opacity-100'}`}>
            <p className="eyebrow text-brand">{t('Wilaya', 'الولاية')}</p>
            <p className="mt-1 font-semibold text-ink">{t('To be confirmed', 'في انتظار التأكيد')}</p>
            <p className="mt-1 text-tx2">{t('Activities and programmes will appear here.', 'ستظهر هنا الأنشطة والبرامج.')}</p>
          </div>
          <p className="mt-2 text-center text-xs text-tx2">{t('Node positions are illustrative placeholders, not verified locations.', 'مواضع النقاط توضيحية مؤقتة وليست مواقع موثّقة.')}</p>
        </Reveal>
      </div>
    </section>
  )
}

/* ───────────────────────── GOVERNANCE ───────────────────────── */
export function Governance() {
  const { t } = useApp()
  return (
    <section className="sec bg-bg2">
      <div className="wrap">
        <div className="grid gap-10 lg:grid-cols-[5fr_7fr] lg:gap-20">
          <div>
            <Reveal><Eyebrow>{t('GOVERNANCE', 'الحوكمة')}</Eyebrow></Reveal>
            <h2 className="t-h2 mt-6 text-ink"><MaskLines lines={[t('A clear structure,', 'هيكل واضح،'), t('real departments.', 'إدارات حقيقية.')]} /></h2>
          </div>
          <Reveal><p className="t-lead text-tx2">{t('An Executive Board and five operational departments keep training, communication, projects and finance accountable.', 'مكتب تنفيذي وخمس إدارات تشغيلية تضمن المساءلة في التكوين والاتصال والمشاريع والمالية.')}</p></Reveal>
        </div>
        <div className="mt-16">
          <p className="eyebrow mb-5 text-tx2">{t('EXECUTIVE BOARD', 'المكتب التنفيذي')}</p>
          <ul className="grid gap-px overflow-hidden rounded-2xl border border-bd bg-bd sm:grid-cols-2 lg:grid-cols-3">
            {BOARD.map((b, i) => (
              <li key={i} className="group flex items-center gap-4 bg-bg2 p-6 transition-colors duration-300 hover:bg-tint">
                <span className="t-num text-sm text-brand" dir="ltr">0{i + 1}</span>
                <span className="t-h4 text-ink">{t(b.en, b.ar)}</span>
              </li>
            ))}
          </ul>
          <p className="eyebrow mb-5 mt-12 text-tx2">{t('DEPARTMENTS', 'الإدارات')}</p>
          <div className="flex flex-wrap gap-3">
            {DEPARTMENTS.map((d, i) => (
              <span key={i} className="rounded-full border border-bd px-5 py-3 text-sm font-medium text-ink">{t(d.name.en, d.name.ar)}</span>
            ))}
          </div>
          <div className="mt-10"><Link to="/team" className="tlink text-brand">{t('Organisation & team', 'الهيكل والفريق')} <Arrow /></Link></div>
        </div>
      </div>
    </section>
  )
}

/* ───────────────────────── PARTNERS ───────────────────────── */
export function Partners() {
  const { t } = useApp()
  const cats = [
    t('International', 'دولية'), t('Institutional', 'مؤسساتية'), t('Civil Society', 'المجتمع المدني'), t('Universities', 'جامعات'), t('Community', 'مجتمعية'),
  ]
  return (
    <section className="sec bg-bg">
      <div className="wrap">
        <div className="flex flex-wrap items-end justify-between gap-6">
          <div>
            <Reveal><Eyebrow>{t('PARTNERS', 'الشركاء')}</Eyebrow></Reveal>
            <h2 className="t-h2 mt-6 text-ink"><MaskLines lines={[t('Who we build with.', 'من نبني معهم.')]} /></h2>
          </div>
          <Btn to="/partner" variant="secondary">{t('Become a partner', 'كن شريكاً')}</Btn>
        </div>
        <div className="mt-14 grid grid-cols-2 gap-4 md:grid-cols-5">
          {cats.map((c, i) => (
            <Reveal key={i} delay={i * 60} className="flex aspect-[4/3] flex-col justify-between rounded-2xl border border-dashed border-bd p-5">
              <p className="eyebrow text-tx2">{c}</p>
              <p className="text-[13px] leading-snug text-tx2">{t('Partner logos will appear here once supplied.', 'ستظهر شعارات الشركاء هنا فور تزويدنا بها.')}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}

/* ───────────────────────── STORIES ───────────────────────── */
export function Stories({ full = false }: { full?: boolean }) {
  const { t } = useApp()
  const [f, ...rest] = STORIES
  return (
    <section className="sec bg-bg2">
      <div className="wrap">
        {!full && (
          <div className="flex flex-wrap items-end justify-between gap-6">
            <div>
              <Reveal><Eyebrow>{t('STORIES & NEWS', 'قصص وأخبار')}</Eyebrow></Reveal>
              <h2 className="t-h2 mt-6 text-ink"><MaskLines lines={[t('From the field.', 'من الميدان.')]} /></h2>
            </div>
            <Link to="/news" className="tlink text-brand">{t('All stories', 'كل القصص')} <Arrow /></Link>
          </div>
        )}
        <div className={`grid gap-x-10 gap-y-12 lg:grid-cols-12 ${full ? '' : 'mt-14'}`}>
          <Reveal className="lg:col-span-7">
            <Link to="/news" data-cursor="OPEN" className="zoom-host group block">
              <div className="zoom-img aspect-[16/11] overflow-hidden rounded-[20px] bg-tint"><Img src={f.img} alt={`${f.title.en} (placeholder image)`} /></div>
              <p className="eyebrow mt-6 text-brand">{t(f.cat.en, f.cat.ar)}</p>
              <h3 className="t-h3 mt-3 max-w-[24ch] text-ink transition-colors group-hover:text-brand">{t(f.title.en, f.title.ar)}</h3>
            </Link>
          </Reveal>
          <div className="lg:col-span-5">
            {rest.map((s, i) => (
              <Reveal key={i} delay={i * 80}>
                <Link to="/news" className="zoom-host group grid grid-cols-[6.5rem_1fr] items-center gap-5 border-t border-bd py-6 first:border-t-0 first:pt-0">
                  <div className="zoom-img aspect-square overflow-hidden rounded-xl bg-tint"><Img src={s.img} alt="" /></div>
                  <div>
                    <p className="eyebrow text-brand">{t(s.cat.en, s.cat.ar)}</p>
                    <h3 className="t-h4 mt-2 text-ink transition-colors group-hover:text-brand">{t(s.title.en, s.title.ar)}</h3>
                  </div>
                </Link>
              </Reveal>
            ))}
            <p className="mt-2 text-xs text-tx2">{t('Sample editorial content: titles reference real activities; articles to be added.', 'محتوى تحريري تجريبي: العناوين تشير إلى أنشطة حقيقية، والمقالات ستُضاف لاحقاً.')}</p>
          </div>
        </div>
      </div>
    </section>
  )
}

/* ───────────────────────── OPPORTUNITIES ───────────────────────── */
export function Opportunities() {
  const { t } = useApp()
  const label = { OPEN: t('OPEN', 'مفتوح'), UPCOMING: t('UPCOMING', 'قريباً'), CLOSED: t('CLOSED', 'مغلق') }
  return (
    <ul className="border-t border-bd">
      {OPPS.map((o, i) => (
        <li key={i} className="grid grid-cols-[1fr_auto] items-center gap-4 border-b border-bd py-5 sm:grid-cols-[11rem_1fr_auto]">
          <span className="eyebrow hidden text-tx2 sm:block">{t(o.type.en, o.type.ar)}</span>
          <span className="t-h4 text-ink">{t(o.title.en, o.title.ar)}</span>
          <span className={`inline-flex items-center gap-2 rounded-full border px-3 py-1.5 text-[11px] font-semibold tracking-[0.12em] ${o.status === 'OPEN' ? 'border-accent bg-accent/20 text-ink' : o.status === 'UPCOMING' ? 'border-brand text-brand' : 'border-bd text-tx2'}`}>
            <span className={`h-2 w-2 rounded-full ${o.status === 'OPEN' ? 'bg-accent ring-1 ring-[#0b2c66]/40' : o.status === 'UPCOMING' ? 'bg-brand' : 'bg-tx2'}`} aria-hidden />
            {label[o.status]}
          </span>
        </li>
      ))}
    </ul>
  )
}

/* ───────────────────────── JOIN ───────────────────────── */
export function Join() {
  const { t } = useApp()
  const opts = [
    t('Join the community', 'انضمّ إلى المجتمع'), t('Attend a programme', 'احضر برنامجاً'), t('Volunteer', 'تطوّع'), t('Learn with Youth LED', 'تعلّم مع شباب ليد'), t('Build an initiative', 'ابنِ مبادرتك'),
  ]
  return (
    <section className="on-navy relative isolate overflow-hidden bg-[#0b2c66] text-white">
      <div className="absolute inset-0 -z-10">
        <Img src={IMG.join} alt="A group of young people together (placeholder for an authentic Youth LED photo)" />
        <div className="absolute inset-0 bg-[#0b2c66]/78" />
      </div>
      <div className="wrap sec grid gap-14 lg:grid-cols-[7fr_5fr] lg:items-end">
        <div>
          <Reveal><Eyebrow onNavy>{t('FOR YOUNG PEOPLE', 'للشباب')}</Eyebrow></Reveal>
          <h2 className="t-state mt-7">
            <MaskLines lines={[t('YOUR NEXT INITIATIVE', 'مبادرتك القادمة'), <span key="a">{t('CAN START HERE', 'يمكن أن تبدأ من هنا')}<span className="text-accent">.</span></span>]} />
          </h2>
          <Reveal delay={200} className="mt-10"><Btn to="/join" variant="accent">{t('Join Youth LED', 'انضمّ إلى شباب ليد')}</Btn></Reveal>
        </div>
        <ul className="border-t border-white/25">
          {opts.map((o, i) => (
            <Reveal as="li" key={i} delay={i * 60} className="border-b border-white/25">
              <Link to="/join" className="group flex min-h-[56px] items-center justify-between gap-4 py-4 text-lg font-semibold">
                <span className="flex items-center gap-4"><span className="t-num text-xs text-accent" dir="ltr">0{i + 1}</span>{o}</span>
                <Arrow className="transition-transform duration-200 group-hover:translate-x-1 rtl:group-hover:-translate-x-1" />
              </Link>
            </Reveal>
          ))}
        </ul>
      </div>
    </section>
  )
}

/* ───────────────────────── PARTNER CTA ───────────────────────── */
export function PartnerCTA() {
  const { t } = useApp()
  return (
    <section className="on-navy relative isolate overflow-hidden bg-[#06152f] text-white">
      <div className="absolute inset-0 -z-10 opacity-35"><Img src={IMG.cta} alt="" /></div>
      <div className="absolute inset-0 -z-10 bg-[#06152f]/70" />
      <div className="wrap sec">
        <h2 className="t-state max-w-[16ch]">
          <MaskLines lines={[t("LET'S BUILD", 'لنبنِ معاً'), t('THE NEXT YOUTH INITIATIVE', 'المبادرة الشبابية القادمة'), <span key="t">{t('TOGETHER', 'معاً')}<span className="text-accent">.</span></span>]} />
        </h2>
        <Reveal delay={200}><p className="t-lead mt-8 text-white/85">{t('Partner with Youth LED Algeria to create practical, inclusive and high-impact opportunities for young people.', 'شاركوا جمعية شباب ليد الجزائر في صنع فرص عملية وشاملة وعالية الأثر للشباب.')}</p></Reveal>
        <Reveal delay={300} className="mt-10 flex flex-wrap gap-3">
          <Btn to="/partner">{t('Partner With Us', 'كن شريكنا')}</Btn>
          <Btn to="/contact" variant="inverse">{t('Contact Youth LED', 'تواصل مع شباب ليد')}</Btn>
        </Reveal>
      </div>
    </section>
  )
}

export function QuoteBlock({ children }: { children: React.ReactNode }) {
  return (
    <blockquote className="border-s-4 border-accent ps-6">
      <Quote size={22} className="mb-3 text-brand" strokeWidth={1.8} aria-hidden />
      <p className="t-h3 text-ink">{children}</p>
    </blockquote>
  )
}

export { CAPS }
