import type { Project, Experience, Education } from '@/types';

export const projects: Project[] = [
  {
    id: '1',
    title: 'FlightLog',
    description: 'Personal travel dashboard that visualizes 40+ flights a year. Auto-imports from Gmail, maps routes, tracks stats and carbon footprint.',
    stack: ['TypeScript', 'D3.js', 'Next.js', 'Gmail API'],
    year: '2026',
    liveUrl: 'https://flightlog.soljin.io',
    repoUrl: 'https://github.com/jin501/flightlog',
  },
];

export const experiences: Experience[] = [
  // {
  //   company: 'Azuri',
  //   role: 'Freelance Software Engineer (Contract) ',
  //   period: 'November 2025 — Present',
  //   description: [
  //     'Sole engineer for an environmental sustainability consultancy, building out their technical infrastructure from the ground up — replacing manual Excel/email workflows with a structured database and internal tooling',
  //     'Designing and building a client data platform (database + UI) to centralize client intake, replace manual data entry, and automate submissions to an external risk evaluation platform'
  //   ],
//     stack: ['TypeScript', 'React', 'Node.js', 'PostgreSQL', 'Supabase']
  // },
  {
    company: 'MIRROR (Lululemon Studio)',
    role: 'Software Engineer',
    period: 'September 2020 – December 2022',
    description: [
      'Owned the full e-commerce stack for MIRROR (acquired by Lululemon) as one of 3-4 engineers — subscriptions, order management, inventory, payments, carrier dispatch, and all internal tooling for customer service, finance and marketing teams',
      'Built and integrated a carrier dispatch system with dynamic routing logic, including a full XPO carrier integration coordinated directly with their engineering team',
      'Drove international expansion into Canada end-to-end — localized frontend, backend, databases, and carrier integrations for the Canadian market',
      'Led platform migration from Spree (Rails) to Shopify during MIRROR → Lululemon Studio rebrand, including subscription model restructuring and database migrations across the full platform',
      'Containerized services and redesigned CI/CD pipelines to improve deployment consistency and velocity'
    ],
    stack: ['Ruby on Rails', 'React', 'TypeScript', 'Spree', 'Shopify', 'PostgreSQL', 'AWS']
  },
  {
    company: 'Blackboard Insurance',
    role: 'Software Engineer',
    period: 'June 2019 – August 2020',
    description: [
      'Delivered full-stack contributions on a greenfield AIG-backed insurance underwriting platform, involved from early architecture decisions through frontend, API, and DevOps',
      'Built a dynamic, highly complex underwriting form in React/TypeScript with conditional field logic, real-time backend calculations, and multi-component submission flow integrated with a third-party risk evaluation engine (IQOS)',
      'Developed and maintained a reusable React component library with ~95% unit test coverage, accelerating feature development and ensuring reliability across the frontend team',
      'Authored reusable Terraform modules for AWS infrastructure and implemented hosting and deployment strategies across environments including S3, Lambda, and API Gateway',
    ],
    stack: ['React', 'TypeScript', 'Node.js', 'Express', 'AWS', 'Terraform', 'Lambda', 'S3', 'PostgreSQL', 'MongoDB']
  },
  {
    company: 'Various',
    role: 'Freelance Full Stack Developer',
    period: 'February 2017 – July 2019',
    description: [
      'Built and deployed full-stack web applications for small business clients (salons, retail, service businesses) using Ruby on Rails and React, handling everything from UX design to production deployment',
      'Engineered a reusable CMS (Rails API) with a customizable GUI and a React component library to systematize client delivery — cutting per-client build time roughly in half',
      'Contracted to build an internal scheduling and payment system (PHP/Laravel) and contributed to internal tooling (Python/Django) across separate client engagements',
    ],
    stack: ['Ruby on Rails', 'React', 'PHP', 'Laravel', 'Python', 'Django', 'PostgreSQL']
  },
  {
    company: 'TripleLift',
    role: 'Solutions Engineer',
    period: 'June 2017 – July 2018',
    description: [
      'Architected and launched a new DCO ad format end-to-end — from spec to production — recognized internally as a high-impact addition to the exchange, generating significant incremental daily revenue',
      'Built the full-stack implementation: Java in-house bidder adapter, JavaScript client-side ad runner updates, and OpenRTB dynamic native ads API integration',
      'Audited 20+ internal tools, driving deprecation of 12 legacy systems and securing CTO approval for 6 new platform investments',
      'Restored significant daily ad spend and improved platform health through internal database and monitoring tooling (React, Python, SQL, JS)'
    ],
    stack: ['JavaScript', 'React', 'Python', 'Java', 'PostgreSQL']
  },
];

export const education: Education[] = [
  {
    institution: 'Georgia Institute of Technology',
    degree: 'Master in Computer Science',
    period: '2023 — Present',
    notes: 'Focus on Systems Engineering. Expected May 2026.',
  },
  {
    institution: 'Syracuse University',
    degree: 'B.S. Psychology, Mathematics',
    period: '2009 — 2014',
    notes: 'Minor in Philosophy. Dean\'s List.',
  }
];

export const skills = {
  Languages: ['TypeScript', 'JavaScript', 'Ruby', 'Python', 'SQL', 'HTML/CSS'],
  Frontend: ['React', 'Next.js', 'Tailwind CSS'],
  Backend: ['Node.js', 'Ruby on Rails', 'PostgreSQL', 'MongoDB', 'Express'],
  Infrastructure: ['Docker', 'AWS', 'Terraform', 'Supabase', 'Vercel'],
  Tools: ['Git', 'Figma', 'Shopify', 'Spree'],
  AI: ['LangChain', 'OpenAI API', 'Qdrant']
};

// update unplash dummy photos w mine ..
export const heroPhoto = {
  src: 'https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?w=1600&q=80',
  alt: 'Mountain landscape',
};

export const mosaicPhotos = [
  {
    src: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&q=80',
    alt: 'Mountain peak at sunrise',
  },
  {
    src: 'https://images.unsplash.com/photo-1530549387789-4c1017266635?w=800&q=80',
    alt: 'Sailing at sea',
  },
  {
    src: 'https://images.unsplash.com/photo-1551698618-1dfe5d97d256?w=800&q=80',
    alt: 'Skiing down a slope',
  },
  {
    src: 'https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?w=800&q=80',
    alt: 'Travel adventure',
  },
  {
    src: 'https://images.unsplash.com/photo-1519681393784-d120267933ba?w=800&q=80',
    alt: 'Snow covered mountains',
  },
  {
    src: 'https://images.unsplash.com/photo-1682687982501-1e58ab814714?w=800&q=80',
    alt: 'Backpacking trail',
  },
];
