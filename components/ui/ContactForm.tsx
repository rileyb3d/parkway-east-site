'use client'

import { useState } from 'react'

interface FormData {
  name: string
  email: string
  phone: string
  projectType: string
  location: string
  timeline: string
  budget: string
  referral: string
  message: string
}

export default function ContactForm() {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    phone: '',
    projectType: '',
    location: '',
    timeline: '',
    budget: '',
    referral: '',
    message: '',
  })
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle')

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setStatus('submitting')

    try {
      // Using Formspree - replace YOUR_FORM_ID with actual form ID
      const response = await fetch('https://formspree.io/f/YOUR_FORM_ID', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      })

      if (response.ok) {
        setStatus('success')
        setFormData({
          name: '',
          email: '',
          phone: '',
          projectType: '',
          location: '',
          timeline: '',
          budget: '',
          referral: '',
          message: '',
        })
      } else {
        setStatus('error')
      }
    } catch {
      setStatus('error')
    }
  }

  const inputClasses = "w-full px-0 py-4 bg-transparent border-0 border-b border-warm-300 text-charcoal font-sans focus:outline-none focus:border-charcoal transition-colors duration-300 placeholder:text-stone"
  const selectClasses = "w-full px-0 py-4 bg-transparent border-0 border-b border-warm-300 text-charcoal font-sans focus:outline-none focus:border-charcoal transition-colors duration-300 appearance-none cursor-pointer"

  if (status === 'success') {
    return (
      <div className="text-center py-16">
        <svg className="w-16 h-16 mx-auto mb-6 text-charcoal" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M5 13l4 4L19 7" />
        </svg>
        <h3 className="font-serif text-2xl text-charcoal mb-4">Thank You!</h3>
        <p className="body-text">
          We&apos;ve received your inquiry and will be in touch soon.
        </p>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-8">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Name */}
        <div>
          <label htmlFor="name" className="caption-text text-stone block mb-2">Name *</label>
          <input
            type="text"
            id="name"
            name="name"
            required
            value={formData.name}
            onChange={handleChange}
            className={inputClasses}
            placeholder="Your full name"
          />
        </div>

        {/* Email */}
        <div>
          <label htmlFor="email" className="caption-text text-stone block mb-2">Email *</label>
          <input
            type="email"
            id="email"
            name="email"
            required
            value={formData.email}
            onChange={handleChange}
            className={inputClasses}
            placeholder="your@email.com"
          />
        </div>

        {/* Phone */}
        <div>
          <label htmlFor="phone" className="caption-text text-stone block mb-2">Phone</label>
          <input
            type="tel"
            id="phone"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            className={inputClasses}
            placeholder="(555) 123-4567"
          />
        </div>

        {/* Project Type */}
        <div>
          <label htmlFor="projectType" className="caption-text text-stone block mb-2">Project Type *</label>
          <select
            id="projectType"
            name="projectType"
            required
            value={formData.projectType}
            onChange={handleChange}
            className={selectClasses}
          >
            <option value="">Select a project type</option>
            <option value="residential-new">Residential - New Build</option>
            <option value="residential-renovation">Residential - Renovation</option>
            <option value="residential-refresh">Residential - Refresh</option>
            <option value="commercial">Commercial</option>
            <option value="consultation">Consultation Only</option>
            <option value="other">Other</option>
          </select>
        </div>

        {/* Location */}
        <div>
          <label htmlFor="location" className="caption-text text-stone block mb-2">Project Location</label>
          <input
            type="text"
            id="location"
            name="location"
            value={formData.location}
            onChange={handleChange}
            className={inputClasses}
            placeholder="City, State"
          />
        </div>

        {/* Timeline */}
        <div>
          <label htmlFor="timeline" className="caption-text text-stone block mb-2">Timeline</label>
          <select
            id="timeline"
            name="timeline"
            value={formData.timeline}
            onChange={handleChange}
            className={selectClasses}
          >
            <option value="">When are you looking to start?</option>
            <option value="immediately">Immediately</option>
            <option value="1-3-months">1-3 months</option>
            <option value="3-6-months">3-6 months</option>
            <option value="6-12-months">6-12 months</option>
            <option value="planning">Just planning</option>
          </select>
        </div>

        {/* Budget */}
        <div>
          <label htmlFor="budget" className="caption-text text-stone block mb-2">Budget Range</label>
          <select
            id="budget"
            name="budget"
            value={formData.budget}
            onChange={handleChange}
            className={selectClasses}
          >
            <option value="">Select a budget range</option>
            <option value="under-50k">Under $50,000</option>
            <option value="50k-100k">$50,000 - $100,000</option>
            <option value="100k-250k">$100,000 - $250,000</option>
            <option value="250k-500k">$250,000 - $500,000</option>
            <option value="500k-plus">$500,000+</option>
            <option value="undecided">Not sure yet</option>
          </select>
        </div>

        {/* Referral */}
        <div>
          <label htmlFor="referral" className="caption-text text-stone block mb-2">How did you hear about us?</label>
          <select
            id="referral"
            name="referral"
            value={formData.referral}
            onChange={handleChange}
            className={selectClasses}
          >
            <option value="">Select an option</option>
            <option value="google">Google Search</option>
            <option value="instagram">Instagram</option>
            <option value="pinterest">Pinterest</option>
            <option value="referral">Friend/Family Referral</option>
            <option value="parade-of-homes">Parade of Homes</option>
            <option value="other">Other</option>
          </select>
        </div>
      </div>

      {/* Message */}
      <div>
        <label htmlFor="message" className="caption-text text-stone block mb-2">Tell us about your project *</label>
        <textarea
          id="message"
          name="message"
          required
          rows={5}
          value={formData.message}
          onChange={handleChange}
          className={`${inputClasses} resize-none`}
          placeholder="Share your vision, inspiration, and any details that would help us understand your project..."
        />
      </div>

      {/* Error Message */}
      {status === 'error' && (
        <p className="text-red-600 font-sans text-sm">
          Something went wrong. Please try again or email us directly.
        </p>
      )}

      {/* Submit */}
      <button
        type="submit"
        disabled={status === 'submitting'}
        className="inline-flex items-center justify-center px-8 py-4 bg-charcoal text-cream font-sans text-sm uppercase tracking-widest hover:bg-stone transition-colors duration-500 disabled:opacity-50 disabled:cursor-not-allowed"
      >
        {status === 'submitting' ? 'Sending...' : 'Send Inquiry'}
      </button>
    </form>
  )
}
