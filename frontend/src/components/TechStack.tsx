'use client';

import React, { useState, useCallback } from 'react';
import Image from 'next/image';
import { projects } from '@/data/projects';

/* ──────────────────────── Data ──────────────────────── */

interface TechNode {
  name: string;
  icon: string;
  category: 'backend' | 'frontend' | 'mobile' | 'devops' | 'data';
  projects: string[];   // project IDs that use this tech
  proficiency: number;  // 0-100
}

const techNodes: TechNode[] = [
  // Backend
  { name: 'NestJS',      icon: '/icons/nestjs.svg',        category: 'backend',  projects: ['rest-os', 'weyonge'],                     proficiency: 98 },
  { name: 'Node.js',     icon: '/icons/node-js.svg',       category: 'backend',  projects: ['rest-os', 'carmie', 'weyonge'],            proficiency: 95 },
  { name: 'Express',     icon: '/icons/express.png',       category: 'backend',  projects: ['carmie'],                                  proficiency: 90 },
  { name: 'Go',          icon: '/icons/go.svg',            category: 'backend',  projects: [],                                          proficiency: 60 },
  { name: 'Java',        icon: '/icons/java.svg',          category: 'backend',  projects: [],                                          proficiency: 70 },
  // Data
  { name: 'PostgreSQL',  icon: '/icons/postgresql.svg',    category: 'data',     projects: ['rest-os', 'weyonge'],                      proficiency: 95 },
  { name: 'MongoDB',     icon: '/icons/mongodb.jpg',       category: 'data',     projects: ['carmie'],                                  proficiency: 88 },
  { name: 'Supabase',    icon: '/icons/supabase.jpeg',     category: 'data',     projects: ['lifecare', 'great-naturals'],               proficiency: 92 },
  { name: 'Firebase',    icon: '/icons/firebase.png',      category: 'data',     projects: [],                                          proficiency: 85 },
  { name: 'Prisma',      icon: '/icons/prisma.svg',        category: 'data',     projects: ['rest-os', 'weyonge'],                      proficiency: 96 },
  { name: 'Redis',       icon: '/icons/redis.svg',         category: 'data',     projects: ['rest-os'],                                 proficiency: 80 },
  { name: 'Kafka',       icon: '/icons/apache-kafka.svg',  category: 'data',     projects: [],                                          proficiency: 65 },
  // Frontend
  { name: 'Next.js',     icon: '/icons/next.svg',          category: 'frontend', projects: ['rest-os'],                                 proficiency: 96 },
  { name: 'React',       icon: '/icons/react.svg',         category: 'frontend', projects: ['insightcore', 'lifecare', 'great-naturals'],proficiency: 97 },
  { name: 'TypeScript',  icon: '/icons/typescript.svg',    category: 'frontend', projects: ['rest-os', 'insightcore', 'lifecare', 'carmie', 'weyonge', 'great-naturals'], proficiency: 98 },
  { name: 'Tailwind',    icon: '/icons/tailwind-css.svg',  category: 'frontend', projects: ['rest-os', 'insightcore', 'lifecare'],       proficiency: 95 },
  { name: 'Single-SPA',  icon: '/icons/single-spa.png',    category: 'frontend', projects: ['carmie'],                                  proficiency: 85 },
  // Mobile
  { name: 'Flutter',     icon: '/icons/flutter.svg',       category: 'mobile',   projects: ['rest-os', 'weyonge'],                      proficiency: 92 },
  { name: 'React Native',icon: '/icons/react-native.png',  category: 'mobile',   projects: ['carmie'],                                  proficiency: 90 },
  { name: 'Dart',        icon: '/icons/dart.svg',          category: 'mobile',   projects: ['rest-os', 'weyonge'],                      proficiency: 90 },
  { name: 'Expo',        icon: '/icons/expo.png',          category: 'mobile',   projects: ['carmie'],                                  proficiency: 88 },
  // DevOps
  { name: 'Docker',      icon: '/icons/docker.svg',        category: 'devops',   projects: ['rest-os', 'carmie'],                       proficiency: 88 },
  { name: 'AWS',         icon: '/icons/aws.svg',           category: 'devops',   projects: ['rest-os'],                                 proficiency: 82 },
  { name: 'CI/CD',       icon: '/icons/ci-cd-pipeline.png',category: 'devops',   projects: ['rest-os', 'carmie', 'weyonge'],            proficiency: 85 },
  { name: 'Nginx',       icon: '/icons/nginx.jpeg',        category: 'devops',   projects: ['rest-os', 'carmie'],                       proficiency: 80 },
];

