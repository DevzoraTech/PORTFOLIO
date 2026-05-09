'use client';

import React from 'react';
import { ArrowUpRight } from 'lucide-react';
import { ServiceLottie } from './ServiceLottie';

const services = [
  {
    animationPath: '/lotties/systems-architecture.json',
    title: 'System Architecture',
    desc: 'Distributed backends with NestJS, Go, and event-driven patterns. Built for high throughput and clean modularity.',
    tags: ['NestJS', 'Go', 'Kafka', 'Redis'],
  },
  {
    animationPath: '/lotties/web-development.json',
    title: 'Web Development',
    desc: 'High-performance web applications using Next.js and React. Focused on speed, accessibility, and user experience.',
    tags: ['Next.js', 'React', 'TypeScript'],
  },
  {
    animationPath: '/lotties/mobile-development.json',
    title: 'Mobile Development',
    desc: 'Cross-platform mobile apps with Flutter and React Native. Native performance, beautiful interfaces, single codebase.',
    tags: ['Flutter', 'React Native', 'Expo', 'Dart'],
  },
  {
    animationPath: '/lotties/devops-cloud.json',
    title: 'DevOps & Cloud',
    desc: 'Automated CI/CD pipelines, containerized deployments, and cloud infrastructure management on AWS.',
    tags: ['Docker', 'AWS', 'CI/CD', 'Nginx'],
  },
];

export const Services = () => {
  return (
    <section id="services" className="py-20">
      <div className="section-container">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 lg:gap-16">
          {/* Left — Section Header */}
          <div className="lg:col-span-1">
            <div className="section-label">
              <span className="w-1.5 h-1.5 bg-primary rounded-full" />
              What I Do
            </div>
            <h2 className="section-title mb-4">
              Services &{' '}
              <span className="gradient-text">expertise</span>
            </h2>
            <p className="text-text-secondary leading-relaxed">
              I offer end-to-end software engineering services, from architecture 
              design to deployment. Every project is built with scalability, 
              maintainability, and performance in mind.
            </p>
          </div>

          {/* Right — Service Cards Grid */}
          <div className="lg:col-span-2 grid grid-cols-1 sm:grid-cols-2 gap-4">
            {services.map((service, i) => (
              <div
                key={i}
                className="glass-card p-6 card-hover group cursor-pointer"
              >
                <div className="flex items-start justify-between mb-2">
                  <ServiceLottie 
                    animationPath={service.animationPath}
                    className="w-16 h-16 -ml-2" 
                  />
                  <ArrowUpRight 
                    size={16} 
                    className="text-text-muted opacity-0 group-hover:opacity-100 group-hover:text-primary transition-all duration-300 translate-x-1 -translate-y-1 group-hover:translate-x-0 group-hover:translate-y-0" 
                  />
                </div>

                <h3 className="text-lg font-display font-semibold text-text-primary mb-2">
                  {service.title}
                </h3>
                <p className="text-sm text-text-secondary leading-relaxed mb-4">
                  {service.desc}
                </p>

                <div className="flex flex-wrap gap-1.5">
                  {service.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-2 py-0.5 text-xs font-mono font-medium text-text-muted bg-surface-muted rounded-md"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
