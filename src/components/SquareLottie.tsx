import React from 'react';
import { Lottie } from 'lottie-react';
import { SQUARE_VECTOR_LOTTIE } from '../assets/square_vector';

interface SquareLottieProps {
  className?: string;
}

export const SquareLottie: React.FC<SquareLottieProps> = ({ className = 'w-12 h-12' }) => {
  return (
    <div className={`relative flex items-center justify-center select-none ${className}`}>
      <Lottie
        src={SQUARE_VECTOR_LOTTIE}
        loop
        autoplay
        className="w-full h-full [filter:brightness(0)]"
      />
    </div>
  );
};
