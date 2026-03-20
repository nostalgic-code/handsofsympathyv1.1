'use client'

import { useEffect, useRef, useCallback } from 'react'
import dynamic from 'next/dynamic'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { useLenis } from '@/hooks/useLenis'
import Nav from '@/components/Nav'
import CallDrawer from '@/components/CallDrawer'
import Footer from '@/components/Footer'

const CustomCursor = dynamic(() => import('@/components/CustomCursor'), { ssr: false })
gsap.registerPlugin(ScrollTrigger)

const CREDENTIALS = [
  { abbr: 'BABCP', full: 'British Association for Behavioural & Cognitive Psychotherapies' },
  { abbr: 'NMC',   full: 'Nursing and Midwifery Council Registration' },
  { abbr: 'ACT',   full: 'Acceptance and Commitment Therapy' },
  { abbr: 'CFT',   full: 'Compassion-Focused Therapy' },
  { abbr: 'NET',   full: 'Narrative Exposure Therapy for PTSD' },
]

const VALUES = [
  { num: '01', title: 'Personalized',   desc: 'We tailor every intervention to your unique needs, personality, and circumstances. No two journeys are the same — nor should treatment be.' },
  { num: '02', title: 'Cultural',       desc: 'We adapt our approach based on your background, preferences, and lived experiences. Culturally sensitive care is foundational, not optional.' },
  { num: '03', title: 'Evidence-Based', desc: 'Every technique is grounded in scientific research and proven therapeutic frameworks — CBT, ACT, and CFT — for measurable, lasting outcomes.' },
]

