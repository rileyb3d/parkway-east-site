import Image from 'next/image'
import Link from 'next/link'
import GhostHeader from '@/components/navigation/GhostHeader'
import FadeIn from '@/components/animations/FadeIn'
import KineticHeading from '@/components/animations/KineticHeading'
import Footer from '@/components/ui/Footer'
import { blogPosts } from '@/lib/blog'

export const metadata = {
  title: 'Blog',
  description: 'Design inspiration, guides, and insights from Parkway East Design. Find helpful resources for your next project.',
}

export default function BlogPage() {
  return (
    <>
      <GhostHeader />
      
      <main>
        {/* Hero */}
        <section className="pt-32 pb-16 md:pt-40 md:pb-24 section-padding">
          <div className="container-wide">
            <FadeIn>
              <p className="caption-text text-stone mb-4">Insights & Inspiration</p>
            </FadeIn>
            <KineticHeading as="h1" className="text-display-lg text-charcoal max-w-3xl">
              Be Inspired
            </KineticHeading>
            <FadeIn delay={0.2}>
              <p className="body-text max-w-2xl mt-6">
                From home design guides to local insights, find inspiration and helpful resources on our blog.
              </p>
            </FadeIn>
          </div>
        </section>

        {/* Blog Posts */}
        <section className="section-padding pt-0">
          <div className="container-wide">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {blogPosts.map((post, index) => (
                <FadeIn key={post.id} delay={index * 0.1}>
                  <article>
                    <Link href={`/blog/${post.slug}`} className="group block">
                      <div className="relative aspect-[4/3] overflow-hidden mb-6">
                        <Image
                          src={post.coverImage}
                          alt={post.title}
                          fill
                          className="object-cover transition-transform duration-700 ease-out-expo group-hover:scale-105"
                          sizes="(max-width: 768px) 100vw, 50vw"
                        />
                      </div>
                      <div className="flex items-center gap-4 mb-3">
                        <span className="caption-text text-stone">{post.category}</span>
                        <span className="w-1 h-1 rounded-full bg-stone" />
                        <span className="caption-text text-stone">{post.date}</span>
                      </div>
                      <h2 className="font-serif text-2xl md:text-3xl text-charcoal mb-4 group-hover:text-stone transition-colors duration-300">
                        {post.title}
                      </h2>
                      <p className="body-text line-clamp-3">{post.excerpt}</p>
                      <span className="inline-block mt-4 font-sans text-sm uppercase tracking-widest text-charcoal group-hover:text-stone transition-colors duration-300">
                        Read More
                      </span>
                    </Link>
                  </article>
                </FadeIn>
              ))}
            </div>
          </div>
        </section>

        {/* Newsletter CTA */}
        <section className="section-padding bg-warm-100">
          <div className="container-wide text-center">
            <KineticHeading as="h2" className="text-display-sm text-charcoal mb-6">
              Stay Inspired
            </KineticHeading>
            <FadeIn delay={0.2}>
              <p className="body-text max-w-xl mx-auto mb-8">
                Follow us on Instagram for daily design inspiration, behind-the-scenes looks, and project reveals.
              </p>
            </FadeIn>
            <FadeIn delay={0.3}>
              <a
                href="https://instagram.com/parkwayeastdesign"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center px-8 py-4 bg-charcoal text-cream font-sans text-sm uppercase tracking-widest hover:bg-stone transition-colors duration-500"
              >
                Follow @parkwayeastdesign
              </a>
            </FadeIn>
          </div>
        </section>
      </main>

      <Footer />
    </>
  )
}
