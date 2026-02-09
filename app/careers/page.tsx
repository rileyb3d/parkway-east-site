import GhostHeader from '@/components/navigation/GhostHeader'
import FadeIn from '@/components/animations/FadeIn'
import KineticHeading from '@/components/animations/KineticHeading'
import Footer from '@/components/ui/Footer'

export const metadata = {
  title: 'Careers | Parkway East Design',
  description: 'Join our team of talented interior designers. We\'re looking for creatives with technical skills to create beautiful design solutions.',
}

export default function CareersPage() {
  return (
    <>
      <GhostHeader />
      
      <main>
        {/* Hero Section */}
        <section className="pt-32 pb-16 md:pt-40 md:pb-20 section-padding bg-warm-100">
          <div className="container-wide">
            <FadeIn>
              <p className="caption-text text-stone mb-4">Join Our Team</p>
            </FadeIn>
            <KineticHeading as="h1" className="text-display-lg text-charcoal max-w-4xl">
              Careers at Parkway East
            </KineticHeading>
            <FadeIn delay={0.2}>
              <p className="font-sans text-xl text-stone max-w-2xl mt-6 leading-relaxed">
                We&apos;re always looking for talented individuals who share our passion for creating beautiful, meaningful spaces.
              </p>
            </FadeIn>
          </div>
        </section>

        {/* Open Positions */}
        <section className="section-padding">
          <div className="container-wide">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">
              <div>
                <FadeIn>
                  <KineticHeading as="h2" className="text-display-sm text-charcoal mb-8">
                    Interior Designer
                  </KineticHeading>
                </FadeIn>
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
                    </ul>
                  </div>
                </FadeIn>
              </div>

              <div>
                <FadeIn delay={0.2}>
                  <div className="bg-warm-100 p-8 md:p-12">
                    <p className="caption-text text-stone mb-6">How to Apply</p>
                    <p className="font-sans text-charcoal mb-6 leading-relaxed">
                      Candidates should submit their resume, portfolio, and a cover letter to:
                    </p>
                    <a 
                      href="mailto:careers@parkwayeastdesign.com"
                      className="font-serif text-2xl md:text-3xl text-charcoal hover:text-stone transition-colors duration-300 block mb-8"
                    >
                      careers@parkwayeastdesign.com
                    </a>
                    <p className="font-sans text-stone leading-relaxed">
                      Take a moment to introduce yourself and tell us why you feel Parkway East Design would be a good fit for you. We look forward to learning about your work and your passion for design.
                    </p>
                  </div>
                </FadeIn>

                <FadeIn delay={0.3}>
                  <div className="mt-12">
                    <p className="caption-text text-stone mb-4">Why Parkway East?</p>
                    <ul className="space-y-3">
                      <li className="font-sans text-charcoal flex items-start gap-3">
                        <span className="w-1.5 h-1.5 rounded-full bg-stone mt-2 flex-shrink-0" />
                        Work on high-end residential and commercial projects
                      </li>
                      <li className="font-sans text-charcoal flex items-start gap-3">
                        <span className="w-1.5 h-1.5 rounded-full bg-stone mt-2 flex-shrink-0" />
                        Collaborative, supportive team environment
                      </li>
                      <li className="font-sans text-charcoal flex items-start gap-3">
                        <span className="w-1.5 h-1.5 rounded-full bg-stone mt-2 flex-shrink-0" />
                        Focus on timeless design over trends
                      </li>
                      <li className="font-sans text-charcoal flex items-start gap-3">
                        <span className="w-1.5 h-1.5 rounded-full bg-stone mt-2 flex-shrink-0" />
                        Based in beautiful St. George, Utah
                      </li>
                    </ul>
                  </div>
                </FadeIn>
              </div>
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
