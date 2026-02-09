import Image from 'next/image'
import Link from 'next/link'
import GhostHeader from '@/components/navigation/GhostHeader'
import FadeIn from '@/components/animations/FadeIn'
import KineticHeading from '@/components/animations/KineticHeading'
import ParallaxImage from '@/components/animations/ParallaxImage'
import Button from '@/components/ui/Button'
import Footer from '@/components/ui/Footer'

export const metadata = {
  title: 'Services',
  description: 'Full-service interior design for residential and commercial projects. From concept to completion, we handle every detail.',
}

const services = [
  'Coordination with Vendors & Build Team',
  'Schematic Design Planning',
  'Budget & Timeline Management',
  'Art Packages',
  'Overseeing Installations',
  'Furniture Sourcing',
  'Construction Documents',
  'Project Management',
]

const processSteps = [
  {
    number: '01',
    title: 'Initial Meeting',
    description: 'We will take time to get to know you! We want to understand your unique personality, lifestyle, and vision, as well as discuss project scope, inspiration, concerns, and budget.',
  },
  {
    number: '02',
    title: 'Project Proposal',
    description: 'We will present a unique design plan with expectations on the scope of work, costs, budgets, and timelines. Once the plan aligns with your goals, we can then get to work!',
  },
  {
    number: '03',
    title: 'Schematic Design',
    description: 'We will gather inspiration to refine your vision and source materials to provide you with a sampling of options to choose from. Then, we review the primary elements and outline a clear design direction.',
  },
  {
    number: '04',
    title: 'Design Development',
    description: 'We will implement your design into every space, working to develop the many details that will bring your home or business to life.',
  },
  {
    number: '05',
    title: 'Purchasing & Procurement',
    description: 'We will order items and work closely with vendors to coordinate the ordering, storage, and delivery of items sourced.',
  },
  {
    number: '06',
    title: 'Install & Completion',
    description: 'Once the building process is completed, installation will begin. We will arrange and schedule the installation of furniture, rugs, art, drapery, and accessories.',
  },
]

