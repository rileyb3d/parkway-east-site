import Link from 'next/link'

export default function Footer() {
  return (
    <footer className="bg-charcoal text-cream section-padding">
      <div className="container-wide">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">
          {/* Brand */}
          <div className="lg:col-span-2">
            <Link href="/" className="font-serif text-3xl md:text-4xl block mb-6">
              Parkway East
            </Link>
            <p className="font-sans text-warm-400 max-w-md leading-relaxed">
              Creating bespoke interiors with heirloom quality and sincerity in every design. Based in St. George, Utah, serving Southern Utah and beyond.
            </p>
          </div>

          {/* Navigation */}
          <div>
            <p className="caption-text text-warm-500 mb-6">Navigate</p>
            <nav className="flex flex-col gap-3">
              <Link href="/projects" className="font-sans text-warm-300 hover:text-cream transition-colors duration-300">
                Projects
              </Link>
              <Link href="/services" className="font-sans text-warm-300 hover:text-cream transition-colors duration-300">
                Services
              </Link>
              <Link href="/about" className="font-sans text-warm-300 hover:text-cream transition-colors duration-300">
                About
              </Link>
              <Link href="/blog" className="font-sans text-warm-300 hover:text-cream transition-colors duration-300">
                Blog
              </Link>
              <Link href="/inquire" className="font-sans text-warm-300 hover:text-cream transition-colors duration-300">
                Inquire
              </Link>
            </nav>
          </div>

          {/* Contact & Social */}
          <div>
            <p className="caption-text text-warm-500 mb-6">Connect</p>
            <div className="flex flex-col gap-3 mb-8">
              <a
                href="https://instagram.com/parkwayeastdesign"
                target="_blank"
                rel="noopener noreferrer"
                className="font-sans text-warm-300 hover:text-cream transition-colors duration-300"
              >
                Instagram
              </a>
              <a
                href="https://pinterest.com/parkwayeastdesign"
                target="_blank"
                rel="noopener noreferrer"
                className="font-sans text-warm-300 hover:text-cream transition-colors duration-300"
              >
                Pinterest
              </a>
              <a
                href="https://facebook.com/parkwayeastdesign"
                target="_blank"
                rel="noopener noreferrer"
                className="font-sans text-warm-300 hover:text-cream transition-colors duration-300"
              >
                Facebook
              </a>
              <a
                href="https://linkedin.com/company/parkwayeastdesign"
                target="_blank"
                rel="noopener noreferrer"
                className="font-sans text-warm-300 hover:text-cream transition-colors duration-300"
              >
                LinkedIn
              </a>
            </div>
            <p className="caption-text text-warm-500 mb-2">Location</p>
            <p className="font-sans text-warm-400">St. George, Utah</p>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-16 pt-8 border-t border-warm-800">
          <p className="font-sans text-sm text-warm-500 text-center md:text-left">
            © {new Date().getFullYear()} Parkway East Design. All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}
