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

// Event facts and rules transcribed from the Genesis 2.0 Rulebook.
export const eventInformation = {
  'vibe-coding': {
    facts: [['FORMAT', 'Solo or duo'], ['ENTRY FEE', '₹50 per person'], ['PRIZES', '1st: ₹3,100; 2nd: ₹2,100, trophies and certificates'], ['DATE & TIME', '31 October 2026 · 10:00 AM–3:00 PM'], ['VENUE', 'Room 112, GIET']],
    notes: [['Theme', 'Cybersecurity, research, education and e-commerce']],
    coordinators: 'Shivam (8708669220), Sonal, Nancy and Nisha',
    head: 'Aayush (9811852293), Harshit (8287861136)',
    faculty: 'Ms. Namrata',
    sections: [
      { title: 'Rules & instructions', items: ['Teams may have a maximum of two students.', 'AI coding tools are permitted.', 'Build the solution during the competition; pre-built projects cannot be submitted as original work.', 'Demonstrate all mandatory features. Judges may ask teams to explain, test or modify code.', 'Use sample or synthetic data. Do not upload confidential or personal information to public AI tools.', 'Disclose major limitations and test the application before the demonstration.'] },
      { title: 'Judging criteria', items: ['Innovation and problem-solving — 20%', 'Functional implementation — 25%', 'AI integration and prompt engineering — 20%', 'UI/UX and user experience — 10%', 'Testing, reliability and code understanding — 15%', 'Presentation and demonstration — 10%'] },
    ],
  },
  'project-expo': {
    facts: [['FORMAT', 'Team of 1–3'], ['ENTRY FEE', '₹50 per team member'], ['PRIZES', '1st: ₹2,100; 2nd: ₹1,100, trophies and certificates'], ['DATE & TIME', '30 October 2026 · 11:00 AM–3:00 PM'], ['VENUE', 'Room 112, GIET']],
    notes: [['Category', 'College-level technical project exhibition'], ['Theme', 'Innovation, technology, creativity and problem-solving'], ['Bring', 'Your own laptop. Topics are announced on the spot.']],
    coordinators: 'Lakshay Antil (7015886701), Rajat (8168702481)',
    head: 'Aayush (9811852293), Harshit (8287861136)',
    faculty: 'Mr. Anil Arora, Mr. Vikas Kuchhal',
    sections: [
      { title: 'Rules & instructions', items: ['Teams must have one to three members.', 'Report at least 15 minutes before the start and bring a valid institute ID; entry without ID is not allowed.', 'Specific technical or creative topics will be announced at the venue.', 'Round 1 is two hours. Shortlisted teams get one hour for Round 2.', 'Registration fees are non-refundable.'] },
      { title: 'Evaluation criteria', items: ['Relevance to the technical theme', 'Creativity and originality', 'Artistic quality and layout', 'Clarity of the technical message', 'Clarity, confidence and precision during the 1–2 minute judge interaction'] },
    ],
  },
  'cyber-crime-investigator': {
    facts: [['FORMAT', 'Solo'], ['ENTRY FEE', '₹50'], ['PRIZES', '1st: ₹2,100; 2nd: ₹1,100, trophies and certificates'], ['DATE & TIME', '30 October 2026 · 11:00 AM–1:00 PM'], ['VENUE', 'Room 204B, GIET']],
    notes: [['Focus', 'Cybercrime investigation using Linux commands, digital investigation and OverTheWire-style CTF problem-solving']],
    coordinators: 'Kritika, Gauri Chawla',
    head: 'Aayush (9811852293), Harshit (8287861136)',
    faculty: 'Ms. Leesha',
    sections: [
      { title: 'Rules & instructions', items: ['Compete individually and report at least 15 minutes before the start.', 'Follow each challenge’s instructions and time limits.', 'Solve assigned challenges using appropriate Linux commands and cybersecurity tools and techniques.', 'Each challenge has a point value. Points are awarded for correct solutions and valid flags or answers.', 'Organizers may provide hints at their discretion; hints may result in point deductions.', 'Do not share flags, solutions or answers during the event, or interfere with another participant’s account, files or challenge environment.', 'Rule violations may lead to disqualification. Organizer decisions on scoring and disputes are final.'] },
      { title: 'Winning conditions', items: ['The participant with the highest total score across all challenges wins.', 'Points are awarded for correct flags and verified solutions; incorrect submissions receive no points.', 'In a tie, the participant who reaches the final score first wins.'] },
    ],
  },
  'ui-ux-design': {
    facts: [['FORMAT', 'Solo or duo'], ['ENTRY FEE', '₹50 per person'], ['PRIZES', '1st: ₹2,100; 2nd: ₹1,100, trophies and certificates'], ['DATE & TIME', '30 October 2026 · 1:00 PM–4:00 PM'], ['VENUE', 'Room 107, GIET']],
    coordinators: 'Anoop (9253581935), Palak Sharma',
    head: 'Aayush (9811852293), Harshit (8287861136)',
    faculty: 'Ms. Priya',
    sections: [
      { title: 'Schedule & rules', items: ['Verification and briefing: 10 minutes; problem statement: 5 minutes; design and development: 100 minutes; submission: 10 minutes; presentations and jury: 55 minutes.', 'The problem statement is announced at the start and is the same for everyone.', 'Figma, Penpot, AI coding tools, HTML, CSS, JavaScript, React and similar tools are allowed. Paid subscriptions are not required.', 'AI use is allowed. Review and test AI-generated work and be ready to explain it.', 'Complete pre-built templates, previous projects and purchased submissions are prohibited. Component libraries, fonts and icons are allowed.', 'Disclose significant AI tools, external assets, libraries and components used.', 'Submit through the official channel announced at the event. The deadline is strict; late submissions may be rejected or penalized.', 'Each team presents for about three minutes, followed by about two minutes of jury questions, and demonstrates the main user journey.', 'Plagiarism, false details, unauthorized access to another team’s files, impersonation, cheating or serious misconduct may result in disqualification.'] },
      { title: 'Judging criteria', items: ['UX, usability and problem-solving — 25 marks', 'UI quality and visual design — 20 marks', 'Creativity and innovation — 15 marks', 'Prototype functionality and interactions — 15 marks', 'Accessibility and responsiveness — 10 marks', 'Design consistency and component quality — 5 marks', 'Presentation and design rationale — 10 marks', 'Tie-break: higher UX score, then prototype functionality, then a documented jury decision. The top three teams are recognized.'] },
    ],
  },
  '3d-modeling-sprint': {
    facts: [['FORMAT', 'Solo'], ['ENTRY FEE', '₹50'], ['PRIZES', '1st: ₹2,100; 2nd: ₹1,100, trophies and certificates'], ['DATE & TIME', '31 October 2026 · 10:00 AM–3:00 PM'], ['VENUE', 'Room 112, GCAD']],
    notes: [['Eligibility', 'B.Arch students in 1st–3rd year'], ['Description', 'Create a 3D architectural model using SketchUp, Revit or another approved modelling tool.']],
    coordinators: 'Ayush Kumar Srivastava (9555916493), Gaurav Aggarwal (9371186226)',
    faculty: 'Ar. Gurdeep Bagga, Ar. Arya Nair',
    sections: [
      { title: 'Rules & instructions', items: ['Participation is individual and open to B.Arch students in 1st–3rd year.', 'The design brief is shared at the event.', 'Bring your own laptop and prepare a digital 3D architectural model based on the given theme and brief.'] },
      { title: 'Evaluation', items: ['Models are evaluated on quality, creativity, accuracy and relevance to the given theme and design brief.'] },
    ],
  },
  'venture-vault': {
    facts: [['FORMAT', 'Solo or duo'], ['ENTRY FEE', '₹50 per person'], ['PRIZES', '1st: ₹2,100; 2nd: ₹1,100, trophies and certificates'], ['DATE & TIME', '30 October 2026 · 10:00 AM–1:30 PM'], ['VENUE', 'Room 403, GIET']],
    notes: [['Theme', 'Think it. Pitch it. Win it.']],
    coordinators: 'Garvita, Kashish',
    head: 'Aayush (9811852293), Harshit (8287861136)',
    faculty: 'Ms. Savita, Dr. Surbhi',
    sections: [
      { title: 'Rules & instructions', items: ['Participate individually or in a team of two.', 'Present an original business idea, startup concept or innovative solution.', 'Cover the idea, target audience, unique selling proposition (USP), revenue model and marketing strategy.', 'Each team gets 3–5 minutes to pitch, followed by a two-minute Q&A.', 'Every team member must contribute. Plagiarism or copying another idea is prohibited.', 'Maintain discipline and respect the judges’ decisions.'] },
      { title: 'Judging criteria', items: ['Innovation and originality — 25%', 'Business feasibility — 25%', 'Marketing and revenue strategy — 20%', 'Presentation skills — 20%', 'Confidence and teamwork — 10%'] },
    ],
  },
  'tech-quiz': {
    facts: [['FORMAT', 'Solo; team mode may be announced by organizers'], ['ENTRY FEE', '₹50 per person'], ['PRIZES', '1st: ₹2,100; 2nd: ₹1,100, trophies and certificates'], ['DATE & TIME', '30 October 2026 · 10:30 AM–12:30 PM'], ['VENUE', 'Room 203, GIET']],
    notes: [['Theme', 'Technical knowledge, innovation and general IT awareness']],
    coordinators: 'Nisha Saini, Riya Singh',
    head: 'Aayush (9811852293), Harshit (8287861136)',
    faculty: 'Ms. Priya Tyagi, Ms. Nutan Khushik',
    sections: [
      { title: 'Rules & instructions', items: ['Report at least 15 minutes before the event.', 'Round 1 is an objective OMR-based test. Mark one option per question as instructed and submit the OMR sheet within the allotted time.', 'The quiz covers programming, computer science, technology and general IT awareness.', 'Participants who qualify advance to later rounds under the organizers’ selection criteria.', 'Follow the quizmaster’s instructions. Phones, internet searches and outside help are prohibited unless organizers permit them.', 'Maintain discipline. Unfair means or misconduct may result in immediate disqualification. The quizmaster and organizing committee have the final say.', 'The registration fee is non-refundable.'] },
      { title: 'Winning conditions', items: ['Results consider answer correctness, OMR round performance, speed and accuracy in later rounds, technical knowledge, logical thinking and overall performance.', 'A tie-breaker may be used if required.'] },
    ],
  },
  'brand-battle': {
    facts: [['FORMAT', 'Solo or duo'], ['ENTRY FEE', '₹50 per person'], ['PRIZES', '1st: ₹2,100; 2nd: ₹1,100, trophies and certificates'], ['DATE & TIME', '30 October 2026 · 11:30 AM–1:30 PM'], ['VENUE', 'Room 404, GIET']],
    coordinators: 'Prachi, Khushi',
    head: 'Aayush (9811852293), Harshit (8287861136)',
    faculty: 'Ms. Savita, Dr. Surbhi',
    sections: [
      { title: 'Rules & instructions', items: ['Participate individually or in a team of two.', 'An event product is assigned on the spot. Create a brand presentation, advertisement, slogan or promotional campaign.', 'Highlight the brand’s strengths, target market, USP and competitive advantage.', 'Each team gets 25 minutes to present its campaign.', 'Teams may be asked to compare their brand with a competitor and explain why customers should choose theirs.', 'Offensive content, false claims and disrespectful remarks about competitors are prohibited.', 'Judges may ask questions about marketing knowledge and strategic thinking.'] },
      { title: 'Judging criteria', items: ['Creativity and originality — 25%', 'Marketing strategy — 25%', 'Brand positioning and USP — 20%', 'Presentation and persuasion — 20%', 'Teamwork and confidence — 10%'] },
    ],
  },
  'tech-charades': {
    facts: [['FORMAT', 'Duo'], ['ENTRY FEE', '₹100'], ['PRIZES', '1st: ₹2,100; 2nd: ₹1,100, trophies and certificates'], ['DATE & TIME', '30 October 2026 · 12:00 PM–2:00 PM'], ['VENUE', 'Room 206, GIET']],
    coordinators: 'Tamanna, Sneha',
    head: 'Aayush (9811852293), Harshit (8287861136)',
    faculty: 'Ms. Rachna Dhaka, Ms. Hema Arora',
    sections: [
      { title: 'How to play & rules', items: ['Teams pick a slip containing a technical word, term, device, programming concept or technology prompt.', 'One teammate acts while the other guesses within the time limit announced by organizers. Organizers may direct teams to switch roles or move to the next slip.', 'Only gestures and actions are allowed. Speaking, whispering, mouthing, spelling, making letter or number shapes, or showing the slip is prohibited.', 'Phones, internet searches and outside assistance are not allowed during a turn.', 'Do not distract other teams or reveal prompts while a round is in progress.', 'Unfair practice may result in a warning, point loss or disqualification.'] },
      { title: 'Winning conditions', items: ['Correct guesses earn points under the announced scoring system. Skipped or unanswered slips are scored as organizers direct.', 'The team with the highest total score wins. A tie-breaker question or slip may be used.', 'Organizer decisions on scores, eligibility and results are final.'] },
    ],
  },
  'aangan': {
    facts: [['FORMAT', 'Group of 3'], ['ENTRY FEE', '₹150'], ['PRIZES', '1st: ₹5,100; 2nd: ₹3,100, trophies and certificates'], ['DATE & TIME', '31 October 2026 · 9:00 AM–12:00 PM'], ['VENUE', 'Room 113, GCAD']],
    notes: [['Eligibility', 'B.Arch students in 3rd–5th year'], ['Theme', 'Aangan — Spaces for Learning'], ['Problem statement', 'Design an affordable, climate-responsive primary school for rural India.']],
    coordinators: 'Gauri Verma, Aayushi Adapala',
    head: 'Ayush Kumar Srivastava (9555916493)',
    faculty: 'Ar. Rajeev Sharma, Ar. Disha Biswas',
    sections: [
      { title: 'Rules & instructions', items: ['Participate in groups of three; the competition is open to B.Arch students in 3rd–5th year.', 'The design brief is shared three days before the event.', 'Bring your own laptops and model-making materials.', 'Proposals must address the theme, problem statement, site and design brief.'] },
      { title: 'Evaluation', items: ['Proposals are evaluated on quality, creativity and relevance to the theme, site and design brief.'] },
    ],
  },
  'biz-quest': {
    facts: [['FORMAT', 'Duo'], ['ENTRY FEE', '₹100'], ['PRIZES', '1st: ₹2,100; 2nd: ₹1,100, trophies and certificates'], ['DATE & TIME', '31 October 2026 · 10:30 AM–1:30 PM'], ['VENUE', 'Room 404, GIET']],
    notes: [['Theme', 'Decode Business. Discover Success!']],
    coordinators: 'Siya, Chavi',
    head: 'Aayush (9811852293), Harshit (8287861136)',
    faculty: 'Ms. Savita, Dr. Surbhi',
    sections: [
      { title: 'Rules & instructions', items: ['Teams must have exactly two members.', 'The competition may include three rounds: Business Brainstorm, Brand Detective and Biz on the Clock.', 'Phones, internet searches and outside assistance are not permitted unless organizers specifically allow them.', 'A tie-breaker round decides ties. Judges’ and event coordinators’ decisions are final.', 'All participants must arrive on time with a school or college ID, respect others and follow organizer instructions and time limits. Cheating, misconduct or disruption may lead to disqualification.'] },
      { title: 'Judging', items: ['Participants are evaluated on marks.'] },
    ],
  },
  'slide-sizzle': {
    facts: [['FORMAT', 'Solo or duo'], ['ENTRY FEE', '₹50 per person'], ['PRIZES', '1st: ₹2,100; 2nd: ₹1,100, trophies and certificates'], ['DATE & TIME', '31 October 2026 · 11:00 AM–1:00 PM'], ['VENUE', 'DCS 206, GIET']],
    coordinators: 'Harsh (8685815676), Khushi',
    head: 'Aayush (9811852293), Harshit (8287861136)',
    faculty: 'Mr. Vikas Kuchhal, Ms. Harsha',
    sections: [
      { title: 'Rules & instructions', items: ['Report at least 15 minutes before the event.', 'Prepare a PowerPoint presentation on a selected or assigned topic as organizers direct. Each presentation is limited to 10 minutes.', 'Bring the presentation in PPT/PPTX format and keep a backup copy.', 'Relevant images, charts, diagrams, animations and other visual elements are allowed.', 'Presentations must be original; credit copied content. Offensive content, fabricated information, plagiarism and unauthorized help are prohibited.', 'Maintain professional conduct and follow the presentation order and organizer instructions.', 'Exceeding the time limit or breaking rules may result in mark deductions or disqualification. The judging panel’s decision is final.'] },
      { title: 'Judging criteria', items: ['Content and subject knowledge', 'Creativity and originality', 'Slide design and visual appeal', 'Confidence and audience engagement', 'Clarity, communication and delivery', 'Time management'] },
    ],
  },
  'tech-poster-making': {
    facts: [['FORMAT', 'Solo or duo'], ['ENTRY FEE', '₹50 per person'], ['PRIZE', '1st: ₹1,100, trophies and certificates'], ['DATE & TIME', '31 October 2026 · 9:30 AM–11:00 AM'], ['VENUE', 'Room 306, GIET']],
    notes: [['Theme', 'Viksit Bharat 2047: Engineering the Future']],
    coordinators: 'Nikhil Sharma (805923790), Bhumi',
    head: 'Aayush (9811852293), Harshit (8287861136)',
    faculty: 'Ms. Anita',
    sections: [
      { title: 'Rules & instructions', items: ['Participate individually or in a duo and report at least 15 minutes before the start.', 'Poster-making time is 1 hour 30 minutes. Official drawing or chart sheets are provided.', 'Bring your own sketching, coloring and drawing materials, such as paints, brushes, sketch pens, markers, pencils, erasers and rulers.', 'Only manual painting, sketching and calligraphy are allowed. Pre-printed cut-outs, digital printouts, stickers, stencils and pre-drawn tracings are prohibited.', 'No outside help, internet searches or digital devices. Violations result in immediate disqualification.', 'Registration fees are non-refundable.'] },
      { title: 'Evaluation criteria', items: ['Relevance to the Viksit Bharat 2047 theme', 'Creativity and originality', 'Artistic quality and layout', 'Clarity of the technical message', 'Clarity, confidence and precision during the 1–2 minute judge interaction'] },
    ],
  },
  'bgmi': {
    facts: [['FORMAT', 'Squad of exactly 4 players'], ['DEVICE', 'Mobile only'], ['ENTRY FEE', '₹200 per squad'], ['PRIZES', '1st: ₹3,100; 2nd: ₹2,100, trophies and certificates'], ['DATE & TIME', '30 October 2026 · 9:30 AM onwards; final on 31 October'], ['VENUE', 'Room 206, GCAD']],
    coordinators: 'Md. Moddsir Ansari (8298805741), Yash Sharma (8278954005)',
    head: 'Aayush (9811852293), Harshit (8287861136)',
    faculty: 'Mr. Ashish Aggarwal, Mr. Raman',
    sections: [
      { title: 'Rules & instructions', items: ['Each squad must have exactly four players; substitutes are not allowed. Report 30 minutes early with a valid college ID.', 'Bring your own phone, charger, earphones and internet connection. Organizers are not responsible for device or network issues.', 'Only mobile phones are allowed. Emulators, tablets, triggers and controllers are prohibited.', 'Use the latest BGMI version and make sure in-game names match the registration form.', 'Custom rooms use TPP Squad mode on Erangel, Miramar, Rondo and Sanhok. Room ID and password are shared before each match.', 'Round 1 on 30 October has six matches; the top 16 squads qualify. The final on 31 October has 3–6 matches.', 'Hacks, scripts, modified apps, teaming between squads, glitch abuse and stream sniping result in immediate disqualification.', 'A disconnected player’s match is not restarted; the squad continues with remaining players. Stay seated and do not talk to other squads during matches.', 'Abusive language, toxic behavior or arguing with organizers may lead to penalties or disqualification. Coordinator and faculty decisions are final. Organizers may adjust schedule or format based on registration and available time; the prize pool may increase.'] },
      { title: 'Winning conditions', items: ['The official BGMI Esports points system applies: placement points plus one point per finish.', 'The top 16 squads after Round 1 qualify for the final. The squad with the highest final total wins.', 'Ties follow official BGMI Esports tie-breaker rules.'] },
    ],
  },
  'free-fire-max': {
    facts: [['FORMAT', 'Squad of exactly 4 players'], ['DEVICE', 'Mobile only'], ['ENTRY FEE', '₹200 per squad'], ['PRIZES', '1st: ₹3,100; 2nd: ₹2,100, trophies and certificates'], ['DATE & TIME', '30 October 2026 · 9:30 AM onwards'], ['VENUE', 'Room 209, GCAD']],
    coordinators: 'Aditya Kumar Upadhyay (8969595221), Zafar (9106743489)',
    faculty: 'Mr. Deepak, Ms. Mansi',
    sections: [
      { title: 'Rules & instructions', items: ['Each squad must have exactly four players; substitutes are not allowed. Report 30 minutes early with a valid college ID.', 'Bring your own phone, charger, earphones and internet connection. Organizers are not responsible for device or network issues.', 'Only mobile phones are allowed. Emulators, tablets, triggers and controllers are prohibited.', 'Use the latest Free Fire MAX version and match in-game names to the registration form.', 'Play Battle Royale Squad custom rooms on Bermuda, Purgatory, Kalahari and other maps. Gun attributes are off; room credentials are shared before each match.', 'The tournament is a single round of six matches.', 'Hacks, scripts, modified apps, teaming between squads, glitch abuse and stream sniping lead to immediate disqualification.', 'A disconnected player’s match is not restarted; the squad continues with remaining players. Stay seated and do not talk to other squads during matches.', 'Abusive language, toxic behavior or arguing with organizers may lead to penalties or disqualification. Coordinator and faculty decisions are final. Organizers may adjust schedule or format based on registrations and available time.'] },
      { title: 'Winning conditions', items: ['The official Free Fire Esports points system applies: placement points plus one point per kill.', 'The squad with the highest total across all six matches wins.', 'Ties follow official Free Fire Esports tie-breaker rules.'] },
    ],
  },
  'tekken': {
    facts: [['FORMAT', 'Solo · 1 vs 1'], ['DEVICE', 'Console or PC, depending on availability'], ['ENTRY FEE', '₹50'], ['PRIZE', '1st: ₹1,100, trophies and certificates'], ['DATE & TIME', '31 October 2026 · 9:30 AM onwards'], ['VENUE', 'Room 210, GCAD']],
    coordinators: 'Harshit (8287861136), Aayush (9811852293)',
    faculty: 'Mr. Bhupendar',
    sections: [
      { title: 'Rules & instructions', items: ['Report 30 minutes before the start with a valid college ID.', 'Tekken 7 or Tekken 8 is played, depending on availability, using the version provided by organizers.', 'Default settings: three rounds per game with a 60-second timer.', 'Controllers are provided. Players may bring a wired controller or arcade stick; wireless controllers, macros and turbo buttons are prohibited.', 'The tournament is single elimination. Each match is best of three games; the final is best of five.', 'The winner keeps the same character; the loser may change before the next game. Stages are selected at random.', 'Pausing a game loses the round unless the opponent agrees the pause was accidental.', 'If the game disconnects or the device crashes, replay with the same characters.', 'Be ready when called. A player who does not appear within five minutes forfeits the match.', 'Abusive language, unsportsmanlike behavior or arguing with organizers may lead to penalties or disqualification. Coordinator and faculty decisions are final. Organizers may change the bracket or format depending on entries and available time.'] },
      { title: 'Winning conditions', items: ['Players advance through the bracket by winning their matches.', 'The final winner is champion; the finalist is runner-up.'] },
    ],
  },
  'ludo': {
    facts: [['FORMAT', 'Solo'], ['DEVICE', 'Mobile · Ludo King'], ['ENTRY FEE', '₹50'], ['PRIZE', '1st: ₹1,100 and certificates'], ['DATE & TIME', '30 October 2026 · 10:00 AM onwards'], ['VENUE', 'DCS 206']],
    coordinators: 'Ankit (9289550809), Tanisha',
    head: 'Aayush (9811852293), Harshit (8287861136)',
    faculty: 'Ms. Mohini, Ms. Ruby',
    sections: [
      { title: 'Rules & instructions', items: ['Report 15 minutes early with a valid college ID.', 'Bring your own phone with Ludo King installed and updated, plus a charger and internet connection.', 'Matches are played in private rooms created by organizers; room codes are shared before each match.', 'Each match has four players in Classic mode. Match winners advance through 3–4 rounds, depending on registrations.', 'Use your own account and device. If disconnected, the match continues without a restart.', 'Hacks, modified apps, screen sharing or outside help during a match result in immediate disqualification.', 'Stay seated at the venue and join when called. A player who does not join within five minutes forfeits.', 'Coordinator decisions are final.'] },
      { title: 'Winning conditions', items: ['Standard Ludo King rules apply. The first player to bring all four tokens home wins the match and advances.', 'The winner of the final is champion; the finalist is runner-up.'] },
    ],
  },
}

export const generalEventRules = [
  'Report to the venue on time and carry a valid school or college ID.',
  'Respect fellow participants, judges, volunteers and faculty.',
  'Cheating, misconduct or disruption may result in disqualification.',
  'Follow organizer instructions and announced time limits.',
  'Certificates and prizes are awarded according to the event’s declared results.',
  'The organizing committee makes final decisions about unforeseen situations.',
]
