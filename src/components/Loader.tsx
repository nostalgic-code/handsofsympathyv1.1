'use client'

import { useEffect, useRef } from 'react'
import gsap from 'gsap'

interface Props { onComplete: () => void }

export default function Loader({ onComplete }: Props) {
  const wrapRef  = useRef<HTMLDivElement>(null)
  const lineRef  = useRef<HTMLDivElement>(null)
  const numRef   = useRef<HTMLDivElement>(null)
  const wordRef  = useRef<HTMLDivElement>(null)
  const subRef   = useRef<HTMLParagraphElement>(null)

  useEffect(() => {
    const obj = { val: 0 }

    const tl = gsap.timeline({
      onComplete: () => {
        gsap.to(wrapRef.current, {
          clipPath: 'inset(0 0 100% 0)',
          duration: 1.1,
          ease: 'power4.inOut',
          delay: 0.25,
          onComplete,
        })
      },
    })

    tl.fromTo(wordRef.current, { y: 28, opacity: 0 }, { y: 0, opacity: 1, duration: 0.9, ease: 'power3.out' })
      .fromTo(subRef.current,  { opacity: 0 },        { opacity: 1, duration: 0.6 }, '-=0.4')
      .to(lineRef.current, { width: '100%', duration: 2.2, ease: 'power2.inOut' }, 0.3)
      .to(obj, {
          val: 100, duration: 2.2, ease: 'power2.inOut',
          onUpdate: () => {
            if (numRef.current) numRef.current.textContent = String(Math.round(obj.val))
          },
        }, 0.3)
  }, [onComplete])

  return (
    <div ref={wrapRef} className="loader-wrap">
      <div ref={wordRef} className="loader-wordmark">Hands of Sympathy</div>
      <p ref={subRef}    className="loader-sub">Mental Health Support · Birmingham</p>
      <div ref={numRef}  className="loader-num">0</div>
      <div ref={lineRef} className="loader-line" />
    </div>
  )
}
