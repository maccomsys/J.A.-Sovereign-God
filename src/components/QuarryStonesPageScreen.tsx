import React from 'react';
import { EquipmentRentalPageScreen } from './EquipmentRentalPageScreen';

interface QuarryStonesPageScreenProps {
  onNavigateHome: () => void;
  onNavigateAbout: () => void;
  onNavigateMaterials: () => void;
  onNavigateServices: () => void;
  onNavigatePrices: () => void;
  onNavigateGallery: () => void;
  onNavigateContact: () => void;
  onSelectOtherMaterial?: (cat: any) => void;
  onQuoteSubmit?: (quote: any) => void;
}

export const QuarryStonesPageScreen: React.FC<QuarryStonesPageScreenProps> = (props) => {
  return (
    <EquipmentRentalPageScreen
      onNavigateHome={props.onNavigateHome}
      onNavigateAbout={props.onNavigateAbout}
      onNavigateServices={props.onNavigateServices}
      onNavigateTraining={props.onNavigatePrices}
      onNavigateContact={props.onNavigateContact}
      onRequestRental={() => {}}
    />
  );
};
