'use client'

import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import Image from 'next/image'

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

      // Hero image reveal
      tl.fromTo('.hero-image-wrap',
        { clipPath: 'circle(0% at 50% 50%)', opacity: 0 },
        { clipPath: 'circle(75% at 50% 50%)', opacity: 1, duration: 1.8, ease: 'power3.inOut' },
        0.6
      )
      .fromTo('.hero-image-inner',
        { scale: 1.3 },
        { scale: 1, duration: 2, ease: 'power3.out' },
        0.6
      )
      .fromTo('.hero-image-frame',
        { opacity: 0, scale: 0.9 },
        { opacity: 1, scale: 1, duration: 1.2, ease: 'power3.out' },
        1
      )

      // Breathe on largest ring
      gsap.to('.hero-deco-ring.breathe', {
        scale: 1.06, duration: 6, ease: 'sine.inOut', yoyo: true, repeat: -1,
      })

      // Subtle float on image
      gsap.to('.hero-image-wrap', {
        y: -12, duration: 4, ease: 'sine.inOut', yoyo: true, repeat: -1,
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

      {/* Hero Image - positioned within the rings */}
      <div 
        className="hero-image-container"
        style={{
          position: 'absolute',
          top: '12%',
          right: '6%',
          width: 'clamp(280px, 32vw, 480px)',
          height: 'clamp(350px, 42vw, 600px)',
          zIndex: 2,
        }}
      >
        {/* Decorative frame behind image */}
        <div 
          className="hero-image-frame"
          style={{
            position: 'absolute',
            inset: '-20px',
            border: '1px solid rgba(127,23,52,0.15)',
            borderRadius: '200px 200px 120px 120px',
            opacity: 0,
          }}
        />
        <div 
          className="hero-image-frame"
          style={{
            position: 'absolute',
            inset: '-40px',
            border: '1px solid rgba(127,23,52,0.08)',
            borderRadius: '220px 220px 140px 140px',
            opacity: 0,
          }}
        />
        
        {/* Image wrapper with clip mask */}
        <div 
          className="hero-image-wrap"
          style={{
            position: 'relative',
            width: '100%',
            height: '100%',
            borderRadius: '180px 180px 100px 100px',
            overflow: 'hidden',
            boxShadow: '0 40px 80px -20px rgba(127,23,52,0.25), 0 20px 40px -15px rgba(0,0,0,0.1)',
            opacity: 0,
          }}
        >
          <div className="hero-image-inner" style={{ width: '100%', height: '100%' }}>
            <Image
              src="https://images.unsplash.com/photo-1607748862156-7c548e7e98f4?q=80&w=1887&auto=format&fit=crop"
              alt="Supportive therapy session"
              fill
              priority
              sizes="(max-width: 768px) 280px, 32vw"
              style={{ objectFit: 'cover', objectPosition: 'center 20%' }}
            />
          </div>
          
          {/* Overlay gradient for depth */}
          <div 
            style={{
              position: 'absolute',
              inset: 0,
              background: 'linear-gradient(180deg, rgba(127,23,52,0.05) 0%, transparent 30%, transparent 70%, rgba(127,23,52,0.12) 100%)',
              pointerEvents: 'none',
            }}
          />
        </div>

        {/* Floating caption */}
        <div 
          className="hero-image-caption"
          style={{
            position: 'absolute',
            bottom: '-30px',
            left: '50%',
            transform: 'translateX(-50%)',
            background: 'var(--bg)',
            padding: '0.75rem 1.5rem',
            fontSize: '0.6rem',
            letterSpacing: '0.25em',
            textTransform: 'uppercase',
            color: 'var(--muted)',
            whiteSpace: 'nowrap',
            boxShadow: '0 4px 20px rgba(0,0,0,0.06)',
          }}
        >
          Your Journey Begins
        </div>
      </div>

      {/* Corner ornament */}
      <div
        className="absolute top-36 right-14 text-right hidden lg:block"
        style={{ fontSize: '0.6rem', letterSpacing: '0.25em', textTransform: 'uppercase', color: 'rgba(107,107,107,0.4)', lineHeight: 2.2, zIndex: 1 }}
      >
        Birmingham, UK<br />BABCP Accredited<br />Est. 2010
      </div>

      {/* Tag */}
      <div className="section-tag mb-12" style={{ marginBottom: '3rem', position: 'relative', zIndex: 3 }}>
        Mental Health Support
      </div>

      {/* Headline */}
      <div style={{ position: 'relative', zIndex: 3 }}>
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
      <div className="flex flex-col md:flex-row items-start md:items-end justify-between gap-8 mt-16 flex-wrap" style={{ position: 'relative', zIndex: 3 }}>
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
      <div className="absolute bottom-10 right-14" style={{ fontFamily: 'var(--font-cormorant)', fontSize: '0.65rem', color: 'rgba(107,107,107,0.25)', letterSpacing: '0.2em', zIndex: 3 }}>
        01 / 06
      </div>
    </section>
  )
}
