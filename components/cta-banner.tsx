import Link from 'next/link'

export default function CTABanner() {
  return (
    <section className="bg-[#0f2744] py-20 px-6">
      <div className="max-w-3xl mx-auto text-center">
        <h2 className="font-serif text-3xl md:text-4xl text-white font-bold mb-4 text-balance">
          Ready to keep more of what you&apos;ve already earned?
        </h2>
        <p className="text-[#94a3b8] text-lg mb-8 leading-relaxed">
          Book a free 30-minute assessment with a founder who has been exactly where you are. No obligation. No jargon. Just clarity.
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          <Link
            href="/contact"
            className="inline-flex items-center px-8 py-3.5 bg-white text-[#0f2744] font-semibold rounded-md hover:bg-[#f8f7f4] transition-colors text-sm"
          >
            Let&apos;s Get Started
          </Link>
          <Link
            href="/calculator"
            className="inline-flex items-center px-8 py-3.5 border border-white/30 text-white font-semibold rounded-md hover:bg-white/10 transition-colors text-sm"
          >
            Estimate My Credit &rarr;
          </Link>
        </div>
      </div>
    </section>
  )
}
