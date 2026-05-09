'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { ExternalLink, ArrowUpRight, Info } from 'lucide-react';
import { GithubIcon } from './SocialIcons';
import { ProjectModal } from './ProjectModal';

import { projects } from '@/data/projects';

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
                      unoptimized
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
              className="glass-card overflow-hidden card-hover group cursor-pointer border border-border/50 hover:border-primary/30 flex flex-col"
            >
              <div className="relative aspect-video bg-surface-muted overflow-hidden">
                {project.image ? (
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    unoptimized
                    className="object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                ) : (
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-secondary/5 flex items-center justify-center">
                    <span className="text-4xl font-display font-bold text-primary/20">{project.title.charAt(0)}</span>
                  </div>
                )}
                <div className="absolute inset-0 bg-gradient-to-t from-text-primary/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
              </div>
              
              <div className="p-6 flex-1 flex flex-col">
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
                    className="text-text-muted group-hover:text-primary transition-all duration-300"
                  />
                </div>
                <p className="text-sm text-text-secondary leading-relaxed mb-6 line-clamp-2">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-1.5 mt-auto">
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
