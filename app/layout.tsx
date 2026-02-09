import type { Metadata } from 'next'
import { Playfair_Display, DM_Sans } from 'next/font/google'
import './globals.css'

const playfair = Playfair_Display({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-playfair',
})

const dmSans = DM_Sans({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-dm-sans',
})

export const metadata: Metadata = {
  title: {
    default: 'Parkway East Design | Bespoke Interior Design',
    template: '%s | Parkway East Design',
  },
  description: 'Creating bespoke interiors with heirloom quality and sincerity in every design. Full-service interior design studio based in St. George, Utah.',
  keywords: ['interior design', 'St. George Utah', 'bespoke interiors', 'residential design', 'commercial design', 'Southern Utah'],
  authors: [{ name: 'Parkway East Design' }],
  creator: 'Parkway East Design',
  openGraph: {
    title: 'Parkway East Design | Bespoke Interior Design',
    description: 'Creating bespoke interiors with heirloom quality and sincerity in every design.',
    type: 'website',
    locale: 'en_US',
    siteName: 'Parkway East Design',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Parkway East Design | Bespoke Interior Design',
    description: 'Creating bespoke interiors with heirloom quality and sincerity in every design.',
  },
  robots: {
    index: true,
    follow: true,
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${playfair.variable} ${dmSans.variable}`}>
      <body className="antialiased">
        {children}
      </body>
    </html>
  )
}
