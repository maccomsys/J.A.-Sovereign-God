import React from 'react';
import { Phone, MapPin, User, Truck, HardHat, Wrench, MessageSquare } from 'lucide-react';
import { COMPANY_DETAILS } from '../data/companyData';

interface ContactSectionProps {
  onRequestRental: () => void;
  onRegisterTraining: () => void;
  onNavigateServices: () => void;
}

export const ContactSection: React.FC<ContactSectionProps> = ({
  onRequestRental,
  onRegisterTraining,
  onNavigateServices,
}) => {
  return (
    <section id="contact-cta" className="py-16 sm:py-20 bg-white border-b border-neutral-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        <div className="bg-[#303030] text-white rounded-2xl p-8 sm:p-12 shadow-xl border border-neutral-700">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            {/* Left Column: Heading & Information */}
            <div className="lg:col-span-7 space-y-4">
              <div className="inline-flex items-center gap-2 text-xs font-bold text-[#FF662C] uppercase tracking-wider bg-black/40 px-3 py-1 rounded border border-neutral-700">
                <span>Connect With Us</span>
              </div>
              <h2 className="text-2xl sm:text-4xl font-black text-white tracking-tight leading-tight">
                Ready to Discuss Heavy Equipment Rental or Operator Training?
              </h2>
              <p className="text-neutral-300 text-sm sm:text-base leading-relaxed">
                Contact <strong>{COMPANY_DETAILS.name}</strong> today to discuss machinery availability for your construction site, schedule earthmoving services, or inquire about practical equipment operator training in Tema, Ghana.
              </p>

              {/* Direct Company Details */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4 border-t border-neutral-700 text-sm">
                <div>
                  <p className="text-xs text-neutral-400 uppercase tracking-wider font-semibold mb-1">
                    Company Location
                  </p>
                  <div className="flex items-center gap-2 text-white font-bold">
                    <MapPin className="w-4 h-4 text-[#FF662C] shrink-0" />
                    <span>{COMPANY_DETAILS.location}</span>
                  </div>
                </div>

                <div>
                  <p className="text-xs text-neutral-400 uppercase tracking-wider font-semibold mb-1">
                    Managing Director
                  </p>
                  <div className="flex items-center gap-2 text-white font-bold">
                    <User className="w-4 h-4 text-[#FF662C] shrink-0" />
                    <span>{COMPANY_DETAILS.managingDirector}</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column: Clickable Phone Numbers & Inquiry Buttons */}
            <div className="lg:col-span-5 bg-[#202020] rounded-xl p-6 border border-neutral-700 space-y-4">
              <div>
                <p className="text-xs font-bold text-neutral-400 uppercase tracking-wider mb-2">
                  Call Our Team Directly
                </p>
                <div className="space-y-2">
                  <a
                    href={`tel:${COMPANY_DETAILS.phoneRaw}`}
                    className="flex items-center justify-between p-3 bg-neutral-800 hover:bg-[#FF662C] rounded-lg text-white font-mono font-bold text-sm sm:text-base transition-colors group"
                  >
                    <div className="flex items-center gap-2">
                      <Phone className="w-4 h-4 text-[#FF662C] group-hover:text-white" />
                      <span>{COMPANY_DETAILS.phone}</span>
                    </div>
                    <span className="text-xs font-sans text-neutral-400 group-hover:text-white">
                      Click to Call
                    </span>
                  </a>

                  <a
                    href={`tel:${COMPANY_DETAILS.secondaryPhoneRaw}`}
                    className="flex items-center justify-between p-3 bg-neutral-800 hover:bg-[#FF662C] rounded-lg text-white font-mono font-bold text-sm sm:text-base transition-colors group"
                  >
                    <div className="flex items-center gap-2">
                      <Phone className="w-4 h-4 text-[#FF662C] group-hover:text-white" />
                      <span>{COMPANY_DETAILS.secondaryPhone}</span>
                    </div>
                    <span className="text-xs font-sans text-neutral-400 group-hover:text-white">
                      Click to Call
                    </span>
                  </a>
                </div>
              </div>

              {/* Inquiry Action Buttons */}
              <div className="pt-2 border-t border-neutral-700 space-y-2">
                <button
                  onClick={onRequestRental}
                  className="w-full bg-[#FF662C] hover:bg-[#E0531D] text-white font-bold py-2.5 px-4 rounded-md text-xs sm:text-sm inline-flex items-center justify-center gap-2 transition-colors cursor-pointer shadow-sm"
                >
                  <Truck className="w-4 h-4" />
                  <span>Request Equipment Rental</span>
                </button>

                <button
                  onClick={onRegisterTraining}
                  className="w-full bg-neutral-800 hover:bg-neutral-700 text-white font-bold py-2.5 px-4 rounded-md text-xs sm:text-sm inline-flex items-center justify-center gap-2 transition-colors cursor-pointer"
                >
                  <HardHat className="w-4 h-4 text-[#FF662C]" />
                  <span>Register for Training</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
