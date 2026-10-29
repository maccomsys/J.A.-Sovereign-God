import React from 'react';
import { User, MapPin, Phone, Truck, HardHat, Wrench, Shield, CheckCircle2 } from 'lucide-react';
import { COMPANY_DETAILS, EQUIPMENT_CATEGORIES } from '../data/companyData';

interface AboutPageScreenProps {
  onNavigateHome: () => void;
  onNavigateRental: () => void;
  onNavigateServices: () => void;
  onNavigateTraining: () => void;
  onNavigateContact: () => void;
  onRequestRentalCTA: () => void;
  onRegisterTrainingCTA: () => void;
}

export const AboutPageScreen: React.FC<AboutPageScreenProps> = ({
  onNavigateHome,
  onNavigateRental,
  onNavigateServices,
  onNavigateTraining,
  onNavigateContact,
  onRequestRentalCTA,
  onRegisterTrainingCTA,
}) => {
  // Use supplied crawler tractor and excavator images
  const leaderImage = 'https://i.ibb.co/Nd3NkzVV/007-Crawler-Type-Tractor.jpg';
  const siteImage = 'https://i.ibb.co/RpmgF9YZ/003-Excavator.jpg';

  return (
    <div className="bg-white min-h-screen">
      {/* Page Header Banner */}
      <div className="bg-[#303030] text-white py-14 sm:py-18 border-b border-neutral-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-8">
          <div className="inline-flex items-center gap-2 text-xs font-bold text-[#FF662C] uppercase tracking-wider mb-2">
            <span>About Us</span>
          </div>
          <h1 className="text-3xl sm:text-5xl font-black text-white tracking-tight">
            About J.A. Sovereign God Limited
          </h1>
          <p className="text-neutral-300 text-sm sm:text-base mt-3 max-w-2xl">
            A Ghanaian company based in Tema, Ghana, focused on heavy construction equipment rental, construction equipment services, and operator training.
          </p>
        </div>
      </div>

      {/* Main Content Area */}
      <div className="max-w-7xl mx-auto px-4 sm:px-8 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Left Main Article */}
          <div className="lg:col-span-8 space-y-8">
            <section className="space-y-4">
              <h2 className="text-2xl sm:text-3xl font-extrabold text-[#303030]">
                Company Overview
              </h2>
              <p className="text-neutral-700 text-base leading-relaxed">
                <strong>{COMPANY_DETAILS.name}</strong> is located in <strong>Tema, Ghana</strong>. The company operates in the heavy construction sector, providing essential machinery rental, specialized earthmoving services, and practical, hands-on training for construction equipment operators.
              </p>
              <p className="text-neutral-700 text-base leading-relaxed">
                Whether supporting civil infrastructure works, commercial developments, or individuals seeking to learn how to operate heavy machinery, our operations focus on equipment availability, practical proficiency, and direct customer communication.
              </p>
            </section>

            {/* Leadership Profile */}
            <section className="bg-neutral-50 rounded-xl p-6 sm:p-8 border border-neutral-300 space-y-4">
              <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#FF662C]">
                <User className="w-4 h-4" />
                <span>Executive Leadership</span>
              </div>
              <h3 className="text-xl sm:text-2xl font-bold text-[#303030]">
                Managing Director
              </h3>
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 p-4 bg-white rounded-lg border border-neutral-200">
                <div>
                  <p className="text-xs text-neutral-500 uppercase font-semibold">Managing Director</p>
                  <p className="text-xl font-black text-[#303030] mt-0.5">
                    {COMPANY_DETAILS.managingDirector}
                  </p>
                  <p className="text-xs text-neutral-600 mt-1">
                    J.A. Sovereign God Limited • Tema, Ghana
                  </p>
                </div>
                <div className="flex flex-col gap-1.5 shrink-0">
                  <a
                    href={`tel:${COMPANY_DETAILS.phoneRaw}`}
                    className="inline-flex items-center gap-2 text-xs font-bold text-[#FF662C] hover:text-[#E0531D] font-mono"
                  >
                    <Phone className="w-3.5 h-3.5" />
                    <span>{COMPANY_DETAILS.phone}</span>
                  </a>
                  <a
                    href={`tel:${COMPANY_DETAILS.secondaryPhoneRaw}`}
                    className="inline-flex items-center gap-2 text-xs font-bold text-[#303030] hover:text-[#FF662C] font-mono"
                  >
                    <Phone className="w-3.5 h-3.5 text-[#FF662C]" />
                    <span>{COMPANY_DETAILS.secondaryPhone}</span>
                  </a>
                </div>
              </div>
            </section>

            {/* Core Pillars */}
            <section className="space-y-4">
              <h3 className="text-xl sm:text-2xl font-bold text-[#303030]">
                Our Three Core Areas of Operation
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="p-4 bg-white rounded-lg border border-neutral-300 hover:border-[#FF662C] transition-colors">
                  <div className="w-8 h-8 rounded bg-orange-100 text-[#FF662C] flex items-center justify-center mb-3">
                    <Truck className="w-4 h-4" />
                  </div>
                  <h4 className="font-bold text-sm text-[#303030] mb-1">Equipment Rental</h4>
                  <p className="text-xs text-neutral-600 leading-relaxed">
                    Machinery rentals for excavators, bulldozers, graders, rollers, and backhoes for sites in Tema and beyond.
                  </p>
                </div>

                <div className="p-4 bg-white rounded-lg border border-neutral-300 hover:border-[#FF662C] transition-colors">
                  <div className="w-8 h-8 rounded bg-orange-100 text-[#FF662C] flex items-center justify-center mb-3">
                    <Wrench className="w-4 h-4" />
                  </div>
                  <h4 className="font-bold text-sm text-[#303030] mb-1">Equipment Services</h4>
                  <p className="text-xs text-neutral-600 leading-relaxed">
                    Earthmoving, site clearing, ground levelling, trenching, road preparation, and soil compaction.
                  </p>
                </div>

                <div className="p-4 bg-white rounded-lg border border-neutral-300 hover:border-[#FF662C] transition-colors">
                  <div className="w-8 h-8 rounded bg-orange-100 text-[#FF662C] flex items-center justify-center mb-3">
                    <HardHat className="w-4 h-4" />
                  </div>
                  <h4 className="font-bold text-sm text-[#303030] mb-1">Operator Training</h4>
                  <p className="text-xs text-neutral-600 leading-relaxed">
                    Practical training on how to operate heavy construction equipment with hands-on machinery practice.
                  </p>
                </div>
              </div>
            </section>

            {/* Machinery Visual Showcase */}
            <section className="space-y-4">
              <h3 className="text-xl sm:text-2xl font-bold text-[#303030]">
                Equipment Fleet in Operation
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="rounded-lg overflow-hidden border border-neutral-300">
                  <img
                    src={leaderImage}
                    alt="Crawler Type Tractor in Tema, Ghana"
                    className="w-full h-48 object-cover"
                    loading="lazy"
                  />
                  <div className="p-3 bg-neutral-50 text-xs font-semibold text-[#303030]">
                    Crawler Type Tractor • Site Operations
                  </div>
                </div>

                <div className="rounded-lg overflow-hidden border border-neutral-300">
                  <img
                    src={siteImage}
                    alt="Excavator Heavy Equipment"
                    className="w-full h-48 object-cover"
                    loading="lazy"
                  />
                  <div className="p-3 bg-neutral-50 text-xs font-semibold text-[#303030]">
                    Heavy Excavator • Excavation Works
                  </div>
                </div>
              </div>
            </section>
          </div>

          {/* Right Sidebar: Contact & Quick Inquiry */}
          <div className="lg:col-span-4 space-y-6">
            <div className="bg-[#303030] text-white p-6 rounded-xl border border-neutral-700 space-y-4">
              <h3 className="text-lg font-bold text-white border-b border-neutral-700 pb-3">
                Company Details
              </h3>
              <div className="space-y-3 text-sm">
                <div>
                  <span className="text-neutral-400 text-xs block">Company Name:</span>
                  <strong className="text-white">{COMPANY_DETAILS.name}</strong>
                </div>
                <div>
                  <span className="text-neutral-400 text-xs block">Location:</span>
                  <div className="flex items-center gap-1.5 text-white font-medium">
                    <MapPin className="w-4 h-4 text-[#FF662C]" />
                    <span>{COMPANY_DETAILS.location}</span>
                  </div>
                </div>
                <div>
                  <span className="text-neutral-400 text-xs block">Managing Director:</span>
                  <strong className="text-white">{COMPANY_DETAILS.managingDirector}</strong>
                </div>
                <div>
                  <span className="text-neutral-400 text-xs block">Contact Phone Numbers:</span>
                  <div className="space-y-1 mt-1">
                    <a
                      href={`tel:${COMPANY_DETAILS.phoneRaw}`}
                      className="block text-white hover:text-[#FF662C] font-mono font-bold transition-colors"
                    >
                      {COMPANY_DETAILS.phone}
                    </a>
                    <a
                      href={`tel:${COMPANY_DETAILS.secondaryPhoneRaw}`}
                      className="block text-white hover:text-[#FF662C] font-mono font-bold transition-colors"
                    >
                      {COMPANY_DETAILS.secondaryPhone}
                    </a>
                  </div>
                </div>
              </div>

              <div className="pt-3 border-t border-neutral-700 space-y-2">
                <button
                  onClick={onRequestRentalCTA}
                  className="w-full bg-[#FF662C] hover:bg-[#E0531D] text-white font-bold py-2.5 px-4 rounded-md text-xs transition-colors cursor-pointer"
                >
                  Request Equipment Rental
                </button>
                <button
                  onClick={onRegisterTrainingCTA}
                  className="w-full bg-neutral-800 hover:bg-neutral-700 text-white font-bold py-2.5 px-4 rounded-md text-xs transition-colors cursor-pointer"
                >
                  Register for Training
                </button>
              </div>
            </div>

            <div className="p-6 bg-neutral-50 rounded-xl border border-neutral-300 space-y-3">
              <h4 className="font-bold text-sm text-[#303030]">Quick Navigation</h4>
              <ul className="text-xs space-y-2 font-medium text-neutral-700">
                <li>
                  <button
                    onClick={onNavigateRental}
                    className="hover:text-[#FF662C] transition-colors cursor-pointer text-left"
                  >
                    &rarr; View Machinery Catalogue
                  </button>
                </li>
                <li>
                  <button
                    onClick={onNavigateServices}
                    className="hover:text-[#FF662C] transition-colors cursor-pointer text-left"
                  >
                    &rarr; Explore Construction Services
                  </button>
                </li>
                <li>
                  <button
                    onClick={onNavigateTraining}
                    className="hover:text-[#FF662C] transition-colors cursor-pointer text-left"
                  >
                    &rarr; Operator Training Center
                  </button>
                </li>
                <li>
                  <button
                    onClick={onNavigateContact}
                    className="hover:text-[#FF662C] transition-colors cursor-pointer text-left"
                  >
                    &rarr; Contact Information
                  </button>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
