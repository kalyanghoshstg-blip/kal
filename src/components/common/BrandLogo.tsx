import React, { useEffect, useState } from 'react';
import headerLogoImg from '../../assets/images/researcho_header_logo_1787422166484.jpg';

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
  const [transparentSrc, setTransparentSrc] = useState<string>(headerLogoImg);

  useEffect(() => {
    // Process image to remove white/near-white background pixels and create a true transparent PNG
    const img = new Image();
    img.crossOrigin = 'anonymous';
    img.src = headerLogoImg;
    img.onload = () => {
      try {
        const canvas = document.createElement('canvas');
        canvas.width = img.naturalWidth || img.width;
        canvas.height = img.naturalHeight || img.height;
        const ctx = canvas.getContext('2d');
        if (!ctx) return;

        ctx.drawImage(img, 0, 0);
        const imgData = ctx.getImageData(0, 0, canvas.width, canvas.height);
        const data = imgData.data;

        for (let i = 0; i < data.length; i += 4) {
          const r = data[i];
          const g = data[i + 1];
          const b = data[i + 2];

          // If pixel is near-white or white, make it transparent
          if (r > 240 && g > 240 && b > 240) {
            data[i + 3] = 0; // 100% transparent
          } else if (r > 220 && g > 220 && b > 220) {
            // Smooth alpha feathering at edges
            const diff = Math.min(255 - r, 255 - g, 255 - b);
            data[i + 3] = Math.max(0, Math.min(255, diff * 7));
          }
        }

        ctx.putImageData(imgData, 0, 0);
        setTransparentSrc(canvas.toDataURL('image/png'));
      } catch {
        // Fallback to original with CSS blend
        setTransparentSrc(headerLogoImg);
      }
    };
  }, []);

  // Dimensions calibrated for prominent visibility & crisp impact
  const sizeClasses = {
    xs: 'h-9 sm:h-10 max-h-11',
    sm: 'h-11 sm:h-13 max-h-14',
    md: 'h-15 sm:h-18 max-h-20',
    lg: 'h-20 sm:h-24 max-h-28',
    xl: 'h-28 sm:h-36 max-h-42',
  };

  return (
    <div className={`inline-flex items-center select-none ${className}`}>
      <img
        src={transparentSrc}
        alt="Researcho by IITians - One-Stop Research Solutions"
        className={`${sizeClasses[size]} w-auto object-contain transition-all duration-300 ease-in-out transform origin-left will-change-[height,transform] mix-blend-multiply`}
        referrerPolicy="no-referrer"
      />
    </div>
  );
};
