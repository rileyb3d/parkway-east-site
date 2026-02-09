'use client'

import { useState, useRef, useEffect } from 'react'
import Image from 'next/image'
import { motion, useInView } from 'framer-motion'
import FadeIn from '@/components/animations/FadeIn'
import Lightbox from './Lightbox'

interface RoomGalleryProps {
  name: string
  images: string[]
  allImages: string[] // All project images for lightbox navigation
}

interface ImageData {
  src: string
  width: number
  height: number
  isPortrait: boolean
  isSquarish: boolean
}

export default function RoomGallery({ name, images, allImages }: RoomGalleryProps) {
  const [lightboxOpen, setLightboxOpen] = useState(false)
  const [currentIndex, setCurrentIndex] = useState(0)
  const [imageData, setImageData] = useState<ImageData[]>([])
  const [loaded, setLoaded] = useState(false)
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-50px' })

  // Preload images to get dimensions
  useEffect(() => {
    const loadImages = async () => {
      const data: ImageData[] = await Promise.all(
        images.map((src) => {
          return new Promise<ImageData>((resolve) => {
            const img = new window.Image()
            img.onload = () => {
              const ratio = img.naturalHeight / img.naturalWidth
              resolve({
                src,
                width: img.naturalWidth,
                height: img.naturalHeight,
                isPortrait: ratio > 1.2,
                isSquarish: ratio >= 0.8 && ratio <= 1.2,
              })
            }
            img.onerror = () => {
              resolve({
                src,
                width: 1600,
                height: 1200,
                isPortrait: false,
                isSquarish: false,
              })
            }
            img.src = src
          })
        })
      )
      setImageData(data)
      setLoaded(true)
    }
    loadImages()
  }, [images])

  const openLightbox = (imageIndex: number) => {
    const globalIndex = allImages.findIndex(img => img === images[imageIndex])
    setCurrentIndex(globalIndex >= 0 ? globalIndex : 0)
    setLightboxOpen(true)
  }

  const closeLightbox = () => setLightboxOpen(false)
  const goToNext = () => setCurrentIndex((prev) => (prev + 1) % allImages.length)
  const goToPrev = () => setCurrentIndex((prev) => (prev - 1 + allImages.length) % allImages.length)

  // Group images into rows intelligently
  const getImageRows = (): ImageData[][] => {
    if (!loaded || imageData.length === 0) return []
    
    const rows: ImageData[][] = []
    let i = 0
    
    while (i < imageData.length) {
      const current = imageData[i]
      const next = imageData[i + 1]
      
      // Two portraits or two squarish images can sit side by side
      if (next && (current.isPortrait || current.isSquarish) && (next.isPortrait || next.isSquarish)) {
        rows.push([current, next])
        i += 2
      }
      // Otherwise, single image row
      else {
        rows.push([current])
        i += 1
      }
    }
    
    return rows
  }

  const rows = getImageRows()

  // Get the original index of an image
  const getOriginalIndex = (img: ImageData): number => {
    return images.findIndex(src => src === img.src)
  }

  return (
    <section ref={ref} className="mb-20 md:mb-28 last:mb-0">
      {/* Room Title */}
      <FadeIn className="mb-8 md:mb-10">
        <h3 className="font-serif text-2xl md:text-3xl lg:text-4xl text-charcoal">{name}</h3>
      </FadeIn>
      
      {/* Smart Layout Gallery */}
      <div className="space-y-4 md:space-y-6">
        {rows.map((row, rowIndex) => (
          <div 
            key={rowIndex} 
            className={`flex gap-4 md:gap-6 ${row.length === 1 ? 'justify-center' : ''}`}
          >
            {row.map((img) => {
              const originalIndex = getOriginalIndex(img)
              return (
                <GalleryImage
                  key={img.src}
                  image={img}
                  index={originalIndex}
                  onClick={() => openLightbox(originalIndex)}
                  name={name}
                  isInView={isInView}
                  isSideBySide={row.length > 1}
                />
              )
            })}
          </div>
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

// Gallery Image Component
interface GalleryImageProps {
  image: ImageData
  index: number
  onClick: () => void
  name: string
  isInView: boolean
  isSideBySide: boolean
}

function GalleryImage({ image, index, onClick, name, isInView, isSideBySide }: GalleryImageProps) {
  // For side-by-side, constrain width; for single landscape, full width; for single portrait, centered
  const containerClass = isSideBySide
    ? 'flex-1 max-w-[50%]'
    : image.isPortrait
      ? 'max-w-2xl mx-auto w-full'
      : 'w-full'

  return (
    <motion.button
      initial={{ opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{
        duration: 0.7,
        delay: Math.min(index * 0.06, 0.3),
        ease: [0.19, 1, 0.22, 1],
      }}
      className={`relative overflow-hidden group cursor-pointer block ${containerClass}`}
      onClick={onClick}
      aria-label={`View ${name} image ${index + 1}`}
    >
      <Image
        src={image.src}
        alt={`${name} - Image ${index + 1}`}
        width={image.width}
        height={image.height}
        className="w-full h-auto transition-transform duration-700 ease-out-expo group-hover:scale-[1.02]"
        sizes={isSideBySide 
          ? "(max-width: 768px) 50vw, 45vw" 
          : "(max-width: 768px) 100vw, (max-width: 1400px) 90vw, 1400px"
        }
      />
    </motion.button>
  )
}
