# Wavecrest Strategies — Homepage Spec

This document describes the full content, layout, structure, and styling of the Wavecrest Strategies homepage (`/`) for recreation by an LLM or developer.

---

## Tech Stack & Dependencies

- **Framework:** Next.js 16 App Router
- **Styling:** Tailwind CSS v4
- **Animation:** Framer Motion (`motion`, `AnimatePresence`)
- **Icons:** Lucide React (`FlaskConical`, `Building2`, `BarChart3`, `CheckCircle2`, `ChevronLeft`, `ChevronRight`)
- **Font:** Serif font for headings, sans-serif for body

---

## Color Palette

| Token | Hex | Usage |
|-------|-----|-------|
| Navy (primary) | `#0f2744` | Headings, backgrounds, buttons |
| Navy hover | `#1b3d6b` | Button hover states |
| Blue accent | `#2563eb` | Section labels, links |
| Blue light | `#3b82f6` | Labels on dark backgrounds |
| Green accent | `#16a34a` | Checkmark icons, success dots |
| Cream | `#f8f7f4` | Alternate section backgrounds |
| White | `#ffffff` | Card backgrounds, text on dark |
| Slate body | `#475569` | Body text |
| Slate muted | `#94a3b8` | Subtext on dark backgrounds |
| Border | `#e2e8f0` | Card borders, dividers |

---

## Page Metadata

```
title: "SR&ED Tax Credits & Government Funding | Wavecrest Strategies | Canada"
description: "Wavecrest Strategies helps Canadian founders maximize SR&ED tax credits and government funding. Founder-built. Big 4 pedigree. Transparent fees. Free audit defense."
canonical: https://www.wavecreststrategies.ca
og:locale: en_CA
og:type: website
```

---

## Page Structure (Top to Bottom)

The homepage is composed of **9 sections** in the following order:

1. Hero
2. Testimonials Carousel
3. The Problem We Solve ("Built for Founders")
4. Services Overview ("What We Do")
5. Five Commitments ("The Founder-Friendly Standard")
6. SR&ED Calculator (embedded)
7. Who We Serve
8. Blog Preview (placeholder — not yet built)
9. CTA Banner

---

## Section 1: Hero

**Background:** `#f8f7f4` (cream)
**Layout:** Centered, max-width `max-w-5xl`, `pt-32 pb-20 px-6`
**Animation:** Framer Motion `fadeUp` stagger (each element custom-indexed, delay = index × 0.15s, duration 0.6s, ease `[0.22, 1, 0.36, 1]`)

### H1
```
Founder-Friendly SR&ED Tax Credits & Government Funding for Canadian Builders.
```
- Font: serif, bold
- Size: `text-4xl` → `sm:text-5xl` → `md:text-6xl` → `lg:text-7xl`
- Color: `#0f2744`
- Line height: `1.08`
- Wrapping: `text-balance`
- Margin bottom: `mb-8`

### Subtitle
```
SR&ED consulting built by founders, for founders. Big 4 expertise, transparent fees, and free audit defense - so you can focus on building.
```
- Font: sans-serif
- Size: `text-lg sm:text-xl`
- Color: `#475569`
- Max-width: `max-w-2xl`, centered
- Margin bottom: `mb-8`

### CTA Buttons (flex row, centered, `gap-4`, `mb-10`)

**Primary button:**
- Label: `Let's Get Started`
- Link: `/contact`
- Style: `bg-[#0f2744] text-white`, `px-6 py-3`, `rounded-md`, hover `bg-[#1b3d6b]`, `text-sm font-semibold`

**Secondary button:**
- Label: `Estimate My Credit →`
- Link: `/calculator`
- Style: `border border-[#0f2744] text-[#0f2744]`, `px-6 py-3`, `rounded-md`, hover `bg-[#0f2744] text-white`, `text-sm font-semibold`

