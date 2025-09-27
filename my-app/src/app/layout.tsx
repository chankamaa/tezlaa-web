// src/app/layout.tsx

import type { Metadata } from 'next'
import { Inter, Space_Grotesk } from 'next/font/google'
import './globals.css'
import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
})

const spaceGrotesk = Space_Grotesk({
  subsets: ['latin'],
  variable: '--font-space-grotesk',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Tezlaa Café | Handcrafted Coffee & Sustainable Vibes',
  description: 'Tezlaa Café serves handcrafted coffee, cozy spaces, and sustainable vibes — making every visit a moment worth savoring.',
  keywords: ['coffee', 'café', 'sustainable', 'handcrafted', 'Sri Lanka', 'Colombo'],
  authors: [{ name: 'Tezlaa Café' }],
  creator: 'Tezlaa Café',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://tezlaa.com',
    title: 'Tezlaa Café | Handcrafted Coffee & Sustainable Vibes',
    description: 'Tezlaa Café serves handcrafted coffee, cozy spaces, and sustainable vibes — making every visit a moment worth savoring.',
    siteName: 'Tezlaa Café',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Tezlaa Café | Handcrafted Coffee & Sustainable Vibes',
    description: 'Tezlaa Café serves handcrafted coffee, cozy spaces, and sustainable vibes — making every visit a moment worth savoring.',
    creator: '@tezlaacafe',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${inter.variable} ${spaceGrotesk.variable}`}>
      <body className="font-sans antialiased">
        <Header />
        <main id="scroll-container" data-scroll-container>
          {children}
        </main>
        <Footer />
      </body>
    </html>
  )
}