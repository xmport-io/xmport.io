import React, { useState } from 'react';
import { ProjectData } from '../types';
import { SOCIAL_LINKS } from '../data/projects';
import { playTacticalBlip, playSelectBuzz } from '../utils/audio';

interface BottomSplitBoxesProps {
  activeProject: ProjectData;
  onOpenContact: () => void;
}

export const BottomSplitBoxes: React.FC<BottomSplitBoxesProps> = ({
  activeProject,
  onOpenContact
}) => {
  const [copiedIndex, setCopiedIndex] = useState<number | null>(null);
  return (
    <div 
      id="bottom-split-boxes"
      className="grid grid-cols-1 md:grid-cols-2 w-full gap-0 border-t border-[#333333] shrink-0 font-mono select-none"
    >
      {/* =========================================================================
          BOX 1: LEFT BOX - INFORMATION (#101010)
         ========================================================================= */}
      <div 
        id="box-1-information"
        className="bg-[#101010] p-4 sm:p-6 lg:p-7 flex flex-col justify-between border-b md:border-b-0 md:border-r border-[#333333] relative overflow-hidden select-none font-mono"
        onMouseEnter={() => playTacticalBlip(950, 0.02)}
      >
        {/* Top Info Header */}
        <div>
          <div className="flex items-center justify-between mb-1.5">
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 bg-white"></span>
              <span className="text-[11px] sm:text-xs font-mono text-[#999999] tracking-widest uppercase font-bold">
                CURRENT DIRECTORY
              </span>
              <span className="text-[#444444] font-mono text-xs">/</span>
              <span className="text-[11px] sm:text-xs font-mono text-[#9fff19] tracking-wider font-bold">
                {activeProject.sysId}
              </span>
            </div>
            <span className="text-[9px] font-mono text-[#555555] hidden sm:inline">
              SEC_ID // INFO_NODE_01
            </span>
          </div>

          {/* Large Bold Title for Active Project */}
          <h2 
            id="current-work-title"
            className="text-xl sm:text-2xl lg:text-3xl font-black font-mono text-white uppercase tracking-tight leading-tight mt-0.5"
          >
            {activeProject.title}
          </h2>

          <p className="text-[11px] sm:text-xs font-mono text-[#aaaaaa] mt-2 leading-relaxed line-clamp-2 max-w-xl">
            {activeProject.description}
          </p>
        </div>

        {/* Faux-Terminal Data Strings for Flavor */}
        <div className="my-3 sm:my-4 grid grid-cols-3 sm:grid-cols-3 gap-2 p-2.5 bg-black border border-[#262626] font-mono text-[9px] sm:text-[10px]">
          <div>
            <span className="text-[#666666] block text-[8px] sm:text-[9px]">SYS_ID:</span>
            <span className="text-white font-bold">{activeProject.sysId.replace('SYS_ID: ', '')}</span>
          </div>
          <div>
            <span className="text-[#666666] block text-[8px] sm:text-[9px]">THROUGHPUT:</span>
            <span className="text-[#9fff19] font-bold truncate block">{activeProject.specs.throughput}</span>
          </div>
          <div>
            <span className="text-[#666666] block text-[8px] sm:text-[9px]">STATUS:</span>
            <span className="text-[#9fff19] font-bold">{activeProject.status}</span>
          </div>
        </div>

        {/* Footer info inside Info Box */}
        <div className="flex items-center justify-between pt-1 border-t border-[#222222]">
          <span className="text-[9px] font-mono text-[#666666] uppercase">
            PROTOCOL: {activeProject.specs.protocol}
          </span>

          <span className="text-[9px] font-mono text-[#555555] hidden sm:inline">
            SEC_LEVEL // 05
          </span>
        </div>
      </div>

      {/* =========================================================================
          BOX 2: RIGHT BOX - ACTION (#9FFF19 NEON LIME GREEN)
         ========================================================================= */}
      <div 
        id="box-2-action"
        className="bg-[#9fff19] p-4 sm:p-6 lg:p-7 flex flex-col justify-between relative overflow-hidden select-none text-black font-mono"
        onMouseEnter={() => playTacticalBlip(1200, 0.02)}
      >
        {/* Top Action Indicators & Hazard Micro-Mark */}
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 bg-black"></div>
            <span className="text-[10px] sm:text-xs font-mono font-normal tracking-widest uppercase">
              Motion Director, Co-Founder of //{' '}
              <a
                href="https://balimotion.club"
                target="_blank"
                rel="noreferrer noopener"
                className="underline hover:text-white hover:bg-black px-1 transition-colors duration-75 font-medium inline-block"
                onClick={(e) => {
                  e.stopPropagation();
                  playTacticalBlip(1400, 0.02);
                }}
              >
                BALIMOTION
              </a>{' '}
              //
            </span>
          </div>
          
          {/* Tactical Chevron Glyphs */}
          <div className="text-[10px] sm:text-xs font-mono font-normal tracking-tighter">
            ▶▶▶ [01]
          </div>
        </div>

        {/* Primary Call to Action: Massive Bold "CONTACT ME" Button */}
        <div className="my-2 sm:my-3">
          <button
            id="action-contact-me-btn"
            onClick={() => {
              playSelectBuzz();
              onOpenContact();
            }}
            onMouseEnter={() => playTacticalBlip(1500, 0.03)}
            className="w-full text-left group cursor-pointer focus:outline-none"
          >
            <div className="flex items-center justify-between">
              <span 
                className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-normal uppercase tracking-tight text-black leading-none font-mono"
                style={{ fontFamily: "'Chivo Mono', monospace" }}
              >
                CONTACT ME
              </span>
              <span className="text-2xl sm:text-4xl font-normal text-black group-hover:translate-x-1.5 transition-transform duration-100 font-mono">
                ↗
              </span>
            </div>
            
            <p className="text-[10px] sm:text-xs font-mono font-normal text-black/80 mt-1.5 uppercase tracking-wider">
              INITIATE ENCRYPTED DIRECT TRANSMISSION // OPEN FOR PROJECTS & DIRECTIVES
            </p>
          </button>
        </div>

        {/* =====================================================================
            FOOTER ALIGNMENT: Anchored Social Media Handles
           ===================================================================== */}
        <div 
          id="anchored-social-footer"
          className="border-t-2 border-black pt-2 mt-auto"
        >
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-0 border border-black bg-[#9fff19]">
            {SOCIAL_LINKS.map((link, idx) => {
              const isCopied = copiedIndex === idx;
              const displayLabel = isCopied ? 'E-MAIL COPIED' : link.label;

              return (
                <a
                  key={link.label}
                  id={`social-link-${idx}`}
                  href={link.url}
                  target={link.isCopy ? undefined : "_blank"}
                  rel={link.isCopy ? undefined : "noreferrer noopener"}
                  onClick={(e) => {
                    if (link.isCopy && link.copyValue) {
                      e.preventDefault();
                      navigator.clipboard.writeText(link.copyValue);
                      setCopiedIndex(idx);
                      playSelectBuzz();
                      setTimeout(() => {
                        setCopiedIndex((curr) => (curr === idx ? null : curr));
                      }, 2200);
                    } else {
                      playTacticalBlip(1400, 0.02);
                    }
                  }}
                  style={{ fontFamily: "'Chivo Mono', monospace" }}
                  className={`py-1.5 px-1.5 text-center text-[9px] sm:text-[10px] font-mono font-normal uppercase text-black cursor-pointer hover:bg-black hover:text-[#9fff19] transition-colors duration-75 truncate ${
                    isCopied ? 'bg-black text-[#9fff19]' : ''
                  } ${
                    idx < SOCIAL_LINKS.length - 1 ? 'border-r border-black' : ''
                  }`}
                  title={link.isCopy ? `Click to copy: ${link.copyValue}` : `${link.label}: ${link.handle}`}
                >
                  {displayLabel}
                </a>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};
