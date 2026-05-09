'use client';

import React from 'react';

interface TechIconProps {
  name: string;
  className?: string;
}

export const TechIcon = ({ name, className = "" }: TechIconProps) => {
  // Map tech names to simple SVG representations or labels
  const iconContent = (name: string) => {
    switch (name.toLowerCase()) {
      case 'flutter': return (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
          <path d="M14.33 6L7 13.32l2.33 2.33L16.66 8.32 14.33 6zM7 21.32l9.66-9.66-2.33-2.33L5 19l2 2.32z" />
        </svg>
      );
      case 'react': return (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <circle cx="12" cy="12" r="2" />
          <path d="M12 12c4.418 0 8-1.79 8-4s-3.582-4-8-4-8 1.79-8 4 3.582 4 8 4z" />
          <path d="M12 12c0 4.418 1.79 8 4 8s4-3.582 4-8-1.79-8-4-8-4 3.582-4 8z" rotate="120" />
          <path d="M12 12c-4.418 0-8 1.79-8 4s3.582 4 8 4 8-3.582 8-4-3.582-4-8-4z" rotate="240" />
        </svg>
      );
      case 'java': return <span className="text-[10px] font-bold">☕</span>;
      case 'dart': return <span className="text-[10px] font-bold">🎯</span>;
      case 'nestjs': return <span className="text-[10px] font-bold">N_</span>;
      case 'nextjs': return <span className="text-[10px] font-bold">NX</span>;
      case 'ts': return <span className="text-[10px] font-bold">TS</span>;
      case 'go': return <span className="text-[10px] font-bold">GO</span>;
      default: return <span className="text-[10px] font-bold">{name.charAt(0)}</span>;
    }
  };

  return (
    <div className={`w-12 h-12 flex items-center justify-center glass-card rounded-full border-slate-100 text-slate-900 hover:border-brand-primary transition-all duration-300 ${className}`}>
      {iconContent(name)}
    </div>
  );
};