export default function ServicesPage() {
  return (
    <>
      <GhostHeader />
      
      <main>
        {/* Hero */}
        <section className="relative h-[70vh] md:h-[80vh] flex items-end">
          <div className="absolute inset-0 z-0">
            <ParallaxImage
              src="/projects/03-crowded-table/images/LCA_1177.webp"
              alt="Full Service Interior Design"
              containerClassName="w-full h-full"
              speed={0.3}
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-t from-charcoal/70 via-charcoal/30 to-transparent" />
          </div>

          <div className="relative z-10 w-full section-padding pb-16 md:pb-24">
            <div className="container-wide">
              <FadeIn>
                <p className="caption-text text-white/70 mb-4">What We Do</p>
              </FadeIn>
              <FadeIn delay={0.2}>
                <h1 className="font-serif text-display-lg text-white max-w-3xl">
                  Full Service Interior Design
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
                    Interior design is more than creating mood boards and fluffing pillows. When done well, it becomes a deeply personal and transformative experience that reveals the best of any given space.
                  </p>
                </FadeIn>
              </div>
              <div>
                <FadeIn delay={0.1}>
                  <p className="body-text mb-6">
                    At Parkway East Design, our team specializes in high-end residential and commercial spaces. Our approach to full service interior design provides our clients with a range of options to choose from as we explore the wealth of possibilities for their project.
                  </p>
                </FadeIn>
                <FadeIn delay={0.2}>
                  <p className="body-text">
                    We don&apos;t believe we&apos;re overstating when we say that design shapes our world. That&apos;s why we strive to bring sincerity into each of our designs—to provide an experience our clients can fall in love with time and time again.
                  </p>
                </FadeIn>
              </div>
            </div>
          </div>
        </section>

        {/* Service Types */}
        <section className="section-padding bg-warm-100">
          <div className="container-wide">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
              {/* Residential */}
              <FadeIn>
                <Link href="/services/residential" className="group block relative aspect-[4/3] overflow-hidden">
                  <Image
                    src="/projects/02-abby-manor/images/LCA_2209--scaled.webp"
                    alt="Residential Design"
                    fill
                    className="object-cover transition-transform duration-700 ease-out-expo group-hover:scale-105"
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                  <div className="absolute inset-0 bg-charcoal/40 group-hover:bg-charcoal/30 transition-colors duration-500" />
                  <div className="absolute inset-0 flex flex-col items-center justify-center text-center p-8">
                    <h2 className="font-serif text-3xl md:text-4xl text-white mb-4">Residential Design</h2>
                    <p className="font-sans text-white/80 max-w-sm">Custom homes, renovations, and refreshes that feel like home</p>
                    <span className="caption-text text-white mt-6 group-hover:underline">Learn More</span>
                  </div>
                </Link>
              </FadeIn>

              {/* Commercial */}
              <FadeIn delay={0.1}>
                <Link href="/services/commercial" className="group block relative aspect-[4/3] overflow-hidden">
                  <Image
                    src="/projects/03-crowded-table/images/LCA_1202-.webp"
                    alt="Commercial Design"
                    fill
                    className="object-cover transition-transform duration-700 ease-out-expo group-hover:scale-105"
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                  <div className="absolute inset-0 bg-charcoal/40 group-hover:bg-charcoal/30 transition-colors duration-500" />
                  <div className="absolute inset-0 flex flex-col items-center justify-center text-center p-8">
                    <h2 className="font-serif text-3xl md:text-4xl text-white mb-4">Commercial Design</h2>
                    <p className="font-sans text-white/80 max-w-sm">Offices, retail, hospitality, and professional spaces</p>
                    <span className="caption-text text-white mt-6 group-hover:underline">Learn More</span>
                  </div>
                </Link>
              </FadeIn>
            </div>
          </div>
        </section>

        {/* Services List */}
        <section className="section-padding">
          <div className="container-wide">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20">
              <div>
                <FadeIn>
                  <p className="caption-text text-stone mb-4">What We Offer</p>
                </FadeIn>
                <KineticHeading as="h2" className="text-display-sm text-charcoal">
                  Interior Design Services
                </KineticHeading>
              </div>
              <div>
                <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {services.map((service, index) => (
                    <FadeIn key={service} delay={index * 0.05}>
                      <li className="flex items-start gap-3 py-3 border-b border-warm-200">
                        <span className="w-1.5 h-1.5 rounded-full bg-charcoal mt-2 flex-shrink-0" />
                        <span className="font-sans text-charcoal">{service}</span>
                      </li>
                    </FadeIn>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Process */}
        <section className="section-padding bg-charcoal text-cream">
          <div className="container-wide">
            <div className="text-center mb-16">
              <FadeIn>
                <p className="caption-text text-warm-400 mb-4">How We Work</p>
              </FadeIn>
              <KineticHeading as="h2" className="text-display-md text-cream">
                Our Process
              </KineticHeading>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12">
              {processSteps.map((step, index) => (
                <FadeIn key={step.number} delay={index * 0.1}>
                  <div className="border-t border-warm-700 pt-6">
                    <span className="font-serif text-4xl text-warm-500">{step.number}</span>
                    <h3 className="font-serif text-2xl text-cream mt-4 mb-3">{step.title}</h3>
                    <p className="font-sans text-warm-400 leading-relaxed">{step.description}</p>
                  </div>
                </FadeIn>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="section-padding">
          <div className="container-wide text-center">
            <KineticHeading as="h2" className="text-display-sm text-charcoal mb-6">
              Ready to Transform Your Space?
            </KineticHeading>
            <FadeIn delay={0.2}>
              <p className="body-text max-w-xl mx-auto mb-8">
                Whether you&apos;re building new, renovating, or refreshing, we&apos;d love to hear about your vision.
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
