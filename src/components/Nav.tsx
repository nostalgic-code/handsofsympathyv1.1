'use client'

import { useEffect, useRef } from 'react'
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

  return (
    <nav ref={navRef} className="nav-wrap" aria-label="Main navigation">
      <div className="nav-backdrop" aria-hidden="true" />

      {/* Logo */}
      <a href="/" className="nav-logo" onClick={(e) => { e.preventDefault(); router.push('/') }}>
        <div className="logo-emblem" aria-hidden="true">
          <div className="logo-heart" />
        </div>
        <span className="logo-name">Hands of Sympathy</span>
      </a>

      {/* Pills */}
      <div className="nav-pill-wrap" role="tablist" aria-label="Site pages">
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

      {/* Right: audio */}
      <div className="relative z-10 flex items-center gap-3">
        <AudioButton />
      </div>
    </nav>
  )
}
