import React from 'react';
import { playTacticalBlip } from '../utils/audio';

interface LeftSidebarProps {
  activeProjectCode: string;
}

export const LeftSidebar: React.FC<LeftSidebarProps> = ({ activeProjectCode }) => {
  return (
    <aside 
      id="left-anchor-sidebar"
      className="w-14 sm:w-16 md:w-20 bg-black border-r border-[#333333] flex flex-col justify-between items-center py-4 select-none shrink-0 z-30 relative overflow-hidden"
      onMouseEnter={() => playTacticalBlip(900, 0.02)}
    >
      {/* Top Section: System Logo Mark & SVG Placeholder Container */}
      <div className="flex flex-col items-center gap-4 w-full px-2">
        {/* Tactical Symbol / Marathon Style Ring */}
        <div className="w-8 h-8 sm:w-9 sm:h-9 border border-[#9fff19] flex items-center justify-center relative bg-black group hover:bg-[#9fff19] transition-colors cursor-pointer">
          <div className="w-3.5 h-3.5 rounded-full border-2 border-current flex items-center justify-center">
            <div className="w-1 h-1 bg-current"></div>
          </div>
          <span className="absolute -top-1 -right-1 text-[8px] bg-black text-[#9fff19] px-0.5 font-bold font-mono">
            01
          </span>
        </div>

        {/* Explicitly Requested Container */}
        {/* SVG Image Placeholder */}
        <div 
          id="sidebar-svg-placeholder" 
          className="w-full h-8 flex items-center justify-center border border-dashed border-[#333333] text-[9px] text-[#666666] uppercase"
          title="SVG Image Placeholder"
        >
          {/* SVG Image Placeholder */}
        </div>

        {/* Hazard Stripes Pattern */}
        <div className="w-full h-3 tactical-stripes border border-[#333333]"></div>

        {/* Vertical Telemetry Bar */}
        <div className="text-[9px] tracking-widest text-[#888888] font-mono rotate-180 [writing-mode:vertical-rl] whitespace-nowrap mt-2">
          TAU CETI // EXPLORATION // DEVELOPMENT
        </div>
      </div>

      {/* Center Section: Rotated Bold Typography & Barcode */}
      <div className="flex flex-col items-center gap-3 my-auto py-4">
        <div className="text-[10px] sm:text-xs font-bold text-white tracking-[0.2em] rotate-180 [writing-mode:vertical-rl] whitespace-nowrap hover:text-[#9fff19] transition-colors">
          MARATHON // ARCHETYPE
        </div>

        {/* Tactical Barcode Elements */}
        <div className="flex flex-col gap-0.5 items-center my-2 opacity-80">
          <div className="w-6 h-0.5 bg-white"></div>
          <div className="w-6 h-1 bg-[#9fff19]"></div>
          <div className="w-4 h-0.5 bg-white"></div>
          <div className="w-6 h-1.5 bg-white"></div>
          <div className="w-5 h-0.5 bg-white"></div>
          <div className="w-6 h-0.5 bg-[#9fff19]"></div>
        </div>

        <div className="text-[8px] tracking-tighter text-[#666666] font-mono [writing-mode:vertical-rl] rotate-180">
          SYS_REV // 09.2.4
        </div>
      </div>

      {/* Bottom Section: Active Status & Grid Checksum */}
      <div className="flex flex-col items-center gap-3 w-full px-2">
        <div className="text-[9px] text-center font-mono text-[#9fff19] border border-[#333333] px-1 py-0.5 w-full truncate">
          {activeProjectCode.replace('[+] ', '')}
        </div>

        <div className="w-full flex justify-between items-center text-[7px] text-[#555555] font-mono border-t border-[#222222] pt-2">
          <span>28</span>
          <span>93</span>
          <span className="text-[#9fff19]">Ψ</span>
        </div>

        <div className="w-2.5 h-2.5 bg-[#9fff19] animate-pulse"></div>
      </div>
    </aside>
  );
};
