'use client';

import React, { useState } from 'react';
import { MapPin, Briefcase, ChevronRight } from 'lucide-react';

const experiences = [
  {
    role: 'Senior Developer & IT Lead',
    company: 'Tukivu Systems',
    location: 'Kampala, Uganda',
    period: '2022 — Present',
    year: '2022',
    current: true,
    summary: 'Leading architecture, team management, and cross-platform delivery for enterprise-grade systems.',
    points: [
      'Leading the architecture and development of the CARMIE ecosystem — a multi-platform vehicle maintenance and recovery service',
      'Engineered InsightCore for the Uganda Ministry of Energy, enabling strategic project monitoring and organizational maturity tracking',
      'Implementing high-reliability backend infrastructures using Node.js, MongoDB, and Single-SPA microfrontend architectures',
      'Managing distributed teams and cross-platform mobile deployments using React Native and Expo EAS pipelines',
    ],
    stack: ['NestJS', 'React Native', 'MongoDB', 'Single-SPA'],
  },
  {
    role: 'Founder & Lead Architect',
    company: 'Devzora Technologies',
    location: 'Remote — Global',
    period: '2022 — Present',
    year: '2022',
    current: true,
    summary: 'Founded a software engineering studio specializing in full-stack product development and IT consulting.',
    points: [
      'Founded and lead a software engineering studio specializing in full-stack product development',
      'Architected and shipped 20+ production applications across restaurant tech, logistics, and SaaS',
      'Built REST-OS — a complete restaurant operating system with real-time order management and Stripe billing',
    ],
    stack: ['NestJS', 'Flutter', 'Next.js', 'PostgreSQL', 'Stripe'],
  },
  {
    role: 'Senior Software Engineer',
    company: 'Freelance / Contract',
    location: 'Remote',
    period: '2020 — 2022',
    year: '2020',
    current: false,
    summary: 'Delivered high-performance full-stack solutions for clients across East Africa and international markets.',
    points: [
      'Delivered full-stack solutions for clients across East Africa and beyond',
      'Specialized in NestJS microservices, Flutter mobile apps, and Next.js web platforms',
      'Established reusable architecture patterns reducing project delivery time by 40%',
    ],
    stack: ['NestJS', 'Flutter', 'Next.js'],
  },
  {
    role: 'Full-Stack Developer',
    company: 'Various Startups',
    location: 'Nairobi, Kenya',
    period: '2018 — 2020',
    year: '2018',
    current: false,
    summary: 'Built MVPs and production systems for early-stage startups in fintech and logistics.',
    points: [
      'Built MVPs and production systems for early-stage startups in fintech and logistics',
      'Gained deep expertise in PostgreSQL, Redis, and event-driven architectures',
      'Led small teams of 2-4 developers through full product development cycles',
    ],
    stack: ['React', 'PostgreSQL', 'Redis', 'Node.js'],
  },
];

