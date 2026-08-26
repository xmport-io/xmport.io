import React, { useState, useEffect } from 'react';

export const TopNavbar: React.FC = () => {
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
      setTimeString(`${hours}:${mins}:${secs}.${ms} BALI (GMT+8)`);
    };

    updateTime();
    const interval = setInterval(updateTime, 40);
    return () => clearInterval(interval);
  }, []);

  return (
    <header 
      id="top-navbar"
      className="absolute top-0 left-0 right-0 h-10 sm:h-12 w-full bg-transparent border-0 flex items-center justify-between px-3 sm:px-6 select-none z-50 pointer-events-none font-mono"
    >
      {/* Top Left Page Title */}
      <div id="navbar-brand" className="flex items-center gap-2 pointer-events-none">
        <h1 
          id="navbar-title"
          className="text-base sm:text-lg lg:text-xl font-black uppercase text-[#9fff19] leading-none drop-shadow-[0_2px_8px_rgba(0,0,0,0.8)]"
          style={{ fontFamily: "'Doto', sans-serif" }}
        >
          XMPORT
        </h1>
      </div>

      {/* Real-time Clock */}
      <div 
        id="navbar-clock"
        className="flex items-center gap-2 text-[11px] sm:text-xs font-mono text-[#aaaaaa] bg-black/40 border border-[#333333]/50 px-3 py-1 backdrop-blur-sm pointer-events-none"
      >
        <span className="w-1.5 h-1.5 bg-[#9fff19] animate-terminal-blink"></span>
        <span 
          className="font-normal"
          style={{ fontFamily: "'Chivo Mono', monospace" }}
        >
          {timeString}
        </span>
      </div>
    </header>
  );
};
