import React, { useState, useEffect } from 'react';

export const TopNavbar: React.FC = () => {
  const [timeString, setTimeString] = useState<string>('');

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      const hours = String(now.getUTCHours()).padStart(2, '0');
      const mins = String(now.getUTCMinutes()).padStart(2, '0');
      const secs = String(now.getUTCSeconds()).padStart(2, '0');
      const ms = String(Math.floor(now.getUTCMilliseconds() / 10)).padStart(2, '0');
      setTimeString(`${hours}:${mins}:${secs}.${ms} UTC`);
    };

    updateTime();
    const interval = setInterval(updateTime, 40);
    return () => clearInterval(interval);
  }, []);

  return (
    <header 
      id="top-navbar"
      className="h-10 sm:h-12 w-full bg-black border-b border-[#333333] flex items-center justify-end px-3 sm:px-6 select-none z-20 shrink-0 font-mono"
    >
      {/* Real-time Clock */}
      <div 
        id="navbar-clock"
        className="flex items-center gap-2 text-[11px] sm:text-xs font-mono text-[#aaaaaa] bg-[#0c0c0c] border border-[#262626] px-3 py-1"
      >
        <span className="w-1.5 h-1.5 bg-[#9fff19] animate-terminal-blink"></span>
        <span className="font-mono tracking-wider">{timeString}</span>
      </div>
    </header>
  );
};
