import type { Metadata, Viewport } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'California Healthcare Management Group - Home Health Care Services',
  description: 'Professional home health care services in Southern California. Skilled nursing, physical therapy, speech therapy, occupational therapy, and IV therapy delivered in the comfort of your home.',
  keywords: 'home health care, skilled nursing, physical therapy, speech therapy, occupational therapy, IV therapy, home care, California healthcare, Southern California, Los Angeles, Orange County, Ventura County, San Bernardino County, Riverside County',
  authors: [{ name: 'California Healthcare Management Group' }],
  openGraph: {
    title: 'California Healthcare Management Group - Home Health Care Services',
    description: 'Professional home health care services in Southern California. Skilled nursing, physical therapy, speech therapy, occupational therapy, and IV therapy delivered in the comfort of your home.',
    type: 'website',
    locale: 'en_US',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'California Healthcare Management Group - Home Health Care Services',
    description: 'Professional home health care services in Southern California. Skilled nursing, physical therapy, speech therapy, occupational therapy, and IV therapy delivered in the comfort of your home.',
  },
}

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="min-h-screen flex flex-col">
          <Navigation />
          <main className="flex-grow">
            {children}
          </main>
          <Footer />
        </div>
      </body>
    </html>
  )
} 