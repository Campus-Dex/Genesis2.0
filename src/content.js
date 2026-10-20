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
      { id: 'vibe-coding', name: 'Vibeathon', poster: '/images/event-posters/vibeathon.webp', registrationUrl: 'https://forms.gle/dtyDXF1P8yURqWcP8' },
      { id: 'ui-ux-design', name: 'Pixel Perfect', poster: '/images/event-posters/pixel-perfect.webp', registrationUrl: 'https://forms.gle/7wSW1rswfWCWKW4y7' },
      { id: 'cyber-crime-investigator', name: 'Cyber Sleuths', poster: '/images/event-posters/cyber-sleuths.webp', registrationUrl: 'https://forms.gle/eHphSNYM2k3cZEV9A' },
      { id: '3d-modeling-sprint', name: '3D Modeling Sprint' },
    ],
  },
  {
    id: 'battle-arena', name: 'Battle Arena Games', blurb: 'Bring your team. Take your place in the arena.', color: 'purple', image: 'card-esports.jpg', alt: 'Battle arena games artwork',
    items: [
      { id: 'bgmi', name: 'BGMI Championship', poster: '/images/event-posters/bgmi-championship.webp', registrationUrl: 'https://forms.gle/1E2ouFhJCPWAB5u9A' },
      { id: 'free-fire-max', name: 'Free Fire MAX', registrationUrl: 'https://forms.gle/CdB9wpx3X3x8bNAQ8' },
      { id: 'tekken', name: 'Tekken' },
      { id: 'ludo', name: 'Ludo Mania: Clash of Dice', registrationUrl: 'https://forms.gle/iquFA2irhVguHwjE8' },
    ],
  },
  {
    id: 'competitions', name: 'Competitions', blurb: 'Step up, take on the challenge, and go for the win.', color: 'red', image: 'card-quiz.jpg', alt: 'Competition artwork',
    items: [
      { id: 'tech-quiz', name: 'Tech Trivia', poster: '/images/event-posters/tech-trivia.webp', registrationUrl: 'https://forms.gle/qRsCMmBgDnxo7m5b8' },
      { id: 'tech-charades', name: 'Tech Charades', poster: '/images/event-posters/tech-charades.webp', registrationUrl: 'https://forms.gle/ArD97Kz8E9nXfjgh6' },
      { id: 'slide-sizzle', name: 'Slide Sizzle', poster: '/images/event-posters/slide-sizzle.webp', registrationUrl: 'https://forms.gle/bKMjc6tqoiNj41TL7' },
      { id: 'tech-poster-making', name: 'Tech Canvas', registrationUrl: 'https://forms.gle/JsB3cUa4id5xFfvf8' },
      { id: 'venture-vault', name: 'Venture Vault', registrationUrl: 'https://forms.gle/nc3vDPg8b1sb2SaEA' },
      { id: 'brand-battle', name: 'Brand Battle', registrationUrl: 'https://forms.gle/1xCHJM34nCiWrCQK7' },
      { id: 'aangan', name: 'Aangan' },
      { id: 'biz-quest', name: "Biz' Quest", registrationUrl: 'https://forms.gle/6RYLDRSTJ97je525A' },
    ],
  },
  {
    id: 'exhibitions', name: 'Exhibitions', blurb: 'Explore ideas and projects from across campus.', color: 'cyan', image: 'card-expo.jpg', alt: 'Exhibition artwork',
    items: [{ id: 'project-expo', name: 'InnovateX', poster: '/images/event-posters/innovatex.webp', registrationUrl: 'https://forms.gle/dp7GrveHGXY6ghNa6' }],
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
