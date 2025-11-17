import React from 'react';
export const FemaleFigure: React.FC = () => (
    <svg viewBox="0 0 100 200" className="w-full h-auto">
    <defs>
      <linearGradient id="bodyGradient" x1="0%" y1="0%" x2="0%" y2="100%">
        <stop offset="0%" style={{ stopColor: '#f881e8ff', stopOpacity: 1 }} />
        <stop offset="100%" style={{ stopColor: '#e54696ff', stopOpacity: 1 }} />
      </linearGradient>
    </defs>
    <g className="breathing-animation">
      {/* Head */}
      <circle cx="50" cy="20" r="15" fill="url(#bodyGradient)" />
      
      {/* Torso & Legs */}
      <path d="M40,40 H60 V85 C65,95 65,105 58,115 L55,185 H45 L42,115 C35,105 35,95 40,85 Z" fill="url(#bodyGradient)" />

      {/* Arms */}
      <path d="M40,45 C20,55 20,80 40,90" stroke="url(#bodyGradient)" strokeWidth="10" fill="none" strokeLinecap="round" />
      <path d="M60,45 C80,55 80,80 60,90" stroke="url(#bodyGradient)" strokeWidth="10" fill="none" strokeLinecap="round" />
    </g>
  </svg>
);

export default FemaleFigure;
