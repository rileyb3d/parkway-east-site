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
    <div ref={ref} className={className}>
      {/* Natural flow - each image at its own aspect ratio */}
      <div className="space-y-4 md:space-y-6">
        {images.map((image, index) => (
          <GalleryImage
            key={index}
            image={image}
            index={index}
            onClick={() => openLightbox(index)}
            isInView={isInView}
          />
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
    </div>
  )
}

// Gallery Image - natural aspect ratio
interface GalleryImageProps {
  image: string
  index: number
  onClick: () => void
  isInView: boolean
}

function GalleryImage({ image, index, onClick, isInView }: GalleryImageProps) {
  const [dimensions, setDimensions] = useState<{ width: number; height: number } | null>(null)
  
  // Display portrait images centered and smaller
  const isPortrait = dimensions ? dimensions.height > dimensions.width * 1.2 : false
  
  return (
    <motion.button
      initial={{ opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
      transition={{
        duration: 0.7,
        delay: Math.min(index * 0.08, 0.4),
        ease: [0.19, 1, 0.22, 1],
      }}
      className={`relative overflow-hidden group cursor-pointer block ${
        isPortrait ? 'max-w-2xl mx-auto' : 'w-full'
      }`}
      onClick={onClick}
      aria-label={`View image ${index + 1}`}
    >
      <Image
        src={image}
        alt={`Project image ${index + 1}`}
        width={1800}
        height={1200}
        className="w-full h-auto object-contain transition-transform duration-700 ease-out-expo group-hover:scale-[1.02]"
        sizes="(max-width: 768px) 100vw, (max-width: 1400px) 90vw, 1600px"
        onLoad={(e) => {
          const img = e.target as HTMLImageElement
          setDimensions({ width: img.naturalWidth, height: img.naturalHeight })
        }}
      />
    </motion.button>
  )
}
