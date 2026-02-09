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

  return (
    <>
      <div
        ref={ref}
        className={`grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 md:gap-4 ${className}`}
      >
        {images.map((image, index) => (
          <motion.button
            key={index}
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{
              duration: 0.6,
              delay: Math.min(index * 0.05, 0.4),
              ease: [0.19, 1, 0.22, 1],
            }}
            className="relative overflow-hidden group cursor-pointer aspect-[4/3]"
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