const categoryMeta: Record<string, { label: string; color: string; border: string }> = {
  backend:  { label: 'Backend Engine',      color: 'text-indigo-400', border: 'border-indigo-500/30' },
  frontend: { label: 'Frontend Interface',  color: 'text-cyan-400',   border: 'border-cyan-500/30' },
  mobile:   { label: 'Mobile Systems',      color: 'text-amber-400',  border: 'border-amber-500/30' },
  data:     { label: 'Data Infrastructure', color: 'text-emerald-400',border: 'border-emerald-500/30' },
  devops:   { label: 'DevOps & Infra',     color: 'text-rose-400',   border: 'border-rose-500/30' },
};

/* ──────────────────────── Component ──────────────────────── */

export const TechStack = () => {
  const [activeTech, setActiveTech] = useState<TechNode | null>(null);
  const [activeCategory, setActiveCategory] = useState<string | null>(null);

  const handleTechClick = useCallback((tech: TechNode) => {
    setActiveTech(prev => prev?.name === tech.name ? null : tech);
  }, []);

  const connectedProjects = activeTech
    ? projects.filter(p => activeTech.projects.includes(p.id))
    : [];

  const filteredNodes = activeCategory
    ? techNodes.filter(t => t.category === activeCategory)
    : techNodes;

  return (
    <section id="skills" className="py-24 bg-surface-base border-y border-border-light relative overflow-hidden">
      {/* Background Grid */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute inset-0 opacity-[0.03]" style={{
          backgroundImage: 'radial-gradient(circle, currentColor 0.5px, transparent 0.5px)',
          backgroundSize: '20px 20px'
        }} />
      </div>

      <div className="section-container relative">
        {/* Header */}
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-end gap-6 mb-16">
          <div>
            <div className="section-label">
              <span className="w-1.5 h-1.5 bg-primary rounded-full" />
              Infrastructure Map
            </div>
            <h2 className="section-title">
              Technology <span className="gradient-text">Interconnect</span>
            </h2>
            <p className="text-sm text-text-muted mt-2 max-w-md">
              Click any technology to reveal how it connects across my production systems.
            </p>
          </div>

          {/* Category Filters */}
          <div className="flex flex-wrap gap-2">
            <button
              onClick={() => setActiveCategory(null)}
              className={`px-3 py-1.5 font-mono text-[10px] uppercase tracking-widest border transition-all rounded-sm ${
                !activeCategory
                  ? 'bg-primary/10 border-primary/30 text-primary'
                  : 'bg-surface-muted border-border text-text-muted hover:text-text-primary hover:border-border'
              }`}
            >
              All_Nodes
            </button>
            {Object.entries(categoryMeta).map(([key, meta]) => (
              <button
                key={key}
                onClick={() => setActiveCategory(prev => prev === key ? null : key)}
                className={`px-3 py-1.5 font-mono text-[10px] uppercase tracking-widest border transition-all rounded-sm ${
                  activeCategory === key
                    ? `bg-white/5 ${meta.border} ${meta.color}`
                    : 'bg-surface-muted border-border text-text-muted hover:text-text-primary'
                }`}
              >
                {meta.label}
              </button>
            ))}
          </div>
        </div>

        {/* Main Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Tech Node Grid */}
          <div className="lg:col-span-2">
            <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 gap-3">
              {filteredNodes.map((tech) => {
                const meta = categoryMeta[tech.category];
                const isActive = activeTech?.name === tech.name;
                const isConnected = activeTech && tech.projects.some(p => activeTech.projects.includes(p));
                const isDimmed = activeTech && !isActive && !isConnected;

                return (
                  <button
                    key={tech.name}
                    onClick={() => handleTechClick(tech)}
                    className={`relative group flex flex-col items-center gap-3 p-4 border rounded-sm transition-all duration-300 cursor-pointer ${
                      isActive
                        ? `bg-primary/10 border-primary/40 shadow-[0_0_20px_rgba(99,102,241,0.15)]`
                        : isConnected
                        ? `bg-white/[0.04] ${meta.border}`
                        : isDimmed
                        ? 'bg-surface-muted/30 border-border/30 opacity-30'
                        : 'bg-surface-muted border-border hover:border-primary/20 hover:bg-primary/5'
                    }`}
                  >
                    {/* Proficiency Indicator */}
                    <div className="absolute top-1.5 right-1.5">
                      <div className={`w-1.5 h-1.5 rounded-full ${
                        tech.proficiency >= 90 ? 'bg-emerald-500' :
                        tech.proficiency >= 75 ? 'bg-amber-500' :
                        'bg-white/20'
                      }`} />
                    </div>

                    <div className="w-10 h-10 relative flex items-center justify-center">
                      <div className="absolute inset-0 flex items-center justify-center bg-surface-muted rounded text-[10px] font-bold text-text-muted">
                        {tech.name.charAt(0)}
                      </div>
                      <Image
                        src={tech.icon}
                        alt={tech.name}
                        width={28}
                        height={28}
                        unoptimized
                        className={`object-contain relative z-10 transition-all duration-300 ${
                          isActive ? 'grayscale-0 scale-110' :
                          isDimmed ? 'grayscale opacity-40' :
                          'grayscale group-hover:grayscale-0'
                        }`}
                        onError={(e) => {
                          (e.target as any).style.display = 'none';
                        }}
                      />
                    </div>
                    <span className={`text-[10px] font-mono font-medium transition-colors text-center leading-tight ${
                      isActive ? 'text-primary' : 'text-text-muted group-hover:text-text-primary'
                    }`}>
                      {tech.name}
                    </span>
                  </button>
                );
              })}
            </div>

            {/* Legend */}
            <div className="flex flex-wrap items-center gap-6 mt-8 pt-6 border-t border-border-light">
              <span className="text-[9px] font-mono text-text-muted uppercase tracking-widest">Proficiency:</span>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-emerald-500" />
                <span className="text-[10px] font-mono text-text-muted">Expert (90%+)</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-amber-500" />
                <span className="text-[10px] font-mono text-text-muted">Advanced (75%+)</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-white/20" />
                <span className="text-[10px] font-mono text-text-muted">Growing</span>
              </div>
            </div>
          </div>

          {/* Detail Panel */}
          <div className="lg:col-span-1">
            <div className="sticky top-28">
              {activeTech ? (
                <div className="border border-primary/20 bg-surface-elevated rounded-sm overflow-hidden animate-in fade-in slide-in-from-right-4 duration-300">
                  {/* Header */}
                  <div className="p-6 border-b border-border bg-primary/[0.03]">
                    <div className="flex items-center justify-between mb-4">
                      <div className="flex items-center gap-3">
                        <div className="w-12 h-12 relative flex items-center justify-center bg-surface-muted rounded-sm border border-border">
                          <Image
                            src={activeTech.icon}
                            alt={activeTech.name}
                            width={32}
                            height={32}
                            unoptimized
                            className="object-contain"
                            onError={(e) => { (e.target as any).style.display = 'none'; }}
                          />
                        </div>
                        <div>
                          <h3 className="font-display font-bold text-text-primary text-lg">{activeTech.name}</h3>
                          <span className={`text-[9px] font-mono uppercase tracking-widest ${categoryMeta[activeTech.category].color}`}>
                            {categoryMeta[activeTech.category].label}
                          </span>
                        </div>
                      </div>
                    </div>

                    {/* Proficiency Bar */}
                    <div className="space-y-2">
                      <div className="flex justify-between">
                        <span className="text-[9px] font-mono text-text-muted uppercase tracking-widest">Proficiency_Level</span>
                        <span className="text-[10px] font-mono text-primary font-bold">{activeTech.proficiency}%</span>
                      </div>
                      <div className="h-1 bg-surface-muted rounded-full overflow-hidden">
                        <div
                          className="h-full bg-gradient-to-r from-primary to-secondary rounded-full transition-all duration-700"
                          style={{ width: `${activeTech.proficiency}%` }}
                        />
                      </div>
                    </div>
                  </div>

                  {/* Connected Projects */}
                  <div className="p-6">
                    <div className="text-[9px] font-mono text-text-muted uppercase tracking-widest mb-4">
                      Connected_Systems ({connectedProjects.length})
                    </div>
                    {connectedProjects.length > 0 ? (
                      <div className="space-y-3">
                        {connectedProjects.map(proj => (
                          <div key={proj.id} className="flex items-center gap-3 p-3 bg-surface-muted border border-border rounded-sm group hover:border-primary/20 transition-all">
                            <div className="w-8 h-8 relative rounded-sm overflow-hidden border border-border flex-shrink-0">
                              <Image
                                src={proj.image}
                                alt={proj.title}
                                fill
                                unoptimized
                                className="object-cover"
                              />
                            </div>
                            <div className="min-w-0">
                              <div className="text-xs font-display font-bold text-text-primary truncate">{proj.title}</div>
                              <div className="text-[9px] font-mono text-text-muted truncate">{proj.subtitle}</div>
                            </div>
                          </div>
                        ))}
                      </div>
                    ) : (
                      <div className="p-4 border border-border/50 bg-surface-muted rounded-sm">
                        <div className="text-[10px] font-mono text-text-muted text-center">
                          STANDBY — No linked production systems
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              ) : (
                <div className="border border-border bg-surface-elevated rounded-sm p-8 text-center">
                  <div className="w-16 h-16 mx-auto mb-6 border-2 border-dashed border-border rounded-full flex items-center justify-center">
                    <div className="w-2 h-2 bg-primary/40 rounded-full animate-pulse" />
                  </div>
                  <div className="text-[10px] font-mono text-text-muted uppercase tracking-widest mb-2">
                    Awaiting_Selection
                  </div>
                  <p className="text-xs text-text-muted leading-relaxed">
                    Select a technology node to explore its connections across production systems
                  </p>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
