/**
 * Tactical FUI Portfolio Types
 */

export interface ProjectData {
  id: string;
  code: string;
  sysId: string;
  title: string;
  subtitle: string;
  category: string;
  clearance: string;
  timestamp: string;
  coordinates: string;
  memoryAlloc: string;
  status: 'OPERATIONAL' | 'CLASSIFIED' | 'DEPLOYED' | 'ARCHIVED';
  description: string;
  specs: {
    engine: string;
    throughput: string;
    latency: string;
    protocol: string;
    encryption: string;
  };
  tags: string[];
  visualTheme: {
    accentColor: string;
    gridScale: number;
    glyphCode: string;
  };
}

export interface SystemLog {
  id: string;
  timestamp: string;
  level: 'INFO' | 'WARN' | 'EXEC' | 'SYS';
  message: string;
}

export interface TransmissionForm {
  senderCallsign: string;
  commsChannel: string;
  payload: string;
  priority: 'LOW' | 'NORMAL' | 'FLASH_CRITICAL';
}
