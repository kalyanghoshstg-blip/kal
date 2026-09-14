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
  const [hasError, setHasError] = React.useState(false);

  // Dimensions calibrated for prominent visibility & crisp impact
  const sizeClasses = {
    xs: 'h-9 sm:h-10 max-h-11',
    sm: 'h-11 sm:h-13 max-h-14',
    md: 'h-15 sm:h-18 max-h-20',
    lg: 'h-20 sm:h-24 max-h-28',
    xl: 'h-28 sm:h-36 max-h-42',
  };

  if (hasError) {
    return (
      <div className={`flex items-baseline font-bold select-none ${className}`}>
        <span className="text-xl sm:text-2xl font-serif text-blue-950 tracking-tight">Research</span>
        <span className="text-xl sm:text-2xl font-serif text-amber-500">o</span>
        <span className="ml-1 text-xs sm:text-sm font-sans font-semibold text-slate-600">by IITians</span>
      </div>
    );
  }

  return (
    <div className={`flex items-center select-none ${className}`}>
      <img
        src={headerLogoImg}
        alt="Researcho by IITians - One-Stop Research Solutions"
        onError={() => setHasError(true)}
        className={`${sizeClasses[size]} w-auto object-contain transition-all duration-300 ease-in-out transform origin-left will-change-[height,transform] bg-transparent`}
        referrerPolicy="no-referrer"
      />
    </div>
  );
};





