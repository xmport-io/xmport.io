/**
 * Tactical FUI Portfolio Types
 */

export interface ProjectData {
  id: string;
  sysId: string;
  title: string;
  status: string;
  description: string;
  specs: {
    throughput: string;
    protocol: string;
  };
}

export interface SocialLink {
  label: string;
  url: string;
  handle: string;
  isCopy?: boolean;
  copyValue?: string;
}

