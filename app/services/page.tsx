import type { Metadata } from 'next'
import { Search, FileText, Briefcase, Shield, Map, PenLine, BarChart2, CalendarDays, BookOpen, TrendingUp, Settings, Handshake } from 'lucide-react'
import CTABanner from '@/components/cta-banner'
import SchemaOrg from '@/components/schema-org'

export const metadata: Metadata = {
  title: 'SR&ED Claims, Government Grants & Fractional Finance | Wavecrest Strategies',
  description: 'Wavecrest Strategies offers SR&ED tax credit preparation, Canadian government grant strategy, and fractional CFO services for founders across Canada. Best rate guarantee. Free audit defense.',
  openGraph: {
    title: 'SR&ED Claims, Government Grants & Fractional Finance | Wavecrest Strategies',
    description: 'Best rate guarantee. Free audit defense. No hidden fees.',
    url: 'https://www.wavecreststrategies.ca/services',
    siteName: 'Wavecrest Strategies',
    type: 'website',
  },
  alternates: { canonical: 'https://www.wavecreststrategies.ca/services' },
}

const servicesSchema = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  provider: { '@type': 'Organization', name: 'Wavecrest Strategies' },
  serviceType: 'SR&ED Tax Credits, Government Funding Strategy, Fractional Financial Services',
  areaServed: 'Canada',
  url: 'https://www.wavecreststrategies.ca/services',
}

const sredItems = [
  { icon: Search, title: 'Technical Scoping', body: 'We interview your team, review your codebase or lab processes, and identify every qualifying activity across the full fiscal year.' },
  { icon: FileText, title: 'Technical Narrative Writing', body: 'We write the T661 technical narrative in the format CRA expects, documenting the scientific or technological uncertainty, the systematic investigation, and the advancement achieved.' },
  { icon: Briefcase, title: 'Financial Claim Preparation', body: 'We calculate eligible SR&ED expenditures including salaries, contractor costs, materials, and overhead, and prepare the complete financial claim.' },
  { icon: Shield, title: 'Audit Defense (Included)', body: 'If CRA selects your claim for review or audit, we manage the entire process at no additional fee. No surprises.' },
]

const fundingItems = [
  { icon: Map, title: 'Funding Program Mapping', body: "A comprehensive audit of every federal and provincial program applicable to your company's sector, stage, and geography." },
  { icon: PenLine, title: 'Grant Application Writing', body: 'We write the applications. Strong narratives, compliant formats, and the strategic framing that funding agencies respond to.' },
  { icon: BarChart2, title: 'Pitch Deck Development', body: 'For programs that require pitching, we help develop the deck and coach the presentation.' },
  { icon: CalendarDays, title: 'Funding Calendar', body: 'A 12-month timeline of application deadlines, reporting requirements, and funding windows so nothing slips.' },
]

const fractionalItems = [
  { icon: BookOpen, title: 'Bookkeeping & Reconciliation', body: 'Accurate, timely financial records that give you a true picture of your business.' },
  { icon: TrendingUp, title: 'Financial Reporting', body: 'Monthly and quarterly reporting packages tailored to your board, investors, or internal needs.' },
  { icon: Settings, title: 'Controller Services', body: 'Budget management, cash flow forecasting, and financial controls on a fractional basis.' },
  { icon: Handshake, title: 'Raise Support', body: 'Financial model review, data room preparation, and investor reporting support for your next fundraise.' },
]

function ServiceItem({ icon: Icon, title, body }: { icon: React.FC<React.SVGProps<SVGSVGElement>>, title: string, body: string }) {
  return (
    <div className="flex gap-4">
      <div className="w-10 h-10 rounded-full bg-[#0f2744]/10 flex items-center justify-center shrink-0">
        <Icon className="w-5 h-5 text-[#0f2744]" />
      </div>
      <div>
        <p className="font-semibold text-[#0f2744] mb-1">{title}</p>
        <p className="text-[#475569] text-sm leading-relaxed">{body}</p>
      </div>
    </div>
  )
}

