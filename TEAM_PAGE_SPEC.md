# Wavecrest Strategies - Team Page Specification

Use this document to recreate the Team page for the Wavecrest Strategies website.

---

## Page Metadata

- **Title:** Our Team | Wavecrest Strategies | SR&ED & Funding Experts
- **Description:** Meet the Wavecrest Strategies team - experienced professionals with Big 4 backgrounds, venture capital experience, and genuine founder empathy.
- **Canonical URL:** https://www.wavecreststrategies.ca/team

---

## Page Structure

The page has 3 sections:
1. Hero Section (dark navy background)
2. Leadership Section (cream/off-white background)
3. CTA Banner (dark navy background)

---

## Section 1: Hero

**Background:** `#0f2744` (dark navy)
**Padding:** pt-32 pb-20 px-6
**Max width:** 4xl (centered)

### Content:

**Heading (H1):**
```
The Team Behind Wavecrest.
```
- Font: Serif, bold
- Size: 4xl on mobile, 5xl on tablet, 56px on desktop
- Color: White
- Leading: tight

**Subheading:**
```
Founders, investors, and practitioners. Our team brings the perspective of people who have been on both sides of the table.
```
- Size: lg on mobile, xl on tablet+
- Color: `#94a3b8` (muted gray)
- Max width: 2xl

---

## Section 2: Leadership

**Background:** `#f8f7f4` (cream/off-white)
**Padding:** py-20 px-6
**Max width:** 4xl (centered)

### Section Label:
```
Leadership
```
- Color: `#2563eb` (blue)
- Size: xs
- Font weight: semibold
- Transform: uppercase
- Letter spacing: widest
- Margin bottom: 10

### Layout:
- Single vertical list (flex column)
- Gap: 6 (1.5rem) between team members

---

## Team Member Card Component

Each team member displays in a card with:
- **Background:** White
- **Border:** 1px solid `#e2e8f0`
- **Border radius:** 2xl (1rem)
- **Padding:** p-8 (featured members: md:p-10)

### Card Layout:
- Flex row on sm+ screens, column on mobile
- Gap: 6
- Items aligned to start

### Avatar:
- Circular div with initials
- Background: `#e2e8f0`
- Text color: `#0f2744`
- Font: Serif, bold
- **Featured size:** 140x140px, text-2xl
- **Regular size:** 100x100px, text-xl

### Content Area:
- **Name:** Serif font, bold, `#0f2744`
  - Featured: text-2xl
  - Regular: text-xl
- **Title Pill:** Inline block below name
  - Background: `#0f2744`
  - Text: White, xs, font-semibold
  - Padding: px-3 py-1
  - Border radius: full (pill shape)
- **LinkedIn Icon:** Top right, `#94a3b8` color, hover `#2563eb`
- **Bio:** `#475569` color, leading-[1.7]
  - Featured: text-base
  - Regular: text-sm

---

## Team Members Data

### 1. Marc Hanna (FEATURED)

- **Initials:** MH
- **Name:** Marc Hanna
- **Title:** Managing Partner
- **LinkedIn:** https://www.linkedin.com/in/marc-hanna-10498287/
- **Bio:**
```
Marc Hanna is the Managing Partner of Wavecrest Strategies, with over 30 years of experience in business management across technology, retail, and financial services. A serial entrepreneur, Marc has built and managed successful businesses across multiple sectors before bringing that experience to the world of SR&ED and government funding. His senior roles at Deloitte and BDO Canada - where he specialized in tax credits, grants, and investment incentives - give Wavecrest a technical depth that few boutique firms can match. Marc is committed to improving access to digital resources and affordable housing in rural Nova Scotia.
```

---

### 2. Jon Irwin

