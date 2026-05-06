'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { Menu, X } from 'lucide-react'

const navLinks = [
  { label: 'About', href: '/about' },
  { label: 'Services', href: '/services' },
  { label: 'Calculator', href: '/calculator' },
  { label: 'SR&ED FAQ', href: '/sred-faq' },
  { label: 'Insights', href: '/insights' },
  { label: 'Team', href: '/team' },
]

export default function Nav() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 60)
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    setMenuOpen(false)
  }, [pathname])

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-200 bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/80 ${
        scrolled ? 'shadow-sm border-b border-[#e2e8f0]' : ''
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link
            href="/"
            className="font-serif text-[#0f2744] text-lg font-semibold tracking-wide hover:opacity-80 transition-opacity"
            aria-label="Wavecrest Strategies - Home"
          >
            WAVECREST STRATEGIES
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-7" aria-label="Main navigation">
            {navLinks.map((link) => {
              const isActive = pathname === link.href
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`text-sm font-medium transition-colors relative pb-0.5 ${
                    isActive
                      ? 'text-[#0f2744] after:absolute after:bottom-0 after:left-0 after:right-0 after:h-[2px] after:bg-[#0f2744] after:rounded-full'
                      : 'text-[#475569] hover:text-[#0f2744]'
                  }`}
                >
                  {link.label}
                </Link>
              )
            })}
            <Link
              href="/contact"
              className="ml-2 inline-flex items-center px-4 py-2 bg-[#0f2744] text-white text-sm font-medium rounded-md hover:bg-[#1b3d6b] transition-colors"
            >
              Let&apos;s Get Started
            </Link>
          </nav>

          {/* Mobile hamburger */}
          <button
            className="lg:hidden p-2 text-[#0f2744] hover:bg-[#f8f7f4] rounded-md transition-colors"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label={menuOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={menuOpen}
            aria-controls="mobile-menu"
          >
            {menuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div
          id="mobile-menu"
          className="lg:hidden border-t border-[#e2e8f0] bg-white"
          role="navigation"
          aria-label="Mobile navigation"
        >
          <div className="px-6 py-4 flex flex-col gap-1">
            {navLinks.map((link) => {
              const isActive = pathname === link.href
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`py-2.5 text-sm font-medium border-b border-[#f1f5f9] last:border-0 transition-colors ${
                    isActive ? 'text-[#0f2744] font-semibold' : 'text-[#475569] hover:text-[#0f2744]'
                  }`}
                >
                  {link.label}
                </Link>
              )
            })}
            <Link
              href="/contact"
              className="mt-3 inline-flex items-center justify-center px-4 py-2.5 bg-[#0f2744] text-white text-sm font-medium rounded-md hover:bg-[#1b3d6b] transition-colors"
            >
              Let&apos;s Get Started
            </Link>
          </div>
        </div>
      )}
    </header>
  )
}
