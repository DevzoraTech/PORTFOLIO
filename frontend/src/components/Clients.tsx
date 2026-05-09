'use client';

import React from 'react';

const clients = [
  { name: 'Ministry of Energy', location: 'Uganda', color: 'text-amber-600' },
  { name: 'Tukivu Systems', location: 'Kampala', color: 'text-primary' },
  { name: 'Sheraton Hotel', location: 'Hospitality', color: 'text-secondary' },
  { name: 'Great Naturals', location: 'Tanzania', color: 'text-emerald-600' },
  { name: 'Weyonge', location: 'Logistics', color: 'text-accent' },
  { name: 'Devzora Tech', location: 'Software', color: 'text-text-primary' },
  { name: 'Life Care', location: 'Healthcare', color: 'text-rose-600' },
  { name: 'Uganda Govt', location: 'Public Sector', color: 'text-text-secondary' },
];

export const Clients = () => {
  // Double the list for seamless looping
  const marqueeItems = [...clients, ...clients];

  return (
    <section className="py-16 bg-surface-muted/30 border-y border-border-light overflow-hidden">
      <div className="section-container mb-10">
        <div className="flex flex-col items-center text-center">
          <div className="font-mono text-[10px] text-text-muted uppercase tracking-[0.3em] mb-4">Trusted Architecture Deployment</div>
          <h3 className="text-sm font-display font-bold text-text-secondary uppercase tracking-widest">
            Strategic Partners & Clients
          </h3>
        </div>
      </div>

      <div className="relative">
        {/* Fades */}
        <div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-surface-base to-transparent z-10" />
        <div className="absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-surface-base to-transparent z-10" />

        <div className="animate-logo-marquee">
          {marqueeItems.map((client, i) => (
            <div 
              key={i} 
              className="flex items-center gap-4 px-12 py-4 grayscale opacity-40 hover:grayscale-0 hover:opacity-100 transition-all duration-500 cursor-default"
            >
              <div className="flex flex-col items-start">
                <div className={`text-xl sm:text-2xl font-display font-black tracking-tighter uppercase ${client.color}`}>
                  {client.name}
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-1 h-1 bg-border rounded-full" />
                  <span className="text-[10px] font-mono text-text-muted uppercase tracking-widest">
                    {client.location}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
