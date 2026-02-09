'use client'

import { useRef } from 'react'
import Image from 'next/image'
import { motion, useScroll, useTransform } from 'framer-motion'

interface HorizontalScrollProps {
  images: string[]
  className?: string
}

export default function HorizontalScroll({ images, className = '' }: HorizontalScrollProps) {
  const containerRef = useRef<HTMLDivElement>(null)

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start end', 'end start'],
  })

  const x = useTransform(scrollYProgress, [0, 1], ['0%', '-25%'])

  return (
    <section ref={containerRef} className={`overflow-hidden ${className}`}>
      <motion.div
        style={{ x }}
        className="flex gap-4 md:gap-6 px-6 md:px-12"
      >
        {images.map((image, index) => (
          <div
            key={index}
            className="flex-shrink-0 w-[80vw] md:w-[60vw] lg:w-[45vw] aspect-landscape relative overflow-hidden"
          >
            <Image
              src={image}
              alt={`Gallery image ${index + 1}`}
              fill
              className="object-cover"
              sizes="(max-width: 768px) 80vw, (max-width: 1200px) 60vw, 45vw"
            />
          </div>
        ))}
      </motion.div>
    </section>
  )
}

// Sticky horizontal scroll variant for project pages
export function StickyHorizontalScroll({ images, className = '' }: HorizontalScrollProps) {
  const containerRef = useRef<HTMLDivElement>(null)

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end end'],
  })

  const x = useTransform(scrollYProgress, [0, 1], ['0%', `-${(images.length - 1) * 100 / images.length}%`])

  return (
    <section
      ref={containerRef}
      className={`relative ${className}`}
      style={{ height: `${images.length * 100}vh` }}
    >
      <div className="sticky top-0 h-screen overflow-hidden flex items-center">
        <motion.div
          style={{ x }}
          className="flex"
        >
          {images.map((image, index) => (
            <div
              key={index}
              className="flex-shrink-0 w-screen h-screen relative"
            >
              <Image
                src={image}
                alt={`Gallery image ${index + 1}`}
                fill
                className="object-cover"
                sizes="100vw"
                priority={index === 0}
              />
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
