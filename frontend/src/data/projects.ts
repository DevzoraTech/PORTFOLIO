export interface ProjectFeature {
  title: string;
  description: string;
  image: string;
  technicalNotes?: string;
}

export interface ProjectData {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  tags: string[];
  image: string;
  liveUrl: string;
  githubUrl: string;
  featured: boolean;
  features: ProjectFeature[];
  details: {
    architecture: string;
    security: string;
    implementation: string;
  };
  deepDive?: {
    problem: string;
    solution: string;
    stack: { name: string; icon: string; detail: string }[];
    codeSnippets: { title: string; code: string; language: string }[];
    metrics: { label: string; value: string; detail: string }[];
  };
}

export const projects: ProjectData[] = [
  {
    id: 'rest-os',
    title: 'REST-OS',
    subtitle: 'Restaurant Operating System',
    description: 'A comprehensive full-stack restaurant management platform with real-time order tracking, kitchen display systems, and subscription billing via Stripe.',
    tags: ['NestJS', 'Flutter', 'Next.js', 'PostgreSQL', 'WebSocket', 'Stripe'],
    image: '/projects/screenshots/restos/login-page-dark.png',
    liveUrl: 'https://restos.devzoratech.com/login',
    githubUrl: 'https://github.com/DevzoraTech/REST-OS',
    featured: true,
    features: [
      {
        title: 'Centralized Authentication',
        description: 'A secure, organization-scoped login system designed for multi-tenant environments.',
        image: '/projects/screenshots/restos/login-page-dark.png',
        technicalNotes: 'Implements JWT-based stateless authentication with secure token persistence.'
      },
      {
        title: 'Geofenced Operations',
        description: 'Operational security layer using real-time GPS tracking for attendance and orders.',
        image: '/projects/screenshots/restos/gps-premise-marker-dark.png',
        technicalNotes: 'Uses server-side radius validation (Haversine formula) to prevent location spoofing.'
      },
      {
        title: 'Real-time Table Management',
        description: 'Dynamic grid providing instant visibility into table statuses.',
        image: '/projects/screenshots/restos/tables-page-dark.png',
        technicalNotes: 'Powered by Socket.IO branch-level rooms for instant state synchronization.'
      }
    ],
    details: {
      architecture: 'Event-driven system connecting mobile waiter apps, kitchen displays, and a central admin portal. Built with NestJS and Prisma.',
      security: 'Implements geofenced authentication via GPS coordinates, prevents off-premise orders.',
      implementation: 'Features a complex status machine (OPEN → SENT → READY → SERVED → PAID) to track every item.',
    },
    deepDive: {
      problem: 'Restaurant operations often suffer from communication gaps between waiters and the kitchen, leading to order delays and financial discrepancies. Geographically distributed branches also make centralized management difficult.',
      solution: 'REST-OS provides a unified ecosystem where every order event is broadcasted in real-time. By integrating geofencing, we ensure that operational data is physically tied to the restaurant premises.',
      stack: [
        { name: 'NestJS', icon: 'server', detail: 'Primary API engine handling complex business logic and WebSocket orchestration.' },
        { name: 'Flutter', icon: 'smartphone', detail: 'Cross-platform mobile apps for waiters and KDS with reactive UI.' },
        { name: 'PostgreSQL', icon: 'database', detail: 'Robust relational data storage with Prisma ORM for type-safe queries.' }
      ],
      codeSnippets: [
        {
          title: 'Geofence Validation Logic',
          language: 'typescript',
          code: `
async validateGeofence(branchId: string, userCoords: Coords) {
  const branch = await this.prisma.branch.findUnique({ where: { id: branchId } });
  const distance = this.calculateDistance(
    userCoords.lat, userCoords.lng,
    branch.lat, branch.lng
  );
  
  if (distance > branch.allowedRadius) {
    throw new ForbiddenException('Outside restaurant boundaries');
  }
  return true;
}`
        }
      ],
      metrics: [
        { label: 'Latency', value: '<100ms', detail: 'Real-time state synchronization across devices.' },
        { label: 'Uptime', value: '99.9%', detail: 'High-availability infrastructure on AWS.' },
        { label: 'Sync', value: 'Real-time', detail: 'WebSocket-driven order flow.' }
      ]
    }
  },
  {
    id: 'carmie',
    title: 'Carmie Ecosystem',
    subtitle: 'Vehicle Maintenance & Recovery',
    description: 'A distributed multi-platform system for vehicle maintenance and roadside assistance.',
    tags: ['Node.js', 'React Native', 'Single-SPA', 'MongoDB', 'Expo'],
    image: '/projects/screenshots/carmie/general-shot.jpeg',
    liveUrl: 'https://carmie.app',
    githubUrl: 'https://github.com/DevzoraTech/CARMIE',
    featured: true,
    features: [
      {
        title: 'Platform Overview',
        description: 'Comprehensive view of the ecosystem connecting vehicle owners with professional automotive services.',
        image: '/projects/screenshots/carmie/general-shot.jpeg',
      }
    ],
    details: {
      architecture: 'Administrative layer uses a Single-SPA microfrontend architecture for modularity.',
      security: 'Implements real-time session security and geolocation-based service discovery.',
      implementation: 'Leverages React Native with Expo for cross-platform consistency.',
    }
  },
  {
    id: 'insightcore',
    title: 'InsightCore',
    subtitle: 'Strategic Project Monitoring',
    description: 'High-performance digital platform engineered for the Uganda Ministry of Energy.',
    tags: ['React', 'TypeScript', 'Tailwind', 'Data Viz'],
    image: '/projects/screenshots/insightcore/login-page.jpeg',
    liveUrl: '#',
    githubUrl: 'https://github.com/DevzoraTech/InsightCore',
    featured: true,
    features: [
      {
        title: 'Institutional Access',
        description: 'Secure gateway for Ministry of Energy personnel with multi-departmental support.',
        image: '/projects/screenshots/insightcore/login-page.jpeg',
      }
    ],
    details: {
      architecture: 'A multi-tenant system designed for organizational sovereignty.',
      security: 'Strict data isolation ensures that different departments operate within secure environments.',
      implementation: 'Focused on powerful data table management and real-time visualization.',
    }
  },
  {
    id: 'weyonge',
    title: 'Weyonge',
    subtitle: 'Waste Management Platform',
    description: 'Intelligent waste collection platform with real-time GPS tracking and route optimization.',
    tags: ['Flutter', 'NestJS', 'WebSocket', 'Google Maps', 'Prisma'],
    image: '/projects/screenshots/weyongye/main-display.jpeg',
    liveUrl: '#',
    githubUrl: 'https://github.com/DevzoraTech/weyongye',
    featured: false,
    features: [
      {
        title: 'Fleet Management',
        description: 'Real-time tracking of waste collection vehicles.',
        image: '/projects/screenshots/weyongye/main-display.jpeg',
      }
    ],
    details: {
      architecture: 'Unified Monorepo architecture managed with Turborepo.',
      security: 'End-to-end data encryption for real-time location streaming.',
      implementation: 'Deep Google Maps API integration for real-time route optimization.',
    }
  },
  {
    id: 'lifecare',
    title: 'Life Care Salon',
    subtitle: 'Sheraton Hotel Management',
    description: 'Complete salon operations system with automated inventory deduction and financial analytics.',
    tags: ['React', 'Supabase', 'TypeScript', 'Recharts'],
    image: '/projects/screenshots/lifecare/main-display-auths-page.png',
    liveUrl: '#',
    githubUrl: 'https://github.com/DevzoraTech/LifeCare',
    featured: false,
    features: [
      {
        title: 'Main Dashboard',
        description: 'High-level overview of salon operations.',
        image: '/projects/screenshots/lifecare/main-display-auths-page.png',
      }
    ],
    details: {
      architecture: 'Serverless architecture leveraging Supabase for real-time synchronization.',
      security: 'Utilizes Supabase Row Level Security (RLS) for data isolation.',
      implementation: 'Features an automatic inventory deduction system.',
    }
  },
  {
    id: 'great-naturals',
    title: 'Great Naturals Salon',
    subtitle: 'Tanzania Enterprise System',
    description: 'Comprehensive management platform for large-scale salon operations in Tanzania.',
    tags: ['React', 'Supabase', 'TypeScript', 'Tailwind'],
    image: '/projects/screenshots/lifecare/main-display-auths-page.png',
    liveUrl: '#',
    githubUrl: '#',
    featured: false,
    features: [],
    details: {
      architecture: 'Optimized for high-volume customer management.',
      security: 'Integrated secure customer verification.',
      implementation: 'Smart completion logic with stock validation.',
    }
  }
];
