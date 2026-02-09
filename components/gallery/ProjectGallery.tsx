'use client'

import { useRef, useState, useCallback, useEffect } from 'react'
import Image from 'next/image'
import { motion, useInView } from 'framer-motion'
import Lightbox from './Lightbox'

interface ProjectGalleryProps {
  images: string[]
  className?: string
}

interface ImageData {
  src: string
  width: number
  height: number
  isPortrait: boolean
  isSquarish: boolean
}

export default function ProjectGallery({ images, className = '' }: ProjectGalleryProps) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-50px' })
  const [imageData, setImageData] = useState<ImageData[]>([])
  const [loaded, setLoaded] = useState(false)
  
  const [lightboxOpen, setLightboxOpen] = useState(false)
  const [currentIndex, setCurrentIndex] = useState(0)

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

  const getOriginalIndex = (img: ImageData): number => {
    return images.findIndex(src => src === img.src)
  }

  return (
    <div ref={ref} className={className}>
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
                  isInView={isInView}
                  isSideBySide={row.length > 1}
                />
              )
            })}
          </div>
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

// Gallery Image Component
interface GalleryImageProps {
  image: ImageData
  index: number
  onClick: () => void
  isInView: boolean
  isSideBySide: boolean
}

function GalleryImage({ image, index, onClick, isInView, isSideBySide }: GalleryImageProps) {
  const containerClass = isSideBySide
    ? 'flex-1 max-w-[50%]'
    : image.isPortrait
      ? 'max-w-2xl mx-auto w-full'
      : 'w-full'

  return (
    <motion.button
      initial={{ opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
      transition={{
        duration: 0.7,
        delay: Math.min(index * 0.06, 0.3),
        ease: [0.19, 1, 0.22, 1],
      }}
      className={`relative overflow-hidden group cursor-pointer block ${containerClass}`}
      onClick={onClick}
      aria-label={`View image ${index + 1}`}
    >
      <Image
        src={image.src}
        alt={`Project image ${index + 1}`}
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
