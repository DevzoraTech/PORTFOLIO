'use client';

import React from 'react';
import { TechIcon } from './TechIcon';

const techStack = [
  'flutter', 'react', 'ts', 'go', 'java', 'dart', 'nestjs', 'nextjs',
  'tailwindcss', 'prisma', 'aws', 'docker', 'postgresql', 'redis'
];

export const TechStackMarquee = () => {
  return (
    <section className="py-20 border-y border-slate-50 bg-slate-50/30 backdrop-blur-3xl overflow-hidden relative">
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="absolute top-0 left-0 h-full w-60 bg-gradient-to-r from-white to-transparent" />
        <div className="absolute top-0 right-0 h-full w-60 bg-gradient-to-l from-white to-transparent" />
      </div>

      <div className="flex w-fit animate-marquee gap-32 items-center">
        {/* First Set */}
        {techStack.map((tech, i) => (
          <div key={i} className="flex items-center gap-6 group whitespace-nowrap">
            <TechIcon name={tech} className="w-14 h-14 border-slate-100 bg-white group-hover:border-brand-primary/50 group-hover:scale-110 transition-all shadow-sm" />
            <span className="font-mono text-xs uppercase tracking-[0.4em] text-slate-300 group-hover:text-slate-900 transition-colors">
              {tech}
            </span>
          </div>
        ))}
        {/* Second Set */}
        {techStack.map((tech, i) => (
          <div key={`dup-${i}`} className="flex items-center gap-6 group whitespace-nowrap">
            <TechIcon name={tech} className="w-14 h-14 border-slate-100 bg-white group-hover:border-brand-primary/50 group-hover:scale-110 transition-all shadow-sm" />
            <span className="font-mono text-xs uppercase tracking-[0.4em] text-slate-300 group-hover:text-slate-900 transition-colors">
              {tech}
            </span>
          </div>
        ))}
      </div>
    </section>
  );
};
