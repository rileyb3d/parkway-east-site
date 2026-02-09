import Image from 'next/image'
import Link from 'next/link'
import GhostHeader from '@/components/navigation/GhostHeader'
import FadeIn from '@/components/animations/FadeIn'
import KineticHeading from '@/components/animations/KineticHeading'
import ParallaxImage from '@/components/animations/ParallaxImage'
import Footer from '@/components/ui/Footer'

export const metadata = {
  title: 'Our Process | Parkway East Design',
  description: 'Learn about our interior design process, from initial consultation to final installation. We make design stress-free and enjoyable.',
}

const processSteps = [
  {
    number: '01',
    title: 'Initial Meeting',
    description: 'We will take time to get to know you! We want to understand your unique personality, lifestyle, and vision. As well as discuss project scope, inspiration, concerns, and budget.',
    image: '/projects/02-abby-manor/images/LCA_2407--scaled.webp',
  },
  {
    number: '02',
    title: 'Project Proposal',
    description: 'We will present a unique design plan with expectations on the scope of work, costs, budgets, and timelines. Once the plan aligns with your goals and the agreement is approved, we can then get to work!',
    image: '/projects/03-crowded-table/images/LCA_1177.webp',
  },
  {
    number: '03',
    title: 'Schematic Design',
    description: 'We will gather inspiration to refine your vision and source materials to provide you with a sampling of options to choose from. Then, we review the primary elements and outline a clear design direction.',
    image: '/projects/02-abby-manor/images/LCA_2244--scaled.webp',
  },
  {
    number: '04',
    title: 'Design Development',
    description: 'We will implement your design into every space, working to develop the many details that will bring your home or business to life. We\'ll meet with you to share ideas, samples, concepts, and drawings when needed.',
    image: '/projects/04-rockaway-retreat/images/LCA_7519-Edit.webp',
  },
  {
    number: '05',
    title: 'Purchasing & Procurement',
    description: 'We will order items and work closely with vendors to coordinate the ordering, storage, and delivery of items sourced. We will track the hundreds of items and details to make sure installation runs smoothly.',
    image: '/projects/02-abby-manor/images/LCA_2833--scaled.webp',
  },
  {
    number: '06',
    title: 'Install & Completion',
    description: 'Once the building process is completed, installation will begin. We will arrange and schedule the installation of furniture, rugs, art, drapery, and accessories, ensuring all the finishing touches are in place.',
    image: '/projects/03-crowded-table/images/LCA_1120-.webp',
  },
]

export default function OurProcessPage() {
  return (
    <>
      <GhostHeader variant="light" />
      
      <main>
        {/* Hero Section */}
        <section className="relative h-[60vh] min-h-[450px]">
          <div className="absolute inset-0 z-0">
            <ParallaxImage
              src="/projects/02-abby-manor/images/LCA_2265-1-1-scaled.webp"
              alt="Interior design process"
              speed={0.3}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-charcoal/80 via-charcoal/40 to-charcoal/10" />
          </div>
          
          <div className="absolute bottom-0 left-0 right-0 z-10 section-padding pb-16 md:pb-24">
            <div className="container-wide">
              <FadeIn>
                <p className="caption-text text-white/80 mb-4">How We Work</p>
              </FadeIn>
              <KineticHeading as="h1" className="text-display-lg text-white max-w-4xl">
                Our Process
              </KineticHeading>
            </div>
          </div>
        </section>

        {/* Intro Section */}
        <section className="section-padding">
          <div className="container-wide">
            <div className="max-w-3xl">
              <FadeIn>
                <p className="text-2xl md:text-3xl font-serif text-charcoal leading-relaxed mb-8">
                  We understand it can be easy to feel overwhelmed by all the decisions in a home design, but that&apos;s where having a dedicated team can make all the difference.
                </p>
              </FadeIn>
              <FadeIn delay={0.1}>
                <p className="body-text mb-6">
                  Whether you&apos;re considering a remodel, renovation, or new build, our refined process breaks everything down into manageable pieces and ensures each phase progresses smoothly.
                </p>
              </FadeIn>
              <FadeIn delay={0.2}>
                <p className="body-text">
                  As our designers shoulder the many responsibilities of your project, you can rest easy focusing on other priorities, knowing that all the little details are taken care of.
                </p>
              </FadeIn>
            </div>
          </div>
        </section>

        {/* Process Steps */}
        <section className="section-padding bg-warm-100">
          <div className="container-wide">
            <FadeIn>
              <p className="caption-text text-stone mb-4">Step by Step</p>
              <KineticHeading as="h2" className="text-display-sm text-charcoal mb-16">
                From Vision to Reality
              </KineticHeading>
            </FadeIn>
            
            <div className="space-y-24">
              {processSteps.map((step, index) => (
                <FadeIn key={step.number} delay={0.1}>
                  <div className={`grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center ${
                    index % 2 === 1 ? 'lg:flex-row-reverse' : ''
                  }`}>
                    <div className={index % 2 === 1 ? 'lg:order-2' : ''}>
                      <span className="font-serif text-6xl md:text-7xl text-warm-300 mb-4 block">
                        {step.number}
                      </span>
                      <h3 className="font-serif text-2xl md:text-3xl text-charcoal mb-4">
                        {step.title}
                      </h3>
                      <p className="body-text">
                        {step.description}
                      </p>
                    </div>
                    <div className={`relative aspect-[4/3] overflow-hidden ${index % 2 === 1 ? 'lg:order-1' : ''}`}>
                      <Image
                        src={step.image}
                        alt={step.title}
                        fill
                        className="object-cover"
                      />
                    </div>
                  </div>
                </FadeIn>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="section-padding bg-charcoal text-cream">
          <div className="container-wide text-center">
            <FadeIn>
              <p className="caption-text text-warm-400 mb-4">Ready to Begin?</p>
            </FadeIn>
            <KineticHeading as="h2" className="text-display-sm text-cream mb-6">
              Let&apos;s Start Your Project
            </KineticHeading>
            <FadeIn delay={0.2}>
              <p className="font-sans text-lg text-warm-300 max-w-2xl mx-auto leading-relaxed mb-8">
                Whether you live in Southern Utah or elsewhere, trust our experienced team to deliver a truly exceptional design.
              </p>
            </FadeIn>
            <FadeIn delay={0.3}>
              <Link
                href="/inquire"
                className="inline-block bg-cream text-charcoal px-8 py-4 font-sans text-sm tracking-widest uppercase hover:bg-warm-100 transition-colors duration-300"
              >
                Let&apos;s Get Started
              </Link>
            </FadeIn>
          </div>
        </section>
      </main>

      <Footer />
    </>
  )
}
