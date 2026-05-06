import Link from 'next/link'
import { Linkedin, Mail, Phone } from 'lucide-react'

const WAVECREST_LINKEDIN = "https://www.linkedin.com/company/wavecrest-strategies"
// TODO: Confirm final Wavecrest LinkedIn company URL before launch

const quickLinks = [
  { label: 'About', href: '/about' },
  { label: 'Services', href: '/services' },
  { label: 'SR&ED FAQ', href: '/sred-faq' },
  { label: 'Insights', href: '/insights' },
  { label: 'Team', href: '/team' },
  { label: 'Contact', href: '/contact' },
]

export default function Footer() {
  return (
    <footer className="bg-[#0f2744] text-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 lg:gap-16">
          {/* Col 1: Brand */}
          <div>
            <p className="font-serif text-white text-lg font-semibold tracking-wide mb-3">
              WAVECREST STRATEGIES
            </p>
            <p className="text-[#94a3b8] text-sm leading-relaxed mb-3">
              Founder-friendly SR&amp;ED, funding strategies, and finance services for Canadian founders.
            </p>
            <div className="inline-flex items-center gap-1.5 text-[#94a3b8] text-xs mb-6">
              <span className="w-1.5 h-1.5 rounded-full bg-[#16a34a] shrink-0" aria-hidden="true" />
              Founder Friendly. Always.
            </div>
            <p className="text-[#94a3b8] text-xs">
              &copy; {new Date().getFullYear()} Wavecrest Strategies. All rights reserved.
            </p>
          </div>

          {/* Col 2: Quick Links */}
          <div>
            <p className="text-white text-xs font-semibold uppercase tracking-widest mb-4 text-[#94a3b8]">Quick Links</p>
            <ul className="space-y-2.5">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-[#94a3b8] hover:text-white text-sm transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 3: Contact */}
          <div>
            <p className="text-white text-xs font-semibold uppercase tracking-widest mb-4 text-[#94a3b8]">Contact</p>
            <ul className="space-y-3">
              <li>
                <a
                  href="mailto:info@wavecreststrategies.ca"
                  className="flex items-center gap-2 text-[#94a3b8] hover:text-white text-sm transition-colors"
                >
                  <Mail size={15} className="shrink-0" />
                  info@wavecreststrategies.ca
                </a>
              </li>
              <li>
                <a
                  href="tel:PLACEHOLDER"
                  className="flex items-center gap-2 text-[#94a3b8] hover:text-white text-sm transition-colors"
                >
                  <Phone size={15} className="shrink-0" />
                  [PHONE PLACEHOLDER]
                </a>
              </li>
              <li>
                <a
                  href={WAVECREST_LINKEDIN}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-[#94a3b8] hover:text-white text-sm transition-colors"
                  aria-label="Wavecrest Strategies on LinkedIn"
                >
                  <Linkedin size={15} className="shrink-0" />
                  LinkedIn
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-[#1b3d6b]">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 py-4">
          <p className="text-center text-[#94a3b8] text-xs">
            Serving founders across all of Canada &nbsp;&middot;&nbsp; Toronto &middot; Halifax &middot; Vancouver &middot; Calgary &middot; Ottawa
          </p>
        </div>
      </div>
    </footer>
  )
}
