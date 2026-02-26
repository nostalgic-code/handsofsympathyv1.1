'use client'

import { useEffect, useRef, useCallback } from 'react'
import dynamic from 'next/dynamic'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { useLenis } from '@/hooks/useLenis'
import Nav from '@/components/Nav'
import CallDrawer from '@/components/CallDrawer'
import Marquee from '@/components/Marquee'
import Footer from '@/components/Footer'

const CustomCursor = dynamic(() => import('@/components/CustomCursor'), { ssr: false })
gsap.registerPlugin(ScrollTrigger)

const MODALITIES = [
  {
    index: '01', abbr: 'CBT', color: 'var(--claret)',
    full: 'Cognitive Behavioural Therapy', tag: 'Identify · Challenge · Change',
    body: 'CBT works by helping you understand the connection between thoughts, feelings, and behaviours. Negative thought patterns — often automatic and deeply ingrained — maintain cycles of anxiety and depression. Through structured sessions, you learn to identify these patterns, question their validity, and replace them with more balanced perspectives. The result is measurable, lasting change backed by decades of clinical research.',
  },
  {
    index: '02', abbr: 'ACT', color: 'var(--claret-light)',
    full: 'Acceptance & Commitment Therapy', tag: 'Accept · Connect · Commit',
    body: 'Unlike approaches that try to eliminate difficult thoughts, ACT teaches you to accept them without letting them control you. By developing psychological flexibility — the ability to be present with discomfort while moving toward what matters — you build a life of meaning even in the presence of pain. Particularly effective for chronic conditions, anxiety, and depression where resistance to suffering becomes a secondary source of distress.',
  },
  {
    index: '03', abbr: 'CFT', color: 'var(--claret-dark)',
    full: 'Compassion-Focused Therapy', tag: 'Understand · Soothe · Flourish',
    body: 'CFT addresses the deep shame and self-criticism that underlies many mental health conditions. Drawing on evolutionary psychology and neuroscience, it helps you activate your brain\'s self-soothing system — the same system involved in compassion for others — and turn it inward. Especially powerful for those with high shame, trauma, or difficulties from long-term health conditions, CFT builds the foundation of self-worth from which lasting recovery grows.',
  },
]

const STEPS = [
  { num: 'Step 01', title: 'Initial Contact',  desc: 'Reach out via call request or email. We respond within 24 hours with a warm, non-judgmental reply.' },
  { num: 'Step 02', title: 'Assessment',       desc: 'A thorough clinical assessment helps us understand your needs, history, and goals — tailoring care from the first session.' },
  { num: 'Step 03', title: 'Treatment Plan',   desc: 'We create a personalized, culturally sensitive plan drawing on CBT, ACT, and CFT as appropriate.' },
  { num: 'Step 04', title: 'Ongoing Support',  desc: 'Regular sessions, progress reviews, and 24-hour response support — your recovery is a shared journey.' },
]

