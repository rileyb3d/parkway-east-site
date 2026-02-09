'use client'

import { useRef } from 'react'
import Image from 'next/image'
import { motion, useInView } from 'framer-motion'

interface ProjectGalleryProps {
  images: string[]
  className?: string
}

export default function ProjectGallery({ images, className = '' }: ProjectGalleryProps) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-50px' })

  // Create an asymmetric layout pattern
  const getLayoutClass = (index: number): string => {
    const pattern = index % 6
    switch (pattern) {
      case 0:
        return 'col-span-2 row-span-2 aspect-square' // Large
      case 1:
        return 'col-span-1 row-span-1 aspect-portrait' // Portrait
      case 2:
        return 'col-span-1 row-span-1 aspect-square' // Square
      case 3:
        return 'col-span-1 row-span-2 aspect-portrait' // Tall portrait
      case 4:
        return 'col-span-1 row-span-1 aspect-landscape' // Landscape
      case 5:
        return 'col-span-1 row-span-1 aspect-square' // Square
      default:
        return 'col-span-1 row-span-1 aspect-square'
    }
  }

  return (
    <div
      ref={ref}
      className={`grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 md:gap-4 auto-rows-[200px] md:auto-rows-[250px] ${className}`}
    >
      {images.map((image, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
          transition={{
            duration: 0.6,
            delay: Math.min(index * 0.05, 0.5),
            ease: [0.19, 1, 0.22, 1],
          }}
          className={`relative overflow-hidden group ${getLayoutClass(index)}`}
        >
          <Image
            src={image}
            alt={`Project image ${index + 1}`}
            fill
            className="object-cover transition-transform duration-700 ease-out-expo group-hover:scale-105"
            sizes="(max-width: 768px) 50vw, (max-width: 1200px) 33vw, 25vw"
          />
        </motion.div>
      ))}
    </div>
  )
}
