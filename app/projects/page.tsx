import Image from 'next/image'
import Link from 'next/link'
import GhostHeader from '@/components/navigation/GhostHeader'
import FadeIn from '@/components/animations/FadeIn'
import KineticHeading from '@/components/animations/KineticHeading'
import Footer from '@/components/ui/Footer'
import { projects } from '@/lib/projects'

export const metadata = {
  title: 'Projects',
  description: 'Explore our portfolio of bespoke interior design projects across Southern Utah and beyond.',
}

export default function ProjectsPage() {
  return (
    <>
      <GhostHeader />
      
      <main>
        {/* Hero */}
        <section className="pt-32 pb-16 md:pt-40 md:pb-24 section-padding">
          <div className="container-wide">
            <FadeIn>
              <p className="caption-text text-stone mb-4">Our Work</p>
            </FadeIn>
            <KineticHeading as="h1" className="text-display-lg text-charcoal max-w-3xl">
              Selected Projects
            </KineticHeading>
            <FadeIn delay={0.2}>
              <p className="body-text max-w-2xl mt-6">
                Each project tells a story of collaboration, craftsmanship, and creating spaces that feel like home.
              </p>
            </FadeIn>
          </div>
        </section>

        {/* Projects Grid */}
        <section className="section-padding pt-0">
          <div className="container-wide">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
              {projects.map((project, index) => (
                <FadeIn
                  key={project.id}
                  delay={index * 0.1}
                  className={index === 0 ? 'md:col-span-2' : ''}
                >
                  <Link
                    href={`/projects/${project.slug}`}
                    className="group block relative overflow-hidden"
                  >
                    <div className={`relative ${index === 0 ? 'aspect-[21/9]' : 'aspect-[4/3]'}`}>
                      <Image
                        src={project.coverImage}
                        alt={project.title}
                        fill
                        className="object-cover transition-transform duration-700 ease-out-expo group-hover:scale-105"
                        sizes={index === 0 ? '100vw' : '(max-width: 768px) 100vw, 50vw'}
                        priority={index < 2}
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-charcoal/70 via-charcoal/20 to-transparent" />
                    </div>
                    
                    {/* Content Overlay */}
                    <div className="absolute bottom-0 left-0 right-0 p-6 md:p-10">
                      <p className="caption-text text-white/70 mb-2">{project.location}</p>
                      <h2 className={`font-serif text-white ${index === 0 ? 'text-3xl md:text-5xl' : 'text-2xl md:text-3xl'}`}>
                        {project.title}
                      </h2>
                      {project.subtitle && (
                        <p className="font-sans text-white/80 mt-2">{project.subtitle}</p>
                      )}
                    </div>

                    {/* View Project Indicator */}
                    <div className="absolute top-6 right-6 md:top-10 md:right-10 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                      <span className="caption-text text-white">View Project</span>
                    </div>
                  </Link>
                </FadeIn>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="section-padding bg-warm-100">
          <div className="container-wide text-center">
            <KineticHeading as="h2" className="text-display-sm text-charcoal mb-6">
              Have a Project in Mind?
            </KineticHeading>
            <FadeIn delay={0.2}>
              <p className="body-text max-w-xl mx-auto mb-8">
                We&apos;d love to hear about your vision. Let&apos;s create something beautiful together.
              </p>
            </FadeIn>
            <FadeIn delay={0.3}>
              <Link
                href="/inquire"
                className="inline-flex items-center justify-center px-8 py-4 bg-charcoal text-cream font-sans text-sm uppercase tracking-widest hover:bg-stone transition-colors duration-500"
              >
                Start Your Project
              </Link>
            </FadeIn>
          </div>
        </section>
      </main>

      <Footer />
    </>
  )
}
