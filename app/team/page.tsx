import type { Metadata } from 'next'
import { Linkedin } from 'lucide-react'
import CTABanner from '@/components/cta-banner'
import SchemaOrg from '@/components/schema-org'

export const metadata: Metadata = {
  title: 'Our Team | Wavecrest Strategies | SR&ED & Funding Experts',
  description: 'Meet the Wavecrest Strategies team - experienced professionals with Big 4 backgrounds, venture capital experience, and genuine founder empathy.',
  openGraph: {
    title: 'Our Team | Wavecrest Strategies | SR&ED & Funding Experts',
    description: 'Founders, investors, and practitioners with Big 4 pedigree.',
    url: 'https://www.wavecreststrategies.ca/team',
    siteName: 'Wavecrest Strategies',
    type: 'website',
  },
  alternates: { canonical: 'https://www.wavecreststrategies.ca/team' },
}

const teamSchema = [
  {
    '@context': 'https://schema.org',
    '@type': 'Person',
    name: 'Marc Hanna',
    jobTitle: 'Managing Partner',
    worksFor: { '@type': 'Organization', name: 'Wavecrest Strategies' },
    url: 'https://www.linkedin.com/in/marc-hanna-10498287/',
    description: '30+ years in SR&ED and government funding. Former Deloitte and BDO. Founder and investor.',
  },
  {
    '@context': 'https://schema.org',
    '@type': 'Person',
    name: 'Jon Irwin',
    jobTitle: 'Principal',
    worksFor: { '@type': 'Organization', name: 'Wavecrest Strategies' },
    url: 'https://www.linkedin.com/in/jon-irwin',
    description: 'Funding and Investment Expert with 15+ years SR&ED experience. Former PwC, Deloitte, BDO. CTO, mentor, and STEM advocate.',
  },
  {
    '@context': 'https://schema.org',
    '@type': 'Person',
    name: 'Ian Whytock',
    jobTitle: 'Strategic Advisor',
    worksFor: { '@type': 'Organization', name: 'Wavecrest Strategies' },
    url: 'https://www.linkedin.com/in/ianwhytock/',
  },
  {
    '@context': 'https://schema.org',
    '@type': 'Person',
    name: 'Chris Crowell',
    jobTitle: 'Strategic Advisor',
    worksFor: { '@type': 'Organization', name: 'Wavecrest Strategies' },
    url: 'https://www.linkedin.com/in/chriscrowell/',
  },
]

interface TeamMemberProps {
  initials: string
  name: string
  title: string
  bio: string
  linkedin: string
  featured?: boolean
}

