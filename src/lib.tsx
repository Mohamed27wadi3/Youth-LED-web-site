import {
  createContext,
  useContext,
  useEffect,
  useRef,
  useState,
  type ReactNode,
  type ElementType,
  type CSSProperties,
} from 'react'
import { ArrowRight } from 'lucide-react'

export type Lang = 'en' | 'ar'
export type Theme = 'light' | 'dark'
export type Route = { page: string; id?: string }

type Ctx = {
  lang: Lang
  setLang: (l: Lang) => void
  theme: Theme
  toggleTheme: () => void
  route: Route
  t: (en: string, ar: string) => string
  rtl: boolean
}

const AppCtx = createContext<Ctx>(null as unknown as Ctx)
export const useApp = () => useContext(AppCtx)

function parse(hash: string): Route {
  const parts = hash.replace(/^#\/?/, '').split('/').filter(Boolean)
  return { page: parts[0] || 'home', id: parts[1] }
}

export function AppProvider({ children }: { children: ReactNode }) {
  const [lang, setLang] = useState<Lang>(() => (localStorage.getItem('yl-lang') as Lang) || 'en')
  const [theme, setTheme] = useState<Theme>(() => (localStorage.getItem('yl-theme') as Theme) || 'light')
  const [route, setRoute] = useState<Route>(() => parse(window.location.hash))

  useEffect(() => {
    const el = document.documentElement
    el.lang = lang
    el.dir = lang === 'ar' ? 'rtl' : 'ltr'
    localStorage.setItem('yl-lang', lang)
  }, [lang])

  useEffect(() => {
    document.documentElement.classList.toggle('dark', theme === 'dark')
    localStorage.setItem('yl-theme', theme)
  }, [theme])

  useEffect(() => {
    const on = () => {
      setRoute(parse(window.location.hash))
      window.scrollTo(0, 0)
    }
    window.addEventListener('hashchange', on)
    return () => window.removeEventListener('hashchange', on)
  }, [])

  const value: Ctx = {
    lang,
    setLang,
    theme,
    toggleTheme: () => setTheme((x) => (x === 'light' ? 'dark' : 'light')),
    route,
    rtl: lang === 'ar',
    t: (en, ar) => (lang === 'ar' ? ar : en),
  }
  return <AppCtx.Provider value={value}>{children}</AppCtx.Provider>
}

export const reducedMotion = () =>
  typeof window !== 'undefined' && window.matchMedia('(prefers-reduced-motion: reduce)').matches

export function Link({
  to,
  className = '',
  children,
  ...rest
}: { to: string; className?: string; children: ReactNode } & React.AnchorHTMLAttributes<HTMLAnchorElement>) {
  return (
    <a href={`#${to}`} className={className} {...rest}>
      {children}
    </a>
  )
}

function useInView(once = true, margin = '0px 0px -8% 0px') {
  const ref = useRef<HTMLElement | null>(null)
  const [seen, setSeen] = useState(false)
  useEffect(() => {
    const el = ref.current
    if (!el) return
    if (typeof IntersectionObserver === 'undefined') {
      setSeen(true)
      return
    }
    const io = new IntersectionObserver(
      ([e]) => {
        if (e.isIntersecting) {
          setSeen(true)
          if (once) io.disconnect()
        }
      },
      { rootMargin: margin, threshold: 0.12 },
    )
    io.observe(el)
    return () => io.disconnect()
  }, [once, margin])
  return { ref, seen }
}

export function Reveal({
  children,
  className = '',
  delay = 0,
  kind = 'rv',
  as: Tag = 'div',
  style,
}: {
  children: ReactNode
  className?: string
  delay?: number
  kind?: 'rv' | 'rv-fade' | 'clip-b' | 'clip-s'
  as?: ElementType
  style?: CSSProperties
}) {
  const { ref, seen } = useInView()
  return (
    <Tag
      ref={ref}
      className={`${kind} ${seen ? 'in' : ''} ${className}`}
      style={{ '--d': `${delay}ms`, ...style } as CSSProperties}
    >
      {children}
    </Tag>
  )
}

export function MaskLines({
  lines,
  className = '',
  delay = 0,
  step = 120,
}: {
  lines: ReactNode[]
  className?: string
  delay?: number
  step?: number
}) {
  const { ref, seen } = useInView()
  return (
    <span ref={ref} className={`block ${seen ? 'in' : ''} ${className}`}>
      {lines.map((l, i) => (
        <span key={i} className="ml" style={{ '--d': `${delay + i * step}ms` } as CSSProperties}>
          <span>{l}</span>
        </span>
      ))}
    </span>
  )
}

export function CountUp({ to, suffix = '', duration = 1400 }: { to: number; suffix?: string; duration?: number }) {
  const { ref, seen } = useInView()
  const [n, setN] = useState(reducedMotion() ? to : 0)
  useEffect(() => {
    if (!seen || reducedMotion()) {
      if (seen) setN(to)
      return
    }
    let raf = 0
    const start = performance.now()
    const tick = (now: number) => {
      const p = Math.min(1, (now - start) / duration)
      setN(Math.round(to * (p === 1 ? 1 : 1 - Math.pow(2, -10 * p))))
      if (p < 1) raf = requestAnimationFrame(tick)
    }
    raf = requestAnimationFrame(tick)
    return () => cancelAnimationFrame(raf)
  }, [seen, to, duration])
  return (
    <span ref={ref as React.RefObject<HTMLSpanElement>} className="tabular-nums" dir="ltr">
      {n}
      {suffix && <span className="text-accent">{suffix}</span>}
    </span>
  )
}

export function useScrollProgress(ref: React.RefObject<HTMLElement | null>) {
  const [p, setP] = useState(0)
  useEffect(() => {
    let raf = 0
    const calc = () => {
      raf = 0
      const el = ref.current
      if (!el) return
      const r = el.getBoundingClientRect()
      const total = r.height - window.innerHeight
      const v = total <= 0 ? 0 : Math.min(1, Math.max(0, -r.top / total))
      setP((old) => (Math.abs(old - v) > 0.004 ? v : old))
    }
    const on = () => {
      if (!raf) raf = requestAnimationFrame(calc)
    }
    calc()
    window.addEventListener('scroll', on, { passive: true })
    window.addEventListener('resize', on)
    return () => {
      window.removeEventListener('scroll', on)
      window.removeEventListener('resize', on)
      if (raf) cancelAnimationFrame(raf)
    }
  }, [ref])
  return p
}

export function Arrow({ className = '' }: { className?: string }) {
  return <ArrowRight size={18} strokeWidth={2} className={`rtl:-scale-x-100 ${className}`} aria-hidden />
}

type BtnProps = {
  to?: string
  href?: string
  onClick?: () => void
  variant?: 'primary' | 'secondary' | 'inverse' | 'accent'
  children: ReactNode
  type?: 'button' | 'submit'
  disabled?: boolean
  loading?: boolean
  className?: string
  cursor?: string
}

export function Btn({
  to,
  href,
  onClick,
  variant = 'primary',
  children,
  type = 'button',
  disabled,
  loading,
  className = '',
  cursor,
}: BtnProps) {
  const base =
    'group relative inline-flex min-h-[52px] items-center justify-center gap-2.5 rounded-xl px-6 font-semibold text-[15px] leading-none transition-[transform,background-color,box-shadow,border-color] duration-200 ease-[var(--ease)] hover:-translate-y-px active:translate-y-0 active:scale-[0.985] disabled:pointer-events-none disabled:opacity-50'
  const v = {
    primary: 'bg-[#1e5bff] text-white hover:bg-[#1748d6] hover:shadow-[0_8px_22px_rgba(30,91,255,0.28)]',
    secondary:
      'border border-ink text-ink hover:bg-ink/[0.06] hover:shadow-[0_6px_18px_rgba(11,44,102,0.1)]',
    inverse: 'border border-white/80 text-white hover:bg-white/10',
    accent: 'bg-accent text-[#0b2c66] hover:bg-[#ffd12e] hover:shadow-[0_8px_22px_rgba(255,196,0,0.3)]',
  }[variant]
  const inner = (
    <>
      <span>{loading ? '…' : children}</span>
      <Arrow className="transition-transform duration-200 ease-[var(--ease)] group-hover:translate-x-1 rtl:group-hover:-translate-x-1" />
    </>
  )
  const cls = `${base} ${v} ${className}`
  if (to)
    return (
      <Link to={to} className={cls} data-cursor={cursor}>
        {inner}
      </Link>
    )
  if (href)
    return (
      <a href={href} className={cls} data-cursor={cursor}>
        {inner}
      </a>
    )
  return (
    <button type={type} onClick={onClick} disabled={disabled || loading} className={cls} data-cursor={cursor}>
      {inner}
    </button>
  )
}

export function Eyebrow({ children, onNavy = false, className = '' }: { children: ReactNode; onNavy?: boolean; className?: string }) {
  return (
    <p className={`eyebrow flex items-center gap-3 ${onNavy ? 'text-[#8eacee]' : 'text-tx2'} ${className}`}>
      <span className="h-[3px] w-6 rounded-full bg-accent" aria-hidden />
      {children}
    </p>
  )
}

export function Img({
  src,
  alt,
  className = '',
  style,
}: {
  src: string
  alt: string
  className?: string
  style?: CSSProperties
}) {
  return <img src={src} alt={alt} loading="lazy" decoding="async" className={`h-full w-full object-cover ${className}`} style={style} />
}

export function Instagram({ size = 20, className = '', strokeWidth = 1.9 }: { size?: number; className?: string; strokeWidth?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" className={className} aria-hidden>
      <rect x="3" y="3" width="18" height="18" rx="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.5" cy="6.5" r="0.6" fill="currentColor" />
    </svg>
  )
}