- **Initials:** JI
- **Name:** Jon Irwin
- **Title:** Principal
- **LinkedIn:** https://www.linkedin.com/in/jon-irwin
- **Bio:**
```
Jon Irwin is a Funding and Investment Expert with 15+ years of specialized experience in SR&ED claims and government incentives. A veteran of the Big 4 - including roles as Senior Manager at PwC, Deloitte, and BDO Canada - Jon has worked on hundreds of SR&ED claims across software, IT, and engineering. Beyond SR&ED, Jon brings deep expertise in alternative funding programs (CanExport, ScaleAI, OCI) and venture capital dynamics. As CTO at Lighten.world and Chief Funding Officer at LendU, Jon combines technical depth with entrepreneurial perspective. He's also a passionate mentor through Toronto Business Development Centre and CryptoChicks, helping founders and teams unlock their potential.
```

---

### 3. Ian Whytock

- **Initials:** IW
- **Name:** Ian Whytock
- **Title:** Strategic Advisor
- **LinkedIn:** https://www.linkedin.com/in/ianwhytock/
- **Bio:**
```
Ian Whytock is the Managing Partner at Tidal Venture Partners, where he leads fund operations, investment due diligence, and portfolio company support. Under his leadership, Tidal launched Fund I, bringing together limited partners from across North America, and helped portfolio companies secure over $18 million in successor and co-investment financing. Ian was the first Canadian fund manager to graduate from the VC Lab accelerator program. His background in strategy consulting and his role as Executive Director for Canada at Asoko Insight give him a uniquely global perspective on the Canadian innovation ecosystem.
```

---

### 4. Chris Crowell

- **Initials:** CC
- **Name:** Chris Crowell
- **Title:** Strategic Advisor
- **LinkedIn:** https://www.linkedin.com/in/chriscrowell/
- **Bio:**
```
Chris Crowell is both an active Canadian venture capitalist and startup founder. He is the co-founder of ResolveHD, an AI startup using natural language processing to unlock the potential of health data, and a founding general partner at Tidal Venture Partners. Previously, Chris held operations and technology leadership roles at Bell Canada, OpenText, and Accenture, where he led Accenture Ventures and open health innovation for Canada. He has made significant contributions to Atlantic Canada's innovation ecosystem, including building Volta's first corporate innovation program and developing innovation strategies for Nova Scotia Health, the Port of Halifax, and TechNL. He is the inaugural chair of Ignite Atlantic and holds an LLB and MBA from Dalhousie University.
```

---

## Section 3: CTA Banner

**Background:** `#0f2744` (dark navy)
**Padding:** py-20 px-6
**Max width:** 3xl (centered)
**Text alignment:** Center

### Content:

**Heading:**
```
Ready to keep more of what you've already earned?
```
- Font: Serif, bold
- Size: 3xl on mobile, 4xl on desktop
- Color: White

**Subheading:**
```
Book a free 30-minute assessment with a founder who has been exactly where you are. No obligation. No jargon. Just clarity.
```
- Color: `#94a3b8`
- Size: lg
- Margin bottom: 8

### Buttons (flex row, centered, gap-4):

1. **Primary Button:** "Let's Get Started"
   - Background: White
   - Text: `#0f2744`
   - Hover: `#f8f7f4`
   - Links to: /contact

2. **Secondary Button:** "Estimate My Credit →"
   - Border: white/30
   - Text: White
   - Hover: white/10 background
   - Links to: /calculator

---

## Color Palette Reference

| Color | Hex | Usage |
|-------|-----|-------|
| Navy | `#0f2744` | Primary brand, backgrounds, text |
| Cream | `#f8f7f4` | Light backgrounds |
| Blue | `#2563eb` | Accent, links, labels |
| Gray text | `#475569` | Body text |
| Muted gray | `#94a3b8` | Subtitles, secondary text |
| Border | `#e2e8f0` | Card borders |
| White | `#ffffff` | Backgrounds, text on dark |

---

## Typography

- **Headings:** Serif font (use font-serif class)
- **Body:** Sans-serif (default)
- **Font weights:** Bold for headings, semibold for labels, normal for body

---

## Icons

- **LinkedIn:** Use Lucide React `Linkedin` icon, size 20px

---

## Schema.org Markup

Include Person schema for each team member with:
- @type: Person
- name
- jobTitle
- worksFor: { @type: Organization, name: "Wavecrest Strategies" }
- url (LinkedIn)
- description (for Marc and Jon)
