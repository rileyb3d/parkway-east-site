import { notFound } from 'next/navigation'
import Image from 'next/image'
import Link from 'next/link'
import GhostHeader from '@/components/navigation/GhostHeader'
import FadeIn from '@/components/animations/FadeIn'
import KineticHeading from '@/components/animations/KineticHeading'
import ParallaxImage from '@/components/animations/ParallaxImage'
import ProjectGallery from '@/components/gallery/ProjectGallery'
import BeforeAfterSection from '@/components/gallery/BeforeAfterSection'
import RoomGallery from '@/components/gallery/RoomGallery'
import Footer from '@/components/ui/Footer'
import { projects, getProjectBySlug, getAllProjectImages } from '@/lib/projects'

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

  // Get all images for lightbox
  const allImages = getAllProjectImages(project)

  return (
    <>
      <GhostHeader variant="light" />
      
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
            <div className="absolute inset-0 bg-gradient-to-t from-charcoal/80 via-charcoal/40 to-charcoal/10" />
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
                  <p className="font-sans text-xl md:text-2xl text-charcoal leading-relaxed mb-6">
                    {project.description}
                  </p>
                </FadeIn>
                {project.longDescription && (
                  <FadeIn delay={0.1}>
                    <p className="body-text">
                      {project.longDescription}
                    </p>
                  </FadeIn>
                )}
                {project.designPhilosophy && (
                  <FadeIn delay={0.2}>
                    <div className="mt-8 p-6 bg-warm-100">
                      <p className="caption-text text-stone mb-3">Design Philosophy</p>
                      <p className="font-serif text-lg text-charcoal leading-relaxed">
                        {project.designPhilosophy}
                      </p>
                    </div>
                  </FadeIn>
                )}
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

                    {/* Special Features */}
                    {project.specialFeatures && project.specialFeatures.length > 0 && (
                      <div>
                        <p className="caption-text text-stone mb-4">Special Features</p>
                        <ul className="space-y-2">
                          {project.specialFeatures.map((feature, index) => (
                            <li key={index} className="font-sans text-charcoal flex items-start gap-3">
                              <span className="w-1.5 h-1.5 rounded-full bg-stone mt-2 flex-shrink-0" />
                              {feature}
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}

                    {/* Highlights */}
                    {project.highlights && project.highlights.length > 0 && !project.specialFeatures && (
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

        {/* Testimonial - for projects that have one */}
        {project.testimonial && (
          <section className="section-padding bg-warm-100">
            <div className="container-wide max-w-4xl mx-auto text-center">
              <FadeIn>
                <svg className="w-10 h-10 mx-auto mb-6 text-warm-300" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                </svg>
              </FadeIn>
              <FadeIn delay={0.1}>
                <p className="font-serif text-2xl md:text-3xl text-charcoal leading-relaxed mb-6">
                  &ldquo;{project.testimonial.quote}&rdquo;
                </p>
              </FadeIn>
              <FadeIn delay={0.2}>
                <p className="caption-text text-stone">— {project.testimonial.author}</p>
              </FadeIn>
            </div>
          </section>
        )}

        {/* Before/After Section - for renovation/refresh projects like Stella */}
        {project.beforeAfter && project.beforeAfter.length > 0 && (
          <section className="py-16 md:py-24 lg:py-32">
            <div className="max-w-[1600px] mx-auto px-4 md:px-8 lg:px-12">
              {project.beforeAfter.map((comparison, index) => (
                <BeforeAfterSection
                  key={index}
                  title={comparison.title}
                  before={comparison.before}
                  after={comparison.after}
                  description={comparison.description}
                  designElements={comparison.designElements}
                />
              ))}
            </div>
          </section>
        )}

        {/* Room-organized Gallery - for custom home projects */}
        {project.rooms && project.rooms.length > 0 && (
          <section className="py-16 md:py-24 lg:py-32">
            <div className="max-w-[1800px] mx-auto px-4 md:px-8 lg:px-12">
              {project.rooms.map((room, index) => (
                <RoomGallery
                  key={index}
                  name={room.name}
                  images={room.images}
                  allImages={allImages}
                />
              ))}
            </div>
          </section>
        )}

        {/* Additional Detail Images - for Stella Project */}
        {project.beforeAfter && project.images.length > 0 && (
          <section className="py-16 md:py-24 lg:py-32 bg-warm-50">
            <div className="max-w-[1600px] mx-auto px-4 md:px-8 lg:px-12">
              <FadeIn className="mb-12 md:mb-16">
                <h2 className="font-serif text-4xl md:text-5xl text-charcoal">Details</h2>
              </FadeIn>
              <ProjectGallery images={project.images} />
            </div>
          </section>
        )}

        {/* Project Conclusion - for Stella */}
        {project.slug === 'stella-project' && (
          <section className="section-padding">
            <div className="container-wide max-w-3xl">
              <FadeIn>
                <p className="font-serif text-2xl md:text-3xl text-charcoal leading-relaxed mb-6">
                  Our client was so thrilled to see the transformation, and we loved being there to share it with them.
                </p>
              </FadeIn>
              <FadeIn delay={0.1}>
                <p className="body-text mb-6">
                  We can just imagine the many afternoons enjoyed with friends and family and the memories to be made within their home.
                </p>
              </FadeIn>
              <FadeIn delay={0.2}>
                <p className="font-serif text-xl text-stone italic">
                  We think Stella approves, too.
                </p>
              </FadeIn>
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
