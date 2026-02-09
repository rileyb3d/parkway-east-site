'use client'

import { useRef } from 'react'
import { motion, useScroll, useTransform, useInView } from 'framer-motion'

interface KineticHeadingProps {
  children: React.ReactNode
  className?: string
  as?: 'h1' | 'h2' | 'h3' | 'h4'
  speed?: number
  direction?: 'left' | 'right'
}

export default function KineticHeading({
  children,
  className = '',
  as: Tag = 'h2',
  speed = 0.15,
  direction = 'left',
}: KineticHeadingProps) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start'],
  })

  const multiplier = direction === 'left' ? -1 : 1
  const x = useTransform(scrollYProgress, [0, 1], [0, speed * 200 * multiplier])

  const MotionTag = motion[Tag] as typeof motion.h2

  return (
    <div ref={ref} className="overflow-hidden">
      <MotionTag
        style={{ x }}
        initial={{ opacity: 0, y: 60 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 60 }}
        transition={{
          duration: 1,
          ease: [0.19, 1, 0.22, 1],
        }}
        className={`font-serif ${className}`}
      >
        {children}
      </MotionTag>
    </div>
  )
}