export default function WhyPage() {
  useLenis()
  const pageRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Hero
      gsap.to('.why-hero .rl-inner', { y: 0, stagger: 0.13, duration: 1.3, ease: 'power4.out', delay: 0.3 })

      // Generic section reveals
      document.querySelectorAll('.why-reveal .rl-inner').forEach(el => {
        ScrollTrigger.create({
          trigger: el.closest('.reveal-line'), start: 'top 82%', once: true,
          onEnter: () => gsap.to(el, { y: 0, duration: 1.1, ease: 'power4.out' }),
        })
      })

      // Modality items
      gsap.from('.mod-item', {
        opacity: 0, y: 50, stagger: 0.15, duration: 1, ease: 'power3.out',
        scrollTrigger: { trigger: '#why-modalities', start: 'top 78%', once: true },
      })

      // Evidence cards
      gsap.from('.ev-card', {
        opacity: 0, y: 30, stagger: 0.1, duration: 0.8, ease: 'power3.out',
        scrollTrigger: { trigger: '#why-evidence', start: 'top 80%', once: true },
      })

      // Process steps
      gsap.from('.process-step', {
        opacity: 0, y: 30, stagger: 0.12, duration: 0.9, ease: 'power3.out',
        scrollTrigger: { trigger: '#why-process', start: 'top 80%', once: true },
      })
    }, pageRef)
    return () => ctx.revert()
  }, [])

  const openDrawer = useCallback(() => { (window as any).__openCallDrawer?.() }, [])

  return (
    <>
      <div className="grain-overlay" aria-hidden="true" />
      <CustomCursor />
      <Nav isReady={true} />
      <CallDrawer />

      <div ref={pageRef}>
        {/* ── HERO ── */}
        <section
          className="why-hero relative min-h-[70vh] flex items-end overflow-hidden px-4 sm:px-8 md:px-14 pt-32 sm:pt-36 md:pt-40 pb-12 sm:pb-16 md:pb-24"
          style={{ background: 'var(--bg)' }}
        >
          <div style={{ position: 'absolute', top: 0, right: 0, bottom: 0, width: '50%', background: 'linear-gradient(to left,rgba(127,23,52,.05),transparent)', pointerEvents: 'none' }} />
          <div className="relative z-10">
            <div className="section-tag mb-6">The Science Behind Care</div>
            <div className="reveal-line"><span className="rl-inner text-display-xl" style={{ color: 'var(--fg)' }}>Why it</span></div>
            <div className="reveal-line">
              <span className="rl-inner text-display-xl" style={{ color: 'var(--claret)', fontStyle: 'italic' }}>works</span>
            </div>
          </div>
        </section>

        <Marquee />

        {/* ── MODALITIES ── */}
        <section id="why-modalities" className="px-4 sm:px-8 md:px-14 pb-12 sm:pb-16 md:pb-28">
          {MODALITIES.map((m, i) => (
            <div
              key={m.abbr}
              className="mod-item grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-0 py-8 sm:py-12 lg:py-20 items-center"
              style={{
                borderBottom: i < MODALITIES.length - 1 ? '1px solid var(--border)' : undefined,
              }}
            >
              <div className="lg:pr-16">
                <div className="font-display text-6xl sm:text-7xl lg:text-8xl font-light italic text-[rgba(127,23,52,0.06)] mb-2 leading-none">
                  {m.index}
                </div>
                <div style={{ fontFamily: 'var(--font-cormorant)', fontSize: 'clamp(3rem, 8vw, 5rem)', fontStyle: 'italic', color: m.color, lineHeight: 1 }}>{m.abbr}</div>
                <div style={{ fontFamily: 'var(--font-cormorant)', fontSize: '1.4rem', color: 'var(--fg)', margin: '0.75rem 0' }}>{m.full}</div>
                <div style={{ fontSize: '0.7rem', letterSpacing: '0.18em', textTransform: 'uppercase', color: 'var(--claret)', marginBottom: '1.5rem' }}>{m.tag}</div>
                <p style={{ fontSize: '0.85rem', color: 'var(--muted)', lineHeight: 1.85, maxWidth: '28rem' }}>{m.body}</p>
              </div>
              <div className="hidden lg:block lg:pl-16 lg:border-l border-[var(--border)]">
                <div className="mod-visual">
                  <div style={{ position: 'absolute', top: '50%', left: 0, right: 0, height: 1, background: 'rgba(127,23,52,0.08)' }} />
                  <div style={{ position: 'absolute', left: '50%', top: 0, bottom: 0, width: 1, background: 'rgba(127,23,52,0.06)' }} />
                  <div style={{ position: 'absolute', width: '60%', height: '60%', borderRadius: '50%', border: '1px solid rgba(127,23,52,0.1)' }} />
                  <div style={{ position: 'absolute', width: '30%', height: '30%', borderRadius: '50%', border: '1px solid rgba(127,23,52,0.07)' }} />
                  <div className="mod-vis-letter">{m.abbr}</div>
                </div>
              </div>
            </div>
          ))}
        </section>

        {/* ── EVIDENCE ── */}
        <section id="why-evidence" className="px-4 sm:px-8 md:px-14 py-12 sm:py-16 md:py-24" style={{ background: 'var(--claret-dark)' }}>
          <div className="section-tag mb-6" style={{ '--claret': 'rgba(232,216,197,0.45)' } as any}><span style={{ color: 'rgba(232,216,197,0.45)', fontSize: '0.6rem', letterSpacing: '0.28em', textTransform: 'uppercase' }}>Measurable Impact</span></div>
          <div className="reveal-line why-reveal">
            <span className="rl-inner text-display-lg" style={{ color: 'var(--cream-light)' }}>The results</span>
          </div>
          <div className="reveal-line why-reveal">
            <span className="rl-inner text-display-lg" style={{ fontStyle: 'italic', color: 'rgba(155,46,79,0.9)' }}>speak clearly</span>
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-4 mt-8 sm:mt-12 md:mt-16">
            {[
              { num: '14+',  label: 'Years of Clinical Experience' },
              { num: '24hr', label: 'Response Time Guaranteed' },
              { num: '3',    label: 'Integrated Evidence-Based Modalities' },
              { num: 'NHS',  label: 'Also Active within NHS' },
            ].map((e, i) => (
              <div key={e.num} className="ev-card p-4 sm:p-6 md:p-10" style={{ borderLeft: i > 0 ? '1px solid rgba(232,216,197,0.1)' : undefined }}>
                <div className="font-display text-3xl sm:text-4xl md:text-5xl font-light text-[var(--cream-light)] leading-none mb-2">
                  {e.num}
                </div>
                <div style={{ fontSize: '0.65rem', letterSpacing: '0.18em', textTransform: 'uppercase', color: 'rgba(232,216,197,0.38)', lineHeight: 1.7 }}>
                  {e.label}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* ── PROCESS ── */}
        <section id="why-process" className="px-4 sm:px-8 md:px-14 py-12 sm:py-16 md:py-24" style={{ background: 'var(--cream-light)' }}>
          <div className="section-tag mb-6">Our Process</div>
          <div className="reveal-line why-reveal"><span className="rl-inner text-display-lg">How we work</span></div>
          <div className="reveal-line why-reveal">
            <span className="rl-inner text-display-lg" style={{ fontStyle: 'italic', color: 'var(--claret)' }}>with you</span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 mt-8 sm:mt-12 md:mt-16 relative" style={{ position: 'relative' }}>
            {/* Timeline bar */}
            <div style={{ position: 'absolute', top: '0.5rem', left: '2rem', right: '2rem', height: 1, background: 'rgba(127,23,52,0.15)' }} className="hidden lg:block" />
            {STEPS.map(s => (
              <div key={s.num} className="process-step" style={{ paddingRight: '2rem', paddingBottom: '2rem' }}>
                <div className="step-dot" />
                <div style={{ fontSize: '0.6rem', letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--claret)', marginBottom: '0.5rem' }}>{s.num}</div>
                <div style={{ fontFamily: 'var(--font-cormorant)', fontSize: '1.25rem', color: 'var(--fg)', marginBottom: '0.6rem' }}>{s.title}</div>
                <p style={{ fontSize: '0.78rem', color: 'var(--muted)', lineHeight: 1.7 }}>{s.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* ── CTA ── */}
        <section className="px-4 sm:px-8 md:px-14 py-12 sm:py-16 md:py-28 text-center" style={{ background: 'var(--bg)', position: 'relative', overflow: 'hidden' }}>
          <div style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%,-50%)', width: 500, height: 500, borderRadius: '50%', background: 'radial-gradient(circle,rgba(127,23,52,0.05) 0%,transparent 70%)', pointerEvents: 'none' }} />
          <div className="relative z-10">
            <h2 style={{ fontFamily: 'var(--font-cormorant)', fontSize: 'clamp(2.5rem,5vw,6rem)', lineHeight: 1, color: 'var(--fg)', marginBottom: '1.5rem' }}>
              Ready to begin your{' '}
              <span style={{ fontStyle: 'italic', color: 'var(--claret)' }}>journey?</span>
            </h2>
            <p style={{ fontSize: '0.9rem', color: 'var(--muted)', maxWidth: '28rem', margin: '0 auto 3rem', lineHeight: 1.8 }}>
              Take the first step. Our compassionate team responds within 24 hours with personalized guidance on the right path for you.
            </p>
            <button className="btn-claret" onClick={openDrawer}>
              <span>Request a Call Back →</span>
            </button>
          </div>
        </section>

        <Footer />
      </div>
    </>
  )
}
