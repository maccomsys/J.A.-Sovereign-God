import React from 'react';
import { Phone, MapPin, User } from 'lucide-react';
import { COMPANY_DETAILS } from '../data/companyData';

export const TopBar: React.FC = () => {
  return (
    <div className="bg-[#303030] text-white text-xs sm:text-sm py-2 px-4 sm:px-8 border-b border-neutral-700">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-2">
        {/* Left: Location & Managing Director */}
        <div className="flex flex-wrap items-center justify-center md:justify-start gap-4 text-neutral-300">
          <div className="inline-flex items-center gap-1.5">
            <MapPin className="w-3.5 h-3.5 text-[#FF662C] shrink-0" />
            <span className="font-medium text-white">{COMPANY_DETAILS.location}</span>
          </div>
          <span className="hidden sm:inline text-neutral-600">|</span>
          <div className="inline-flex items-center gap-1.5">
            <User className="w-3.5 h-3.5 text-[#FF662C] shrink-0" />
            <span>Managing Director:</span>
            <strong className="text-white font-semibold">{COMPANY_DETAILS.managingDirector}</strong>
          </div>
        </div>

        {/* Right: Clickable Phone Numbers */}
        <div className="flex items-center gap-3">
          <span className="text-neutral-400 font-medium hidden sm:inline">Call Dispatch:</span>
          <div className="inline-flex items-center gap-2 bg-[#202020] px-3 py-1 rounded-md border border-neutral-700">
            <Phone className="w-3.5 h-3.5 text-[#FF662C] shrink-0" />
            <a
              href={`tel:${COMPANY_DETAILS.phoneRaw}`}
              className="text-white hover:text-[#FF662C] font-mono font-bold transition-colors"
            >
              {COMPANY_DETAILS.phone}
            </a>
            <span className="text-neutral-500 font-bold">/</span>
            <a
              href={`tel:${COMPANY_DETAILS.secondaryPhoneRaw}`}
              className="text-white hover:text-[#FF662C] font-mono font-bold transition-colors"
            >
              {COMPANY_DETAILS.secondaryPhone}
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
