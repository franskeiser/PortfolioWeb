export const FEATURED_PROJECTS = [
  {
    id: 'athletic-eats',
    title: 'AthleticEats',
    year: '2025',
    category: 'Full Stack',
    shortDesc:
      'A nutrition web app for athletes to discover high-protein recipes, plan daily meals, and calculate personalized macro and calorie targets — all in one place.',
    image: 'https://images.unsplash.com/photo-1490645935967-10de6ba17061?w=800&q=80',
    tags: ['HTML5', 'CSS3', 'Vanilla JS', 'PHP', 'MySQL', 'XAMPP'],
    story: [
      'I built AthleticEats from the ground up as a full-stack project without relying on any modern frameworks — just raw HTML, CSS, and vanilla JavaScript on the frontend, and PHP with MySQL on the backend.',
      'I started by designing the database schema and seeding it with 25+ athlete-focused recipes, then built a custom REST-like API layer in PHP using PDO for secure queries. The frontend came next: a home page with a live recipe carousel, a gallery with AJAX-powered search and category filters, a meal planner where users can build their daily schedule and watch macros update in real time, and a macro calculator using the Mifflin-St Jeor formula to generate personalized calorie targets.',
      'One of the more satisfying challenges was wiring the calculator\'s localStorage output into the meal planner so remaining macros update dynamically as meals are added. I also built a full admin panel for CRUD operations on the recipe database.',
      'The whole thing is served on a PHP/MySQL stack with no build tools or npm dependencies — just clean, intentional code.',
    ],
    liveUrl: 'http://athleticeats.freedev.app/Athletic-Eats/',
    githubUrl: 'https://github.com/franskeiser/Athletic-Eats',
  },
  {
    id: 'resume-roaster',
    title: 'Resume Roaster',
    year: '2026',
    category: 'Full Stack / AI',
    shortDesc:
      'AI-powered, no-BS resume feedback for tech professionals — upload your resume and get a brutally honest, technical critique with an overall score, section-by-section feedback, and concrete action items you can export as a PDF.',
    image: 'https://images.unsplash.com/photo-1586281380349-632531db7ed4?w=800&q=80',
    tags: ['Java', 'Spring Boot', 'React', 'Vite', 'Tailwind CSS', 'PostgreSQL', 'Gemini'],
    story: [
      'Resume Roaster analyzes your resume with Google\'s Gemini models and returns a brutally honest, technical critique. Instead of generic praise, it scores your resume, breaks down feedback section by section, and hands you concrete action items — then lets you export the whole roast as a polished PDF.',
      'I built it as two independently deployed services: a React + Vite SPA on Vercel talking over HTTPS to a Java 17 / Spring Boot 3.5 REST API on Railway, with PostgreSQL in production (and H2 in-memory for local dev). The backend handles multi-format ingestion — PDF, DOCX, and plain text via Apache PDFBox and POI, plus PNG/JPG images through Tess4J (Tesseract) on-device OCR — extracts the text, and sends it to Gemini\'s generateContent endpoint for analysis.',
      'A few things I focused on: the Gemini model is fully configurable from an environment variable, so I can swap models without touching code; the AI client retries with backoff to gracefully ride out transient rate-limit and overload errors; and the report generation produces a clean, downloadable PDF of the critique. The frontend is a responsive Tailwind UI that walks the user from upload to roast to export in one flow.',
    ],
    liveUrl: 'https://ai-resume-roaster-rho.vercel.app/',
    githubUrl: 'https://github.com/franskeiser/AI-Resume-Roaster',
  },
  {
    id: '2pac',
    title: '2PAC',
    year: '2025',
    category: 'Game Dev / AI',
    shortDesc:
      'A 2-player cooperative Pac-Man game where players are linked by an energy tether and ghost enemies are driven by a trained Deep Q-Network AI.',
    image: 'https://images.unsplash.com/photo-1550745165-9bc0b252726f?w=800&q=80',
    tags: ['Unity 6', 'C#', 'PyTorch', 'ONNX', 'Weighted A*', 'Vercel'],
    story: [
      'We started with a simple question: what if Pac-Man forced two players to actually depend on each other? That became the tether — a visible energy link connecting both players that isn\'t just cosmetic. It has three states: blue (close together = speed boost + 1.5x score), yellow (stable but no buffs), and red (danger zone, snap timer starts). If the tether breaks, both players get stunned and lose a life. That one mechanic shaped every other design decision.',
      'The biggest technical challenge was the ghost AI. We didn\'t want ghosts that just followed a script — we trained a Deep Q-Network in Python using PyTorch, where each ghost observes 24 values about the game state (player positions, tether charge, power-up status) and picks from 6 actions: patrol, chase Player 1, chase Player 2, cut the tether, flee the shockwave, or flee when players are powered. The trained model gets exported to ONNX and runs natively inside Unity at runtime via the AI Inference Engine — no Python needed to play.',
      'Navigation uses Weighted A* on the tilemap grid, where tiles near the shockwave danger zone cost 3× more — so ghosts automatically route around hazards without being explicitly programmed to. The cooperative power-up system required each player to eat one of a matching pair of fruits (you can\'t eat both), forcing real coordination. Level completion also requires both players to hold buttons simultaneously and enter the exit door together. Everything is designed so one player can\'t just carry the other. We built and deployed the whole thing as a WebGL build on Vercel so anyone can play in a browser.',
    ],
    liveUrl: 'https://2pac-game.vercel.app',
    githubUrl: 'https://github.com/NyolanEly/2PAC',
  },
];

export const ARCHIVE_PROJECTS = [...FEATURED_PROJECTS];
