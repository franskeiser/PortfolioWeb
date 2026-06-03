// Shared project data used by both the Projects section and the Archive page
export const FEATURED_PROJECTS = [
  {
    id: 'analytics',
    title: 'Cloud-Native Analytics Dashboard',
    year: '2023',
    category: 'SaaS',
    shortDesc: 'A real-time data visualization platform processing over 1M events daily with 0.5s latency.',
    description:
      'A cloud-native SaaS analytics platform built to handle massive event streams with sub-second latency. Designed for data-driven teams that need real-time insights without sacrificing reliability.',
    image:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuDwiYyygcSM_8TzD3UU0agk_GIUPvLRyOXjoSCNTcY9V4tVxxf32iRNLJlhqXd5EHNBiu3CaJd7mLguiTtlUKd_UYuC1NcLgcissUlknodEHcTMiVaRrNzBFWDbYIfj7Qz1ZBej2IiPqsYz1tG8yGSTHFH0VfmQG0mhIYbyj-Nuu9xALJbxqz1Q9FOgnY7fgFLpfWAioHKt-2GzLWWBfHcX6ZgPGigaMw33KD8zPW3R_PbqETooiAAQzTGQEHoE6DHm9a7C5r6Hrn5_',
    tags: ['Next.js', 'Go', 'ClickHouse', 'Redis'],
    features: [
      'Real-time event stream processing',
      'Customizable dashboard widgets',
      'Multi-tenant support',
      'Alerting and anomaly detection',
    ],
    liveUrl: '#',
    githubUrl: '#',
  },
  {
    id: 'trade-engine',
    title: 'Decentralized Trade Engine',
    year: '2023',
    category: 'Fintech',
    shortDesc: 'High-frequency matching engine for digital assets built with Rust and WebAssembly.',
    description:
      'A high-performance trade matching engine built with Rust and compiled to WebAssembly for in-browser execution. Handles thousands of order matches per second with full auditability.',
    image:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuBixNciMnnFdF46qla42RyTQPGRwNqi7pfM7Egst6tg9PPqwqXPcW8Ft8x6Lgbc39bhUS0t_mnGRh1S_lDXGnpB8Du2E3AxUpnPBBtJ_Oqj9iuIBWAeucqMfdpP7997H5YA5eEvT_4-gZxT1_Q4BkMOw4VAy-BWTvGRt_9tFHf5bbjXuqXC7gmke8600VVZGCRObIkwxpZmP7x0t0Hh83OZ5FOX-hcElBd-Zesp6-lb7qEGkcilTDv8iy2IELUFhgUgFTstbAh518o4',
    tags: ['Rust', 'WASM', 'PostgreSQL'],
    features: [
      'Sub-millisecond order matching',
      'On-chain settlement hooks',
      'WASM-powered in-browser execution',
      'Comprehensive audit trail',
    ],
    liveUrl: '#',
    githubUrl: '#',
  },
  {
    id: 'cms',
    title: 'AI-Driven Content CMS',
    year: '2022',
    category: 'MarTech',
    shortDesc: 'Headless CMS integrated with OpenAI to provide automated SEO optimizations and content drafts.',
    description:
      'A headless CMS with first-class AI integration that automatically generates content drafts, suggests SEO keywords, and evaluates readability scores — all within a single editorial workflow.',
    image:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuCw6DkjSi4tcDhBA5-oKYEPdy6_AeptoLIkppQcuGM14V0f4TGcTp6Nj8XcHh1R4u0uLkMcIzAa9rN1J_Lf0zH4bNtEwEJpgP9uHnsaR0Uqs6U4mq429I_YYMMiVkzNFC5LgQYIYkO32k_0XTc9YyZUzYpfSlXfgVhaWLdeNus9tQda5MyVhAMBVXXYe_nw1Jqh9INSDg1dtdjHx1-G6srHLUKdSqDLsMr_AvhBfsVEeWL4Iowi8a0Mz_2WTH8ai0doCG-xpKue5H0V',
    tags: ['Node.js', 'OpenAI', 'Stripe', 'GraphQL'],
    features: [
      'AI-assisted content drafting',
      'Automated SEO scoring',
      'Subscription billing via Stripe',
      'GraphQL content delivery API',
    ],
    liveUrl: '#',
    githubUrl: '#',
  },
  {
    id: 'design-space',
    title: 'Collaborative Design Space',
    year: '2022',
    category: 'Social',
    shortDesc: 'A browser-based vector editor featuring real-time multiplayer editing using CRDTs.',
    description:
      'A Figma-inspired browser-based vector design tool with real-time collaborative editing powered by CRDTs. Multiple users can simultaneously edit the same canvas without merge conflicts.',
    image:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuA8mP0ISDDNcQ_ymI_LwkTru0dxI8EBACBbNg3cYNm6aAm1xZ5StuMsArRdhVU1uB69T0h45BY116dHn_e4BMWDd-ai7RFhuVG4fWB56ar9m8EMbY0FvlwW-8G5TjAkFulosmDQbGI0LVEHVmcqIiWO2U14EczxtUzbB4grh8dR_ivffBwFvam37hQ0QuR3Pifq5xaTpUgDOUF2D4QiF0JZqfPhVgtpMen-vd-w9_1fLufLpKk-MvrhM1pyvZQ-CfMNnw7CVw3q8Y5C',
    tags: ['Yjs', 'WebSockets', 'Canvas', 'TypeScript'],
    features: [
      'Conflict-free real-time collaboration (CRDTs)',
      'Full SVG vector toolset',
      'Component library support',
      'Export to SVG / PNG',
    ],
    liveUrl: '#',
    githubUrl: '#',
  },
];

