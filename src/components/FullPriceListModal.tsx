import React from 'react';
import { X, Phone, Truck, HardHat } from 'lucide-react';
import { COMPANY_DETAILS, EQUIPMENT_CATEGORIES } from '../data/companyData';

interface FullPriceListModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSelectMaterial?: (item: any) => void;
}

export const FullPriceListModal: React.FC<FullPriceListModalProps> = ({
  isOpen,
  onClose,
}) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-xs">
      <div className="bg-white rounded-xl shadow-2xl max-w-lg w-full border border-neutral-300 overflow-hidden p-6 space-y-4">
        <div className="flex items-center justify-between border-b border-neutral-200 pb-3">
          <div className="flex items-center gap-2">
            <Truck className="w-5 h-5 text-[#FF662C]" />
            <h3 className="font-bold text-[#303030]">Machinery Inquiries &amp; Rates</h3>
          </div>
          <button
            onClick={onClose}
            className="text-neutral-400 hover:text-[#303030] cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        <p className="text-xs sm:text-sm text-neutral-600 leading-relaxed">
          Heavy equipment rental rates and operator training terms for <strong>{COMPANY_DETAILS.name}</strong> are tailored to machine category, site location in Tema/Ghana, and operating timeframe.
        </p>

        <div className="max-h-48 overflow-y-auto space-y-1.5 border border-neutral-200 p-2 rounded-lg bg-neutral-50 text-xs">
          {EQUIPMENT_CATEGORIES.map((eq) => (
            <div key={eq.id} className="flex justify-between py-1 border-b border-neutral-100 last:border-none">
              <span className="font-bold text-[#303030]">{eq.displayName}</span>
              <span className="text-[#FF662C] font-semibold">Call for Availability</span>
            </div>
          ))}
        </div>

        <div className="p-3 bg-neutral-100 rounded-lg text-xs space-y-1">
          <p className="font-bold text-[#303030]">Direct Dispatch Contact:</p>
          <p className="font-mono">{COMPANY_DETAILS.phone} / {COMPANY_DETAILS.secondaryPhone}</p>
        </div>

        <div className="flex justify-end pt-1">
          <button
            onClick={onClose}
            className="bg-[#303030] text-white text-xs font-bold px-4 py-2 rounded-md hover:bg-neutral-800 cursor-pointer"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
};
