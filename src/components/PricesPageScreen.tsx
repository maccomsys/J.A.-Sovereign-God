import React from 'react';
import { TrainingPageScreen } from './TrainingPageScreen';

interface PricesPageScreenProps {
  onNavigateHome: () => void;
  onNavigateAbout: () => void;
  onNavigateServices: () => void;
  onNavigateMaterials: () => void;
  onNavigateGallery: () => void;
  onNavigateContact: () => void;
  onSelectMaterial?: (item: any) => void;
  onQuoteSubmit?: (quote: any) => void;
}

export const PricesPageScreen: React.FC<PricesPageScreenProps> = (props) => {
  return (
    <TrainingPageScreen
      onNavigateHome={props.onNavigateHome}
      onNavigateAbout={props.onNavigateAbout}
      onNavigateRental={props.onNavigateMaterials}
      onNavigateServices={props.onNavigateServices}
      onNavigateContact={props.onNavigateContact}
    />
  );
};
