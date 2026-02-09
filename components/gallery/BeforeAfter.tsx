'use client'

import { useState } from 'react'
import Image from 'next/image'
import { motion } from 'framer-motion'
import FadeIn from '@/components/animations/FadeIn'

interface BeforeAfterProps {
  title: string
  before: string
  after: string
  description?: string
}

export default function BeforeAfter({ title, before, after, description }: BeforeAfterProps) {
  const [showAfter, setShowAfter] = useState(true)

  return (
    <FadeIn className="mb-20">
      <div className="mb-8">
        <h3 className="font-serif text-2xl md:text-3xl text-charcoal mb-3">{title}</h3>
        {description && (
          <p className="font-sans text-stone text-base md:text-lg leading-relaxed max-w-3xl">
            {description}
          </p>
        )}
      </div>

      {/* Toggle Buttons */}
      <div className="flex gap-4 mb-6">
        <button
          onClick={() => setShowAfter(false)}
          className={`font-sans text-sm uppercase tracking-widest px-4 py-2 transition-all duration-300 ${
            !showAfter 
              ? 'bg-charcoal text-cream' 
              : 'bg-transparent text-stone border border-stone hover:border-charcoal hover:text-charcoal'
          }`}
        >
          Before
        </button>
        <button
          onClick={() => setShowAfter(true)}
          className={`font-sans text-sm uppercase tracking-widest px-4 py-2 transition-all duration-300 ${
            showAfter 
              ? 'bg-charcoal text-cream' 
              : 'bg-transparent text-stone border border-stone hover:border-charcoal hover:text-charcoal'
          }`}
        >
          After
        </button>
      </div>

      {/* Image Comparison */}
      <div className="relative aspect-[4/3] md:aspect-[16/10] overflow-hidden bg-warm-100">
        <motion.div
          initial={false}
          animate={{ opacity: showAfter ? 0 : 1 }}
          transition={{ duration: 0.5 }}
          className="absolute inset-0"
        >
          <Image
            src={before}
            alt={`${title} - Before`}
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, 80vw"
          />
          <div className="absolute top-4 left-4 bg-charcoal/80 text-cream px-3 py-1 font-sans text-xs uppercase tracking-widest">
            Before
          </div>
        </motion.div>
        
        <motion.div
          initial={false}
          animate={{ opacity: showAfter ? 1 : 0 }}
          transition={{ duration: 0.5 }}
          className="absolute inset-0"
        >
          <Image
            src={after}
            alt={`${title} - After`}
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, 80vw"
          />
          <div className="absolute top-4 left-4 bg-charcoal/80 text-cream px-3 py-1 font-sans text-xs uppercase tracking-widest">
            After
          </div>
        </motion.div>
      </div>

      {/* Side by Side on Desktop */}
      <div className="hidden lg:grid grid-cols-2 gap-4 mt-4">
        <div className="relative aspect-[4/3] overflow-hidden">
          <Image
            src={before}
            alt={`${title} - Before`}
            fill
            className="object-cover"
            sizes="40vw"
          />
          <div className="absolute bottom-4 left-4 bg-charcoal/80 text-cream px-3 py-1 font-sans text-xs uppercase tracking-widest">
            Before
          </div>
        </div>
        <div className="relative aspect-[4/3] overflow-hidden">
          <Image
            src={after}
            alt={`${title} - After`}
            fill
            className="object-cover"
            sizes="40vw"
          />
          <div className="absolute bottom-4 left-4 bg-charcoal/80 text-cream px-3 py-1 font-sans text-xs uppercase tracking-widest">
            After
          </div>
        </div>
      </div>
    </FadeIn>
  )
}
