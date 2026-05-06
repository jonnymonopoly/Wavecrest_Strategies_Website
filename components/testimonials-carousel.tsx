'use client'

import { useState, useEffect } from 'react'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'

interface Testimonial {
  quote: string
  author: string
  company: string
}

const testimonials: Testimonial[] = [
  {
    quote: 'We moved our SR&ED claim preparation to Wavecrest and saved a lot on fees. Just as importantly, our team did not have to do the heavy lifting our previous service provider required. Marc and his team were excellent to work with.',
    author: 'Simon Cusack',
    company: 'Serial Founder',
  },
  {
    quote: 'Wavecrest Strategies understands hardware innovation: expensive, iterative, and hard to document after the fact. As a founder, I value partners who translate complex R&D into a clear SR&ED claim without slowing the team down.',
    author: 'Darren MacLeod',
    company: '3x Founder / Co-Founder, Navigator',
  },
  {
    quote: 'Wavecrest Strategies brings much-needed clarity to SR&ED for Canadian SMBs. As a founder, I value partners who understand the realities of building a business, reduce the administrative burden, and help companies keep more of the credits they\'ve earned. Wavecrest does exactly that.',
    author: 'Bill Murphy',
    company: 'Serial Founder and Investor / CEO @ Huumans',
  },
]

export function TestimonialsCarousel() {
  const [current, setCurrent] = useState(0)
  const [direction, setDirection] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setDirection(1)
      setCurrent((prev) => (prev + 1) % testimonials.length)
    }, 11000)

    return () => clearInterval(interval)
  }, [])

  const slideVariants = {
    enter: (dir: number) => ({
      x: dir > 0 ? 1000 : -1000,
      opacity: 0,
    }),
    center: {
      zIndex: 1,
      x: 0,
      opacity: 1,
    },
    exit: (dir: number) => ({
      zIndex: 0,
      x: dir > 0 ? -1000 : 1000,
      opacity: 0,
    }),
  }

  const paginate = (newDirection: number) => {
    setDirection(newDirection)
    setCurrent((prev) => (prev + newDirection + testimonials.length) % testimonials.length)
  }

  return (
    <section className="bg-white py-20 px-6">
      <div className="max-w-4xl mx-auto">
        {/* Carousel */}
        <div className="relative mb-12">
          <div className="overflow-hidden rounded-lg">
            <AnimatePresence initial={false} custom={direction} mode="wait">
              <motion.div
                key={current}
                custom={direction}
                variants={slideVariants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{
                  x: { type: 'spring', stiffness: 300, damping: 30 },
                  opacity: { duration: 0.2 },
                }}
                className="bg-[#f8f7f4] p-12 md:p-16"
              >
                <blockquote className="font-serif text-[#0f2744] text-2xl md:text-[26px] italic leading-relaxed text-center max-w-3xl mx-auto mb-6">
                  &ldquo;{testimonials[current].quote}&rdquo;
                </blockquote>
                <p className="text-center text-[#475569] text-sm">
                  <strong>{testimonials[current].author}</strong>, {testimonials[current].company}
                </p>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Navigation Arrows */}
          <button
            onClick={() => paginate(-1)}
            className="absolute left-4 top-1/2 -translate-y-1/2 -translate-x-4 md:-translate-x-8 z-20 bg-[#0f2744] text-white p-2 rounded-full hover:bg-[#1b3d6b] transition-colors"
            aria-label="Previous testimonial"
          >
            <ChevronLeft size={20} />
          </button>
          <button
            onClick={() => paginate(1)}
            className="absolute right-4 top-1/2 -translate-y-1/2 translate-x-4 md:translate-x-8 z-20 bg-[#0f2744] text-white p-2 rounded-full hover:bg-[#1b3d6b] transition-colors"
            aria-label="Next testimonial"
          >
            <ChevronRight size={20} />
          </button>
        </div>

        {/* Dot Indicators */}
        <div className="flex items-center justify-center gap-2 mb-12">
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => {
                setDirection(index > current ? 1 : -1)
                setCurrent(index)
              }}
              className={`w-3 h-3 rounded-full transition-all ${
                index === current
                  ? 'bg-[#0f2744] w-8'
                  : 'bg-[#e2e8f0] hover:bg-[#94a3b8]'
              }`}
              aria-label={`Go to testimonial ${index + 1}`}
              aria-current={index === current}
            />
          ))}
        </div>

        {/* Stats Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
          {[
            { stat: '[$X]+', label: 'Claims Filed' },
            { stat: '$[$X]M+', label: 'Recovered for Founders' },
            { stat: '[$X]', label: 'Years Average Experience' },
          ].map((item) => (
            <div key={item.label} className="bg-[#f8f7f4] rounded-xl p-6">
              <p className="font-serif text-[#0f2744] text-3xl font-bold mb-1">{item.stat}</p>
              <p className="text-[#475569] text-sm">{item.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