### Decorative Wave SVG
- Centered below CTAs, `max-w-3xl`, `aria-hidden="true"`
- `viewBox="0 0 800 220"`
- Two sets of concentric arcs radiating from `x=400, y=220`:
  - Navy arcs (`#0f2744`): radii `[700, 600, 500, 400, 300, 200, 120, 60]`, `strokeWidth=1.5`, opacity starts at `0.03` increasing by `0.018` per step
  - Blue arcs (`#2563eb`): radii `[650, 550, 450, 350, 250, 160, 90]`, `strokeWidth=1`, opacity starts at `0.025` increasing by `0.022` per step
  - Arc path formula: `M ${400 - r} 220 A ${r} ${r} 0 0 1 ${400 + r} 220`

---

## Section 2: Testimonials Carousel

**Background:** `#ffffff`
**Padding:** `py-20 px-6`
**Max-width:** `max-w-4xl`, centered
**Library:** Framer Motion `AnimatePresence` with slide transitions

### Carousel Behaviour
- Auto-advances every **11 seconds**
- Slides in from right (direction=1) or left (direction=-1)
- Spring transition: `stiffness: 300, damping: 30`
- Opacity duration: `0.2s`
- Prev/next arrow buttons (navy circles, `ChevronLeft`/`ChevronRight` at `size={20}`)
- Dot indicators: active dot is `bg-[#0f2744] w-8`, inactive is `bg-[#e2e8f0] w-3`, all `h-3 rounded-full`

### Testimonial Card Style
- Background: `#f8f7f4`, `rounded-lg`, `p-12 md:p-16`
- Quote: serif, italic, `text-2xl md:text-[26px]`, color `#0f2744`, centered, `max-w-3xl mx-auto`
- Attribution: `text-[#475569] text-sm`, centered, `font-bold` for name, plain for company

### Testimonials Data

**Testimonial 1:**
> "We moved our SR&ED claim preparation to Wavecrest and saved a lot on fees. Just as importantly, our team did not have to do the heavy lifting our previous service provider required. Marc and his team were excellent to work with."

— **Simon Cusack**, Serial Founder

---

**Testimonial 2:**
> "Wavecrest Strategies understands hardware innovation: expensive, iterative, and hard to document after the fact. As a founder, I value partners who translate complex R&D into a clear SR&ED claim without slowing the team down."

— **Darren MacLeod**, 3x Founder / Co-Founder, Navigator

---

**Testimonial 3:**
> "Wavecrest Strategies brings much-needed clarity to SR&ED for Canadian SMBs. As a founder, I value partners who understand the realities of building a business, reduce the administrative burden, and help companies keep more of the credits they've earned. Wavecrest does exactly that."

— **Bill Murphy**, Serial Founder and Investor / CEO @ Huumans

### Stats Row (below carousel, `grid grid-cols-1 md:grid-cols-3 gap-6`)
Three stat cards, `bg-[#f8f7f4] rounded-xl p-6`, centered text:

| Stat | Label |
|------|-------|
| `[$X]+` | Claims Filed |
| `$[$X]M+` | Recovered for Founders |
| `[$X]` | Years Average Experience |

- Stat: serif, `text-3xl font-bold`, color `#0f2744`
- Label: sans-serif, `text-sm`, color `#475569`

> Note: Replace `[$X]` placeholders with real numbers when available.

---

## Section 3: The Problem We Solve

**Background:** `#ffffff`
**Padding:** `py-20 px-6`
**Layout:** Centered text, `max-w-4xl`

### Section Label
`Built for Founders` — `text-[#2563eb] text-xs font-semibold uppercase tracking-widest mb-4`

### H2
```
SR&ED is money you've already earned. We make sure you keep it.
```
- Serif, bold, `text-3xl md:text-[40px]`, color `#0f2744`, `mb-6`, `text-balance`

### Body Paragraph 1
```
The SR&ED program distributes over $3 billion to Canadian companies every year - but most founders never claim it. Those who do often overpay, spend months on prep, and get hit with surprise audit fees. We built Wavecrest to be the firm we wished existed when we were in your shoes.
```
- `text-[#475569] text-lg leading-relaxed mb-4 max-w-3xl mx-auto`

