import React from 'react';
import { ProjectData } from '../types';
import { playTacticalBlip, playSelectBuzz } from '../utils/audio';

interface ProjectNavigationBarProps {
  projects: ProjectData[];
  currentIndex: number;
  onSelectIndex: (index: number) => void;
  hasStarted?: boolean;
}

export const ProjectNavigationBar: React.FC<ProjectNavigationBarProps> = ({
  projects,
  currentIndex,
  onSelectIndex,
  hasStarted = false,
}) => {
  const handleSelect = (index: number) => {
    playSelectBuzz();
    onSelectIndex(index);
  };

  return (
    <nav
      id="project-navigation-bar"
      aria-label="Frames Project Navigation"
      className="w-full bg-[#0a0a0a] border-t border-[#333333] flex items-stretch overflow-x-auto select-none shrink-0 font-mono z-10"
      style={{
        scrollbarWidth: 'none',
        msOverflowStyle: 'none',
      }}
    >
      {/* Tactical Prefix Label on Large Screens */}
      <div 
        id="project-nav-prefix"
        className="hidden xl:flex items-center px-3 sm:px-4 py-2 border-r border-[#262626] bg-[#080808] text-[10px] text-[#666666] uppercase whitespace-nowrap shrink-0 tracking-wider"
      >
        <span className="inline-block w-1.5 h-1.5 bg-[#9fff19] mr-2 animate-pulse" />
        INDEX
      </div>

      {/* Navigation Items */}
      <div className="flex flex-nowrap w-full items-stretch min-w-max md:min-w-0">
        {projects.map((project, idx) => {
          const isActive = idx === currentIndex;

          return (
            <button
              key={project.id}
              id={`nav-frame-btn-${project.id.toLowerCase()}`}
              type="button"
              onClick={() => handleSelect(idx)}
              onMouseEnter={() => playTacticalBlip(1200, 0.02)}
              className={`flex-1 min-w-[130px] sm:min-w-[150px] md:min-w-0 px-2.5 sm:px-3 py-2 sm:py-2.5 flex items-center justify-center gap-1.5 sm:gap-2 text-left border-r border-[#222222] transition-colors duration-75 cursor-pointer relative group focus:outline-none ${
                isActive
                  ? 'bg-[#151515] text-[#9fff19]'
                  : 'bg-[#0a0a0a] text-[#777777] hover:bg-[#121212] hover:text-[#e0e0e0]'
              }`}
            >
              {/* Active Underline / Indicator Bar */}
              {isActive && (
                <div 
                  className="absolute top-0 left-0 right-0 h-[2px] bg-[#9fff19] shadow-[0_0_8px_#9fff19]" 
                />
              )}

              {/* Status Dot / Indicator */}
              <span 
                className={`text-[9px] sm:text-[10px] shrink-0 font-bold ${
                  isActive ? 'text-[#9fff19]' : 'text-[#444444] group-hover:text-[#888888]'
                }`}
              >
                {isActive ? '▸' : `${String(idx + 1).padStart(2, '0')}.`}
              </span>

              {/* ID & Title */}
              <div className="flex items-center gap-1 sm:gap-1.5 truncate">
                <span 
                  className={`text-[10px] sm:text-[11px] font-bold uppercase tracking-tight ${
                    isActive ? 'text-[#9fff19]' : 'text-[#999999] group-hover:text-white'
                  }`}
                  style={{ fontFamily: "'Chivo Mono', monospace" }}
                >
                  {project.id}
                </span>

                <span 
                  className="text-[9px] sm:text-[10px] text-[#444444] group-hover:text-[#666666]"
                >
                  //
                </span>

                <span 
                  className={`text-[10px] sm:text-[11px] font-medium uppercase truncate tracking-tight ${
                    isActive ? 'text-white font-bold' : 'text-[#777777] group-hover:text-[#cccccc]'
                  }`}
                  style={{ fontFamily: "'Chivo Mono', monospace" }}
                >
                  {project.title}
                </span>
              </div>
            </button>
          );
        })}
      </div>
    </nav>
  );
};
