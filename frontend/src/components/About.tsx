'use client';

import React from 'react';
import { Code2, Briefcase, Users, Cpu } from 'lucide-react';

const stats = [
  { icon: <Code2 size={20} />, value: '8+', label: 'Years Experience' },
  { icon: <Briefcase size={20} />, value: '50+', label: 'Projects Delivered' },
  { icon: <Cpu size={20} />, value: '15+', label: 'Technologies' },
  { icon: <Users size={20} />, value: '30+', label: 'Clients Served' },
];

export const About = () => {
  return (
    <section id="about" className="py-20 border-t border-border-light">
      <div className="section-container">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          {/* Left — Bio */}
          <div>
            <div className="section-label">
              <span className="w-1.5 h-1.5 bg-primary rounded-full" />
              About Me
            </div>
            <h2 className="section-title mb-6">
              Engineering software that{' '}
              <span className="gradient-text">solves real problems</span>
            </h2>
            <div className="space-y-4 text-text-secondary leading-relaxed">
              <p>
                I&apos;m Mpango Hamza Rahman, a full-stack software engineer and the founder of{' '}
                <strong className="text-text-primary">Devzora Technologies</strong>. I specialize
                in designing and building complex digital systems — from high-throughput backend
                architectures to polished mobile and web experiences.
              </p>
              <p>
                My approach is rooted in clean architecture principles: every system I build is
                modular, testable, and designed to scale. I believe complexity should be managed
                through clear abstractions, not brute force — and that great software is as much
                about the engineering process as the final product.
              </p>
            </div>
          </div>

          {/* Right — Stats Grid */}
          <div className="grid grid-cols-2 gap-4">
            {stats.map((stat, i) => (
              <div
                key={i}
                className="glass-card p-6 card-hover group"
              >
                <div className="w-10 h-10 rounded-lg bg-primary/5 flex items-center justify-center text-primary mb-4 group-hover:bg-primary group-hover:text-white transition-all duration-300">
                  {stat.icon}
                </div>
                <div className="text-3xl font-display font-bold text-text-primary mb-1">
                  {stat.value}
                </div>
                <div className="text-sm text-text-muted font-medium">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
