import React from 'react';
import { Lottie } from 'lottie-react';
import { COK_CROSS_LOTTIE } from '../assets/cok_cross';

interface CokCrossLottieProps {
  className?: string;
  isHovered?: boolean;
}

export const CokCrossLottie: React.FC<CokCrossLottieProps> = ({
  className = '',
  isHovered = false,
}) => {
  return (
    <div
      className={`w-full h-full flex items-center justify-center pointer-events-none transition-all duration-200 ease-out ${
        isHovered
          ? 'scale-[1.25] [filter:brightness(0)_invert(1)]'
          : 'group-hover:scale-[1.25] group-hover:[filter:brightness(0)_invert(1)] group-active:scale-[1.25] group-active:[filter:brightness(0)_invert(1)]'
      } ${className}`}
    >
      <Lottie
        src={COK_CROSS_LOTTIE}
        loop
        autoplay
        className="w-full h-full"
      />
    </div>
  );
};


