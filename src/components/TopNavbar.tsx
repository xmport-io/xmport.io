import React, { useState, useEffect } from 'react';
import { XmportLogo } from './XmportLogo';

interface TopNavbarProps {
  hasStarted?: boolean;
  currentIdx?: number;
  totalVideos?: number;
}

export const TopNavbar: React.FC<TopNavbarProps> = ({
  hasStarted = false,
  currentIdx = 0,
  totalVideos = 7,
}) => {
  const [timeString, setTimeString] = useState<string>('');

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      // Bali is UTC+8 (WITA)
      const baliTime = new Date(now.getTime() + 8 * 60 * 60 * 1000);
      const hours = String(baliTime.getUTCHours()).padStart(2, '0');
      const mins = String(baliTime.getUTCMinutes()).padStart(2, '0');
      const secs = String(baliTime.getUTCSeconds()).padStart(2, '0');
      const ms = String(Math.floor(baliTime.getUTCMilliseconds() / 10)).padStart(2, '0');
      setTimeString(`${hours}:${mins}:${secs}.${ms}`);
    };

    updateTime();
    const interval = setInterval(updateTime, 40);
    return () => clearInterval(interval);
  }, []);

  const reelText = `REEL ${String(currentIdx + 1).padStart(2, '0')}/${String(totalVideos).padStart(2, '0')}`;

  return (
    <header 
      id="top-navbar"
      className="absolute top-0 left-0 right-0 h-11 sm:h-12 w-full bg-black/85 md:bg-[#9fff19] xl:bg-transparent backdrop-blur-md md:backdrop-blur-none border-b border-[#222222] md:border-black/20 xl:border-0 flex items-center justify-between px-3.5 sm:px-6 select-none z-50 pointer-events-none font-mono transition-colors duration-150"
    >
      {/* LEFT: XMPORT LOGO */}
      <div id="navbar-brand" className="flex items-center gap-2 pointer-events-none">
        {/* Mobile View Logo (Neon Green) */}
        <div className="flex md:hidden items-center">
          <XmportLogo
            id="navbar-xmport-logo-mobile"
            className="h-3.5 sm:h-4.5 w-auto fill-[#9fff19] drop-shadow-[0_2px_8px_rgba(0,0,0,0.8)] shrink-0"
          />
        </div>

        {/* Tablet View Logo (Portrait & Landscape Tablet - Rich Black on Green Bar) */}
        <div className="hidden md:flex xl:hidden items-center">
          <XmportLogo
            id="navbar-xmport-logo-tablet"
            className="h-4 sm:h-4.5 w-auto fill-black shrink-0"
          />
        </div>

        {/* Desktop Spacer (Desktop uses the left vertical green bar) */}
        <div className="hidden xl:block w-24" />
      </div>

      {/* CENTER: TABLET REEL COUNTER 01/07 (PORTRAIT & LANDSCAPE TABLET - BLACK TEXT & BLACK BLINKING SQUARE) */}
      <div 
        id="navbar-tablet-reel-counter"
        className="hidden md:flex xl:hidden items-center gap-2 text-xs font-mono font-bold tracking-widest text-black uppercase"
        style={{ fontFamily: "'Chivo Mono', monospace" }}
      >
        <span className="w-1.5 h-1.5 bg-black animate-terminal-blink flex-shrink-0" />
        <span>{reelText}</span>
      </div>

      {/* RIGHT: REAL-TIME CLOCK */}
      <div id="navbar-clock-container">
        {/* Mobile Clock (Neon Green Dot, Gray Text) */}
        <div 
          id="navbar-clock-mobile"
          className="flex md:hidden items-center gap-1.5 sm:gap-2 text-[10px] sm:text-xs font-mono text-[#aaaaaa] bg-black/60 border border-[#333333] px-2.5 sm:px-3 py-1 backdrop-blur-sm pointer-events-none"
        >
          <span className="w-1.5 h-1.5 bg-[#9fff19] animate-terminal-blink flex-shrink-0" />
          <span 
            className="font-normal whitespace-nowrap"
            style={{ fontFamily: "'Chivo Mono', monospace" }}
          >
            {timeString} <span className="text-[#666666] hidden sm:inline">BALI (GMT+8)</span><span className="text-[#666666] sm:hidden">BALI</span>
          </span>
        </div>

        {/* Tablet Clock (Portrait & Landscape Tablet - Rich Black Dot, Black Text on Green Header) */}
        <div 
          id="navbar-clock-tablet"
          className="hidden md:flex xl:hidden items-center gap-2 text-xs font-mono font-bold text-black bg-black/10 border border-black/25 px-3 py-1 backdrop-blur-none pointer-events-none"
        >
          <span className="w-1.5 h-1.5 bg-black animate-terminal-blink flex-shrink-0" />
          <span 
            className="font-bold whitespace-nowrap text-black"
            style={{ fontFamily: "'Chivo Mono', monospace" }}
          >
            {timeString} <span className="text-black/80 font-normal">BALI (GMT+8)</span>
          </span>
        </div>

        {/* Desktop Clock (Neon Green Dot, Gray Text on Black Overlay) */}
        <div 
          id="navbar-clock-desktop"
          className="hidden xl:flex items-center gap-2 text-xs font-mono text-[#aaaaaa] bg-black/40 border border-[#333333] px-3 py-1 backdrop-blur-sm pointer-events-none"
        >
          <span className="w-1.5 h-1.5 bg-[#9fff19] animate-terminal-blink flex-shrink-0" />
          <span 
            className="font-normal whitespace-nowrap"
            style={{ fontFamily: "'Chivo Mono', monospace" }}
          >
            {timeString} <span className="text-[#666666]">BALI (GMT+8)</span>
          </span>
        </div>
      </div>
    </header>
  );
};


