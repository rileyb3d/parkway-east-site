import { notFound } from 'next/navigation'
import Image from 'next/image'
import Link from 'next/link'
import GhostHeader from '@/components/navigation/GhostHeader'
import FadeIn from '@/components/animations/FadeIn'
import KineticHeading from '@/components/animations/KineticHeading'
import ParallaxImage from '@/components/animations/ParallaxImage'
import Footer from '@/components/ui/Footer'
import { blogPosts, getBlogPostBySlug } from '@/lib/blog'

interface BlogPostPageProps {
  params: Promise<{ slug: string }>
}

export async function generateStaticParams() {
  return blogPosts.map((post) => ({
    slug: post.slug,
  }))
}

export async function generateMetadata({ params }: BlogPostPageProps) {
  const { slug } = await params
  const post = getBlogPostBySlug(slug)
  
  if (!post) {
    return { title: 'Post Not Found' }
  }

  return {
    title: post.title,
    description: post.excerpt,
  }
}

export default async function BlogPostPage({ params }: BlogPostPageProps) {
  const { slug } = await params
  const post = getBlogPostBySlug(slug)

  if (!post) {
    notFound()
  }

  // Get other posts for "More to Read"
  const otherPosts = blogPosts.filter(p => p.slug !== slug)

  return (
    <>
      <GhostHeader />
      
      <main>
        {/* Hero */}
        <section className="relative h-[60vh] md:h-[70vh] flex items-end">
          <div className="absolute inset-0 z-0">
            <ParallaxImage
              src={post.coverImage}
              alt={post.title}
              containerClassName="w-full h-full"
              speed={0.3}
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-t from-charcoal/70 via-charcoal/30 to-transparent" />
          </div>

          <div className="relative z-10 w-full section-padding pb-16 md:pb-24">
            <div className="container-wide max-w-4xl">
              <FadeIn>
                <div className="flex items-center gap-4 mb-4">
                  <span className="caption-text text-white/70">{post.category}</span>
                  <span className="w-1 h-1 rounded-full bg-white/50" />
                  <span className="caption-text text-white/70">{post.date}</span>
                </div>
              </FadeIn>
              <FadeIn delay={0.2}>
                <h1 className="font-serif text-display-md md:text-display-lg text-white">
                  {post.title}
                </h1>
              </FadeIn>
            </div>
          </div>
        </section>

        {/* Content */}
        <section className="section-padding">
          <div className="container-wide max-w-3xl">
            <FadeIn>
              <div className="prose prose-lg max-w-none">
                {post.content.split('\n\n').map((paragraph, index) => {
                  if (paragraph.startsWith('## ')) {
                    return (
                      <h2 key={index} className="font-serif text-2xl md:text-3xl text-charcoal mt-12 mb-6">
                        {paragraph.replace('## ', '')}
                      </h2>
                    )
                  }
                  return (
                    <p key={index} className="body-text mb-6">
                      {paragraph}
                    </p>
                  )
                })}
              </div>
            </FadeIn>

            {/* Post Images */}
            {post.images.length > 1 && (
              <div className="mt-16 space-y-8">
                {post.images.slice(1).map((image, index) => (
                  <FadeIn key={index} delay={index * 0.1}>
                    <div className="relative aspect-[16/10] overflow-hidden">
                      <Image
                        src={image}
                        alt={`${post.title} - Image ${index + 2}`}
                        fill
                        className="object-cover"
                        sizes="(max-width: 768px) 100vw, 750px"
                      />
                    </div>
                  </FadeIn>
                ))}
              </div>
            )}
          </div>
        </section>

        {/* More to Read */}
        {otherPosts.length > 0 && (
          <section className="section-padding bg-warm-100">
            <div className="container-wide">
              <KineticHeading as="h2" className="text-display-sm text-charcoal mb-12 text-center">
                More to Read
              </KineticHeading>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
                {otherPosts.map((otherPost, index) => (
                  <FadeIn key={otherPost.id} delay={index * 0.1}>
                    <Link href={`/blog/${otherPost.slug}`} className="group block">
                      <div className="relative aspect-[4/3] overflow-hidden mb-4">
                        <Image
                          src={otherPost.coverImage}
                          alt={otherPost.title}
                          fill
                          className="object-cover transition-transform duration-700 ease-out-expo group-hover:scale-105"
                          sizes="(max-width: 768px) 100vw, 50vw"
                        />
                      </div>
                      <span className="caption-text text-stone">{otherPost.category}</span>
                      <h3 className="font-serif text-xl text-charcoal mt-2 group-hover:text-stone transition-colors duration-300">
                        {otherPost.title}
                      </h3>
                    </Link>
                  </FadeIn>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* Back to Blog */}
        <section className="section-padding">
          <div className="container-wide text-center">
            <Link
              href="/blog"
              className="inline-flex items-center gap-2 font-sans text-sm uppercase tracking-widest text-charcoal hover:text-stone transition-colors duration-300"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
              Back to Blog
            </Link>
          </div>
        </section>
      </main>

      <Footer />
    </>
  )
}
