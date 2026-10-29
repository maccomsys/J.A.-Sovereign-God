import React from 'react';
import { X, Info, Phone } from 'lucide-react';
import { COMPANY_DETAILS } from '../data/companyData';

interface QuoteSuccessModalProps {
  quote: any;
  onClose: () => void;
}

export const QuoteSuccessModal: React.FC<QuoteSuccessModalProps> = ({ quote, onClose }) => {
  if (!quote) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-xs">
      <div className="bg-white rounded-xl shadow-2xl max-w-md w-full border border-neutral-300 overflow-hidden p-6 space-y-4">
        <div className="flex items-center justify-between border-b border-neutral-200 pb-3">
          <div className="flex items-center gap-2">
            <Info className="w-5 h-5 text-[#FF662C]" />
            <h3 className="font-bold text-[#303030]">Demonstration Notice</h3>
          </div>
          <button
            onClick={onClose}
            className="text-neutral-400 hover:text-[#303030] cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        <p className="text-xs sm:text-sm text-neutral-600 leading-relaxed">
          This website form is a frontend demonstration and does not transmit or permanently store inquiry information. No booking confirmation has been issued.
        </p>

        <p className="text-xs font-semibold text-[#303030]">
          Please contact our Tema office directly to confirm equipment rental availability or register for training:
        </p>

        <div className="space-y-1.5 p-3 bg-neutral-50 rounded border border-neutral-200 text-xs">
          <a
            href={`tel:${COMPANY_DETAILS.phoneRaw}`}
            className="block font-bold text-[#FF662C] font-mono hover:underline"
          >
            {COMPANY_DETAILS.phone}
          </a>
          <a
            href={`tel:${COMPANY_DETAILS.secondaryPhoneRaw}`}
            className="block font-bold text-[#303030] font-mono hover:underline"
          >
            {COMPANY_DETAILS.secondaryPhone}
          </a>
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
