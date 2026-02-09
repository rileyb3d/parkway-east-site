'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'

interface FullscreenMenuProps {
  onClose: () => void
}

const menuItems = [
  { label: 'Projects', href: '/projects' },
  { label: 'Services', href: '/services' },
  { label: 'About', href: '/about' },
  { label: 'Blog', href: '/blog' },
  { label: 'Shop', href: '/shop' },
  { label: 'Inquire', href: '/inquire' },
]

const serviceItems = [
  { label: 'Residential', href: '/services/residential' },
  { label: 'Commercial', href: '/services/commercial' },
]

export default function FullscreenMenu({ onClose }: FullscreenMenuProps) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5, ease: [0.19, 1, 0.22, 1] }}
      className="fixed inset-0 z-40 bg-cream overflow-y-auto"
    >
      <div className="min-h-full flex flex-col justify-center px-6 md:px-12 lg:px-20 py-28">
        <nav className="flex flex-col lg:flex-row lg:justify-between lg:items-start gap-8 lg:gap-20">
          {/* Main Navigation */}
          <div className="flex flex-col gap-2">
            {menuItems.map((item, index) => (
              <motion.div
                key={item.href}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -10 }}
                transition={{
                  duration: 0.6,
                  delay: index * 0.08,
                  ease: [0.19, 1, 0.22, 1],
                }}
              >
                <Link
                  href={item.href}
                  onClick={onClose}
                  className="font-serif text-3xl md:text-4xl lg:text-5xl text-charcoal hover:text-stone transition-colors duration-300 block py-1"
                >
                  {item.label}
                </Link>
              </motion.div>
            ))}
          </div>

          {/* Secondary Navigation */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="lg:text-right"
          >
            <p className="caption-text mb-4">Services</p>
            <div className="flex flex-col gap-2">
              {serviceItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={onClose}
                  className="font-sans text-lg text-stone hover:text-charcoal transition-colors duration-300"
                >
                  {item.label}
                </Link>
              ))}
            </div>

            <div className="mt-12">
              <p className="caption-text mb-4">Contact</p>
              <p className="font-sans text-stone">St. George, Utah</p>
              <p className="font-sans text-stone">Southern Utah & Beyond</p>
            </div>

            <div className="mt-12">
              <p className="caption-text mb-4">Follow</p>
              <div className="flex lg:justify-end gap-6">
                <a
                  href="https://instagram.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-sans text-stone hover:text-charcoal transition-colors duration-300"
                >
                  Instagram
                </a>
                <a
                  href="https://pinterest.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-sans text-stone hover:text-charcoal transition-colors duration-300"
                >
                  Pinterest
                </a>
              </div>
            </div>
          </motion.div>
        </nav>
      </div>
    </motion.div>
  )
}
