import { useEffect, useRef, useState } from 'react'
import { Menu, X, Sun, Moon, Mail, Phone, ArrowUp } from 'lucide-react'
import { Btn, Instagram, Link, useApp, reducedMotion } from './lib'
import { CONTACT, LOGO, NAV } from './data'

export function Logo({ onDark = false }: { onDark?: boolean }) {
  return (
    <Link to="/" className="flex items-center gap-3" aria-label="Youth LED Algeria — home" dir="ltr">
      <span className="grid h-11 w-11 shrink-0 place-items-center overflow-hidden rounded-xl bg-white ring-1 ring-black/5">
        <img src={LOGO} alt="Youth LED Algeria logo" className="h-full w-full object-cover" />
      </span>
      <span className={`fd leading-[1.05] ${onDark ? 'text-white' : 'text-ink'}`} style={{ fontFamily: "'Sora', sans-serif" }}>
        <span className="block text-[15px] font-bold tracking-tight">YOUTH LED</span>
        <span className="block text-[11px] font-semibold tracking-[0.22em] opacity-80">ALGERIA</span>
      </span>
    </Link>
  )
}

export function LangSwitch({ onDark = false }: { onDark?: boolean }) {
  const { lang, setLang } = useApp()
  const item = (l: 'en' | 'ar', label: string) => (
    <button
      type="button"
      onClick={() => setLang(l)}
      aria-pressed={lang === l}
      lang={l}
      className={`min-h-[44px] min-w-[44px] px-2.5 text-[13px] font-semibold transition-colors duration-200 ${
        lang === l ? 'text-accent' : onDark ? 'text-white/75 hover:text-white' : 'text-tx2 hover:text-ink'
      }`}
      style={l === 'ar' ? { fontFamily: "'Cairo', sans-serif" } : undefined}
    >
      {label}
    </button>
  )
  return (
    <div className="flex items-center" dir="ltr" role="group" aria-label="Language">
      {item('en', 'EN')}
      <span className={`h-4 w-px ${onDark ? 'bg-white/30' : 'bg-bd'}`} aria-hidden />
      {item('ar', 'العربية')}
    </div>
  )
}

export function ThemeToggle({ onDark = false }: { onDark?: boolean }) {
  const { theme, toggleTheme, t } = useApp()
  return (
    <button
      type="button"
      onClick={toggleTheme}
      aria-label={theme === 'dark' ? t('Switch to light mode', 'التبديل إلى الوضع الفاتح') : t('Switch to dark mode', 'التبديل إلى الوضع الداكن')}
      className={`grid h-11 w-11 place-items-center rounded-full transition-colors duration-200 ${
        onDark ? 'text-white hover:bg-white/10' : 'text-ink hover:bg-ink/10'
      }`}
    >
      {theme === 'dark' ? <Sun size={19} strokeWidth={1.9} /> : <Moon size={19} strokeWidth={1.9} />}
    </button>
  )
}

