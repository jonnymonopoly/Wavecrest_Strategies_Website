import type { Metadata } from 'next'
import Link from 'next/link'
import CTABanner from '@/components/cta-banner'
import SchemaOrg from '@/components/schema-org'
import FAQItem from '@/components/faq-item'
import FAQNav from '@/components/faq-nav'

export const metadata: Metadata = {
  title: 'SR&ED Tax Credit FAQ: Everything Canadian Founders Need to Know | Wavecrest Strategies',
  description: 'Complete answers to the most common SR&ED questions. What qualifies, how much you can claim, what it costs, how audits work, and how to choose a consultant. From Canada\'s builder-friendly SR&ED experts.',
  openGraph: {
    title: 'SR&ED Tax Credit FAQ: Everything Canadian Founders Need to Know | Wavecrest Strategies',
    description: 'Complete answers to the most common SR&ED questions from practitioners.',
    url: 'https://www.wavecreststrategies.ca/sred-faq',
    siteName: 'Wavecrest Strategies',
    type: 'website',
  },
  alternates: { canonical: 'https://www.wavecreststrategies.ca/sred-faq' },
}

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'What is SR&ED and who qualifies?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: "SR&ED (Scientific Research and Experimental Development) is Canada's largest R&D incentive program, administered by the Canada Revenue Agency. It provides tax credits to Canadian companies that conduct research and development work aimed at advancing scientific or technological knowledge. To qualify, your work must involve a technical or scientific uncertainty that cannot be resolved through standard practice, a systematic investigation process, and an attempt to achieve a technological advancement. Software companies, manufacturers, biotech firms, and startups in virtually any sector can qualify if they are solving genuinely hard technical problems.",
      },
    },
    {
      '@type': 'Question',
      name: 'How much can a company claim through SR&ED?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'The amount varies by company type and province. Canadian Controlled Private Corporations (CCPCs) with less than $10 million in taxable capital can claim a 35% refundable investment tax credit (ITC) on the first $3 million of qualifying expenditures, and 15% on amounts above that threshold. Large corporations receive a 15% non-refundable credit. Provincial credits stack on top, ranging from 3.5% to 20% depending on the province. Most Wavecrest clients recover between 20% and 45% of their qualifying R&D expenditures when federal and provincial credits are combined.',
      },
    },
    {
      '@type': 'Question',
      name: 'What does an SR&ED consultant cost in Canada?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: "Most SR&ED consultants in Canada charge a contingency fee of 15% to 25% of the total claim value, though large accounting firms often add administration fees on top. Wavecrest offers a best rate guarantee: if we can't beat your current provider's rate, we won't take the business. We also never charge fees on CRA interest payments (which most firms do), and our audit defense is included at no additional cost - both of which meaningfully reduce your effective fee rate.",
      },
    },
    {
      '@type': 'Question',
      name: 'How long does the SR&ED process take?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: "The preparation process typically takes 4 to 8 weeks from kickoff to submission, depending on the complexity of the claim and the responsiveness of your team. Once submitted, CRA processes most claims within 60 to 120 days. If your claim is selected for review, it can take longer. Wavecrest is designed to minimize your team's time investment - typically recovering 60% of the hours your team would spend with a traditional provider.",
      },
    },
    {
      '@type': 'Question',
      name: 'What happens during an SR&ED audit?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'An SR&ED audit (formally called a review) involves a CRA reviewer examining your technical narratives, financial records, and supporting documentation. The reviewer may request interviews with your technical staff, additional project documentation, or evidence of the work claimed. Audit rates have been increasing as CRA tightens administration of the program. Wavecrest includes full audit defense in every engagement - we manage all CRA correspondence, attend any meetings, and defend your claim at no additional fee.',
      },
    },
    {
      '@type': 'Question',
      name: 'Can software companies claim SR&ED?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes. Software development is one of the most common sources of SR&ED claims in Canada. Qualifying activities typically include developing novel algorithms, solving performance or scalability problems without existing solutions, creating new machine learning architectures, building software that operates in technically uncertain environments, and experimental development of new frameworks or platforms. Routine software development, bug fixes, and standard UI work generally do not qualify. The key test is whether your team faced genuine technical uncertainty that required systematic investigation.',
      },
    },
    {
      '@type': 'Question',
      name: 'What is the difference between SR&ED and IRAP?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'SR&ED is a tax credit program - you claim it retrospectively on your tax return based on R&D expenditures you have already incurred. It is administered by CRA and available to companies of all sizes. IRAP (Industrial Research Assistance Program) is a grant program administered by the National Research Council - funding is awarded prospectively and must be applied for before the work begins. The two programs can often be used together and do not typically conflict. Wavecrest helps clients develop strategies that capture both.',
      },
    },
    {
      '@type': 'Question',
      name: 'Can startups with no revenue claim SR&ED?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes. Revenue is not a requirement to claim SR&ED. A pre-revenue CCPC can claim fully refundable investment tax credits at the 35% enhanced rate, meaning CRA issues a cash refund even if the company has no taxes payable. This makes SR&ED one of the most valuable non-dilutive funding sources available to early-stage startups. The company must have incorporated and be conducting qualifying R&D activity - but it does not need to be generating revenue.',
      },
    },
    {
      '@type': 'Question',
      name: 'What records do I need to keep for SR&ED?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'CRA expects contemporaneous documentation of SR&ED work - meaning records created at the time the work was being done, not reconstructed later. This typically includes: project plans and hypotheses, time tracking records by employee and project, lab notebooks or technical logs, test results, iteration records, and financial records of qualifying expenditures. Wavecrest helps clients establish documentation habits at the start of the fiscal year, which significantly reduces preparation effort and audit risk.',
      },
    },
    {
      '@type': 'Question',
      name: 'Can a company anywhere in Canada claim SR&ED?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Absolutely. SR&ED is a federal program available to eligible companies in every Canadian province and territory. Many provinces also have provincial SR&ED tax credit programs that stack on top of the federal credit, including Nova Scotia, New Brunswick, Newfoundland and Labrador, Prince Edward Island, Ontario, British Columbia, and others. Wavecrest actively serves founders and businesses across Canada, with particular deep roots in the Atlantic Canadian startup ecosystem.',
      },
    },
    {
      '@type': 'Question',
      name: 'How do I choose the right SR&ED consultant?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'The most important factors are: (1) depth of technical expertise — can they understand your actual work and write a narrative that survives CRA scrutiny? (2) fee structure transparency — are there hidden administration fees, fees on interest, or audit defense charges buried in the contract? (3) audit defense policy — is it genuinely included? (4) time burden on your team — some providers require extensive involvement from your engineers and finance staff. Ask any prospective consultant for their full fee schedule in writing, their audit defense policy, and their typical claim success rate.',
      },
    },
  ],
}

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://www.wavecreststrategies.ca' },
    { '@type': 'ListItem', position: 2, name: 'SR&ED FAQ', item: 'https://www.wavecreststrategies.ca/sred-faq' },
  ],
}

