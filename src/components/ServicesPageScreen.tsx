import React from 'react';
import { Phone, Wrench, Truck, CheckCircle2, ArrowRight } from 'lucide-react';
import { CONSTRUCTION_SERVICES, COMPANY_DETAILS } from '../data/companyData';

interface ServicesPageScreenProps {
  onNavigateHome: () => void;
  onNavigateAbout: () => void;
  onNavigateRental: () => void;
  onNavigateTraining: () => void;
  onNavigateContact: () => void;
  onRequestRentalCTA: () => void;
}

export const ServicesPageScreen: React.FC<ServicesPageScreenProps> = ({
  onNavigateHome,
  onNavigateRental,
  onNavigateTraining,
  onNavigateContact,
  onRequestRentalCTA,
}) => {
  return (
    <div className="bg-white min-h-screen">
      {/* Page Header */}
      <div className="bg-[#303030] text-white py-14 sm:py-18 border-b border-neutral-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-8">
          <div className="inline-flex items-center gap-2 text-xs font-bold text-[#FF662C] uppercase tracking-wider mb-2">
            <span>Specialized Capabilities</span>
          </div>
          <h1 className="text-3xl sm:text-5xl font-black text-white tracking-tight">
            Construction Equipment Services
          </h1>
          <p className="text-neutral-300 text-sm sm:text-base mt-3 max-w-2xl">
            Heavy machinery and equipment-related construction applications for civil infrastructure, site development, road preparation, and earthworks in Tema and throughout Ghana.
          </p>
        </div>
      </div>

      {/* Main Content Area */}
      <div className="max-w-7xl mx-auto px-4 sm:px-8 py-16">
        {/* Intro Banner */}
        <div className="bg-neutral-50 rounded-xl p-6 sm:p-8 border border-neutral-300 mb-14 max-w-4xl">
          <h2 className="text-xl sm:text-2xl font-bold text-[#303030] mb-2">
            Heavy Equipment Applications &amp; Site Support
          </h2>
          <p className="text-neutral-700 text-sm sm:text-base leading-relaxed">
            J.A. Sovereign God Limited supports contractors, private developers, and civil engineering projects with reliable heavy machinery deployments. Below are typical construction applications performed with our heavy equipment. Contact our Tema office directly to confirm equipment availability and specific site requirements.
          </p>
        </div>

        {/* Services List / Cards */}
        <div className="space-y-12">
          {CONSTRUCTION_SERVICES.map((service, index) => {
            const isReversed = index % 2 === 1;
            return (
              <div
                key={service.id}
                className="bg-white rounded-xl border border-neutral-300 overflow-hidden shadow-xs hover:shadow-md transition-shadow"
              >
                <div
                  className={`grid grid-cols-1 lg:grid-cols-12 gap-8 items-center ${
                    isReversed ? 'lg:flex-row-reverse' : ''
                  }`}
                >
                  {/* Visual Image */}
                  <div
                    className={`lg:col-span-5 h-64 sm:h-80 bg-neutral-900 ${
                      isReversed ? 'lg:order-last' : ''
                    }`}
                  >
                    <img
                      src={service.image}
                      alt={`${service.title} Construction Machinery`}
                      className="w-full h-full object-cover"
                      loading="lazy"
                    />
                  </div>

                  {/* Details */}
                  <div className="lg:col-span-7 p-6 sm:p-8 space-y-4">
                    <div className="inline-flex items-center gap-1.5 text-xs font-bold text-[#FF662C] uppercase tracking-wider">
                      <Wrench className="w-3.5 h-3.5" />
                      <span>Construction Application</span>
                    </div>

                    <h3 className="text-xl sm:text-2xl font-black text-[#303030]">
                      {service.title}
                    </h3>

                    <p className="text-neutral-700 text-sm sm:text-base leading-relaxed">
                      {service.fullDescription}
                    </p>

                    {/* Matched Equipment Tags */}
                    <div className="pt-2">
                      <p className="text-xs font-bold uppercase tracking-wider text-neutral-500 mb-2">
                        Typical Equipment Utilized:
                      </p>
                      <div className="flex flex-wrap gap-2">
                        {service.matchedEquipment.map((eqName) => (
                          <span
                            key={eqName}
                            className="bg-neutral-100 border border-neutral-300 text-[#303030] text-xs font-semibold px-3 py-1 rounded-md"
                          >
                            {eqName}
                          </span>
                        ))}
                      </div>
                    </div>

                    <div className="pt-4 flex flex-wrap items-center gap-3 border-t border-neutral-200">
                      <button
                        onClick={onRequestRentalCTA}
                        className="bg-[#FF662C] hover:bg-[#E0531D] text-white font-bold py-2 px-4 rounded-md text-xs sm:text-sm inline-flex items-center gap-1.5 transition-colors cursor-pointer"
                      >
                        <Truck className="w-4 h-4" />
                        <span>Inquire Equipment for Service</span>
                      </button>

                      <a
                        href={`tel:${COMPANY_DETAILS.phoneRaw}`}
                        className="bg-neutral-100 hover:bg-neutral-200 text-[#303030] font-bold py-2 px-4 rounded-md text-xs sm:text-sm inline-flex items-center gap-1.5 transition-colors"
                      >
                        <Phone className="w-4 h-4 text-[#FF662C]" />
                        <span>Call Dispatch</span>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Call to Inquire Section */}
        <div className="mt-16 bg-[#303030] text-white rounded-2xl p-8 sm:p-12 shadow-xl border border-neutral-700">
          <div className="max-w-3xl mx-auto text-center space-y-4">
            <h3 className="text-2xl sm:text-3xl font-extrabold text-white">
              Need Equipment or Construction Support for Your Project?
            </h3>
            <p className="text-neutral-300 text-sm sm:text-base leading-relaxed">
              Every construction site has unique terrain, soil, and machinery requirements. Call our Tema dispatch team directly to discuss your project scope and arrange necessary heavy equipment.
            </p>

            <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4">
              <a
                href={`tel:${COMPANY_DETAILS.phoneRaw}`}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-[#FF662C] hover:bg-[#E0531D] text-white font-bold py-3.5 px-6 rounded-md shadow-md text-sm font-mono transition-colors"
              >
                <Phone className="w-4 h-4" />
                <span>Call {COMPANY_DETAILS.phone}</span>
              </a>

              <a
                href={`tel:${COMPANY_DETAILS.secondaryPhoneRaw}`}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-neutral-800 hover:bg-neutral-700 text-white font-bold py-3.5 px-6 rounded-md border border-neutral-600 text-sm font-mono transition-colors"
              >
                <Phone className="w-4 h-4 text-[#FF662C]" />
                <span>Call {COMPANY_DETAILS.secondaryPhone}</span>
              </a>
            </div>

            <p className="text-xs text-neutral-400 pt-2">
              Managing Director: Alexander J.A. ACKAH • Tema, Ghana
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
