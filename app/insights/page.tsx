import type { Metadata } from 'next'
import SchemaOrg from '@/components/schema-org'
import { getAllPosts } from '@/lib/posts'
import InsightsList from '@/components/insights-list'

export const metadata: Metadata = {
  title: 'Insights | SR&ED & Government Funding for Canadian Founders | Wavecrest Strategies',
  description: 'Practical insights on SR&ED tax credits, Canadian government funding, and startup finance from the Wavecrest team.',
  openGraph: {
    title: 'Insights | SR&ED & Government Funding for Canadian Founders | Wavecrest Strategies',
    description: 'Practical insights on SR&ED tax credits, Canadian government funding, and startup finance.',
    url: 'https://www.wavecreststrategies.ca/insights',
    siteName: 'Wavecrest Strategies',
    type: 'website',
  },
  alternates: { canonical: 'https://www.wavecreststrategies.ca/insights' },
}

const insightsSchema = {
  '@context': 'https://schema.org',
  '@type': 'Blog',
  name: 'Wavecrest Strategies Insights',
  description: 'SR&ED and government funding insights for Canadian founders.',
  url: 'https://www.wavecreststrategies.ca/insights',
  publisher: { '@type': 'Organization', name: 'Wavecrest Strategies' },
}

export default function InsightsPage() {
  const posts = getAllPosts()

  return (
    <>
      <SchemaOrg schema={insightsSchema} />

      {/* Hero */}
      <section className="bg-[#0f2744] pt-32 pb-20 px-6">
        <div className="max-w-4xl mx-auto">
          <h1 className="font-serif text-4xl md:text-5xl lg:text-[56px] text-white font-bold leading-tight mb-6 text-balance">
            Insights from the Field.
          </h1>
          <p className="text-[#94a3b8] text-lg md:text-xl leading-relaxed max-w-2xl">
            Practical thinking on SR&amp;ED, Canadian government funding, and startup finance. Written by practitioners.
          </p>
        </div>
      </section>

      <InsightsList posts={posts} />
    </>
  )
}
