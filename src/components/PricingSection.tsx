import React from 'react';
import { HardHat, CheckCircle2, Phone, ArrowRight, ShieldCheck } from 'lucide-react';
import { COMPANY_DETAILS, TRAINING_EQUIPMENT_OPTIONS } from '../data/companyData';

interface PricingSectionProps {
  onRegisterTraining: () => void;
  onNavigateTraining: () => void;
}

export const PricingSection: React.FC<PricingSectionProps> = ({
  onRegisterTraining,
  onNavigateTraining,
}) => {
  // Use supplied backhoe image
  const trainingPromoImage = 'https://i.ibb.co/RGKGpZdD/001-Backhoe-Backshovel.jpg';

  return (
    <section className="py-16 sm:py-20 bg-neutral-900 text-white relative overflow-hidden border-b border-neutral-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          {/* Left Column: Promotion Copy */}
          <div className="lg:col-span-7 space-y-6">
            <div className="inline-flex items-center gap-2 bg-[#FF662C]/20 border border-[#FF662C]/40 text-[#FF662C] px-3 py-1 rounded-md text-xs font-bold uppercase tracking-wider">
              <HardHat className="w-3.5 h-3.5" />
              <span>Skills Development in Tema, Ghana</span>
            </div>

            <h2 className="text-2xl sm:text-4xl font-extrabold text-white tracking-tight leading-tight">
              Learn How to Operate Heavy Construction Equipment
            </h2>

            <p className="text-neutral-300 text-sm sm:text-base leading-relaxed">
              J.A. Sovereign God Limited provides hands-on, practical equipment operation training. Gain real machine handling experience on actual construction equipment including excavators, bulldozers, graders, rollers, and tractors in Tema, Ghana.
            </p>

            {/* Highlights */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
              <div className="flex items-start gap-2.5 bg-neutral-800/80 p-3 rounded-md border border-neutral-700">
                <CheckCircle2 className="w-4 h-4 text-[#FF662C] shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-xs font-bold text-white">Practical Machine Training</h4>
                  <p className="text-[11px] text-neutral-400 mt-0.5">Hands-on time on active construction machinery.</p>
                </div>
              </div>

              <div className="flex items-start gap-2.5 bg-neutral-800/80 p-3 rounded-md border border-neutral-700">
                <CheckCircle2 className="w-4 h-4 text-[#FF662C] shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-xs font-bold text-white">Multiple Equipment Types</h4>
                  <p className="text-[11px] text-neutral-400 mt-0.5">Training options across 9 major machinery classes.</p>
                </div>
              </div>

              <div className="flex items-start gap-2.5 bg-neutral-800/80 p-3 rounded-md border border-neutral-700">
                <CheckCircle2 className="w-4 h-4 text-[#FF662C] shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-xs font-bold text-white">Machine Controls &amp; Safety</h4>
                  <p className="text-[11px] text-neutral-400 mt-0.5">Practical operating procedures and site awareness.</p>
                </div>
              </div>

              <div className="flex items-start gap-2.5 bg-neutral-800/80 p-3 rounded-md border border-neutral-700">
                <CheckCircle2 className="w-4 h-4 text-[#FF662C] shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-xs font-bold text-white">Direct Guidance in Tema</h4>
                  <p className="text-[11px] text-neutral-400 mt-0.5">Local training facility and equipment yard in Tema.</p>
                </div>
              </div>
            </div>

            {/* CTAs */}
            <div className="pt-4 flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
              <button
                onClick={onRegisterTraining}
                className="bg-[#FF662C] hover:bg-[#E0531D] text-white font-bold px-6 py-3.5 rounded-md text-sm shadow-md transition-all inline-flex items-center justify-center gap-2 cursor-pointer"
              >
                <HardHat className="w-4 h-4" />
                <span>Register for Training</span>
              </button>

              <button
                onClick={onNavigateTraining}
                className="bg-transparent hover:bg-white/10 text-neutral-200 hover:text-white border border-neutral-600 px-5 py-3.5 rounded-md text-sm font-semibold transition-all inline-flex items-center justify-center gap-2 cursor-pointer"
              >
                <span>View Training Program Details</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* Right Column: Training Visual Card */}
          <div className="lg:col-span-5">
            <div className="relative bg-neutral-800 rounded-xl overflow-hidden border border-neutral-700 shadow-2xl">
              <img
                src={trainingPromoImage}
                alt="Practical Construction Equipment Operator Training"
                className="w-full h-72 sm:h-80 object-cover"
                loading="lazy"
              />
              <div className="p-6 bg-neutral-900 border-t border-neutral-800">
                <div className="flex items-center justify-between mb-3">
                  <span className="text-xs font-bold uppercase tracking-wider text-[#FF662C]">
                    Available Training Machinery
                  </span>
                  <span className="text-[11px] text-neutral-400 font-mono">Tema, Ghana</span>
                </div>
                <div className="flex flex-wrap gap-1.5">
                  {TRAINING_EQUIPMENT_OPTIONS.slice(0, 6).map((opt) => (
                    <span
                      key={opt}
                      className="text-[11px] font-medium bg-neutral-800 text-neutral-300 px-2.5 py-1 rounded border border-neutral-700"
                    >
                      {opt}
                    </span>
                  ))}
                  <span className="text-[11px] font-medium bg-neutral-800 text-[#FF662C] px-2.5 py-1 rounded border border-neutral-700">
                    + more
                  </span>
                </div>
                <div className="mt-4 pt-4 border-t border-neutral-800 flex items-center justify-between">
                  <span className="text-xs text-neutral-400">Direct Inquiries:</span>
                  <a
                    href={`tel:${COMPANY_DETAILS.phoneRaw}`}
                    className="text-xs font-bold text-white hover:text-[#FF662C] font-mono transition-colors"
                  >
                    {COMPANY_DETAILS.phone}
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
