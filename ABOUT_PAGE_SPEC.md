# About Page Specification — Wavecrest Strategies
> Hand this file to an LLM to recreate the About page exactly.

---

## Overview

- **Route:** `/about`
- **File:** `app/about/page.tsx`
- **Framework:** Next.js App Router (no `"use client"` — fully server-rendered)
- **Styling:** Tailwind CSS v4
- **Font:** Serif font for headings (`font-serif`), sans-serif for body (`font-sans`)
- **Component imports required:**
  - `CTABanner` from `@/components/cta-banner`
  - `SchemaOrg` from `@/components/schema-org`

---

## Page Metadata

```ts
title: 'About Wavecrest Strategies | Builder-Friendly SR&ED Consulting Canada'
description: 'Wavecrest Strategies was built by founders and investors who know the SR&ED process from both sides. Big 4 pedigree, transparent fees, and genuine empathy for the entrepreneurial journey.'
openGraph:
  title: 'About Wavecrest Strategies | Builder-Friendly SR&ED Consulting Canada'
  description: 'Wavecrest Strategies was built by founders and investors who know the SR&ED process from both sides.'
  url: 'https://www.wavecreststrategies.ca/about'
  siteName: 'Wavecrest Strategies'
  type: 'website'
canonical: 'https://www.wavecreststrategies.ca/about'
```

---

## Schema.org Markup

Inject via `<SchemaOrg schema={aboutSchema} />` at the top of the JSX return. The `SchemaOrg` component renders a `<script type="application/ld+json">` tag using `dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}`.

```json
{
  "@context": "https://schema.org",
  "@type": "AboutPage",
  "name": "About Wavecrest Strategies",
  "description": "Wavecrest Strategies is a Canadian SR&ED and government funding consultancy built by founders and investors.",
  "url": "https://www.wavecreststrategies.ca/about"
}
```

---

## Color Palette

| Token | Hex | Usage |
|---|---|---|
| Navy | `#0f2744` | Hero background, headings, buttons |
| Off-white | `#f8f7f4` | Section backgrounds, card fills |
| White | `#ffffff` | Card backgrounds, button text |
| Blue accent | `#2563eb` | Section labels, links |
| Body text | `#475569` | Paragraph copy |
| Muted text | `#94a3b8` | Hero subtitle |
| Border | `#e2e8f0` | Card borders |

---

## Page Structure — 5 Sections

```
1. Hero          bg-[#0f2744]   Dark navy
2. Philosophy    bg-[#f8f7f4]   Off-white
3. Why Choose Us bg-white       White
4. Services      bg-[#f8f7f4]   Off-white
5. CTA Banner    bg-[#0f2744]   Dark navy  (shared component)
```

---

## Section 1: Hero

**Background:** `bg-[#0f2744]`
**Padding:** `pt-32 pb-20 px-6`
**Max width:** `max-w-4xl mx-auto`

### H1
```
We built the firm we wished existed when we were founders.
```
- Class: `font-serif text-4xl md:text-5xl lg:text-[56px] text-white font-bold leading-tight mb-6 text-balance`

### Subtitle paragraph
```
Wavecrest was born from a simple frustration: the firms best positioned to help Canadian founders navigate SR&ED were either too expensive, too slow, or too removed from the realities of building a company. We changed that.
```
- Class: `text-[#94a3b8] text-lg md:text-xl leading-relaxed max-w-2xl`
- Note: `SR&ED` must be escaped as `SR&amp;ED` in JSX

---

## Section 2: Philosophy

**Background:** `bg-[#f8f7f4]`
**Padding:** `py-20 px-6`
**Max width:** `max-w-4xl mx-auto`

### Section label
```
OUR PHILOSOPHY
```
- Class: `text-[#2563eb] text-xs font-semibold uppercase tracking-widest mb-4`

### H2
```
Founder-friendly isn't a tagline. It's a policy.
```
- Class: `font-serif text-3xl md:text-[40px] text-[#0f2744] font-bold mb-10 text-balance`
- Note: Apostrophes must be escaped as `&apos;` in JSX

### Body copy
Three paragraphs in a `div` with class `space-y-6 text-[#475569] text-lg leading-[1.7]`.

**Paragraph 1:**
```
At Wavecrest, every decision about how we operate - our fee structure, our audit defense policy, our approach to client onboarding - is filtered through a single question: is this how we would want to be treated if we were the founder? As people who have raised capital, built companies, and sat on both sides of the investment table, we know exactly what it feels like to be stretched thin, skeptical of vendors, and protective of every dollar.
```

**Paragraph 2:**
```
That's why our best rate guarantee isn't a marketing claim - it's a commitment we enforce by walking away from clients we can't serve better than their current provider. It's why our audit defense is truly included, not buried in fine print. And it's why we never charge fees on CRA interest payments - because that money belongs to you, not us.
```
- Note: All apostrophes must be escaped as `&apos;` in JSX

**Paragraph 3:**
```
We work alongside founders, not above them. We roll up our sleeves, do the heavy lifting, and aim to return 60% of the time your team would spend with a traditional provider. You build the company. We handle the credits.
```

