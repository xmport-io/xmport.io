import React, { useState } from 'react';
import { Plus, Minus } from 'lucide-react';
import { playTacticalBlip } from '../utils/audio';

export interface GalleryVideo {
  id: string;
  title: string;
  embedUrl: string;
}

export const GALLERY_VIDEOS: GalleryVideo[] = [
  {
    id: 'FRAMES_01',
    title: 'FEATURED REEL 01',
    embedUrl:
      'https://framerate.tv/embed/43ee9f07-4e4f-4415-a9f0-06863f8bdf45?primary_color=%2523ffffff&track_color=%2523ffffff&theme=minimal&autoplay=1&muted=1&loop=1',
  },
  {
    id: 'FRAMES_02',
    title: 'FEATURED REEL 02',
    embedUrl:
      'https://framerate.tv/embed/614feee3-64b9-47eb-a244-9c47008ce881?primary_color=%2523ffffff&track_color=%2523ffffff&theme=minimal&autoplay=1&muted=1&loop=1',
  },
  {
    id: 'FRAMES_03',
    title: 'FEATURED REEL 03',
    embedUrl:
      'https://framerate.tv/embed/49cd0c01-a79e-476a-bffc-aa5ec7e2c273?primary_color=%2523ffffff&track_color=%2523ffffff&theme=minimal&autoplay=1&muted=1&loop=1',
  },
  {
    id: 'FRAMES_04',
    title: 'FEATURED REEL 04',
    embedUrl:
      'https://framerate.tv/embed/5371b083-3f70-4774-b15e-a86b69219a3d?primary_color=%2523ffffff&track_color=%2523ffffff&theme=minimal&autoplay=1&muted=1&loop=1',
  },
  {
    id: 'FRAMES_05',
    title: 'FEATURED REEL 05',
    embedUrl:
      'https://framerate.tv/embed/722e948d-b8be-4f83-82a9-ce904b099805?primary_color=%2523ffffff&track_color=%2523ffffff&theme=minimal&autoplay=1&muted=1&loop=1',
  },
];

interface HeroVisualCoreProps {
  hasStarted: boolean;
  onStart: () => void;
  currentIdx: number;
  onPrev: () => void;
  onNext: () => void;
}

