import { useEffect, useState } from 'react'
import { AppProvider, useApp } from './lib'
import { Cursor, Footer, Loader, Nav } from './chrome'
import { LOGO } from './data'
import {
  AlgeriaMap, Goals, Governance, Green, Hero, HowWeWork, ImpactNumbers, International, Join, MVW, Partners,
  PartnerCTA, Pillars, Pipeline, ProjectsShowcase, Stories, Strip, Who,
} from './home'
import {
  About, Contact, Impact, InternationalPage, JoinPage, News, NotFound, Partner, ProjectDetail, Projects, Team, WhatWeDo,
} from './pages'

function Home() {
  return (
    <>
      <Hero />
      <Strip />
      <Who />
      <Pipeline />
      <Pillars />
      <MVW />
      <Goals />
      <HowWeWork />
      <Green />
      <ProjectsShowcase />
      <ImpactNumbers />
      <International />
      <AlgeriaMap />
      <Governance />
      <Partners />
      <Stories />
      <Join />
      <PartnerCTA />
    </>
  )
}

function Router() {
  const { route } = useApp()
  switch (route.page) {
    case 'home': return <Home />
    case 'about': return <About />
    case 'what-we-do': return <WhatWeDo />
    case 'projects': return route.id ? <ProjectDetail id={route.id} /> : <Projects />
    case 'impact': return <Impact />
    case 'international': return <InternationalPage />
    case 'team': return <Team />
    case 'news': return <News />
    case 'partner': return <Partner />
    case 'join': return <JoinPage />
    case 'contact': return <Contact />
    default: return <NotFound />
  }
}

function Shell() {
  const { route } = useApp()
  const [loading, setLoading] = useState(true)
  useEffect(() => {
    const id = setTimeout(() => setLoading(false), 600)
    return () => clearTimeout(id)
  }, [])
  if (loading) return <Loader />
  return (
    <>
      <a href="#main" className="sr-only focus:not-sr-only focus:fixed focus:start-4 focus:top-4 focus:z-[100] focus:rounded-lg focus:bg-white focus:px-4 focus:py-3 focus:text-[#0b2c66]">Skip to content</a>
      <Nav />
      <Cursor />
      <main id="main" key={route.page + (route.id ?? '')} className="a-page">
        <Router />
      </main>
      <Footer />
    </>
  )
}

export default function App() {
  useEffect(() => {
    let icon = document.querySelector<HTMLLinkElement>('link[rel="icon"]')
    if (!icon) {
      icon = document.createElement('link')
      icon.rel = 'icon'
      document.head.appendChild(icon)
    }
    icon.type = 'image/png'
    icon.href = LOGO
  }, [])

  return (
    <AppProvider>
      <Shell />
    </AppProvider>
  )
}
