import React from 'react';
import { Phone, MapPin, User, Truck, HardHat, Wrench, Shield } from 'lucide-react';
import { COMPANY_DETAILS, EQUIPMENT_CATEGORIES } from '../data/companyData';
import { BrandLogo } from './BrandLogo';

interface FooterProps {
  onNavigateHome: () => void;
  onNavigateAbout: () => void;
  onNavigateRental: () => void;
  onNavigateServices: () => void;
  onNavigateTraining: () => void;
  onNavigateContact: () => void;
  onNavigateTerms: () => void;
  onNavigatePrivacy: () => void;
  onRequestRentalCTA?: () => void;
  onSelectCategory?: (category: string) => void;
}

export const Footer: React.FC<FooterProps> = ({
  onNavigateHome,
  onNavigateAbout,
  onNavigateRental,
  onNavigateServices,
  onNavigateTraining,
  onNavigateContact,
  onNavigateTerms,
  onNavigatePrivacy,
}) => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#202020] text-neutral-300 border-t-4 border-[#FF662C]">
      {/* Top Main Footer */}
      <div className="max-w-7xl mx-auto px-4 sm:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10">
          {/* Column 1: Company Profile & Description (lg:col-span-4) */}
          <div className="lg:col-span-4 space-y-4">
            <BrandLogo lightMode={true} />
            <p className="text-xs sm:text-sm text-neutral-400 leading-relaxed">
              <strong>{COMPANY_DETAILS.name}</strong> is a Ghanaian company based in Tema, Ghana, specializing in heavy construction machinery rental, construction equipment services, and practical training on how to operate construction equipment.
            </p>
            <div className="pt-2 text-xs text-neutral-400 space-y-1">
              <p>
                <strong className="text-white">Managing Director:</strong> {COMPANY_DETAILS.managingDirector}
              </p>
              <div className="flex items-center gap-1.5 text-neutral-300">
                <MapPin className="w-3.5 h-3.5 text-[#FF662C] shrink-0" />
                <span>{COMPANY_DETAILS.location}</span>
              </div>
            </div>
          </div>

          {/* Column 2: Quick Links (lg:col-span-3) */}
          <div className="lg:col-span-3 space-y-3">
            <h3 className="text-xs font-bold uppercase tracking-wider text-white border-b border-neutral-700 pb-2">
              Website Navigation
            </h3>
            <ul className="space-y-2 text-xs font-medium">
              <li>
                <button
                  onClick={onNavigateHome}
                  className="hover:text-[#FF662C] transition-colors cursor-pointer text-left"
                >
                  Home
                </button>
              </li>
              <li>
                <button
                  onClick={onNavigateAbout}
                  className="hover:text-[#FF662C] transition-colors cursor-pointer text-left"
                >
                  About Us
                </button>
              </li>
              <li>
                <button
                  onClick={onNavigateRental}
                  className="hover:text-[#FF662C] transition-colors cursor-pointer text-left"
                >
                  Equipment Rental
                </button>
              </li>
              <li>
                <button
                  onClick={onNavigateServices}
                  className="hover:text-[#FF662C] transition-colors cursor-pointer text-left"
                >
                  Construction Services
                </button>
              </li>
              <li>
                <button
                  onClick={onNavigateTraining}
                  className="hover:text-[#FF662C] transition-colors cursor-pointer text-left"
                >
                  Operator Training
                </button>
              </li>
              <li>
                <button
                  onClick={onNavigateContact}
                  className="hover:text-[#FF662C] transition-colors cursor-pointer text-left"
                >
                  Contact Us
                </button>
              </li>
            </ul>
          </div>

          {/* Column 3: Machinery Categories (lg:col-span-2) */}
          <div className="lg:col-span-2 space-y-3">
            <h3 className="text-xs font-bold uppercase tracking-wider text-white border-b border-neutral-700 pb-2">
              Machinery
            </h3>
            <ul className="space-y-1.5 text-xs text-neutral-400">
              {EQUIPMENT_CATEGORIES.slice(0, 6).map((eq) => (
                <li key={eq.id}>
                  <button
                    onClick={onNavigateRental}
                    className="hover:text-white transition-colors cursor-pointer text-left"
                  >
                    {eq.displayName}
                  </button>
                </li>
              ))}
              <li>
                <button
                  onClick={onNavigateRental}
                  className="text-[#FF662C] hover:underline cursor-pointer font-bold"
                >
                  + All 9 Categories
                </button>
              </li>
            </ul>
          </div>

          {/* Column 4: Contact Information & Direct Calls (lg:col-span-3) */}
          <div className="lg:col-span-3 space-y-3">
            <h3 className="text-xs font-bold uppercase tracking-wider text-white border-b border-neutral-700 pb-2">
              Dispatch Hotline
            </h3>
            <p className="text-xs text-neutral-400">
              For machinery rental inquiries, site support, and operator training:
            </p>
            <div className="space-y-2 pt-1">
              <a
                href={`tel:${COMPANY_DETAILS.phoneRaw}`}
                className="flex items-center gap-2 p-2.5 bg-neutral-800 hover:bg-[#FF662C] text-white rounded-md text-xs font-mono font-bold transition-colors group"
              >
                <Phone className="w-3.5 h-3.5 text-[#FF662C] group-hover:text-white" />
                <span>{COMPANY_DETAILS.phone}</span>
              </a>

              <a
                href={`tel:${COMPANY_DETAILS.secondaryPhoneRaw}`}
                className="flex items-center gap-2 p-2.5 bg-neutral-800 hover:bg-[#FF662C] text-white rounded-md text-xs font-mono font-bold transition-colors group"
              >
                <Phone className="w-3.5 h-3.5 text-[#FF662C] group-hover:text-white" />
                <span>{COMPANY_DETAILS.secondaryPhone}</span>
              </a>
            </div>
            <p className="text-[11px] text-neutral-500 pt-1">
              Tema, Ghana • Managing Director: {COMPANY_DETAILS.managingDirector}
            </p>
          </div>
        </div>
      </div>

      {/* Bottom Copyright Strip */}
      <div className="bg-[#181818] border-t border-neutral-800 py-6 px-4 sm:px-8">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-neutral-400">
          <p>
            &copy; {currentYear} {COMPANY_DETAILS.name}. All rights reserved. Tema, Ghana.
          </p>
          <div className="flex items-center gap-6">
            <button
              onClick={onNavigateTerms}
              className="hover:text-white transition-colors cursor-pointer"
            >
              Terms of Service
            </button>
            <span className="text-neutral-700">|</span>
            <button
              onClick={onNavigatePrivacy}
              className="hover:text-white transition-colors cursor-pointer"
            >
              Privacy Policy
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};
