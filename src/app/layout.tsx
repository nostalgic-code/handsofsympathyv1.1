import type { Metadata } from 'next'
import { Cormorant_Garamond, DM_Sans } from 'next/font/google'
import './globals.css'

const cormorant = Cormorant_Garamond({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600'],
  style: ['normal', 'italic'],
  variable: '--font-cormorant',
  display: 'swap',
})

const dmSans = DM_Sans({
  subsets: ['latin'],
  weight: ['300', '400', '500'],
  variable: '--font-dm',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Hands of Sympathy — Mental Health Support',
  description:
    'A dedicated space for your mental wellbeing. Compassionate, evidence-based CBT therapy with over 14 years of clinical experience. BABCP & NMC accredited. Birmingham, UK.',
  keywords: ['mental health', 'CBT therapy', 'PTSD', 'anxiety', 'depression', 'Birmingham', 'BABCP', 'autism assessment'],
  openGraph: {
    title: 'Hands of Sympathy — Mental Health Support',
    description: 'A safe space for your mental wellbeing. Evidence-based care delivered with compassion.',
    type: 'website',
    locale: 'en_GB',
  },
  themeColor: '#7f1734',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`${cormorant.variable} ${dmSans.variable}`}>
      <body className="bg-bg text-fg antialiased overflow-x-hidden">
        {children}
      </body>
    </html>
  )
}

