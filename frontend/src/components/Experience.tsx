'use client';

import React from 'react';
import { MapPin, Calendar } from 'lucide-react';

const experiences = [
  {
    role: 'Senior Developer & IT Lead',
    company: 'Tukivu Systems',
    location: 'Kampala, Uganda',
    period: '2022 — Present',
    current: true,
    points: [
      'Leading the architecture and development of the CARMIE ecosystem — a multi-platform vehicle maintenance and recovery service',
      'Engineered InsightCore for the Uganda Ministry of Energy, enabling strategic project monitoring and organizational maturity tracking',
      'Implementing high-reliability backend infrastructures using Node.js, MongoDB, and Single-SPA microfrontend architectures',
      'Managing distributed teams and cross-platform mobile deployments using React Native and Expo EAS pipelines',
    ],
  },
  {
    role: 'Founder & Lead Architect',
    company: 'Devzora Technologies',
    location: 'Remote',
    period: '2022 — Present',
    current: true,
    points: [
      'Founded and lead a software engineering studio specializing in full-stack product development',
      'Architected and shipped 20+ production applications across restaurant tech, logistics, and SaaS',
      'Built REST-OS — a complete restaurant operating system with real-time order management and Stripe billing',
    ],
  },
  {
    role: 'Senior Software Engineer',
    company: 'Freelance / Contract',
    location: 'Remote',
    period: '2020 — 2022',
    current: false,
    points: [
      'Delivered full-stack solutions for clients across East Africa and beyond',
      'Specialized in NestJS microservices, Flutter mobile apps, and Next.js web platforms',
      'Established reusable architecture patterns reducing project delivery time by 40%',
    ],
  },
  {
    role: 'Full-Stack Developer',
    company: 'Various Startups',
    location: 'Nairobi, Kenya',
    period: '2018 — 2020',
    current: false,
    points: [
      'Built MVPs and production systems for early-stage startups in fintech and logistics',
      'Gained deep expertise in PostgreSQL, Redis, and event-driven architectures',
      'Led small teams of 2-4 developers through full product development cycles',
    ],
  },
];

export const Experience = () => {
  return (
    <section id="experience" className="py-24 bg-surface-base relative overflow-hidden">
      <div className="section-container relative z-10">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="mb-20 text-center">
            <div className="section-label mx-auto">
              <span className="w-1.5 h-1.5 bg-primary rounded-full" />
              Career Architecture
            </div>
            <h2 className="section-title">
              Professional{' '}
              <span className="gradient-text">Milestones</span>
            </h2>
            <p className="text-text-secondary leading-relaxed text-sm max-w-md mx-auto mt-4">
              8+ years of engineering leadership, evolving from core development 
              to full-system architecture and IT strategy.
            </p>
          </div>

          {/* Timeline Root */}
          <div className="relative pl-8 sm:pl-12">
            {/* The Vertical Rail */}
            <div className="absolute left-0 top-0 bottom-0 w-px bg-gradient-to-b from-primary via-border to-transparent" />

            {/* Experience Nodes */}
            <div className="space-y-20">
              {experiences.map((exp, i) => (
                <div key={i} className="relative group">
                  {/* Timeline Node Point */}
                  <div className={`absolute left-[-36px] sm:left-[-52px] top-0 w-8 h-8 sm:w-10 sm:h-10 rounded-full border-4 border-surface-base flex items-center justify-center z-10 transition-all duration-500 ${exp.current ? 'bg-primary scale-110 shadow-lg shadow-primary/20' : 'bg-surface-muted border-border group-hover:border-primary/40'}`}>
                    <div className={`w-1.5 h-1.5 rounded-full ${exp.current ? 'bg-white animate-pulse' : 'bg-text-muted group-hover:bg-primary'} transition-colors`} />
                  </div>

                  <div className="flex flex-col gap-1">
                    {/* Period Badge */}
                    <div className="flex items-center gap-3 mb-2">
                      <span className="font-mono text-[10px] font-bold text-primary uppercase tracking-[0.2em] bg-primary/5 px-2 py-1 rounded">
                        {exp.period}
                      </span>
                      {exp.current && (
                        <span className="flex items-center gap-1.5 text-[9px] font-mono font-bold text-green-500 uppercase tracking-widest">
                          <span className="w-1 h-1 bg-green-500 rounded-full animate-ping" />
                          Active_System
                        </span>
                      )}
                    </div>

                    <div className="glass-card p-6 lg:p-8 card-hover relative">
                      <div className="flex flex-col md:flex-row md:items-start justify-between gap-4 mb-6">
                        <div>
                          <h3 className="text-xl font-display font-bold text-text-primary group-hover:text-primary transition-colors">
                            {exp.role}
                          </h3>
                          <div className="flex items-center gap-3 mt-1 text-sm">
                            <span className="font-bold text-text-primary uppercase tracking-tight">
                              {exp.company}
                            </span>
                            <span className="text-border">/</span>
                            <span className="text-text-muted flex items-center gap-1">
                              <MapPin size={12} />
                              {exp.location}
                            </span>
                          </div>
                        </div>
                      </div>

                      {/* Tree-like Point Structure */}
                      <div className="relative">
                        {/* Branch vertical connector */}
                        <div className="absolute left-2 top-2 bottom-4 w-px bg-border" />
                        
                        <ul className="space-y-4">
                          {exp.points.map((point, j) => (
                            <li key={j} className="relative pl-8 group/point">
                              {/* Horizontal branch line */}
                              <div className="absolute left-2 top-[10px] w-4 h-px bg-border group-hover/point:bg-primary/40 transition-colors" />
                              <p className="text-sm text-text-secondary leading-relaxed group-hover/point:text-text-primary transition-colors">
                                {point}
                              </p>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
