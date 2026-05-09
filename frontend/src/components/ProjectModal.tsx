'use client';

import React, { useEffect } from 'react';
import Image from 'next/image';
import { X, Shield, Cpu, Zap, Layers, ExternalLink, ArrowUpRight } from 'lucide-react';
import { GithubIcon } from './SocialIcons';

interface ProjectModalProps {
  project: any;
  onClose: () => void;
}

export const ProjectModal = ({ project, onClose }: ProjectModalProps) => {
  const [fullscreenImage, setFullscreenImage] = React.useState<string | null>(null);

  // Prevent body scroll when modal is open
  useEffect(() => {
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, []);

  if (!project) return null;

  return (
    <>
      <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6 md:p-10">
        {/* Backdrop */}
        <div 
          className="absolute inset-0 bg-text-primary/60 backdrop-blur-md transition-opacity duration-300 animate-fade-in"
          onClick={onClose}
        />
        
        {/* Modal Content */}
        <div className="relative w-full max-w-4xl max-h-[90vh] bg-surface-elevated shadow-2xl overflow-y-auto animate-slide-up border border-border">
          {/* Sticky Header */}
          <div className="sticky top-0 z-10 flex items-center justify-between px-6 py-4 bg-surface-elevated/80 backdrop-blur-md border-bottom border-border">
            <div>
              <div className="font-mono text-[10px] text-primary font-medium uppercase tracking-widest">Project Details</div>
              <h3 className="text-xl font-display font-bold text-text-primary">{project.title}</h3>
            </div>
            <button 
              onClick={onClose}
              className="w-10 h-10 flex items-center justify-center rounded-full hover:bg-surface-muted transition-colors text-text-secondary hover:text-text-primary"
            >
              <X size={20} />
            </button>
          </div>

          {/* Content Body */}
          <div className="p-6 md:p-8 space-y-16">
            {/* Top Section: Hero Info */}
            <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 items-start">
              <div className="lg:col-span-3">
                <p className="text-xl text-text-secondary leading-relaxed mb-8 font-display italic">
                  &ldquo;{project.description}&rdquo;
                </p>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag: string) => (
                    <span key={tag} className="px-3 py-1 bg-primary/5 text-primary text-[10px] font-mono font-bold rounded-full border border-primary/10 uppercase tracking-widest">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
              <div className="lg:col-span-2 flex flex-col gap-4">
                <div className="flex items-center gap-3">
                  <a 
                    href={project.liveUrl} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex-1 btn-primary justify-center text-xs py-4"
                  >
                    <ExternalLink size={14} />
                    Live Deployment
                  </a>
                  <a 
                    href={project.githubUrl}
                    className="w-14 h-14 flex items-center justify-center border border-border rounded-xl text-text-secondary hover:text-primary hover:border-primary transition-all"
                  >
                    <GithubIcon size={20} />
                  </a>
                </div>
                <div className="p-5 bg-surface-muted border border-border rounded-xl">
                  <div className="text-[10px] font-mono text-text-muted uppercase mb-1 tracking-widest">Core Infrastructure</div>
                  <div className="flex items-center gap-2">
                    <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
                    <span className="text-xs font-bold text-text-primary uppercase">Active Production System</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Technical Features Grid */}
            {project.features && (
              <div className="space-y-12">
                <div className="flex items-center gap-4">
                  <h4 className="text-xs font-mono font-bold text-primary uppercase tracking-[0.3em]">Technical Features</h4>
                  <div className="h-px flex-1 bg-border" />
                </div>
                
                <div className="space-y-24">
                  {project.features.map((feature: any, idx: number) => (
                    <div key={idx} className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${idx % 2 === 1 ? 'lg:direction-rtl' : ''}`}>
                      <div className={`space-y-6 ${idx % 2 === 1 ? 'lg:order-2' : ''}`}>
                        <div className="inline-block px-3 py-1 bg-primary/5 border border-primary/10 rounded-md">
                          <span className="text-[10px] font-mono text-primary font-bold uppercase tracking-widest">Feature_{idx + 1}</span>
                        </div>
                        <h5 className="text-2xl font-display font-bold text-text-primary">{feature.title}</h5>
                        <p className="text-text-secondary leading-relaxed text-sm">
                          {feature.description}
                        </p>
                        {feature.technicalNotes && (
                          <div className="p-4 bg-surface-muted border-l-2 border-primary/30 font-mono text-[11px] text-text-muted leading-relaxed">
                            <span className="text-primary font-bold">TECH_NOTE:</span> {feature.technicalNotes}
                          </div>
                        )}
                      </div>
                      
                      <div 
                        className={`relative aspect-video rounded-2xl overflow-hidden border border-border bg-surface-muted shadow-xl group/img cursor-zoom-in ${idx % 2 === 1 ? 'lg:order-1' : ''}`}
                        onClick={() => setFullscreenImage(feature.image)}
                      >
                        <Image 
                          src={feature.image} 
                          alt={feature.title}
                          fill
                          className="object-cover transition-transform duration-700 group-hover/img:scale-105"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-text-primary/20 via-transparent to-transparent opacity-0 group-hover/img:opacity-100 transition-opacity flex items-center justify-center">
                          <div className="bg-white/90 backdrop-blur-md px-4 py-2 rounded-full flex items-center gap-2 scale-90 group-hover/img:scale-100 transition-transform shadow-lg">
                            <ArrowUpRight size={14} className="text-primary" />
                            <span className="text-[10px] font-mono font-bold text-text-primary uppercase tracking-widest">Enlarge Preview</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Detailed Sections (Architecture/Security) */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-12 border-t border-border pt-16">
              {/* Architecture */}
              <div className="space-y-4">
                <div className="flex items-center gap-3 text-primary">
                  <Layers size={18} />
                  <h4 className="font-display font-bold uppercase tracking-widest text-xs">Architecture</h4>
                </div>
                <p className="text-xs text-text-secondary leading-relaxed">
                  {project.details.architecture}
                </p>
              </div>

              {/* Security */}
              <div className="space-y-4">
                <div className="flex items-center gap-3 text-secondary">
                  <Shield size={18} />
                  <h4 className="font-display font-bold uppercase tracking-widest text-xs">Security</h4>
                </div>
                <p className="text-xs text-text-secondary leading-relaxed">
                  {project.details.security}
                </p>
              </div>

              {/* Implementation */}
              <div className="space-y-4">
                <div className="flex items-center gap-3 text-accent">
                  <Zap size={18} />
                  <h4 className="font-display font-bold uppercase tracking-widest text-xs">Implementation</h4>
                </div>
                <p className="text-xs text-text-secondary leading-relaxed">
                  {project.details.implementation}
                </p>
              </div>
            </div>
          </div>

          {/* Footer */}
          <div className="p-6 bg-surface-muted text-center border-t border-border">
            <p className="text-[10px] font-mono text-text-muted uppercase tracking-[0.2em]">
              Technical Documentation &mdash; {project.title} &mdash; 2026
            </p>
          </div>
        </div>
      </div>

      {/* Fullscreen Image Lightbox */}
      {fullscreenImage && (
        <div 
          className="fixed inset-0 z-[200] bg-text-primary/95 backdrop-blur-xl flex items-center justify-center p-4 sm:p-12 cursor-zoom-out animate-fade-in"
          onClick={() => setFullscreenImage(null)}
        >
          <button className="absolute top-8 right-8 text-white/50 hover:text-white transition-colors">
            <X size={32} />
          </button>
          <div className="relative w-full h-full max-w-6xl">
            <Image 
              src={fullscreenImage} 
              alt="Fullscreen preview"
              fill
              className="object-contain"
              priority
            />
          </div>
        </div>
      )}
    </>
  );
};