export default function AboutPage() {
  useLenis()
  const pageRef     = useRef<HTMLDivElement>(null)
  const portraitRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Hero lines
      gsap.to('.about-hero .rl-inner', { y: 0, stagger: 0.13, duration: 1.3, ease: 'power4.out', delay: 0.3 })

      // Portrait clip-path reveal
      ScrollTrigger.create({
        trigger: portraitRef.current, start: 'top 75%', once: true,
        onEnter: () => gsap.to(portraitRef.current, { clipPath: 'inset(0 0% 0 0)', duration: 1.4, ease: 'power4.inOut' }),
      })

      // Bio paragraphs
      gsap.from('.felix-bio p', {
        opacity: 0, y: 24, stagger: 0.12, duration: 0.9, ease: 'power3.out',
        scrollTrigger: { trigger: '.felix-bio', start: 'top 78%', once: true },
      })

      // Section reveals
      document.querySelectorAll('.about-reveal .rl-inner').forEach(el => {
        ScrollTrigger.create({
          trigger: el.closest('.reveal-line'), start: 'top 82%', once: true,
          onEnter: () => gsap.to(el, { y: 0, duration: 1.1, ease: 'power4.out' }),
        })
      })

      // Value cards
      gsap.from('.value-card', {
        opacity: 0, y: 40, stagger: 0.12, duration: 0.9, ease: 'power3.out',
        scrollTrigger: { trigger: '#about-values', start: 'top 78%', once: true },
      })

      // Credentials
      gsap.from('.credential-pill', {
        opacity: 0, y: 16, stagger: 0.07, duration: 0.6, ease: 'power3.out',
        scrollTrigger: { trigger: '.creds-row', start: 'top 85%', once: true },
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
          className="about-hero relative min-h-[70vh] flex items-end overflow-hidden px-4 sm:px-8 md:px-14 pt-32 sm:pt-36 md:pt-40 pb-12 sm:pb-16 md:pb-24"
          style={{ background: 'var(--bg)' }}
        >
          {/* Large bg number */}
          <div style={{
            position: 'absolute', right: '2rem', bottom: '-2rem',
            fontFamily: 'var(--font-cormorant)', fontSize: '30vw', fontWeight: 300,
            fontStyle: 'italic', color: 'rgba(127,23,52,0.04)', lineHeight: 1,
            pointerEvents: 'none', userSelect: 'none',
          }}>14</div>

          <div className="relative z-10">
            <div className="section-tag mb-6">About Us</div>
            <div className="reveal-line"><span className="rl-inner text-display-xl" style={{ color: 'var(--fg)' }}>Who</span></div>
            <div className="reveal-line">
              <span className="rl-inner text-display-xl" style={{ color: 'var(--claret)', fontStyle: 'italic' }}>we are</span>
            </div>
          </div>
        </section>

        {/* ── FELIX ── */}
        <section className="px-4 sm:px-8 md:px-14 py-12 sm:py-16 md:py-24 grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-24 items-start">
          {/* Portrait */}
          <div style={{ position: 'relative' }}>
            <div ref={portraitRef} className="portrait-box">
              <div style={{ position: 'absolute', inset: 0, display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
                <div style={{ width: 120, height: 120, borderRadius: '50%', border: '1.5px solid rgba(232,216,197,0.2)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  <div style={{ width: 70, height: 70, borderRadius: '50%', border: '1px solid rgba(232,216,197,0.15)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    <span style={{ fontFamily: 'var(--font-cormorant)', fontSize: '3rem', fontStyle: 'italic', color: 'rgba(232,216,197,0.5)' }}>F</span>
                  </div>
                </div>
                {/* Ornaments */}
                <div style={{ position: 'absolute', top: '1.5rem', right: '1.5rem', width: '1.5rem', height: '1.5rem', border: '1px solid rgba(232,216,197,0.2)', transform: 'rotate(45deg)' }} />
              </div>
              <div style={{ position: 'absolute', bottom: 0, left: 0, right: 0, padding: '2rem', background: 'linear-gradient(to top,rgba(90,16,37,0.9),transparent)' }}>
                <div style={{ fontFamily: 'var(--font-cormorant)', fontSize: '1.75rem', color: 'var(--cream-light)' }}>Felix</div>
                <div style={{ fontSize: '0.62rem', letterSpacing: '0.2em', textTransform: 'uppercase', color: 'rgba(232,216,197,0.55)', marginTop: '0.25rem' }}>
                  Cognitive Behavioural Therapist
                </div>
              </div>
            </div>
            {/* Badge */}
            <div style={{ position: 'absolute', bottom: '-1.5rem', right: '-1.75rem', background: 'var(--claret)', padding: '1.25rem 1.75rem', maxWidth: 170, zIndex: 2 }}>
              <div style={{ fontSize: '0.55rem', letterSpacing: '0.15em', textTransform: 'uppercase', color: 'rgba(232,216,197,0.65)', marginBottom: '0.35rem' }}>Registered</div>
              <div style={{ fontFamily: 'var(--font-cormorant)', fontSize: '1rem', color: 'var(--cream-light)', lineHeight: 1.3 }}>BABCP & NMC<br />Accredited</div>
            </div>
          </div>

          {/* Content */}
          <div style={{ paddingTop: '2rem' }}>
            <div className="reveal-line about-reveal" style={{ marginBottom: '0.25rem' }}>
              <span className="rl-inner" style={{ fontFamily: 'var(--font-cormorant)', fontSize: 'clamp(2rem,4vw,4.5rem)', lineHeight: 0.95, letterSpacing: '-0.015em', color: 'var(--fg)' }}>
                A dedicated
              </span>
            </div>
            <div className="reveal-line about-reveal" style={{ marginBottom: '2.5rem' }}>
              <span className="rl-inner" style={{ fontFamily: 'var(--font-cormorant)', fontSize: 'clamp(2rem,4vw,4.5rem)', lineHeight: 0.95, letterSpacing: '-0.015em', color: 'var(--claret)', fontStyle: 'italic' }}>
                clinician
              </span>
            </div>

            <div className="felix-bio" style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem', maxWidth: '30rem' }}>
              <p style={{ fontSize: '0.88rem', color: 'var(--muted)', lineHeight: 1.9 }}>
                I am a Cognitive Behavioural Therapist (CBT) with full BABCP accreditation and NMC registration. For over 14 years, I have dedicated my work to promoting the mental well-being of people and improving their understanding of their mental health conditions and needs.
              </p>
              <p style={{ fontSize: '0.88rem', color: 'var(--muted)', lineHeight: 1.9 }}>
                I have completed Acceptance and Commitment Therapy (ACT) and Compassion-Focused Therapy (CFT) — particularly valuable when working with patients experiencing psychological difficulties from long-term health conditions like Chronic Fatigue Syndrome, Chronic Pain, and Functional Neurological Disorder.
              </p>
              <p style={{ fontSize: '0.88rem', color: 'var(--muted)', lineHeight: 1.9 }}>
                I have also completed Narrative Exposure Therapy (NET) for PTSD. I currently work as a CBT therapist in private practice in Birmingham and in the NHS. My partner, a clinical Registered Mental Health Nurse within CAMHS, joins me in supporting young people with neurodevelopmental concerns and their Educational Healthcare Plans.
              </p>
            </div>

            {/* Credentials */}
            <div style={{ marginTop: '2.5rem' }}>
              <p style={{ fontSize: '0.6rem', letterSpacing: '0.2em', textTransform: 'uppercase', color: 'rgba(107,107,107,0.45)', marginBottom: '1rem' }}>
                Qualifications & Accreditations
              </p>
              <div className="creds-row flex flex-wrap gap-2">
                {CREDENTIALS.map(c => (
                  <div key={c.abbr} className="group relative">
                    <span className="credential-pill">{c.abbr}</span>
                    <div style={{
                      position: 'absolute', bottom: '100%', left: 0, marginBottom: '0.5rem',
                      background: 'var(--fg)', color: 'var(--bg)', fontSize: '0.65rem',
                      padding: '0.5rem 0.75rem', whiteSpace: 'nowrap', opacity: 0,
                      transition: 'opacity .2s', pointerEvents: 'none', zIndex: 10,
                    }}
                    className="group-hover:opacity-100">
                      {c.full}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Location */}
            <div style={{ marginTop: '2rem', paddingTop: '2rem', borderTop: '1px solid var(--border)', display: 'flex', alignItems: 'center', gap: '1rem' }}>
              <div style={{ width: 40, height: 40, borderRadius: '50%', border: '1.5px solid rgba(127,23,52,0.2)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--claret)', flexShrink: 0 }}>
                ◎
              </div>
              <div>
                <div style={{ fontSize: '0.6rem', textTransform: 'uppercase', letterSpacing: '0.12em', color: 'rgba(107,107,107,0.4)' }}>Location</div>
                <div style={{ fontSize: '0.88rem', color: 'var(--fg)', fontWeight: 500 }}>Birmingham & NHS Nationwide</div>
              </div>
            </div>
          </div>
        </section>

        {/* ── VALUES ── */}
        <section id="about-values" className="px-4 sm:px-8 md:px-14 py-12 sm:py-16 md:py-24" style={{ background: 'var(--cream-light)' }}>
          <div className="section-tag mb-6">Our Approach</div>
          <div className="reveal-line about-reveal"><span className="rl-inner text-display-lg">Every person is unique.</span></div>
          <div className="reveal-line about-reveal">
            <span className="rl-inner text-display-lg" style={{ fontStyle: 'italic', color: 'var(--claret)' }}>So is our care.</span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mt-16">
            {VALUES.map(v => (
              <div key={v.num} className="value-card">
                <div style={{ fontFamily: 'var(--font-cormorant)', fontSize: '3.5rem', color: 'rgba(127,23,52,0.1)', fontWeight: 300, lineHeight: 1, marginBottom: '1rem' }}>
                  {v.num}
                </div>
                <h3 style={{ fontFamily: 'var(--font-cormorant)', fontSize: '1.5rem', color: 'var(--fg)', marginBottom: '0.6rem' }}>{v.title}</h3>
                <p style={{ fontSize: '0.8rem', color: 'var(--muted)', lineHeight: 1.75 }}>{v.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* ── CTA ── */}
        <section className="px-4 sm:px-8 md:px-14 py-12 sm:py-16 md:py-24" style={{ background: 'var(--claret)', position: 'relative', overflow: 'hidden' }}>
          <div style={{
            position: 'absolute', right: '-3rem', top: '50%', transform: 'translateY(-50%)',
            fontFamily: 'var(--font-cormorant)', fontSize: '18rem', fontStyle: 'italic',
            color: 'rgba(255,255,255,0.03)', lineHeight: 1, pointerEvents: 'none',
          }}>Together</div>
          <div className="relative z-10 flex flex-col md:flex-row items-start md:items-center justify-between gap-8 flex-wrap">
            <p style={{ fontFamily: 'var(--font-cormorant)', fontSize: 'clamp(2rem,4vw,3.5rem)', color: 'var(--cream-light)', fontStyle: 'italic', fontWeight: 300, lineHeight: 1.25, maxWidth: '32rem' }}>
              "When you join Hands of Sympathy, you become part of a recovery-focused community."
            </p>
            <button className="btn-ghost-light" onClick={openDrawer}>
              <span>Begin Your Journey →</span>
            </button>
          </div>
        </section>

        <Footer />
      </div>
    </>
  )
}
