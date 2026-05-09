'use client';

import React from 'react';
import Image from 'next/image';
import { ArrowRight, Download } from 'lucide-react';
import { GithubIcon, LinkedinIcon, XIcon } from './SocialIcons';

export const Hero = () => {
  return (
    <section className="relative min-h-[85vh] flex items-center pt-24 pb-16 overflow-hidden">
      {/* Subtle gradient orb */}
      <div className="absolute top-1/3 right-0 w-[500px] h-[500px] bg-primary/5 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 left-1/4 w-[400px] h-[400px] bg-secondary/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="section-container w-full">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 lg:gap-16 items-center">
          {/* Left — Content (3 cols) */}
          <div className="lg:col-span-3 flex flex-col gap-6">
            {/* Availability badge */}
            <div className="inline-flex items-center gap-2.5 px-4 py-1.5 bg-primary/5 border border-primary/10 rounded-full w-fit">
              <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
              <span className="font-mono text-xs text-primary font-medium">
                Available for new projects
              </span>
            </div>

            {/* Headline */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-display font-bold leading-[1.1] tracking-tight">
              I build systems that{' '}
              <span className="gradient-text">scale, perform,</span>
              <br />
              and stand the test of time.
            </h1>

            {/* Description */}
            <p className="text-lg text-text-secondary leading-relaxed max-w-xl">
              Senior Developer & IT Lead with 8+ years crafting production-grade 
              applications. From microservice architectures to cross-platform mobile 
              experiences — I bridge technical vision with engineering excellence.
            </p>

            {/* CTAs */}
            <div className="flex flex-wrap items-center gap-3 mt-2">
              <a href="#work" className="btn-primary">
                View My Work
                <ArrowRight size={16} />
              </a>
              <button className="btn-secondary">
                <Download size={16} />
                Resume
              </button>
            </div>

            {/* Social Links */}
            <div className="flex items-center gap-4 mt-4">
              <span className="text-xs text-text-muted font-mono uppercase tracking-wider">Find me</span>
              <div className="h-px w-8 bg-border" />
              <div className="flex items-center gap-2">
                {[
                  { icon: <GithubIcon size={18} />, href: 'https://github.com', label: 'GitHub' },
                  { icon: <LinkedinIcon size={18} />, href: 'https://linkedin.com', label: 'LinkedIn' },
                  { icon: <XIcon size={16} />, href: 'https://x.com', label: 'X' },
                ].map((social) => (
                  <a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={social.label}
                    className="w-9 h-9 flex items-center justify-center rounded-lg text-text-muted hover:text-primary hover:bg-primary/5 transition-all duration-200"
                  >
                    {social.icon}
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Right — Portrait (2 cols) */}
          <div className="lg:col-span-2 flex justify-center lg:justify-end">
            <div className="relative group">
              {/* Technical Decorative Elements */}
              <div className="absolute -top-6 -left-6 w-12 h-12 border-t-2 border-l-2 border-primary/30" />
              <div className="absolute -bottom-6 -right-6 w-12 h-12 border-b-2 border-r-2 border-secondary/30" />
              
              <div className="absolute top-0 right-0 p-2 font-mono text-[8px] text-text-muted/40 uppercase tracking-[0.2em] vertical-text">
                Architecture & Engineering
              </div>

              {/* Offset Background Frame */}
              <div className="absolute inset-0 translate-x-4 translate-y-4 border border-border transition-transform duration-500 group-hover:translate-x-6 group-hover:translate-y-6" />

              {/* Photo container */}
              <div className="relative w-72 h-88 sm:w-80 sm:h-[24rem] overflow-hidden bg-surface-muted shadow-2xl border border-border">
                <Image
                  src="/me.jpeg"
                  alt="Mpango Hamza Rahman"
                  fill
                  priority
                  unoptimized
                  quality={100}
                  className="object-cover object-top grayscale hover:grayscale-0 transition-all duration-700 scale-105 hover:scale-100"
                />
                
                {/* Scanning line animation */}
                <div className="absolute top-0 left-0 w-full h-0.5 bg-primary/40 shadow-[0_0_10px_rgba(99,102,241,0.8)] animate-scan" />
                
                {/* Subtle vignette */}
                <div className="absolute inset-0 bg-gradient-to-t from-text-primary/40 via-transparent to-transparent pointer-events-none" />
              </div>

              {/* Technical Info Overlays - Integrated & Architectural */}
              <div className="absolute top-0 left-0 -translate-x-1/2 translate-y-12 z-20 hidden sm:block">
                <div className="flex flex-col">
                  <div className="bg-text-primary px-3 py-1 text-[10px] font-mono text-white tracking-widest uppercase">
                    Tenure
                  </div>
                  <div className="bg-white/90 backdrop-blur-md border border-t-0 border-border px-3 py-2">
                    <span className="text-2xl font-display font-bold text-text-primary">08</span>
                    <span className="text-[10px] font-mono text-text-muted ml-1 italic">Years</span>
                  </div>
                </div>
              </div>

              <div className="absolute bottom-0 right-0 translate-x-1/4 -translate-y-8 z-20">
                <div className="flex flex-col items-end">
                  <div className="bg-primary px-3 py-1 text-[9px] font-mono text-white tracking-[0.2em] uppercase">
                    Production_Output
                  </div>
                  <div className="bg-white/90 backdrop-blur-md border border-t-0 border-border px-4 py-2 flex items-baseline gap-2">
                    <span className="text-3xl font-display font-bold text-text-primary">50</span>
                    <div className="flex flex-col -gap-1">
                      <span className="text-[10px] font-mono text-primary font-bold leading-none">+</span>
                      <span className="text-[8px] font-mono text-text-muted uppercase leading-none">Projects</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Data Strip at bottom of image */}
              <div className="absolute bottom-0 left-0 w-full bg-text-primary/10 backdrop-blur-sm px-3 py-1.5 flex justify-between items-center border-t border-white/10">
                <div className="flex gap-4">
                  <div className="flex flex-col">
                    <span className="text-[7px] font-mono text-white/50 uppercase">Status</span>
                    <span className="text-[8px] font-mono text-white tracking-wider uppercase">Active_Engine</span>
                  </div>
                  <div className="flex flex-col">
                    <span className="text-[7px] font-mono text-white/50 uppercase">Region</span>
                    <span className="text-[8px] font-mono text-white tracking-wider uppercase">East_Africa</span>
                  </div>
                </div>
                <div className="w-1.5 h-1.5 bg-green-500 rounded-full animate-pulse shadow-[0_0_8px_rgba(34,197,94,0.6)]" />
              </div>

              {/* Corner Coordinates */}
              <div className="absolute -top-10 -right-4 font-mono text-[9px] text-text-muted/60">
                REF_ID: 00492-Z
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
