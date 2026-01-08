
import { Property, RoundRecord } from './types';

export const PROPERTIES: Property[] = [
  {
    id: '1',
    name: 'Complexo Empresarial Centro',
    address: 'Av. Central, 400, Centro',
    status: 'active',
    statusText: 'Incidente Ativo',
    distance: '0.3 km',
    type: 'business'
  },
  {
    id: '2',
    name: 'Galpão Zona Norte',
    address: 'Rua das Indústrias, 123',
    status: 'pending',
    statusText: 'Ronda Pendente',
    distance: '2.4 km',
    type: 'warehouse'
  },
  {
    id: '3',
    name: 'Residencial Rio Verde',
    address: 'Av. Beira Rio, 88',
    status: 'normal',
    statusText: 'Agendado 20:00',
    distance: '6.1 km',
    type: 'residential'
  },
  {
    id: '4',
    name: 'Parque Tecnológico Oeste',
    address: 'Rodovia Inovação, 5500',
    status: 'normal',
    statusText: 'Normal',
    distance: '8.3 km',
    type: 'store'
  },
  {
    id: '5',
    name: 'Centro Logístico do Porto',
    address: 'Av. do Porto, 900',
    status: 'inactive',
    statusText: 'Inativo',
    distance: '12.8 km',
    type: 'factory'
  }
];

export const HISTORY_RECORDS: RoundRecord[] = [
  {
    id: '402',
    propertyName: 'Armazém Portão Norte',
    timestamp: '22:00',
    guardName: 'Sara J.',
    hasIncident: true,
    incidentType: 'Ocorrência #402',
    incidentDescription: 'Violação de perímetro detectada',
    icon: 'warning'
  },
  {
    id: '401',
    propertyName: 'Recepção Principal',
    timestamp: '20:15',
    guardName: 'Sara J.',
    hasIncident: false,
    icon: 'verified_user'
  },
  {
    id: '400',
    propertyName: 'Estacionamento Visitantes B',
    timestamp: '18:45',
    guardName: 'Sara J.',
    hasIncident: false,
    icon: 'local_parking'
  }
];
