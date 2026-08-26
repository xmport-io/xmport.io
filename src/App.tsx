import React, { useState } from 'react';
import { PROJECTS } from './data/projects';
import { TopNavbar } from './components/TopNavbar';
import { HeroVisualCore, GALLERY_VIDEOS } from './components/HeroVisualCore';
import { BottomSplitBoxes } from './components/BottomSplitBoxes';
import { TerminalTransmissionModal } from './components/TerminalTransmissionModal';

export default function App() {
  const [currentReelIdx, setCurrentReelIdx] = useState<number>(0);
  const [isContactOpen, setIsContactOpen] = useState<boolean>(false);

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

        {/* HERO SECTION (GALLERY REELS & AMBIENT BACKDROP FILLS TO TOP) */}
        <HeroVisualCore
          currentIdx={currentReelIdx}
          onPrev={handlePrevReel}
          onNext={handleNextReel}
        />

        {/* BOTTOM SPLIT BOXES (INFO READOUT & CONTACT ME ACTION) */}
        <BottomSplitBoxes
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
