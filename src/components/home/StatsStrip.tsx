'use client'

import { Fragment, useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

const STATS = [
  { id: 'stat-years', end: 14, suffix: '+',  label: 'Years of Experience' },
  { id: 'stat-hours', end: 24, suffix: 'hr', label: 'Response Time' },
  { id: 'stat-mods',  end: 3,  suffix: '',   label: 'Integrated Modalities' },
]

export default function StatsStrip() {
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    STATS.forEach(({ id, end, suffix }) => {
      const el = document.getElementById(id)
      if (!el) return
      const o = { val: 0 }
      ScrollTrigger.create({
        trigger: ref.current,
        start: 'top 85%',
        once: true,
        onEnter: () =>
          gsap.to(o, {
            val: end, duration: 2, ease: 'power2.out',
            onUpdate: () => { el.textContent = `${Math.round(o.val)}${suffix}` },
          }),
      })
    })
  }, [])

  return (
    <div ref={ref} className="stats-strip">
      {STATS.map((s, i) => (
        <Fragment key={s.id}>
          <div>
            <div
              id={s.id}
              style={{ fontFamily: 'var(--font-cormorant)', fontSize: 'clamp(3rem,5vw,4.5rem)', color: 'var(--cream-light)', lineHeight: 1, fontWeight: 300 }}
            >
              0
            </div>
            <div style={{ fontSize: '0.65rem', letterSpacing: '0.18em', textTransform: 'uppercase', color: 'rgba(232,216,197,0.5)', marginTop: '0.4rem' }}>
              {s.label}
            </div>
          </div>
          {i < STATS.length - 1 && (
            <div style={{ width: 1, height: '4rem', background: 'rgba(232,216,197,0.15)', flexShrink: 0 }} />
          )}
        </Fragment>
      ))}
      {/* Static last stat */}
      <div style={{ width: 1, height: '4rem', background: 'rgba(232,216,197,0.15)', flexShrink: 0 }} />
      <div>
        <div style={{ fontFamily: 'var(--font-cormorant)', fontSize: 'clamp(3rem,5vw,4.5rem)', color: 'var(--cream-light)', lineHeight: 1, fontWeight: 300 }}>NHS</div>
        <div style={{ fontSize: '0.65rem', letterSpacing: '0.18em', textTransform: 'uppercase', color: 'rgba(232,216,197,0.5)', marginTop: '0.4rem' }}>Also Work With NHS</div>
      </div>
    </div>
  )
}
