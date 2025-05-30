import React from 'react';

interface CheeseIconProps {
  className?: string;
}

const CheeseIcon: React.FC<CheeseIconProps> = ({ className }) => {
  return (
    <svg 
      viewBox="0 0 100 100" 
      className={className}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path 
        d="M20 20L80 15L85 80L15 85L20 20Z" 
        fill="#F59E0B" 
        stroke="#F59E0B" 
        strokeWidth="2"
      />
      <path 
        d="M30 30L35 35M50 25L55 30M70 20L75 25M25 50L30 55M45 45L50 50M65 40L70 45M20 70L25 75M40 65L45 70M60 60L65 65" 
        stroke="#FBBF24" 
        strokeWidth="2"
      />
      <path 
        d="M15 85L25 90L40 88L55 90L70 88L85 90L85 80" 
        fill="#F59E0B" 
        stroke="#F59E0B" 
        strokeWidth="2"
      />
      {/* Dripping effect */}
      <path 
        d="M30 80L30 95" 
        stroke="#F59E0B" 
        strokeWidth="4" 
        strokeLinecap="round"
      />
      <path 
        d="M60 80L60 90" 
        stroke="#F59E0B" 
        strokeWidth="4" 
        strokeLinecap="round"
      />
    </svg>
  );
};

export default CheeseIcon;