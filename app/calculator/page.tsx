import type { Metadata } from 'next'
import { SredCalculator } from '@/components/sred-calculator'
import CTABanner from '@/components/cta-banner'
import SchemaOrg from '@/components/schema-org'

export const metadata: Metadata = {
  title: 'SR&ED Tax Credit Calculator | Wavecrest Strategies',
  description: 'Calculate your potential SR&ED tax credits with our free calculator. Get instant estimates for federal and provincial credits based on your R&D expenditures.',
  openGraph: {
    title: 'SR&ED Tax Credit Calculator | Wavecrest Strategies',
    description: 'Free SR&ED calculator for Canadian companies. Estimate your federal and provincial R&D tax credits instantly.',
    url: 'https://www.wavecreststrategies.ca/calculator',
    siteName: 'Wavecrest Strategies',
    type: 'website',
  },
  alternates: { canonical: 'https://www.wavecreststrategies.ca/calculator' },
}

const calculatorSchema = {
  '@context': 'https://schema.org',
  '@type': 'WebApplication',
  name: 'SR&ED Tax Credit Calculator',
  applicationCategory: 'FinanceApplication',
  operatingSystem: 'All',
  offers: {
    '@type': 'Offer',
    price: '0',
    priceCurrency: 'CAD',
  },
  description: 'Calculate your potential SR&ED tax credits based on your R&D expenditures. Supports all Canadian provinces and both CCPC and non-CCPC corporations.',
  provider: {
    '@type': 'Organization',
    name: 'Wavecrest Strategies',
    url: 'https://www.wavecreststrategies.ca',
  },
}

export default function CalculatorPage() {
  return (
    <>
      <SchemaOrg schema={calculatorSchema} />
      <SredCalculator />
      <CTABanner />
    </>
  )
}
