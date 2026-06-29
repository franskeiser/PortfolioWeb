export const FEATURED_PROJECTS = [
  {
    id: 'athletic-eats',
    title: 'AthleticEats',
    year: '2026',
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
      'Resume Roaster analyzes your resume with Google\'s Gemini models and gives you an honest technical critique. Instead of generic praise, it scores your resume, breaks the feedback down section by section, and gives you concrete action items. You can then export the whole roast as a clean PDF.',
      'I built it as two services that deploy independently. The frontend is a React and Vite single page app running on Vercel, and it talks over HTTPS to a Java 17 and Spring Boot 3.5 REST API on Railway. In production I use PostgreSQL, and for local development I run an H2 in-memory database so I can get started without any setup. The backend takes care of reading the resume in whatever format it comes in. It handles PDF, DOCX, and plain text using Apache PDFBox and POI, and it reads PNG and JPG images with Tess4J, which is Tesseract OCR running on the server. Once it has the text, it sends it to Gemini\'s generateContent endpoint for the analysis. I packaged the API with a multi stage Docker build that compiles the app and bundles the OCR engine, so every deploy is reproducible and the final image stays small.',
      'The frontend itself is a responsive Tailwind interface that walks you from upload to roast to export in one smooth flow, with cross origin access wired carefully between the two deployments. In the end it came together as a small but production shaped project, with decoupled services, configuration kept out of the code, a resilient connection to a third party API, and a real deliverable in the PDF export.',
    ],
    liveUrl: 'https://ai-resume-roaster-rho.vercel.app/',
    githubUrl: 'https://github.com/franskeiser/AI-Resume-Roaster',
  },
  {
    id: 'fleetwise',
    title: 'FleetWise',
    year: '2026',
    category: 'Full Stack / Mobile',
    shortDesc:
      'A fleet management system for a bus operation, built as a web dispatcher portal paired with an offline-first mobile driver app, with live vehicle telemetry flowing between them.',
    image: 'https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?w=800&q=80',
    tags: ['ASP.NET Core', '.NET MAUI', 'Blazor', 'C#', 'Supabase', 'SQL Server', 'QuestPDF'],
    story: [
      'FleetWise started from a question the team kept coming back to: how does a bus operation actually keep track of where its buses are, who is driving them, and whether anything is going wrong out on the road? The goal was to build the whole thing, not just one screen of it, so it was split into two apps that talk to each other. There is a web portal for the people in the office, the dispatchers and admins, and a mobile app that rides along with the driver.',
      'The web side is an ASP.NET Core app on .NET 10. It carries the pieces a real dispatcher would reach for: a live fleet map, a dispatch board, schedules, a vehicle roster with maintenance logs and pre-trip checklists, and user management with proper roles and permissions behind ASP.NET Identity. There is a fare calculator and a reports section that exports clean PDFs with QuestPDF. The part the team is most proud of is the telemetry pipeline. Every active trip streams its position, speed, and passenger count into a Supabase table, and the map just reads from there. In development a background simulator nudges each bus along its route every few seconds, but it was built to write to the exact same table real hardware would, so the read path never knows or cares whether the data is simulated. The day a real GPS unit shows up, nothing on the dashboard has to change.',
      'The mobile app is where it got interesting. It is a .NET MAUI Blazor Hybrid app, the driver-facing companion, and the hard constraint was simple: buses drive through dead zones. If the app only worked with a perfect connection, it was useless. So it was built offline-first. Every GPS reading and every trip the driver finishes gets written to a local SQLite queue first, so it survives a lost signal or the app being killed mid-route. A flush loop quietly pushes those rows up to Supabase whenever the connection comes back and deletes the local copy only once the server confirms it. Drivers log in with JWT sessions and get messages and notifications pushed to them while they drive.',
      'What FleetWise really taught the team is what it feels like to build a system instead of an app. Two codebases, a shared backend, real-time data, offline resilience, role-based access, and a reporting layer all had to agree on the same model of the world. Getting them to line up was a harder and more rewarding problem than any single feature.',
    ],
    githubUrl: 'https://github.com/aleahqnts/FleetWise',
  },
  {
    id: '2pac',
    title: '2PAC',
    year: '2026',
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