---

## Section 3: Why Choose Us

**Background:** `bg-white`
**Padding:** `py-20 px-6`
**Max width:** `max-w-5xl mx-auto`

### Header block (centred)
- Section label: `WHY CHOOSE US` — class: `text-[#2563eb] text-xs font-semibold uppercase tracking-widest mb-4`
- H2: `What sets us apart.` — class: `font-serif text-3xl md:text-[40px] text-[#0f2744] font-bold text-balance`
- Header wrapper: `text-center mb-12`

### Pillars grid
Layout: `grid grid-cols-1 md:grid-cols-3 gap-6`

Each card: `bg-[#f8f7f4] rounded-xl p-8`
- H3: `font-serif text-[#0f2744] text-xl font-semibold mb-3`
- Body: `text-[#475569] text-sm leading-relaxed`

| # | Title | Body copy |
|---|---|---|
| 1 | Builders First | We deeply empathize with the entrepreneurial journey. Every service we offer has been pressure-tested by our own experience as founders and investors. |
| 2 | Growth-Oriented | We don't just file claims - we build funding strategies. Our goal is to maximize every non-dilutive dollar available to your company. |
| 3 | Value Focused | If we cannot provide better value than your current provider, we say so upfront and walk away. Your trust matters more than a fee. |

---

## Section 4: Services Summary

**Background:** `bg-[#f8f7f4]`
**Padding:** `py-20 px-6`
**Max width:** `max-w-5xl mx-auto`

### Header block (centred)
- Section label: `WHAT WE DO` — class: `text-[#2563eb] text-xs font-semibold uppercase tracking-widest mb-4`
- H2: `Three services. One mission.` — class: `font-serif text-3xl md:text-[40px] text-[#0f2744] font-bold text-balance`
- Header wrapper: `text-center mb-12`

### Services grid
Layout: `grid grid-cols-1 md:grid-cols-3 gap-6`

Each card: `bg-white border border-[#e2e8f0] rounded-xl p-7`
- H3: `font-serif text-[#0f2744] text-xl font-semibold mb-3`
- Body: `text-[#475569] text-sm leading-relaxed mb-4`
- Link: `text-[#2563eb] text-sm font-medium hover:underline` with text `Learn more →` (use `&rarr;` for arrow)

| # | Title | Body | Link href |
|---|---|---|---|
| 1 | SR&ED Claims | We handle every aspect of your SR&ED claim from technical scoping through CRA submission, with full audit defense included. No surprises. | `/services#sred` |
| 2 | Fundraising & Grant Strategy | We map every applicable federal and provincial funding program for your company and build a strategy to capture them - IRAP, NRC, ACOA, and more. | `/services#funding` |
| 3 | Fractional Financial Services | Senior CFO and controller expertise on a fractional basis. Bookkeeping, reporting, cash flow, and raise support calibrated to your stage. | `/services#fractional` |

- Note: `SR&ED` and `&` in card titles must be escaped as `SR&amp;ED` and `&amp;` in JSX

---

## Section 5: CTA Banner (Shared Component)

Rendered via `<CTABanner />`. No props required.

**Background:** `bg-[#0f2744]`
**Padding:** `py-20 px-6`
**Max width:** `max-w-3xl mx-auto text-center`

### Heading
```
Ready to keep more of what you've already earned?
```
- Class: `font-serif text-3xl md:text-4xl text-white font-bold mb-4 text-balance`

### Subtext
```
Book a free 30-minute assessment with a founder who has been exactly where you are. No obligation. No jargon. Just clarity.
```
- Class: `text-[#94a3b8] text-lg mb-8 leading-relaxed`

### Buttons
Two buttons side by side, wrapped in `flex flex-wrap justify-center gap-4`:

**Primary button:**
- Text: `Let's Get Started`
- href: `/contact`
- Class: `inline-flex items-center px-8 py-3.5 bg-white text-[#0f2744] font-semibold rounded-md hover:bg-[#f8f7f4] transition-colors text-sm`

**Secondary button:**
- Text: `Estimate My Credit →` (use `&rarr;` for arrow)
- href: `/calculator`
- Class: `inline-flex items-center px-8 py-3.5 border border-white/30 text-white font-semibold rounded-md hover:bg-white/10 transition-colors text-sm`

---

## JSX Escaping Reference

| Character | JSX escape |
|---|---|
| `'` (apostrophe) | `&apos;` |
| `&` (ampersand) | `&amp;` |
| `→` (arrow) | `&rarr;` |
| `"` (open quote) | `&ldquo;` |
| `"` (close quote) | `&rdquo;` |

---

## Implementation Notes

- The page is a default export: `export default function AboutPage()`
- No `"use client"` directive — this is a server component
- All sections are wrapped in a React Fragment `<>...</>`
- `SchemaOrg` is rendered as the first child before any `<section>` tags
- `CTABanner` is the last child, after all content sections
- All `<Link>` components use `href` from `next/link`
- No external images used on this page — purely text and layout
