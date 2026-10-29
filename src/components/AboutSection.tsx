import React from 'react';
import { Shield, Wrench, HardHat, Check, ArrowRight, Phone } from 'lucide-react';
import { COMPANY_DETAILS } from '../data/companyData';

interface AboutSectionProps {
  onNavigateAbout: () => void;
  onNavigateTraining: () => void;
}

export const AboutSection: React.FC<AboutSectionProps> = ({
  onNavigateAbout,
  onNavigateTraining,
}) => {
  // Use supplied crawler type tractor image
  const aboutImage = 'https://i.ibb.co/Nd3NkzVV/007-Crawler-Type-Tractor.jpg';

  return (
    <section className="py-16 sm:py-20 bg-white border-b border-neutral-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Column: Image with Industrial Frame */}
          <div className="relative">
            <div className="rounded-xl overflow-hidden border border-neutral-300 shadow-md bg-neutral-100">
              <img
                src={aboutImage}
                alt="Crawler Type Tractor - J.A. Sovereign God Limited Equipment"
                className="w-full h-[360px] sm:h-[420px] object-cover"
                loading="lazy"
              />
            </div>
            {/* Overlay badge with Managing Director */}
            <div className="absolute -bottom-5 left-6 bg-[#303030] text-white p-4 rounded-lg shadow-xl border-l-4 border-[#FF662C] max-w-xs">
              <p className="text-[11px] uppercase font-bold text-neutral-400 tracking-wider">
                Leadership &amp; Operations
              </p>
              <p className="font-bold text-base text-white mt-0.5">
                {COMPANY_DETAILS.managingDirector}
              </p>
              <p className="text-xs text-neutral-300">Managing Director • Tema, Ghana</p>
            </div>
          </div>

          {/* Right Column: Company Introduction & Why Choose Us */}
          <div className="space-y-6 lg:pl-4">
            <div className="inline-flex items-center gap-2 text-xs font-bold text-[#FF662C] uppercase tracking-wider bg-orange-50 px-3 py-1 rounded-md border border-orange-100">
              <span>About Our Company</span>
            </div>

            <h2 className="text-2xl sm:text-4xl font-extrabold text-[#303030] tracking-tight leading-tight">
              Reliable Heavy Equipment &amp; Practical Skills in Tema, Ghana
            </h2>

            <p className="text-neutral-700 text-sm sm:text-base leading-relaxed">
              <strong>{COMPANY_DETAILS.name}</strong> is a Ghanaian company based in Tema, Ghana, specializing in heavy construction machinery rental, construction equipment services, and practical training on how to operate construction equipment.
            </p>

            {/* Why Choose Us - strictly emphasizing practical training, access to machinery, professional service, and construction focus */}
            <div className="space-y-3 pt-2">
              <h3 className="text-sm font-bold uppercase tracking-wider text-[#303030]">
                Why Work With Us
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div className="p-3.5 bg-neutral-50 rounded-lg border border-neutral-200">
                  <div className="flex items-center gap-2 font-bold text-sm text-[#303030] mb-1">
                    <Wrench className="w-4 h-4 text-[#FF662C]" />
                    <span>Access to Machinery</span>
                  </div>
                  <p className="text-xs text-neutral-600 leading-normal">
                    Direct availability of heavy construction equipment for civil, commercial, and residential projects.
                  </p>
                </div>

                <div className="p-3.5 bg-neutral-50 rounded-lg border border-neutral-200">
                  <div className="flex items-center gap-2 font-bold text-sm text-[#303030] mb-1">
                    <HardHat className="w-4 h-4 text-[#FF662C]" />
                    <span>Practical Training</span>
                  </div>
                  <p className="text-xs text-neutral-600 leading-normal">
                    Hands-on practical training on operating heavy construction machinery in Tema.
                  </p>
                </div>

                <div className="p-3.5 bg-neutral-50 rounded-lg border border-neutral-200">
                  <div className="flex items-center gap-2 font-bold text-sm text-[#303030] mb-1">
                    <Shield className="w-4 h-4 text-[#FF662C]" />
                    <span>Professional Service</span>
                  </div>
                  <p className="text-xs text-neutral-600 leading-normal">
                    Direct communication, clear coordination, and responsive dispatch support for your job site.
                  </p>
                </div>

                <div className="p-3.5 bg-neutral-50 rounded-lg border border-neutral-200">
                  <div className="flex items-center gap-2 font-bold text-sm text-[#303030] mb-1">
                    <Check className="w-4 h-4 text-[#FF662C]" />
                    <span>Focus on Construction</span>
                  </div>
                  <p className="text-xs text-neutral-600 leading-normal">
                    Dedicated exclusively to heavy construction equipment operations and site earthmoving solutions.
                  </p>
                </div>
              </div>
            </div>

            {/* CTAs */}
            <div className="pt-2 flex flex-wrap items-center gap-4">
              <button
                onClick={onNavigateAbout}
                className="inline-flex items-center gap-2 text-sm font-bold text-[#FF662C] hover:text-[#E0531D] cursor-pointer"
              >
                <span>Read Full About Us</span>
                <ArrowRight className="w-4 h-4" />
              </button>
              <span className="text-neutral-300">|</span>
              <a
                href={`tel:${COMPANY_DETAILS.phoneRaw}`}
                className="inline-flex items-center gap-1.5 text-sm font-bold text-[#303030] hover:text-[#FF662C] transition-colors"
              >
                <Phone className="w-3.5 h-3.5 text-[#FF662C]" />
                <span>Call {COMPANY_DETAILS.phone}</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
