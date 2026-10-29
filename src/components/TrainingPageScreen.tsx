import React from 'react';
import { HardHat, Phone, CheckCircle2, AlertTriangle, Info, MapPin } from 'lucide-react';
import { COMPANY_DETAILS, EQUIPMENT_CATEGORIES } from '../data/companyData';
import { TrainingRegistrationForm } from './TrainingRegistrationForm';

interface TrainingPageScreenProps {
  onNavigateHome: () => void;
  onNavigateAbout: () => void;
  onNavigateRental: () => void;
  onNavigateServices: () => void;
  onNavigateContact: () => void;
}

export const TrainingPageScreen: React.FC<TrainingPageScreenProps> = () => {
  return (
    <div className="bg-white min-h-screen">
      {/* Page Header */}
      <div className="bg-[#303030] text-white py-14 sm:py-18 border-b border-neutral-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-8">
          <div className="inline-flex items-center gap-2 text-xs font-bold text-[#FF662C] uppercase tracking-wider mb-2">
            <HardHat className="w-4 h-4 text-[#FF662C]" />
            <span>Practical Operator Training</span>
          </div>
          <h1 className="text-3xl sm:text-5xl font-black text-white tracking-tight">
            Construction Equipment Operation Training
          </h1>
          <p className="text-neutral-300 text-sm sm:text-base mt-3 max-w-2xl">
            Practical, hands-on training on how to operate heavy construction machinery in Tema, Ghana.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-8 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Left Column: Introduction & Training Information */}
          <div className="lg:col-span-7 space-y-10">
            {/* Introduction */}
            <section className="space-y-4">
              <h2 className="text-2xl sm:text-3xl font-extrabold text-[#303030]">
                Learn to Operate Heavy Machinery
              </h2>
              <p className="text-neutral-700 text-base leading-relaxed">
                <strong>{COMPANY_DETAILS.name}</strong> offers practical training on how to use heavy construction equipment at our facility in Tema, Ghana. Our training is centered on real machinery, allowing learners to gain practical familiarity with machine controls, site movement, and operational handling.
              </p>
              <div className="p-4 bg-orange-50 border-l-4 border-[#FF662C] rounded-r-lg">
                <p className="text-xs sm:text-sm text-neutral-800 font-medium">
                  <strong>Notice:</strong> This training program focuses on practical machinery operation. To inquire about equipment availability, registration details, or site training arrangements, please use the registration inquiry form or call our dispatch numbers.
                </p>
              </div>
            </section>

            {/* Equipment Categories Available for Training */}
            <section className="space-y-4">
              <h3 className="text-xl sm:text-2xl font-bold text-[#303030]">
                Equipment Categories Available for Training
              </h3>
              <p className="text-xs sm:text-sm text-neutral-600">
                Practical operating training can be requested for any of the following machinery types:
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-1">
                {EQUIPMENT_CATEGORIES.map((eq) => (
                  <div
                    key={eq.id}
                    className="p-3.5 bg-neutral-50 rounded-lg border border-neutral-200 flex items-start gap-3"
                  >
                    <div className="w-12 h-10 rounded overflow-hidden shrink-0 bg-neutral-800">
                      <img
                        src={eq.primaryImage}
                        alt={eq.displayName}
                        className="w-full h-full object-cover"
                        loading="lazy"
                      />
                    </div>
                    <div>
                      <h4 className="text-sm font-bold text-[#303030]">{eq.displayName}</h4>
                      <p className="text-[11px] text-neutral-500 line-clamp-1">{eq.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            {/* Training Registration Process */}
            <section className="bg-neutral-50 p-6 sm:p-8 rounded-xl border border-neutral-300 space-y-4">
              <h3 className="text-xl sm:text-2xl font-bold text-[#303030]">
                Training Registration Process
              </h3>
              <div className="space-y-3.5 text-sm text-neutral-700">
                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-[#FF662C] text-white flex items-center justify-center font-bold text-xs shrink-0 mt-0.5">
                    1
                  </div>
                  <div>
                    <h4 className="font-bold text-[#303030]">Select Preferred Equipment</h4>
                    <p className="text-xs text-neutral-600">
                      Identify which category of construction equipment you wish to learn to operate.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-[#FF662C] text-white flex items-center justify-center font-bold text-xs shrink-0 mt-0.5">
                    2
                  </div>
                  <div>
                    <h4 className="font-bold text-[#303030]">Submit Training Inquiry</h4>
                    <p className="text-xs text-neutral-600">
                      Fill out the inquiry form with your contact details and preferred start timeframe.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-[#FF662C] text-white flex items-center justify-center font-bold text-xs shrink-0 mt-0.5">
                    3
                  </div>
                  <div>
                    <h4 className="font-bold text-[#303030]">Confirm Details Directly</h4>
                    <p className="text-xs text-neutral-600">
                      Call our Tema training center to confirm practical equipment availability and schedule orientation.
                    </p>
                  </div>
                </div>
              </div>
            </section>

            {/* Contact Section for More Information */}
            <section className="p-6 bg-[#303030] text-white rounded-xl border border-neutral-700 space-y-3">
              <h4 className="text-lg font-bold text-white">
                Need More Information About Operator Training?
              </h4>
              <p className="text-xs sm:text-sm text-neutral-300">
                Speak directly with our team in Tema, Ghana regarding training specifics:
              </p>
              <div className="flex flex-wrap gap-4 pt-2">
                <a
                  href={`tel:${COMPANY_DETAILS.phoneRaw}`}
                  className="inline-flex items-center gap-2 bg-[#FF662C] hover:bg-[#E0531D] text-white font-mono font-bold px-4 py-2 rounded-md text-sm transition-colors"
                >
                  <Phone className="w-4 h-4" />
                  <span>{COMPANY_DETAILS.phone}</span>
                </a>
                <a
                  href={`tel:${COMPANY_DETAILS.secondaryPhoneRaw}`}
                  className="inline-flex items-center gap-2 bg-neutral-800 hover:bg-neutral-700 text-white font-mono font-bold px-4 py-2 rounded-md text-sm transition-colors border border-neutral-600"
                >
                  <Phone className="w-4 h-4 text-[#FF662C]" />
                  <span>{COMPANY_DETAILS.secondaryPhone}</span>
                </a>
              </div>
              <p className="text-[11px] text-neutral-400 pt-1">
                Location: {COMPANY_DETAILS.location} • Managing Director: {COMPANY_DETAILS.managingDirector}
              </p>
            </section>
          </div>

          {/* Right Column: Prominent Registration Form */}
          <div className="lg:col-span-5 sticky top-24">
            <TrainingRegistrationForm />
          </div>
        </div>
      </div>
    </div>
  );
};