function TeamMember({ initials, name, title, bio, linkedin, featured }: TeamMemberProps) {
  return (
    <div className={`bg-white border border-[#e2e8f0] rounded-2xl p-8 ${featured ? 'md:p-10' : ''}`}>
      <div className="flex flex-col sm:flex-row gap-6 items-start">
        {/* Avatar */}
        <div
          className={`${featured ? 'w-[140px] h-[140px] text-2xl' : 'w-[100px] h-[100px] text-xl'} rounded-full bg-[#e2e8f0] flex items-center justify-center font-serif font-bold text-[#0f2744] shrink-0`}
          aria-label={`${name} avatar`}
        >
          {initials}
        </div>
        <div className="flex-1">
          <div className="flex items-start justify-between gap-4 flex-wrap mb-2">
            <div>
              <h3 className={`font-serif text-[#0f2744] font-bold text-balance ${featured ? 'text-2xl' : 'text-xl'}`}>
                {name}
              </h3>
              <span className="inline-block mt-1 px-3 py-1 bg-[#0f2744] text-white text-xs font-semibold rounded-full">
                {title}
              </span>
            </div>
            <a
              href={linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#94a3b8] hover:text-[#2563eb] transition-colors mt-1"
              aria-label={`${name} on LinkedIn`}
            >
              <Linkedin size={20} />
            </a>
          </div>
          <p className={`text-[#475569] leading-[1.7] mt-3 ${featured ? 'text-base' : 'text-sm'}`}>{bio}</p>
        </div>
      </div>
    </div>
  )
}

export default function TeamPage() {
  return (
    <>
      <SchemaOrg schema={teamSchema} />

      {/* Hero */}
      <section className="bg-[#0f2744] pt-32 pb-20 px-6">
        <div className="max-w-4xl mx-auto">
          <h1 className="font-serif text-4xl md:text-5xl lg:text-[56px] text-white font-bold leading-tight mb-6 text-balance">
            The Team Behind Wavecrest.
          </h1>
          <p className="text-[#94a3b8] text-lg md:text-xl leading-relaxed max-w-2xl">
            Founders, investors, and practitioners. Our team brings the perspective of people who have been on both sides of the table.
          </p>
        </div>
      </section>

      {/* Leadership */}
      <section className="bg-[#f8f7f4] py-20 px-6">
        <div className="max-w-4xl mx-auto">
          <p className="text-[#2563eb] text-xs font-semibold uppercase tracking-widest mb-10">Leadership</p>
          <div className="flex flex-col gap-6">
            <TeamMember
              featured
              initials="MH"
              name="Marc Hanna"
              title="Managing Partner"
              linkedin="https://www.linkedin.com/in/marc-hanna-10498287/"
              bio="Marc Hanna is the Managing Partner of Wavecrest Strategies, with over 30 years of experience in business management across technology, retail, and financial services. A serial entrepreneur, Marc has built and managed successful businesses across multiple sectors before bringing that experience to the world of SR&ED and government funding. His senior roles at Deloitte and BDO Canada - where he specialized in tax credits, grants, and investment incentives - give Wavecrest a technical depth that few boutique firms can match. Marc is committed to improving access to digital resources and affordable housing in rural Nova Scotia."
            />
            <TeamMember
              initials="JI"
              name="Jon Irwin"
              title="Principal"
              linkedin="https://www.linkedin.com/in/jon-irwin"
              bio="Jon Irwin is a Funding and Investment Expert with 15+ years of specialized experience in SR&ED claims and government incentives. A veteran of the Big 4 - including roles as Senior Manager at PwC, Deloitte, and BDO Canada - Jon has worked on hundreds of SR&ED claims across software, IT, and engineering. Beyond SR&ED, Jon brings deep expertise in alternative funding programs (CanExport, ScaleAI, OCI) and venture capital dynamics. As CTO at Lighten.world and Chief Funding Officer at LendU, Jon combines technical depth with entrepreneurial perspective. He's also a passionate mentor through Toronto Business Development Centre and CryptoChicks, helping founders and teams unlock their potential."
            />
            <TeamMember
              initials="IW"
              name="Ian Whytock"
              title="Strategic Advisor"
              linkedin="https://www.linkedin.com/in/ianwhytock/"
              bio="Ian Whytock is the Managing Partner at Tidal Venture Partners, where he leads fund operations, investment due diligence, and portfolio company support. Under his leadership, Tidal launched Fund I, bringing together limited partners from across North America, and helped portfolio companies secure over $18 million in successor and co-investment financing. Ian was the first Canadian fund manager to graduate from the VC Lab accelerator program. His background in strategy consulting and his role as Executive Director for Canada at Asoko Insight give him a uniquely global perspective on the Canadian innovation ecosystem."
            />
            <TeamMember
              initials="CC"
              name="Chris Crowell"
              title="Strategic Advisor"
              linkedin="https://www.linkedin.com/in/chriscrowell/"
              bio="Chris Crowell is both an active Canadian venture capitalist and startup founder. He is the co-founder of ResolveHD, an AI startup using natural language processing to unlock the potential of health data, and a founding general partner at Tidal Venture Partners. Previously, Chris held operations and technology leadership roles at Bell Canada, OpenText, and Accenture, where he led Accenture Ventures and open health innovation for Canada. He has made significant contributions to Atlantic Canada's innovation ecosystem, including building Volta's first corporate innovation program and developing innovation strategies for Nova Scotia Health, the Port of Halifax, and TechNL. He is the inaugural chair of Ignite Atlantic and holds an LLB and MBA from Dalhousie University."
            />
          </div>
        </div>
      </section>

      <CTABanner />
    </>
  )
}
