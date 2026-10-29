import React from 'react';
import { ArrowLeft, Shield, MapPin, Phone } from 'lucide-react';
import { COMPANY_DETAILS } from '../data/companyData';

interface PrivacyPageScreenProps {
  onNavigateHome: () => void;
  onNavigateAbout?: () => void;
  onNavigateRental?: () => void;
  onNavigateServices?: () => void;
  onNavigateTraining?: () => void;
  onNavigateContact?: () => void;
}

export const PrivacyPageScreen: React.FC<PrivacyPageScreenProps> = ({ onNavigateHome }) => {
  return (
    <div className="bg-white min-h-screen">
      {/* Header Banner */}
      <div className="bg-[#303030] text-white py-14 border-b border-neutral-700">
        <div className="max-w-4xl mx-auto px-4 sm:px-8">
          <button
            onClick={onNavigateHome}
            className="inline-flex items-center gap-1.5 text-xs font-bold text-neutral-400 hover:text-white uppercase tracking-wider mb-4 cursor-pointer"
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            <span>Back to Home</span>
          </button>
          <div className="inline-flex items-center gap-2 text-xs font-bold text-[#FF662C] uppercase tracking-wider mb-2">
            <Shield className="w-3.5 h-3.5" />
            <span>Privacy &amp; Data Protection</span>
          </div>
          <h1 className="text-3xl sm:text-4xl font-black text-white">
            Privacy Policy
          </h1>
          <p className="text-neutral-400 text-sm mt-1">
            {COMPANY_DETAILS.name} • {COMPANY_DETAILS.location}
          </p>
        </div>
      </div>

      <main className="max-w-4xl mx-auto px-4 sm:px-8 py-12">
        <div className="bg-white rounded-xl border border-neutral-300 p-6 sm:p-10 space-y-8 text-neutral-700 leading-relaxed text-sm sm:text-base">
          <section className="space-y-3">
            <h2 className="text-xl font-bold text-[#303030]">1. Data Protection Commitment</h2>
            <p>
              <strong>{COMPANY_DETAILS.name}</strong>, situated in <strong>Tema, Ghana</strong> and managed by <strong>{COMPANY_DETAILS.managingDirector}</strong>, is committed to respecting the privacy of customers and training candidates.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-bold text-[#303030]">2. Demonstration Forms &amp; Storage</h2>
            <p>
              Inquiry forms on this website operate on a frontend-only basis. Form inputs are neither transmitted to external marketing databases nor saved in persistent browser cookies or local storage. Inquiries submitted via this site serve only as demonstration interactions.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-bold text-[#303030]">3. Telephone Communication</h2>
            <p>
              When you contact us by telephone at <strong>{COMPANY_DETAILS.phone}</strong> or <strong>{COMPANY_DETAILS.secondaryPhone}</strong>, any project details or equipment requirements you disclose are used strictly to provide you with rental quotes, logistical planning, or training scheduling.
            </p>
          </section>

          <section className="space-y-3 border-t border-neutral-200 pt-6">
            <h2 className="text-lg font-bold text-[#303030]">Company Contact</h2>
            <div className="text-xs text-neutral-700 space-y-1">
              <p><strong>Company:</strong> {COMPANY_DETAILS.name}</p>
              <p><strong>Location:</strong> {COMPANY_DETAILS.location}</p>
              <p><strong>Managing Director:</strong> {COMPANY_DETAILS.managingDirector}</p>
              <p><strong>Phone:</strong> {COMPANY_DETAILS.phone} / {COMPANY_DETAILS.secondaryPhone}</p>
            </div>
          </section>
        </div>
      </main>
    </div>
  );
};
