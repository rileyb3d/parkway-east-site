export interface TeamMember {
  id: string
  name: string
  role: string
  image: string
  bio?: string
}

export const team: TeamMember[] = [
  {
    id: '1',
    name: 'Eleena Speck',
    role: 'Co-Founder & Principal Designer',
    image: '/assets/team/Eleena-Speck-Headshot-Square.webp',
    bio: 'Eleena brings a passion for creating bespoke interiors that reflect each client\'s unique personality and lifestyle.',
  },
  {
    id: '2',
    name: 'Douglas Speck',
    role: 'Co-Founder',
    image: '/assets/team/Douglas-Speck.webp',
    bio: 'Douglas ensures every project runs smoothly from concept to completion.',
  },
  {
    id: '3',
    name: 'Ashley Smith',
    role: 'Interior Designer',
    image: '/assets/team/Ashley-Smith-Headshot.webp',
    bio: 'Ashley brings fresh perspectives and creative solutions to every design challenge.',
  },
]

export const testimonials = [
  {
    id: '1',
    quote: 'Eleena & Douglas are a joy to work with. The design was masterfully done. Not only did the project turn out beautifully, they exceeded all expectations. I learned so much from them during the process.',
    author: 'Jess S.',
    project: 'Spring Run Townhomes',
  },
  {
    id: '2',
    quote: 'We\'ve had such a great experience with Eleena and Parkway East Design. She makes the process so easy and FUN! Great follow through, follow-up, and seamless maneuvering around the delays and frustrations in the current industry.',
    author: 'Summer A.',
    project: 'Residence',
  },
]
