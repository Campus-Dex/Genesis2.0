// Confirmed details from the Genesis 2.0 event poster. Organizer links and a detailed timetable are not yet available.
export const fest = {
  name: 'GENESIS',
  year: '2.0',
  dateLabel: '30–31 OCTOBER, 2026',
  venue: 'Delhi-NCR, Sonipat',
  host: 'Gateway Education',
  registerUrl: '/?page=explore',
}

export const description = [
  { label: 'BUILD', text: 'Bring your ideas to life. Make something worth showing off.' },
  { label: 'LEARN', text: 'Meet curious minds, try something new, and leave with fresh skills.' },
  { label: 'COMPETE + COLLABORATE', text: 'Find your people, join the challenge, and make your move.' },
]

// Event posters are stored as optimized WebP files in /images/event-posters/.
export const events = [
  {
    id: 'technical', name: 'Technical Events', blurb: 'Build, solve, experiment, and show what you can do.', color: 'blue', image: 'card-robotics.jpg', alt: 'Technical event artwork',
    items: [
      { id: 'vibe-coding', name: 'Vibeathon', poster: '/images/event-posters/vibeathon.webp' },
      { id: 'ui-ux-design', name: 'Pixel Perfect', poster: '/images/event-posters/pixel-perfect.webp' },
      { id: 'cyber-crime-investigator', name: 'Cyber Sleuths', poster: '/images/event-posters/cyber-sleuths.webp' },
      { id: '3d-modeling-sprint', name: '3D Modeling Sprint' },
    ],
  },
  {
    id: 'battle-arena', name: 'Battle Arena Games', blurb: 'Bring your team. Take your place in the arena.', color: 'purple', image: 'card-esports.jpg', alt: 'Battle arena games artwork',
    items: [
      { id: 'bgmi', name: 'BGMI Championship', poster: '/images/event-posters/bgmi-championship.webp', registrationUrl: 'https://forms.gle/1E2ouFhJCPWAB5u9A' },
      { id: 'free-fire-max', name: 'Free Fire MAX' },
      { id: 'tekken', name: 'Tekken' },
      { id: 'ludo', name: 'Ludo' },
    ],
  },
  {
    id: 'competitions', name: 'Competitions', blurb: 'Step up, take on the challenge, and go for the win.', color: 'red', image: 'card-quiz.jpg', alt: 'Competition artwork',
    items: [
      { id: 'tech-quiz', name: 'Tech Trivia', poster: '/images/event-posters/tech-trivia.webp' },
      { id: 'tech-charades', name: 'Tech Charades', poster: '/images/event-posters/tech-charades.webp' },
      { id: 'slide-sizzle', name: 'Slide Sizzle', poster: '/images/event-posters/slide-sizzle.webp' },
      { id: 'tech-poster-making', name: 'Tech Poster Making' },
      { id: 'venture-vault', name: 'Venture Vault' },
      { id: 'brand-battle', name: 'Brand Battle' },
      { id: 'aangan', name: 'Aangan' },
      { id: 'biz-quest', name: "Biz' Quest" },
    ],
  },
  {
    id: 'exhibitions', name: 'Exhibitions', blurb: 'Explore ideas and projects from across campus.', color: 'cyan', image: 'card-expo.jpg', alt: 'Exhibition artwork',
    items: [{ id: 'project-expo', name: 'InnovateX', poster: '/images/event-posters/innovatex.webp' }],
  },
  {
    id: 'school-track', name: 'School Track', blurb: 'Bring bold ideas, share what you create, and take the stage.', color: 'yellow', image: 'card-workshops.jpg', alt: 'School track artwork',
    items: [
      { id: 'tech-debate', name: 'Tech Debate' },
      { id: 'startup-idea', name: 'Start-up Idea' },
      { id: 'school-exhibition', name: 'Exhibition' },
    ],
  },
]
