'use client'

import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'
import { CheckCircle2, Loader2 } from 'lucide-react'

const PROVINCES = [
  'Alberta',
  'British Columbia',
  'Manitoba',
  'New Brunswick',
  'Newfoundland and Labrador',
  'Northwest Territories',
  'Nova Scotia',
  'Nunavut',
  'Ontario',
  'Prince Edward Island',
  'Quebec',
  'Saskatchewan',
  'Yukon',
]

const SERVICES = [
  { id: 'sred', label: 'SR&ED Claims' },
  { id: 'funding', label: 'Government Funding' },
  { id: 'fractional', label: 'Fractional Finance' },
  { id: 'unsure', label: 'Not sure yet' },
]

const formSchema = z.object({
  firstName: z.string().min(1, 'First name is required'),
  lastName: z.string().min(1, 'Last name is required'),
  email: z.string().email('Please enter a valid email address'),
  company: z.string().optional(),
  province: z.string().min(1, 'Please select a province or territory'),
  message: z.string().min(20, 'Please provide at least 20 characters'),
  services: z.array(z.string()).optional(),
})

type FormValues = z.infer<typeof formSchema>

export default function ContactForm() {
  const [submitted, setSubmitted] = useState(false)
  const [error, setError] = useState('')

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    watch,
    setValue,
  } = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: { services: [] },
  })

  const selectedServices = watch('services') || []

  function toggleService(id: string) {
    const current = selectedServices
    const updated = current.includes(id)
      ? current.filter((s) => s !== id)
      : [...current, id]
    setValue('services', updated)
  }

  async function onSubmit(data: FormValues) {
    setError('')
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      })
      if (!res.ok) throw new Error('Submission failed')
      setSubmitted(true)
    } catch {
      setError('Something went wrong. Please try again or email us directly.')
    }
  }

  if (submitted) {
    return (
      <div className="flex flex-col items-center justify-center py-16 text-center">
        <div className="w-14 h-14 rounded-full bg-[#dcfce7] flex items-center justify-center mb-4">
          <CheckCircle2 size={28} className="text-[#16a34a]" />
        </div>
        <h3 className="font-serif text-[#0f2744] text-xl font-bold mb-2">Message Received</h3>
        <p className="text-[#475569] text-sm leading-relaxed max-w-sm">
          Thanks - we&apos;ll be in touch within one business day.
        </p>
      </div>
    )
  }

  const inputClass =
    'w-full px-3.5 py-2.5 border border-[#e2e8f0] rounded-md text-[#0f2744] text-sm bg-white placeholder:text-[#94a3b8] focus:outline-none focus:ring-2 focus:ring-[#2563eb] focus:border-[#2563eb] transition-colors'
  const labelClass = 'block text-[#0f2744] text-sm font-medium mb-1.5'
  const errorClass = 'text-red-500 text-xs mt-1'

  return (
    <form onSubmit={handleSubmit(onSubmit)} noValidate className="space-y-5">
      {/* Name row */}
      <div className="grid grid-cols-2 gap-4">
        <div>
          <label htmlFor="firstName" className={labelClass}>
            First Name <span className="text-red-500">*</span>
          </label>
          <input
            id="firstName"
            type="text"
            className={inputClass}
            placeholder="Jane"
            {...register('firstName')}
          />
          {errors.firstName && <p className={errorClass}>{errors.firstName.message}</p>}
        </div>
        <div>
          <label htmlFor="lastName" className={labelClass}>
            Last Name <span className="text-red-500">*</span>
          </label>
          <input
            id="lastName"
            type="text"
            className={inputClass}
            placeholder="Smith"
            {...register('lastName')}
          />
          {errors.lastName && <p className={errorClass}>{errors.lastName.message}</p>}
        </div>
      </div>

      {/* Email */}
      <div>
        <label htmlFor="email" className={labelClass}>
          Email <span className="text-red-500">*</span>
        </label>
        <input
          id="email"
          type="email"
          className={inputClass}
          placeholder="jane@yourcompany.ca"
          {...register('email')}
        />
        {errors.email && <p className={errorClass}>{errors.email.message}</p>}
      </div>

      {/* Company */}
      <div>
        <label htmlFor="company" className={labelClass}>Company Name</label>
        <input
          id="company"
          type="text"
          className={inputClass}
          placeholder="Acme Technologies Inc."
          {...register('company')}
        />
      </div>

      {/* Province */}
      <div>
        <label htmlFor="province" className={labelClass}>
          Province / Territory <span className="text-red-500">*</span>
        </label>
        <select
          id="province"
          className={`${inputClass} cursor-pointer`}
          {...register('province')}
          defaultValue=""
        >
          <option value="" disabled>Select a province or territory</option>
          {PROVINCES.map((p) => (
            <option key={p} value={p}>{p}</option>
          ))}
        </select>
        {errors.province && <p className={errorClass}>{errors.province.message}</p>}
      </div>

      {/* Services checkboxes */}
      <fieldset>
        <legend className={`${labelClass} mb-2`}>I&apos;m interested in:</legend>
        <div className="grid grid-cols-2 gap-2">
          {SERVICES.map((service) => (
            <label
              key={service.id}
              className="flex items-center gap-2 cursor-pointer group"
            >
              <input
                type="checkbox"
                className="w-4 h-4 rounded border-[#e2e8f0] text-[#0f2744] focus:ring-[#2563eb] cursor-pointer"
                checked={selectedServices.includes(service.id)}
                onChange={() => toggleService(service.id)}
              />
              <span className="text-[#475569] text-sm group-hover:text-[#0f2744] transition-colors">
                {service.label}
              </span>
            </label>
          ))}
        </div>
      </fieldset>

      {/* Message */}
      <div>
        <label htmlFor="message" className={labelClass}>
          Message <span className="text-red-500">*</span>
        </label>
        <textarea
          id="message"
          rows={5}
          className={`${inputClass} resize-y min-h-[120px]`}
          placeholder="Tell us a bit about your company and what you're working on..."
          {...register('message')}
        />
        {errors.message && <p className={errorClass}>{errors.message.message}</p>}
      </div>

      {error && (
        <p className="text-red-500 text-sm bg-red-50 border border-red-200 rounded-md px-4 py-3">
          {error}
        </p>
      )}

      <button
        type="submit"
        disabled={isSubmitting}
        className="w-full flex items-center justify-center gap-2 px-6 py-3.5 bg-[#0f2744] text-white font-semibold rounded-md hover:bg-[#1b3d6b] disabled:opacity-60 disabled:cursor-not-allowed transition-colors text-sm"
      >
        {isSubmitting ? (
          <>
            <Loader2 size={16} className="animate-spin" />
            Sending...
          </>
        ) : (
          'Send Message'
        )}
      </button>
    </form>
  )
}
