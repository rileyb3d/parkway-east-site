import Image from 'next/image'
import Link from 'next/link'
import GhostHeader from '@/components/navigation/GhostHeader'
import FadeIn from '@/components/animations/FadeIn'
import KineticHeading from '@/components/animations/KineticHeading'
import ParallaxImage from '@/components/animations/ParallaxImage'
import Button from '@/components/ui/Button'
import Footer from '@/components/ui/Footer'
import { projects } from '@/lib/projects'
import { testimonials } from '@/lib/team'

export default function Home() {
  const featuredProjects = projects.filter(p => p.featured).slice(0, 3)

  return (
    <>
      <GhostHeader />
      
      <main>
        {/* Hero Section */}
        <section className="relative h-screen flex items-end">
          {/* Background Image with Parallax */}
          <div className="absolute inset-0 z-0">
            <ParallaxImage
              src="/projects/02-abby-manor/images/LCA_2305-.webp"
              alt="Parkway East Design - Bespoke Interior Design"
              containerClassName="w-full h-full"
              speed={0.3}
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-t from-charcoal/60 via-charcoal/20 to-transparent" />
          </div>

          {/* Hero Content */}
          <div className="relative z-10 w-full section-padding pb-20 md:pb-32">
            <div className="container-wide">
              <FadeIn delay={0.2}>
                <p className="caption-text text-white/80 mb-4">Southern Utah & Beyond</p>
              </FadeIn>
              <FadeIn delay={0.4}>
                <h1 className="font-serif text-display-xl text-white max-w-4xl">
                  Bespoke Interior Design
                </h1>
              </FadeIn>
              <FadeIn delay={0.6}>
                <p className="font-sans text-lg md:text-xl text-white/80 max-w-xl mt-6 leading-relaxed">
                  Creating interiors with heirloom quality and sincerity in every design.
                </p>
              </FadeIn>
              <FadeIn delay={0.8}>
                <div className="mt-10">
                  <Button href="/projects" variant="secondary" className="border-white text-white hover:bg-white hover:text-charcoal">
                    View Our Work
                  </Button>
                </div>
              </FadeIn>
            </div>
          </div>

          {/* Scroll Indicator */}
          <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10">
            <div className="w-px h-16 bg-white/30 relative overflow-hidden">
              <div className="w-full h-8 bg-white animate-slide-up" />
            </div>
          </div>
        </section>

        {/* Featured Projects - Asymmetric Grid */}
        <section className="section-padding">
          <div className="container-wide">
            <div className="flex flex-col md:flex-row md:items-end md:justify-between mb-16">
              <KineticHeading as="h2" className="text-display-md text-charcoal">
                Selected Work
              </KineticHeading>
              <FadeIn delay={0.2}>
                <Link href="/projects" className="link-underline font-sans text-stone mt-4 md:mt-0">
                  View All Projects
                </Link>
              </FadeIn>
            </div>

            {/* Asymmetric Project Grid */}
            <div className="grid grid-cols-1 md:grid-cols-12 gap-6 md:gap-8">
              {/* Large Featured Project */}
              <FadeIn className="md:col-span-7 md:row-span-2" delay={0.1}>
                <Link href={`/projects/${featuredProjects[0]?.slug}`} className="group block relative aspect-[4/5] overflow-hidden">
                  <Image
                    src={featuredProjects[0]?.coverImage || ''}
                    alt={featuredProjects[0]?.title || ''}
                    fill
                    className="object-cover transition-transform duration-700 ease-out-expo group-hover:scale-105"
                    sizes="(max-width: 768px) 100vw, 58vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-charcoal/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  <div className="absolute bottom-0 left-0 right-0 p-6 md:p-10 translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">
                    <p className="caption-text text-white/80 mb-2">{featuredProjects[0]?.location}</p>
                    <h3 className="font-serif text-2xl md:text-4xl text-white">{featuredProjects[0]?.title}</h3>
                  </div>
                </Link>
              </FadeIn>

              {/* Smaller Projects */}
              <FadeIn className="md:col-span-5" delay={0.2}>
                <Link href={`/projects/${featuredProjects[1]?.slug}`} className="group block relative aspect-square overflow-hidden">
                  <Image
                    src={featuredProjects[1]?.coverImage || ''}
                    alt={featuredProjects[1]?.title || ''}
                    fill
                    className="object-cover transition-transform duration-700 ease-out-expo group-hover:scale-105"
                    sizes="(max-width: 768px) 100vw, 42vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-charcoal/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  <div className="absolute bottom-0 left-0 right-0 p-6 translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">
                    <p className="caption-text text-white/80 mb-2">{featuredProjects[1]?.location}</p>
                    <h3 className="font-serif text-xl md:text-2xl text-white">{featuredProjects[1]?.title}</h3>
                  </div>
                </Link>
              </FadeIn>

              <FadeIn className="md:col-span-5" delay={0.3}>
                <Link href={`/projects/${featuredProjects[2]?.slug}`} className="group block relative aspect-landscape overflow-hidden">
                  <Image
                    src={featuredProjects[2]?.coverImage || ''}
                    alt={featuredProjects[2]?.title || ''}
                    fill
                    className="object-cover transition-transform duration-700 ease-out-expo group-hover:scale-105"
                    sizes="(max-width: 768px) 100vw, 42vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-charcoal/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  <div className="absolute bottom-0 left-0 right-0 p-6 translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">
                    <p className="caption-text text-white/80 mb-2">{featuredProjects[2]?.location}</p>
                    <h3 className="font-serif text-xl md:text-2xl text-white">{featuredProjects[2]?.title}</h3>
                  </div>
                </Link>
              </FadeIn>
            </div>
          </div>
        </section>

        {/* About Teaser */}
        <section className="section-padding bg-warm-100">
          <div className="container-wide">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
              <FadeIn direction="left">
                <div className="relative aspect-[4/5] overflow-hidden">
                  <Image
                    src="/assets/team/team-photo.webp"
                    alt="Parkway East Design Team"
                    fill
                    className="object-cover"
                    sizes="(max-width: 1024px) 100vw, 50vw"
                  />
                </div>
              </FadeIn>
              <div>
                <FadeIn>
                  <p className="caption-text text-stone mb-4">Our Story</p>
                </FadeIn>
                <KineticHeading as="h2" className="text-display-md text-charcoal mb-8">
                  Timeless Design, Personal Touch
                </KineticHeading>
                <FadeIn delay={0.2}>
                  <p className="body-text mb-6">
                    Based out of St. George, Utah, Parkway East Design is a full-service interior design studio specializing in high-end residential and commercial projects. Rather than following a specific design style or recent trends, our team focuses on incorporating timeless design principles.
                  </p>
                </FadeIn>
                <FadeIn delay={0.3}>
                  <p className="body-text mb-8">
                    Whether you are building a new modern home, remodeling a traditional space, or need a fresh look for your business, our team of designers will cater to your design needs and deliver exceptional results.
                  </p>
                </FadeIn>
                <FadeIn delay={0.4}>
                  <Button href="/about">About Us</Button>
                </FadeIn>
              </div>
            </div>
          </div>
        </section>

        {/* Testimonial */}
        <section className="section-padding-lg">
          <div className="container-wide max-w-5xl mx-auto text-center">
            <FadeIn>
              <svg className="w-12 h-12 mx-auto mb-8 text-warm-300" fill="currentColor" viewBox="0 0 24 24">
                <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
              </svg>
            </FadeIn>
            <KineticHeading as="h2" className="text-display-sm md:text-display-md text-charcoal mb-8 !leading-relaxed">
              {testimonials[0]?.quote}
            </KineticHeading>
            <FadeIn delay={0.3}>
              <p className="caption-text text-stone">
                — {testimonials[0]?.author}, {testimonials[0]?.project}
              </p>
            </FadeIn>
          </div>
        </section>

        {/* Services Teaser */}
        <section className="section-padding bg-charcoal text-cream">
          <div className="container-wide">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20">
              <div>
                <FadeIn>
                  <p className="caption-text text-warm-400 mb-4">What We Do</p>
                </FadeIn>
                <KineticHeading as="h2" className="text-display-md text-cream mb-8">
                  Full Service Interior Design
                </KineticHeading>
                <FadeIn delay={0.2}>
                  <p className="font-sans text-lg text-warm-300 leading-relaxed mb-8">
                    Interior design is more than creating mood boards and fluffing pillows. When done well, it becomes a deeply personal and transformative experience that reveals the best of any given space.
                  </p>
                </FadeIn>
                <FadeIn delay={0.3}>
                  <Button href="/services" variant="secondary" className="border-cream text-cream hover:bg-cream hover:text-charcoal">
                    Our Services
                  </Button>
                </FadeIn>
              </div>
              <div className="grid grid-cols-2 gap-6">
                <FadeIn delay={0.1} className="space-y-6">
                  <div>
                    <p className="font-serif text-xl text-cream mb-2">Residential</p>
                    <p className="font-sans text-warm-400 text-sm">Custom homes, renovations, and refreshes</p>
                  </div>
                  <div>
                    <p className="font-serif text-xl text-cream mb-2">Commercial</p>
                    <p className="font-sans text-warm-400 text-sm">Offices, retail, and hospitality spaces</p>
                  </div>
                </FadeIn>
                <FadeIn delay={0.2} className="space-y-6">
                  <div>
                    <p className="font-serif text-xl text-cream mb-2">Consultation</p>
                    <p className="font-sans text-warm-400 text-sm">Expert guidance for your project</p>
                  </div>
                  <div>
                    <p className="font-serif text-xl text-cream mb-2">Furnishing</p>
                    <p className="font-sans text-warm-400 text-sm">Sourcing and procurement</p>
                  </div>
                </FadeIn>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="section-padding-lg">
          <div className="container-wide text-center">
            <FadeIn>
              <p className="caption-text text-stone mb-4">Ready to Begin?</p>
            </FadeIn>
            <KineticHeading as="h2" className="text-display-md text-charcoal mb-8 max-w-3xl mx-auto">
              Let&apos;s Create Something Beautiful Together
            </KineticHeading>
            <FadeIn delay={0.2}>
              <p className="body-text max-w-2xl mx-auto mb-10">
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
