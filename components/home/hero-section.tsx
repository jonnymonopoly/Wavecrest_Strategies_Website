'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay: i * 0.15, ease: [0.22, 1, 0.36, 1] },
  }),
}

export default function HeroSection() {
  return (
    <section className="bg-[#f8f7f4] pt-32 pb-20 px-6 overflow-hidden">
      <div className="max-w-5xl mx-auto text-center">

        {/* Heading - full width, centred */}
        <motion.h1
          custom={0}
          initial="hidden"
          animate="visible"
          variants={fadeUp}
          className="font-serif text-[#0f2744] text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-[1.08] mb-8 text-balance"
        >
          Founder-Friendly SR&amp;ED Tax Credits &amp; Government Funding for Canadian Builders.
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          custom={1}
          initial="hidden"
          animate="visible"
          variants={fadeUp}
          className="text-[#475569] text-lg sm:text-xl leading-relaxed mb-8 max-w-2xl mx-auto"
        >
          SR&amp;ED consulting built by founders, for founders. Big&nbsp;4 expertise, transparent fees, and free audit defense - so you can focus on building.
        </motion.p>

        {/* CTAs */}
        <motion.div
          custom={2}
          initial="hidden"
          animate="visible"
          variants={fadeUp}
          className="flex flex-wrap justify-center gap-4 mb-10"
        >
          <Link
            href="/contact"
            className="inline-flex items-center px-6 py-3 bg-[#0f2744] text-white font-semibold rounded-md hover:bg-[#1b3d6b] transition-colors text-sm"
          >
            Let&apos;s Get Started
          </Link>
          <Link
            href="/calculator"
            className="inline-flex items-center px-6 py-3 border border-[#0f2744] text-[#0f2744] font-semibold rounded-md hover:bg-[#0f2744] hover:text-white transition-colors text-sm"
          >
            Estimate My Credit &rarr;
          </Link>
        </motion.div>

        {/* Decorative wave SVG - centred below CTAs */}
        <motion.div
          custom={3}
          initial="hidden"
          animate="visible"
          variants={fadeUp}
          className="flex items-center justify-center"
          aria-hidden="true"
        >
          <svg
            viewBox="0 0 800 220"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="w-full max-w-3xl"
          >
            {[700, 600, 500, 400, 300, 200, 120, 60].map((r, i) => (
              <path
                key={`arc-${r}`}
                d={`M ${400 - r} 220 A ${r} ${r} 0 0 1 ${400 + r} 220`}
                stroke="#0f2744"
                strokeWidth="1.5"
                opacity={0.03 + i * 0.018}
                fill="none"
              />
            ))}
            {[650, 550, 450, 350, 250, 160, 90].map((r, i) => (
              <path
                key={`blue-arc-${r}`}
                d={`M ${400 - r} 220 A ${r} ${r} 0 0 1 ${400 + r} 220`}
                stroke="#2563eb"
                strokeWidth="1"
                opacity={0.025 + i * 0.022}
                fill="none"
              />
            ))}
          </svg>
        </motion.div>

      </div>
    </section>
  )
}
