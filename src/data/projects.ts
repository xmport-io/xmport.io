import { ProjectData, SocialLink } from '../types';

export const PROJECTS: ProjectData[] = [
  {
    id: 'FRAMES_01',
    sysId: 'SYS_ID: 8993',
    title: 'DRAGUNAUT',
    status: 'DEPLOYED',
    description: 'AIR DEFENSE JUGGERNAUT BRAND MOTION',
    specs: {
      throughput: '1.24 TFLOPS // 12 FPS LOCK',
      protocol: 'UDP/QUIC MESH-NET',
    }
  },
  {
    id: 'FRAMES_02',
    sysId: 'SYS_ID: 4108',
    title: 'SPECTRUM',
    status: 'DEPLOYED',
    description: 'SPECTRUM ANALYTICAL UNITS BODY MOTION.',
    specs: {
      throughput: '850K SAMPLES/SEC',
      protocol: 'CAN_BUS v2 / ARINC_429',
    }
  },
  {
    id: 'FRAMES_03',
    sysId: 'SYS_ID: 6720',
    title: 'MED-EVAC',
    status: 'DEPLOYED',
    description: 'MEDICAL TRIAGE BRAND MOTION',
    specs: {
      throughput: '1.10 TFLOPS // 60 FPS LOCK',
      protocol: 'UDP/QUIC MESH-NET',
    }
  },
  {
    id: 'FRAMES_04',
    sysId: 'SYS_ID: 5519',
    title: 'ASCENSION',
    status: 'HEISRISEN',
    description: 'GOD IS GOOD, RUNNING WILL MAKE YOU NOTHING',
    specs: {
      throughput: '920K SAMPLES/SEC',
      protocol: 'CAN_BUS v2 / ARINC_429',
    }
  },
  {
    id: 'FRAMES_05',
    sysId: 'SYS_ID: 9042',
    title: 'MINARIS',
    status: 'DEPLOYED',
    description: 'YOU ARE THREATENING',
    specs: {
      throughput: '1.45 TFLOPS // 120 FPS LOCK',
      protocol: 'OPTICAL FIBER // DIRECT',
    }
  },
  {
    id: 'FRAMES_06',
    sysId: 'SYS_ID: 3180',
    title: 'NEURAL PULSE',
    status: 'DECEASED',
    description: 'BORN, DIED, BORN, REPEAT',
    specs: {
      throughput: '1.68 TFLOPS // 60 FPS LOCK',
      protocol: 'UDP/QUIC MESH-NET',
    }
  },
  {
    id: 'FRAMES_07',
    sysId: 'SYS_ID: 7741',
    title: 'ARC_ROBOTICS',
    status: 'DEPLOYED',
    description: 'INDUSTRIAL ROBOTIC BRAND IDENTITY',
    specs: {
      throughput: '2.10 TFLOPS // 60 FPS LOCK',
      protocol: 'BRASS HANDS DESIGN OPS',
    }
  }
];

export const SOCIAL_LINKS: SocialLink[] = [
  { label: 'INSTAGRAM', url: 'https://instagram.com/xmport', handle: '@xmport' },
  { label: 'FRAMERATE', url: 'https://framerate.tv/profile/xmport', handle: '/profile/xmport' },
  { label: 'X', url: 'https://x.com/xmport', handle: '@xmport' },
  { label: 'E-MAIL', url: 'mailto:work@xmport.io', handle: 'work@xmport.io', isCopy: true, copyValue: 'work@xmport.io' }
];

