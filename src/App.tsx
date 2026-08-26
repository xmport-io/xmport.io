import React, { useState } from 'react';
import { PROJECTS } from './data/projects';
import { TopNavbar } from './components/TopNavbar';
import { HeroVisualCore } from './components/HeroVisualCore';
import { BottomSplitBoxes } from './components/BottomSplitBoxes';
import { TerminalTransmissionModal } from './components/TerminalTransmissionModal';
import { ProjectDossierModal } from './components/ProjectDossierModal';

export default function App() {
  const [activeProjectId] = useState<string>(PROJECTS[0].id);
  const [isContactOpen, setIsContactOpen] = useState<boolean>(false);
  const [isDossierOpen, setIsDossierOpen] = useState<boolean>(false);

  const activeProject = PROJECTS.find((p) => p.id === activeProjectId) || PROJECTS[0];

  return (
    <div 
      id="marathon-fui-portfolio-root"
      className="h-screen w-screen bg-black text-white flex flex-col overflow-hidden font-mono antialiased selection:bg-[#9fff19] selection:text-black select-none"
    >
      {/* MAIN CONTENT AREA */}
      <main className="flex-1 flex flex-col h-full w-full overflow-hidden font-mono">
        {/* 2. TOP NAVBAR (CLOCK ONLY) */}
        <TopNavbar />

        {/* 3. HERO SECTION (THE VISUAL CORE) */}
        <HeroVisualCore />

        {/* 4. THE BOTTOM SPLIT BOXES (DATA READOUT & CONTACT ME ACTION) */}
        <BottomSplitBoxes
          activeProject={activeProject}
          onOpenContact={() => setIsContactOpen(true)}
        />
      </main>

      {/* =====================================================================
          TACTICAL MODAL OVERLAYS
         ===================================================================== */}
      <TerminalTransmissionModal
        isOpen={isContactOpen}
        onClose={() => setIsContactOpen(false)}
      />

      <ProjectDossierModal
        project={activeProject}
        isOpen={isDossierOpen}
        onClose={() => setIsDossierOpen(false)}
        onOpenContact={() => {
          setIsDossierOpen(false);
          setIsContactOpen(true);
        }}
      />
    </div>
  );
}
