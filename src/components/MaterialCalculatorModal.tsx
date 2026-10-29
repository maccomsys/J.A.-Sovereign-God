import React from 'react';
import { X, Phone, Truck, HardHat } from 'lucide-react';
import { COMPANY_DETAILS } from '../data/companyData';

interface MaterialCalculatorModalProps {
  isOpen: boolean;
  onClose: () => void;
  onOrderWithCalc?: (materialSummary: string, trips: number) => void;
}

export const MaterialCalculatorModal: React.FC<MaterialCalculatorModalProps> = ({
  isOpen,
  onClose,
}) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-xs">
      <div className="bg-white rounded-xl shadow-2xl max-w-md w-full border border-neutral-300 overflow-hidden p-6 space-y-4">
        <div className="flex items-center justify-between border-b border-neutral-200 pb-3">
          <div className="flex items-center gap-2">
            <Truck className="w-5 h-5 text-[#FF662C]" />
            <h3 className="font-bold text-[#303030]">Machinery Project Estimates</h3>
          </div>
          <button
            onClick={onClose}
            className="text-neutral-400 hover:text-[#303030] cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        <p className="text-xs sm:text-sm text-neutral-600 leading-relaxed">
          For project estimates on heavy machinery rental or site earthmoving services in Tema, Ghana, please contact our dispatch desk directly with your project location and duration.
        </p>

        <div className="p-3 bg-neutral-50 rounded-lg border border-neutral-200 space-y-2">
          <p className="text-xs font-bold text-[#303030] uppercase">Direct Dispatch Lines:</p>
          <div className="space-y-1">
            <a
              href={`tel:${COMPANY_DETAILS.phoneRaw}`}
              className="block font-mono font-bold text-sm text-[#FF662C] hover:underline"
            >
              {COMPANY_DETAILS.phone}
            </a>
            <a
              href={`tel:${COMPANY_DETAILS.secondaryPhoneRaw}`}
              className="block font-mono font-bold text-sm text-[#303030] hover:underline"
            >
              {COMPANY_DETAILS.secondaryPhone}
            </a>
          </div>
        </div>

        <div className="flex justify-end pt-2">
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
