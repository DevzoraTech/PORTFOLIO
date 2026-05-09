import React from 'react';

interface LogoProps {
  size?: number;
  className?: string;
}

export const Logo = ({ size = 40, className = '' }: LogoProps) => {
  return (
    <svg 
      width={size} 
      height={size} 
      viewBox="0 0 100 100" 
      fill="none" 
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      {/* Outer Architectural Frame */}
      <rect x="10" y="10" width="80" height="80" rx="16" className="fill-primary" />
      
      {/* Inner Geometric 'M' and 'R' */}
      <path 
        d="M30 70V30L50 50L70 30V70" 
        stroke="white" 
        strokeWidth="8" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
      
      {/* Accent Detail */}
      <circle cx="75" cy="25" r="6" fill="#22d3ee" className="animate-pulse" />
      
      {/* Subtle Grid Lines */}
      <line x1="10" y1="30" x2="90" y2="30" stroke="white" strokeOpacity="0.1" strokeWidth="1" />
      <line x1="10" y1="50" x2="90" y2="50" stroke="white" strokeOpacity="0.1" strokeWidth="1" />
      <line x1="10" y1="70" x2="90" y2="70" stroke="white" strokeOpacity="0.1" strokeWidth="1" />
    </svg>
  );
};

export const LogoIcon = ({ size = 24 }: { size?: number }) => (
  <div className="relative group">
    <div className="absolute -inset-1 bg-gradient-to-r from-primary to-accent rounded-lg blur opacity-25 group-hover:opacity-50 transition duration-1000 group-hover:duration-200" />
    <div className="relative">
      <Logo size={size} />
    </div>
  </div>
);
