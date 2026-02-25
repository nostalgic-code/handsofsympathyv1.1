'use client'

import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

export function PhilosophyStrip() {
  const bgTextRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    gsap.to(bgTextRef.current, {
      xPercent: -20, ease: 'none',
      scrollTrigger: { trigger: '#philosophy-strip', start: 'top bottom', end: 'bottom top', scrub: 1 },
    })
    // Animate quote on scroll
    const quoteEl = document.querySelector('#philosophy-strip .quote-text')
    if (quoteEl) {
      gsap.set(quoteEl, { opacity: 0, y: 30 })
      ScrollTrigger.create({
        trigger: '#philosophy-strip',
        start: 'top 85%',
        once: true,
        onEnter: () => {
          gsap.to(quoteEl, { opacity: 1, y: 0, duration: 1.1, ease: 'power3.out' })
        }
      })
    }
  }, [])

  return (
    <section
      id="philosophy-strip"
      style={{ background: 'var(--claret-dark)', padding: '7rem 0', position: 'relative', overflow: 'hidden' }}
    >
      {/* Drifting background word */}
      <div
        ref={bgTextRef}
        style={{
          fontFamily: 'var(--font-cormorant)', fontSize: '20vw', fontWeight: 300, fontStyle: 'italic',
          color: 'rgba(255,255,255,0.025)', whiteSpace: 'nowrap', pointerEvents: 'none', userSelect: 'none',
          marginBottom: '3rem', willChange: 'transform',
        }}
      >
        Sympathy&nbsp;&nbsp;Recovery&nbsp;&nbsp;Community&nbsp;&nbsp;Healing
      </div>

      <div className="relative z-10 max-w-4xl mx-auto text-center px-8">
        <p
          className="quote-text"
          style={{
            fontFamily: 'var(--font-cormorant)',
            fontSize: 'clamp(2.2rem,4.5vw,4.5rem)',
            fontStyle: 'italic',
            color: 'var(--cream-light)',
            lineHeight: 1.25,
            fontWeight: 300,
          }}
        >
          "A shared experience calls for a shared solution. Community is the vital component on the road to recovery."
        </p>
        <p style={{ marginTop: '2.5rem', fontSize: '0.65rem', letterSpacing: '0.25em', textTransform: 'uppercase', color: 'rgba(232,216,197,0.38)' }}>
          — The Hands of Sympathy Philosophy
        </p>
      </div>
    </section>
  )
}

export function MethodsIntro() {
  const secRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.to('.mi-rl .rl-inner', {
        y: 0, stagger: 0.12, duration: 1.1, ease: 'power4.out',
        scrollTrigger: { trigger: secRef.current, start: 'top 78%', once: true },
      })
      gsap.from('.mi-col', {
        opacity: 0, y: 40, stagger: 0.12, duration: 0.9, ease: 'power3.out',
        scrollTrigger: { trigger: '.mi-grid', start: 'top 78%', once: true },
      })
    }, secRef)
    return () => ctx.revert()
  }, [])

  const methods = [
    { letter: 'CBT', color: 'var(--claret)',       name: 'Cognitive Behavioural Therapy',    desc: 'Identify and change negative thought patterns through structured, evidence-based sessions.' },
    { letter: 'ACT', color: 'var(--claret-light)', name: 'Acceptance & Commitment Therapy',  desc: 'Accept difficulties and commit to meaningful action aligned with your core values.' },
    { letter: 'CFT', color: 'var(--claret-dark)',  name: 'Compassion-Focused Therapy',       desc: 'Develop self-compassion to overcome shame and build lasting psychological resilience.' },
  ]

  return (
    <section ref={secRef} style={{ background: 'var(--cream-light)', padding: '7rem 3.5rem' }}>
      <div className="section-tag mb-6">Our Methods</div>
      <div className="mi-rl reveal-line"><span className="rl-inner text-display-lg">Three modalities,</span></div>
      <div className="mi-rl reveal-line">
        <span className="rl-inner text-display-lg" style={{ fontStyle: 'italic', color: 'var(--claret)' }}>one approach</span>
      </div>

      <div className="mi-grid grid grid-cols-1 md:grid-cols-3 mt-16">
        {methods.map((m, i) => (
          <div
            key={m.letter}
            className="mi-col"
            style={{
              padding: '3rem',
              borderLeft: i > 0 ? '1px solid rgba(127,23,52,0.12)' : undefined,
            }}
          >
            <div style={{ fontFamily: 'var(--font-cormorant)', fontSize: '6rem', fontStyle: 'italic', fontWeight: 300, lineHeight: 1, marginBottom: '1.25rem', color: m.color }}>
              {m.letter}
            </div>
            <div style={{ fontFamily: 'var(--font-cormorant)', fontSize: '1.25rem', color: 'var(--fg)', marginBottom: '0.6rem' }}>
              {m.name}
            </div>
            <p style={{ fontSize: '0.8rem', color: 'var(--muted)', lineHeight: 1.75 }}>{m.desc}</p>
          </div>
        ))}
      </div>
    </section>
  )
}
