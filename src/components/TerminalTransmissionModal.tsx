import React, { useState } from 'react';
import { playTacticalBlip, playSelectBuzz, playTransmissionDeploy } from '../utils/audio';

interface TerminalTransmissionModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const TerminalTransmissionModal: React.FC<TerminalTransmissionModalProps> = ({
  isOpen,
  onClose
}) => {
  const [callsign, setCallsign] = useState('');
  const [channel, setChannel] = useState('');
  const [message, setMessage] = useState('');
  const [priority, setPriority] = useState<'STANDARD' | 'CRITICAL_FLASH'>('STANDARD');
  const [isTransmitting, setIsTransmitting] = useState(false);
  const [transmissionSuccess, setTransmissionSuccess] = useState(false);
  const [copiedKey, setCopiedKey] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!message.trim()) return;

    setIsTransmitting(true);
    playTransmissionDeploy();

    setTimeout(() => {
      setIsTransmitting(false);
      setTransmissionSuccess(true);
      setTimeout(() => {
        setTransmissionSuccess(false);
        setCallsign('');
        setChannel('');
        setMessage('');
        onClose();
      }, 2400);
    }, 1200);
  };

  const copyPublicKey = () => {
    playSelectBuzz();
    navigator.clipboard.writeText('0x9F_FF19_BUNGIE_TAU_CETI_MARATHON_SECURE_2026');
    setCopiedKey(true);
    setTimeout(() => setCopiedKey(false), 2000);
  };

  return (
    <div 
      id="transmission-modal-overlay"
      className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-3 sm:p-6 backdrop-blur-xs select-none"
      onClick={onClose}
    >
      <div 
        id="transmission-modal-content"
        className="w-full max-w-2xl bg-[#0a0a0a] border-2 border-[#9fff19] text-white p-6 sm:p-8 relative shadow-[0_0_50px_rgba(159,255,25,0.15)]"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Top Header Bar */}
        <div className="flex items-center justify-between border-b border-[#333333] pb-4 mb-6">
          <div className="flex items-center gap-3">
            <div className="w-3 h-3 bg-[#9fff19] animate-pulse"></div>
            <div>
              <span className="text-sm font-mono font-bold text-[#9fff19] tracking-widest block uppercase">
                DIRECT TRANSMISSION CONSOLE // TAU_NET
              </span>
              <span className="text-[10px] font-mono text-[#666666]">
                NODE: 8993-DIRECT-DISPATCH // ENCRYPTION: 256-BIT QUANTUM RESISTANT
              </span>
            </div>
          </div>

          <button
            id="close-transmission-modal-btn"
            onClick={() => {
              playTacticalBlip(800, 0.02);
              onClose();
            }}
            className="text-white hover:text-[#9fff19] border border-[#333333] hover:border-[#9fff19] px-2.5 py-1 text-xs font-mono cursor-pointer"
          >
            [ESC / CLOSE]
          </button>
        </div>

        {transmissionSuccess ? (
          <div className="py-12 flex flex-col items-center justify-center text-center font-mono space-y-4">
            <div className="w-12 h-12 bg-[#9fff19] text-black text-2xl font-bold flex items-center justify-center">
              ✓
            </div>
            <h3 className="text-xl font-display-oswald font-bold text-[#9fff19] tracking-wider uppercase">
              TRANSMISSION BROADCAST SUCCESSFUL
            </h3>
            <p className="text-xs text-[#aaaaaa] max-w-md">
              DATA PACKET ROUTED THROUGH SECURE RELAY. RESPONSE PROTOCOL COMMENCED. DISPATCH LATENCY: 0.84ms.
            </p>
            <div className="text-[10px] text-[#666666] tracking-widest">
              SYS_ACK_HASH: 0x9F88A1904C92
            </div>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-4 font-mono text-xs">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-[#888888] mb-1 font-bold">
                  SENDER CALLSIGN / NAME:
                </label>
                <input
                  type="text"
                  required
                  placeholder="OPERATIVE / RECRUITER"
                  value={callsign}
                  onChange={(e) => setCallsign(e.target.value)}
                  className="w-full bg-black border border-[#444444] focus:border-[#9fff19] focus:outline-none px-3 py-2 text-white font-mono placeholder:text-[#444444]"
                />
              </div>

              <div>
                <label className="block text-[#888888] mb-1 font-bold">
                  COMMS CHANNEL / EMAIL:
                </label>
                <input
                  type="email"
                  required
                  placeholder="contact@enterprise.com"
                  value={channel}
                  onChange={(e) => setChannel(e.target.value)}
                  className="w-full bg-black border border-[#444444] focus:border-[#9fff19] focus:outline-none px-3 py-2 text-white font-mono placeholder:text-[#444444]"
                />
              </div>
            </div>

            <div>
              <label className="block text-[#888888] mb-1 font-bold flex items-center justify-between">
                <span>PRIORITY CLASSIFICATION:</span>
                <span className="text-[10px] text-[#9fff19]">{priority}</span>
              </label>
              <div className="grid grid-cols-2 gap-2">
                <button
                  type="button"
                  onClick={() => {
                    playTacticalBlip(1000, 0.02);
                    setPriority('STANDARD');
                  }}
                  className={`py-2 px-3 text-center border font-bold cursor-pointer transition-colors ${
                    priority === 'STANDARD'
                      ? 'bg-[#1a1a1a] text-[#9fff19] border-[#9fff19]'
                      : 'bg-black text-[#666666] border-[#333333] hover:text-white'
                  }`}
                >
                  [+] STANDARD DISPATCH
                </button>
                <button
                  type="button"
                  onClick={() => {
                    playTacticalBlip(1300, 0.02);
                    setPriority('CRITICAL_FLASH');
                  }}
                  className={`py-2 px-3 text-center border font-bold cursor-pointer transition-colors ${
                    priority === 'CRITICAL_FLASH'
                      ? 'bg-[#9fff19] text-black border-[#9fff19]'
                      : 'bg-black text-[#666666] border-[#333333] hover:text-white'
                  }`}
                >
                  [!] FLASH CRITICAL (HIGH-PRIORITY)
                </button>
              </div>
            </div>

            <div>
              <label className="block text-[#888888] mb-1 font-bold">
                PAYLOAD DIRECTIVE / BRIEF:
              </label>
              <textarea
                required
                rows={4}
                placeholder="State mission parameters, project scope, timeline, or engineering inquiry..."
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                className="w-full bg-black border border-[#444444] focus:border-[#9fff19] focus:outline-none p-3 text-white font-mono resize-none placeholder:text-[#444444]"
              ></textarea>
            </div>

            {/* Quick Actions & Dispatch Button */}
            <div className="pt-2 flex flex-col sm:flex-row items-center justify-between gap-3 border-t border-[#333333]">
              <button
                type="button"
                onClick={copyPublicKey}
                className="text-[11px] text-[#888888] hover:text-white flex items-center gap-1.5 cursor-pointer underline decoration-[#333333]"
              >
                <span>{copiedKey ? '✓ PUBLIC KEY COPIED' : '[COPY SECURE PGP KEY]'}</span>
              </button>

              <button
                type="submit"
                disabled={isTransmitting}
                className="w-full sm:w-auto bg-[#9fff19] hover:bg-white text-black font-bold font-mono text-sm tracking-wider uppercase px-6 py-2.5 transition-colors cursor-pointer hud-btn-hover flex items-center justify-center gap-2"
              >
                <span>{isTransmitting ? 'ENCRYPTING & TRANSMITTING...' : 'TRANSMIT DIRECTIVE'}</span>
                <span>⚡</span>
              </button>
            </div>
          </form>
        )}
      </div>
    </div>
  );
};
