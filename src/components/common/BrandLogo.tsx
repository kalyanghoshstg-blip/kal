import React from 'react';
import headerLogoImg from '../../assets/images/researcho_header_logo_nobg.png';

interface BrandLogoProps {
  size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl';
  variant?: 'full' | 'compact' | 'horizontal';
  className?: string;
  showTagline?: boolean;
}

export const BrandLogo: React.FC<BrandLogoProps> = ({
  size = 'md',
  className = '',
}) => {
  // Dimensions calibrated for prominent visibility & crisp impact
  const sizeClasses = {
    xs: 'h-9 sm:h-10 max-h-11',
    sm: 'h-11 sm:h-13 max-h-14',
    md: 'h-15 sm:h-18 max-h-20',
    lg: 'h-20 sm:h-24 max-h-28',
    xl: 'h-28 sm:h-36 max-h-42',
  };

  return (
    <div className={`flex items-center select-none ${className}`}>
      <img
        src={headerLogoImg}
        alt="ResearchO by IITians - One-Stop Research Solutions"
        className={`${sizeClasses[size]} w-auto object-contain transition-all duration-300 ease-in-out transform origin-left will-change-[height,transform] mix-blend-multiply bg-transparent`}
        referrerPolicy="no-referrer"
      />
    </div>
  );
};





