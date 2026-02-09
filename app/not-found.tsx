import Link from 'next/link'
import GhostHeader from '@/components/navigation/GhostHeader'
import FadeIn from '@/components/animations/FadeIn'
import KineticHeading from '@/components/animations/KineticHeading'
import Footer from '@/components/ui/Footer'

export default function NotFound() {
  return (
    <>
      <GhostHeader />
      
      <main className="min-h-[80vh] flex items-center">
        <section className="section-padding w-full">
          <div className="container-wide text-center">
            <FadeIn>
              <p className="font-serif text-[150px] md:text-[200px] text-warm-200 leading-none">404</p>
            </FadeIn>
            <KineticHeading as="h1" className="text-display-md text-charcoal mb-6 -mt-8">
              Page Not Found
            </KineticHeading>
            <FadeIn delay={0.2}>
              <p className="body-text max-w-md mx-auto mb-8">
                The page you&apos;re looking for doesn&apos;t exist or has been moved.
              </p>
            </FadeIn>
            <FadeIn delay={0.3}>
              <Link
                href="/"
                className="inline-flex items-center justify-center px-8 py-4 bg-charcoal text-cream font-sans text-sm uppercase tracking-widest hover:bg-stone transition-colors duration-500"
              >
                Back to Home
              </Link>
            </FadeIn>
          </div>
        </section>
      </main>

      <Footer />
    </>
  )
}
