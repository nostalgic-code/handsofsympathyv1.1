'use client'

import { useEffect, useRef, useState } from 'react'
import { useRouter, usePathname } from 'next/navigation'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import dynamic from 'next/dynamic'

gsap.registerPlugin(ScrollTrigger)

const AudioButton = dynamic(() => import('./AudioButton'), { ssr: false })

const NAV_ITEMS = [
  { label: 'Home',          href: '/' },
  { label: 'About',         href: '/about' },
  { label: 'Why It Works',  href: '/why-it-works' },
]

interface Props { isReady: boolean }

export default function Nav({ isReady }: Props) {
  const navRef  = useRef<HTMLElement>(null)
  const router  = useRouter()
  const pathname = usePathname()
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    if (!isReady || !navRef.current) return
    gsap.fromTo(navRef.current,
      { y: -70, opacity: 0 },
      { y: 0, opacity: 1, duration: 1, ease: 'power3.out' }
    )
  }, [isReady])

  useEffect(() => {
    ScrollTrigger.create({
      start: 'top -60',
      onEnter: () => {
        navRef.current?.classList.add('nav-scrolled', 'nav-shrunk')
      },
      onLeaveBack: () => {
        navRef.current?.classList.remove('nav-scrolled', 'nav-shrunk')
      },
    })
    return () => ScrollTrigger.getAll().forEach(t => t.kill())
  }, [pathname])

  // Close menu on route change
  useEffect(() => {
    setMenuOpen(false)
  }, [pathname])

  // Prevent body scroll when menu is open
  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }
    return () => { document.body.style.overflow = '' }
  }, [menuOpen])

  const handleNavClick = (href: string) => {
    setMenuOpen(false)
    router.push(href)
  }

  return (
    <>
      <nav ref={navRef} className="nav-wrap" aria-label="Main navigation">
        <div className="nav-backdrop" aria-hidden="true" />

        {/* Logo */}
        <a href="/" className="nav-logo" onClick={(e) => { e.preventDefault(); router.push('/') }}>
          <div className="logo-emblem" aria-hidden="true">
            <img src="/logo-trans.png" alt="Hands of Sympathy" className="logo-img" />
          </div>
          <span className="logo-name">Hands of Sympathy</span>
        </a>

        {/* Desktop Pills */}
        <div className="nav-pill-wrap desktop-nav" role="tablist" aria-label="Site pages">
          {NAV_ITEMS.map(item => (
            <button
              key={item.href}
              role="tab"
              aria-selected={pathname === item.href}
              className={`nav-pill-btn${pathname === item.href ? ' is-active' : ''}`}
              onClick={() => router.push(item.href)}
            >
              {item.label}
            </button>
          ))}
        </div>

        {/* Right: hamburger + audio */}
        <div className="relative z-10 flex items-center gap-3">
          <AudioButton />
          
          {/* Hamburger button - mobile only */}
          <button 
            className="hamburger-btn"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label={menuOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={menuOpen}
          >
            <span className={`hamburger-line ${menuOpen ? 'is-open' : ''}`} />
            <span className={`hamburger-line ${menuOpen ? 'is-open' : ''}`} />
            <span className={`hamburger-line ${menuOpen ? 'is-open' : ''}`} />
          </button>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      <div className={`mobile-menu-overlay ${menuOpen ? 'is-open' : ''}`}>
        <div className="mobile-menu-content">
          {NAV_ITEMS.map((item, i) => (
            <button
              key={item.href}
              className={`mobile-menu-item ${pathname === item.href ? 'is-active' : ''}`}
              onClick={() => handleNavClick(item.href)}
              style={{ animationDelay: `${i * 0.1}s` }}
            >
              {item.label}
            </button>
          ))}
          
          <div className="mobile-menu-footer">
            <p>Birmingham, UK</p>
            <p>BABCP Accredited</p>
          </div>
        </div>
      </div>
    </>
  )
}