### Body Paragraph 2
```
Founder-built. Founder-priced. Founder-friendly - every step of the way.
```
- `text-[#475569] text-base leading-relaxed mb-12 max-w-2xl mx-auto font-medium`

---

## Section 4: Services Overview

**Background:** `#f8f7f4`
**Padding:** `py-20 px-6`
**Max-width:** `max-w-7xl`

### Section Header (centered, `mb-12`)
- Label: `What We Do` — blue, xs, uppercase, tracking-widest
- H2: `Three ways we help you grow.` — serif, bold, `text-3xl md:text-[40px]`, navy, `text-balance`

### Service Cards Grid (`grid grid-cols-1 md:grid-cols-3 gap-6`)

Each card: `bg-white border border-[#e2e8f0] rounded-xl p-8 hover:shadow-md transition-shadow`

**Card structure:**
- Icon in a `w-12 h-12 rounded-full bg-[#f8f7f4] border border-[#e2e8f0]` circle
- H3: serif, `text-2xl font-semibold`, color `#0f2744`, `mb-3`
- Body: `text-[#475569] text-sm leading-relaxed mb-5`
- Link: `text-[#2563eb] text-sm font-medium hover:underline`

**Three services:**

| Icon (Lucide) | Title | Body | Link |
|---|---|---|---|
| `FlaskConical` | SR&ED Tax Credits | We handle every aspect of your SR&ED claim - technical narrative, financial calculations, CRA submission, and audit defense if needed. Our team has Big 4 depth with boutique attention. Typical clients recover 20-35% of qualifying R&D expenditures. | `/services#sred` |
| `Building2` | Fundraising & Grant Strategy | Canada's funding landscape is complex and constantly changing. We map every applicable federal and provincial program for your company - IRAP, NRC, regional funds, and sector-specific grants - and build a strategy to capture them. | `/services#funding` |
| `BarChart3` | Fractional Financial Services | Get the financial clarity of a senior CFO or controller without the full-time cost. Bookkeeping, financial reporting, and strategic finance support on a fractional basis - built around your stage and budget. | `/services#fractional` |

---

## Section 5: Five Commitments ("The Founder-Friendly Standard")

**Background:** `#0f2744` (dark navy)
**Padding:** `py-20 px-6`
**Max-width:** `max-w-5xl`

### Section Header (centered, `mb-12`)
- Label: `The Founder-Friendly Standard` — `text-[#3b82f6]`, xs, uppercase, tracking-widest, `mb-4`
- H2: `Five commitments every founder gets. In writing.` — serif, bold, `text-3xl md:text-[40px]`, white, `text-balance`
- Subheading: `We designed these around one question: how would we want to be treated if we were still founders?` — `text-[#94a3b8] text-base mt-4 max-w-xl mx-auto leading-relaxed`

### Commitments Grid (`grid grid-cols-1 md:grid-cols-2 gap-6`)

Each item: `flex gap-4` with a `CheckCircle2` icon (`size={22}`, color `text-[#16a34a]`, `shrink-0 mt-0.5`) and a `div` containing:
- Title: `text-white font-semibold mb-1`
- Description: `text-[#94a3b8] text-sm leading-relaxed`

The **5th item** spans full width on desktop: `md:col-span-2 md:max-w-md md:mx-auto`

**Five commitments:**

1. **Best Rate Guarantee**
   If we can't beat your current provider's rate, we won't take your business. We benchmark against Big 4 firms and boutique consultants before we quote.

2. **Work on Your Timeline, Not Ours**
   Big firms schedule you in. We don't. When you need your claim done, we make it happen. Flexibility is part of the service, not an upgrade.

3. **No Hidden Fees. Full Stop.**
   No fees on CRA interest payments. No hidden administration charges. Our quote is all-in. What you see is what you pay. Full Transparency. No surprises.

