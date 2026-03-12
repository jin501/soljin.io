import type { Project, Experience, Education } from '@/types';

export const projects: Project[] = [
  {
    id: '1',
    title: 'FlightLog',
    description: 'Personal travel dashboard visualizing 100+ flights across 3 years. Interactive globe with flight path arcs, country heatmap calendar, and stats like hours in the air and days abroad. Data imported from Flighty CSV export.',
    stack: ['TypeScript', 'React', 'Vite', 'Mapbox GL', 'Recharts', 'Framer Motion'],
    year: '2026',
    liveUrl: 'https://flightlog.soljin.io',
    repoUrl: 'https://github.com/jin501/flightlog',
  },
  {
    id: '2',
    title: 'SendLog',
    description: 'Climbing analytics dashboard built on Mountain Project tick data. Grade pyramid, style breakdown (sport/trad/boulder/multipitch), crag loyalty chart, hardest sends wall with personal notes, and a heatmap of climbing days. Built to eventually support multiple climbers and social features.',
    stack: ['TypeScript', 'React', 'Vite', 'Recharts', 'Framer Motion'],
    year: '2026',
    liveUrl: 'https://sendlog.soljin.io/',
    repoUrl: 'https://github.com/jin501/SendLog',
  },
  {
    id: '3',
    title: 'Valist',
    description: 'Smart packing list app for repeat travelers. Build lists once, reuse across trips, drag-and-drop to reorder, and organize by category. Auth and persistence via Supabase.',
    stack: ['Next.js', 'TypeScript', 'Supabase', 'Tailwind', 'dnd-kit'],
    year: '2025',
    liveUrl: '',
    repoUrl: '',
  },
  {
    id: '4',
    title: 'Frequence',
    description: 'Chrome extension that turns festival and rave setlists into Spotify playlists. Paste a setlist URL or raw text, get a ready-to-play playlist — no manual searching.',
    stack: ['TypeScript', 'Chrome Extension API', 'Spotify API', 'React'],
    year: '2025',
    liveUrl: '',
    repoUrl: '',
  },
  {
    id: '5',
    title: 'ML Trading Bot',
    description: 'Algorithmic crypto trading system using a custom ML strategy to identify entry and exit signals. Combines technical indicators with a trained classifier to automate trade decisions. Built and backtested across multiple market conditions.',
    stack: ['Python', 'scikit-learn', 'pandas', 'NumPy', 'TA-Lib'],
    year: '2024',
    liveUrl: '',
    repoUrl: '',
  },
  {
    id: '6',
    title: 'Virtual Machine Scheduler',
    description: 'CPU and memory resource manager for virtualized environments, built for Georgia Tech Advanced Operating Systems class. Implements dynamic vCPU pinning and balloon driver memory balancing across guest VMs using the libvirt C API on a KVM/QEMU hypervisor.',
    stack: ['C', 'libvirt', 'KVM', 'QEMU', 'Linux'],
    year: '2024',
    liveUrl: '',
    repoUrl: '',
  },
];

export const experiences: Experience[] = [
  {
    company: 'Azuri',
    role: 'Freelance Software Engineer (Contract) ',
    period: 'November 2025 — Present',
    description: [
      'Sole engineer for an environmental sustainability consultancy, building out their technical infrastructure from the ground up — replacing manual Excel/email workflows with a structured database and internal tooling',
      'Designing and building a client data platform (database + UI) to centralize client intake, replace manual data entry, and automate submissions to an external risk evaluation platform'
    ],
    stack: ['TypeScript', 'React', 'Node.js', 'PostgreSQL', 'Supabase']
  },
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
  src: 'hero.jpg',
  alt: 'Mountain landscape',
};

export const mosaicPhotos = [
  {
    src: 'meadow.jpg',
    alt: 'Dolomites',
  },
  {
    src: 'thailand.jpg',
    alt: 'Krabi',
  },
  {
    src: 'alpine.jpg',
    alt: 'Austria',
  },
  {
    src: 'spain.jpg',
    alt: 'Costa Brava',
  },
  {
    src: 'jtree.jpg',
    alt: 'Jtree',
  }
];
