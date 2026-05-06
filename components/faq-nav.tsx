'use client'

const anchors = [
  { label: 'Qualifying', href: '#qualifying' },
  { label: 'Claim Size', href: '#claim-size' },
  { label: 'Costs', href: '#costs' },
  { label: 'Process', href: '#process' },
  { label: 'Audits', href: '#audits' },
]

export default function FAQNav() {
  return (
    <div className="bg-[#f8f7f4] border-b border-[#e2e8f0] sticky top-16 z-40 overflow-x-auto">
      <div className="max-w-4xl mx-auto px-6 py-3 flex items-center gap-2" role="navigation" aria-label="FAQ quick navigation">
        {anchors.map((anchor) => (
          <a
            key={anchor.href}
            href={anchor.href}
            className="inline-flex shrink-0 items-center px-4 py-1.5 bg-white border border-[#e2e8f0] rounded-full text-[#475569] text-xs font-medium hover:bg-[#0f2744] hover:text-white hover:border-[#0f2744] transition-colors"
          >
            {anchor.label}
          </a>
        ))}
      </div>
    </div>
  )
}
