import type { Metadata } from 'next'
import Link from 'next/link'
import CTABanner from '@/components/cta-banner'
import SchemaOrg from '@/components/schema-org'

export const metadata: Metadata = {
  title: 'About Wavecrest Strategies | Builder-Friendly SR&ED Consulting Canada',
  description: 'Wavecrest Strategies was built by founders and investors who know the SR&ED process from both sides. Big 4 pedigree, transparent fees, and genuine empathy for the entrepreneurial journey.',
  openGraph: {
    title: 'About Wavecrest Strategies | Builder-Friendly SR&ED Consulting Canada',
    description: 'Wavecrest Strategies was built by founders and investors who know the SR&ED process from both sides.',
    url: 'https://www.wavecreststrategies.ca/about',
    siteName: 'Wavecrest Strategies',
    type: 'website',
  },
  alternates: { canonical: 'https://www.wavecreststrategies.ca/about' },
}

const aboutSchema = {
  '@context': 'https://schema.org',
  '@type': 'AboutPage',
  name: 'About Wavecrest Strategies',
  description: 'Wavecrest Strategies is a Canadian SR&ED and government funding consultancy built by founders and investors.',
  url: 'https://www.wavecreststrategies.ca/about',
}

const pillars = [
  {
    title: 'Builders First',
    body: 'We deeply empathize with the entrepreneurial journey. Every service we offer has been pressure-tested by our own experience as founders and investors.',
  },
  {
    title: 'Growth-Oriented',
    body: "We don't just file claims - we build funding strategies. Our goal is to maximize every non-dilutive dollar available to your company.",
  },
  {
    title: 'Value Focused',
    body: 'If we cannot provide better value than your current provider, we say so upfront and walk away. Your trust matters more than a fee.',
  },
]

const services = [
  {
    title: 'SR&ED Claims',
    body: "We handle every aspect of your SR&ED claim from technical scoping through CRA submission, with full audit defense included. No surprises.",
    href: '/services#sred',
  },
  {
    title: 'Fundraising & Grant Strategy',
    body: "We map every applicable federal and provincial funding program for your company and build a strategy to capture them - IRAP, NRC, ACOA, and more.",
    href: '/services#funding',
  },
  {
    title: 'Fractional Financial Services',
    body: "Senior CFO and controller expertise on a fractional basis. Bookkeeping, reporting, cash flow, and raise support calibrated to your stage.",
    href: '/services#fractional',
  },
]

export default function AboutPage() {
  return (
    <>
      <SchemaOrg schema={aboutSchema} />

      {/* Hero */}
      <section className="bg-[#0f2744] pt-32 pb-20 px-6">
        <div className="max-w-4xl mx-auto">
          <h1 className="font-serif text-4xl md:text-5xl lg:text-[56px] text-white font-bold leading-tight mb-6 text-balance">
            We built the firm we wished existed when we were founders.
          </h1>
          <p className="text-[#94a3b8] text-lg md:text-xl leading-relaxed max-w-2xl">
            Wavecrest was born from a simple frustration: the firms best positioned to help Canadian founders navigate SR&amp;ED were either too expensive, too slow, or too removed from the realities of building a company. We changed that.
          </p>
        </div>
      </section>

      {/* Philosophy */}
      <section className="bg-[#f8f7f4] py-20 px-6">
        <div className="max-w-4xl mx-auto">
          <p className="text-[#2563eb] text-xs font-semibold uppercase tracking-widest mb-4">Our Philosophy</p>
          <h2 className="font-serif text-3xl md:text-[40px] text-[#0f2744] font-bold mb-10 text-balance">
            Founder-friendly isn&apos;t a tagline. It&apos;s a policy.
          </h2>
          <div className="space-y-6 text-[#475569] text-lg leading-[1.7]">
            <p>
              At Wavecrest, every decision about how we operate - our fee structure, our audit defense policy, our approach to client onboarding - is filtered through a single question: is this how we would want to be treated if we were the founder? As people who have raised capital, built companies, and sat on both sides of the investment table, we know exactly what it feels like to be stretched thin, skeptical of vendors, and protective of every dollar.
            </p>
            <p>
              That&apos;s why our best rate guarantee isn&apos;t a marketing claim - it&apos;s a commitment we enforce by walking away from clients we can&apos;t serve better than their current provider. It&apos;s why our audit defense is truly included, not buried in fine print. And it&apos;s why we never charge fees on CRA interest payments - because that money belongs to you, not us.
            </p>
            <p>
              We work alongside founders, not above them. We roll up our sleeves, do the heavy lifting, and aim to return 60% of the time your team would spend with a traditional provider. You build the company. We handle the credits.
            </p>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="bg-white py-20 px-6">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <p className="text-[#2563eb] text-xs font-semibold uppercase tracking-widest mb-4">Why Choose Us</p>
            <h2 className="font-serif text-3xl md:text-[40px] text-[#0f2744] font-bold text-balance">
              What sets us apart.
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {pillars.map((p) => (
              <div key={p.title} className="bg-[#f8f7f4] rounded-xl p-8">
                <h3 className="font-serif text-[#0f2744] text-xl font-semibold mb-3">{p.title}</h3>
                <p className="text-[#475569] text-sm leading-relaxed">{p.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Summary */}
      <section className="bg-[#f8f7f4] py-20 px-6">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <p className="text-[#2563eb] text-xs font-semibold uppercase tracking-widest mb-4">What We Do</p>
            <h2 className="font-serif text-3xl md:text-[40px] text-[#0f2744] font-bold text-balance">
              Three services. One mission.
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {services.map((s) => (
              <div key={s.title} className="bg-white border border-[#e2e8f0] rounded-xl p-7">
                <h3 className="font-serif text-[#0f2744] text-xl font-semibold mb-3">{s.title}</h3>
                <p className="text-[#475569] text-sm leading-relaxed mb-4">{s.body}</p>
                <Link href={s.href} className="text-[#2563eb] text-sm font-medium hover:underline">
                  Learn more &rarr;
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTABanner />
    </>
  )
}