export function Nav() {
  const { t, route } = useApp()
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const on = () => setScrolled(window.scrollY > 40)
    on()
    window.addEventListener('scroll', on, { passive: true })
    return () => window.removeEventListener('scroll', on)
  }, [])
  useEffect(() => setOpen(false), [route.page, route.id])
  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
    const k = (e: KeyboardEvent) => e.key === 'Escape' && setOpen(false)
    window.addEventListener('keydown', k)
    return () => window.removeEventListener('keydown', k)
  }, [open])

  const onDark = !scrolled
  return (
    <>
      <header
        className={`fixed inset-x-0 top-0 z-50 transition-[height,background-color,border-color,box-shadow,backdrop-filter] duration-300 ease-[var(--ease)] ${
          scrolled
            ? 'h-[68px] border-b border-bd bg-bg/85 shadow-[0_4px_20px_rgba(11,44,102,0.05)] backdrop-blur-xl'
            : 'h-[84px] border-b border-transparent bg-transparent'
        } ${onDark ? 'on-navy' : ''}`}
      >
        <div className="wrap flex h-full items-center justify-between gap-4 xl:gap-6">
          <Logo onDark={onDark} />
          <nav className="hidden min-w-0 flex-1 items-center justify-center gap-0 xl:flex" aria-label="Main">
            {NAV.map((n) => {
              const active = route.page === n.path.slice(1)
              return (
                <Link
                  key={n.path}
                  to={n.path}
                  aria-current={active ? 'page' : undefined}
                    className={`relative shrink-0 whitespace-nowrap px-2.5 py-3 text-[14px] font-medium transition-colors duration-200 2xl:px-3 2xl:text-[14.5px] ${
                    onDark ? 'text-white/85 hover:text-white' : 'text-tx hover:text-brand'
                  }`}
                >
                  {t(n.label.en, n.label.ar)}
                  <span
                    className={`absolute inset-x-3 bottom-1.5 h-[2px] rounded-full bg-accent transition-transform duration-300 ease-[var(--ease)] ${
                      active ? 'scale-x-100' : 'scale-x-0'
                    }`}
                    aria-hidden
                  />
                </Link>
              )
            })}
          </nav>
          <div className="flex items-center gap-1 sm:gap-2">
            <div className="hidden sm:block">
              <LangSwitch onDark={onDark} />
            </div>
            <ThemeToggle onDark={onDark} />
            <Btn to="/partner" className="ms-2 hidden shrink-0 whitespace-nowrap !min-h-[46px] !px-4 xl:inline-flex 2xl:!px-5">
              {t('Partner With Us', 'كن شريكنا')}
            </Btn>
            <button
              type="button"
              aria-label={t('Open menu', 'فتح القائمة')}
              aria-expanded={open}
              onClick={() => setOpen(true)}
              className={`grid h-11 w-11 place-items-center rounded-full xl:hidden ${onDark ? 'text-white' : 'text-ink'}`}
            >
              <Menu size={24} strokeWidth={1.9} />
            </button>
          </div>
        </div>
      </header>

      {open && (
        <div className="on-navy fixed inset-0 z-[60] flex flex-col overflow-y-auto bg-[#0b2c66] text-white" role="dialog" aria-modal="true" aria-label="Menu">
          <div className="wrap flex h-[84px] shrink-0 items-center justify-between">
            <Logo onDark />
            <button type="button" aria-label={t('Close menu', 'إغلاق القائمة')} onClick={() => setOpen(false)} className="grid h-11 w-11 place-items-center rounded-full text-white">
              <X size={26} strokeWidth={1.9} />
            </button>
          </div>
          <nav className="wrap flex flex-1 flex-col justify-center gap-1 py-6" aria-label="Mobile">
            {NAV.map((n, i) => (
              <Link
                key={n.path}
                to={n.path}
                className="a-menu fd flex items-baseline gap-4 border-b border-white/10 py-3 text-[clamp(1.75rem,7vw,2.75rem)] font-bold"
                style={{ '--d': `${120 + i * 55}ms` } as React.CSSProperties}
              >
                <span className="text-xs font-semibold text-accent" dir="ltr">0{i + 1}</span>
                {t(n.label.en, n.label.ar)}
              </Link>
            ))}
            <div className="a-menu mt-8" style={{ '--d': '520ms' } as React.CSSProperties}>
              <Btn to="/partner" variant="accent" className="w-full sm:w-auto">
                {t('Partner With Us', 'كن شريكنا')}
              </Btn>
            </div>
          </nav>
          <div className="wrap flex shrink-0 items-center justify-between gap-4 border-t border-white/10 py-5">
            <a href={`https://instagram.com/${CONTACT.instagram}`} aria-label="Instagram" className="grid h-11 w-11 place-items-center rounded-full border border-white/25">
              <Instagram size={19} strokeWidth={1.9} />
            </a>
            <LangSwitch onDark />
          </div>
        </div>
      )}
    </>
  )
}

