import React from 'react';

interface SquareLottieProps {
  className?: string;
}

export const SquareLottie: React.FC<SquareLottieProps> = ({ className = 'w-12 h-12' }) => {
  return (
    <div className={`relative flex items-center justify-center select-none ${className}`}>
      <svg
        viewBox="0 0 100 100"
        className="w-full h-full overflow-visible"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* Corner Brackets */}
        {/* Top-Left */}
        <path
          d="M 12 28 L 12 12 L 28 12"
          stroke="#000000"
          strokeWidth="3.5"
          strokeLinecap="square"
          strokeLinejoin="miter"
        />
        {/* Top-Right */}
        <path
          d="M 72 12 L 88 12 L 88 28"
          stroke="#000000"
          strokeWidth="3.5"
          strokeLinecap="square"
          strokeLinejoin="miter"
        />
        {/* Bottom-Right */}
        <path
          d="M 88 72 L 88 88 L 72 88"
          stroke="#000000"
          strokeWidth="3.5"
          strokeLinecap="square"
          strokeLinejoin="miter"
        />
        {/* Bottom-Left */}
        <path
          d="M 28 88 L 12 88 L 12 72"
          stroke="#000000"
          strokeWidth="3.5"
          strokeLinecap="square"
          strokeLinejoin="miter"
        />

        {/* Clip mask for internal diagonal hatching stripes */}
        <defs>
          <clipPath id="inner-square-clip">
            <rect x="22" y="22" width="56" height="56" rx="1" />
          </clipPath>
        </defs>

        {/* Internal animated stripes container */}
        <g clipPath="url(#inner-square-clip)">
          {/* Subtle inner boundary */}
          <rect
            x="22"
            y="22"
            width="56"
            height="56"
            stroke="#000000"
            strokeWidth="1.5"
            fill="none"
            opacity="0.35"
          />

          {/* Diagonal lines moving dynamically */}
          <g className="animate-[cavalry-scan_2.4s_ease-in-out_infinite_alternate]">
            <line x1="-20" y1="120" x2="120" y2="-20" stroke="#000000" strokeWidth="2.5" />
            <line x1="-10" y1="120" x2="120" y2="-10" stroke="#000000" strokeWidth="2.5" />
            <line x1="0" y1="120" x2="120" y2="0" stroke="#000000" strokeWidth="2.5" />
            <line x1="10" y1="120" x2="120" y2="10" stroke="#000000" strokeWidth="2.5" />
            <line x1="20" y1="120" x2="120" y2="20" stroke="#000000" strokeWidth="2.5" />
            <line x1="30" y1="120" x2="120" y2="30" stroke="#000000" strokeWidth="2.5" />
            <line x1="40" y1="120" x2="120" y2="40" stroke="#000000" strokeWidth="2.5" />
            <line x1="50" y1="120" x2="120" y2="50" stroke="#000000" strokeWidth="2.5" />
            <line x1="60" y1="120" x2="120" y2="60" stroke="#000000" strokeWidth="2.5" />
            <line x1="70" y1="120" x2="120" y2="70" stroke="#000000" strokeWidth="2.5" />
            <line x1="80" y1="120" x2="120" y2="80" stroke="#000000" strokeWidth="2.5" />
          </g>

          {/* Moving oscillating highlight block */}
          <g className="animate-[cavalry-oscillate_2.4s_ease-in-out_infinite_alternate]">
            <rect
              x="30"
              y="30"
              width="24"
              height="24"
              stroke="#000000"
              strokeWidth="2"
              fill="#000000"
              fillOpacity="0.2"
              transform="rotate(45 50 50)"
            />
          </g>
        </g>
      </svg>
    </div>
  );
};
