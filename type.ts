
export type Frequency = 'WEEKLY' | 'FORTNIGHTLY' | 'MORE_THAN_WEEKLY' | 'ONE_OFF';

export type AccessMethod = 'SPARE_KEYS' | 'SOMEONE_HOME' | 'CONCIERGE' | 'KEY_SAFE' | 'KEY_HIDDEN';

export type ArrivalWindow = 'MORNING' | 'AFTERNOON' | 'EVENING' | 'DAYTIME';

export interface ExtraTask {
  id: string;
  label: string;
  icon: string;
  baseHours: number;
}

export interface BookingState {
  postcode: string;
  bedrooms: number;
  bathrooms: number;
  extras: string[];
  hours: number;
  bringProducts: boolean;
  frequency: Frequency;
  email: string;
  // Step 2
  accessMethod: AccessMethod | null;
  accessDetails: string;
  date: string;
  arrivalWindow: ArrivalWindow | null;
  // Step 3
  fullName: string;
  mobile: string;
  addressLine1: string;
  addressLine2?: string;
  city: string;
}

export const EXTRA_TASKS: ExtraTask[] = [
  { id: 'ironing', label: 'Ironing', icon: 'Shirt', baseHours: 1 },
  { id: 'laundry', label: 'Laundry', icon: 'WashingMachine', baseHours: 1 },
  { id: 'windows', label: 'Inside windows', icon: 'Layout', baseHours: 0.5 },
  { id: 'fridge', label: 'Inside fridge', icon: 'Archive', baseHours: 0.5 },
  { id: 'oven', label: 'Inside oven', icon: 'Flame', baseHours: 1 },
];

