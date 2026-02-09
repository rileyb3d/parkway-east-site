'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { motion, AnimatePresence } from 'framer-motion'
import FullscreenMenu from './FullscreenMenu'

export default function GhostHeader() {
  const [isVisible, setIsVisible] = useState(true)
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [lastScrollY, setLastScrollY] = useState(0)

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY

      // Show/hide based on scroll direction
      if (currentScrollY < lastScrollY || currentScrollY < 100) {
        setIsVisible(true)
      } else if (currentScrollY > lastScrollY && currentScrollY > 100) {
        setIsVisible(false)
      }

      // Add background when scrolled
      setIsScrolled(currentScrollY > 50)
      setLastScrollY(currentScrollY)
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [lastScrollY])

  // Prevent body scroll when menu is open
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }
    return () => {
      document.body.style.overflow = ''
    }
  }, [isMenuOpen])

  return (
    <>
      <motion.header
        initial={{ y: 0 }}
        animate={{ y: isVisible ? 0 : -100 }}
        transition={{ duration: 0.4, ease: [0.19, 1, 0.22, 1] }}
        className={`fixed top-0 left-0 right-0 z-50 transition-colors duration-500 ${
          isScrolled || isMenuOpen
            ? 'bg-cream/95 backdrop-blur-sm'
            : 'bg-transparent'
        }`}
      >
        <nav className="flex items-center justify-between px-6 md:px-12 lg:px-20 py-6">
          {/* Logo */}
          <Link
            href="/"
            className={`font-serif text-xl md:text-2xl tracking-tight transition-colors duration-300 ${
              isScrolled || isMenuOpen ? 'text-charcoal' : 'text-white'
            }`}
          >
            Parkway East
          </Link>

          {/* Menu Toggle */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className={`relative z-50 w-10 h-10 flex items-center justify-center transition-colors duration-300 ${
              isScrolled || isMenuOpen ? 'text-charcoal' : 'text-white'
            }`}
            aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
          >
            <div className="w-6 flex flex-col items-end gap-1.5">
              <motion.span
                animate={{
                  rotate: isMenuOpen ? 45 : 0,
                  y: isMenuOpen ? 6 : 0,
                  width: isMenuOpen ? 24 : 24,
                }}
                transition={{ duration: 0.3, ease: [0.19, 1, 0.22, 1] }}
                className="block h-0.5 bg-current origin-center"
              />
              <motion.span
                animate={{
                  opacity: isMenuOpen ? 0 : 1,
                  width: isMenuOpen ? 0 : 16,
                }}
                transition={{ duration: 0.3 }}
                className="block h-0.5 bg-current"
              />
              <motion.span
                animate={{
                  rotate: isMenuOpen ? -45 : 0,
                  y: isMenuOpen ? -6 : 0,
                  width: isMenuOpen ? 24 : 20,
                }}
                transition={{ duration: 0.3, ease: [0.19, 1, 0.22, 1] }}
                className="block h-0.5 bg-current origin-center"
              />
            </div>
          </button>
        </nav>
      </motion.header>

      {/* Fullscreen Menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <FullscreenMenu onClose={() => setIsMenuOpen(false)} />
        )}
      </AnimatePresence>
    </>
  )
}
