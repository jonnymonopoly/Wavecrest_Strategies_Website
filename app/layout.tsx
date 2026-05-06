import type { Metadata } from 'next'
import { Inter, Playfair_Display } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import Nav from '@/components/nav'
import Footer from '@/components/footer'
import './globals.css'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
})

const playfair = Playfair_Display({
  subsets: ['latin'],
  variable: '--font-playfair',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'SR&ED Tax Credits & Government Funding | Wavecrest Strategies | Canada',
  description: 'Wavecrest Strategies helps Canadian founders maximize SR&ED tax credits and government funding. Founder-built. Big 4 pedigree. Transparent fees. Free audit defense.',
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || 'https://www.wavecreststrategies.ca'),
  openGraph: {
    title: 'SR&ED Tax Credits & Government Funding | Wavecrest Strategies',
    description: 'Builder-friendly SR&ED consulting for Canadian startups. Transparent fees, free audit defense, and a team that has ridden the same waves.',
    url: 'https://www.wavecreststrategies.ca',
    siteName: 'Wavecrest Strategies',
    locale: 'en_CA',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'SR&ED Tax Credits & Government Funding | Wavecrest Strategies',
    description: 'Builder-friendly SR&ED consulting for Canadian startups.',
  },
  alternates: { canonical: 'https://www.wavecreststrategies.ca' },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${playfair.variable} bg-background`}>
      <body className="font-sans antialiased text-foreground">
        <a href="#main-content" className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 z-50 bg-blue text-white px-4 py-2 rounded-md text-sm font-medium">
          Skip to main content
        </a>
        <Nav />
        <main id="main-content">
          {children}
        </main>
        <Footer />
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
