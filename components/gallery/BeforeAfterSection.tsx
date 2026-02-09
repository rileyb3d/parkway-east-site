'use client'

import { useState } from 'react'
import Image from 'next/image'
import { motion, AnimatePresence } from 'framer-motion'
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
    <div className="mb-32 last:mb-0">
      {/* Section Header - Large & Editorial */}
      <FadeIn className="mb-12 md:mb-16">
        <h3 className="font-serif text-4xl md:text-5xl lg:text-6xl text-charcoal mb-6">{title}</h3>
        {description && (
          <p className="font-sans text-xl md:text-2xl text-stone leading-relaxed max-w-4xl">
            {description}
          </p>
        )}
      </FadeIn>

      {/* Large Before/After Display */}
      <FadeIn delay={0.2}>
        <div className="mb-16">
          {/* Toggle - Minimal & Elegant */}
          <div className="flex justify-center gap-1 mb-8">
            <button
              onClick={() => setShowAfter(false)}
              className={`px-8 py-4 font-sans text-sm tracking-[0.2em] uppercase transition-all duration-500 ${
                !showAfter
                  ? 'bg-charcoal text-cream'
                  : 'bg-transparent text-stone hover:text-charcoal'
              }`}
            >
              Before
            </button>
            <button
              onClick={() => setShowAfter(true)}
              className={`px-8 py-4 font-sans text-sm tracking-[0.2em] uppercase transition-all duration-500 ${
                showAfter
                  ? 'bg-charcoal text-cream'
                  : 'bg-transparent text-stone hover:text-charcoal'
              }`}
            >
              After
            </button>
          </div>

          {/* Large Image Comparison */}
          <div className="relative aspect-[4/3] md:aspect-[16/10] overflow-hidden bg-warm-50">
            <AnimatePresence mode="wait">
              {!showAfter ? (
                <motion.div
                  key="before"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.6, ease: [0.19, 1, 0.22, 1] }}
                  className="absolute inset-0"
                >
                  <Image
                    src={before}
                    alt={`${title} - Before`}
                    fill
                    className="object-cover"
                    sizes="100vw"
                    priority
                  />
                </motion.div>
              ) : (
                <motion.div
                  key="after"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.6, ease: [0.19, 1, 0.22, 1] }}
                  className="absolute inset-0"
                >
                  <Image
                    src={after}
                    alt={`${title} - After`}
                    fill
                    className="object-cover"
                    sizes="100vw"
                    priority
                  />
                </motion.div>
              )}
            </AnimatePresence>

            {/* Minimal Label */}
            <div className="absolute bottom-6 left-6 md:bottom-8 md:left-8">
              <span className="bg-white/90 backdrop-blur-sm px-4 py-2 font-sans text-xs tracking-[0.15em] uppercase text-charcoal">
                {showAfter ? 'After' : 'Before'}
              </span>
            </div>
          </div>
        </div>
      </FadeIn>

      {/* Side by Side Comparison - Large */}
      <FadeIn delay={0.3}>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6 mb-16">
          <div className="relative aspect-[3/4] overflow-hidden group">
            <Image
              src={before}
              alt={`${title} - Before`}
              fill
              className="object-cover transition-transform duration-700 ease-out-expo group-hover:scale-[1.02]"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
            <div className="absolute bottom-4 left-4 md:bottom-6 md:left-6">
              <span className="bg-white/90 backdrop-blur-sm px-4 py-2 font-sans text-xs tracking-[0.15em] uppercase text-charcoal">
                Before
              </span>
            </div>
          </div>
          <div className="relative aspect-[3/4] overflow-hidden group">
            <Image
              src={after}
              alt={`${title} - After`}
              fill
              className="object-cover transition-transform duration-700 ease-out-expo group-hover:scale-[1.02]"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
            <div className="absolute bottom-4 left-4 md:bottom-6 md:left-6">
              <span className="bg-white/90 backdrop-blur-sm px-4 py-2 font-sans text-xs tracking-[0.15em] uppercase text-charcoal">
                After
              </span>
            </div>
          </div>
        </div>
      </FadeIn>

      {/* Design Elements - Elegant List */}
      {designElements && designElements.length > 0 && (
        <FadeIn delay={0.4}>
          <div className="max-w-3xl">
            <p className="font-sans text-xs tracking-[0.2em] uppercase text-stone mb-8">Key Design Elements</p>
            <ul className="space-y-8">
              {designElements.map((element, index) => {
                const dashIndex = element.indexOf(' - ')
                const hasTitle = dashIndex > 0
                const elementTitle = hasTitle ? element.substring(0, dashIndex) : null
                const elementDesc = hasTitle ? element.substring(dashIndex + 3) : element

                return (
                  <li key={index} className="pl-8 border-l border-warm-300">
                    {elementTitle && (
                      <p className="font-serif text-xl md:text-2xl text-charcoal mb-2">{elementTitle}</p>
                    )}
                    <p className="font-sans text-stone text-lg leading-relaxed">{elementDesc}</p>
                  </li>
                )
              })}
            </ul>
          </div>
        </FadeIn>
      )}
    </div>
  )
}
