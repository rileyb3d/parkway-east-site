import GhostHeader from '@/components/navigation/GhostHeader'
import FadeIn from '@/components/animations/FadeIn'
import KineticHeading from '@/components/animations/KineticHeading'
import ContactForm from '@/components/ui/ContactForm'
import Footer from '@/components/ui/Footer'

export const metadata = {
  title: 'Inquire',
  description: 'Start your interior design project with Parkway East Design. Contact us to discuss your vision.',
}

export default function InquirePage() {
  return (
    <>
      <GhostHeader />
      
      <main>
        {/* Hero */}
        <section className="pt-32 pb-16 md:pt-40 md:pb-24 section-padding bg-warm-100">
          <div className="container-wide">
            <div className="max-w-3xl">
              <FadeIn>
                <p className="caption-text text-stone mb-4">Start Your Project</p>
              </FadeIn>
              <KineticHeading as="h1" className="text-display-lg text-charcoal">
                Let&apos;s Create Something Beautiful
              </KineticHeading>
              <FadeIn delay={0.2}>
                <p className="body-text mt-6">
                  Whether you live in Southern Utah or elsewhere, trust our experienced team to deliver a truly exceptional design. Tell us about your vision and let&apos;s get started.
                </p>
              </FadeIn>
            </div>
          </div>
        </section>

        {/* Contact Form Section */}
        <section className="section-padding">
          <div className="container-wide">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20">
              {/* Form */}
              <div className="lg:col-span-8">
                <FadeIn>
                  <ContactForm />
                </FadeIn>
              </div>

              {/* Contact Info */}
              <div className="lg:col-span-4">
                <FadeIn delay={0.1}>
                  <div className="sticky top-32 space-y-12">
                    {/* Location */}
                    <div>
                      <p className="caption-text text-stone mb-4">Location</p>
                      <p className="font-sans text-charcoal">St. George, Utah</p>
                      <p className="font-sans text-stone mt-1">Serving Southern Utah & Beyond</p>
                    </div>

                    {/* Contact */}
                    <div>
                      <p className="caption-text text-stone mb-4">Careers</p>
                      <a
                        href="mailto:careers@parkwayeastdesign.com"
                        className="font-sans text-charcoal hover:text-stone transition-colors duration-300"
                      >
                        careers@parkwayeastdesign.com
                      </a>
                    </div>

                    {/* Social */}
                    <div>
                      <p className="caption-text text-stone mb-4">Follow Us</p>
                      <div className="flex flex-col gap-2">
                        <a
                          href="https://instagram.com/parkwayeastdesign"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="font-sans text-charcoal hover:text-stone transition-colors duration-300"
                        >
                          Instagram
                        </a>
                        <a
                          href="https://pinterest.com/parkwayeastdesign"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="font-sans text-charcoal hover:text-stone transition-colors duration-300"
                        >
                          Pinterest
                        </a>
                        <a
                          href="https://facebook.com/parkwayeastdesign"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="font-sans text-charcoal hover:text-stone transition-colors duration-300"
                        >
                          Facebook
                        </a>
                        <a
                          href="https://linkedin.com/company/parkwayeastdesign"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="font-sans text-charcoal hover:text-stone transition-colors duration-300"
                        >
                          LinkedIn
                        </a>
                      </div>
                    </div>

                    {/* Note */}
                    <div className="bg-warm-100 p-6">
                      <p className="font-sans text-sm text-stone leading-relaxed">
                        We typically respond to inquiries within 1-2 business days. For urgent matters, please indicate so in your message.
                      </p>
                    </div>
                  </div>
                </FadeIn>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  )
}
