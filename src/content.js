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
      { id: '3d-modeling-sprint', name: '3D Modeling Sprint', poster: '/images/event-posters/3d-modeling-sprint.webp', registrationUrl: 'https://forms.gle/wTsRm9edzXumekyG8' },
      { id: 'project-expo', name: 'InnovateX', poster: '/images/event-posters/innovatex.webp', registrationUrl: 'https://forms.gle/dp7GrveHGXY6ghNa6' },
    ],
  },
  {
    id: 'battle-arena', name: 'Battle Arena Games', blurb: 'Bring your team. Take your place in the arena.', color: 'purple', image: 'card-esports.jpg', alt: 'Battle arena games artwork',
    items: [
      { id: 'bgmi', name: 'BGMI Championship', poster: '/images/event-posters/bgmi-championship.webp', registrationUrl: 'https://forms.gle/1E2ouFhJCPWAB5u9A' },
      { id: 'free-fire-max', name: 'Free Fire MAX', poster: '/images/event-posters/free-fire-max.webp', registrationUrl: 'https://forms.gle/CdB9wpx3X3x8bNAQ8' },
      { id: 'tekken', name: 'Tekken', poster: '/images/event-posters/tekken.webp', registrationUrl: 'https://forms.gle/5UaG9DcEdGb99WFX9' },
      { id: 'ludo', name: 'Ludo Mania: Clash of Dice', poster: '/images/event-posters/ludo-mania.webp', registrationUrl: 'https://forms.gle/iquFA2irhVguHwjE8' },
    ],
  },
  {
    id: 'competitions', name: 'Competitions', blurb: 'Step up, take on the challenge, and go for the win.', color: 'red', image: 'card-quiz.jpg', alt: 'Competition artwork',
    items: [
      { id: 'tech-quiz', name: 'Tech Trivia', poster: '/images/event-posters/tech-trivia.webp', registrationUrl: 'https://forms.gle/qRsCMmBgDnxo7m5b8' },
      { id: 'tech-charades', name: 'Tech Charades', poster: '/images/event-posters/tech-charades.webp', registrationUrl: 'https://forms.gle/ArD97Kz8E9nXfjgh6' },
      { id: 'slide-sizzle', name: 'Slide Sizzle', poster: '/images/event-posters/slide-sizzle.webp', registrationUrl: 'https://forms.gle/bKMjc6tqoiNj41TL7' },
      { id: 'tech-poster-making', name: 'That Tech Canvas', poster: '/images/event-posters/tech-canvas.webp', registrationUrl: 'https://forms.gle/JsB3cUa4id5xFfvf8' },
      { id: 'venture-vault', name: 'Venture Vault', poster: '/images/event-posters/venture-vault.webp', registrationUrl: 'https://forms.gle/nc3vDPg8b1sb2SaEA' },
      { id: 'brand-battle', name: 'Brand Battle', poster: '/images/event-posters/brand-battle.webp', registrationUrl: 'https://forms.gle/1xCHJM34nCiWrCQK7' },
      { id: 'aangan', name: 'Architectural Design Competition', poster: '/images/event-posters/architectural-design-competition.webp', registrationUrl: 'https://forms.gle/dqWLgr1HCdKnM5Ai8' },
      { id: 'biz-quest', name: "Biz' Quest", poster: '/images/event-posters/biz-quest.webp', registrationUrl: 'https://forms.gle/6RYLDRSTJ97je525A' },
    ],
  },
  {
    id: 'school-track', name: 'School Track', blurb: 'Bring bold ideas, share what you create, and take the stage.', color: 'cyan', image: 'card-workshops.jpg', alt: 'School track artwork',
    items: [
      { id: 'tech-debate', name: 'Tech Debate' },
      { id: 'startup-idea', name: 'Start-up Idea' },
      { id: 'school-exhibition', name: 'Exhibition' },
    ],
  },
]
