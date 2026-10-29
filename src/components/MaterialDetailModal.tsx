import React from 'react';
import { X, Truck, Phone } from 'lucide-react';
import { COMPANY_DETAILS, EQUIPMENT_CATEGORIES } from '../data/companyData';
import { EquipmentImageGallery } from './EquipmentImageGallery';

interface MaterialDetailModalProps {
  category: string | null;
  onClose: () => void;
  onSelectForQuote?: (item: any) => void;
  onRequestRental?: (equipmentId: string) => void;
}

export const MaterialDetailModal: React.FC<MaterialDetailModalProps> = ({
  category,
  onClose,
  onRequestRental,
}) => {
  if (!category) return null;

  const matched =
    EQUIPMENT_CATEGORIES.find((eq) => eq.id === category) ||
    EQUIPMENT_CATEGORIES[0];

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-xs">
      <div className="bg-white rounded-xl shadow-2xl max-w-2xl w-full border border-neutral-300 overflow-hidden p-6 space-y-4 max-h-[90vh] overflow-y-auto">
        <div className="flex items-center justify-between border-b border-neutral-200 pb-3">
          <div>
            <h3 className="font-bold text-lg text-[#303030]">{matched.displayName}</h3>
            <p className="text-xs text-neutral-500">J.A. Sovereign God Limited • Tema, Ghana</p>
          </div>
          <button
            onClick={onClose}
            className="text-neutral-400 hover:text-[#303030] cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        <EquipmentImageGallery images={matched.images} equipmentName={matched.displayName} />

        <p className="text-xs sm:text-sm text-neutral-600 leading-relaxed">
          {matched.description}
        </p>

        <div className="bg-neutral-50 p-4 rounded-lg border border-neutral-200">
          <h4 className="text-xs font-bold uppercase tracking-wider text-[#303030] mb-2">
            Typical Construction Applications:
          </h4>
          <ul className="text-xs text-neutral-600 space-y-1">
            {matched.applications.map((app, idx) => (
              <li key={idx} className="flex items-start gap-1.5">
                <span className="text-[#FF662C] font-bold">•</span>
                <span>{app}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="flex items-center justify-between pt-2 border-t border-neutral-200">
          <a
            href={`tel:${COMPANY_DETAILS.phoneRaw}`}
            className="inline-flex items-center gap-1.5 text-xs font-bold text-[#303030] hover:text-[#FF662C]"
          >
            <Phone className="w-3.5 h-3.5 text-[#FF662C]" />
            <span>Call {COMPANY_DETAILS.phone}</span>
          </a>

          <button
            onClick={() => {
              onClose();
              if (onRequestRental) onRequestRental(matched.id);
            }}
            className="bg-[#FF662C] hover:bg-[#E0531D] text-white text-xs font-bold px-4 py-2 rounded-md shadow-sm transition-colors cursor-pointer inline-flex items-center gap-1.5"
          >
            <Truck className="w-3.5 h-3.5" />
            <span>Inquire Rental</span>
          </button>
        </div>
      </div>
    </div>
  );
};
