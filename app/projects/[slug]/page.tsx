import { notFound } from 'next/navigation'
import Image from 'next/image'
import Link from 'next/link'
import GhostHeader from '@/components/navigation/GhostHeader'
import FadeIn from '@/components/animations/FadeIn'
import KineticHeading from '@/components/animations/KineticHeading'
import ParallaxImage from '@/components/animations/ParallaxImage'
import { StickyHorizontalScroll } from '@/components/gallery/HorizontalScroll'
import ProjectGallery from '@/components/gallery/ProjectGallery'
import Footer from '@/components/ui/Footer'
import { projects, getProjectBySlug } from '@/lib/projects'

interface ProjectPageProps {
  params: Promise<{ slug: string }>
}

export async function generateStaticParams() {
  return projects.map((project) => ({
    slug: project.slug,
  }))
}

export async function generateMetadata({ params }: ProjectPageProps) {
  const { slug } = await params
  const project = getProjectBySlug(slug)
  
  if (!project) {
    return { title: 'Project Not Found' }
  }

  return {
    title: project.title,
    description: project.description,
  }
}

export default async function ProjectPage({ params }: ProjectPageProps) {
  const { slug } = await params
  const project = getProjectBySlug(slug)

  if (!project) {
    notFound()
  }

  // Get next project for navigation
  const currentIndex = projects.findIndex(p => p.slug === slug)
  const nextProject = projects[(currentIndex + 1) % projects.length]

  // Split images for different gallery sections
  const heroImages = project.images.slice(0, 5)
  const galleryImages = project.images.slice(5)

  return (
    <>
      <GhostHeader />
      
      <main>
        {/* Hero Section */}
        <section className="relative h-screen flex items-end">
          <div className="absolute inset-0 z-0">
            <ParallaxImage
              src={project.heroImage}
              alt={project.title}
              containerClassName="w-full h-full"
              speed={0.3}
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-t from-charcoal/70 via-charcoal/30 to-transparent" />
          </div>

          <div className="relative z-10 w-full section-padding pb-20 md:pb-32">
            <div className="container-wide">
              <FadeIn>
                <p className="caption-text text-white/70 mb-4">{project.location}</p>
              </FadeIn>
              <FadeIn delay={0.2}>
                <h1 className="font-serif text-display-xl text-white">{project.title}</h1>
              </FadeIn>
              {project.subtitle && (
                <FadeIn delay={0.3}>
                  <p className="font-sans text-xl text-white/80 mt-4">{project.subtitle}</p>
                </FadeIn>
              )}
            </div>
          </div>
        </section>

        {/* Project Info */}
        <section className="section-padding">
          <div className="container-wide">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20">
              {/* Description */}
              <div className="lg:col-span-7">
                <FadeIn>
                  <p className="font-sans text-xl md:text-2xl text-charcoal leading-relaxed">
                    {project.description}
                  </p>
                </FadeIn>
              </div>

              {/* Credits & Details */}
              <div className="lg:col-span-5">
                <FadeIn delay={0.1}>
                  <div className="space-y-8">
                    {/* Project Details */}
                    <div>
                      <p className="caption-text text-stone mb-4">Project Details</p>
                      <div className="space-y-2">
                        <div className="flex justify-between py-2 border-b border-warm-200">
                          <span className="font-sans text-stone">Type</span>
                          <span className="font-sans text-charcoal">{project.type}</span>
                        </div>
                        <div className="flex justify-between py-2 border-b border-warm-200">
                          <span className="font-sans text-stone">Location</span>
                          <span className="font-sans text-charcoal">{project.location}</span>
                        </div>
                        <div className="flex justify-between py-2 border-b border-warm-200">
                          <span className="font-sans text-stone">Year</span>
                          <span className="font-sans text-charcoal">{project.year}</span>
                        </div>
                      </div>
                    </div>

                    {/* Credits */}
                    {project.credits.length > 0 && (
                      <div>
                        <p className="caption-text text-stone mb-4">Credits</p>
                        <div className="space-y-2">
                          {project.credits.map((credit, index) => (
                            <div key={index} className="flex justify-between py-2 border-b border-warm-200">
                              <span className="font-sans text-stone">{credit.role}</span>
                              <span className="font-sans text-charcoal">{credit.name}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    )}

                    {/* Highlights */}
                    {project.highlights && project.highlights.length > 0 && (
                      <div>
                        <p className="caption-text text-stone mb-4">Highlights</p>
                        <ul className="space-y-2">
                          {project.highlights.map((highlight, index) => (
                            <li key={index} className="font-sans text-charcoal flex items-start gap-3">
                              <span className="w-1.5 h-1.5 rounded-full bg-stone mt-2 flex-shrink-0" />
                              {highlight}
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}
                  </div>
                </FadeIn>
              </div>
            </div>
          </div>
        </section>

        {/* Horizontal Scroll Gallery */}
        {heroImages.length > 0 && (
          <StickyHorizontalScroll images={heroImages} className="my-12" />
        )}

        {/* Masonry Gallery */}
        {galleryImages.length > 0 && (
          <section className="section-padding">
            <div className="container-wide">
              <KineticHeading as="h2" className="text-display-sm text-charcoal mb-12">
                Gallery
              </KineticHeading>
              <ProjectGallery images={galleryImages} />
            </div>
          </section>
        )}

        {/* Next Project */}
        <section className="relative h-[60vh] md:h-[80vh]">
          <Link href={`/projects/${nextProject.slug}`} className="group block h-full">
            <div className="absolute inset-0">
              <Image
                src={nextProject.coverImage}
                alt={nextProject.title}
                fill
                className="object-cover transition-transform duration-700 ease-out-expo group-hover:scale-105"
                sizes="100vw"
              />
              <div className="absolute inset-0 bg-charcoal/50 group-hover:bg-charcoal/40 transition-colors duration-500" />
            </div>
            
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="text-center">
                <p className="caption-text text-white/70 mb-4">Next Project</p>
                <h2 className="font-serif text-display-md text-white">{nextProject.title}</h2>
              </div>
            </div>
          </Link>
        </section>
      </main>

      <Footer />
    </>
  )
}
