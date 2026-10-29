export type TrainingExperienceLevel =
  | 'Beginner'
  | 'Some Previous Experience'
  | 'Experienced Operator';

export interface EquipmentCategory {
  id: string;
  name: string;
  displayName: string;
  images: string[];
  primaryImage: string;
  description: string;
  applications: string[];
}

export interface TrainingInquiry {
  fullName: string;
  phone: string;
  email?: string;
  preferredEquipment: string;
  experienceLevel: TrainingExperienceLevel;
  preferredDate?: string;
  additionalInfo?: string;
  consent: boolean;
}

export interface RentalInquiry {
  fullName: string;
  phone: string;
  equipmentRequired: string;
  intendedProject: string;
  projectLocation: string;
  rentalStartDate: string;
  expectedDuration: string;
  additionalInfo?: string;
}

export interface ConstructionService {
  id: string;
  title: string;
  shortDescription: string;
  fullDescription: string;
  matchedEquipment: string[];
  image: string;
}
