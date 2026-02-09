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

  // Editorial layout for smaller image sets
  const renderEditorialLayout = () => {
    const count = images.length

    // 1-2 images: Large display
    if (count <= 2) {
      return (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
          {images.map((image, index) => (
            <GalleryImage
              key={index}
              image={image}
              index={index}
              onClick={() => openLightbox(index)}
              isInView={isInView}
              className="aspect-[4/3]"
            />
          ))}
        </div>
      )
    }

    // 3 images: 1 large + 2 medium
    if (count === 3) {
      return (
        <div className="space-y-6 md:space-y-8">
          <GalleryImage
            image={images[0]}
            index={0}
            onClick={() => openLightbox(0)}
            isInView={isInView}
            className="aspect-[16/9]"
          />
          <div className="grid grid-cols-2 gap-6 md:gap-8">
            {images.slice(1).map((image, i) => (
              <GalleryImage
                key={i + 1}
                image={image}
                index={i + 1}
                onClick={() => openLightbox(i + 1)}
                isInView={isInView}
                className="aspect-[4/3]"
              />
            ))}
          </div>
        </div>
      )
    }

    // 4-6 images: Mixed layout
    if (count <= 6) {
      return (
        <div className="space-y-6 md:space-y-8">
          <div className="grid grid-cols-2 gap-6 md:gap-8">
            <GalleryImage
              image={images[0]}
              index={0}
              onClick={() => openLightbox(0)}
              isInView={isInView}
              className="aspect-[3/4]"
            />
            <GalleryImage
              image={images[1]}
              index={1}
              onClick={() => openLightbox(1)}
              isInView={isInView}
              className="aspect-[3/4]"
            />
          </div>
          {images.length > 2 && (
            <GalleryImage
              image={images[2]}
              index={2}
              onClick={() => openLightbox(2)}
              isInView={isInView}
              className="aspect-[21/9]"
            />
          )}
          {images.length > 3 && (
            <div className="grid grid-cols-3 gap-6 md:gap-8">
              {images.slice(3, 6).map((image, i) => (
                <GalleryImage
                  key={i + 3}
                  image={image}
                  index={i + 3}
                  onClick={() => openLightbox(i + 3)}
                  isInView={isInView}
                  className="aspect-square"
                />
              ))}
            </div>
          )}
        </div>
      )
    }

    // 7+ images: Full editorial flow
    return (
      <div className="space-y-6 md:space-y-8">
        {/* First row: Hero image */}
        <GalleryImage
          image={images[0]}
          index={0}
          onClick={() => openLightbox(0)}
          isInView={isInView}
          className="aspect-[16/9]"
        />

        {/* Second row: Two portraits */}
        <div className="grid grid-cols-2 gap-6 md:gap-8">
          <GalleryImage
            image={images[1]}
            index={1}
            onClick={() => openLightbox(1)}
            isInView={isInView}
            className="aspect-[3/4]"
          />
          {images[2] && (
            <GalleryImage
              image={images[2]}
              index={2}
              onClick={() => openLightbox(2)}
              isInView={isInView}
              className="aspect-[3/4]"
            />
          )}
        </div>

        {/* Third row: Wide panoramic */}
        {images[3] && (
          <GalleryImage
            image={images[3]}
            index={3}
            onClick={() => openLightbox(3)}
            isInView={isInView}
            className="aspect-[21/9]"
          />
        )}

        {/* Fourth row: Three squares */}
        {images.length > 4 && (
          <div className="grid grid-cols-3 gap-6 md:gap-8">
            {images.slice(4, 7).map((image, i) => (
              <GalleryImage
                key={i + 4}
                image={image}
                index={i + 4}
                onClick={() => openLightbox(i + 4)}
                isInView={isInView}
                className="aspect-square"
              />
            ))}
          </div>
        )}

        {/* Remaining images: alternating layouts */}
        {images.length > 7 && (
          <div className="grid grid-cols-2 gap-6 md:gap-8">
            {images.slice(7).map((image, i) => (
              <GalleryImage
                key={i + 7}
                image={image}
                index={i + 7}
                onClick={() => openLightbox(i + 7)}
                isInView={isInView}
                className="aspect-[4/3]"
              />
            ))}
          </div>
        )}
      </div>
    )
  }

  return (
    <div ref={ref} className={className}>
      {renderEditorialLayout()}

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

// Gallery Image Component
interface GalleryImageProps {
  image: string
  index: number
  onClick: () => void
  isInView: boolean
  className?: string
}

function GalleryImage({ image, index, onClick, isInView, className = '' }: GalleryImageProps) {
  return (
    <motion.button
      initial={{ opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
      transition={{
        duration: 0.8,
        delay: Math.min(index * 0.1, 0.4),
        ease: [0.19, 1, 0.22, 1],
      }}
      className={`relative overflow-hidden group cursor-pointer w-full ${className}`}
      onClick={onClick}
      aria-label={`View image ${index + 1}`}
    >
      <Image
        src={image}
        alt={`Project image ${index + 1}`}
        fill
        className="object-cover transition-all duration-1000 ease-out-expo group-hover:scale-[1.03]"
        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 80vw, 1400px"
      />
      <div className="absolute inset-0 bg-charcoal/0 group-hover:bg-charcoal/10 transition-colors duration-500" />
    </motion.button>
  )
}
