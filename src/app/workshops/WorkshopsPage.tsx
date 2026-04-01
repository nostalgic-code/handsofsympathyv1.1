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

const TOPICS = [
  {
    num: '01',
    title: 'What is Neurodiversity?',
    desc: 'Neurodiversity describes the natural variation in how human brains work. It is not a mental illness — it is a lifelong difference that requires understanding, acceptance, and the right environment to flourish.',
    tag: 'Foundation',
  },
  {
    num: '02',
    title: 'Recognising Early Signs',
    desc: 'Early identification changes outcomes. We explore the developmental milestones, the signs of ASD, ADHD, and Specific Learning Disorders, and how caregivers and educators can spot them before they become barriers.',
    tag: 'Identification',
  },
  {
    num: '03',
    title: 'A Strengths-Based Approach',
    desc: 'Neurodivergent individuals often carry remarkable strengths — deep focus, creativity, pattern recognition, and more. The workshop shifts the lens from deficit to potential, equipping families to build on what a child can do.',
    tag: 'Empowerment',
  },
  {
    num: '04',
    title: 'Practical Support Strategies',
    desc: 'From behavioral therapy to occupational support, social skills training, and parent-led home strategies — attendees leave with actionable tools that make a real difference in the classroom and at home.',
    tag: 'Action',
  },
]

const VENUES = [
  {
    id: 'fairview',
    name: 'Fairview Adventist Primary School',
    location: 'Fairview, Bulawayo',
    description:
      'A morning of learning and discovery for parents, teachers, and community members at Fairview Adventist Primary School. The session explored neurodevelopmental differences and how schools can better support every learner.',
  },
  {
    id: 'bahs',
    name: 'Bulawayo Adventist High School',
    location: 'Bulawayo',
    description:
      'Secondary school educators and students joined Felix for an engaging session on neurodiversity, mental health, and the importance of inclusive environments in high school settings.',
  },
  {
    id: 'phela',
    name: 'Pelandaba Adventist Primary School',
    location: 'Pelandaba, Bulawayo',
    description:
      'Families and teachers came together at Pelandaba Adventist Primary School to understand how neurodivergent children experience the world — and how small changes in approach can unlock tremendous potential.',
  },
  {
    id: 'sda',
    name: 'Makhokhoba SDA Church',
    location: 'Makhokhoba, Bulawayo',
    description:
      'A community gathering at Makhokhoba SDA Church brought together congregation members and families to break down stigma around neurodevelopmental conditions and mental health, and to foster a culture of compassion and understanding.',
  },
]


