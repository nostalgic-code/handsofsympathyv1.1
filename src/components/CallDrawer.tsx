'use client'

import { useState, useEffect, useCallback, useRef } from 'react'
import gsap from 'gsap'

export default function CallDrawer() {
  const [open,      setOpen]      = useState(false)
  const [submitted, setSubmitted] = useState(false)
  const [chip,      setChip]      = useState<string | null>(null)
  const panelRef = useRef<HTMLDivElement>(null)

  const openDrawer  = useCallback(() => {
    setOpen(true)
    document.body.style.overflow = 'hidden'
    ;(window as any).__lenis?.stop()
  }, [])
  
  const closeDrawer = useCallback(() => {
    setOpen(false)
    document.body.style.overflow = ''
    ;(window as any).__lenis?.start()
  }, [])

  // Expose openDrawer globally so other components can trigger it
  useEffect(() => {
    (window as any).__openCallDrawer = openDrawer
    return () => { delete (window as any).__openCallDrawer }
  }, [openDrawer])

  // Keyboard close
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => { if (e.key === 'Escape') closeDrawer() }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [closeDrawer])

  // Prevent wheel events from propagating to Lenis
  useEffect(() => {
    const panel = panelRef.current
    if (!panel) return
    const stopWheel = (e: WheelEvent) => e.stopPropagation()
    panel.addEventListener('wheel', stopWheel, { passive: false })
    return () => panel.removeEventListener('wheel', stopWheel)
  }, [])

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setSubmitted(true)
    gsap.from('#drawer-success > *', {
      opacity: 0, y: 20, stagger: 0.15, duration: 0.8, ease: 'power3.out',
    })
  }

  const chips = ['Morning (9–12)', 'Afternoon (12–5)', 'Evening (5–7)', 'Flexible']

  return (
    <>
      {/* FAB */}
      <button className="call-fab" onClick={openDrawer} aria-label="Request a call back">
        <div className="fab-pulse" aria-hidden="true" />
        <span>Request a Call</span>
      </button>

      {/* Backdrop */}
      <div
        className={`drawer-backdrop${open ? ' is-open' : ''}`}
        onClick={closeDrawer}
        aria-hidden="true"
      />

      {/* Drawer */}
      <div
        ref={panelRef}
        className={`drawer-panel${open ? ' is-open' : ''}`}
        role="dialog"
        aria-modal="true"
        aria-label="Request a call back"
        data-lenis-prevent
      >
        <div className="drawer-header">
          <div>
            <div className="drawer-eyebrow">Take the first step</div>
            <h2 className="drawer-title">
              Request a <em>call back</em>
            </h2>
          </div>
          <button className="drawer-close" onClick={closeDrawer} aria-label="Close drawer">✕</button>
        </div>

        {!submitted ? (
          <div className="drawer-scroll" data-lenis-prevent>
            <form className="drawer-form" onSubmit={handleSubmit}>
              {/* Name row */}
              <div className="grid grid-cols-2 gap-5">
                <div>
                  <label className="field-label">First Name</label>
                  <input className="field-input" type="text" placeholder="Your name" required />
              </div>
              <div>
                <label className="field-label">Last Name</label>
                <input className="field-input" type="text" placeholder="Family name" />
              </div>
            </div>

            <div>
              <label className="field-label">Email Address</label>
              <input className="field-input" type="email" placeholder="your@email.com" required />
            </div>

            <div>
              <label className="field-label">Phone Number</label>
              <input className="field-input" type="tel" placeholder="+44 7xxx xxxxxx" />
            </div>

            <div>
              <label className="field-label">Area of Concern</label>
              <select className="field-select">
                <option value="">Select a service...</option>
                <option>General Mental Health Support</option>
                <option>Anxiety &amp; Stress</option>
                <option>Depression</option>
                <option>PTSD Treatment</option>
                <option>Neurodevelopmental Assessment</option>
                <option>Psychometric Testing</option>
                <option>Family Workshop</option>
                <option>1:1 CBT Sessions</option>
              </select>
            </div>

            <div>
              <label className="field-label">Preferred Time for Call</label>
              <div className="time-chips">
                {chips.map(c => (
                  <button
                    key={c}
                    type="button"
                    className={`time-chip${chip === c ? ' is-selected' : ''}`}
                    onClick={() => setChip(c)}
                  >
                    {c}
                  </button>
                ))}
              </div>
            </div>

            <div>
              <label className="field-label">Brief Message (optional)</label>
              <textarea
                className="field-textarea"
                rows={3}
                placeholder="Tell us a little about what you're looking for..."
              />
            </div>

            <p className="form-notice">
              All information is kept strictly confidential in accordance with GDPR
              and our professional ethics guidelines. We will never share your details.
            </p>

            <button
              type="submit"
              className="btn-claret w-full justify-center py-5"
            >
              <span>Submit Request →</span>
            </button>
            </form>
          </div>
        ) : (
          <div
            id="drawer-success"
            className="flex-1 flex flex-col items-center justify-center text-center p-16"
          >
            <div
              className="w-18 h-18 rounded-full mb-8 flex items-center justify-center"
              style={{ border: '1.5px solid var(--claret)', width: 72, height: 72 }}
            >
              <span style={{ color: 'var(--claret)', fontSize: '1.5rem' }}>✓</span>
            </div>
            <h3
              className="font-display mb-4"
              style={{ fontSize: '2.5rem', color: 'var(--fg)', fontFamily: 'var(--font-cormorant)' }}
            >
              Thank you
            </h3>
            <p style={{ fontSize: '0.88rem', color: 'var(--muted)', lineHeight: 1.75, maxWidth: 280 }}>
              We&apos;ve received your request and will call you within 24 hours.
              You&apos;re taking a courageous step.
            </p>
          </div>
        )}
      </div>
    </>
  )
}
