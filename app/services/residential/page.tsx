import Image from 'next/image'
import GhostHeader from '@/components/navigation/GhostHeader'
import FadeIn from '@/components/animations/FadeIn'
import KineticHeading from '@/components/animations/KineticHeading'
import ParallaxImage from '@/components/animations/ParallaxImage'
import Button from '@/components/ui/Button'
import Footer from '@/components/ui/Footer'
import { testimonials } from '@/lib/team'

export const metadata = {
  title: 'Residential Design',
  description: 'Bespoke residential interior design services. Custom homes, renovations, and refreshes that feel uniquely yours.',
}

export default function ResidentialPage() {
  return (
    <>
      <GhostHeader />
      
      <main>
        {/* Hero */}
        <section className="relative h-[70vh] md:h-[80vh] flex items-end">
          <div className="absolute inset-0 z-0">
            <ParallaxImage
              src="/projects/02-abby-manor/images/LCA_2209--scaled.webp"
              alt="Residential Interior Design"
              containerClassName="w-full h-full"
              speed={0.3}
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-t from-charcoal/70 via-charcoal/30 to-transparent" />
          </div>

          <div className="relative z-10 w-full section-padding pb-16 md:pb-24">
            <div className="container-wide">
              <FadeIn>
                <p className="caption-text text-white/70 mb-4">Services</p>
              </FadeIn>
              <FadeIn delay={0.2}>
                <h1 className="font-serif text-display-lg text-white max-w-3xl">
                  Residential Design
                </h1>
              </FadeIn>
            </div>
          </div>
        </section>

        {/* Intro - Curated Home Design */}
        <section className="section-padding">
          <div className="container-wide">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
              <div>
                <FadeIn>
                  <p className="caption-text text-stone mb-4">Our Approach</p>
                </FadeIn>
                <KineticHeading as="h2" className="text-display-sm text-charcoal mb-8">
                  Curated Home Design
                </KineticHeading>
                <FadeIn delay={0.1}>
                  <p className="body-text mb-6">
                    At Parkway East Design, we believe our home is an extension of who we are—an expression of our personality and priorities. Home is where our relationships flourish and grow. In time, it becomes as much a part of us as our own story.
                  </p>
                </FadeIn>
                <FadeIn delay={0.2}>
                  <p className="body-text">
                    That&apos;s why our team takes the time to understand each client&apos;s unique journey as we bring their vision to life. Joining our clients&apos; inspiration with timeless design principles, we build more than a house. We cultivate home.
                  </p>
                </FadeIn>
              </div>
              <FadeIn direction="right" className="relative aspect-[4/5] overflow-hidden">
                <Image
                  src="/projects/04-rockaway-retreat/images/LCA_7786-Edit.webp"
                  alt="Curated Home Design"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
              </FadeIn>
            </div>
          </div>
        </section>

        {/* A Trusted Team */}
        <section className="section-padding bg-warm-100">
          <div className="container-wide">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
              <FadeIn direction="left" className="relative aspect-[4/5] overflow-hidden order-2 lg:order-1">
                <Image
                  src="/assets/team/team-photo.webp"
                  alt="Parkway East Design Team"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
              </FadeIn>
              <div className="order-1 lg:order-2">
                <FadeIn>
                  <p className="caption-text text-stone mb-4">Collaboration</p>
                </FadeIn>
                <KineticHeading as="h2" className="text-display-sm text-charcoal mb-8">
                  A Trusted Team
                </KineticHeading>
                <FadeIn delay={0.1}>
                  <p className="body-text mb-6">
                    Great design is an effort of collaboration, and it thrives when everyone&apos;s voice is heard. That&apos;s why we take such pride in our team. Each of our designers brings years of valuable experience to your residential project, serving as an advocate for the client&apos;s vision.
                  </p>
                </FadeIn>
                <FadeIn delay={0.2}>
                  <p className="body-text">
                    Working together alongside builders and architects, we ensure that every detail is accounted for as we encourage a healthy team dynamic. Just as we want our designs to last for years to come, we strive to cultivate relationships that carry on beyond the project.
                  </p>
                </FadeIn>
              </div>
            </div>
          </div>
        </section>

        {/* Stress-Free Process */}
        <section className="section-padding">
          <div className="container-wide">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
              <div>
                <FadeIn>
                  <p className="caption-text text-stone mb-4">Your Experience</p>
                </FadeIn>
                <KineticHeading as="h2" className="text-display-sm text-charcoal mb-8">
                  Stress-Free Process
                </KineticHeading>
                <FadeIn delay={0.1}>
                  <p className="body-text mb-6">
                    We understand it can be easy to feel overwhelmed by all the decisions in a home design, but that&apos;s where having a dedicated team can make all the difference.
                  </p>
                </FadeIn>
                <FadeIn delay={0.2}>
                  <p className="body-text">
                    Whether you&apos;re considering a remodel, renovation, or new build, our refined process breaks everything down into manageable pieces and ensures each phase progresses smoothly. As our designers shoulder the many responsibilities of your project, you can rest easy focusing on other priorities, knowing that all the little details are taken care of.
                  </p>
                </FadeIn>
              </div>
              <FadeIn direction="right" className="relative aspect-[4/5] overflow-hidden">
                <Image
                  src="/projects/03-crowded-table/images/LCA_1655-.webp"
                  alt="Interior Design Process"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
              </FadeIn>
            </div>
          </div>
        </section>

        {/* Testimonial */}
        <section className="section-padding bg-charcoal text-cream">
          <div className="container-wide max-w-4xl mx-auto text-center">
            <FadeIn>
              <svg className="w-12 h-12 mx-auto mb-8 text-warm-600" fill="currentColor" viewBox="0 0 24 24">
                <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
              </svg>
            </FadeIn>
            <FadeIn delay={0.2}>
              <p className="font-serif text-2xl md:text-3xl text-cream leading-relaxed mb-8">
                {testimonials[1]?.quote}
              </p>
            </FadeIn>
            <FadeIn delay={0.3}>
              <p className="caption-text text-warm-400">
                — {testimonials[1]?.author}, {testimonials[1]?.project}
              </p>
            </FadeIn>
          </div>
        </section>

        {/* CTA */}
        <section className="section-padding">
          <div className="container-wide text-center">
            <KineticHeading as="h2" className="text-display-sm text-charcoal mb-6">
              Let&apos;s Create Your Dream Home
            </KineticHeading>
            <FadeIn delay={0.2}>
              <p className="body-text max-w-xl mx-auto mb-8">
                Whether you live in Southern Utah or elsewhere, trust our experienced team to deliver a truly exceptional design.
              </p>
            </FadeIn>
            <FadeIn delay={0.3}>
              <Button href="/inquire" size="lg">Get Started</Button>
            </FadeIn>
          </div>
        </section>
      </main>

      <Footer />
    </>
  )
}
