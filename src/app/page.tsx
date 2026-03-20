'use client'

import { useState, useCallback } from 'react'
import dynamic from 'next/dynamic'
import { useLenis } from '@/hooks/useLenis'
import Loader from '@/components/Loader'
import Nav from '@/components/Nav'
import CallDrawer from '@/components/CallDrawer'
import Marquee from '@/components/Marquee'
import Footer from '@/components/Footer'
import HomeHero from '@/components/home/HomeHero'
import StatsStrip from '@/components/home/StatsStrip'
import ServicesPreview from '@/components/home/ServicesPreview'
import { PhilosophyStrip, MethodsIntro } from '@/components/home/HomeExtras'

const CustomCursor = dynamic(() => import('@/components/CustomCursor'), { ssr: false })

export default function HomePage() {
  const [ready, setReady] = useState(false)
  useLenis()

  const openDrawer = useCallback(() => {
    ;(window as any).__openCallDrawer?.()
  }, [])

  return (
    <>
      <div className="grain-overlay" aria-hidden="true" />
      <CustomCursor />
      {!ready && <Loader onComplete={() => setReady(true)} />}
      <Nav isReady={ready} />
      <CallDrawer />
      <main>
        <HomeHero isReady={ready} onOpenDrawer={openDrawer} />
        <StatsStrip />
        <Marquee />
        <ServicesPreview onOpenDrawer={openDrawer} />
        <PhilosophyStrip />
        <Marquee dark />
        <MethodsIntro />
      </main>
      <Footer />
    </>
  )
}
