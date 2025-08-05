import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'VideoAI - Transform Text to Stunning Videos with AI',
  description: 'Create professional-quality videos from simple text descriptions using advanced AI technology. No editing skills required. Generate videos in seconds, not hours.',
  keywords: ['AI video generation', 'text to video', 'artificial intelligence', 'video creation', 'content creation', 'automated videos'],
  openGraph: {
    title: 'VideoAI - AI Video Generation Platform',
    description: 'Transform your ideas into stunning videos with the power of artificial intelligence.',
    url: 'https://videoai.com',
    siteName: 'VideoAI',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'VideoAI - AI Video Generation',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'VideoAI - Transform Text to Videos with AI',
    description: 'Create professional videos from text using advanced AI. No editing skills required.',
    images: ['/twitter-image.jpg'],
  },
  viewport: 'width=device-width, initial-scale=1',
  robots: 'index, follow',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.className} antialiased`}>
        {children}
      </body>
    </html>
  )
}