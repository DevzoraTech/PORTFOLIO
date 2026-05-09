'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { ExternalLink, ArrowUpRight, Info } from 'lucide-react';
import { GithubIcon } from './SocialIcons';
import { ProjectModal } from './ProjectModal';

const projects = [
  {
    title: 'Carmie Ecosystem',
    subtitle: 'Vehicle Maintenance & Recovery',
    description:
      'A distributed multi-platform system for vehicle maintenance and roadside assistance. Features a Node.js/Express API, React Native mobile apps for clients and mechanics, and a Single-SPA microfrontend control center for administrative operations.',
    tags: ['Node.js', 'React Native', 'Single-SPA', 'MongoDB', 'Expo', 'Microfrontends'],
    image: '/projects/screenshots/carmie/general-shot.jpeg',
    liveUrl: 'https://carmie.app',
    githubUrl: 'https://github.com/DevzoraTech/CARMIE',
    featured: true,
    features: [
      {
        title: 'Platform Overview',
        description: 'Comprehensive view of the ecosystem connecting vehicle owners with professional automotive services.',
        image: '/projects/screenshots/carmie/general-shot.jpeg',
      },
      {
        title: 'Client Experience',
        description: 'Intuitive mobile interface for service discovery, booking, and emergency roadside recovery.',
        image: '/projects/screenshots/carmie/phone-shot-1.jpeg',
      },
      {
        title: 'Provider Interface',
        description: 'Dedicated mechanic application for managing service requests and real-time status updates.',
        image: '/projects/screenshots/carmie/phone-shot-2.jpeg',
      }
    ],
    details: {
      architecture: 'Engineered as a distributed Monorepo system. The backend provides a centralized API service, while the administrative layer uses a Single-SPA microfrontend architecture (ESM) for modularity. This allows independent scaling of the Auth, Dashboard, and Styleguide modules.',
      security: 'Implements real-time session security and geolocation-based service discovery. Secure user onboarding uses high-reliability verification flows, and all data persistence is handled via high-performance MongoDB clusters with isolated environments.',
      implementation: 'Leverages React Native with Expo for cross-platform consistency. We established robust EAS build pipelines to ensure continuous delivery. Real-time notifications are handled through Resend API, ensuring critical roadside assistance requests are delivered instantly.',
    }
  },
  {
    title: 'InsightCore',
    subtitle: 'Strategic Project Monitoring',
    description:
      'High-performance digital platform engineered for the Uganda Ministry of Energy to track organizational maturity, project indicators, and resource allocation. Features multi-tenant sovereignty and real-time reporting modules.',
    tags: ['React', 'TypeScript', 'Tailwind', 'Data Viz', 'Reporting'],
    image: '/projects/screenshots/insightcore/login-page.jpeg',
    liveUrl: '#',
    githubUrl: 'https://github.com/DevzoraTech/InsightCore',
    featured: true,
    features: [
      {
        title: 'Institutional Access',
        description: 'Secure gateway for Ministry of Energy personnel with multi-departmental support.',
        image: '/projects/screenshots/insightcore/login-page.jpeg',
      },
      {
        title: 'Organization Onboarding',
        description: 'Structured setup for new institutional departments and project teams.',
        image: '/projects/screenshots/insightcore/register-organisation-page.jpeg',
      }
    ],
    details: {
      architecture: 'A multi-tenant system designed for organizational sovereignty. It uses a component-based framework where indicators and progress markers are mapped against high-level institutional goals in a unified space.',
      security: 'Strict data isolation ensures that different departments or teams operate within secure, siloed environments while institutional oversight is maintained. Features built-in maturity tracking to ensure frameworks are defined before implementation.',
      implementation: 'Focused on powerful data table management and real-time visualization. Built with React 18 and TypeScript to handle large institutional datasets with zero errors during reporting and resource allocation.',
    }
  },
  {
    title: 'REST-OS',
    subtitle: 'Restaurant Operating System',
    description:
      'A comprehensive full-stack restaurant management platform with real-time order tracking, kitchen display systems, and subscription billing via Stripe. Features geofenced staff authentication and WebSocket live updates.',
    tags: ['NestJS', 'Flutter', 'Next.js', 'PostgreSQL', 'WebSocket', 'Stripe'],
    image: '/projects/screenshots/restos/login-page-dark.png',
    liveUrl: 'https://restos.devzoratech.com/login',
    githubUrl: 'https://github.com/DevzoraTech/REST-OS',
    featured: true,
    features: [
      {
        title: 'Centralized Authentication',
        description: 'A secure, organization-scoped login system designed for multi-tenant environments. It handles role-based access control (RBAC) ensuring staff and management access appropriate modules.',
        image: '/projects/screenshots/restos/login-page-dark.png',
        technicalNotes: 'Implements JWT-based stateless authentication with secure token persistence in SharedPreferences for mobile clients.'
      },
      {
        title: 'Geofenced Operations',
        description: 'Critical operational security layer that uses real-time GPS tracking to ensure that attendance and order entries only occur within verified restaurant boundaries.',
        image: '/projects/screenshots/restos/gps-premise-marker-dark.png',
        technicalNotes: 'Uses the Geolocator API with server-side radius validation (Haversine formula) to prevent location spoofing.'
      },
      {
        title: 'Real-time Table Management',
        description: 'A dynamic grid system providing instant visibility into table statuses (Available, Occupied, Ready). Waiters can track the progress of every table at a glance.',
        image: '/projects/screenshots/restos/tables-page-dark.png',
        technicalNotes: 'Powered by Socket.IO branch-level rooms. State changes broadcast instantly to all connected waiter and KDS devices.'
      },
      {
        title: 'Smart POS Interface',
        description: 'High-velocity ordering system with support for menu modifiers, seat-specific ordering, and instant kitchen routing.',
        image: '/projects/screenshots/restos/order-pos-dark.png',
        technicalNotes: 'Optimized Flutter UI with debounced search and cached menu items to ensure zero-lag during peak hours.'
      },
      {
        title: 'Customer Self-Service (QR)',
        description: 'Contactless digital menu system allowing customers to view menus and order directly from their smartphones via QR code scanning.',
        image: '/projects/screenshots/restos/qr-customer-menu-dark.png',
        technicalNotes: 'Generates dynamic, geofenced URLs that expire to prevent off-site ordering.'
      },
      {
        title: 'Workflow Automation Engine',
        description: 'A powerful backend engine that allows administrators to customize operational workflows, from tax calculations to order transition rules.',
        image: '/projects/screenshots/restos/workflow-engine-customisatin-dark.png',
        technicalNotes: 'A JSON-driven rule engine implemented in NestJS, allowing for runtime configuration without code changes.'
      },
      {
        title: 'Automated Billing & Receipts',
        description: 'Instant receipt generation upon payment confirmation, integrated with the order status machine for financial integrity.',
        image: '/projects/screenshots/restos/reciept-page-dark.png',
        technicalNotes: 'Generates PDF receipts and tracks transaction history with Stripe-compatible financial metadata.'
      }
    ],
    details: {
      architecture: 'Event-driven system connecting mobile waiter apps (Flutter), kitchen displays (KDS), and a central admin portal. Built with NestJS and Prisma for the backend, utilizing Socket.IO for sub-100ms state synchronization across the entire restaurant branch.',
      security: 'Implements geofenced authentication via GPS coordinates, preventing staff from clocking in or entering orders outside restaurant premises. Uses PIN-based authorization for critical operations and Stripe for secure PCI-compliant billing.',
      implementation: 'Features a complex status machine (OPEN → SENT → READY → SERVED → PAID) to track every item. Includes automated stock validation, shift history with live elapsed timers, and geofence-radius enforcement for location security.',
    }
  },
  {
    title: 'Weyonge',
    subtitle: 'Waste Management Platform',
    description:
      'Intelligent waste collection platform with real-time GPS tracking and route optimization. Built with a monorepo architecture connecting NestJS backend to Flutter mobile clients.',
    tags: ['Flutter', 'NestJS', 'WebSocket', 'Google Maps', 'Prisma'],
    image: '/projects/screenshots/weyongye/main-display.jpeg',
    liveUrl: '#',
    githubUrl: 'https://github.com/DevzoraTech/weyongye',
    featured: false,
    features: [
      {
        title: 'Fleet Management',
        description: 'Real-time tracking of waste collection vehicles with live status updates.',
        image: '/projects/screenshots/weyongye/main-display.jpeg',
      },
      {
        title: 'Onboarding Experience',
        description: 'Smooth entry flow for users and collection partners.',
        image: '/projects/screenshots/weyongye/onboarding-page.png',
      },
      {
        title: 'Secure Access',
        description: 'Modern authentication system for data integrity.',
        image: '/projects/screenshots/weyongye/signin-page.png',
      }
    ],
    details: {
      architecture: 'Unified Monorepo architecture managed with Turborepo, allowing for shared types and utilities between the NestJS backend and Flutter frontend.',
      security: 'End-to-end data encryption for real-time location streaming. Uses Prisma with PostgreSQL for secure, type-safe database interactions and audit logging.',
      implementation: 'Deep Google Maps API integration for real-time route optimization and geofencing. WebSocket connectivity ensures instant fleet dispatching and driver-customer synchronization.',
    }
  },
  {
    title: 'Life Care Salon',
    subtitle: 'Sheraton Hotel Management',
    description:
      'Complete salon operations system with automated inventory deduction, worker commission tracking (salary/commission), and real-time financial analytics. Integrated with Supabase for live data sync.',
    tags: ['React', 'Supabase', 'TypeScript', 'Recharts'],
    image: '/projects/screenshots/lifecare/main-display-auths-page.png',
    liveUrl: '#',
    githubUrl: 'https://github.com/DevzoraTech/LifeCare',
    featured: false,
    features: [
      {
        title: 'Main Dashboard',
        description: 'High-level overview of salon operations and staff status.',
        image: '/projects/screenshots/lifecare/main-display-auths-page.png',
      },
      {
        title: 'Financial Analytics',
        description: 'Deep dive into revenue, profit margins, and financial health.',
        image: '/projects/screenshots/lifecare/financial-analytics-page.png',
      },
      {
        title: 'Inventory Control',
        description: 'Automated stock management and product usage tracking.',
        image: '/projects/screenshots/lifecare/inventory-page.png',
      },
      {
        title: 'Appointment System',
        description: 'Real-time booking and resource allocation.',
        image: '/projects/screenshots/lifecare/appointments-page.png',
      }
    ],
    details: {
      architecture: 'Serverless architecture leveraging Supabase for real-time synchronization, authentication, and PostgreSQL storage. Designed with a modular service-based frontend for easy feature expansion.',
      security: 'Utilizes Supabase Row Level Security (RLS) to ensure that sensitive financial data and customer history are only accessible by authorized staff roles.',
      implementation: 'Features an automatic inventory deduction system that triggers on service completion. Real-time analytics are visualized using Recharts, providing instant insights into profit margins and stock levels.',
    }
  },
  {
    title: 'Great Naturals Salon',
    subtitle: 'Tanzania Enterprise System',
    description:
      'A comprehensive management platform for large-scale salon operations in Tanzania. Features smart inventory control, customer product history analytics, and an e-commerce style purchasing workflow.',
    tags: ['React', 'Supabase', 'TypeScript', 'Tailwind'],
    image: '/projects/salon-tanzania.png',
    liveUrl: '#',
    githubUrl: '#',
    featured: false,
    details: {
      architecture: 'Optimized for high-volume customer management with an e-commerce style shopping cart for product sales. Built on a unified state management system to ensure data consistency across multiple branch users.',
      security: 'Integrated secure customer verification and history tracking. Supabase provides a robust backend with encrypted data at rest and in transit.',
      implementation: 'Smart completion logic with stock validation prevents inventory errors. Detailed usage analytics allow salon owners to track customer preferences and product performance over time.',
    }
  },
];

