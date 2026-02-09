import Image from 'next/image'
import Link from 'next/link'
import GhostHeader from '@/components/navigation/GhostHeader'
import FadeIn from '@/components/animations/FadeIn'
import KineticHeading from '@/components/animations/KineticHeading'
import Button from '@/components/ui/Button'
import Footer from '@/components/ui/Footer'
import { team } from '@/lib/team'

export const metadata = {
  title: 'Meet the Team | Parkway East Design',
  description: 'Meet the talented designers behind Parkway East Design. Our team brings years of experience to every project.',
}

export default function TeamPage() {
  return (
    <>
      <GhostHeader />
      
      <main>
        {/* Hero */}
        <section className="pt-32 pb-16 md:pt-40 md:pb-20 section-padding bg-warm-100">
          <div className="container-wide">
            <FadeIn>
              <p className="caption-text text-stone mb-4">The People</p>
            </FadeIn>
            <KineticHeading as="h1" className="text-display-lg text-charcoal max-w-4xl">
              Meet Our Team
            </KineticHeading>
            <FadeIn delay={0.2}>
              <p className="font-sans text-xl text-stone max-w-2xl mt-6 leading-relaxed">
                Our talented team of designers brings passion, creativity, and years of experience to every project we undertake.
              </p>
            </FadeIn>
          </div>
        </section>

        {/* Team Grid */}
        <section className="section-padding">
          <div className="container-wide">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 lg:gap-16">
              {team.map((member, index) => (
                <FadeIn key={member.id} delay={index * 0.1}>
                  <div>
                    <div className="relative aspect-[3/4] mb-6 overflow-hidden">
                      <Image
                        src={member.image}
                        alt={member.name}
                        fill
                        className="object-cover"
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      />
                    </div>
                    <h2 className="font-serif text-2xl md:text-3xl text-charcoal mb-2">{member.name}</h2>
                    <p className="caption-text text-stone mb-4">{member.role}</p>
                    {member.bio && (
                      <p className="body-text">{member.bio}</p>
                    )}
                  </div>
                </FadeIn>
              ))}
            </div>
          </div>
        </section>

        {/* About the Founders */}
        <section className="section-padding bg-warm-100">
          <div className="container-wide">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
              <div>
                <FadeIn>
                  <p className="caption-text text-stone mb-4">Our Founders</p>
                </FadeIn>
                <KineticHeading as="h2" className="text-display-sm text-charcoal mb-8">
                  Douglas & Eleena Speck
                </KineticHeading>
                <FadeIn delay={0.1}>
                  <p className="body-text mb-6">
                    Parkway East Design was founded by Douglas and Eleena Speck, a husband-and-wife team who share a passion for creating beautiful, meaningful spaces.
                  </p>
                </FadeIn>
                <FadeIn delay={0.2}>
                  <p className="body-text mb-6">
                    Together, they built the studio on three core principles: bespoke interiors, heirloom quality, and sincerity in every design. Their complementary skills and shared vision have helped Parkway East become one of Southern Utah&apos;s premier interior design studios.
                  </p>
                </FadeIn>
                <FadeIn delay={0.3}>
                  <Link href="/about" className="link-underline font-sans text-stone">
                    Read Our Full Story
                  </Link>
                </FadeIn>
              </div>
              <FadeIn direction="right">
                <div className="relative aspect-square overflow-hidden">
                  <Image
                    src="/assets/team/team-photo.webp"
                    alt="Douglas and Eleena Speck"
                    fill
                    className="object-cover"
                    sizes="(max-width: 1024px) 100vw, 50vw"
                  />
                </div>
              </FadeIn>
            </div>
          </div>
        </section>

        {/* Join the Team CTA */}
        <section className="section-padding bg-charcoal text-cream">
          <div className="container-wide text-center">
            <FadeIn>
              <p className="caption-text text-warm-400 mb-4">Join Us</p>
            </FadeIn>
            <KineticHeading as="h2" className="text-display-sm text-cream mb-6">
              Want to Be Part of Our Team?
            </KineticHeading>
            <FadeIn delay={0.2}>
              <p className="font-sans text-lg text-warm-300 max-w-2xl mx-auto leading-relaxed mb-8">
                We&apos;re always looking for talented designers who share our passion for creating beautiful, timeless spaces.
              </p>
            </FadeIn>
            <FadeIn delay={0.3}>
              <Button href="/careers" variant="secondary" className="border-cream text-cream hover:bg-cream hover:text-charcoal">
                View Open Positions
              </Button>
            </FadeIn>
          </div>
        </section>
      </main>

      <Footer />
    </>
  )
}
