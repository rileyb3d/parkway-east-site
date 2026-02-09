'use client'

import { useRef } from 'react'
import Image from 'next/image'
import { motion, useScroll, useTransform } from 'framer-motion'

interface ParallaxImageProps {
  src: string
  alt: string
  className?: string
  containerClassName?: string
  speed?: number // -1 to 1, negative moves up, positive moves down
  scale?: boolean
  priority?: boolean
}

export default function ParallaxImage({
  src,
  alt,
  className = '',
  containerClassName = '',
  speed = 0.2,
  scale = true,
  priority = false,
}: ParallaxImageProps) {
  const ref = useRef(null)
  
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start'],
  })

  const y = useTransform(scrollYProgress, [0, 1], [speed * -100, speed * 100])
  const imageScale = useTransform(scrollYProgress, [0, 0.5, 1], [1.1, 1, 1.1])

  return (
    <div ref={ref} className={`overflow-hidden ${containerClassName}`}>
      <motion.div
        style={{ y, scale: scale ? imageScale : 1 }}
        className={`relative w-full h-full ${className}`}
      >
        <Image
          src={src}
          alt={alt}
          fill
          className="object-cover"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          priority={priority}
        />
      </motion.div>
    </div>
  )
}
