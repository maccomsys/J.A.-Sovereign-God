import React from 'react';
import { EquipmentRentalPageScreen } from './EquipmentRentalPageScreen';

interface MaterialsPageScreenProps {
  onNavigateHome: () => void;
  onNavigateAbout: () => void;
  onNavigateServices: () => void;
  onNavigatePrices: () => void;
  onNavigateGallery: () => void;
  onNavigateContact: () => void;
  onRequestRentalCTA?: () => void;
  onOpenDetailModal?: (cat: any) => void;
  onOpenPriceList?: () => void;
  onSelectMaterial?: (item: any) => void;
}

export const MaterialsPageScreen: React.FC<MaterialsPageScreenProps> = (props) => {
  return (
    <EquipmentRentalPageScreen
      onNavigateHome={props.onNavigateHome}
      onNavigateAbout={props.onNavigateAbout}
      onNavigateServices={props.onNavigateServices}
      onNavigateTraining={props.onNavigatePrices}
      onNavigateContact={props.onNavigateContact}
      onRequestRental={(id) => {
        if (props.onRequestRentalCTA) {
          props.onRequestRentalCTA();
        }
      }}
    />
  );
};