export function Footer() {
  const { t } = useApp()
  const col = (title: string, items: [string, string, string][]) => (
    <div>
      <h3 className="eyebrow mb-5 text-[#8eacee]">{title}</h3>
      <ul className="space-y-3">
        {items.map(([to, en, ar]) => (
          <li key={to + en}>
            <Link to={to} className="text-[15px] text-white/80 transition-colors hover:text-white">
              {t(en, ar)}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  )
  return (
    <footer className="on-navy bg-[#06152f] text-white">
      <div className="wrap pt-20 sm:pt-28">
        <div className="flex flex-col justify-between gap-10 border-b border-white/12 pb-16 lg:flex-row lg:items-end">
          <p className="t-hero !text-[clamp(2.25rem,7vw,6rem)]">
            {t('FROM SKILLS', 'من المهارات')}
            <br />
            {t('TO INITIATIVES', 'إلى المبادرات')}
            <span className="text-accent">.</span>
          </p>
          <Btn to="/join" variant="accent">
            {t('Join Youth LED', 'انضمّ إلى شباب ليد')}
          </Btn>
        </div>
        <div className="grid grid-cols-2 gap-x-6 gap-y-12 py-16 md:grid-cols-3 lg:grid-cols-6">
          {col(t('Organisation', 'الجمعية'), [['/about', 'About', 'من نحن'], ['/team', 'Team', 'الفريق'], ['/impact', 'Impact', 'الأثر'], ['/news', 'News', 'الأخبار']])}
          {col(t('What We Do', 'ماذا نفعل'), [['/what-we-do', 'Learn', 'تعلّم'], ['/what-we-do', 'Speak', 'تحدّث'], ['/what-we-do', 'Build', 'ابنِ'], ['/what-we-do', 'Connect', 'تواصل']])}
          {col(t('Projects', 'المشاريع'), [['/projects', 'All projects', 'كل المشاريع'], ['/projects/green-impact', 'Green Impact', 'الأثر الأخضر'], ['/projects/public-speaking', 'Public Speaking', 'الخطابة']])}
          {col(t('International', 'دولي'), [['/international', 'Erasmus+ & Euro-Med', 'إيراسموس+ والأورو-متوسطي'], ['/partner', 'Partner With Us', 'كن شريكنا']])}
          {col(t('Get Involved', 'شاركنا'), [['/join', 'Join Youth LED', 'انضمّ إلينا'], ['/join', 'Volunteer', 'تطوّع'], ['/contact', 'Contact', 'اتصل بنا']])}
          <div>
            <h3 className="eyebrow mb-5 text-[#8eacee]">{t('Contact', 'التواصل')}</h3>
            <ul className="space-y-3 text-[15px] text-white/80">
              <li>
                <a href={`mailto:${CONTACT.email}`} className="flex items-start gap-2 break-all hover:text-white">
                  <Mail size={17} className="mt-0.5 shrink-0 text-accent" strokeWidth={1.9} />
                  {CONTACT.email}
                </a>
              </li>
              <li>
                <a href={`tel:${CONTACT.phone.replace(/\s/g, '')}`} className="flex items-center gap-2 hover:text-white" dir="ltr">
                  <Phone size={17} className="shrink-0 text-accent" strokeWidth={1.9} />
                  {CONTACT.phone}
                </a>
              </li>
              <li>
                <a href={`https://instagram.com/${CONTACT.instagram}`} className="flex items-center gap-2 hover:text-white" dir="ltr">
                  <Instagram size={17} className="shrink-0 text-accent" strokeWidth={1.9} />@{CONTACT.instagram}
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="flex flex-col gap-6 border-t border-white/12 py-8 sm:flex-row sm:items-center sm:justify-between">
          <div className="flex items-center gap-4">
            <Logo onDark />
            <div className="hidden text-[13px] leading-snug text-white/70 md:block">
              Youth Leadership & Entrepreneurship Development
              <br />
              {t('Algeria · Est. 2018', 'الجزائر · تأسست 2018')}
            </div>
          </div>
          <div className="flex items-center gap-6 text-[13px] text-white/70">
            <LangSwitch onDark />
            <span>© {new Date().getFullYear()} Youth LED Algeria</span>
            <button
              type="button"
              aria-label={t('Back to top', 'العودة إلى الأعلى')}
              onClick={() => window.scrollTo({ top: 0, behavior: reducedMotion() ? 'auto' : 'smooth' })}
              className="grid h-11 w-11 place-items-center rounded-full border border-white/25 transition-colors hover:bg-white/10"
            >
              <ArrowUp size={18} strokeWidth={1.9} />
            </button>
          </div>
        </div>
      </div>
    </footer>
  )
}

export function Cursor() {
  const dot = useRef<HTMLDivElement>(null)
  const ring = useRef<HTMLDivElement>(null)
  const label = useRef<HTMLSpanElement>(null)
  const [on, setOn] = useState(false)

  useEffect(() => {
    const ok =
      window.matchMedia('(pointer: fine) and (hover: hover)').matches && window.innerWidth >= 1024 && !reducedMotion()
    setOn(ok)
  }, [])

  useEffect(() => {
    if (!on) return
    let x = -100, y = -100, rx = -100, ry = -100, raf = 0, size = 28
    const move = (e: MouseEvent) => {
      x = e.clientX
      y = e.clientY
      const el = (e.target as HTMLElement | null)?.closest('a,button,[data-cursor]') as HTMLElement | null
      const text = el?.getAttribute('data-cursor') || ''
      size = text ? 68 : el ? 46 : 28
      if (label.current) label.current.textContent = text
      if (ring.current) {
        ring.current.style.setProperty('--s', `${size}px`)
        ring.current.dataset.active = el ? '1' : '0'
        ring.current.dataset.label = text ? '1' : '0'
      }
    }
    const loop = () => {
      rx += (x - rx) * 0.18
      ry += (y - ry) * 0.18
      if (dot.current) dot.current.style.transform = `translate3d(${x - 4}px,${y - 4}px,0)`
      if (ring.current) ring.current.style.transform = `translate3d(${rx}px,${ry}px,0)`
      raf = requestAnimationFrame(loop)
    }
    window.addEventListener('mousemove', move)
    raf = requestAnimationFrame(loop)
    return () => {
      window.removeEventListener('mousemove', move)
      cancelAnimationFrame(raf)
    }
  }, [on])

  if (!on) return null
  return (
    <div aria-hidden className="pointer-events-none fixed inset-0 z-[100]">
      <div ref={dot} className="absolute left-0 top-0 h-2 w-2 rounded-full bg-brand" />
      <div ref={ring} className="absolute left-0 top-0" style={{ '--s': '28px' } as React.CSSProperties}>
        <div
          className="grid -translate-x-1/2 -translate-y-1/2 place-items-center rounded-full border border-brand/60 text-[10px] font-semibold tracking-[0.14em] text-white transition-[width,height,background-color] duration-300 ease-[var(--ease)]"
          style={{ width: 'var(--s)', height: 'var(--s)' }}
        >
          <span ref={label} />
        </div>
      </div>
    </div>
  )
}

export function Loader() {
  return (
    <div className="fixed inset-0 z-[200] grid place-items-center bg-[#06152f]" role="status" aria-label="Loading">
      <div className="flex flex-col items-center gap-6">
        <span className="grid h-20 w-20 animate-pulse place-items-center overflow-hidden rounded-2xl bg-white">
          <img src={LOGO} alt="" className="h-full w-full object-cover" />
        </span>
        <span className="h-[3px] w-24 overflow-hidden rounded-full bg-white/15">
          <span className="block h-full w-1/2 rounded-full bg-accent" style={{ animation: 'slideX 1.1s var(--ease) infinite' }} />
        </span>
      </div>
    </div>
  )
}
