'use client'

import { useState } from 'react'
import Image from 'next/image'
import { motion } from 'framer-motion'
import FadeIn from '@/components/animations/FadeIn'

interface BeforeAfterSectionProps {
  title: string
  before: string
  after: string
  description?: string
  designElements?: string[]
}

export default function BeforeAfterSection({ 
  title, 
  before, 
  after, 
  description,
  designElements 
}: BeforeAfterSectionProps) {
  const [showAfter, setShowAfter] = useState(true)

  return (
    <FadeIn className="mb-24 last:mb-0">
      {/* Section Header */}
      <div className="mb-8">
        <h3 className="font-serif text-3xl md:text-4xl text-charcoal mb-4">{title}</h3>
        {description && (
          <p className="font-sans text-lg text-stone leading-relaxed max-w-3xl">
            {description}
          </p>
        )}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
        {/* Images */}
        <div>
          {/* Toggle Buttons */}
          <div className="flex gap-4 mb-6">
            <button
              onClick={() => setShowAfter(false)}
              className={`px-6 py-3 font-sans text-sm tracking-wide uppercase transition-all duration-300 ${
                !showAfter
                  ? 'bg-charcoal text-cream'
                  : 'bg-warm-100 text-stone hover:bg-warm-200'
              }`}
            >
              Before
            </button>
            <button
              onClick={() => setShowAfter(true)}
              className={`px-6 py-3 font-sans text-sm tracking-wide uppercase transition-all duration-300 ${
                showAfter
                  ? 'bg-charcoal text-cream'
                  : 'bg-warm-100 text-stone hover:bg-warm-200'
              }`}
            >
              After
            </button>
          </div>

          {/* Image Comparison - Overlay */}
          <div className="relative aspect-[3/4] overflow-hidden bg-warm-100 mb-6">
            {/* Before Image */}
            <motion.div
              animate={{ opacity: showAfter ? 0 : 1 }}
              transition={{ duration: 0.5, ease: 'easeInOut' }}
              className="absolute inset-0"
            >
              <Image
                src={before}
                alt={`${title} - Before`}
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
              <div className="absolute bottom-4 left-4 bg-charcoal/80 px-4 py-2">
                <span className="font-sans text-sm text-cream uppercase tracking-wide">Before</span>
              </div>
            </motion.div>

            {/* After Image */}
            <motion.div
              animate={{ opacity: showAfter ? 1 : 0 }}
              transition={{ duration: 0.5, ease: 'easeInOut' }}
              className="absolute inset-0"
            >
              <Image
                src={after}
                alt={`${title} - After`}
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
              <div className="absolute bottom-4 left-4 bg-charcoal/80 px-4 py-2">
                <span className="font-sans text-sm text-cream uppercase tracking-wide">After</span>
              </div>
            </motion.div>
          </div>

          {/* Side by Side on Desktop */}
          <div className="hidden lg:grid grid-cols-2 gap-4">
            <div className="relative aspect-[3/4] overflow-hidden">
              <Image
                src={before}
                alt={`${title} - Before`}
                fill
                className="object-cover"
                sizes="25vw"
              />
              <div className="absolute bottom-2 left-2 bg-charcoal/80 px-3 py-1">
                <span className="font-sans text-xs text-cream uppercase tracking-wide">Before</span>
              </div>
            </div>
            <div className="relative aspect-[3/4] overflow-hidden">
              <Image
                src={after}
                alt={`${title} - After`}
                fill
                className="object-cover"
                sizes="25vw"
              />
              <div className="absolute bottom-2 left-2 bg-charcoal/80 px-3 py-1">
                <span className="font-sans text-xs text-cream uppercase tracking-wide">After</span>
              </div>
            </div>
          </div>
        </div>

        {/* Design Elements */}
        {designElements && designElements.length > 0 && (
          <div className="lg:pt-16">
            <p className="caption-text text-stone mb-6">Key Design Elements</p>
            <ul className="space-y-6">
              {designElements.map((element, index) => {
                // Split the element at the first " - " to separate title from description
                const dashIndex = element.indexOf(' - ')
                const hasTitle = dashIndex > 0
                const elementTitle = hasTitle ? element.substring(0, dashIndex) : null
                const elementDesc = hasTitle ? element.substring(dashIndex + 3) : element

                return (
                  <li key={index} className="border-l-2 border-warm-200 pl-6">
                    {elementTitle && (
                      <p className="font-serif text-lg text-charcoal mb-1">{elementTitle}</p>
                    )}
                    <p className="font-sans text-stone leading-relaxed">{elementDesc}</p>
                  </li>
                )
              })}
            </ul>
          </div>
        )}
      </div>
    </FadeIn>
  )
}
