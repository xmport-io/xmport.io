import React, { useState, useEffect } from 'react';
import { PROJECTS } from './data/projects';
import { TopNavbar } from './components/TopNavbar';
import { HeroVisualCore, GALLERY_VIDEOS } from './components/HeroVisualCore';
import { BottomSplitBoxes } from './components/BottomSplitBoxes';
import { TerminalTransmissionModal } from './components/TerminalTransmissionModal';
import { playTacticalBlip } from './utils/audio';

export default function App() {
  const [hasStarted, setHasStarted] = useState<boolean>(false);
  const [currentReelIdx, setCurrentReelIdx] = useState<number>(0);
  const [isContactOpen, setIsContactOpen] = useState<boolean>(false);

  const handleStartJourney = () => {
    if (!hasStarted) {
      playTacticalBlip(1600, 0.04);
      setHasStarted(true);
    }
  };

  // Allow clicking anywhere on screen to start journey if not started
  useEffect(() => {
    if (hasStarted) return;
    const handleGlobalClick = (e: MouseEvent) => {
      // Don't intercept if clicking contact modal
      if (isContactOpen) return;
      handleStartJourney();
    };

    window.addEventListener('click', handleGlobalClick);
    return () => window.removeEventListener('click', handleGlobalClick);
  }, [hasStarted, isContactOpen]);

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
        {/* TOP NAVBAR OVERLAY (CLOCK & LOGO PASS-THROUGH) */}
        <TopNavbar />

        {/* HERO SECTION (SPLASH OVERLAY & GALLERY REELS) */}
        <HeroVisualCore
          hasStarted={hasStarted}
          onStart={handleStartJourney}
          currentIdx={currentReelIdx}
          onPrev={handlePrevReel}
          onNext={handleNextReel}
        />

        {/* BOTTOM SPLIT BOXES (INFO READOUT & CONTACT ME ACTION) */}
        <BottomSplitBoxes
          hasStarted={hasStarted}
          activeProject={activeProject}
          onOpenContact={() => setIsContactOpen(true)}
        />
      </main>

      {/* TACTICAL TRANSMISSION MODAL */}
      <TerminalTransmissionModal
        isOpen={isContactOpen}
        onClose={() => setIsContactOpen(false)}
      />
    </div>
  );
}

