export interface Project {
  id: string
  slug: string
  title: string
  subtitle?: string
  location: string
  type: string
  year: string
  featured?: boolean
  description: string
  credits: { role: string; name: string }[]
  coverImage: string
  heroImage: string
  images: string[]
  highlights?: string[]
}

export const projects: Project[] = [
  {
    id: '1',
    slug: 'rockaway-retreat',
    title: 'Rockaway Retreat',
    subtitle: 'Coastal-Inspired Desert Living',
    location: 'Desert Color, St. George, Utah',
    type: 'Residential - Custom Home',
    year: '2025',
    featured: true,
    description: 'This home brings Rockaway Beach inspiration inside with warm woods, textured fabrics, and calming greens. Every room balances comfort and refinement, creating spaces that feel open, grounded, and welcoming. Designed for hosting and connection, it embraces natural light and easy indoor–outdoor living.',
    credits: [
      { role: 'Contractor', name: 'Cedar Pointe Homes' },
      { role: 'Photographer', name: 'Lacey Alexander' },
      { role: 'Interior Design', name: 'Parkway East Design' },
      { role: 'Architect', name: 'Shawn R. Patten' },
    ],
    coverImage: '/projects/04-rockaway-retreat/images/LCA_6968-Edit.webp',
    heroImage: '/projects/04-rockaway-retreat/images/7577-1920x1080-1.webp',
    images: [
      '/projects/04-rockaway-retreat/images/LCA_6968-Edit.webp',
      '/projects/04-rockaway-retreat/images/LCA_7017-Edit.webp',
      '/projects/04-rockaway-retreat/images/LCA_7077-Edit.webp',
      '/projects/04-rockaway-retreat/images/LCA_7111-Edit.webp',
      '/projects/04-rockaway-retreat/images/LCA_7285-Edit.webp',
      '/projects/04-rockaway-retreat/images/LCA_7316-Edit.webp',
      '/projects/04-rockaway-retreat/images/LCA_7351-Edit-2.webp',
      '/projects/04-rockaway-retreat/images/LCA_7364.webp',
      '/projects/04-rockaway-retreat/images/LCA_7489-Edit.webp',
      '/projects/04-rockaway-retreat/images/LCA_7511-Edit.webp',
      '/projects/04-rockaway-retreat/images/LCA_7519-Edit.webp',
      '/projects/04-rockaway-retreat/images/LCA_7593-Edit.webp',
      '/projects/04-rockaway-retreat/images/LCA_7619-Edit.webp',
      '/projects/04-rockaway-retreat/images/LCA_7659-Edit.webp',
      '/projects/04-rockaway-retreat/images/LCA_7717-Edit-Edit.webp',
      '/projects/04-rockaway-retreat/images/LCA_7786-Edit.webp',
      '/projects/04-rockaway-retreat/images/LCA_7822-Edit.webp',
      '/projects/04-rockaway-retreat/images/LCA_7843-Edit.webp',
      '/projects/04-rockaway-retreat/images/LCA_7901-Edit.webp',
      '/projects/04-rockaway-retreat/images/LCA_8124-Edit.webp',
      '/projects/04-rockaway-retreat/images/LCA_8229-Edit.webp',
      '/projects/04-rockaway-retreat/images/LCA_8307-Edit.webp',
      '/projects/04-rockaway-retreat/images/LCA_8356-Edit.webp',
    ],
    highlights: [
      'Coastal-inspired retreat design',
      'Golf simulator & home theater',
      'Resort-style pool',
      'Seamless indoor-outdoor living',
    ],
  },
  {
    id: '2',
    slug: 'crowded-table',
    title: 'Crowded Table',
    subtitle: 'Where Connection Lives',
    location: 'WestGate, St. George, Utah',
    type: 'Residential - Custom Home',
    year: '2025',
    featured: true,
    description: 'At Crowded Table, deliberate design and refined finishes unfold across 9,019 square feet of seamless indoor-outdoor living. Five private bedroom suites, two thoughtfully designed levels, and generous gathering spaces create a home centered on connection.',
    credits: [
      { role: 'Contractor', name: 'Jensen and Sons' },
      { role: 'Photographer', name: 'Lacey Alexander' },
      { role: 'Interior Design', name: 'Parkway East Design' },
      { role: 'Architect', name: 'Shawn R. Patten' },
    ],
    coverImage: '/projects/03-crowded-table/images/LCA_1120-.webp',
    heroImage: '/projects/03-crowded-table/images/LCA_1177.webp',
    images: [
      '/projects/03-crowded-table/images/LCA_1120-.webp',
      '/projects/03-crowded-table/images/LCA_1132-.webp',
      '/projects/03-crowded-table/images/LCA_1177.webp',
      '/projects/03-crowded-table/images/LCA_1202-.webp',
      '/projects/03-crowded-table/images/LCA_1233-.webp',
      '/projects/03-crowded-table/images/LCA_1272-.webp',
      '/projects/03-crowded-table/images/LCA_1388-.webp',
      '/projects/03-crowded-table/images/LCA_1416-.webp',
      '/projects/03-crowded-table/images/LCA_1525-.webp',
      '/projects/03-crowded-table/images/LCA_1602-.webp',
      '/projects/03-crowded-table/images/LCA_1655-.webp',
      '/projects/03-crowded-table/images/LCA_1730-.webp',
      '/projects/03-crowded-table/images/LCA_1825-.webp',
      '/projects/03-crowded-table/images/LCA_1975-.webp',
      '/projects/03-crowded-table/images/LCA_2093-.webp',
      '/projects/03-crowded-table/images/LCA_2270-.webp',
      '/projects/03-crowded-table/images/LCA_2355-.webp',
      '/projects/03-crowded-table/images/LCA_2419-.webp',
      '/projects/03-crowded-table/images/LCA_2457-.webp',
    ],
    highlights: [
      '9,019 square feet',
      'Five private bedroom suites',
      'Resort-style pool',
      '2025 Parade of Homes',
    ],
  },
  {
    id: '3',
    slug: 'abby-manor',
    title: 'Abby Manor',
    subtitle: 'Sophisticated Farmhouse',
    location: 'Stone Cliff, St. George, Utah',
    type: 'Residential - Custom Home',
    year: '2024',
    featured: true,
    description: 'Filled with sentimental pieces, pops of bright color, and international influences, this gorgeous custom home built in Stone Cliff, St. George, is a variation of sophisticated farmhouse.',
    credits: [
      { role: 'Contractor', name: 'Jensen + Sons Construction' },
      { role: 'Photographer', name: 'Lacey Alexander' },
      { role: 'Interior Design', name: 'Parkway East Design' },
    ],
    coverImage: '/projects/02-abby-manor/images/LCA_2209--scaled.webp',
    heroImage: '/projects/02-abby-manor/images/LCA_1916--scaled.webp',
    images: [
      '/projects/02-abby-manor/images/LCA_1916--scaled.webp',
      '/projects/02-abby-manor/images/LCA_1933--scaled.webp',
      '/projects/02-abby-manor/images/LCA_2071--scaled.webp',
      '/projects/02-abby-manor/images/LCA_2106--scaled.webp',
      '/projects/02-abby-manor/images/LCA_2124--scaled.webp',
      '/projects/02-abby-manor/images/LCA_2209--scaled.webp',
      '/projects/02-abby-manor/images/LCA_2244--scaled.webp',
      '/projects/02-abby-manor/images/LCA_2324-.webp',
      '/projects/02-abby-manor/images/LCA_2407--scaled.webp',
      '/projects/02-abby-manor/images/LCA_2460-.webp',
      '/projects/02-abby-manor/images/LCA_2503-.webp',
      '/projects/02-abby-manor/images/LCA_2581-2jpg.webp',
      '/projects/02-abby-manor/images/LCA_2638--scaled.webp',
      '/projects/02-abby-manor/images/LCA_2833--scaled.webp',
      '/projects/02-abby-manor/images/LCA_2912--scaled.webp',
    ],
    highlights: [
      'Modern farmhouse design',
      'International influences',
      'Sentimental pieces throughout',
      'Stone Cliff community',
    ],
  },
  {
    id: '4',
    slug: 'stella-project',
    title: 'The Stella Project',
    subtitle: 'Small Updates, Big Impact',
    location: 'Southern Utah',
    type: 'Residential - Refresh',
    year: '2023',
    description: 'Named after their beloved house cat, the Stella Project is a perfect example of how even a small update can refresh and enliven an entire home. After years living in their house, our client felt like it still didn\'t quite feel like home—it just needed a touch of warmth.',
    credits: [
      { role: 'Interior Design', name: 'Parkway East Design' },
    ],
    coverImage: '/projects/01-stella-project/images/Blog-Covers-7.webp',
    heroImage: '/projects/01-stella-project/images/IMG_0446-2.webp',
    images: [
      '/projects/01-stella-project/images/Blog-Covers-7.webp',
      '/projects/01-stella-project/images/Blog-Post-1000-X-1500-3.webp',
      '/projects/01-stella-project/images/Blog-Post-1000-X-1500-4.webp',
      '/projects/01-stella-project/images/IMG_0419-2.webp',
      '/projects/01-stella-project/images/IMG_0446-2.webp',
      '/projects/01-stella-project/images/IMG_0450_jpg-2.webp',
      '/projects/01-stella-project/images/IMG_0460-2.webp',
      '/projects/01-stella-project/images/IMG_0479_jpg-2.webp',
      '/projects/01-stella-project/images/20221107-IMG_0470.webp',
    ],
    highlights: [
      'Before & after transformation',
      'Entryway refresh',
      'Living room update',
      'Family-friendly design',
    ],
  },
]

export function getProjectBySlug(slug: string): Project | undefined {
  return projects.find((p) => p.slug === slug)
}

export function getFeaturedProjects(): Project[] {
  return projects.filter((p) => p.featured)
}
