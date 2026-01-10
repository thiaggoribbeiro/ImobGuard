
export enum AppScreen {
  LOGIN = 'LOGIN',
  PROPERTY_SELECTION = 'PROPERTY_SELECTION',
  ROUND_CAPTURE = 'ROUND_CAPTURE',
  ROUND_HISTORY = 'ROUND_HISTORY',
  PROFILE = 'PROFILE'
}

export interface Property {
  id: string;
  name: string;
  address: string;
  neighborhood?: string;
  city?: string;
  state?: string;
  cep?: string;
  owner?: string;
  built_area?: number;
  land_area?: number;
  status: 'active' | 'pending' | 'normal' | 'inactive';
  statusText: string;
  distance: string;
  type: 'business' | 'warehouse' | 'residential' | 'store' | 'factory';
}

export interface RoundRecord {
  id: string;
  propertyName: string;
  timestamp: string;
  guardName: string;
  hasIncident: boolean;
  incidentType?: string;
  incidentDescription?: string;
  icon: string;
}
