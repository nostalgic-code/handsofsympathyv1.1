'use client'

import { useEffect, useRef } from 'react'
import gsap from 'gsap'

export default function CustomCursor() {
  const dotRef  = useRef<HTMLDivElement>(null)
  const ringRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const dot  = dotRef.current
    const ring = ringRef.current
    if (!dot || !ring) return

    let mx = 0, my = 0, rx = 0, ry = 0

    const onMove = (e: MouseEvent) => {
      mx = e.clientX; my = e.clientY
      gsap.to(dot, { x: mx, y: my, duration: 0.08, ease: 'power2.out' })
    }

    const animRing = () => {
      rx += (mx - rx) * 0.08; ry += (my - ry) * 0.08
      gsap.set(ring, { x: rx, y: ry })
      requestAnimationFrame(animRing)
    }
    animRing()

    window.addEventListener('mousemove', onMove)

    const addHover    = () => ring.classList.add('is-hovering')
    const removeHover = () => ring.classList.remove('is-hovering')

    const attach = () => {
      document.querySelectorAll('a,button,[data-hover]').forEach(el => {
        el.removeEventListener('mouseenter', addHover)
        el.removeEventListener('mouseleave', removeHover)
        el.addEventListener('mouseenter', addHover)
        el.addEventListener('mouseleave', removeHover)
      })
    }
    attach()
    const obs = new MutationObserver(attach)
    obs.observe(document.body, { subtree: true, childList: true })

    return () => { window.removeEventListener('mousemove', onMove); obs.disconnect() }
  }, [])

  return (
    <>
      <div ref={dotRef}  className="cursor-dot"  aria-hidden="true" />
      <div ref={ringRef} className="cursor-ring" aria-hidden="true" />
    </>
  )
}
