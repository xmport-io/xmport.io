import { ProjectData } from '../types';

export const PROJECTS: ProjectData[] = [
  {
    id: 'proj_01',
    code: '[+] PROJECT_01',
    sysId: 'SYS_ID: 8993',
    title: 'SYSTEM & SPIRIT',
    subtitle: 'NEO-TACTICAL RUNTIME ENGINE & CYBERNETIC COCKPIT',
    category: 'TACTICAL INTERFACE // OS ARCHITECTURE',
    clearance: 'LEVEL_05 // HIGH-PRIORITY',
    timestamp: '2026.08.25-20:14',
    coordinates: '45°12\'09"N // 122°40\'55"W',
    memoryAlloc: '128.4 MB / 512.0 MB',
    status: 'OPERATIONAL',
    description: 'A sovereign terminal operating system and military-grade holographic HUD rendering engine designed for rapid tactical assessment in zero-G high-radiation exoplanet deployments.',
    specs: {
      engine: 'TAU-CORE v4.81 (Vulkan / WebGPU)',
      throughput: '1.24 TFLOPS // 120 FPS LOCK',
      latency: '< 1.4ms DETERMINISTIC',
      protocol: 'UDP/QUIC MESH-NET',
      encryption: 'AES-256-GCM + CRYSTALS-Kyber'
    },
    tags: ['NEO-FUI', 'RUST_CORE', 'WEBGPU', 'LOW_LATENCY', 'BRUTALIST_UI'],
    visualTheme: {
      accentColor: '#9fff19',
      gridScale: 32,
      glyphCode: 'Ω-8993-TC'
    }
  },
  {
    id: 'proj_02',
    code: '[+] PROJECT_02',
    sysId: 'SYS_ID: 4108',
    title: 'CHRONO BREACH',
    subtitle: 'TEMPORAL TELEMETRY & MULTI-SPECTRAL SENSOR SUITE',
    category: 'TELEMETRY VISUALIZATION // RADAR SUITE',
    clearance: 'RESTRICTED // ORBITAL GRID',
    timestamp: '2026.06.14-04:22',
    coordinates: '12°54\'33"S // 77°01\'40"E',
    memoryAlloc: '256.0 MB / 1024.0 MB',
    status: 'DEPLOYED',
    description: 'High-frequency telemetry reconstruction array capable of rendering live ballistic trajectories, micro-debris radar sweeps, and ship hull strain distributions in real-time.',
    specs: {
      engine: 'SPECTRA_RAY MATRIX v2.1',
      throughput: '850K SAMPLES/SEC',
      latency: '2.1ms WIRE-SPEED',
      protocol: 'CAN_BUS v2 / ARINC_429',
      encryption: 'CHACHA20-POLY1305'
    },
    tags: ['TELEMETRY', 'SPATIAL_HUD', 'HIGH_FREQ', 'RADAR', 'WebGL2'],
    visualTheme: {
      accentColor: '#9fff19',
      gridScale: 24,
      glyphCode: 'Δ-4108-CB'
    }
  },
  {
    id: 'proj_03',
    code: '[+] PROJECT_03',
    sysId: 'SYS_ID: 9021',
    title: 'KINETIC MATRIX',
    subtitle: 'BALLISTIC COMPENSATOR & COMBAT SUIT FIRMWARE',
    category: 'EMBEDDED HARDWARE // BIO-AUGMENTATION',
    clearance: 'TACTICAL ONLY // SECTOR-07',
    timestamp: '2026.03.11-18:09',
    coordinates: '78°14\'00"N // 15°38\'22"E',
    memoryAlloc: '64.0 MB / 128.0 MB',
    status: 'CLASSIFIED',
    description: 'Direct neural-link tactical augmentation layer synchronizing peripheral vision feeds with recoil mitigation actuators and automated counter-measure deployment.',
    specs: {
      engine: 'EXO_SYNAPSE NPU-9',
      throughput: '4.8 TOPS AT 1.8W',
      latency: '< 0.4ms SUB-SYNAPTIC',
      protocol: 'NEURO_BUS SERIAL',
      encryption: 'HARDWARE SE-01 COLD KEY'
    },
    tags: ['NEURAL_LINK', 'EMBEDDED', 'C99', 'MICRO_KERNEL', 'HUD_DESIGN'],
    visualTheme: {
      accentColor: '#9fff19',
      gridScale: 40,
      glyphCode: 'Ψ-9021-KM'
    }
  },
  {
    id: 'proj_04',
    code: '[+] ARCHIVE_04',
    sysId: 'SYS_ID: 1042',
    title: 'ORBITAL SYNTH',
    subtitle: 'ATMOSPHERIC ENTRY GUIDANCE & HEAT-SHIELD TELEMETRY',
    category: 'AEROSPACE TELEMETRY // DESCENT ALGORITHMS',
    clearance: 'UNCLASSIFIED // PUBLIC ACCESS',
    timestamp: '2025.11.02-09:40',
    coordinates: '28°34\'28"N // 80°39\'00"W',
    memoryAlloc: '96.2 MB / 256.0 MB',
    status: 'ARCHIVED',
    description: 'Autonomous atmospheric re-entry corridor calculation cluster featuring predictive thermal load modeling, RCS burn sequence automation, and touch-down telemetry broadcasts.',
    specs: {
      engine: 'AERO_GUIDANCE SIM v1.0',
      throughput: '12,000 TRAJECTORY FORKS/S',
      latency: '5.0ms ADAPTIVE',
      protocol: 'CCSDS SPACE_PACKET',
      encryption: 'SHA-512 SIGNATURES'
    },
    tags: ['AEROSPACE', 'DESCENT_SIM', 'PHYSICS', 'ARCHIVE', 'THREE_JS'],
    visualTheme: {
      accentColor: '#9fff19',
      gridScale: 28,
      glyphCode: 'Σ-1042-OS'
    }
  }
];

export const SOCIAL_LINKS = [
  { label: 'INSTAGRAM', url: 'https://instagram.com', handle: '@SYSTEM_SPIRIT' },
  { label: 'FRAMERATE', url: 'https://framerate.tv/profile/xmport', handle: '/profile/xmport' },
  { label: 'X', url: 'https://x.com/xmport', handle: '@xmport' },
  { label: 'E-MAIL', url: 'mailto:work@xmport.io', handle: 'work@xmport.io', isCopy: true, copyValue: 'work@xmport.io' }
];

export const INITIAL_LOGS = [
  { id: '1', timestamp: '20:13:58', level: 'SYS' as const, message: 'FUI KERNEL LOADED: TAU-CETI RUNTIME BUILD 2026.08.25' },
  { id: '2', timestamp: '20:14:00', level: 'INFO' as const, message: 'GRID BUS SYNCHRONIZED: 120HZ REFRESH CONFIRMED' },
  { id: '3', timestamp: '20:14:02', level: 'EXEC' as const, message: 'TARGET RETICLE LOCKED TO SYSTEM_SPIRIT // ID: 8993' }
];