export default function ServicesPage() {
  return (
    <>
      <SchemaOrg schema={servicesSchema} />

      {/* Hero */}
      <section className="bg-[#0f2744] pt-32 pb-20 px-6">
        <div className="max-w-4xl mx-auto">
          <div className="inline-flex items-center gap-2 bg-white/10 text-white text-xs font-semibold uppercase tracking-widest px-4 py-2 rounded-full mb-6">
            <span className="w-2 h-2 rounded-full bg-[#16a34a] shrink-0" aria-hidden="true" />
            Founder Friendly. Always.
          </div>
          <h1 className="font-serif text-4xl md:text-5xl lg:text-[56px] text-white font-bold leading-tight mb-6 text-balance">
            Services Built for Founders.
          </h1>
          <p className="text-[#94a3b8] text-lg md:text-xl leading-relaxed max-w-2xl">
            Three service areas. One mission: help you keep more of what you earn and grow faster with non-dilutive capital - on terms that actually make sense for a founder.
          </p>
        </div>
      </section>

      {/* Service 1: SR&ED */}
      <section id="sred" className="bg-[#f8f7f4] py-20 px-6 scroll-mt-16">
        <div className="max-w-5xl mx-auto">
          <p className="text-[#2563eb] text-xs font-semibold uppercase tracking-widest mb-4">Service 01</p>
          <h2 className="font-serif text-3xl md:text-[40px] text-[#0f2744] font-bold mb-6 text-balance">
            SR&amp;ED Tax Credits
          </h2>
          <div className="space-y-5 text-[#475569] text-lg leading-[1.7] mb-10 max-w-3xl">
            <p>
              The Scientific Research and Experimental Development (SR&amp;ED) program is Canada&apos;s largest R&amp;D incentive - distributing over $3 billion annually to companies that qualify. If your team is solving technical problems that aren&apos;t solved by existing knowledge, you likely qualify. The question is whether you&apos;re claiming everything you&apos;re entitled to.
            </p>
            <p>
              Wavecrest&apos;s SR&amp;ED practice is led by professionals with decades of experience at Deloitte and BDO, combined with hands-on experience as founders. We know how CRA reviewers think because we&apos;ve been on both sides of the process. We go deep into your technical activities, capture every eligible expenditure, write technical narratives that hold up under scrutiny, and stand behind our work with free audit defense.
            </p>
          </div>

          <h3 className="font-serif text-[#0f2744] text-2xl font-semibold mb-6">What&apos;s Included</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
            {sredItems.map((item) => (
              <ServiceItem key={item.title} icon={item.icon as React.FC<React.SVGProps<SVGSVGElement>>} title={item.title} body={item.body} />
            ))}
          </div>

          {/* Callout */}
          <div className="bg-[#0f2744] rounded-xl p-6 flex flex-col sm:flex-row sm:items-center gap-4">
            <span className="inline-flex items-center gap-2 bg-white/10 text-white text-xs font-semibold uppercase tracking-widest px-3 py-1.5 rounded-full shrink-0">
              <span className="w-1.5 h-1.5 rounded-full bg-[#16a34a]" aria-hidden="true" />
              Founder Friendly
            </span>
            <p className="text-[#94a3b8] text-sm leading-relaxed">
              Best rate guarantee &middot; No fees on interest &middot; No hidden charges &middot; Free audit defense &middot; 60% less of your team&apos;s time
            </p>
          </div>
        </div>
      </section>

      {/* Service 2: Government Funding */}
      <section id="funding" className="bg-white py-20 px-6 scroll-mt-16">
        <div className="max-w-5xl mx-auto">
          <p className="text-[#2563eb] text-xs font-semibold uppercase tracking-widest mb-4">Service 02</p>
          <h2 className="font-serif text-3xl md:text-[40px] text-[#0f2744] font-bold mb-6 text-balance">
            Fundraising &amp; Government Grant Strategy
          </h2>
          <div className="space-y-5 text-[#475569] text-lg leading-[1.7] mb-10 max-w-3xl">
            <p>
              Canada&apos;s innovation funding landscape is vast, fragmented, and constantly evolving. Beyond SR&amp;ED, there are dozens of federal and provincial programs - IRAP, SDTC, regional development agency funds, export development programs, and sector-specific grants - that many founders never find. We map them all.
            </p>
            <p>
              Wavecrest&apos;s funding strategy practice builds a comprehensive picture of every program your company is eligible for, prioritized by value, effort, and timing. We help you apply, write compelling grant applications, develop pitch materials for funding agencies, and build a funding calendar so you&apos;re never leaving money on the table.
            </p>
          </div>

          <h3 className="font-serif text-[#0f2744] text-2xl font-semibold mb-6">What&apos;s Included</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {fundingItems.map((item) => (
              <ServiceItem key={item.title} icon={item.icon as React.FC<React.SVGProps<SVGSVGElement>>} title={item.title} body={item.body} />
            ))}
          </div>
        </div>
      </section>

      {/* Service 3: Fractional Finance */}
      <section id="fractional" className="bg-[#f8f7f4] py-20 px-6 scroll-mt-16">
        <div className="max-w-5xl mx-auto">
          <p className="text-[#2563eb] text-xs font-semibold uppercase tracking-widest mb-4">Service 03</p>
          <h2 className="font-serif text-3xl md:text-[40px] text-[#0f2744] font-bold mb-6 text-balance">
            Fractional Financial Services
          </h2>
          <div className="space-y-5 text-[#475569] text-lg leading-[1.7] mb-10 max-w-3xl">
            <p>
              Growing companies need financial clarity - but the cost of a full-time CFO or senior controller is often out of reach at the early stages. Wavecrest&apos;s fractional financial practice gives you the expertise you need, at the time commitment that makes sense for your stage.
            </p>
            <p>
              Whether you need monthly bookkeeping, financial reporting for your board, or a strategic finance partner to support your next raise, we plug in at the right level. Big 4 rigor, priced and structured the way a founder would want it.
            </p>
          </div>

          <h3 className="font-serif text-[#0f2744] text-2xl font-semibold mb-6">What&apos;s Included</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {fractionalItems.map((item) => (
              <ServiceItem key={item.title} icon={item.icon as React.FC<React.SVGProps<SVGSVGElement>>} title={item.title} body={item.body} />
            ))}
          </div>
        </div>
      </section>

      <CTABanner />
    </>
  )
}
