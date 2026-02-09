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

  // Editorial layout patterns based on image count
  const renderEditorialLayout = () => {
    const count = images.length

    // Single image - full width, dramatic
    if (count === 1) {
      return (
        <EditorialImage
          image={images[0]}
          index={0}
          onClick={() => openLightbox(0)}
          name={name}
          isInView={isInView}
          className="aspect-[16/9] md:aspect-[21/9]"
          priority
        />
      )
    }

    // Two images - side by side, equal
    if (count === 2) {
      return (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
          {images.map((img, i) => (
            <EditorialImage
              key={i}
              image={img}
              index={i}
              onClick={() => openLightbox(i)}
              name={name}
              isInView={isInView}
              className="aspect-[4/3]"
            />
          ))}
        </div>
      )
    }

    // Three images - one large, two small
    if (count === 3) {
      return (
        <div className="space-y-4 md:space-y-6">
          <EditorialImage
            image={images[0]}
            index={0}
            onClick={() => openLightbox(0)}
            name={name}
            isInView={isInView}
            className="aspect-[16/9]"
            priority
          />
          <div className="grid grid-cols-2 gap-4 md:gap-6">
            {images.slice(1).map((img, i) => (
              <EditorialImage
                key={i + 1}
                image={img}
                index={i + 1}
                onClick={() => openLightbox(i + 1)}
                name={name}
                isInView={isInView}
                className="aspect-[4/3]"
              />
            ))}
          </div>
        </div>
      )
    }

    // Four images - 1 hero + 3 below
    if (count === 4) {
      return (
        <div className="space-y-4 md:space-y-6">
          <EditorialImage
            image={images[0]}
            index={0}
            onClick={() => openLightbox(0)}
            name={name}
            isInView={isInView}
            className="aspect-[16/9]"
            priority
          />
          <div className="grid grid-cols-3 gap-4 md:gap-6">
            {images.slice(1).map((img, i) => (
              <EditorialImage
                key={i + 1}
                image={img}
                index={i + 1}
                onClick={() => openLightbox(i + 1)}
                name={name}
                isInView={isInView}
                className="aspect-[3/4]"
              />
            ))}
          </div>
        </div>
      )
    }

    // Five images - large hero, 2+2 grid
    if (count === 5) {
      return (
        <div className="space-y-4 md:space-y-6">
          <EditorialImage
            image={images[0]}
            index={0}
            onClick={() => openLightbox(0)}
            name={name}
            isInView={isInView}
            className="aspect-[16/9]"
            priority
          />
          <div className="grid grid-cols-2 gap-4 md:gap-6">
            {images.slice(1).map((img, i) => (
              <EditorialImage
                key={i + 1}
                image={img}
                index={i + 1}
                onClick={() => openLightbox(i + 1)}
                name={name}
                isInView={isInView}
                className="aspect-[4/3]"
              />
            ))}
          </div>
        </div>
      )
    }

    // Six images - hero + asymmetric layout
    if (count === 6) {
      return (
        <div className="space-y-4 md:space-y-6">
          <EditorialImage
            image={images[0]}
            index={0}
            onClick={() => openLightbox(0)}
            name={name}
            isInView={isInView}
            className="aspect-[16/9]"
            priority
          />
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
            <EditorialImage
              image={images[1]}
              index={1}
              onClick={() => openLightbox(1)}
              name={name}
              isInView={isInView}
              className="aspect-[4/3] md:col-span-2"
            />
            <EditorialImage
              image={images[2]}
              index={2}
              onClick={() => openLightbox(2)}
              name={name}
              isInView={isInView}
              className="aspect-[4/3]"
            />
          </div>
          <div className="grid grid-cols-3 gap-4 md:gap-6">
            {images.slice(3).map((img, i) => (
              <EditorialImage
                key={i + 3}
                image={img}
                index={i + 3}
                onClick={() => openLightbox(i + 3)}
                name={name}
                isInView={isInView}
                className="aspect-square"
              />
            ))}
          </div>
        </div>
      )
    }

    // 7+ images - editorial flow with varied layouts
    return (
      <div className="space-y-4 md:space-y-6">
        {/* Hero image - full width */}
        <EditorialImage
          image={images[0]}
          index={0}
          onClick={() => openLightbox(0)}
          name={name}
          isInView={isInView}
          className="aspect-[16/9]"
          priority
        />

        {/* Images 2-3: Two column */}
        {images.length > 2 && (
          <div className="grid grid-cols-2 gap-4 md:gap-6">
            <EditorialImage
              image={images[1]}
              index={1}
              onClick={() => openLightbox(1)}
              name={name}
              isInView={isInView}
              className="aspect-[4/3]"
            />
            <EditorialImage
              image={images[2]}
              index={2}
              onClick={() => openLightbox(2)}
              name={name}
              isInView={isInView}
              className="aspect-[4/3]"
            />
          </div>
        )}

        {/* Image 4: Full width if exists */}
        {images.length > 3 && (
          <EditorialImage
            image={images[3]}
            index={3}
            onClick={() => openLightbox(3)}
            name={name}
            isInView={isInView}
            className="aspect-[21/9]"
          />
        )}

        {/* Images 5-7: Three column */}
        {images.length > 4 && (
          <div className="grid grid-cols-3 gap-4 md:gap-6">
            {images.slice(4, 7).map((img, i) => (
              <EditorialImage
                key={i + 4}
                image={img}
                index={i + 4}
                onClick={() => openLightbox(i + 4)}
                name={name}
                isInView={isInView}
                className="aspect-[3/4]"
              />
            ))}
          </div>
        )}

        {/* Images 8-9: Asymmetric duo */}
        {images.length > 7 && (
          <div className="grid grid-cols-3 gap-4 md:gap-6">
            <EditorialImage
              image={images[7]}
              index={7}
              onClick={() => openLightbox(7)}
              name={name}
              isInView={isInView}
              className="aspect-[3/4] col-span-2"
            />
            {images[8] && (
              <EditorialImage
                image={images[8]}
                index={8}
                onClick={() => openLightbox(8)}
                name={name}
                isInView={isInView}
                className="aspect-[3/4]"
              />
            )}
          </div>
        )}

        {/* Remaining images in pairs */}
        {images.length > 9 && (
          <div className="grid grid-cols-2 gap-4 md:gap-6">
            {images.slice(9).map((img, i) => (
              <EditorialImage
                key={i + 9}
                image={img}
                index={i + 9}
                onClick={() => openLightbox(i + 9)}
                name={name}
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
    <section ref={ref} className="mb-24 md:mb-32 last:mb-0">
      {/* Room Title - minimal, elegant */}
      <FadeIn className="mb-8 md:mb-12">
        <h3 className="font-serif text-3xl md:text-4xl lg:text-5xl text-charcoal">{name}</h3>
      </FadeIn>
      
      {/* Editorial Image Layout */}
      {renderEditorialLayout()}

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

// Editorial Image Component - large, immersive, elegant hover
interface EditorialImageProps {
  image: string
  index: number
  onClick: () => void
  name: string
  isInView: boolean
  className?: string
  priority?: boolean
}

function EditorialImage({ image, index, onClick, name, isInView, className = '', priority = false }: EditorialImageProps) {
  return (
    <motion.button
      initial={{ opacity: 0, y: 40 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{
        duration: 0.8,
        delay: Math.min(index * 0.1, 0.5),
        ease: [0.19, 1, 0.22, 1],
      }}
      className={`relative overflow-hidden group cursor-pointer w-full ${className}`}
      onClick={onClick}
      aria-label={`View ${name} image ${index + 1}`}
    >
      <Image
        src={image}
        alt={`${name} - Image ${index + 1}`}
        fill
        className="object-cover transition-all duration-1000 ease-out-expo group-hover:scale-[1.03]"
        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 80vw, 1400px"
        priority={priority}
      />
      {/* Subtle overlay on hover */}
      <div className="absolute inset-0 bg-charcoal/0 group-hover:bg-charcoal/10 transition-colors duration-500" />
    </motion.button>
  )
}
