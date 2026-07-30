# SR&ED Calculator — Full Component Code

This document contains the complete, ready-to-use code for the SR&ED Tax Credit Calculator component, plus the dependencies and setup instructions needed to drop it into another site.

---

## Overview

`SredCalculator` is a self-contained, client-side React component (Next.js App Router compatible) that:

- Collects R&D expenditures (salaries, contractors, materials, overhead) in Step 1
- Collects company details (province, CCPC status, prior taxable income) in Step 2
- Calculates estimated federal + provincial SR&ED tax credits and displays a breakdown in Step 3
- Uses a 3-step wizard with a progress bar, tooltips, and a results CTA banner

It is built with **shadcn/ui** components, **Tailwind CSS**, and **lucide-react** icons.

---

## Requirements / Dependencies

### 1. Framework
- **Next.js** (App Router) or any React 18+ setup. The `"use client"` directive is for Next.js; remove it if not using Next.js.
- **React 18+**

### 2. npm packages
```bash
npm install lucide-react
```

### 3. shadcn/ui components
Install these via the shadcn CLI (or copy them manually if you already have a UI library):
```bash
npx shadcn@latest add card button input label select tooltip progress
```

This provides:
- `@/components/ui/card`
- `@/components/ui/button`
- `@/components/ui/input`
- `@/components/ui/label`
- `@/components/ui/select`
- `@/components/ui/tooltip`
- `@/components/ui/progress`

### 4. Tailwind CSS
Tailwind must be configured. The component uses hard-coded hex colors (via arbitrary values like `bg-[#0f2744]`) so no custom theme tokens are required.

### 5. Fonts (optional)
The component uses `font-serif` for headings. Configure a serif font in your Tailwind/layout if you want the exact look; otherwise it falls back to the default serif stack.

### 6. Links
The component imports `Link` from `next/link` and links to `/contact` and `/sred-faq`. If you are not on Next.js, replace `next/link` with your router's link component or plain `<a>` tags, and update the hrefs to match your site's routes.

---

## Color Palette Reference

| Hex | Usage |
| --- | --- |
| `#0f2744` | Primary navy (headings, buttons, CTA background) |
| `#1b3d6b` | Navy hover state |
| `#2563eb` | Accent blue (credit amounts, badges, links) |
| `#1d4ed8` | Accent blue hover |
| `#475569` | Body text (slate) |
| `#94a3b8` | Muted text / placeholders |
| `#e2e8f0` | Borders |
| `#f8f7f4` | Section background (cream) |

---

## Notes on the Calculation Logic

- The provincial rate tables (`provinces` array) contain pre-computed effective ITC rates per expenditure type for both **CCPC** and **other/public** companies. These rates already fold in the proxy overhead method (55% of salaries), the 80% contractor eligibility, and federal/provincial tax interactions.
- CCPC companies use the enhanced **35%** federal rate; other corporations use **15%**.
- The federal/provincial split shown in the results is an approximation for display purposes.
- **Rates are indicative and should be reviewed against current CRA rules before relying on them.** Update the `provinces` array if legislation changes.

---

## Full Component Code

Save this as `components/sred-calculator.tsx`:

