import React from 'react';
import { ArrowLeft, FileText, Phone, MapPin, Shield } from 'lucide-react';
import { COMPANY_DETAILS } from '../data/companyData';

interface TermsPageScreenProps {
  onNavigateHome: () => void;
  onNavigateAbout?: () => void;
  onNavigateRental?: () => void;
  onNavigateServices?: () => void;
  onNavigateTraining?: () => void;
  onNavigateContact?: () => void;
}

export const TermsPageScreen: React.FC<TermsPageScreenProps> = ({ onNavigateHome }) => {
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
            <FileText className="w-3.5 h-3.5" />
            <span>Legal Documentation</span>
          </div>
          <h1 className="text-3xl sm:text-4xl font-black text-white">
            Terms &amp; Conditions
          </h1>
          <p className="text-neutral-400 text-sm mt-1">
            {COMPANY_DETAILS.name} • {COMPANY_DETAILS.location}
          </p>
        </div>
      </div>

      <main className="max-w-4xl mx-auto px-4 sm:px-8 py-12">
        <div className="bg-white rounded-xl border border-neutral-300 p-6 sm:p-10 space-y-8 text-neutral-700 leading-relaxed text-sm sm:text-base">
          <section className="space-y-3">
            <h2 className="text-xl font-bold text-[#303030]">1. Introduction &amp; Scope</h2>
            <p>
              These Terms and Conditions govern the use of the website for <strong>{COMPANY_DETAILS.name}</strong>, a company based in <strong>Tema, Ghana</strong> under the leadership of Managing Director <strong>{COMPANY_DETAILS.managingDirector}</strong>, offering heavy construction equipment rental, construction equipment services, and equipment operator training.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-bold text-[#303030]">2. Equipment Rental Inquiries</h2>
            <p>
              Information and inquiry forms displayed on this website are provided for demonstration and contact purposes. Machinery availability, scheduling, site access conditions, and rental terms must be confirmed directly through telephone contact with our Tema dispatch desk.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-bold text-[#303030]">3. Practical Operator Training</h2>
            <p>
              Registration inquiries for construction equipment operation training express interest in learning practical machine handling. All training arrangements, machine allocations, and orientations are coordinated directly by phone and in person at our Tema operations center.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-bold text-[#303030]">4. Website Inquiries &amp; Non-Binding Forms</h2>
            <p>
              Online submission forms on this website operate strictly on the frontend without transmitting or permanently storing confidential personal data. Direct phone calls to <strong>{COMPANY_DETAILS.phone}</strong> or <strong>{COMPANY_DETAILS.secondaryPhone}</strong> remain the official method for executing inquiries and confirming machinery availability.
            </p>
          </section>

          <section className="space-y-3 border-t border-neutral-200 pt-6">
            <h2 className="text-lg font-bold text-[#303030]">Contact &amp; Inquiries</h2>
            <p className="text-xs sm:text-sm text-neutral-600">
              For any questions regarding these terms, please contact our Managing Director:
            </p>
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
