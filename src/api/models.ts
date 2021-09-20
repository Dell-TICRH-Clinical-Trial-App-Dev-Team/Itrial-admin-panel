export interface Trial {
  name: string;
  startDate?: string;
  endDate?: string;
  endpointResults?: string;
  protocols: TrialProtocol[];
  blinded?: boolean;
  sites: Site[];
  teamMembers: TeamMember[];
  cccs: TeamMember[];
  groups: Group[];
  patients: Patient[];
  status: string;
  id: number;
}

export interface Site {
  name: string;
  address: string;
  trials: Trial[];
  teamMembers: TeamMember[];
  cccs: TeamMember[];
  id: number;
}

export interface TeamMember {
  name: string;
  address: string;
  email: string;
  phoneNumber: number;
  trials: Trial[];
  sites: Site[];
  ccc?: TeamMember;
  id: number;
}

export interface Endpoint {
  name: string;
  date: Date;
  description: string;
  score?: string;
  documents?: string[];
  site: Site;
  trial: Trial;
  group: Group;
  patient: Patient;
  id: number;
}

export interface Patient {
  dccid: string;
  name: string;
  address: string;
  email: string;
  phoneNumber: number;
  consentForm: string;
  screenFail: boolean;
  documents?: string[];
  endpoints?: Endpoint[];
  group: Group;
  site: Site;
  trial: Trial;
  id: number;
}

export interface Group {
  name: string;
  endpointResults?: string;
  patients: Patient[];
  sites: Site[];
  trial: Trial;
  id: number;
}

export interface TrialProtocol {
  name: string;
  interventions: Intervention[];
  endpointInfo?: EndpointInfo;
  id: number;
}

export interface EndpointInfo {
  type: "quantitative" | "qualitative" | "file";
  range?: [string | number, string | number];
  url?: string;
  id: number;
}

export interface Intervention {
  name: string;
  description: string;
  amount?: string;
  timing: string[];
  groups: Group[];
  id: number;
}

export {};