export const HeroVisualCore: React.FC<HeroVisualCoreProps> = ({
  hasStarted,
  onStart,
  currentIdx,
  onPrev,
  onNext,
}) => {
  const handlePrev = (e: React.MouseEvent) => {
    e.stopPropagation();
    playTacticalBlip(1000, 0.03);
    onPrev();
  };

  const handleNext = (e: React.MouseEvent) => {
    e.stopPropagation();
    playTacticalBlip(1600, 0.03);
    onNext();
  };

  const activeVideo = GALLERY_VIDEOS[currentIdx] || GALLERY_VIDEOS[0];

  // When started, unmute audio on the active video
  const activeEmbedUrl = hasStarted
    ? activeVideo.embedUrl.replace('muted=1', 'muted=0')
    : activeVideo.embedUrl;

  return (
    <section
      id="hero-visual-core"
      className="relative flex-1 min-h-0 w-full bg-[#000000] border-b border-[#333333] overflow-hidden flex items-center justify-center group/hero"
      onClick={() => {
        if (!hasStarted) {
          onStart();
        }
      }}
    >
      {/* INITIAL VISITOR INTRO SPLASH OVERLAY */}
      {!hasStarted && (
        <div
          id="hero-intro-splash"
          className="absolute inset-0 z-40 bg-black flex items-center justify-center p-6 cursor-pointer select-none transition-opacity duration-300"
          onClick={onStart}
        >
          <div className="flex flex-col md:flex-row items-center justify-center gap-6 sm:gap-8 lg:gap-10 max-w-5xl">
            {/* Title & Role Block */}
            <div className="flex flex-col items-center md:items-start text-center md:text-left">
              <h2
                className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-normal uppercase text-white leading-tight"
                style={{ fontFamily: "'Chivo Mono', monospace", letterSpacing: '-0.05em' }}
              >
                ANDY O XMPORT
              </h2>
              <span
                className="text-sm sm:text-base md:text-lg lg:text-xl font-normal uppercase text-white mt-1"
                style={{ fontFamily: "'Chivo Mono', monospace", letterSpacing: '-0.05em' }}
              >
                MOTION DIRECTOR
              </span>
            </div>

            {/* Neon Green Plus Symbol */}
            <div className="text-[#9fff19] text-3xl sm:text-4xl lg:text-5xl font-bold select-none leading-none">
              +
            </div>

            {/* Click to start CTA */}
            <div className="text-center md:text-left">
              <span
                className="text-xs sm:text-sm lg:text-base font-normal uppercase text-white/90 hover:text-[#9fff19] transition-colors duration-150 inline-block"
                style={{ fontFamily: "'Chivo Mono', monospace", letterSpacing: '-0.05em' }}
              >
                CLICK TO START THE JOURNEY
              </span>
            </div>
          </div>
        </div>
      )}

      {/* REEL INDICATOR HUD - TOP CENTER (HIDDEN IN MOBILE VIEW & BEFORE START) */}
      {hasStarted && (
        <div 
          id="reel-indicator-badge"
          style={{ fontFamily: "'Chivo Mono', monospace" }}
          className="hidden sm:flex absolute top-2.5 left-1/2 -translate-x-1/2 z-20 pointer-events-none px-3 py-1 bg-black/80 border border-[#333333] text-[10px] sm:text-xs font-normal text-[#9fff19] tracking-widest uppercase items-center gap-2 backdrop-blur-sm shadow-sm"
        >
          <span className="w-1.5 h-1.5 rounded-full bg-[#9fff19] animate-pulse"></span>
          <span style={{ fontFamily: "'Chivo Mono', monospace" }}>
            REEL {String(currentIdx + 1).padStart(2, '0')} / {String(GALLERY_VIDEOS.length).padStart(2, '0')}
          </span>
        </div>
      )}

      {/* LEFT GALLERY CONTROLLER: MINUS (-) SVG ICON */}
      {hasStarted && (
        <button
          id="gallery-nav-prev"
          type="button"
          onClick={handlePrev}
          aria-label="Previous Video"
          title="Previous Reel (-)"
          className="absolute left-2 sm:left-4 top-1/2 -translate-y-1/2 z-20 p-1.5 bg-transparent border-0 cursor-pointer transition-transform duration-100 flex items-center justify-center group active:scale-90"
        >
          <Minus
            className="w-7 h-7 sm:w-9 sm:h-9 stroke-[3] transition-transform duration-75 group-hover:scale-125 drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)]"
            style={{ color: '#9fff19', stroke: '#9fff19' }}
          />
        </button>
      )}

      {/* VIDEO CONTAINER WITH AMBIENT BACKDROP */}
      <div className="relative w-full h-full flex items-center justify-center bg-black overflow-hidden">
        {/* Ambient Blur Backdrop (YouTube ambient mode effect) */}
        <div 
          className="absolute inset-0 w-full h-full pointer-events-none overflow-hidden flex items-center justify-center scale-125 opacity-70 blur-3xl"
          aria-hidden="true"
        >
          <iframe
            key={`ambient-${activeVideo.id}-${hasStarted ? 'live' : 'idle'}`}
            src={activeEmbedUrl}
            tabIndex={-1}
            className="w-full h-full object-cover scale-150 pointer-events-none border-0"
            style={{
              aspectRatio: '16 / 9',
              border: 'none',
              filter: 'brightness(1.1) saturate(1.4)',
            }}
            allow="autoplay; fullscreen; picture-in-picture"
            title={`Ambient Backdrop ${activeVideo.title}`}
          />
        </div>

        {/* Foreground Sharp Video */}
        <iframe
          key={`main-${activeVideo.id}-${hasStarted ? 'live' : 'idle'}`}
          src={activeEmbedUrl}
          width="1920"
          height="1080"
          className="relative z-10 aspect-video w-full h-full max-w-full max-h-full border-0 drop-shadow-[0_10px_30px_rgba(0,0,0,0.9)]"
          style={{
            aspectRatio: '16 / 9',
            border: 'none',
          }}
          allow="autoplay; fullscreen; picture-in-picture"
          allowFullScreen
          title={activeVideo.title}
        />
      </div>

      {/* RIGHT GALLERY CONTROLLER: PLUS (+) SVG ICON */}
      {hasStarted && (
        <button
          id="gallery-nav-next"
          type="button"
          onClick={handleNext}
          aria-label="Next Video"
          title="Next Reel (+)"
          className="absolute right-2 sm:right-4 top-1/2 -translate-y-1/2 z-20 p-1.5 bg-transparent border-0 cursor-pointer transition-transform duration-100 flex items-center justify-center group active:scale-90"
        >
          <Plus
            className="w-7 h-7 sm:w-9 sm:h-9 stroke-[3] transition-transform duration-75 group-hover:scale-125 drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)]"
            style={{ color: '#9fff19', stroke: '#9fff19' }}
          />
        </button>
      )}
    </section>
  );
};

