export const FEATURED_PROJECTS = [
  {
    id: 'athletic-eats',
    title: 'AthleticEats',
    year: '2026',
    category: 'Full Stack',
    shortDesc:
      'A nutrition web app for athletes to discover high-protein recipes, plan daily meals, and calculate personalized macro and calorie targets — all in one place.',
    image: './../assets/projects/athletic-eats.png',
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
    id: 'luma',
    title: 'LUMA Analyzer',
    year: '2026',
    category: 'Language / Compiler',
    shortDesc:
      'A web-based analyzer for LUMA, a custom beginner-friendly OOP language the team designed. Paste or upload source code and it runs full lexical and syntax analysis, breaking the code into tokens and flagging grammar errors line by line.',
    image: 'https://images.unsplash.com/photo-1542831371-29b0f74f9713?w=800&q=80',
    tags: ['Java 21', 'Spring Boot', 'React', 'Lexical Analysis', 'LL(1) Parser', 'Compiler Design'],
    story: [
      'LUMA, short for Language Under Minimal Ambiguity, began with a frustration the team had all felt as students. Learning to code usually means choosing between the heavy, verbose syntax of Java and the strict, invisible indentation rules of Python. LUMA was the group\'s answer to that: a custom object-oriented language that keeps the readability of Python and the structure of Java while dropping the boilerplate that scares beginners away. The motto says it best, code that shines.',
      'This repository is the tool that makes the language real. Designing a language on paper is one thing, but the team wanted something you could actually type code into and watch get analyzed. So it was built as a full-stack web app, a React frontend where you paste or upload a LUMA program, backed by a Spring Boot service on Java 21 that does the heavy lifting. The first stage is the lexer. It scans the raw source character by character and turns it into a stream of tokens, recognizing LUMA\'s own keywords like station, shield, and contracts, its operators, literals, and delimiters, and marking anything it does not understand as an invalid token instead of silently giving up.',
      'The second stage is where it gets genuinely compiler-shaped. The syntax analyzer is a table-driven LL(1) parser that pushes a start symbol onto a stack and walks the token stream against a formal grammar, matching terminals, expanding rules, and tracking things like parenthesis depth and multi-variable declarations along the way. When the input does not fit the grammar, it does not just fail, it collects the errors and reports them so the programmer knows exactly what went wrong and where. The whole thing is backed by a test runner that throws hundreds of syntax cases at the parser to keep its behavior honest.',
      'What made LUMA special for the team was that it was not just an app built on top of existing tools, it was the tools. Writing a lexer and a parser by hand turns the abstract theory of automata and grammars into something you can see working on screen, and getting seven people to agree on one coherent language and then build the software that enforces it was the real lesson.',
    ],
    githubUrl: 'https://github.com/imyvj/luma',
  },
  {
    id: 'smishing-detector',
    title: 'Smishing Detector',
    year: '2026',
    category: 'Machine Learning / Security',
    shortDesc:
      'A deep learning system that catches smishing, the SMS phishing texts that fake bank and e-wallet alerts. It pairs a from-scratch CNN-BiGRU that reads the message with a Random Forest that inspects the link, then combines their votes into one verdict.',
    image: 'https://images.unsplash.com/photo-1556656793-08538906a9f8?w=800&q=80',
    tags: ['Python', 'NumPy', 'scikit-learn', 'NLTK', 'Flask', 'CNN-BiGRU', 'Random Forest'],
    story: [
      'Almost everyone has gotten the text: a message claiming to be from your bank or e-wallet, a little bit of panic, and a link that does not quite look right. Those are smishing attacks, SMS phishing, and they hit especially hard in the Philippines where fake GCash, bank, and government messages are everywhere. The team set out to build something that could read one of these texts and tell you whether to trust it, taking direction from the hybrid CNN-BiGRU approach in the research by Mahmud and colleagues.',
      'The design choice the team kept circling back to was that a single SMS carries two very different kinds of evidence. There is the wording of the message, and there is the link buried inside it, and those deserve different experts. So the system splits the message in two. The text goes to a CNN-BiGRU that learns the language patterns of a scam, while any URL is pulled out and handed to a Random Forest that judges it on hand-engineered signals like its length, how many dots and hyphens it has, whether it hides behind a link shortener or a raw IP address, and whether it carries bait words like verify or claim. A whitelist of trusted Philippine banks, e-wallets, and government domains keeps the legitimate links from raising false alarms. The two opinions are then merged through weighted soft voting into a single probability.',
      'The part the team is proudest of is that the CNN-BiGRU was not just pulled off a shelf. Every layer was written from scratch in NumPy, the embedding lookup, the 1D convolution, the max pooling, the bidirectional GRU cells, and the dense output, each with its own forward and backward pass. Building the network by hand instead of letting a framework hide the math meant the group actually had to understand why a convolution slides the way it does and how a GRU carries memory across a sequence, which is the whole point of doing it the hard way.',
      'All of it lives behind a Flask web app where you can paste a suspicious text and get back a clear verdict, smishing or legitimate, along with a transparent breakdown of how confident each model was and how much each one swayed the final call. What stuck with the team was how much sharper the result got from letting two specialized models disagree and then settle it by vote, rather than asking one model to do everything.',
    ],
    githubUrl: 'https://github.com/chrlszy/CNN-BiGru-Smishing',
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
