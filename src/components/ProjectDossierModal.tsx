import React from 'react';
import { ProjectData } from '../types';
import { playTacticalBlip, playSelectBuzz } from '../utils/audio';

interface ProjectDossierModalProps {
  project: ProjectData | null;
  isOpen: boolean;
  onClose: () => void;
  onOpenContact: () => void;
}

export const ProjectDossierModal: React.FC<ProjectDossierModalProps> = ({
  project,
  isOpen,
  onClose,
  onOpenContact
}) => {
  if (!isOpen || !project) return null;

  return (
    <div
      id="dossier-modal-overlay"
      className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-3 sm:p-6 backdrop-blur-xs select-none"
      onClick={onClose}
    >
      <div
        id="dossier-modal-content"
        className="w-full max-w-3xl bg-[#0d0d0d] border border-[#444444] text-white p-6 sm:p-8 relative max-h-[90vh] overflow-y-auto"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header Bar with Sub-header & Close */}
        <div className="flex items-start justify-between border-b border-[#333333] pb-4 mb-6">
          <div>
            <div className="flex items-center gap-2 text-xs font-mono text-[#9fff19] uppercase">
              <span>[+] DOSSIER // {project.sysId}</span>
              <span className="text-[#555555]">|</span>
              <span className="text-white">{project.category}</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-black font-display-oswald uppercase text-white mt-1">
              {project.title}
            </h2>
          </div>

          <button
            id="close-dossier-modal-btn"
            onClick={() => {
              playTacticalBlip(800, 0.02);
              onClose();
            }}
            className="text-white hover:text-[#9fff19] border border-[#333333] hover:border-[#9fff19] px-2.5 py-1 text-xs font-mono cursor-pointer"
          >
            [CLOSE]
          </button>
        </div>

        {/* Tactical Specification Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 font-mono text-xs mb-6">
          <div className="p-3 bg-black border border-[#222222]">
            <span className="text-[#666666] block text-[10px]">CORE ARCHITECTURE ENGINE:</span>
            <span className="text-white font-bold text-sm">{project.specs.engine}</span>
          </div>

          <div className="p-3 bg-black border border-[#222222]">
            <span className="text-[#666666] block text-[10px]">PROCESSING THROUGHPUT:</span>
            <span className="text-[#9fff19] font-bold text-sm">{project.specs.throughput}</span>
          </div>

          <div className="p-3 bg-black border border-[#222222]">
            <span className="text-[#666666] block text-[10px]">REAL-TIME LATENCY:</span>
            <span className="text-white font-bold text-sm">{project.specs.latency}</span>
          </div>

          <div className="p-3 bg-black border border-[#222222]">
            <span className="text-[#666666] block text-[10px]">TRANSMISSION PROTOCOL:</span>
            <span className="text-white font-bold text-sm">{project.specs.protocol}</span>
          </div>
        </div>

        {/* Narrative & Tactical Directive */}
        <div className="space-y-4 font-mono text-xs text-[#cccccc] leading-relaxed mb-6">
          <div>
            <h4 className="text-[11px] font-bold text-white uppercase tracking-wider mb-1 text-[#9fff19]">
              MISSION BRIEFING & DIRECTIVE:
            </h4>
            <p className="p-3 bg-black border border-[#222222]">
              {project.description}
            </p>
          </div>

          {/* Tags */}
          <div>
            <h4 className="text-[11px] font-bold text-white uppercase tracking-wider mb-2">
              TECHNOLOGY CAPABILITIES & ARCHETYPES:
            </h4>
            <div className="flex flex-wrap gap-2">
              {project.tags.map((tag) => (
                <span
                  key={tag}
                  className="px-2 py-1 bg-[#1a1a1a] border border-[#333333] text-[10px] text-white font-mono uppercase tracking-wider"
                >
                  #{tag}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom Actions */}
        <div className="pt-4 border-t border-[#333333] flex flex-col sm:flex-row items-center justify-between gap-3">
          <div className="text-[10px] font-mono text-[#666666]">
            TIMESTAMP: {project.timestamp} // SECTOR: {project.coordinates}
          </div>

          <div className="flex items-center gap-2 w-full sm:w-auto">
            <button
              onClick={() => {
                onClose();
                playSelectBuzz();
                onOpenContact();
              }}
              className="w-full sm:w-auto bg-[#9fff19] hover:bg-white text-black font-bold font-mono text-xs px-4 py-2 uppercase transition-colors cursor-pointer hud-btn-hover flex items-center justify-center gap-1.5"
            >
              <span>INQUIRE ABOUT THIS SPEC</span>
              <span>↗</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
