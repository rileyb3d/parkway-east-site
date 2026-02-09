import Image from 'next/image'
import GhostHeader from '@/components/navigation/GhostHeader'
import FadeIn from '@/components/animations/FadeIn'
import KineticHeading from '@/components/animations/KineticHeading'
import ParallaxImage from '@/components/animations/ParallaxImage'
import Footer from '@/components/ui/Footer'

export const metadata = {
  title: 'Careers | Parkway East Design',
  description: 'Join our team of talented interior designers. We\'re looking for creatives with technical skills to create beautiful design solutions.',
}

export default function CareersPage() {
  return (
    <>
      <GhostHeader variant="light" />
      
      <main>
        {/* Hero Section with Image */}
        <section className="relative h-[70vh] min-h-[500px]">
          <div className="absolute inset-0 z-0">
            <ParallaxImage
              src="/projects/02-abby-manor/images/LCA_2071--scaled.webp"
              alt="Parkway East Design workspace"
              speed={0.3}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-charcoal/80 via-charcoal/40 to-charcoal/10" />
          </div>
          
          <div className="absolute bottom-0 left-0 right-0 z-10 section-padding pb-16 md:pb-24">
            <div className="container-wide">
              <FadeIn>
                <p className="caption-text text-white/80 mb-4">Join Our Team</p>
              </FadeIn>
              <KineticHeading as="h1" className="text-display-lg text-white max-w-4xl">
                Careers at Parkway East
              </KineticHeading>
              <FadeIn delay={0.2}>
                <p className="font-sans text-xl text-white/90 max-w-2xl mt-6 leading-relaxed">
                  We&apos;re always looking for talented individuals who share our passion for creating beautiful, meaningful spaces.
                </p>
              </FadeIn>
            </div>
          </div>
        </section>

        {/* Culture Section */}
        <section className="section-padding bg-warm-100">
          <div className="container-wide">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
              <div>
                <FadeIn>
                  <p className="caption-text text-stone mb-4">Our Culture</p>
                  <KineticHeading as="h2" className="text-display-sm text-charcoal mb-6">
                    Design Is a Team Effort
                  </KineticHeading>
                </FadeIn>
                <FadeIn delay={0.1}>
                  <p className="body-text mb-6">
                    At Parkway East Design, we believe great design is an effort of collaboration that thrives when everyone&apos;s voice is heard. Our studio is built on a foundation of creativity, respect, and shared passion for timeless interiors.
                  </p>
                </FadeIn>
                <FadeIn delay={0.2}>
                  <p className="body-text">
                    Working alongside builders, architects, and artisans, we ensure every detail is accounted for while encouraging a healthy team dynamic. We strive to cultivate relationships that carry on beyond projects—that&apos;s why we consider our team and clients family.
                  </p>
                </FadeIn>
              </div>
              <FadeIn delay={0.2}>
                <div className="relative aspect-[4/3] overflow-hidden">
                  <Image
                    src="/assets/team/team-photo.webp"
                    alt="Parkway East Design team"
                    fill
                    className="object-cover"
                  />
                </div>
              </FadeIn>
            </div>
          </div>
        </section>

        {/* Open Positions */}
        <section className="section-padding">
          <div className="container-wide">
            <FadeIn>
              <p className="caption-text text-stone mb-4">Open Positions</p>
              <KineticHeading as="h2" className="text-display-sm text-charcoal mb-12">
                Interior Designer
              </KineticHeading>
            </FadeIn>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">
              <div>
                <FadeIn delay={0.1}>
                  <p className="body-text mb-6">
                    Parkway East Design is looking for talented Interior Designers to join our team and provide design assistance on both residential and commercial projects for our high-end clients.
                  </p>
                </FadeIn>
                <FadeIn delay={0.2}>
                  <p className="body-text mb-8">
                    We&apos;re looking for true creatives with the technical skills needed to create beautiful design solutions. If you have a passion for timeless design and want to be part of a collaborative, supportive team, we&apos;d love to hear from you.
                  </p>
                </FadeIn>
                
                <FadeIn delay={0.3}>
                  <div className="mb-8">
                    <p className="caption-text text-stone mb-4">What We&apos;re Looking For</p>
                    <ul className="space-y-3">
                      <li className="font-sans text-charcoal flex items-start gap-3">
                        <span className="w-1.5 h-1.5 rounded-full bg-stone mt-2 flex-shrink-0" />
                        Strong design portfolio demonstrating creativity and technical skill
                      </li>
                      <li className="font-sans text-charcoal flex items-start gap-3">
                        <span className="w-1.5 h-1.5 rounded-full bg-stone mt-2 flex-shrink-0" />
                        Experience with residential and/or commercial interior design
                      </li>
                      <li className="font-sans text-charcoal flex items-start gap-3">
                        <span className="w-1.5 h-1.5 rounded-full bg-stone mt-2 flex-shrink-0" />
                        Proficiency in design software (AutoCAD, SketchUp, Adobe Creative Suite)
                      </li>
                      <li className="font-sans text-charcoal flex items-start gap-3">
                        <span className="w-1.5 h-1.5 rounded-full bg-stone mt-2 flex-shrink-0" />
                        Excellent communication and collaboration skills
                      </li>
                      <li className="font-sans text-charcoal flex items-start gap-3">
                        <span className="w-1.5 h-1.5 rounded-full bg-stone mt-2 flex-shrink-0" />
                        Passion for timeless, thoughtful design
                      </li>
                      <li className="font-sans text-charcoal flex items-start gap-3">
                        <span className="w-1.5 h-1.5 rounded-full bg-stone mt-2 flex-shrink-0" />
                        Ability to work collaboratively with builders, architects, and vendors
                      </li>
                    </ul>
                  </div>
                </FadeIn>
              </div>

              <div>
                <FadeIn delay={0.2}>
                  <div className="bg-warm-100 p-8 md:p-12 mb-8">
                    <p className="caption-text text-stone mb-6">Why Parkway East?</p>
                    <ul className="space-y-4">
                      <li className="font-sans text-charcoal flex items-start gap-3">
                        <span className="w-1.5 h-1.5 rounded-full bg-stone mt-2 flex-shrink-0" />
                        <div>
                          <strong>High-End Projects</strong>
                          <p className="text-stone mt-1">Work on luxury residential and commercial projects that push creative boundaries</p>
                        </div>
                      </li>
                      <li className="font-sans text-charcoal flex items-start gap-3">
                        <span className="w-1.5 h-1.5 rounded-full bg-stone mt-2 flex-shrink-0" />
                        <div>
                          <strong>Collaborative Environment</strong>
                          <p className="text-stone mt-1">Be part of a supportive team that values every voice and celebrates creativity</p>
                        </div>
                      </li>
                      <li className="font-sans text-charcoal flex items-start gap-3">
                        <span className="w-1.5 h-1.5 rounded-full bg-stone mt-2 flex-shrink-0" />
                        <div>
                          <strong>Timeless Design Focus</strong>
                          <p className="text-stone mt-1">Create lasting work that stands the test of time, not fleeting trends</p>
                        </div>
                      </li>
                      <li className="font-sans text-charcoal flex items-start gap-3">
                        <span className="w-1.5 h-1.5 rounded-full bg-stone mt-2 flex-shrink-0" />
                        <div>
                          <strong>Beautiful Location</strong>
                          <p className="text-stone mt-1">Based in stunning St. George, Utah with access to incredible landscapes</p>
                        </div>
                      </li>
                      <li className="font-sans text-charcoal flex items-start gap-3">
                        <span className="w-1.5 h-1.5 rounded-full bg-stone mt-2 flex-shrink-0" />
                        <div>
                          <strong>Growth Opportunities</strong>
                          <p className="text-stone mt-1">Develop your skills alongside experienced designers on diverse projects</p>
                        </div>
                      </li>
                    </ul>
                  </div>
                </FadeIn>
                
                <FadeIn delay={0.3}>
                  <div className="bg-charcoal p-8 md:p-12 text-cream">
                    <p className="caption-text text-warm-400 mb-6">How to Apply</p>
                    <p className="font-sans text-warm-200 mb-6 leading-relaxed">
                      Candidates should submit their resume, portfolio, and a cover letter to:
                    </p>
                    <a 
                      href="mailto:careers@parkwayeastdesign.com"
                      className="font-serif text-2xl md:text-3xl text-cream hover:text-warm-300 transition-colors duration-300 block mb-8"
                    >
                      careers@parkwayeastdesign.com
                    </a>
                    <p className="font-sans text-warm-400 leading-relaxed text-sm">
                      Take a moment to introduce yourself and tell us why you feel Parkway East Design would be a good fit for you. We look forward to learning about your work and your passion for design.
                    </p>
                  </div>
                </FadeIn>
              </div>
            </div>
          </div>
        </section>

        {/* Work Examples */}
        <section className="section-padding bg-warm-100">
          <div className="container-wide">
            <FadeIn>
              <p className="caption-text text-stone mb-4 text-center">Our Work</p>
              <KineticHeading as="h2" className="text-display-sm text-charcoal mb-12 text-center">
                Projects You Could Work On
              </KineticHeading>
            </FadeIn>
            
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <FadeIn delay={0.1} className="aspect-square relative overflow-hidden">
                <Image
                  src="/projects/04-rockaway-retreat/images/LCA_7111-Edit.webp"
                  alt="Rockaway Retreat interior"
                  fill
                  className="object-cover hover:scale-105 transition-transform duration-700"
                />
              </FadeIn>
              <FadeIn delay={0.15} className="aspect-square relative overflow-hidden">
                <Image
                  src="/projects/02-abby-manor/images/LCA_2209--scaled.webp"
                  alt="Abby Manor interior"
                  fill
                  className="object-cover hover:scale-105 transition-transform duration-700"
                />
              </FadeIn>
              <FadeIn delay={0.2} className="aspect-square relative overflow-hidden">
                <Image
                  src="/projects/03-crowded-table/images/LCA_1730-.webp"
                  alt="Crowded Table interior"
                  fill
                  className="object-cover hover:scale-105 transition-transform duration-700"
                />
              </FadeIn>
              <FadeIn delay={0.25} className="aspect-square relative overflow-hidden">
                <Image
                  src="/projects/02-abby-manor/images/LCA_2833--scaled.webp"
                  alt="Abby Manor kitchen"
                  fill
                  className="object-cover hover:scale-105 transition-transform duration-700"
                />
              </FadeIn>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="section-padding bg-charcoal text-cream">
          <div className="container-wide text-center">
            <FadeIn>
              <p className="caption-text text-warm-400 mb-4">Not a Designer?</p>
            </FadeIn>
            <KineticHeading as="h2" className="text-display-sm text-cream mb-6">
              We&apos;re Always Growing
            </KineticHeading>
            <FadeIn delay={0.2}>
              <p className="font-sans text-lg text-warm-300 max-w-2xl mx-auto leading-relaxed">
                Even if we don&apos;t have an open position that matches your skills, we&apos;d still love to hear from you. Send us your information and we&apos;ll keep you in mind for future opportunities.
              </p>
            </FadeIn>
          </div>
        </section>
      </main>

      <Footer />
    </>
  )
}
