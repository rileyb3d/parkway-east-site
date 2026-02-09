export interface BlogPost {
  id: string
  slug: string
  title: string
  excerpt: string
  date: string
  category: string
  coverImage: string
  content: string
  images: string[]
}

export const blogPosts: BlogPost[] = [
  {
    id: '1',
    slug: 'finding-your-design-style',
    title: 'Finding Your Design Style',
    excerpt: 'Discovering your style is extremely helpful when building a home, redesigning a space, or working with an interior designer. Learn your tastes and preferences to help you through the decision-making process.',
    date: 'July 6, 2023',
    category: 'Design Guide',
    coverImage: '/blog/01-finding-your-design-style/images/6-scaled.webp',
    content: `Discovering your design style is extremely helpful when building a home, redesigning a space, or working with an interior designer. Learn your tastes and preferences to help you through the decision-making process so you can fall in love with your dream space.

## Reflect on Your Natural Tastes

Start by looking at what you're already drawn to. What colors make you feel calm? What textures do you love to touch? Your existing preferences are the foundation of your personal style.

## Gather Inspiration

Create mood boards from magazines, Pinterest, or Instagram. Look for patterns in what catches your eye—you might notice recurring themes in color palettes, furniture shapes, or architectural details.

## Consider Your Lifestyle

Your design style should support how you actually live. If you have kids and pets, that gorgeous white sofa might not be practical. Consider durability, maintenance, and functionality alongside aesthetics.

## Don't Be Afraid to Mix

Most beautiful homes aren't strictly one style. The magic often happens when you blend elements—perhaps modern furniture with vintage accessories, or traditional architecture with contemporary art.`,
    images: [
      '/blog/01-finding-your-design-style/images/6-scaled.webp',
      '/blog/01-finding-your-design-style/images/14-1.webp',
      '/blog/01-finding-your-design-style/images/15.webp',
      '/blog/01-finding-your-design-style/images/Modern-2.webp',
    ],
  },
  {
    id: '2',
    slug: 'heart-of-st-george',
    title: 'The Heart of St. George',
    excerpt: 'Diving deep into the heart of St. George, exploring its distinctive qualities, and highlighting noteworthy aspects for your future design endeavors.',
    date: 'August 15, 2023',
    category: 'Local Guide',
    coverImage: '/blog/02-the-heart-of-st-george/images/Blog-Covers-1.webp',
    content: `St. George, Utah offers a unique blend of stunning natural landscapes and a growing community that values quality design. From the red rock formations to the clear blue skies, the environment itself provides endless inspiration for interior design.

## The Desert Palette

The natural colors of Southern Utah—warm terracottas, soft sage greens, sandy neutrals—translate beautifully into interior spaces. These earth tones create a sense of harmony with the surrounding landscape.

## Indoor-Outdoor Living

With over 300 days of sunshine per year, St. George homes often blur the line between indoor and outdoor spaces. Large windows, covered patios, and seamless transitions are hallmarks of local design.

## Local Resources

St. George has a growing community of artisans, craftspeople, and vendors who can help bring your design vision to life. Supporting local means getting unique pieces while investing in the community.`,
    images: [
      '/blog/02-the-heart-of-st-george/images/Blog-Covers-1.webp',
      '/blog/02-the-heart-of-st-george/images/8.webp',
      '/blog/02-the-heart-of-st-george/images/10.webp',
    ],
  },
]

export function getBlogPostBySlug(slug: string): BlogPost | undefined {
  return blogPosts.find((p) => p.slug === slug)
}
