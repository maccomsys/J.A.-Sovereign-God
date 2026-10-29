import React from 'react';
import { Truck, HardHat, Phone, MapPin, CheckCircle2 } from 'lucide-react';
import { COMPANY_DETAILS } from '../data/companyData';

interface HeroSectionProps {
  onRequestRental: () => void;
  onRegisterTraining: () => void;
  onNavigateServices: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({
  onRequestRental,
  onRegisterTraining,
  onNavigateServices,
}) => {
  // Use Excavator image from supplied URLs
  const heroImageUrl = 'https://i.ibb.co/RpmgF9YZ/003-Excavator.jpg';

  return (
    <section className="relative bg-[#303030] text-white overflow-hidden border-b border-neutral-700">
      {/* Background Hero Image with dark grey overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src={heroImageUrl}
          alt="Heavy Construction Equipment - Excavator on site"
          className="w-full h-full object-cover object-center opacity-30"
          loading="eager"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#202020]/95 via-[#303030]/85 to-[#303030]/70" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-8 py-16 sm:py-24 lg:py-28">
        <div className="max-w-3xl">
          {/* Location badge */}
          <div className="inline-flex items-center gap-2 bg-[#202020]/80 border border-neutral-600 px-3.5 py-1.5 rounded-full text-xs font-semibold tracking-wide text-neutral-200 mb-6">
            <MapPin className="w-3.5 h-3.5 text-[#FF662C]" />
            <span>Tema, Ghana • Managing Director: Alexander J.A. ACKAH</span>
          </div>

          {/* Prominent Headline */}
          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black tracking-tight text-white leading-tight mb-6">
            Heavy Construction Equipment Rental and Operator Training in Ghana.
          </h1>

          {/* Supporting Text */}
          <p className="text-base sm:text-xl text-neutral-200 leading-relaxed mb-8 max-w-2xl font-normal">
            J.A. Sovereign God Limited provides heavy construction machinery rental and practical equipment operation training in Tema, Ghana.
          </p>

          {/* Core Services Bullet Points */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 mb-8 text-xs sm:text-sm text-neutral-300">
            <div className="flex items-center gap-2 bg-black/40 px-3 py-2 rounded border border-neutral-700/60">
              <CheckCircle2 className="w-4 h-4 text-[#FF662C] shrink-0" />
              <span className="font-medium">Heavy Machinery Rental</span>
            </div>
            <div className="flex items-center gap-2 bg-black/40 px-3 py-2 rounded border border-neutral-700/60">
              <CheckCircle2 className="w-4 h-4 text-[#FF662C] shrink-0" />
              <span className="font-medium">Equipment Services</span>
            </div>
            <div className="flex items-center gap-2 bg-black/40 px-3 py-2 rounded border border-neutral-700/60">
              <CheckCircle2 className="w-4 h-4 text-[#FF662C] shrink-0" />
              <span className="font-medium">Operator Training</span>
            </div>
          </div>

          {/* Call to Actions */}
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
            <button
              onClick={onRequestRental}
              className="bg-[#FF662C] hover:bg-[#E0531D] text-white font-bold px-7 py-3.5 rounded-md shadow-lg shadow-[#FF662C]/20 hover:shadow-xl transition-all duration-200 inline-flex items-center justify-center gap-2 text-base cursor-pointer"
            >
              <Truck className="w-5 h-5" />
              <span>Request Equipment Rental</span>
            </button>

            <button
              onClick={onRegisterTraining}
              className="bg-white/10 hover:bg-white/20 text-white font-bold px-7 py-3.5 rounded-md border border-neutral-400 hover:border-white transition-all duration-200 inline-flex items-center justify-center gap-2 text-base cursor-pointer backdrop-blur-xs"
            >
              <HardHat className="w-5 h-5 text-[#FF662C]" />
              <span>Register for Training</span>
            </button>
          </div>

          {/* Direct Phone Assistance */}
          <div className="mt-8 pt-6 border-t border-neutral-700 flex flex-wrap items-center gap-4 text-xs sm:text-sm text-neutral-300">
            <span className="font-medium">Immediate site assistance:</span>
            <div className="flex items-center gap-2">
              <a
                href={`tel:${COMPANY_DETAILS.phoneRaw}`}
                className="inline-flex items-center gap-1.5 text-white hover:text-[#FF662C] font-mono font-bold transition-colors"
              >
                <Phone className="w-3.5 h-3.5 text-[#FF662C]" />
                <span>{COMPANY_DETAILS.phone}</span>
              </a>
              <span className="text-neutral-500">/</span>
              <a
                href={`tel:${COMPANY_DETAILS.secondaryPhoneRaw}`}
                className="inline-flex items-center gap-1.5 text-white hover:text-[#FF662C] font-mono font-bold transition-colors"
              >
                <Phone className="w-3.5 h-3.5 text-[#FF662C]" />
                <span>{COMPANY_DETAILS.secondaryPhone}</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