export const ARCHIVE_PROJECTS = [
  {
    id: 'lumina',
    title: 'Lumina Trading',
    year: '2024',
    category: 'Fintech',
    shortDesc: 'Real-time asset management dashboard.',
    description:
      'Lumina Trading is a sophisticated real-time asset management dashboard designed for high-frequency traders and portfolio managers. Focuses on ultra-low latency data visualization and seamless cross-platform trade execution.',
    image:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuDfH5OEQ7EvpTXLBwWodeyLH3GNnyTsvAX2aerdWDeU52kHiNICw6wYp4cf3hJ82TzUhh-Y0-jER8my6rh-f-x9Irs5ljvuOKDiKAXvADHOqYlJtYwv-8b_EVM1ZbFR3lV_oYtga0uJauSn9mQai94dCXyTl7SUvghEWDR5BOy8xl8g5-yCc0q6WPLer9MILv-tAv0gQDezHieZbMdJSa0Io7ilON2auL0F81baNssIoy13fw5QRCq0l--SQd3S4mJDX1f8ZGYyW3F-',
    tags: ['React', 'Go', 'PostgreSQL', 'Redis'],
    features: [
      'Real-time order book syncing',
      'Customizable technical indicators',
      'Multi-wallet support (Metamask, Ledger)',
      'Automated risk management alerts',
    ],
    liveUrl: '#',
    githubUrl: '#',
  },
  ...FEATURED_PROJECTS,
  {
    id: 'kinetix',
    title: 'Kinetix OS',
    year: '2023',
    category: 'Tools',
    shortDesc: 'Collaborative 3D modeling pipeline.',
    description:
      'A browser-based collaborative 3D modeling environment that simplifies the pipeline between design teams and 3D engineers. Supports real-time viewport sharing and asset versioning.',
    image:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuBu6ST6jgIaPkT6gF2TL5U8sGZS1wA4wJfOGosWj0IcYyeUprSg7moEonRe3ZQpMdY2ICKORP6UF1HXJwKk4-ag-lFWCw9oTHNGou4jw5zQK1-s0DykD2ReSBezZkeq7OtZm6UxM_oDaWGbt-64jiVGHmfQscH2H9eveVdR38XKlz2AR3M_1BFa7MvynBgQ5zmEWD0vny7b7VACnZcrtAtsVWWOPvnhuAqMgma0MBN8pHFVc42SYqWu_R9ZfHM40P5kDQKRO75BIQwu',
    tags: ['Three.js', 'Rust', 'WebRTC'],
    features: [
      'Shared 3D viewport',
      'Asset version control',
      'GLTF / FBX import',
      'Annotation tools',
    ],
    liveUrl: '#',
    githubUrl: '#',
  },
  {
    id: 'nordic',
    title: 'Nordic Vault',
    year: '2022',
    category: 'eCommerce',
    shortDesc: 'Headless E-commerce marketplace.',
    description:
      'A headless e-commerce platform built for Scandinavian artisan brands. Combines a high-performance storefront with a flexible content backend and lightning-fast checkout.',
    image:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuACTF_ZnLUylv7vHY6sclbDZx9cEvOckZSyxNG7Y78Z2b0g0mo4lySt79qg0czX-fA_wLf7xVsVCRImi7IqLMuFrp0XvEegIIMM0C7keZ9cmrrloOqrJtXFKTquF3ONeMAITeATLkF51j54azkfHJLRzutN04-8HCfK6mFrEVQF-YfWq2u86Roc-UP4vP1oguCSHjAkgcNNYdog7rHOXPAHLsgdGqSktx2F33dPpwseGyGvBKlqFHBbPkZ3M0vvp59zM6_2ol-547Wx',
    tags: ['Remix', 'GraphQL', 'Shopify'],
    features: [
      'Headless Shopify integration',
      'Storyblok CMS',
      'Instant search',
      'Custom checkout flow',
    ],
    liveUrl: '#',
    githubUrl: '#',
  },
  {
    id: 'prism',
    title: 'Prism Debugger',
    year: '2021',
    category: 'DevTools',
    shortDesc: 'Visual microservices debugging tool.',
    description:
      'A visual debugging and observability tool for complex microservice architectures. Prism traces requests across services, visualizes dependency graphs, and surfaces bottlenecks in real time.',
    image:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuAr7lySOAuN2NW8RdRrpHKA9BS4F5c8O2XFn06bkWkJ_SZECaE11TSWC98UDtHc4scNO3LEbLnuhpz57GJlCRveI_lZItgoQPI2HHLGQZrIpb1kSiO8MdFpmX8NykGn1VvhETsMuOG1gJZawi6DneDZxQ07osqcW_JFhi_eA-UNRlBpnR-Qh0VF7Z8ceFHc7uUQmXi_6lYyDw8cPhHaQiatXQPmT6LCWcUuZOrhlTfc6RXcAnKUxJdtKBuQzRuhfVaTs58GsxA_DkCy',
    tags: ['Vue 3', 'D3.js', 'OpenTelemetry'],
    features: [
      'Distributed tracing visualization',
      'Service dependency maps',
      'P95/P99 latency heatmaps',
      'Slack alerting integration',
    ],
    liveUrl: '#',
    githubUrl: '#',
  },
];
