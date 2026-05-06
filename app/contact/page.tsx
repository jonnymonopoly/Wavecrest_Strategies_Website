import type { Metadata } from 'next'
import { Mail, Linkedin } from 'lucide-react'
import SchemaOrg from '@/components/schema-org'
import ContactForm from '@/components/contact-form'
import TidyCalEmbed from '@/components/tidycal-embed'

export const metadata: Metadata = {
  title: 'Contact Wavecrest Strategies | Book a Free SR&ED Assessment',
  description: 'Book a free 30-minute SR&ED eligibility assessment or reach out to the Wavecrest team. Serving Canadian founders from coast to coast.',
  openGraph: {
    title: 'Contact Wavecrest Strategies | Book a Free SR&ED Assessment',
    description: 'Book a free 30-minute SR&ED eligibility assessment. No obligation. No jargon.',
    url: 'https://www.wavecreststrategies.ca/contact',
    siteName: 'Wavecrest Strategies',
    type: 'website',
  },
  alternates: { canonical: 'https://www.wavecreststrategies.ca/contact' },
}

const contactSchema = {
  '@context': 'https://schema.org',
  '@type': 'ContactPage',
  name: 'Contact Wavecrest Strategies',
  url: 'https://www.wavecreststrategies.ca/contact',
  description: 'Book a free SR&ED assessment or contact the Wavecrest Strategies team.',
}

export default function ContactPage() {
  return (
    <>
      <SchemaOrg schema={contactSchema} />

      {/* Hero */}
      <section className="bg-[#0f2744] pt-32 pb-16 px-6">
        <div className="max-w-4xl mx-auto">
          <h1 className="font-serif text-4xl md:text-5xl lg:text-[56px] text-white font-bold leading-tight mb-6 text-balance">
            Let&apos;s Talk.
          </h1>
          <p className="text-[#94a3b8] text-lg md:text-xl leading-relaxed max-w-2xl">
            A free 30-minute call is the fastest way to find out if SR&amp;ED or government funding can work for your company. No obligation. No jargon.
          </p>
        </div>
      </section>

      {/* Main content */}
      <section className="bg-[#f8f7f4] py-16 px-6">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
          {/* Left: TidyCal */}
          <div>
            <h2 className="font-serif text-[#0f2744] text-2xl md:text-3xl font-bold mb-4">
              Book a Free Assessment
            </h2>
            <p className="text-[#475569] text-base leading-relaxed mb-6">
              Choose a time that works for you. We&apos;ll spend 30 minutes understanding your business and give you an honest assessment of what funding programs apply to you — and what they&apos;re likely worth.
            </p>
            <TidyCalEmbed />
          </div>

          {/* Right: Contact form */}
          <div>
            <h2 className="font-serif text-[#0f2744] text-2xl md:text-3xl font-bold mb-4">
              Send Us a Message
            </h2>
            <ContactForm />
          </div>
        </div>
      </section>

      {/* Contact info strip */}
      <section className="bg-white py-12 px-6 border-t border-[#e2e8f0]">
        <div className="max-w-4xl mx-auto flex flex-col sm:flex-row items-center justify-center gap-8">
          <a
            href="mailto:info@wavecreststrategies.ca"
            className="flex items-center gap-2.5 text-[#475569] hover:text-[#0f2744] transition-colors text-sm"
          >
            <Mail size={16} className="text-[#2563eb]" />
            info@wavecreststrategies.ca
          </a>
          <span className="text-[#94a3b8] text-sm hidden sm:block">|</span>
          <p className="text-[#475569] text-sm">Serving founders across all of Canada</p>
          <span className="text-[#94a3b8] text-sm hidden sm:block">|</span>
          <a
            href="https://www.linkedin.com/in/marc-hanna-10498287/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2.5 text-[#475569] hover:text-[#0f2744] transition-colors text-sm"
            aria-label="Marc Hanna on LinkedIn"
          >
            <Linkedin size={16} className="text-[#2563eb]" />
            LinkedIn
          </a>
        </div>
      </section>
    </>
  )
}