4. **Free Audit Defense, Always**
   If CRA selects your claim for review, we manage the entire process at zero additional cost. We prepare the responses, attend the meetings, and defend your claim. No surprises, no invoices.

5. **Human Expertise. No AI Slop.**
   Qualified humans lead and oversee the preparation of every claim. Your technical narrative is written by experienced practitioners who understand CRA's expectations - not generated by an AI and sent out the door.

---

## Section 6: SR&ED Calculator

This is an embedded interactive React component (`SredCalculator`) at route `/calculator`.
For full calculator spec see the calculator component file at `components/sred-calculator.tsx`.

---

## Section 7: Who We Serve

**Background:** `#f8f7f4`
**Padding:** `py-20 px-6`
**Max-width:** `max-w-5xl`

### Section Header (centered, `mb-10`)
- Label: `Who We Serve` — blue, xs, uppercase, tracking-widest, `mb-4`
- H2: `Founder-friendly by design. Proven across every sector.` — serif, bold, `text-3xl md:text-[40px]`, navy, `text-balance`, `mb-5`
- Body: `We work with Canadian founders across every sector - software, hardware, biotech, cleantech, manufacturing, and more. If your team is solving hard technical problems, there is a strong chance you qualify for SR&ED.` — `text-[#475569] text-lg leading-relaxed max-w-3xl mx-auto`

### Industry Grid (`grid grid-cols-2 md:grid-cols-3 gap-4 mb-10`)

Each card: `bg-white border border-[#e2e8f0] rounded-xl p-5 text-center hover:shadow-sm transition-shadow`
- Emoji (as icon): `text-2xl block mb-2` with `role="img"` and `aria-label`
- Label: `text-[#0f2744] text-sm font-medium`

**Six industries:**

| Emoji | Label |
|-------|-------|
| 💻 | Software & SaaS |
| 🔬 | Life Sciences & Biotech |
| ⚡ | Cleantech & Energy |
| 🏭 | Advanced Manufacturing |
| 🚀 | Aerospace & Defence |
| 🤖 | AI & Machine Learning |

### Footer Link
```
Not sure if you qualify? Most founders are surprised. Take our free 5-minute eligibility check →
```
- `text-center text-[#475569] text-sm`
- Link: `/contact`, color `#2563eb`, `hover:underline font-medium`

---

## Section 8: Blog Preview

This section is reserved but not yet built. Leave a placeholder comment.

---

## Section 9: CTA Banner

**Background:** `#0f2744`
**Padding:** `py-20 px-6`
**Layout:** Centered, `max-w-3xl`

### H2
```
Ready to keep more of what you've already earned?
```
- Serif, bold, `text-3xl md:text-4xl`, white, `text-balance`, `mb-4`

### Subtext
```
Book a free 30-minute assessment with a founder who has been exactly where you are. No obligation. No jargon. Just clarity.
```
- `text-[#94a3b8] text-lg mb-8 leading-relaxed`

### CTA Buttons (`flex flex-wrap justify-center gap-4`)

**Primary button:**
- Label: `Let's Get Started`
- Link: `/contact`
- Style: `bg-white text-[#0f2744]`, `px-8 py-3.5`, `rounded-md`, hover `bg-[#f8f7f4]`, `text-sm font-semibold`

**Secondary button:**
- Label: `Estimate My Credit →`
- Link: `/calculator`
- Style: `border border-white/30 text-white`, `px-8 py-3.5`, `rounded-md`, hover `bg-white/10`, `text-sm font-semibold`

---

## Notes for the LLM

- The site uses Next.js App Router. All pages are server components by default; client components are marked `'use client'`.
- The `SchemaOrg` component renders a `<script type="application/ld+json">` tag in the page head. Pass it a `schema` prop with a plain JS object.
- The `HeroSection` and `TestimonialsCarousel` are separate component files — `'use client'` because they use Framer Motion and React state respectively.
- Stats placeholders (`[$X]`) in the testimonials section should be replaced with real numbers before launch.
- The Blog Preview section (Section 8) is intentionally empty — implement when blog content is ready.
