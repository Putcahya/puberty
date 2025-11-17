import React from 'react';
export const MaleFigure: React.FC = () => (
  <svg viewBox="0 0 100 200" className="w-full h-auto">
    <defs>
      <linearGradient id="bodyGradient" x1="0%" y1="0%" x2="0%" y2="100%">
        <stop offset="0%" style={{ stopColor: '#F4A66A', stopOpacity: 1 }} />
        <stop offset="100%" style={{ stopColor: '#E67E22', stopOpacity: 1 }} />
      </linearGradient>
    </defs>
    <g className="breathing-animation">
      {/* Head */}
      <circle cx="50" cy="20" r="15" fill="url(#bodyGradient)" />
      
      {/* Torso & Legs */}
      <path d="M35,40 H65 L70,90 C65,95 60,95 55,95 V185 H45 V95 C40,95 35,95 30,90 Z" fill="url(#bodyGradient)" />

      {/* Arms */}
      <path d="M35,45 C15,60 15,85 35,95" stroke="url(#bodyGradient)" strokeWidth="12" fill="none" strokeLinecap="round" />
      <path d="M65,45 C85,60 85,85 65,95" stroke="url(#bodyGradient)" strokeWidth="12" fill="none" strokeLinecap="round" />
    </g>
  </svg>
);