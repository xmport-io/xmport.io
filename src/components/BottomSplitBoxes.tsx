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
              <svg 
                viewBox="0 0 175.22 175.22" 
                className="w-3.5 h-3.5 shrink-0" 
                fill="#9fff19"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M88.67,11.1c-17.51-.2-33.7,5.41-46.76,15.03-10.87,8-10.03,24.49,1.63,31.27l.12.07c6.44,3.75,14.49,3.3,20.49-1.12,6.79-5,15.23-7.89,24.34-7.73,21.15.38,38.48,17.49,39.11,38.63.51,16.82-9.41,31.4-23.78,37.73-6.86,3.03-11.4,9.7-11.41,17.2v.14c-.02,13.44,13.74,22.55,26.07,17.21,27.13-11.75,46.21-38.59,46.65-69.93.61-42.67-33.81-78.02-76.48-78.51ZM47.88,88.49c0-1.54.09-3.06.26-4.56.84-7.4-2.74-14.6-9.17-18.34l-.12-.07c-11.7-6.8-26.47.7-27.99,14.14-.33,2.89-.5,5.84-.5,8.82,0,31.76,19.12,59.04,46.48,70.98,12.35,5.39,26.19-3.64,26.2-17.12v-.15c0-7.38-4.29-14.17-11.07-17.09-14.16-6.12-24.08-20.21-24.08-36.62Z" />
              </svg>
              <span 
                className="text-[11px] sm:text-xs text-[#999999] tracking-widest uppercase font-normal"
                style={{ fontFamily: "'Chivo Mono', monospace" }}
              >
                CURRENT DIRECTORY
              </span>
              <span className="text-[#444444] text-xs" style={{ fontFamily: "'Chivo Mono', monospace" }}>/</span>
              <span 
                className="text-[11px] sm:text-xs text-[#9fff19] tracking-wider font-normal"
                style={{ fontFamily: "'Chivo Mono', monospace" }}
              >
                {activeProject.sysId}
              </span>
            </div>
            <span 
              className="text-[9px] text-[#555555] hidden sm:inline"
              style={{ fontFamily: "'Chivo Mono', monospace" }}
            >
              SEC_ID // INFO_NODE_01
            </span>
          </div>

          {/* Large Title for Active Project */}
          <h2 
            id="current-work-title"
            className="text-xl sm:text-2xl lg:text-3xl font-normal text-white uppercase tracking-tight mt-0.5"
            style={{ 
              fontFamily: "'Chivo Mono', monospace",
              lineHeight: '34.5px'
            }}
          >
            {activeProject.title}
          </h2>

          <p 
            className="text-[11px] sm:text-xs text-[#aaaaaa] mt-2 leading-relaxed line-clamp-2 max-w-xl uppercase"
            style={{ fontFamily: "'Chivo Mono', monospace" }}
          >
            {activeProject.description}
          </p>
        </div>

        {/* Faux-Terminal Data Strings for Flavor */}
        <div 
          className="my-3 sm:my-4 grid grid-cols-3 sm:grid-cols-3 gap-2 p-2.5 bg-black border border-[#262626] text-[9px] sm:text-[10px]"
          style={{ fontFamily: "'Chivo Mono', monospace" }}
        >
          <div>
            <span 
              className="text-[#666666] block text-[8px] sm:text-[9px]"
              style={{ fontFamily: "'Chivo Mono', monospace" }}
            >
              SYS_ID:
            </span>
            <span 
              className="text-white font-normal"
              style={{ fontFamily: "'Chivo Mono', monospace" }}
            >
              {activeProject.sysId.replace('SYS_ID: ', '')}
            </span>
          </div>
          <div>
            <span 
              className="text-[#666666] block text-[8px] sm:text-[9px]"
              style={{ fontFamily: "'Chivo Mono', monospace" }}
            >
              THROUGHPUT:
            </span>
            <span 
              className="text-[#9fff19] font-normal truncate block"
              style={{ fontFamily: "'Chivo Mono', monospace" }}
            >
              {activeProject.specs.throughput}
            </span>
          </div>
          <div>
            <span 
              className="text-[#666666] block text-[8px] sm:text-[9px]"
              style={{ fontFamily: "'Chivo Mono', monospace" }}
            >
              STATUS:
            </span>
            <span 
              className="text-[#9fff19] font-normal"
              style={{ fontFamily: "'Chivo Mono', monospace" }}
            >
              {activeProject.status}
            </span>
          </div>
        </div>

        {/* Footer info inside Info Box */}
        <div className="flex items-center justify-between pt-1 border-t border-[#222222]">
          <span 
            className="text-[9px] text-[#666666] uppercase"
            style={{ fontFamily: "'Chivo Mono', monospace" }}
          >
            PROTOCOL: {activeProject.specs.protocol}
          </span>

          <span 
            className="text-[9px] text-[#555555] hidden sm:inline"
            style={{ fontFamily: "'Chivo Mono', monospace" }}
          >
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
            <div className="hidden sm:block w-2 h-2 bg-black"></div>
            <span 
              className="text-[10px] sm:text-xs font-normal tracking-widest uppercase"
              style={{ fontFamily: "'Chivo Mono', monospace" }}
            >
              Motion Director, Co-Founder of //{' '}
              <a
                href="https://balimotion.club"
                target="_blank"
                rel="noreferrer noopener"
                className="underline hover:text-white hover:bg-black px-1 transition-colors duration-75 font-medium inline-block"
                style={{ fontFamily: "'Chivo Mono', monospace" }}
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
          <div className="hidden sm:block text-[10px] sm:text-xs font-mono font-normal tracking-tighter">
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
                className="uppercase tracking-tight text-black flex items-center font-normal"
                style={{ 
                  fontFamily: "'Chivo Mono', monospace", 
                  fontSize: '20px', 
                  lineHeight: '23.5px', 
                  height: '20px', 
                  fontWeight: 'normal' 
                }}
              >
                CONTACT ME
              </span>
              <span className="hidden sm:inline-block text-2xl sm:text-4xl font-normal text-black group-hover:translate-x-1.5 transition-transform duration-100 font-mono">
                ↗
              </span>
            </div>
            
            <p 
              className="text-[10px] sm:text-xs font-normal text-black/80 mt-1.5 uppercase tracking-wider"
              style={{ fontFamily: "'Chivo Mono', monospace" }}
            >
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
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-0 border border-dotted border-black bg-[#9fff19]">
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
