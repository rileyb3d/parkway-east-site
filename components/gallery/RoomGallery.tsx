'use client'

import { useState, useRef } from 'react'
import Image from 'next/image'
import { motion, useInView } from 'framer-motion'
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
  const isInView = useInView(ref, { once: true, margin: '-50px' })

  const openLightbox = (imageIndex: number) => {
    const globalIndex = allImages.findIndex(img => img === images[imageIndex])
    setCurrentIndex(globalIndex >= 0 ? globalIndex : 0)
    setLightboxOpen(true)
  }

  const closeLightbox = () => setLightboxOpen(false)
  const goToNext = () => setCurrentIndex((prev) => (prev + 1) % allImages.length)
  const goToPrev = () => setCurrentIndex((prev) => (prev - 1 + allImages.length) % allImages.length)

  return (
    <section ref={ref} className="mb-20 md:mb-28 last:mb-0">
      {/* Room Title */}
      <FadeIn className="mb-8 md:mb-10">
        <h3 className="font-serif text-2xl md:text-3xl lg:text-4xl text-charcoal">{name}</h3>
      </FadeIn>
      
      {/* Natural Flow Gallery - Images at their own aspect ratios */}
      <div className="space-y-4 md:space-y-6">
        {images.map((image, index) => (
          <NaturalImage
            key={index}
            image={image}
            index={index}
            onClick={() => openLightbox(index)}
            name={name}
            isInView={isInView}
          />
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
    </section>
  )
}

// Natural Image Component - displays at native aspect ratio
interface NaturalImageProps {
  image: string
  index: number
  onClick: () => void
  name: string
  isInView: boolean
}

function NaturalImage({ image, index, onClick, name, isInView }: NaturalImageProps) {
  const [dimensions, setDimensions] = useState<{ width: number; height: number } | null>(null)
  
  // Determine if image should be displayed smaller (for very tall/portrait images)
  const isPortrait = dimensions ? dimensions.height > dimensions.width * 1.2 : false
  
  return (
    <motion.button
      initial={{ opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{
        duration: 0.7,
        delay: Math.min(index * 0.08, 0.4),
        ease: [0.19, 1, 0.22, 1],
      }}
      className={`relative overflow-hidden group cursor-pointer block ${
        isPortrait ? 'max-w-2xl mx-auto' : 'w-full'
      }`}
      onClick={onClick}
      aria-label={`View ${name} image ${index + 1}`}
    >
      <Image
        src={image}
        alt={`${name} - Image ${index + 1}`}
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