```tsx
"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Calculator, ArrowRight, ArrowLeft, Info, RotateCcw } from "lucide-react"
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip"
import { Progress } from "@/components/ui/progress"
import Link from "next/link"

// Provincial SR&ED rates and per-expenditure-type ITC rates
// CCPC rates include proxy method (55% overhead on salaries) and tax interaction adjustments
// For 2025+, CCPC enhanced rate of 35% applies on first $4.5M of eligible expenditures
const provinces = [
  { value: "ON", label: "Ontario", provRate: 0.08, name: "Ontario Innovation Tax Credit",
    ccpc: { salaries: 0.6584, contractors: 0.3398, materials: 0.4248 },
    other: { salaries: 0.3565, contractors: 0.1840, materials: 0.2300 } },
  { value: "BC", label: "British Columbia", provRate: 0.10, name: "BC SR&ED Tax Credit",
    ccpc: { salaries: 0.6893, contractors: 0.3558, materials: 0.4448 },
    other: { salaries: 0.3875, contractors: 0.2000, materials: 0.2500 } },
  { value: "AB", label: "Alberta", provRate: 0.10, name: "Alberta SR&ED Tax Credit",
    ccpc: { salaries: 0.6893, contractors: 0.3558, materials: 0.4448 },
    other: { salaries: 0.3875, contractors: 0.2000, materials: 0.2500 } },
  { value: "QC", label: "Quebec", provRate: 0.30, name: "Quebec SR&ED Tax Credit",
    ccpc: { salaries: 0.7285, contractors: 0.4000, materials: 0.3500 },
    other: { salaries: 0.4650, contractors: 0.2700, materials: 0.1500 } },
  { value: "SK", label: "Saskatchewan", provRate: 0.10, name: "Saskatchewan SR&ED Tax Credit",
    ccpc: { salaries: 0.6893, contractors: 0.3558, materials: 0.4448 },
    other: { salaries: 0.3875, contractors: 0.2000, materials: 0.2500 } },
  { value: "MB", label: "Manitoba", provRate: 0.20, name: "Manitoba SR&ED Tax Credit",
    ccpc: { salaries: 0.8438, contractors: 0.4355, materials: 0.5445 },
    other: { salaries: 0.5425, contractors: 0.2800, materials: 0.3500 } },
  { value: "NS", label: "Nova Scotia", provRate: 0.15, name: "Nova Scotia SR&ED Tax Credit",
    ccpc: { salaries: 0.7665, contractors: 0.3957, materials: 0.4948 },
    other: { salaries: 0.4650, contractors: 0.2400, materials: 0.3000 } },
  { value: "NB", label: "New Brunswick", provRate: 0.15, name: "New Brunswick SR&ED Tax Credit",
    ccpc: { salaries: 0.7665, contractors: 0.3957, materials: 0.4948 },
    other: { salaries: 0.4650, contractors: 0.2400, materials: 0.3000 } },
  { value: "NL", label: "Newfoundland", provRate: 0.15, name: "Newfoundland SR&ED Tax Credit",
    ccpc: { salaries: 0.7665, contractors: 0.3957, materials: 0.4948 },
    other: { salaries: 0.4650, contractors: 0.2400, materials: 0.3000 } },
  { value: "PE", label: "Prince Edward Island", provRate: 0.00, name: "PEI (No Provincial Credit)",
    ccpc: { salaries: 0.5348, contractors: 0.2760, materials: 0.3450 },
    other: { salaries: 0.2325, contractors: 0.1200, materials: 0.1500 } },
]

export function SredCalculator() {
  const [step, setStep] = useState(1)
  const [salaries, setSalaries] = useState("")
  const [contractors, setContractors] = useState("")
  const [materials, setMaterials] = useState("")
  const [overhead, setOverhead] = useState("")
  const [province, setProvince] = useState("")
  const [isCcpc, setIsCcpc] = useState("")
  const [taxableIncome, setTaxableIncome] = useState("")

  const parseNumber = (value: string) => parseFloat(value.replace(/,/g, "")) || 0

  const calculateFunding = () => {
    const salaryAmount = parseNumber(salaries)
    const contractorAmount = parseNumber(contractors)
    const materialAmount = parseNumber(materials)
    const overheadAmount = parseNumber(overhead)

    const selectedProvince = provinces.find(p => p.value === province)
    const isCcpcCompany = isCcpc === "yes"

    // Get the correct ITC rate set for company type and province
    const rates = selectedProvince
      ? (isCcpcCompany ? selectedProvince.ccpc : selectedProvince.other)
      : (isCcpcCompany
          ? { salaries: 0.5348, contractors: 0.2760, materials: 0.3450 }
          : { salaries: 0.2325, contractors: 0.1200, materials: 0.1500 })

    // Calculate credits per expenditure type using accurate ITC rates
    // These rates already account for proxy method (55% overhead on salaries),
    // the 80% contractor eligibility, and federal/provincial tax interactions
    const salaryCredit = salaryAmount * rates.salaries
    const contractorCredit = contractorAmount * rates.contractors
    const materialCredit = materialAmount * rates.materials

    const totalCredit = salaryCredit + contractorCredit + materialCredit
    const totalSpend = salaryAmount + contractorAmount + materialAmount

    // For display: eligible expenditure pool (proxy method)
    const eligibleSalaries = salaryAmount
    const eligibleContractors = contractorAmount * 0.8
    const eligibleMaterials = materialAmount
    const calculatedOverhead = overheadAmount || (salaryAmount * 0.55)
    const totalEligible = eligibleSalaries + eligibleContractors + eligibleMaterials + calculatedOverhead

    const effectiveRate = totalSpend > 0 ? (totalCredit / totalSpend) * 100 : 0

    // Approximate federal / provincial split for display
    const provRate = selectedProvince?.provRate || 0
    const fedShare = isCcpcCompany ? 0.35 : 0.15
    const totalRateRatio = fedShare + provRate
    const federalCredit = totalRateRatio > 0 ? totalCredit * (fedShare / totalRateRatio) : totalCredit
    const provincialCredit = totalCredit - federalCredit

    return {
      eligibleSalaries,
      eligibleContractors,
      eligibleMaterials,
      calculatedOverhead,
      totalEligible,
      federalCredit,
      provincialCredit,
      totalCredit,
      effectiveRate,
      provinceName: selectedProvince?.name || "Provincial Credit",
      salaryCredit,
      contractorCredit,
      materialCredit,
      rates,
    }
  }

  const results = calculateFunding()
  const hasInput = salaries || contractors || materials

  const formatCurrency = (amount: number) => {
    return new Intl.NumberFormat("en-CA", {
      style: "currency",
      currency: "CAD",
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    }).format(amount)
  }

  const totalSteps = 3
  const progress = (step / totalSteps) * 100

  return (
    <section className="py-16 lg:py-24 bg-[#f8f7f4]">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#2563eb]/10 text-[#2563eb] text-sm font-medium mb-4">
            <Calculator className="h-4 w-4" />
            SR&ED Calculator
          </div>
          <h1 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-[#0f2744] tracking-tight">
            Calculate Your SR&ED Tax Credits
          </h1>
          <p className="mt-4 text-lg text-[#475569]">
            Get a detailed estimate of your potential federal and provincial SR&ED tax credits based on your R&D expenditures.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          {/* Progress bar */}
          <div className="mb-8">
            <div className="flex justify-between text-sm text-[#475569] mb-2">
              <span>Step {step} of {totalSteps}</span>
              <span>{Math.round(progress)}% complete</span>
            </div>
            <Progress value={progress} className="h-2" />
          </div>

          <Card className="shadow-lg border-[#e2e8f0] bg-white">
            <CardContent className="p-6 lg:p-8">
              <TooltipProvider>
                {/* Step 1: Expenditures */}
                {step === 1 && (
                  <div className="space-y-6">
                    <div>
                      <h2 className="font-serif text-xl font-semibold text-[#0f2744] mb-1">SR&ED Expenditures</h2>
                      <p className="text-sm text-[#475569]">Enter your annual SR&ED-related costs</p>
                    </div>

                    <div className="grid md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <div className="flex items-center gap-2">
                          <Label htmlFor="salaries" className="text-[#0f2744]">SR&ED Employee Salaries</Label>
                          <Tooltip>
                            <TooltipTrigger>
                              <Info className="h-4 w-4 text-[#94a3b8]" />
                            </TooltipTrigger>
                            <TooltipContent>
                              <p className="max-w-xs">Total salaries of employees directly engaged in SR&ED work (developers, engineers, scientists, technicians)</p>
                            </TooltipContent>
                          </Tooltip>
                        </div>
                        <div className="relative">
                          <span className="absolute left-3 top-1/2 -translate-y-1/2 text-[#94a3b8]">$</span>
                          <Input
                            id="salaries"
                            type="text"
                            placeholder="500,000"
                            value={salaries}
                            onChange={(e) => setSalaries(e.target.value)}
                            className="pl-7 border-[#e2e8f0] focus:border-[#2563eb] focus:ring-[#2563eb]"
                          />
                        </div>
                        <p className="text-xs text-[#94a3b8]">100% eligible</p>
                      </div>

                      <div className="space-y-2">
                        <div className="flex items-center gap-2">
                          <Label htmlFor="contractors" className="text-[#0f2744]">Contractor Costs</Label>
                          <Tooltip>
                            <TooltipTrigger>
                              <Info className="h-4 w-4 text-[#94a3b8]" />
                            </TooltipTrigger>
                            <TooltipContent>
                              <p className="max-w-xs">Third-party contractors performing SR&ED work on your behalf</p>
                            </TooltipContent>
                          </Tooltip>
                        </div>
                        <div className="relative">
                          <span className="absolute left-3 top-1/2 -translate-y-1/2 text-[#94a3b8]">$</span>
                          <Input
                            id="contractors"
                            type="text"
                            placeholder="100,000"
                            value={contractors}
                            onChange={(e) => setContractors(e.target.value)}
                            className="pl-7 border-[#e2e8f0] focus:border-[#2563eb] focus:ring-[#2563eb]"
                          />
                        </div>
                        <p className="text-xs text-[#94a3b8]">80% eligible</p>
                      </div>

                      <div className="space-y-2">
                        <div className="flex items-center gap-2">
                          <Label htmlFor="materials" className="text-[#0f2744]">Materials & Supplies</Label>
                          <Tooltip>
                            <TooltipTrigger>
                              <Info className="h-4 w-4 text-[#94a3b8]" />
                            </TooltipTrigger>
                            <TooltipContent>
                              <p className="max-w-xs">Materials consumed or transformed during SR&ED activities</p>
                            </TooltipContent>
                          </Tooltip>
                        </div>
                        <div className="relative">
                          <span className="absolute left-3 top-1/2 -translate-y-1/2 text-[#94a3b8]">$</span>
                          <Input
                            id="materials"
                            type="text"
                            placeholder="50,000"
                            value={materials}
                            onChange={(e) => setMaterials(e.target.value)}
                            className="pl-7 border-[#e2e8f0] focus:border-[#2563eb] focus:ring-[#2563eb]"
                          />
                        </div>
                        <p className="text-xs text-[#94a3b8]">100% eligible</p>
                      </div>

                      <div className="space-y-2">
                        <div className="flex items-center gap-2">
                          <Label htmlFor="overhead" className="text-[#0f2744]">Overhead (Optional)</Label>
                          <Tooltip>
                            <TooltipTrigger>
                              <Info className="h-4 w-4 text-[#94a3b8]" />
                            </TooltipTrigger>
                            <TooltipContent>
                              <p className="max-w-xs">Leave blank to use proxy method (55% of salaries). Or enter actual overhead allocation.</p>
                            </TooltipContent>
                          </Tooltip>
                        </div>
                        <div className="relative">
                          <span className="absolute left-3 top-1/2 -translate-y-1/2 text-[#94a3b8]">$</span>
                          <Input
                            id="overhead"
                            type="text"
                            placeholder="Auto-calculated"
                            value={overhead}
                            onChange={(e) => setOverhead(e.target.value)}
                            className="pl-7 border-[#e2e8f0] focus:border-[#2563eb] focus:ring-[#2563eb]"
                          />
                        </div>
                        <p className="text-xs text-[#94a3b8]">Proxy: 55% of salaries</p>
                      </div>
                    </div>

                    <div className="flex justify-end pt-4">
                      <Button 
                        onClick={() => setStep(2)} 
                        disabled={!hasInput}
                        className="bg-[#0f2744] hover:bg-[#1b3d6b] text-white"
                      >
                        Continue
                        <ArrowRight className="h-4 w-4 ml-2" />
                      </Button>
                    </div>
                  </div>
                )}

                {/* Step 2: Company Details */}
                {step === 2 && (
                  <div className="space-y-6">
                    <div>
                      <h2 className="font-serif text-xl font-semibold text-[#0f2744] mb-1">Company Details</h2>
                      <p className="text-sm text-[#475569]">Help us determine your applicable rates</p>
                    </div>

                    <div className="grid md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <Label htmlFor="province" className="text-[#0f2744]">Province</Label>
                        <Select value={province} onValueChange={setProvince}>
                          <SelectTrigger id="province" className="border-[#e2e8f0]">
                            <SelectValue placeholder="Select province" />
                          </SelectTrigger>
                          <SelectContent>
                            {provinces.map((prov) => (
                              <SelectItem key={prov.value} value={prov.value}>
                                {prov.label} ({(prov.provRate * 100).toFixed(0)}% provincial)
                              </SelectItem>
                            ))}
                          </SelectContent>
                        </Select>
                      </div>

                      <div className="space-y-2">
                        <div className="flex items-center gap-2">
                          <Label htmlFor="ccpc" className="text-[#0f2744]">Company Type</Label>
                          <Tooltip>
                            <TooltipTrigger>
                              <Info className="h-4 w-4 text-[#94a3b8]" />
                            </TooltipTrigger>
                            <TooltipContent>
                              <p className="max-w-xs">CCPCs qualify for enhanced 35% federal rate on first $4.5M of eligible expenses (2025+)</p>
                            </TooltipContent>
                          </Tooltip>
                        </div>
                        <Select value={isCcpc} onValueChange={setIsCcpc}>
                          <SelectTrigger id="ccpc" className="border-[#e2e8f0]">
                            <SelectValue placeholder="Select company type" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="yes">CCPC (Canadian-Controlled Private Corporation)</SelectItem>
                            <SelectItem value="no">Other Corporation / Public Company</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>

                      <div className="space-y-2 md:col-span-2">
                        <div className="flex items-center gap-2">
                          <Label htmlFor="taxableIncome" className="text-[#0f2744]">Prior Year Taxable Income (Optional)</Label>
                          <Tooltip>
                            <TooltipTrigger>
                              <Info className="h-4 w-4 text-[#94a3b8]" />
                            </TooltipTrigger>
                            <TooltipContent>
                              <p className="max-w-xs">CCPCs with taxable income over $500K may have reduced enhanced credit eligibility</p>
                            </TooltipContent>
                          </Tooltip>
                        </div>
                        <div className="relative max-w-md">
                          <span className="absolute left-3 top-1/2 -translate-y-1/2 text-[#94a3b8]">$</span>
                          <Input
                            id="taxableIncome"
                            type="text"
                            placeholder="0"
                            value={taxableIncome}
                            onChange={(e) => setTaxableIncome(e.target.value)}
                            className="pl-7 border-[#e2e8f0] focus:border-[#2563eb] focus:ring-[#2563eb]"
                          />
                        </div>
                      </div>
                    </div>

                    <div className="flex justify-between pt-4">
                      <Button 
                        variant="outline" 
                        onClick={() => setStep(1)}
                        className="border-[#e2e8f0] text-[#0f2744] hover:bg-[#f8f7f4]"
                      >
                        <ArrowLeft className="h-4 w-4 mr-2" />
                        Back
                      </Button>
                      <Button 
                        onClick={() => setStep(3)} 
                        disabled={!province || !isCcpc}
                        className="bg-[#0f2744] hover:bg-[#1b3d6b] text-white"
                      >
                        See Results
                        <ArrowRight className="h-4 w-4 ml-2" />
                      </Button>
                    </div>
                  </div>
                )}

                {/* Step 3: Results */}
                {step === 3 && (
                  <div className="space-y-6">
                    <div className="text-center">
                      <h2 className="font-serif text-xl font-semibold text-[#0f2744] mb-1">Your SR&ED Estimate</h2>
                      <p className="text-sm text-[#475569]">Based on the information provided</p>
                    </div>

                    {/* Total */}
                    <div className="p-8 rounded-xl bg-gradient-to-br from-[#0f2744]/10 to-[#2563eb]/5 text-center">
                      <p className="text-sm text-[#475569] mb-2">Total Potential SR&ED Credits</p>
                      <p className="text-5xl font-bold text-[#0f2744]">{formatCurrency(results.totalCredit)}</p>
                      <p className="text-lg text-[#475569] mt-2">
                        {results.effectiveRate.toFixed(1)}% effective rate on your SR&ED spend
                      </p>
                    </div>

                    {/* Breakdown */}
                    <div className="grid md:grid-cols-2 gap-6">
                      <Card className="border-[#e2e8f0]">
                        <CardHeader className="pb-2">
                          <CardTitle className="text-base text-[#0f2744]">Eligible Expenditures</CardTitle>
                        </CardHeader>
                        <CardContent className="space-y-3">
                          <div className="flex justify-between text-sm">
                            <span className="text-[#475569]">Salaries (100%)</span>
                            <span className="text-[#0f2744]">{formatCurrency(results.eligibleSalaries)}</span>
                          </div>
                          <div className="flex justify-between text-sm">
                            <span className="text-[#475569]">Contractors (80%)</span>
                            <span className="text-[#0f2744]">{formatCurrency(results.eligibleContractors)}</span>
                          </div>
                          <div className="flex justify-between text-sm">
                            <span className="text-[#475569]">Materials (100%)</span>
                            <span className="text-[#0f2744]">{formatCurrency(results.eligibleMaterials)}</span>
                          </div>
                          <div className="flex justify-between text-sm">
                            <span className="text-[#475569]">Overhead</span>
                            <span className="text-[#0f2744]">{formatCurrency(results.calculatedOverhead)}</span>
                          </div>
                          <div className="flex justify-between font-semibold pt-2 border-t border-[#e2e8f0]">
                            <span className="text-[#0f2744]">Total Eligible</span>
                            <span className="text-[#0f2744]">{formatCurrency(results.totalEligible)}</span>
                          </div>
                        </CardContent>
                      </Card>

                      <Card className="border-[#e2e8f0]">
                        <CardHeader className="pb-2">
                          <CardTitle className="text-base text-[#0f2744]">Credit Breakdown</CardTitle>
                        </CardHeader>
                        <CardContent className="space-y-3">
                          <div className="flex justify-between text-sm">
                            <span className="text-[#475569]">Federal SR&ED Credit</span>
                            <span className="text-[#2563eb] font-medium">{formatCurrency(results.federalCredit)}</span>
                          </div>
                          <div className="flex justify-between text-sm">
                            <span className="text-[#475569]">{results.provinceName}</span>
                            <span className="text-[#2563eb] font-medium">{formatCurrency(results.provincialCredit)}</span>
                          </div>
                          <div className="flex justify-between font-semibold pt-2 border-t border-[#e2e8f0] text-[#2563eb]">
                            <span>Total Credits</span>
                            <span>{formatCurrency(results.totalCredit)}</span>
                          </div>
                        </CardContent>
                      </Card>
                    </div>

                    <p className="text-xs text-[#94a3b8] text-center">
                      This is an estimate only. Actual credits depend on CRA review and project eligibility.
                    </p>

                    {/* Results CTA Banner */}
                    <div className="rounded-xl bg-[#0f2744] p-6 sm:p-8 text-center">
                      <p className="text-[#94a3b8] text-sm font-medium uppercase tracking-widest mb-2">Your estimated SR&amp;ED refund</p>
                      <p className="font-serif text-4xl sm:text-5xl font-bold text-white mb-6">
                        {formatCurrency(results.totalCredit)}
                      </p>
                      <p className="text-[#94a3b8] text-sm leading-relaxed max-w-sm mx-auto mb-6">
                        This is money you&apos;ve already earned. Book a free 30-minute assessment and we&apos;ll walk through exactly what your claim could recover.
                      </p>
                      <div className="flex flex-col sm:flex-row gap-3 justify-center">
                        <Button asChild size="lg" className="bg-[#2563eb] hover:bg-[#1d4ed8] text-white font-semibold px-8">
                          <Link href="/contact">
                            Let&apos;s Get Started
                            <ArrowRight className="h-4 w-4 ml-2" />
                          </Link>
                        </Button>
                        <Button
                          variant="outline"
                          size="lg"
                          onClick={() => { setStep(1); setSalaries(""); setContractors(""); setMaterials(""); setOverhead(""); setProvince(""); setIsCcpc(""); setTaxableIncome(""); }}
                          className="border-white/20 text-white hover:bg-white/10 hover:text-white"
                        >
                          <RotateCcw className="h-4 w-4 mr-2" />
                          Recalculate
                        </Button>
                      </div>
                    </div>
                  </div>
                )}
              </TooltipProvider>
            </CardContent>
          </Card>

          {/* Additional info */}
          <div className="mt-12 text-center">
            <p className="text-[#475569] text-sm mb-4">
              Have questions about your eligibility? Our team can help you understand your SR&ED potential.
            </p>
            <Link 
              href="/sred-faq" 
              className="text-[#2563eb] hover:underline text-sm font-medium"
            >
              Read our SR&ED FAQ
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
```

---

## How to Use

Import and render the component on any page:

```tsx
import { SredCalculator } from "@/components/sred-calculator"

export default function Page() {
  return <SredCalculator />
}
```

---

## Adapting for a Non-Next.js Site

1. Remove the `"use client"` directive (Next.js only).
2. Replace `import Link from "next/link"` with your router's `Link` (e.g. `react-router-dom`) or plain `<a href="...">` tags.
3. Update the two hrefs (`/contact` and `/sred-faq`) to your site's routes.
4. Make sure the shadcn/ui components and Tailwind are set up (see Requirements above).
5. If you don't use shadcn/ui, replace the imported UI primitives (`Card`, `Button`, `Input`, `Label`, `Select`, `Tooltip`, `Progress`) with your own equivalents — the logic and layout stay the same.
