'use client'

import { useRef, useState, useCallback } from 'react'
import Image from 'next/image'
import { motion, useInView } from 'framer-motion'
import Lightbox from './Lightbox'

interface ProjectGalleryProps {
  images: string[]
  className?: string
}

export default function ProjectGallery({ images, className = '' }: ProjectGalleryProps) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-50px' })
  
  const [lightboxOpen, setLightboxOpen] = useState(false)
  const [currentIndex, setCurrentIndex] = useState(0)

  const openLightbox = (index: number) => {
    setCurrentIndex(index)
    setLightboxOpen(true)
  }

  const closeLightbox = () => setLightboxOpen(false)
  
  const goToNext = useCallback(() => {
    setCurrentIndex((prev) => (prev + 1) % images.length)
  }, [images.length])
  
  const goToPrev = useCallback(() => {
    setCurrentIndex((prev) => (prev - 1 + images.length) % images.length)
  }, [images.length])

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
    <>
      <div
        ref={ref}
        className={`grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 md:gap-4 auto-rows-[200px] md:auto-rows-[250px] ${className}`}
      >
        {images.map((image, index) => (
          <motion.button
            key={index}
            initial={{ opacity: 0, y: 40 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
            transition={{
              duration: 0.6,
              delay: Math.min(index * 0.05, 0.5),
              ease: [0.19, 1, 0.22, 1],
            }}
            className={`relative overflow-hidden group cursor-pointer ${getLayoutClass(index)}`}
            onClick={() => openLightbox(index)}
            aria-label={`View image ${index + 1}`}
          >
            <Image
              src={image}
              alt={`Project image ${index + 1}`}
              fill
              className="object-cover transition-transform duration-700 ease-out-expo group-hover:scale-105"
              sizes="(max-width: 768px) 50vw, (max-width: 1200px) 33vw, 25vw"
            />
            {/* Hover overlay with expand icon */}
            <div className="absolute inset-0 bg-charcoal/0 group-hover:bg-charcoal/20 transition-colors duration-300 flex items-center justify-center">
              <svg 
                className="w-10 h-10 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                fill="none" 
                stroke="currentColor" 
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7" />
              </svg>
            </div>
          </motion.button>
        ))}
      </div>

      <Lightbox
        images={images}
        currentIndex={currentIndex}
        isOpen={lightboxOpen}
        onClose={closeLightbox}
        onNext={goToNext}
        onPrev={goToPrev}
      />
    </>
  )
}
