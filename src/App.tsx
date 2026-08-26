import React, { useState, useEffect } from 'react';
import { PROJECTS } from './data/projects';
import { TopNavbar } from './components/TopNavbar';
import { HeroVisualCore, GALLERY_VIDEOS } from './components/HeroVisualCore';
import { ProjectNavigationBar } from './components/ProjectNavigationBar';
import { BottomSplitBoxes } from './components/BottomSplitBoxes';
import { playTacticalBlip } from './utils/audio';

export default function App() {
  const [hasStarted, setHasStarted] = useState<boolean>(false);
  const [currentReelIdx, setCurrentReelIdx] = useState<number>(0);

  const handleStartJourney = () => {
    if (!hasStarted) {
      playTacticalBlip(1600, 0.04);
      setHasStarted(true);
    }
  };

  const handlePrevReel = () => {
    setCurrentReelIdx((prev) => (prev - 1 + GALLERY_VIDEOS.length) % GALLERY_VIDEOS.length);
  };

  const handleNextReel = () => {
    setCurrentReelIdx((prev) => (prev + 1) % GALLERY_VIDEOS.length);
  };

  const activeProject = PROJECTS[currentReelIdx] || PROJECTS[0];

  return (
    <div 
      id="marathon-fui-portfolio-root"
      className="h-screen w-screen bg-black text-white flex flex-col overflow-hidden font-mono antialiased selection:bg-[#9fff19] selection:text-black select-none"
    >
      {/* MAIN CONTENT AREA */}
      <main className="relative flex-1 flex flex-col h-full w-full overflow-hidden font-mono">
        {/* TOP NAVBAR OVERLAY (CLOCK, BRAND & TABLET GREEN HEADER) */}
        <TopNavbar
          hasStarted={hasStarted}
          currentIdx={currentReelIdx}
          totalVideos={GALLERY_VIDEOS.length}
        />

        {/* HERO SECTION (SPLASH OVERLAY & GALLERY REELS) */}
        <HeroVisualCore
          hasStarted={hasStarted}
          onStart={handleStartJourney}
          currentIdx={currentReelIdx}
          onPrev={handlePrevReel}
          onNext={handleNextReel}
        />

        {/* FRAMES NAVIGATION BAR (ABOVE DIRECTORY & CONTACT BOX) */}
        <ProjectNavigationBar
          projects={PROJECTS}
          currentIndex={currentReelIdx}
          onSelectIndex={(idx) => {
            setCurrentReelIdx(idx);
            handleStartJourney();
          }}
          hasStarted={hasStarted}
        />

        {/* BOTTOM SPLIT BOXES (INFO READOUT & CONTACT ME ACTION) */}
        <BottomSplitBoxes
          hasStarted={hasStarted}
          activeProject={activeProject}
        />

        {/* SVG TEXTURE FILTER (FIGMA-STYLE NOISE EDGE & RASTER BLUR) */}
        <svg 
          id="fui-texture-filter-svg"
          className="fixed w-0 h-0 pointer-events-none opacity-0" 
          aria-hidden="true" 
          style={{ position: 'absolute', width: 0, height: 0 }}
        >
          <defs>
            <filter id="fui-text-texture" x="-20%" y="-20%" width="140%" height="140%">
              {/* Fine turbulence matching Figma Texture Size */}
              <feTurbulence type="fractalNoise" baseFrequency="0.6 0.2" numOctaves="1" result="noise" />
              {/* Displacement map for organic noisy jitter along edges - reduced by 50% */}
              <feDisplacementMap in="SourceGraphic" in2="noise" scale="1.0" xChannelSelector="R" yChannelSelector="G" result="displaced" />
              {/* Gaussian bloom & soft color bleed - reduced by 50% */}
              <feGaussianBlur in="displaced" stdDeviation="0.15" result="bloomBleed" />
              <feGaussianBlur in="displaced" stdDeviation="0.2" result="softCore" />
              {/* Composite blurred bleeding halo and displaced core */}
              <feMerge>
                <feMergeNode in="bloomBleed" />
                <feMergeNode in="softCore" />
                <feMergeNode in="displaced" />
              </feMerge>
            </filter>
          </defs>
        </svg>

        {/* CRT SCANLINES & CINEMATIC NOISE OVERLAY */}
        <div 
          id="tactical-crt-scanlines-layer"
          className="pointer-events-none fixed inset-0 z-50 tactical-scanlines opacity-25 mix-blend-overlay"
          aria-hidden="true"
        />
        <div 
          id="tactical-grain-layer"
          className="pointer-events-none fixed -inset-[100%] w-[300%] h-[300%] z-50 tactical-grain animate-grain opacity-[0.11] mix-blend-screen"
          aria-hidden="true"
        />
      </main>
    </div>
  );
}