export default function SREDFAQPage() {
  return (
    <>
      <SchemaOrg schema={faqSchema} />
      <SchemaOrg schema={breadcrumbSchema} />

      {/* Hero */}
      <section className="bg-[#0f2744] pt-32 pb-16 px-6">
        <div className="max-w-4xl mx-auto">
          <nav aria-label="Breadcrumb" className="mb-6">
            <ol className="flex items-center gap-2 text-xs text-[#94a3b8]">
              <li><Link href="/" className="hover:text-white transition-colors">Home</Link></li>
              <li aria-hidden="true">&rsaquo;</li>
              <li className="text-white" aria-current="page">SR&amp;ED FAQ</li>
            </ol>
          </nav>
          <h1 className="font-serif text-4xl md:text-5xl lg:text-[56px] text-white font-bold leading-tight mb-6 text-balance">
            SR&amp;ED Tax Credits: Your Questions Answered.
          </h1>
          <p className="text-[#94a3b8] text-lg md:text-xl leading-relaxed max-w-2xl">
            Straight answers from practitioners with decades of SR&amp;ED experience. No jargon, no sales pitch.
          </p>
        </div>
      </section>

      {/* Sticky quick nav */}
      <FAQNav />

      {/* Section: Understanding SR&ED */}
      <section id="qualifying" className="bg-white py-16 px-6 scroll-mt-24">
        <div className="max-w-4xl mx-auto">
          <h2 className="font-serif text-3xl text-[#0f2744] font-bold mb-10">Understanding SR&amp;ED</h2>
          <div className="space-y-0">
            <FAQItem
              question="What is SR&ED and who qualifies?"
              answer="SR&ED (Scientific Research and Experimental Development) is Canada's largest R&D incentive program, administered by the Canada Revenue Agency. It provides tax credits to Canadian companies that conduct research and development work aimed at advancing scientific or technological knowledge. To qualify, your work must involve a technical or scientific uncertainty that cannot be resolved through standard practice, a systematic investigation process, and an attempt to achieve a technological advancement. Software companies, manufacturers, biotech firms, and startups in virtually any sector can qualify if they are solving genuinely hard technical problems."
            />
            <FAQItem
              question="Can startups with no revenue claim SR&ED?"
              answer="Yes. Revenue is not a requirement to claim SR&ED. A pre-revenue CCPC can claim fully refundable investment tax credits at the 35% enhanced rate, meaning CRA issues a cash refund even if the company has no taxes payable. This makes SR&ED one of the most valuable non-dilutive funding sources available to early-stage startups. The company must have incorporated and be conducting qualifying R&D activity - but it does not need to be generating revenue."
            />
            <FAQItem
              question="Can software companies claim SR&ED?"
              answer="Yes. Software development is one of the most common sources of SR&ED claims in Canada. Qualifying activities typically include developing novel algorithms, solving performance or scalability problems without existing solutions, creating new machine learning architectures, building software that operates in technically uncertain environments, and experimental development of new frameworks or platforms. Routine software development, bug fixes, and standard UI work generally do not qualify. The key test is whether your team faced genuine technical uncertainty that required systematic investigation."
            />
          </div>
        </div>
      </section>

      {/* Section: Claim Size */}
      <section id="claim-size" className="bg-[#f8f7f4] py-16 px-6 scroll-mt-24">
        <div className="max-w-4xl mx-auto">
          <h2 className="font-serif text-3xl text-[#0f2744] font-bold mb-10">Claim Size &amp; Value</h2>
          <div className="space-y-0">
            <FAQItem
              question="How much can a company claim through SR&ED?"
              answer="The amount varies by company type and province. Canadian Controlled Private Corporations (CCPCs) with less than $10 million in taxable capital can claim a 35% refundable investment tax credit (ITC) on the first $3 million of qualifying expenditures, and 15% on amounts above that threshold. Large corporations receive a 15% non-refundable credit. Provincial credits stack on top, ranging from 3.5% to 20% depending on the province. Most Wavecrest clients recover between 20% and 45% of their qualifying R&D expenditures when federal and provincial credits are combined."
            />
            <FAQItem
              question="What is the difference between SR&ED and IRAP?"
              answer="SR&ED is a tax credit program - you claim it retrospectively on your tax return based on R&D expenditures you have already incurred. It is administered by CRA and available to companies of all sizes. IRAP (Industrial Research Assistance Program) is a grant program administered by the National Research Council - funding is awarded prospectively and must be applied for before the work begins. The two programs can often be used together and do not typically conflict. Wavecrest helps clients develop strategies that capture both."
            />
            <FAQItem
              question="Can a company anywhere in Canada claim SR&ED?"
              answer="Absolutely. SR&ED is a federal program available to eligible companies in every Canadian province and territory. Many provinces also have provincial SR&ED tax credit programs that stack on top of the federal credit, including Nova Scotia, New Brunswick, Newfoundland and Labrador, Prince Edward Island, Ontario, British Columbia, and others. Wavecrest actively serves founders and businesses across Canada, with particular deep roots in the Atlantic Canadian startup ecosystem."
            />
          </div>
        </div>
      </section>

      {/* Section: Working with a Consultant */}
      <section id="costs" className="bg-white py-16 px-6 scroll-mt-24">
        <div className="max-w-4xl mx-auto">
          <h2 className="font-serif text-3xl text-[#0f2744] font-bold mb-10">Working With a Consultant</h2>
          <div className="space-y-0">
            <FAQItem
              question="What does an SR&ED consultant cost in Canada?"
              answer="Most SR&ED consultants in Canada charge a contingency fee of 15% to 25% of the total claim value, though large accounting firms often add administration fees on top. Wavecrest offers a best rate guarantee: if we can't beat your current provider's rate, we won't take the business. We also never charge fees on CRA interest payments (which most firms do), and our audit defense is included at no additional cost - both of which meaningfully reduce your effective fee rate."
            />
            <FAQItem
              question="How do I choose the right SR&ED consultant?"
              answer="The most important factors are: (1) depth of technical expertise - can they understand your actual work and write a narrative that survives CRA scrutiny? (2) fee structure transparency - are there hidden administration fees, fees on interest, or audit defense charges buried in the contract? (3) audit defense policy - is it genuinely included? (4) time burden on your team - some providers require extensive involvement from your engineers and finance staff. Ask any prospective consultant for their full fee schedule in writing, their audit defense policy, and their typical claim success rate."
            />
          </div>
        </div>
      </section>

      {/* Section: The Process */}
      <section id="process" className="bg-[#f8f7f4] py-16 px-6 scroll-mt-24">
        <div className="max-w-4xl mx-auto">
          <h2 className="font-serif text-3xl text-[#0f2744] font-bold mb-10">The Process</h2>
          <div className="space-y-0">
            <FAQItem
              question="How long does the SR&ED process take?"
              answer="The preparation process typically takes 4 to 8 weeks from kickoff to submission, depending on the complexity of the claim and the responsiveness of your team. Once submitted, CRA processes most claims within 60 to 120 days. If your claim is selected for review, it can take longer. Wavecrest is designed to minimize your team's time investment - typically recovering 60% of the hours your team would spend with a traditional provider."
            />
            <FAQItem
              question="What records do I need to keep for SR&ED?"
              answer="CRA expects contemporaneous documentation of SR&ED work - meaning records created at the time the work was being done, not reconstructed later. This typically includes: project plans and hypotheses, time tracking records by employee and project, lab notebooks or technical logs, test results, iteration records, and financial records of qualifying expenditures. Wavecrest helps clients establish documentation habits at the start of the fiscal year, which significantly reduces preparation effort and audit risk."
            />
          </div>
        </div>
      </section>

      {/* Callout box */}
      <section className="bg-white py-8 px-6">
        <div className="max-w-4xl mx-auto">
          <div className="bg-[#0f2744] rounded-xl p-8 flex flex-col md:flex-row items-start md:items-center gap-6">
            <div className="flex-1">
              <p className="text-white font-semibold text-lg mb-1">Still have questions?</p>
              <p className="text-[#94a3b8] text-sm leading-relaxed">
                Our team is happy to do a free 30-minute SR&amp;ED eligibility call — no obligation, no pitch.
              </p>
            </div>
            <Link
              href="/contact"
              className="inline-flex items-center px-6 py-3 bg-white text-[#0f2744] font-semibold rounded-md hover:bg-[#f8f7f4] transition-colors text-sm shrink-0"
            >
              Book a Free Call
            </Link>
          </div>
        </div>
      </section>

      {/* Section: Audits */}
      <section id="audits" className="bg-[#f8f7f4] py-16 px-6 scroll-mt-24">
        <div className="max-w-4xl mx-auto">
          <h2 className="font-serif text-3xl text-[#0f2744] font-bold mb-10">Audits &amp; CRA Reviews</h2>
          <div className="space-y-0">
            <FAQItem
              question="What happens during an SR&ED audit?"
              answer="              An SR&ED audit (formally called a review) involves a CRA reviewer examining your technical narratives, financial records, and supporting documentation. The reviewer may request interviews with your technical staff, additional project documentation, or evidence of the work claimed. Audit rates have been increasing as CRA tightens administration of the program. Wavecrest includes full audit defense in every engagement - we manage all CRA correspondence, attend any meetings, and defend your claim at no additional fee."
            />
          </div>
        </div>
      </section>

      <CTABanner />
    </>
  )
}
