'use client'

import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

const SERVICES = [
  { num: '01', tag: 'Core Service', title: 'Compassionate Care',             desc: 'Targeted modalities for psychological difficulties including stress, depression, PTSD, and anxiety disorders.' },
  { num: '02', tag: 'Specialist',   title: 'Neurodevelopmental Assessments', desc: 'ADOS-2, ADIR, and CAT-Q assessments identifying traits aligning with Autism Spectrum Conditions.' },
  { num: '03', tag: 'Assessment',   title: 'Psychometric Testing',            desc: 'Determining if a diagnosis sufficiently describes the challenges a young person faces.' },
  { num: '04', tag: 'Group',        title: 'Family Workshops',               desc: 'Educational resources and therapeutic guidance for collective family healing and growth.' },
  { num: '05', tag: 'Therapy',      title: '1:1 Therapy Sessions',           desc: 'Personalized one-on-one sessions using evidence-based cognitive behavioral therapy approaches.' },
]

interface Props { onOpenDrawer: () => void }

export default function ServicesPreview({ onOpenDrawer }: Props) {
  const secRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.to('.sp-rl .rl-inner', {
        y: 0, stagger: 0.12, duration: 1.1, ease: 'power4.out',
        scrollTrigger: { trigger: '.sp-heading', start: 'top 80%' },
      })
      gsap.from('.service-card', {
        opacity: 0, y: 50, stagger: 0.08, duration: 0.9, ease: 'power3.out',
        scrollTrigger: { trigger: '#sp-grid', start: 'top 78%', once: true },
      })
    }, secRef)
    return () => ctx.revert()
  }, [])

  return (
    <section ref={secRef} style={{ background: 'var(--bg)', padding: '7rem 3.5rem' }}>
      <div className="sp-heading flex flex-col md:flex-row md:items-start md:justify-between gap-8 mb-16 flex-wrap">
        <div className="flex-1">
          <div className="section-tag mb-6">What We Offer</div>
          <div className="sp-rl reveal-line"><span className="rl-inner text-display-lg">A safe space</span></div>
          <div className="sp-rl reveal-line">
            <span className="rl-inner text-display-lg" style={{ fontStyle: 'italic', color: 'var(--claret)' }}>
              for your wellbeing
            </span>
          </div>
        </div>
        <div style={{ maxWidth: '22rem', paddingTop: '1.5rem' }}>
          <p style={{ fontSize: '0.875rem', color: 'var(--muted)', lineHeight: 1.8 }}>
            We listen and help you identify coping strategies and other helpful ways of tackling your concerns with personalized, culturally sensitive care.
          </p>
        </div>
      </div>

      <div id="sp-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', border: '1px solid var(--border)' }}>
        {SERVICES.map((s, i) => (
          <div
            key={s.num}
            className="service-card"
            style={{ borderTop: i >= 3 ? '1px solid var(--border)' : undefined }}
          >
            <div className="card-tag">{s.tag}</div>
            <div className="card-num">{s.num}</div>
            <h3 className="card-title">{s.title}</h3>
            <p className="card-desc">{s.desc}</p>
            <div className="card-link">Learn more →</div>
          </div>
        ))}

        {/* CTA card */}
        <div
          className="service-card"
          style={{ background: 'var(--claret-dark)', borderTop: '1px solid rgba(232,216,197,0.1)', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}
        >
          <div style={{ fontFamily: 'var(--font-cormorant)', fontSize: '4rem', color: 'rgba(232,216,197,0.1)', lineHeight: 1 }}>→</div>
          <div>
            <p style={{ fontFamily: 'var(--font-cormorant)', fontSize: '1.4rem', color: 'var(--cream-light)', fontStyle: 'italic', lineHeight: 1.4, marginBottom: '1.5rem' }}>
              "Every person is unique. So is our care."
            </p>
            <button className="btn-ghost-light" onClick={onOpenDrawer}>
              <span>Book Your Session</span>
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}
