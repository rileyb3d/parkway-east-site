import Image from 'next/image'
import Link from 'next/link'
import GhostHeader from '@/components/navigation/GhostHeader'
import FadeIn from '@/components/animations/FadeIn'
import KineticHeading from '@/components/animations/KineticHeading'
import ParallaxImage from '@/components/animations/ParallaxImage'
import Button from '@/components/ui/Button'
import Footer from '@/components/ui/Footer'
import { team, testimonials } from '@/lib/team'

export const metadata = {
  title: 'About',
  description: 'Meet the team behind Parkway East Design. Bespoke interiors, heirloom quality, and sincerity in every design.',
}

export default function AboutPage() {
  return (
    <>
      <GhostHeader variant="light" />
      
      <main>
        {/* Hero */}
        <section className="relative h-[60vh] md:h-[70vh] flex items-end">
          <div className="absolute inset-0 z-0">
            <ParallaxImage
              src="/assets/team/team-photo.webp"
              alt="Parkway East Design Team"
              containerClassName="w-full h-full"
              speed={0.3}
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-t from-charcoal/80 via-charcoal/40 to-charcoal/10" />
          </div>

          <div className="relative z-10 w-full section-padding pb-16 md:pb-24">
            <div className="container-wide">
              <FadeIn>
                <p className="caption-text text-white/70 mb-4">Who We Are</p>
              </FadeIn>
              <FadeIn delay={0.2}>
                <h1 className="font-serif text-display-lg text-white max-w-3xl">
                  Our Story
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
                    Parkway East Design is a full-service interior design studio based in St. George, Utah, specializing in high-end residential and commercial projects.
                  </p>
                </FadeIn>
              </div>
              <div>
                <FadeIn delay={0.1}>
                  <p className="body-text mb-6">
                    Founded by Douglas and Eleena Speck, a husband-and-wife team, Parkway East Design was built on three core principles: bespoke interiors, heirloom quality, and sincerity in every design.
                  </p>
                </FadeIn>
                <FadeIn delay={0.2}>
                  <p className="body-text">
                    We blend elevated interior design with inviting hospitality—creating spaces that feel personal and welcoming, refined yet comfortable, and timeless rather than trending.
                  </p>
                </FadeIn>
              </div>
            </div>
          </div>
        </section>

        {/* Core Values */}
        <section className="section-padding bg-warm-100">
          <div className="container-wide">
            <div className="text-center mb-16">
              <FadeIn>
                <p className="caption-text text-stone mb-4">What Drives Us</p>
              </FadeIn>
              <KineticHeading as="h2" className="text-display-sm text-charcoal">
                Our Core Values
              </KineticHeading>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <FadeIn delay={0.1}>
                <div className="text-center">
                  <div className="w-20 h-20 mx-auto mb-6 flex items-center justify-center">
                    <Image
                      src="/assets/decorative/Chair.webp"
                      alt="Bespoke"
                      width={80}
                      height={80}
                      className="object-contain"
                    />
                  </div>
                  <h3 className="font-serif text-2xl text-charcoal mb-4">Bespoke</h3>
                  <p className="body-text">
                    Every project is uniquely tailored to our client&apos;s lifestyle, preferences, and vision. No two designs are alike.
                  </p>
                </div>
              </FadeIn>
              <FadeIn delay={0.2}>
                <div className="text-center">
                  <div className="w-20 h-20 mx-auto mb-6 flex items-center justify-center">
                    <Image
                      src="/assets/decorative/Pitcher.webp"
                      alt="Heirloom"
                      width={80}
                      height={80}
                      className="object-contain"
                    />
                  </div>
                  <h3 className="font-serif text-2xl text-charcoal mb-4">Heirloom Quality</h3>
                  <p className="body-text">
                    We source materials and furnishings built to last, creating spaces that will be cherished for generations.
                  </p>
                </div>
              </FadeIn>
              <FadeIn delay={0.3}>
                <div className="text-center">
                  <div className="w-20 h-20 mx-auto mb-6 flex items-center justify-center">
                    <Image
                      src="/assets/decorative/Leaf.webp"
                      alt="Sincerity"
                      width={80}
                      height={80}
                      className="object-contain"
                    />
                  </div>
                  <h3 className="font-serif text-2xl text-charcoal mb-4">Sincerity</h3>
                  <p className="body-text">
                    We approach every project with genuine care and dedication, building relationships that last beyond the design.
                  </p>
                </div>
              </FadeIn>
            </div>
          </div>
        </section>

        {/* Meet the Team */}
        <section className="section-padding">
          <div className="container-wide">
            <div className="text-center mb-16">
              <FadeIn>
                <p className="caption-text text-stone mb-4">The People</p>
              </FadeIn>
              <KineticHeading as="h2" className="text-display-sm text-charcoal">
                Meet Our Team
              </KineticHeading>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {team.map((member, index) => (
                <FadeIn key={member.id} delay={index * 0.1}>
                  <div className="text-center">
                    <div className="relative aspect-square mb-6 overflow-hidden">
                      <Image
                        src={member.image}
                        alt={member.name}
                        fill
                        className="object-cover grayscale hover:grayscale-0 transition-all duration-500"
                        sizes="(max-width: 768px) 100vw, 33vw"
                      />
                    </div>
                    <h3 className="font-serif text-2xl text-charcoal mb-2">{member.name}</h3>
                    <p className="caption-text text-stone mb-4">{member.role}</p>
                    {member.bio && (
                      <p className="font-sans text-stone text-sm">{member.bio}</p>
                    )}
                  </div>
                </FadeIn>
              ))}
            </div>

            <FadeIn delay={0.4}>
              <div className="text-center mt-12">
                <Link
                  href="/about/team"
                  className="inline-block text-charcoal hover:text-stone transition-colors duration-300 font-sans tracking-wide uppercase text-sm"
                >
                  View Full Team →
                </Link>
              </div>
            </FadeIn>
          </div>
        </section>

        {/* Testimonial */}
        <section className="section-padding bg-charcoal text-cream">
          <div className="container-wide max-w-4xl mx-auto text-center">
            <FadeIn>
              <svg className="w-12 h-12 mx-auto mb-8 text-warm-600" fill="currentColor" viewBox="0 0 24 24">
                <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
              </svg>
            </FadeIn>
            <FadeIn delay={0.2}>
              <p className="font-serif text-2xl md:text-3xl text-cream leading-relaxed mb-8">
                {testimonials[0]?.quote}
              </p>
            </FadeIn>
            <FadeIn delay={0.3}>
              <p className="caption-text text-warm-400">
                — {testimonials[0]?.author}, {testimonials[0]?.project}
              </p>
            </FadeIn>
          </div>
        </section>

        {/* Careers CTA */}
        <section className="section-padding bg-warm-100">
          <div className="container-wide">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
              <div>
                <FadeIn>
                  <p className="caption-text text-stone mb-4">Join Us</p>
                </FadeIn>
                <KineticHeading as="h2" className="text-display-sm text-charcoal mb-8">
                  Careers at Parkway East
                </KineticHeading>
                <FadeIn delay={0.1}>
                  <p className="body-text mb-6">
                    We&apos;re always looking for talented Interior Designers to join our team and provide design assistance on both residential and commercial projects for our high-end clients.
                  </p>
                </FadeIn>
                <FadeIn delay={0.2}>
                  <p className="body-text mb-8">
                    We&apos;re looking for true creatives with the technical skills needed to create beautiful design solutions. Interested? We&apos;d love to hear from you.
                  </p>
                </FadeIn>
                <FadeIn delay={0.3}>
                  <div className="flex flex-wrap gap-4">
                    <Link
                      href="/careers"
                      className="inline-flex items-center justify-center px-8 py-4 bg-charcoal text-cream font-sans text-sm uppercase tracking-widest hover:bg-stone transition-colors duration-500"
                    >
                      View Careers
                    </Link>
                    <a
                      href="mailto:careers@parkwayeastdesign.com"
                      className="inline-flex items-center justify-center px-8 py-4 border border-charcoal text-charcoal font-sans text-sm uppercase tracking-widest hover:bg-charcoal hover:text-cream transition-colors duration-500"
                    >
                      Apply Now
                    </a>
                  </div>
                </FadeIn>
              </div>
              <FadeIn direction="right" className="relative aspect-[4/3] overflow-hidden">
                <Image
                  src="/projects/04-rockaway-retreat/images/LCA_7111-Edit.webp"
                  alt="Parkway East Design Office"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
              </FadeIn>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="section-padding">
          <div className="container-wide text-center">
            <KineticHeading as="h2" className="text-display-sm text-charcoal mb-6">
              Ready to Work Together?
            </KineticHeading>
            <FadeIn delay={0.2}>
              <p className="body-text max-w-xl mx-auto mb-8">
                We&apos;d love to learn about your project and explore how we can bring your vision to life.
              </p>
            </FadeIn>
            <FadeIn delay={0.3}>
              <Button href="/inquire" size="lg">Get in Touch</Button>
            </FadeIn>
          </div>
        </section>
      </main>

      <Footer />
    </>
  )
}