export const Projects = () => {
  const [selectedProject, setSelectedProject] = useState<any>(null);

  return (
    <section id="work" className="py-20 bg-surface-elevated border-y border-border-light">
      <div className="section-container">
        {/* Header */}
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-end gap-4 mb-12">
          <div>
            <div className="section-label">
              <span className="w-1.5 h-1.5 bg-primary rounded-full" />
              Selected Work
            </div>
            <h2 className="section-title">
              Projects I&apos;ve{' '}
              <span className="gradient-text">built & shipped</span>
            </h2>
          </div>
          <p className="text-sm text-text-muted max-w-xs">
            A selection of production applications across different domains and scales.
          </p>
        </div>

        {/* Featured Projects (Alternating Layout) */}
        <div className="flex flex-col gap-8">
          {projects.filter(p => p.featured).map((project, i) => (
            <div
              key={project.title}
              className="glass-card overflow-hidden card-hover group"
            >
              <div className={`grid grid-cols-1 lg:grid-cols-2 ${i % 2 === 1 ? 'lg:direction-rtl' : ''}`}>
                {/* Image */}
                <div 
                  className={`relative aspect-[16/10] lg:aspect-auto bg-surface-muted overflow-hidden cursor-pointer ${i % 2 === 1 ? 'lg:order-2' : ''}`}
                  onClick={() => setSelectedProject(project)}
                >
                  {project.image ? (
                    <Image
                      src={project.image}
                      alt={project.title}
                      fill
                      priority={project.featured}
                      className="object-cover group-hover:scale-105 transition-transform duration-700"
                    />
                  ) : (
                    <>
                      <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-secondary/10" />
                      <div className="absolute inset-0 flex items-center justify-center">
                        <div className="text-center">
                          <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center mx-auto mb-3 group-hover:scale-110 transition-transform duration-500">
                            <span className="text-2xl font-display font-bold text-primary">
                              {project.title.charAt(0)}
                            </span>
                          </div>
                          <span className="font-mono text-[10px] text-text-muted uppercase tracking-widest opacity-0 group-hover:opacity-100 transition-opacity">Click for details</span>
                        </div>
                      </div>
                    </>
                  )}
                  {/* Subtle overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-text-primary/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                </div>

                {/* Content */}
                <div className={`p-8 lg:p-10 flex flex-col justify-center ${i % 2 === 1 ? 'lg:order-1' : ''}`}>
                  <div className="font-mono text-xs text-primary font-medium mb-2 uppercase tracking-wider">
                    {project.subtitle}
                  </div>
                  <h3 className="text-2xl font-display font-bold text-text-primary mb-3 group-hover:text-primary transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-text-secondary leading-relaxed mb-6 text-sm">
                    {project.description}
                  </p>

                  <div className="flex flex-wrap gap-1.5 mb-8">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-2.5 py-1 text-xs font-mono font-medium text-text-muted bg-surface-muted rounded-md"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  <div className="flex items-center justify-between">
                    <button 
                      onClick={() => setSelectedProject(project)}
                      className="inline-flex items-center gap-2 text-sm font-bold text-text-primary hover:text-primary transition-colors group/btn"
                    >
                      <Info size={16} />
                      Technical Details
                      <div className="w-8 h-px bg-border group-hover/btn:w-12 group-hover/btn:bg-primary transition-all" />
                    </button>
                    
                    <div className="flex items-center gap-4">
                      <a href={project.liveUrl} className="text-text-muted hover:text-primary transition-colors">
                        <ExternalLink size={18} />
                      </a>
                      <a href={project.githubUrl} className="text-text-muted hover:text-primary transition-colors">
                        <GithubIcon size={18} />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Other Projects Grid */}
        <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {projects.filter(p => !p.featured).map((project) => (
            <div
              key={project.title}
              onClick={() => setSelectedProject(project)}
              className="glass-card p-6 card-hover group cursor-pointer border border-border/50 hover:border-primary/30"
            >
              <div className="flex items-start justify-between mb-3">
                <div>
                  <div className="font-mono text-[10px] text-primary font-medium uppercase tracking-wider mb-1">
                    {project.subtitle}
                  </div>
                  <h3 className="text-lg font-display font-semibold text-text-primary group-hover:text-primary transition-colors">
                    {project.title}
                  </h3>
                </div>
                <ArrowUpRight
                  size={16}
                  className="text-text-muted opacity-0 group-hover:opacity-100 group-hover:text-primary transition-all duration-300"
                />
              </div>
              <p className="text-sm text-text-secondary leading-relaxed mb-6 line-clamp-2">
                {project.description}
              </p>
              <div className="flex flex-wrap gap-1.5">
                {project.tags.slice(0, 3).map((tag) => (
                  <span
                    key={tag}
                    className="px-2 py-0.5 text-[10px] font-mono font-medium text-text-muted bg-surface-muted rounded-md"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Project Detail Modal */}
      {selectedProject && (
        <ProjectModal 
          project={selectedProject} 
          onClose={() => setSelectedProject(null)} 
        />
      )}
    </section>
  );
};