export default function WorkshopsPage() {
  useLenis()
  const pageRef  = useRef<HTMLDivElement>(null)
  const videoRef = useRef<HTMLVideoElement>(null)
  const heroImgRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Hero lines
      gsap.to('.wk-hero .rl-inner', {
        y: 0, stagger: 0.13, duration: 1.3, ease: 'power4.out', delay: 0.3,
      })

      // Hero image clip-path reveal — slides in from right
      gsap.fromTo(heroImgRef.current,
        { clipPath: 'inset(0 100% 0 0)' },
        { clipPath: 'inset(0 0% 0 0)', duration: 1.4, ease: 'power4.inOut', delay: 0.6 }
      )

      // Generic section reveals
      document.querySelectorAll('.wk-reveal .rl-inner').forEach(el => {
        ScrollTrigger.create({
          trigger: el.closest('.reveal-line'), start: 'top 82%', once: true,
          onEnter: () => gsap.to(el, { y: 0, duration: 1.1, ease: 'power4.out' }),
        })
      })

      // Topic cards
      gsap.from('.topic-card', {
        opacity: 0, y: 50, stagger: 0.1, duration: 0.9, ease: 'power3.out',
        scrollTrigger: { trigger: '#wk-topics', start: 'top 78%', once: true },
      })

      // Video section
      gsap.from('.wk-video-wrap', {
        opacity: 0, scale: 0.96, duration: 1.1, ease: 'power3.out',
        scrollTrigger: { trigger: '.wk-video-wrap', start: 'top 80%', once: true },
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
          className="wk-hero relative overflow-hidden px-4 sm:px-8 md:px-14 pt-32 sm:pt-36 md:pt-40 pb-12 sm:pb-16 md:pb-24"
          style={{ background: 'var(--bg)', minHeight: '85vh' }}
        >
          {/* Background decorative letter */}
          <div style={{
            position: 'absolute', left: '-2rem', bottom: '-4rem',
            fontFamily: 'var(--font-cormorant)', fontSize: '32vw', fontWeight: 300,
            fontStyle: 'italic', color: 'rgba(127,23,52,0.03)', lineHeight: 1,
            pointerEvents: 'none', userSelect: 'none',
          }}>N</div>

          {/* Two-column layout: text left, image right */}
          <div
            className="relative z-10 flex flex-col lg:flex-row items-start lg:items-end justify-between gap-10 lg:gap-16 h-full"
            style={{ minHeight: 'calc(85vh - 12rem)' }}
          >
            {/* Left — text */}
            <div style={{ flex: '1 1 auto', paddingBottom: '2rem' }}>
              <div className="section-tag mb-6">Family &amp; Community Workshops</div>
              <div className="reveal-line">
                <span className="rl-inner text-display-xl" style={{ color: 'var(--fg)' }}>Understanding</span>
              </div>
              <div className="reveal-line">
                <span className="rl-inner text-display-xl" style={{ color: 'var(--claret)', fontStyle: 'italic' }}>Neurodiversity</span>
              </div>
              <div className="reveal-line" style={{ marginTop: '2.5rem' }}>
                <span className="rl-inner" style={{
                  display: 'block', fontSize: '0.9rem', color: 'var(--muted)',
                  lineHeight: 1.8, maxWidth: '32rem',
                }}>
                  A community-led workshop designed to equip families, educators, and carers with a deeper understanding of neurodevelopmental conditions — and the practical tools to support every person in their care.
                </span>
              </div>
            </div>

            {/* Right — hero image (FAIR1) */}
            <div
              ref={heroImgRef}
              style={{
                flexShrink: 0,
                width: 'clamp(340px, 46vw, 680px)',
                height: 'clamp(420px, 58vw, 820px)',
                clipPath: 'inset(0 100% 0 0)',
                position: 'relative', overflow: 'hidden',
                alignSelf: 'flex-end',
              }}
              className="hidden lg:block"
            >
              <img
                src="/image1.png"
                alt="Neurodiversity workshop in session"
                style={{
                  width: '100%', height: '100%',
                  objectFit: 'cover', display: 'block',
                }}
              />
              {/* Subtle claret tint overlay at bottom */}
              <div style={{
                position: 'absolute', bottom: 0, left: 0, right: 0, height: '40%',
                background: 'linear-gradient(to top, rgba(90,16,37,0.55), transparent)',
              }} />
              {/* Location label */}
              <div style={{
                position: 'absolute', bottom: '1.5rem', left: '1.5rem',
                fontSize: '0.58rem', letterSpacing: '0.2em', textTransform: 'uppercase',
                color: 'rgba(232,216,197,0.7)',
              }}>
                Hands of Sympathy Workshops
              </div>
            </div>
          </div>

          {/* Mobile image — shown below heading on small screens */}
          <div
            style={{
              marginTop: '2rem',
              width: '100%', height: 'clamp(220px, 55vw, 320px)',
              position: 'relative', overflow: 'hidden',
            }}
            className="block lg:hidden"
          >
            <img
              src="/image1.png"
              alt="Neurodiversity workshop in session"
              style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }}
            />
            <div style={{
              position: 'absolute', bottom: 0, left: 0, right: 0, height: '40%',
              background: 'linear-gradient(to top, rgba(90,16,37,0.55), transparent)',
            }} />
            <div style={{
              position: 'absolute', bottom: '1rem', left: '1rem',
              fontSize: '0.58rem', letterSpacing: '0.2em', textTransform: 'uppercase',
              color: 'rgba(232,216,197,0.7)',
            }}>
              Hands of Sympathy Workshops
            </div>
          </div>
        </section>

        <Marquee />

        {/* ── WHAT WE COVER ── */}
        <section
          id="wk-topics"
          className="px-4 sm:px-8 md:px-14 py-12 sm:py-16 md:py-28"
          style={{ background: 'var(--bg)' }}
        >
          <div className="section-tag mb-6">What We Cover</div>
          <div className="reveal-line wk-reveal">
            <span className="rl-inner text-display-lg">Four pillars of</span>
          </div>
          <div className="reveal-line wk-reveal">
            <span className="rl-inner text-display-lg" style={{ fontStyle: 'italic', color: 'var(--claret)' }}>understanding</span>
          </div>

          <p style={{ marginTop: '1.5rem', fontSize: '0.85rem', color: 'var(--muted)', lineHeight: 1.9, maxWidth: '32rem' }}>
            The workshop is designed as a teaser into the world of neurodiversity — practical, accessible, and rooted in the same evidence-based approach Felix brings to his clinical practice.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 border border-[var(--border)] mt-12 sm:mt-16">
            {TOPICS.map((t, i) => (
              <div
                key={t.num}
                className="topic-card"
                style={{
                  padding: '2.5rem 2rem',
                  borderRight: i < TOPICS.length - 1 ? '1px solid var(--border)' : undefined,
                  borderTop: undefined,
                  position: 'relative', overflow: 'hidden',
                  transition: 'background .4s',
                }}
                onMouseEnter={e => (e.currentTarget.style.background = 'var(--cream-light)')}
                onMouseLeave={e => (e.currentTarget.style.background = '')}
              >
                <div className="card-tag">{t.tag}</div>
                <div className="card-num">{t.num}</div>
                <h3 className="card-title">{t.title}</h3>
                <p className="card-desc">{t.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* ── VIDEO ── */}
        <section
          className="px-4 sm:px-8 md:px-14 py-12 sm:py-16 md:py-20"
          style={{ background: 'var(--cream-light)' }}
        >
          <div className="section-tag mb-6">See It In Action</div>
          <div className="reveal-line wk-reveal mb-10 sm:mb-14">
            <span className="rl-inner text-display-lg">From the</span>
          </div>
          <div className="reveal-line wk-reveal" style={{ marginBottom: '3rem' }}>
            <span className="rl-inner text-display-lg" style={{ fontStyle: 'italic', color: 'var(--claret)' }}>workshop floor</span>
          </div>

          <div
            className="wk-video-wrap"
            style={{
              position: 'relative', overflow: 'hidden',
              background: 'var(--claret-dark)',
              maxWidth: '900px',
            }}
          >
            {/* Decorative corner */}
            <div style={{
              position: 'absolute', top: '1rem', right: '1rem', zIndex: 2,
              padding: '0.4rem 0.9rem',
              border: '1px solid rgba(232,216,197,0.15)',
              fontSize: '0.55rem', letterSpacing: '0.2em', textTransform: 'uppercase',
              color: 'rgba(232,216,197,0.4)',
            }}>Live Recording</div>

            <video
              ref={videoRef}
              src="/workshop.mp4"
              controls
              playsInline
              preload="metadata"
              style={{
                display: 'block', width: '100%',
                maxHeight: '540px', objectFit: 'cover',
              }}
              aria-label="Workshop video recording"
            />
          </div>

          <p style={{ marginTop: '1.5rem', fontSize: '0.78rem', color: 'var(--muted)', lineHeight: 1.8, maxWidth: '40rem' }}>
            A glimpse into the energy and engagement that defines a Hands of Sympathy workshop. Every session is tailored to the community it serves — interactive, open, and rooted in compassion.
          </p>
        </section>

        {/* ── PAST WORKSHOPS ── */}
        <section className="py-12 sm:py-16 md:py-28" style={{ background: 'var(--bg)' }}>
          <div className="px-4 sm:px-8 md:px-14 mb-12 sm:mb-16">
            <div className="section-tag mb-6">Past Events</div>
            <div className="reveal-line wk-reveal">
              <span className="rl-inner text-display-lg">Where we&apos;ve</span>
            </div>
            <div className="reveal-line wk-reveal">
              <span className="rl-inner text-display-lg" style={{ fontStyle: 'italic', color: 'var(--claret)' }}>made an impact</span>
            </div>
            <p style={{ marginTop: '1.5rem', fontSize: '0.85rem', color: 'var(--muted)', lineHeight: 1.9, maxWidth: '32rem' }}>
              Since launching the neurodiversity workshops, Felix has reached families, schools, and congregations across Bulawayo — bringing evidence-based insight directly into communities that need it most.
            </p>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: 0 }}>
            {VENUES.map((venue, vi) => (
              <div
                key={venue.id}
                className="venue-section"
                style={{
                  background: vi % 2 === 0 ? 'var(--bg)' : 'var(--cream-light)',
                  borderTop: '1px solid var(--border)',
                  padding: '4rem 1rem 4rem',
                }}
              >
                <div className="px-4 sm:px-8 md:px-14">
                  {/* Venue header */}
                  <div style={{
                    display: 'flex', flexDirection: 'column', gap: '0.5rem',
                    marginBottom: '2.5rem',
                  }}>
                    <div style={{
                      fontSize: '0.55rem', letterSpacing: '0.25em', textTransform: 'uppercase',
                      color: 'var(--claret)', display: 'flex', alignItems: 'center', gap: '0.5rem',
                    }}>
                      <span style={{ display: 'inline-block', width: '1.5rem', height: '1px', background: 'var(--claret)' }} />
                      {venue.location}
                    </div>
                    <h2 style={{
                      fontFamily: 'var(--font-cormorant)', fontStyle: 'italic',
                      fontSize: 'clamp(1.5rem, 3vw, 2.5rem)',
                      color: 'var(--fg)', lineHeight: 1.1,
                    }}>
                      {venue.name}
                    </h2>
                    <p style={{
                      fontSize: '0.82rem', color: 'var(--muted)', lineHeight: 1.85,
                      maxWidth: '36rem', marginTop: '0.5rem',
                    }}>
                      {venue.description}
                    </p>
                  </div>

                </div>
              </div>
            ))}
          </div>
        </section>

        {/* ── BRING THE WORKSHOP ── */}
        <section
          className="px-4 sm:px-8 md:px-14 py-12 sm:py-16 md:py-28"
          style={{ background: 'var(--claret)', position: 'relative', overflow: 'hidden' }}
        >
          {/* Background word */}
          <div style={{
            position: 'absolute', right: '-2rem', top: '50%', transform: 'translateY(-50%)',
            fontFamily: 'var(--font-cormorant)', fontSize: '16rem', fontStyle: 'italic',
            color: 'rgba(255,255,255,0.03)', lineHeight: 1, pointerEvents: 'none', whiteSpace: 'nowrap',
          }}>Community</div>

          <div className="relative z-10 flex flex-col md:flex-row items-start md:items-end justify-between gap-10 flex-wrap">
            <div style={{ maxWidth: '38rem' }}>
              <div className="section-tag mb-6" style={{ color: 'rgba(232,216,197,0.5)' }}>
                <span style={{ display: 'inline-block', width: '2rem', height: '1px', background: 'rgba(232,216,197,0.5)', marginRight: '0.75rem' }} />
                Book a Workshop
              </div>
              <p style={{
                fontFamily: 'var(--font-cormorant)', fontSize: 'clamp(2rem,4vw,3.5rem)',
                color: 'var(--cream-light)', fontStyle: 'italic', fontWeight: 300, lineHeight: 1.25,
              }}>
                "Bring this conversation to your school, church, or organisation."
              </p>
              <p style={{
                marginTop: '1.5rem', fontSize: '0.82rem', color: 'rgba(232,216,197,0.55)',
                lineHeight: 1.9, maxWidth: '28rem',
              }}>
                Felix delivers tailored sessions for schools, religious communities, and organisations across the UK and internationally. Each workshop is adapted to your audience — always practical, always compassionate.
              </p>
            </div>
            <button className="btn-ghost-light" onClick={openDrawer}>
              <span>Request a Workshop →</span>
            </button>
          </div>
        </section>

        <Footer />
      </div>
    </>
  )
}
