import Link from 'next/link'
import GhostHeader from '@/components/navigation/GhostHeader'
import FadeIn from '@/components/animations/FadeIn'
import KineticHeading from '@/components/animations/KineticHeading'
import Footer from '@/components/ui/Footer'

export const metadata = {
  title: 'Shop',
  description: 'Curated home decor and design items selected by Parkway East Design. Coming soon.',
}

export default function ShopPage() {
  return (
    <>
      <GhostHeader />
      
      <main className="min-h-[80vh] flex items-center">
        <section className="section-padding w-full">
          <div className="container-wide text-center">
            <FadeIn>
              <p className="caption-text text-stone mb-4">Coming Soon</p>
            </FadeIn>
            <KineticHeading as="h1" className="text-display-lg text-charcoal mb-8">
              Our Shop
            </KineticHeading>
            <FadeIn delay={0.2}>
              <p className="body-text max-w-xl mx-auto mb-8">
                We&apos;re curating a collection of beautiful home decor, accessories, and design items that reflect our philosophy of timeless, thoughtful design.
              </p>
            </FadeIn>
            <FadeIn delay={0.3}>
              <p className="font-sans text-stone mb-12">
                In the meantime, follow us on Instagram for product recommendations and design inspiration.
              </p>
            </FadeIn>
            <FadeIn delay={0.4}>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <a
                  href="https://instagram.com/parkwayeastdesign"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center px-8 py-4 bg-charcoal text-cream font-sans text-sm uppercase tracking-widest hover:bg-stone transition-colors duration-500"
                >
                  Follow on Instagram
                </a>
                <Link
                  href="/projects"
                  className="inline-flex items-center justify-center px-8 py-4 border border-charcoal text-charcoal font-sans text-sm uppercase tracking-widest hover:bg-charcoal hover:text-cream transition-colors duration-500"
                >
                  View Our Work
                </Link>
              </div>
            </FadeIn>
          </div>
        </section>
      </main>

      <Footer />
    </>
  )
}
