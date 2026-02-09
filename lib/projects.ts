export interface BeforeAfterPair {
  title: string
  before: string
  after: string
  description?: string
  designElements?: string[]
}

export interface RoomGallery {
  name: string
  images: string[]
}

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
  longDescription?: string
  credits: { role: string; name: string }[]
  coverImage: string
  heroImage: string
  // For room-organized projects
  rooms?: RoomGallery[]
  // For before/after projects like Stella
  beforeAfter?: BeforeAfterPair[]
  // Flat image array for simple galleries
  images: string[]
  highlights?: string[]
  testimonial?: {
    quote: string
    author: string
  }
  designPhilosophy?: string
  specialFeatures?: string[]
}

export const projects: Project[] = [
  // ROCKAWAY RETREAT
  {
    id: '1',
    slug: 'rockaway-retreat',
    title: 'Rockaway Retreat',
    subtitle: 'Coastal-Inspired Desert Living',
    location: 'Desert Color, St. George, Utah',
    type: 'Residential - Custom Home',
    year: '2025',
    featured: true,
    description: 'This home brings Rockaway Beach inspiration inside with warm woods, textured fabrics, and calming greens. Every room balances comfort and refinement, creating spaces that feel open, grounded, and welcoming.',
    longDescription: 'Designed for hosting and connection, it embraces natural light and easy indoor–outdoor living. Featured in the 2025 St. George Parade of Homes.',
    designPhilosophy: 'Inspired by the relaxed coastal vibes of Rockaway Beach, this home creates a retreat atmosphere while maintaining the sophistication expected in a high-end custom home.',
    specialFeatures: [
      'Golf simulator',
      'Home theater',
      'Sports bar',
      'Resort-style pool',
      'Seamless indoor-outdoor living',
    ],
    credits: [
      { role: 'Contractor', name: 'Cedar Pointe Homes' },
      { role: 'Photographer', name: 'Lacey Alexander' },
      { role: 'Interior Design', name: 'Parkway East Design' },
      { role: 'Architect', name: 'Shawn R. Patten' },
    ],
    coverImage: '/projects/04-rockaway-retreat/images/LCA_6968-Edit.webp',
    heroImage: '/projects/04-rockaway-retreat/images/7577-1920x1080-1.webp',
    rooms: [
      {
        name: 'Great Room',
        images: [
          '/projects/04-rockaway-retreat/images/LCA_6968-Edit.webp',
          '/projects/04-rockaway-retreat/images/LCA_6968-Edit-2.webp',
          '/projects/04-rockaway-retreat/images/LCA_7017-Edit.webp',
          '/projects/04-rockaway-retreat/images/LCA_7024.webp',
          '/projects/04-rockaway-retreat/images/LCA_7027.webp',
          '/projects/04-rockaway-retreat/images/LCA_7036.webp',
        ],
      },
      {
        name: 'Kitchen',
        images: [
          '/projects/04-rockaway-retreat/images/LCA_7077-Edit.webp',
          '/projects/04-rockaway-retreat/images/LCA_7111-Edit.webp',
          '/projects/04-rockaway-retreat/images/LCA_7285-Edit.webp',
          '/projects/04-rockaway-retreat/images/LCA_7316-Edit.webp',
          '/projects/04-rockaway-retreat/images/LCA_7324-Edit.webp',
          '/projects/04-rockaway-retreat/images/LCA_7336-Edit.webp',
        ],
      },
      {
        name: 'Dining Room',
        images: [
          '/projects/04-rockaway-retreat/images/LCA_7351-Edit-2.webp',
          '/projects/04-rockaway-retreat/images/LCA_7364.webp',
          '/projects/04-rockaway-retreat/images/LCA_7376.webp',
        ],
      },
      {
        name: 'Pantry',
        images: [
          '/projects/04-rockaway-retreat/images/LCA_7387-Edit.webp',
          '/projects/04-rockaway-retreat/images/LCA_7422-Edit.webp',
        ],
      },
      {
        name: 'Details',
        images: [
          '/projects/04-rockaway-retreat/images/LCA_7432-Edit.webp',
          '/projects/04-rockaway-retreat/images/LCA_7462-Edit.webp',
          '/projects/04-rockaway-retreat/images/LCA_7467.webp',
        ],
      },
      {
        name: 'Pool',
        images: [
          '/projects/04-rockaway-retreat/images/LCA_7489-Edit.webp',
          '/projects/04-rockaway-retreat/images/LCA_7511-Edit.webp',
          '/projects/04-rockaway-retreat/images/LCA_7519-Edit.webp',
          '/projects/04-rockaway-retreat/images/LCA_7531-Edit.webp',
        ],
      },
      {
        name: 'Entertainment Room',
        images: [
          '/projects/04-rockaway-retreat/images/LCA_7593-Edit.webp',
          '/projects/04-rockaway-retreat/images/LCA_7608-Edit.webp',
        ],
      },
      {
        name: 'Sports Bar',
        images: [
          '/projects/04-rockaway-retreat/images/LCA_7619-Edit.webp',
          '/projects/04-rockaway-retreat/images/LCA_7628-Edit.webp',
          '/projects/04-rockaway-retreat/images/LCA_7639.webp',
        ],
      },
      {
        name: 'Theater & Golf Simulator',
        images: [
          '/projects/04-rockaway-retreat/images/LCA_7659-Edit.webp',
          '/projects/04-rockaway-retreat/images/LCA_7670-Edit.webp',
          '/projects/04-rockaway-retreat/images/LCA_7681-Edit.webp',
          '/projects/04-rockaway-retreat/images/LCA_7688-Edit.webp',
        ],
      },
      {
        name: 'Hallway & Stairway',
        images: [
          '/projects/04-rockaway-retreat/images/LCA_7700-Edit.webp',
          '/projects/04-rockaway-retreat/images/LCA_7710-Edit.webp',
          '/projects/04-rockaway-retreat/images/LCA_7717-Edit-Edit.webp',
          '/projects/04-rockaway-retreat/images/LCA_7744-Edit.webp',
          '/projects/04-rockaway-retreat/images/LCA_7758-Edit.webp',
          '/projects/04-rockaway-retreat/images/LCA_7769-Edit.webp',
        ],
      },
      {
        name: 'Primary Suite',
        images: [
          '/projects/04-rockaway-retreat/images/LCA_7786-Edit.webp',
          '/projects/04-rockaway-retreat/images/LCA_7822-Edit.webp',
          '/projects/04-rockaway-retreat/images/LCA_7836.webp',
        ],
      },
      {
        name: 'Primary Bath',
        images: [
          '/projects/04-rockaway-retreat/images/LCA_7843-Edit.webp',
          '/projects/04-rockaway-retreat/images/LCA_7849-Edit.webp',
          '/projects/04-rockaway-retreat/images/LCA_7863-Edit.webp',
        ],
      },
      {
        name: 'Primary Closet',
        images: [
          '/projects/04-rockaway-retreat/images/LCA_7886-Edit.webp',
        ],
      },
      {
        name: 'Bedroom',
        images: [
          '/projects/04-rockaway-retreat/images/LCA_7901-Edit.webp',
          '/projects/04-rockaway-retreat/images/LCA_7913-Edit.webp',
          '/projects/04-rockaway-retreat/images/LCA_7948-Edit.webp',
        ],
      },
      {
        name: 'Bedroom Bath',
        images: [
          '/projects/04-rockaway-retreat/images/LCA_7957-Edit.webp',
          '/projects/04-rockaway-retreat/images/LCA_7965.webp',
        ],
      },
      {
        name: 'Guest Suite',
        images: [
          '/projects/04-rockaway-retreat/images/LCA_7976-Edit.webp',
          '/projects/04-rockaway-retreat/images/LCA_7994-Edit.webp',
        ],
      },
      {
        name: 'Guest Bath',
        images: [
          '/projects/04-rockaway-retreat/images/LCA_7997-Edit.webp',
          '/projects/04-rockaway-retreat/images/LCA_8010.webp',
        ],
      },
      {
        name: 'Kids Room',
        images: [
          '/projects/04-rockaway-retreat/images/LCA_8077-Edit.webp',
          '/projects/04-rockaway-retreat/images/LCA_8089-Edit.webp',
        ],
      },
      {
        name: 'Kids Bath',
        images: [
          '/projects/04-rockaway-retreat/images/LCA_8111-Edit.webp',
        ],
      },
      {
        name: 'Bunk Room',
        images: [
          '/projects/04-rockaway-retreat/images/LCA_8124-Edit.webp',
          '/projects/04-rockaway-retreat/images/LCA_8136-Edit.webp',
        ],
      },
      {
        name: 'Bunk Bath',
        images: [
          '/projects/04-rockaway-retreat/images/LCA_8153-Edit.webp',
        ],
      },
      {
        name: 'Laundry',
        images: [
          '/projects/04-rockaway-retreat/images/LCA_8165-Edit.webp',
          '/projects/04-rockaway-retreat/images/LCA_8194-Edit.webp',
        ],
      },
      {
        name: 'Mudroom',
        images: [
          '/projects/04-rockaway-retreat/images/LCA_8204.webp',
          '/projects/04-rockaway-retreat/images/LCA_8212.webp',
        ],
      },
      {
        name: 'Exterior',
        images: [
          '/projects/04-rockaway-retreat/images/LCA_8229-Edit.webp',
          '/projects/04-rockaway-retreat/images/LCA_8250-Edit.webp',
        ],
      },
      {
        name: 'Outdoor Living',
        images: [
          '/projects/04-rockaway-retreat/images/LCA_8282-Edit.webp',
          '/projects/04-rockaway-retreat/images/LCA_8289-Edit.webp',
        ],
      },
      {
        name: 'Evening & Twilight',
        images: [
          '/projects/04-rockaway-retreat/images/LCA_8307-Edit.webp',
          '/projects/04-rockaway-retreat/images/LCA_8356-Edit.webp',
          '/projects/04-rockaway-retreat/images/LCA_8366-Edit.webp',
          '/projects/04-rockaway-retreat/images/LCA_8379.webp',
        ],
      },
    ],
    images: [], // Using rooms instead
    highlights: [
      'Coastal-inspired retreat design',
      'Golf simulator & home theater',
      'Resort-style pool',
      'Seamless indoor-outdoor living',
    ],
  },

  // CROWDED TABLE
  {
    id: '2',
    slug: 'crowded-table',
    title: 'Crowded Table',
    subtitle: 'Where Connection Lives',
    location: 'WestGate, St. George, Utah',
    type: 'Residential - Custom Home',
    year: '2025',
    featured: true,
    description: 'At Crowded Table, deliberate design and refined finishes unfold across 9,019 square feet of seamless indoor-outdoor living.',
    longDescription: 'Five private bedroom suites, two thoughtfully designed levels, and generous gathering spaces create a home centered on connection. Framed by Southern Utah\'s expansive vistas, a resort-style pool and outdoor living areas invite moments of pause and togetherness from day to night. Featured in the 2025 St. George Parade of Homes.',
    designPhilosophy: 'The name "Crowded Table" reflects the home\'s core purpose: creating spaces for connection and togetherness. Every design decision, from the generous gathering areas to the seamless indoor-outdoor transitions, was made with hospitality and family in mind.',
    credits: [
      { role: 'Contractor', name: 'Jensen and Sons' },
      { role: 'Photographer', name: 'Lacey Alexander' },
      { role: 'Interior Design', name: 'Parkway East Design' },
      { role: 'Architect', name: 'Shawn R. Patten' },
    ],
    coverImage: '/projects/03-crowded-table/images/LCA_1120-.webp',
    heroImage: '/projects/03-crowded-table/images/LCA_1177.webp',
    rooms: [
      {
        name: 'Great Room',
        images: [
          '/projects/03-crowded-table/images/LCA_1120-.webp',
          '/projects/03-crowded-table/images/LCA_1132-.webp',
          '/projects/03-crowded-table/images/LCA_1177.webp',
        ],
      },
      {
        name: 'Kitchen',
        images: [
          '/projects/03-crowded-table/images/LCA_1202-.webp',
          '/projects/03-crowded-table/images/LCA_1233-.webp',
          '/projects/03-crowded-table/images/LCA_1257-.webp',
          '/projects/03-crowded-table/images/LCA_1272-.webp',
          '/projects/03-crowded-table/images/LCA_1285-.webp',
          '/projects/03-crowded-table/images/LCA_1301-.webp',
        ],
      },
      {
        name: 'Dining Room',
        images: [
          '/projects/03-crowded-table/images/LCA_1388-.webp',
          '/projects/03-crowded-table/images/LCA_1416-.webp',
          '/projects/03-crowded-table/images/LCA_1438-.webp',
          '/projects/03-crowded-table/images/LCA_1447-.webp',
        ],
      },
      {
        name: 'Details',
        images: [
          '/projects/03-crowded-table/images/LCA_1455-.webp',
          '/projects/03-crowded-table/images/LCA_1492-.webp',
          '/projects/03-crowded-table/images/LCA_1506-.webp',
        ],
      },
      {
        name: 'Laundry',
        images: [
          '/projects/03-crowded-table/images/LCA_1525-.webp',
          '/projects/03-crowded-table/images/LCA_1547-Edit.webp',
        ],
      },
      {
        name: 'Powder Bath',
        images: [
          '/projects/03-crowded-table/images/LCA_1555-.webp',
          '/projects/03-crowded-table/images/LCA_1565-.webp',
        ],
      },
      {
        name: 'Office',
        images: [
          '/projects/03-crowded-table/images/LCA_1602-.webp',
          '/projects/03-crowded-table/images/LCA_1612-.webp',
          '/projects/03-crowded-table/images/LCA_1620-.webp',
        ],
      },
      {
        name: 'Primary Suite',
        images: [
          '/projects/03-crowded-table/images/LCA_1655-.webp',
          '/projects/03-crowded-table/images/LCA_1664-.webp',
          '/projects/03-crowded-table/images/LCA_1672-.webp',
        ],
      },
      {
        name: 'Primary Bath',
        images: [
          '/projects/03-crowded-table/images/LCA_1730-.webp',
          '/projects/03-crowded-table/images/LCA_1743-1-1.webp',
          '/projects/03-crowded-table/images/LCA_1757-.webp',
        ],
      },
      {
        name: 'Primary Closet',
        images: [
          '/projects/03-crowded-table/images/LCA_1775-.webp',
          '/projects/03-crowded-table/images/LCA_1785-.webp',
        ],
      },
      {
        name: 'Bedroom Suite',
        images: [
          '/projects/03-crowded-table/images/LCA_1790-.webp',
          '/projects/03-crowded-table/images/LCA_1792-.webp',
          '/projects/03-crowded-table/images/LCA_1801-.webp',
          '/projects/03-crowded-table/images/LCA_1806-.webp',
        ],
      },
      {
        name: 'Downstairs Suite',
        images: [
          '/projects/03-crowded-table/images/LCA_1825-.webp',
          '/projects/03-crowded-table/images/LCA_1835.webp',
          '/projects/03-crowded-table/images/LCA_1846-.webp',
        ],
      },
      {
        name: 'Guest Bedroom',
        images: [
          '/projects/03-crowded-table/images/LCA_1872.webp',
          '/projects/03-crowded-table/images/LCA_1881.webp',
          '/projects/03-crowded-table/images/LCA_1899.webp',
        ],
      },
      {
        name: 'Double Twin Suite',
        images: [
          '/projects/03-crowded-table/images/LCA_1925-.webp',
          '/projects/03-crowded-table/images/LCA_1934-.webp',
          '/projects/03-crowded-table/images/LCA_1955-.webp',
        ],
      },
      {
        name: 'Downstairs Great Room',
        images: [
          '/projects/03-crowded-table/images/LCA_1975-.webp',
          '/projects/03-crowded-table/images/LCA_1989-.webp',
          '/projects/03-crowded-table/images/LCA_1995-.webp',
        ],
      },
      {
        name: 'Entertainment Area',
        images: [
          '/projects/03-crowded-table/images/LCA_2010-.webp',
          '/projects/03-crowded-table/images/LCA_2026-.webp',
        ],
      },
      {
        name: 'Garage',
        images: [
          '/projects/03-crowded-table/images/LCA_2050.webp',
          '/projects/03-crowded-table/images/LCA_2054-.webp',
        ],
      },
      {
        name: 'Exterior',
        images: [
          '/projects/03-crowded-table/images/LCA_2076-2.webp',
        ],
      },
      {
        name: 'Pool',
        images: [
          '/projects/03-crowded-table/images/LCA_2093-.webp',
          '/projects/03-crowded-table/images/LCA_2102-.webp',
          '/projects/03-crowded-table/images/LCA_2147.webp',
        ],
      },
      {
        name: 'Outdoor Living',
        images: [
          '/projects/03-crowded-table/images/LCA_2270-.webp',
          '/projects/03-crowded-table/images/LCA_2277.webp',
          '/projects/03-crowded-table/images/LCA_2281-.webp',
          '/projects/03-crowded-table/images/LCA_2295-2.webp',
        ],
      },
      {
        name: 'Views',
        images: [
          '/projects/03-crowded-table/images/LCA_2317-.webp',
          '/projects/03-crowded-table/images/LCA_2333-.webp',
        ],
      },
      {
        name: 'Backyard',
        images: [
          '/projects/03-crowded-table/images/LCA_2355-.webp',
          '/projects/03-crowded-table/images/LCA_2367-.webp',
        ],
      },
      {
        name: 'Evening & Twilight',
        images: [
          '/projects/03-crowded-table/images/LCA_2419-.webp',
          '/projects/03-crowded-table/images/LCA_2429.webp',
          '/projects/03-crowded-table/images/LCA_2438-.webp',
          '/projects/03-crowded-table/images/LCA_2457-.webp',
        ],
      },
    ],
    images: [], // Using rooms instead
    highlights: [
      '9,019 square feet',
      'Five private bedroom suites',
      'Resort-style pool',
      '2025 Parade of Homes',
    ],
  },

  // ABBY MANOR
  {
    id: '3',
    slug: 'abby-manor',
    title: 'Abby Manor',
    subtitle: 'Sophisticated Farmhouse',
    location: 'Stone Cliff, St. George, Utah',
    type: 'Residential - Custom Home',
    year: '2024',
    featured: true,
    description: 'Filled with sentimental pieces, pops of bright color, and international influences, this gorgeous custom home built in Stone Cliff, St. George, is a variation of a modern farmhouse.',
    longDescription: 'The design balances sophisticated farmhouse aesthetics with personal touches that make it uniquely the client\'s own.',
    credits: [
      { role: 'Contractor', name: 'Jensen + Sons Construction' },
      { role: 'Photographer', name: 'Lacey Alexander' },
      { role: 'Interior Design', name: 'Parkway East Design' },
    ],
    coverImage: '/projects/02-abby-manor/images/LCA_2209--scaled.webp',
    heroImage: '/projects/02-abby-manor/images/LCA_2305-.webp',
    rooms: [
      {
        name: 'Interior',
        images: [
          '/projects/02-abby-manor/images/LCA_1916--scaled.webp',
          '/projects/02-abby-manor/images/LCA_1933--scaled.webp',
          '/projects/02-abby-manor/images/LCA_1943--scaled.webp',
          '/projects/02-abby-manor/images/LCA_1979--scaled.webp',
          '/projects/02-abby-manor/images/LCA_1990--scaled.webp',
          '/projects/02-abby-manor/images/LCA_1998--scaled.webp',
          '/projects/02-abby-manor/images/LCA_2011--scaled.webp',
          '/projects/02-abby-manor/images/LCA_2036-1-1-scaled.webp',
        ],
      },
      {
        name: 'Kitchen & Dining',
        images: [
          '/projects/02-abby-manor/images/LCA_2071--scaled.webp',
          '/projects/02-abby-manor/images/LCA_2106--scaled.webp',
          '/projects/02-abby-manor/images/LCA_2124--scaled.webp',
          '/projects/02-abby-manor/images/LCA_2142--scaled.webp',
          '/projects/02-abby-manor/images/LCA_2156--scaled.webp',
          '/projects/02-abby-manor/images/LCA_2188--scaled.webp',
        ],
      },
      {
        name: 'Living Room',
        images: [
          '/projects/02-abby-manor/images/LCA_2209--scaled.webp',
          '/projects/02-abby-manor/images/LCA_2244--scaled.webp',
          '/projects/02-abby-manor/images/LCA_2265-1-1-scaled.webp',
          '/projects/02-abby-manor/images/LCA_2282--scaled.webp',
          '/projects/02-abby-manor/images/LCA_2305-.webp',
        ],
      },
      {
        name: 'Entryway',
        images: [
          '/projects/02-abby-manor/images/LCA_2324-.webp',
        ],
      },
      {
        name: 'Master Suite',
        images: [
          '/projects/02-abby-manor/images/LCA_2407--scaled.webp',
          '/projects/02-abby-manor/images/LCA_2440-.webp',
          '/projects/02-abby-manor/images/LCA_2453-.webp',
        ],
      },
      {
        name: 'Master Bathroom',
        images: [
          '/projects/02-abby-manor/images/LCA_2460-.webp',
          '/projects/02-abby-manor/images/LCA_2470-.webp',
          '/projects/02-abby-manor/images/LCA_2475-.webp',
          '/projects/02-abby-manor/images/LCA_2481-.webp',
          '/projects/02-abby-manor/images/LCA_2487-.webp',
        ],
      },
      {
        name: 'Bedroom',
        images: [
          '/projects/02-abby-manor/images/LCA_2503-.webp',
          '/projects/02-abby-manor/images/LCA_2506-.webp',
          '/projects/02-abby-manor/images/LCA_2517-.webp',
          '/projects/02-abby-manor/images/LCA_2520-.webp',
          '/projects/02-abby-manor/images/LCA_2535-.webp',
        ],
      },
      {
        name: 'Bathroom',
        images: [
          '/projects/02-abby-manor/images/LCA_2544-.webp',
          '/projects/02-abby-manor/images/LCA_2548--scaled.webp',
          '/projects/02-abby-manor/images/LCA_2556--scaled.webp',
        ],
      },
      {
        name: 'Bunkroom',
        images: [
          '/projects/02-abby-manor/images/LCA_2581-2jpg.webp',
          '/projects/02-abby-manor/images/LCA_2586--scaled.webp',
          '/projects/02-abby-manor/images/LCA_2596-.webp',
          '/projects/02-abby-manor/images/LCA_2598-.webp',
          '/projects/02-abby-manor/images/LCA_2603--scaled.webp',
          '/projects/02-abby-manor/images/LCA_2611-.webp',
        ],
      },
      {
        name: 'Hallway & Details',
        images: [
          '/projects/02-abby-manor/images/LCA_2638--scaled.webp',
          '/projects/02-abby-manor/images/LCA_2704--scaled.webp',
          '/projects/02-abby-manor/images/LCA_2717--scaled.webp',
          '/projects/02-abby-manor/images/LCA_2724--scaled.webp',
          '/projects/02-abby-manor/images/LCA_2730--scaled.webp',
          '/projects/02-abby-manor/images/LCA_2740--scaled.webp',
          '/projects/02-abby-manor/images/LCA_2749--scaled.webp',
          '/projects/02-abby-manor/images/LCA_2754--scaled.webp',
          '/projects/02-abby-manor/images/LCA_2770--scaled.webp',
        ],
      },
      {
        name: 'Exterior & Views',
        images: [
          '/projects/02-abby-manor/images/LCA_2833--scaled.webp',
          '/projects/02-abby-manor/images/LCA_2845--scaled.webp',
          '/projects/02-abby-manor/images/LCA_2874--scaled.webp',
          '/projects/02-abby-manor/images/LCA_2889--scaled.webp',
          '/projects/02-abby-manor/images/LCA_2912--scaled.webp',
          '/projects/02-abby-manor/images/LCA_2928--scaled.webp',
        ],
      },
    ],
    images: [], // Using rooms instead
    highlights: [
      'Modern farmhouse design',
      'International influences',
      'Sentimental pieces throughout',
      'Stone Cliff community',
    ],
  },

  // STELLA PROJECT - Before/After focused
  {
    id: '4',
    slug: 'stella-project',
    title: 'The Stella Project',
    subtitle: 'Small Updates, Big Impact',
    location: 'Southern Utah',
    type: 'Residential - Refresh',
    year: '2023',
    description: 'After years living in their house, our client was still being asked whether they\'d just moved in whenever company came over. Despite her best efforts, she felt like her house didn\'t quite feel like home.',
    longDescription: 'It was still missing something. In truth, it just needed a touch of warmth to set the right tone and turn this entry and living room into a family sanctuary. Named after their beloved house cat (you\'ll find her posing throughout this reveal), the Stella Project is a perfect example of how even a small update can refresh and enliven an entire home.',
    credits: [
      { role: 'Interior Design', name: 'Parkway East Design' },
    ],
    coverImage: '/projects/01-stella-project/images/Blog-Covers-7.webp',
    heroImage: '/projects/01-stella-project/images/IMG_0446-2.webp',
    testimonial: {
      quote: "We've had such a great experience with Eleena and Parkway East Design. She makes the process so easy and FUN! She's one of those people who is 'on it.' I can't recommend them enough.",
      author: 'Client',
    },
    beforeAfter: [
      {
        title: 'Entryway Transformation',
        // CORRECTED: According to original content.md lines 28-29
        before: '/projects/01-stella-project/images/Blog-Post-1000-X-1500-3.webp',
        after: '/projects/01-stella-project/images/Blog-Post-1000-X-1500-4.webp',
        description: 'As the first introduction into the home, we wanted to create an experience that was both warm and welcoming. We absolutely love how this entryway turned out! It was really just a matter of getting the proportions right to establish the tone within the home.',
        designElements: [
          'Round Mirror - Used this beautiful round mirror to add some much-needed height against the wall and create an illusion of space and variety as it caught the reflection of the rest of the house.',
          'New Rug - The undersized rug had seen better days, so we swapped it out for a larger one to fill out the room and create a firmer visual foundation.',
          'Simple Accessories - Brought in some simple accessories to style the console and complete the look.',
        ],
      },
      {
        title: 'Living Room Transformation',
        // CORRECTED: According to original content.md lines 51-52
        before: '/projects/01-stella-project/images/IMG_0419-2.webp',
        after: '/projects/01-stella-project/images/IMG_0446-2.webp',
        description: 'To continue the feeling from the entryway, we incorporated many of the same design elements into the living room. Not only was this the place to host company when they came to visit, but the living room was the ideal spot within the home to gather and relax as a family.',
        designElements: [
          'Swivel Chairs - Sourced swivel chairs with a heavy-duty bouclé fabric to encourage conversation from the adjacent kitchen while allowing visibility of the television for family movie nights.',
          'Drapery - A bit of drapery helped bring in texture and height, creating visual layers to the wall while providing needed relief from the sun\'s glare.',
          'Shelf Styling - Rather than sourcing all new accessories for the shelves, we wanted to use our client\'s existing pieces to help bring out their own unique personality.',
          'Mid-Century Modern Accents - Our client was drawn to mid-century modern elements and loved complimenting blues and oranges – which made Stella feel right at home!',
          'High-Performance Fabrics - Anticipating her two boys and their pets, we made sure to source high-performance fabrics for better durability under frequent use.',
          'Sideboard - This gorgeous sideboard served two functions, not only for its stylish element but for the purpose of keeping two rambunctious boys from jumping over the sofa.',
          'Finishing Touches - A few chunky throws over the seating and accessories arranged throughout the room added to the lived-in feel.',
        ],
      },
    ],
    images: [
      '/projects/01-stella-project/images/IMG_0450_jpg-2.webp',
      '/projects/01-stella-project/images/IMG_0460-2.webp',
      '/projects/01-stella-project/images/IMG_0479_jpg-2.webp',
      '/projects/01-stella-project/images/20221107-IMG_0470.webp',
      '/projects/01-stella-project/images/Instagram-Landscape-Posts-6.webp',
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

// Helper to get all images from a project (flat array)
export function getAllProjectImages(project: Project): string[] {
  if (project.rooms && project.rooms.length > 0) {
    return project.rooms.flatMap(room => room.images)
  }
  return project.images
}
