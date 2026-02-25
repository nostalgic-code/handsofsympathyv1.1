'use client'

import { useEffect, useRef } from 'react'
import gsap from 'gsap'

interface Props { isReady: boolean; onOpenDrawer: () => void }

export default function HomeHero({ isReady, onOpenDrawer }: Props) {
  const secRef = useRef<HTMLElement>(null)

  useEffect(() => {
    if (!isReady) return
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ delay: 0.2 })
      tl.to('.hero-line .rl-inner', { y: 0, stagger: 0.13, duration: 1.3, ease: 'power4.out' })
        .fromTo(['.hero-sub', '.hero-ctas'],
          { opacity: 0, y: 24 },
          { opacity: 1, y: 0, stagger: 0.12, duration: 0.9, ease: 'power3.out' },
          '-=0.8'
        )
        .fromTo('.hero-deco-ring',
          { opacity: 0, scale: 0.85 },
          { opacity: 1, scale: 1, stagger: 0.15, duration: 1.5, ease: 'power3.out' },
          0.3
        )

      // Breathe on largest ring
      gsap.to('.hero-deco-ring.breathe', {
        scale: 1.06, duration: 6, ease: 'sine.inOut', yoyo: true, repeat: -1,
      })
    }, secRef)
    return () => ctx.revert()
  }, [isReady])

  return (
    <section
      ref={secRef}
      className="relative min-h-screen flex flex-col justify-end overflow-hidden"
      style={{ padding: '8rem 3.5rem 6rem' }}
    >
      {/* Decorative rings */}
      <div className="hero-deco-ring" style={{ position:'absolute', top:'10%', right:'-8%', width:'55vw', height:'55vw' }} />
      <div className="hero-deco-ring breathe" style={{ position:'absolute', top:'20%', right:'4%', width:'35vw', height:'35vw' }} />
      <div className="hero-deco-ring" style={{ position:'absolute', top:'28%', right:'12%', width:'18vw', height:'18vw', borderColor:'rgba(127,23,52,.06)' }} />

      {/* Corner ornament */}
      <div
        className="absolute top-36 right-14 text-right hidden md:block"
        style={{ fontSize: '0.6rem', letterSpacing: '0.25em', textTransform: 'uppercase', color: 'rgba(107,107,107,0.4)', lineHeight: 2.2 }}
      >
        Birmingham, UK<br />BABCP Accredited<br />Est. 2010
      </div>

      {/* Tag */}
      <div className="section-tag mb-12" style={{ marginBottom: '3rem' }}>
        Mental Health Support
      </div>

      {/* Headline */}
      <div>
        <div className="reveal-line hero-line">
          <span className="rl-inner text-display-xl" style={{ color: 'var(--fg)' }}>Support With</span>
        </div>
        <div className="reveal-line hero-line">
          <span className="rl-inner text-display-xl" style={{ color: 'var(--claret)', fontStyle: 'italic' }}>Your Mental</span>
        </div>
        <div className="reveal-line hero-line">
          <span className="rl-inner text-display-xl" style={{ color: 'var(--fg)' }}>Health Concerns</span>
        </div>
      </div>

      {/* Bottom row */}
      <div className="flex flex-col md:flex-row items-start md:items-end justify-between gap-8 mt-16 flex-wrap">
        <p className="hero-sub" style={{ fontSize: '0.95rem', color: 'var(--muted)', maxWidth: '25rem', lineHeight: 1.8, opacity: 0 }}>
          A safe space for your mental wellbeing — compassionate, evidence-based support with over 14 years of clinical expertise.
        </p>
        <div className="hero-ctas flex gap-3" style={{ opacity: 0 }}>
          <button className="btn-claret" onClick={onOpenDrawer}>
            <span>Request a Call</span>
          </button>
          <a className="btn-ghost" href="/why-it-works">
            <span>Why It Works →</span>
          </a>
        </div>
      </div>

      {/* Scroll hint */}
      <div className="scroll-hint">
        <span className="scroll-word">Scroll</span>
        <div className="scroll-bar" />
      </div>

      {/* Page counter */}
      <div className="absolute bottom-10 right-14" style={{ fontFamily: 'var(--font-cormorant)', fontSize: '0.65rem', color: 'rgba(107,107,107,0.25)', letterSpacing: '0.2em' }}>
        01 / 06
      </div>
    </section>
  )
}
