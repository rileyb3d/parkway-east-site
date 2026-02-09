'use client'

import { useState } from 'react'
import Image from 'next/image'
import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import FadeIn from '@/components/animations/FadeIn'
import Lightbox from './Lightbox'

interface RoomGalleryProps {
  name: string
  images: string[]
  allImages: string[] // All project images for lightbox navigation
}

export default function RoomGallery({ name, images, allImages }: RoomGalleryProps) {
  const [lightboxOpen, setLightboxOpen] = useState(false)
  const [currentIndex, setCurrentIndex] = useState(0)
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  const openLightbox = (imageIndex: number) => {
    // Find this image's index in the allImages array
    const globalIndex = allImages.findIndex(img => img === images[imageIndex])
    setCurrentIndex(globalIndex >= 0 ? globalIndex : 0)
    setLightboxOpen(true)
  }

  const closeLightbox = () => setLightboxOpen(false)

  const goToNext = () => {
    setCurrentIndex((prev) => (prev + 1) % allImages.length)
  }

  const goToPrev = () => {
    setCurrentIndex((prev) => (prev - 1 + allImages.length) % allImages.length)
  }

  // Determine grid layout based on number of images
  const getGridClass = () => {
    if (images.length === 1) return 'grid-cols-1'
    if (images.length === 2) return 'grid-cols-2'
    if (images.length === 3) return 'grid-cols-2 md:grid-cols-3'
    if (images.length === 4) return 'grid-cols-2'
    return 'grid-cols-2 md:grid-cols-3'
  }

  // Get aspect ratio class based on image position and count
  const getAspectClass = (index: number) => {
    if (images.length === 1) return 'aspect-[16/10]'
    if (images.length === 2) return 'aspect-[4/3]'
    if (images.length === 3) {
      // First image spans full width or is larger
      if (index === 0) return 'col-span-2 md:col-span-1 aspect-[4/3]'
      return 'aspect-[4/3]'
    }
    return 'aspect-[4/3]'
  }

  return (
    <FadeIn className="mb-16 last:mb-0">
      {/* Room Title */}
      <h3 className="font-serif text-2xl md:text-3xl text-charcoal mb-6">{name}</h3>
      
      {/* Image Grid */}
      <div ref={ref} className={`grid ${getGridClass()} gap-4`}>
        {images.map((image, index) => (
          <motion.button
            key={index}
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{
              duration: 0.6,
              delay: index * 0.1,
              ease: [0.19, 1, 0.22, 1],
            }}
            className={`relative overflow-hidden group cursor-pointer ${getAspectClass(index)}`}
            onClick={() => openLightbox(index)}
            aria-label={`View ${name} image ${index + 1}`}
          >
            <Image
              src={image}
              alt={`${name} - Image ${index + 1}`}
              fill
              className="object-cover transition-transform duration-700 ease-out-expo group-hover:scale-105"
              sizes="(max-width: 768px) 50vw, (max-width: 1200px) 33vw, 25vw"
            />
          </motion.button>
        ))}
      </div>

      {/* Lightbox */}
      <Lightbox
        images={allImages}
        currentIndex={currentIndex}
        isOpen={lightboxOpen}
        onClose={closeLightbox}
        onNext={goToNext}
        onPrev={goToPrev}
      />
    </FadeIn>
  )
}