export const Experience = () => {
  const [expandedIdx, setExpandedIdx] = useState<number>(0);

  return (
    <section id="experience" className="py-28 bg-surface-base relative overflow-hidden">
      <div className="section-container relative z-10">
        {/* Header */}
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-end gap-6 mb-20">
          <div>
            <div className="section-label">
              <span className="w-1.5 h-1.5 bg-primary rounded-full" />
              Career Architecture
            </div>
            <h2 className="section-title">
              Professional <span className="gradient-text">Milestones</span>
            </h2>
            <p className="text-sm text-text-muted mt-2 max-w-md">
              8+ years of engineering leadership — from core development to full-system architecture and IT strategy.
            </p>
          </div>
          <div className="flex items-baseline gap-3">
            <span className="text-5xl font-display font-black text-text-primary">08</span>
            <div className="flex flex-col">
              <span className="text-[10px] font-mono text-primary font-bold uppercase tracking-widest">Years</span>
              <span className="text-[9px] font-mono text-text-muted uppercase tracking-wider">Active_Service</span>
            </div>
          </div>
        </div>

        {/* Desktop: Horizontal Timeline + Card Layout */}
        <div className="hidden lg:block">
          {/* Year Markers */}
          <div className="relative mb-8">
            <div className="h-px bg-border w-full" />
            <div className="flex justify-between relative -top-3">
              {experiences.map((exp, i) => (
                <button
                  key={i}
                  onClick={() => setExpandedIdx(i)}
                  className={`flex flex-col items-center group cursor-pointer transition-all ${
                    expandedIdx === i ? 'scale-110' : ''
                  }`}
                >
                  <div className={`w-6 h-6 rounded-full border-[3px] transition-all duration-300 flex items-center justify-center ${
                    expandedIdx === i
                      ? 'border-primary bg-primary shadow-lg shadow-primary/30'
                      : exp.current
                      ? 'border-primary/40 bg-surface-base group-hover:border-primary'
                      : 'border-border bg-surface-base group-hover:border-text-muted'
                  }`}>
                    {expandedIdx === i && (
                      <div className="w-1.5 h-1.5 bg-white rounded-full" />
                    )}
                    {exp.current && expandedIdx !== i && (
                      <div className="w-1.5 h-1.5 bg-primary/60 rounded-full animate-pulse" />
                    )}
                  </div>
                  <span className={`mt-3 text-[10px] font-mono font-bold uppercase tracking-widest transition-colors ${
                    expandedIdx === i ? 'text-primary' : 'text-text-muted group-hover:text-text-secondary'
                  }`}>
                    {exp.year}
                  </span>
                </button>
              ))}
            </div>
          </div>

          {/* Active Experience Card */}
          <div className="border border-border bg-surface-elevated rounded-sm overflow-hidden">
            <div className="grid grid-cols-12">
              {/* Left: Role Meta */}
              <div className="col-span-4 p-10 border-r border-border bg-surface-muted/30">
                <div className="flex items-center gap-2 mb-6">
                  <span className="px-2.5 py-1 font-mono text-[10px] font-bold text-primary uppercase tracking-widest bg-primary/10 border border-primary/20 rounded-sm">
                    {experiences[expandedIdx].period}
                  </span>
                  {experiences[expandedIdx].current && (
                    <span className="flex items-center gap-1.5 text-[9px] font-mono font-bold text-emerald-500 uppercase tracking-wider">
                      <span className="w-1 h-1 bg-emerald-500 rounded-full animate-pulse" />
                      LIVE
                    </span>
                  )}
                </div>

                <h3 className="text-2xl font-display font-black text-text-primary mb-2 leading-tight">
                  {experiences[expandedIdx].role}
                </h3>
                <div className="flex items-center gap-1.5 text-sm text-text-secondary font-bold mb-1">
                  <Briefcase size={14} className="text-primary" />
                  {experiences[expandedIdx].company}
                </div>
                <div className="flex items-center gap-1.5 text-xs text-text-muted">
                  <MapPin size={12} />
                  {experiences[expandedIdx].location}
                </div>

                <div className="mt-8 pt-6 border-t border-border">
                  <div className="text-[9px] font-mono text-text-muted uppercase tracking-widest mb-3">Core_Stack</div>
                  <div className="flex flex-wrap gap-1.5">
                    {experiences[expandedIdx].stack.map(s => (
                      <span key={s} className="px-2 py-1 text-[9px] font-mono text-text-muted bg-surface-muted border border-border rounded-sm">
                        {s}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Right: Contributions */}
              <div className="col-span-8 p-10">
                <p className="text-text-secondary leading-relaxed mb-8 text-base italic border-l-2 border-primary/20 pl-5">
                  {experiences[expandedIdx].summary}
                </p>

                <div className="text-[9px] font-mono text-text-muted uppercase tracking-widest mb-5">Key_Contributions</div>
                <div className="space-y-4">
                  {experiences[expandedIdx].points.map((point, j) => (
                    <div key={j} className="flex items-start gap-4 group/pt">
                      <div className="mt-1.5 flex-shrink-0">
                        <ChevronRight size={14} className="text-primary/40 group-hover/pt:text-primary transition-colors" />
                      </div>
                      <p className="text-sm text-text-secondary leading-relaxed group-hover/pt:text-text-primary transition-colors">
                        {point}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Mobile: Compact Vertical Timeline */}
        <div className="lg:hidden relative">
          {/* Vertical line */}
          <div className="absolute left-4 top-0 bottom-0 w-px bg-gradient-to-b from-primary via-border to-transparent" />

          <div className="space-y-6">
            {experiences.map((exp, i) => {
              const isOpen = expandedIdx === i;
              return (
                <div key={i} className="relative pl-12">
                  {/* Node */}
                  <button
                    onClick={() => setExpandedIdx(isOpen ? -1 : i)}
                    className={`absolute left-0 top-2 w-8 h-8 rounded-full border-[3px] flex items-center justify-center z-10 transition-all ${
                      isOpen
                        ? 'border-primary bg-primary shadow-lg shadow-primary/20'
                        : exp.current
                        ? 'border-primary/40 bg-surface-base'
                        : 'border-border bg-surface-base'
                    }`}
                  >
                    {isOpen && <div className="w-1.5 h-1.5 bg-white rounded-full" />}
                    {exp.current && !isOpen && <div className="w-1.5 h-1.5 bg-primary/60 rounded-full animate-pulse" />}
                  </button>

                  {/* Card */}
                  <div
                    className={`border rounded-sm overflow-hidden transition-all duration-300 cursor-pointer ${
                      isOpen ? 'border-primary/30 bg-surface-elevated' : 'border-border bg-surface-muted/50'
                    }`}
                    onClick={() => setExpandedIdx(isOpen ? -1 : i)}
                  >
                    {/* Header always visible */}
                    <div className="p-4">
                      <div className="flex items-center gap-2 mb-2">
                        <span className="font-mono text-[10px] font-bold text-primary uppercase tracking-widest">
                          {exp.period}
                        </span>
                        {exp.current && (
                          <span className="flex items-center gap-1 text-[8px] font-mono font-bold text-emerald-500 uppercase">
                            <span className="w-1 h-1 bg-emerald-500 rounded-full animate-pulse" />
                            LIVE
                          </span>
                        )}
                      </div>
                      <h3 className={`text-base font-display font-bold transition-colors ${
                        isOpen ? 'text-primary' : 'text-text-primary'
                      }`}>
                        {exp.role}
                      </h3>
                      <div className="flex items-center gap-2 mt-1 text-xs text-text-muted">
                        <span className="font-bold text-text-secondary">{exp.company}</span>
                        <span>•</span>
                        <span>{exp.location}</span>
                      </div>
                    </div>

                    {/* Expandable Content */}
                    {isOpen && (
                      <div className="px-4 pb-5 border-t border-border pt-4 space-y-4">
                        <p className="text-sm text-text-secondary italic border-l-2 border-primary/20 pl-3">
                          {exp.summary}
                        </p>
                        <div className="space-y-3">
                          {exp.points.map((point, j) => (
                            <div key={j} className="flex items-start gap-2.5">
                              <ChevronRight size={12} className="text-primary/40 mt-1 flex-shrink-0" />
                              <p className="text-xs text-text-secondary leading-relaxed">{point}</p>
                            </div>
                          ))}
                        </div>
                        <div className="flex flex-wrap gap-1.5 pt-2">
                          {exp.stack.map(s => (
                            <span key={s} className="px-2 py-0.5 text-[9px] font-mono text-text-muted bg-surface-muted border border-border rounded-sm">
                              {s}
                            </span>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};
