import Image from 'next/image'
import GhostHeader from '@/components/navigation/GhostHeader'
import FadeIn from '@/components/animations/FadeIn'
import KineticHeading from '@/components/animations/KineticHeading'
import ParallaxImage from '@/components/animations/ParallaxImage'
import Button from '@/components/ui/Button'
import Footer from '@/components/ui/Footer'

export const metadata = {
  title: 'Commercial Design',
  description: 'Commercial interior design services for offices, retail, hospitality, and professional spaces that inspire.',
}

const commercialServices = [
  {
    title: 'Office Spaces',
    description: 'Productive, inspiring workplaces that reflect your company culture and support your team.',
  },
  {
    title: 'Retail Environments',
    description: 'Customer-focused spaces that enhance the shopping experience and strengthen your brand.',
  },
  {
    title: 'Hospitality',
    description: 'Hotels, restaurants, and venues that create memorable experiences for guests.',
  },
  {
    title: 'Healthcare',
    description: 'Calming, functional spaces that prioritize patient comfort and staff efficiency.',
  },
]

export default function CommercialPage() {
  return (
    <>
      <GhostHeader />
      
      <main>
        {/* Hero */}
        <section className="relative h-[70vh] md:h-[80vh] flex items-end">
          <div className="absolute inset-0 z-0">
            <ParallaxImage
              src="/projects/03-crowded-table/images/LCA_1602-.webp"
              alt="Commercial Interior Design"
              containerClassName="w-full h-full"
              speed={0.3}
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-t from-charcoal/80 via-charcoal/40 to-charcoal/10" />
          </div>

          <div className="relative z-10 w-full section-padding pb-16 md:pb-24">
            <div className="container-wide">
              <FadeIn>
                <p className="caption-text text-white/70 mb-4">Services</p>
              </FadeIn>
              <FadeIn delay={0.2}>
                <h1 className="font-serif text-display-lg text-white max-w-3xl">
                  Commercial Design
                </h1>
              </FadeIn>
            </div>
          </div>
        </section>

        {/* Intro */}
        <section className="section-padding">
          <div className="container-wide">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20">
              <div>
                <FadeIn>
                  <p className="font-sans text-xl md:text-2xl text-charcoal leading-relaxed">
                    Great commercial spaces do more than look beautiful—they support your business goals, reflect your brand values, and create environments where people thrive.
                  </p>
                </FadeIn>
              </div>
              <div>
                <FadeIn delay={0.1}>
                  <p className="body-text mb-6">
                    At Parkway East Design, we understand that commercial projects require a unique approach. From understanding your brand identity to navigating building codes and accessibility requirements, our team brings expertise and attention to detail to every commercial project.
                  </p>
                </FadeIn>
                <FadeIn delay={0.2}>
                  <p className="body-text">
                    Whether you&apos;re opening a new location, refreshing an existing space, or building from the ground up, we&apos;ll help you create an environment that works as beautifully as it looks.
                  </p>
                </FadeIn>
              </div>
            </div>
          </div>
        </section>

        {/* Service Types */}
        <section className="section-padding bg-warm-100">
          <div className="container-wide">
            <div className="text-center mb-16">
              <FadeIn>
                <p className="caption-text text-stone mb-4">What We Design</p>
              </FadeIn>
              <KineticHeading as="h2" className="text-display-sm text-charcoal">
                Commercial Spaces
              </KineticHeading>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {commercialServices.map((service, index) => (
                <FadeIn key={service.title} delay={index * 0.1}>
                  <div className="bg-cream p-8 md:p-10">
                    <h3 className="font-serif text-2xl text-charcoal mb-4">{service.title}</h3>
                    <p className="body-text">{service.description}</p>
                  </div>
                </FadeIn>
              ))}
            </div>
          </div>
        </section>

        {/* Brand-Aligned Design */}
        <section className="section-padding">
          <div className="container-wide">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
              <div>
                <FadeIn>
                  <p className="caption-text text-stone mb-4">Our Philosophy</p>
                </FadeIn>
                <KineticHeading as="h2" className="text-display-sm text-charcoal mb-8">
                  Brand-Aligned Design
                </KineticHeading>
                <FadeIn delay={0.1}>
                  <p className="body-text mb-6">
                    Your physical space is an extension of your brand. We take the time to understand your business, your customers, and your goals to create interiors that reinforce your brand identity at every touchpoint.
                  </p>
                </FadeIn>
                <FadeIn delay={0.2}>
                  <p className="body-text">
                    From color palettes and materials to furniture selection and lighting design, every element is carefully considered to create a cohesive experience that resonates with your audience.
                  </p>
                </FadeIn>
              </div>
              <FadeIn direction="right" className="relative aspect-[4/5] overflow-hidden">
                <Image
                  src="/projects/04-rockaway-retreat/images/LCA_7619-Edit.webp"
                  alt="Brand-Aligned Commercial Design"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
              </FadeIn>
            </div>
          </div>
        </section>

        {/* Functional Excellence */}
        <section className="section-padding bg-charcoal text-cream">
          <div className="container-wide">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
              <FadeIn direction="left" className="relative aspect-[4/5] overflow-hidden order-2 lg:order-1">
                <Image
                  src="/projects/03-crowded-table/images/LCA_1272-.webp"
                  alt="Functional Commercial Design"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
              </FadeIn>
              <div className="order-1 lg:order-2">
                <FadeIn>
                  <p className="caption-text text-warm-400 mb-4">Performance Matters</p>
                </FadeIn>
                <KineticHeading as="h2" className="text-display-sm text-cream mb-8">
                  Functional Excellence
                </KineticHeading>
                <FadeIn delay={0.1}>
                  <p className="font-sans text-lg text-warm-300 leading-relaxed mb-6">
                    Beautiful design means nothing if it doesn&apos;t work. We prioritize functionality alongside aesthetics, creating spaces that support daily operations and enhance productivity.
                  </p>
                </FadeIn>
                <FadeIn delay={0.2}>
                  <p className="font-sans text-lg text-warm-300 leading-relaxed">
                    Our team navigates the unique requirements of commercial projects—from ADA compliance to fire codes—ensuring your space is not only stunning but fully compliant and practical.
                  </p>
                </FadeIn>
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="section-padding">
          <div className="container-wide text-center">
            <KineticHeading as="h2" className="text-display-sm text-charcoal mb-6">
              Elevate Your Business Space
            </KineticHeading>
            <FadeIn delay={0.2}>
              <p className="body-text max-w-xl mx-auto mb-8">
                Let&apos;s discuss how thoughtful design can support your business goals and create an environment your team and customers will love.
              </p>
            </FadeIn>
            <FadeIn delay={0.3}>
              <Button href="/inquire" size="lg">Start Your Project</Button>
            </FadeIn>
          </div>
        </section>
      </main>

      <Footer />
    </>
  )
}
