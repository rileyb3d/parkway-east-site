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
    <div className="mb-24 md:mb-32 last:mb-0">
      {/* Section Header */}
      <FadeIn className="mb-10 md:mb-12">
        <h3 className="font-serif text-3xl md:text-4xl lg:text-5xl text-charcoal mb-5">{title}</h3>
        {description && (
          <p className="font-sans text-lg md:text-xl text-stone leading-relaxed max-w-3xl">
            {description}
          </p>
        )}
      </FadeIn>

      {/* Toggle & Interactive Comparison */}
      <FadeIn delay={0.1}>
        <div className="mb-12">
          {/* Toggle Buttons */}
          <div className="flex gap-2 mb-6">
            <button
              onClick={() => setShowAfter(false)}
              className={`px-6 py-3 font-sans text-sm tracking-[0.15em] uppercase transition-all duration-300 ${
                !showAfter
                  ? 'bg-charcoal text-cream'
                  : 'bg-warm-100 text-stone hover:bg-warm-200'
              }`}
            >
              Before
            </button>
            <button
              onClick={() => setShowAfter(true)}
              className={`px-6 py-3 font-sans text-sm tracking-[0.15em] uppercase transition-all duration-300 ${
                showAfter
                  ? 'bg-charcoal text-cream'
                  : 'bg-warm-100 text-stone hover:bg-warm-200'
              }`}
            >
              After
            </button>
          </div>

          {/* Large Image - Natural aspect ratio */}
          <div className="relative max-w-4xl">
            <AnimatePresence mode="wait">
              {!showAfter ? (
                <motion.div
                  key="before"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.5, ease: [0.19, 1, 0.22, 1] }}
                >
                  <Image
                    src={before}
                    alt={`${title} - Before`}
                    width={1600}
                    height={1200}
                    className="w-full h-auto"
                    sizes="(max-width: 768px) 100vw, 900px"
                    priority
                  />
                  <div className="absolute bottom-4 left-4">
                    <span className="bg-white/90 backdrop-blur-sm px-4 py-2 font-sans text-xs tracking-[0.15em] uppercase text-charcoal">
                      Before
                    </span>
                  </div>
                </motion.div>
              ) : (
                <motion.div
                  key="after"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.5, ease: [0.19, 1, 0.22, 1] }}
                >
                  <Image
                    src={after}
                    alt={`${title} - After`}
                    width={1600}
                    height={1200}
                    className="w-full h-auto"
                    sizes="(max-width: 768px) 100vw, 900px"
                    priority
                  />
                  <div className="absolute bottom-4 left-4">
                    <span className="bg-white/90 backdrop-blur-sm px-4 py-2 font-sans text-xs tracking-[0.15em] uppercase text-charcoal">
                      After
                    </span>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </FadeIn>

      {/* Side by Side - Natural aspect ratios */}
      <FadeIn delay={0.2}>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6 mb-12 max-w-5xl">
          <div className="relative group">
            <Image
              src={before}
              alt={`${title} - Before`}
              width={1200}
              height={1600}
              className="w-full h-auto transition-transform duration-700 ease-out-expo group-hover:scale-[1.01]"
              sizes="(max-width: 768px) 100vw, 600px"
            />
            <div className="absolute bottom-3 left-3">
              <span className="bg-white/90 backdrop-blur-sm px-3 py-1.5 font-sans text-xs tracking-[0.12em] uppercase text-charcoal">
                Before
              </span>
            </div>
          </div>
          <div className="relative group">
            <Image
              src={after}
              alt={`${title} - After`}
              width={1200}
              height={1600}
              className="w-full h-auto transition-transform duration-700 ease-out-expo group-hover:scale-[1.01]"
              sizes="(max-width: 768px) 100vw, 600px"
            />
            <div className="absolute bottom-3 left-3">
              <span className="bg-white/90 backdrop-blur-sm px-3 py-1.5 font-sans text-xs tracking-[0.12em] uppercase text-charcoal">
                After
              </span>
            </div>
          </div>
        </div>
      </FadeIn>

      {/* Design Elements */}
      {designElements && designElements.length > 0 && (
        <FadeIn delay={0.3}>
          <div className="max-w-2xl">
            <p className="font-sans text-xs tracking-[0.2em] uppercase text-stone mb-6">Key Design Elements</p>
            <ul className="space-y-6">
              {designElements.map((element, index) => {
                const dashIndex = element.indexOf(' - ')
                const hasTitle = dashIndex > 0
                const elementTitle = hasTitle ? element.substring(0, dashIndex) : null
                const elementDesc = hasTitle ? element.substring(dashIndex + 3) : element

                return (
                  <li key={index} className="pl-6 border-l border-warm-300">
                    {elementTitle && (
                      <p className="font-serif text-lg text-charcoal mb-1">{elementTitle}</p>
                    )}
                    <p className="font-sans text-stone leading-relaxed">{elementDesc}</p>
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
