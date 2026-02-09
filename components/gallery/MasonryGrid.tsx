'use client'

import { useRef } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { motion, useInView } from 'framer-motion'

interface MasonryItem {
  id: string
  title: string
  subtitle?: string
  image: string
  href: string
  size?: 'small' | 'medium' | 'large'
}

interface MasonryGridProps {
  items: MasonryItem[]
  className?: string
}

export default function MasonryGrid({ items, className = '' }: MasonryGridProps) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <div
      ref={ref}
      className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 ${className}`}
    >
      {items.map((item, index) => (
        <MasonryItem
          key={item.id}
          item={item}
          index={index}
          isInView={isInView}
        />
      ))}
    </div>
  )
}

interface MasonryItemProps {
  item: MasonryItem
  index: number
  isInView: boolean
}

function MasonryItem({ item, index, isInView }: MasonryItemProps) {
  const sizeClasses = {
    small: 'aspect-square',
    medium: 'aspect-portrait',
    large: 'aspect-portrait md:row-span-2',
  }

  const size = item.size || (index % 5 === 0 ? 'large' : index % 3 === 0 ? 'small' : 'medium')

  return (
    <motion.div
      initial={{ opacity: 0, y: 60 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 60 }}
      transition={{
        duration: 0.8,
        delay: index * 0.1,
        ease: [0.19, 1, 0.22, 1],
      }}
      className={sizeClasses[size]}
    >
      <Link href={item.href} className="group block relative w-full h-full overflow-hidden">
        {/* Image */}
        <div className="absolute inset-0">
          <Image
            src={item.image}
            alt={item.title}
            fill
            className="object-cover transition-transform duration-700 ease-out-expo group-hover:scale-105"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
        </div>

        {/* Overlay */}
        <div className="absolute inset-0 bg-charcoal/0 group-hover:bg-charcoal/40 transition-colors duration-500" />

        {/* Content - visible on hover */}
        <div className="absolute inset-0 flex flex-col justify-end p-6 md:p-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileHover={{ opacity: 1, y: 0 }}
            className="opacity-0 group-hover:opacity-100 transition-opacity duration-500"
          >
            {item.subtitle && (
              <p className="caption-text text-white/80 mb-2">{item.subtitle}</p>
            )}
            <h3 className="font-serif text-2xl md:text-3xl text-white">{item.title}</h3>
          </motion.div>
        </div>
      </Link>
    </motion.div>
  )
}
