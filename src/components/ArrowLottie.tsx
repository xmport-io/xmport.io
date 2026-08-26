import React from 'react';
import { Lottie } from 'lottie-react';
import { ARROW_LOTTIE } from '../assets/arrow_lottie';

interface ArrowLottieProps {
  className?: string;
}

export const ArrowLottie: React.FC<ArrowLottieProps> = ({ className = '' }) => {
  return (
    <div className={`inline-flex items-center justify-center pointer-events-none ${className}`}>
      <Lottie
        src={ARROW_LOTTIE}
        loop
        autoplay
        className="w-full h-full text-black"
        style={{ width: '100%', height: '100%' }}
      />
    </div>
  );
};
