import React, { useState } from 'react';
import { Phone, MapPin, User, Truck, HardHat, Wrench, AlertCircle, Info } from 'lucide-react';
import { COMPANY_DETAILS, TRAINING_EQUIPMENT_OPTIONS } from '../data/companyData';

interface ContactPageScreenProps {
  onNavigateHome: () => void;
  onNavigateAbout: () => void;
  onNavigateRental: () => void;
  onNavigateServices: () => void;
  onNavigateTraining: () => void;
  onRequestRentalCTA?: () => void;
  onRegisterTrainingCTA?: () => void;
}

export const ContactPageScreen: React.FC<ContactPageScreenProps> = ({
  onRequestRentalCTA,
  onRegisterTrainingCTA,
}) => {
  const [inquiryType, setInquiryType] = useState<'rental' | 'training' | 'services'>('rental');
  const [fullName, setFullName] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [equipmentOrService, setEquipmentOrService] = useState('Excavator');
  const [message, setMessage] = useState('');

  const [errors, setErrors] = useState<{ [key: string]: string }>({});
  const [submittedDemo, setSubmittedDemo] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const newErrors: { [key: string]: string } = {};

    if (!fullName.trim()) newErrors.fullName = 'Full Name is required.';
    if (!phoneNumber.trim()) {
      newErrors.phoneNumber = 'Phone Number is required.';
    } else if (phoneNumber.trim().length < 8) {
      newErrors.phoneNumber = 'Please enter a valid phone number.';
    }

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      setSubmittedDemo(false);
      return;
    }

    setErrors({});
    setSubmittedDemo(true);
  };

  return (
    <div className="bg-white min-h-screen">
      {/* Page Header */}
      <div className="bg-[#303030] text-white py-14 sm:py-18 border-b border-neutral-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-8">
          <div className="inline-flex items-center gap-2 text-xs font-bold text-[#FF662C] uppercase tracking-wider mb-2">
            <span>Get in Touch</span>
          </div>
          <h1 className="text-3xl sm:text-5xl font-black text-white tracking-tight">
            Contact J.A. Sovereign God Limited
          </h1>
          <p className="text-neutral-300 text-sm sm:text-base mt-3 max-w-2xl">
            Contact our office in Tema, Ghana for heavy construction equipment rentals, earthmoving services, and practical operator training inquiries.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-8 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Left Column: Verified Contact Information & Contact Options */}
          <div className="lg:col-span-6 space-y-8">
            <div>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-[#303030] mb-2">
                Official Company Information
              </h2>
              <p className="text-neutral-600 text-sm leading-relaxed">
                Reach out directly to our leadership and dispatch desk. Both phone lines are active for direct phone inquiries.
              </p>
            </div>

            {/* Information Cards */}
            <div className="space-y-4">
              {/* Company Name & Location */}
              <div className="p-5 bg-neutral-50 rounded-xl border border-neutral-300 flex items-start gap-4">
                <div className="w-10 h-10 rounded-lg bg-orange-100 text-[#FF662C] flex items-center justify-center shrink-0">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-xs font-bold uppercase tracking-wider text-neutral-500">
                    Company Name &amp; Location
                  </h3>
                  <p className="text-base font-bold text-[#303030] mt-0.5">
                    {COMPANY_DETAILS.name}
                  </p>
                  <p className="text-sm font-semibold text-[#FF662C] mt-0.5">
                    {COMPANY_DETAILS.location}
                  </p>
                </div>
              </div>

              {/* Managing Director */}
              <div className="p-5 bg-neutral-50 rounded-xl border border-neutral-300 flex items-start gap-4">
                <div className="w-10 h-10 rounded-lg bg-orange-100 text-[#FF662C] flex items-center justify-center shrink-0">
                  <User className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-xs font-bold uppercase tracking-wider text-neutral-500">
                    Managing Director
                  </h3>
                  <p className="text-lg font-black text-[#303030] mt-0.5">
                    {COMPANY_DETAILS.managingDirector}
                  </p>
                  <p className="text-xs text-neutral-600 mt-0.5">
                    Executive Operations &amp; Site Dispatch Oversight
                  </p>
                </div>
              </div>

              {/* Clickable Phone Numbers */}
              <div className="p-5 bg-[#303030] text-white rounded-xl border border-neutral-700 space-y-3">
                <h3 className="text-xs font-bold uppercase tracking-wider text-neutral-400">
                  Direct Contact Numbers (Click to Call)
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-1">
                  <a
                    href={`tel:${COMPANY_DETAILS.phoneRaw}`}
                    className="flex items-center gap-2.5 p-3 bg-neutral-800 hover:bg-[#FF662C] rounded-lg transition-colors group font-mono font-bold text-sm"
                  >
                    <Phone className="w-4 h-4 text-[#FF662C] group-hover:text-white shrink-0" />
                    <span>{COMPANY_DETAILS.phone}</span>
                  </a>

                  <a
                    href={`tel:${COMPANY_DETAILS.secondaryPhoneRaw}`}
                    className="flex items-center gap-2.5 p-3 bg-neutral-800 hover:bg-[#FF662C] rounded-lg transition-colors group font-mono font-bold text-sm"
                  >
                    <Phone className="w-4 h-4 text-[#FF662C] group-hover:text-white shrink-0" />
                    <span>{COMPANY_DETAILS.secondaryPhone}</span>
                  </a>
                </div>
              </div>
            </div>

            {/* Contact Options by Service Type */}
            <div className="space-y-3">
              <h3 className="text-base font-bold text-[#303030]">
                Choose an Inquiry Option:
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                <button
                  type="button"
                  onClick={() => {
                    setInquiryType('rental');
                    if (onRequestRentalCTA) onRequestRentalCTA();
                  }}
                  className={`p-3.5 rounded-lg border text-left transition-all cursor-pointer ${
                    inquiryType === 'rental'
                      ? 'border-[#FF662C] bg-orange-50/50'
                      : 'border-neutral-200 bg-white hover:border-neutral-400'
                  }`}
                >
                  <Truck className="w-4 h-4 text-[#FF662C] mb-1.5" />
                  <p className="text-xs font-bold text-[#303030]">Equipment Rental</p>
                  <p className="text-[11px] text-neutral-500">Rent heavy machinery</p>
                </button>

                <button
                  type="button"
                  onClick={() => setInquiryType('services')}
                  className={`p-3.5 rounded-lg border text-left transition-all cursor-pointer ${
                    inquiryType === 'services'
                      ? 'border-[#FF662C] bg-orange-50/50'
                      : 'border-neutral-200 bg-white hover:border-neutral-400'
                  }`}
                >
                  <Wrench className="w-4 h-4 text-[#FF662C] mb-1.5" />
                  <p className="text-xs font-bold text-[#303030]">Equipment Services</p>
                  <p className="text-[11px] text-neutral-500">Earthmoving &amp; grading</p>
                </button>

                <button
                  type="button"
                  onClick={() => {
                    setInquiryType('training');
                    if (onRegisterTrainingCTA) onRegisterTrainingCTA();
                  }}
                  className={`p-3.5 rounded-lg border text-left transition-all cursor-pointer ${
                    inquiryType === 'training'
                      ? 'border-[#FF662C] bg-orange-50/50'
                      : 'border-neutral-200 bg-white hover:border-neutral-400'
                  }`}
                >
                  <HardHat className="w-4 h-4 text-[#FF662C] mb-1.5" />
                  <p className="text-xs font-bold text-[#303030]">Operator Training</p>
                  <p className="text-[11px] text-neutral-500">Learn machine operation</p>
                </button>
              </div>
            </div>
          </div>

          {/* Right Column: Contact Inquiry Form (Frontend Only) */}
          <div className="lg:col-span-6 bg-white rounded-xl border border-neutral-300 p-6 sm:p-8 shadow-sm">
            <h3 className="text-xl font-bold text-[#303030] mb-1">
              Send an Online Inquiry
            </h3>
            <p className="text-xs text-neutral-600 mb-6">
              Complete this form for equipment rental, site service support, or operator training inquiries.
            </p>

            {submittedDemo ? (
              <div className="p-5 bg-neutral-50 border-2 border-[#FF662C] rounded-lg space-y-3">
                <div className="flex items-start gap-2.5">
                  <Info className="w-5 h-5 text-[#FF662C] shrink-0 mt-0.5" />
                  <div className="space-y-1 text-sm">
                    <h4 className="font-bold text-[#303030]">Frontend Demonstration Notice</h4>
                    <p className="text-xs text-neutral-700 leading-relaxed">
                      This inquiry form operates as a <strong>frontend demonstration</strong>. No information has been permanently stored or transmitted.
                    </p>
                    <p className="text-xs text-neutral-700 font-semibold pt-1">
                      Please call our Tema office directly to complete your inquiry:
                    </p>
                    <div className="flex flex-wrap gap-2 pt-2">
                      <a
                        href={`tel:${COMPANY_DETAILS.phoneRaw}`}
                        className="bg-[#FF662C] text-white px-3 py-1.5 rounded text-xs font-bold font-mono"
                      >
                        {COMPANY_DETAILS.phone}
                      </a>
                      <a
                        href={`tel:${COMPANY_DETAILS.secondaryPhoneRaw}`}
                        className="bg-[#303030] text-white px-3 py-1.5 rounded text-xs font-bold font-mono"
                      >
                        {COMPANY_DETAILS.secondaryPhone}
                      </a>
                    </div>
                  </div>
                </div>
                <div className="pt-2 text-right">
                  <button
                    onClick={() => setSubmittedDemo(false)}
                    className="text-xs font-bold text-neutral-500 hover:text-[#FF662C] underline cursor-pointer"
                  >
                    Submit Another Inquiry
                  </button>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} noValidate className="space-y-4">
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-[#303030] mb-1">
                    Inquiry Category
                  </label>
                  <select
                    value={inquiryType}
                    onChange={(e) => setInquiryType(e.target.value as any)}
                    className="w-full px-3 py-2 text-sm rounded-md border border-neutral-300 bg-white text-[#303030] focus:outline-none focus:ring-2 focus:ring-[#FF662C] cursor-pointer"
                  >
                    <option value="rental">Heavy Equipment Rental Inquiry</option>
                    <option value="services">Construction Equipment Services Inquiry</option>
                    <option value="training">Equipment Operation Training Inquiry</option>
                  </select>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-[#303030] mb-1">
                      Full Name <span className="text-[#FF662C]">*</span>
                    </label>
                    <input
                      type="text"
                      value={fullName}
                      onChange={(e) => setFullName(e.target.value)}
                      placeholder="Your name"
                      className={`w-full px-3 py-2 text-sm rounded-md border bg-white focus:outline-none focus:ring-2 focus:ring-[#FF662C] ${
                        errors.fullName ? 'border-red-500 bg-red-50/20' : 'border-neutral-300'
                      }`}
                    />
                    {errors.fullName && (
                      <p className="text-red-600 text-xs mt-1 flex items-center gap-1">
                        <AlertCircle className="w-3.5 h-3.5 shrink-0" />
                        {errors.fullName}
                      </p>
                    )}
                  </div>

                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-[#303030] mb-1">
                      Phone Number <span className="text-[#FF662C]">*</span>
                    </label>
                    <input
                      type="tel"
                      value={phoneNumber}
                      onChange={(e) => setPhoneNumber(e.target.value)}
                      placeholder="0244 000 000"
                      className={`w-full px-3 py-2 text-sm rounded-md border bg-white focus:outline-none focus:ring-2 focus:ring-[#FF662C] ${
                        errors.phoneNumber ? 'border-red-500 bg-red-50/20' : 'border-neutral-300'
                      }`}
                    />
                    {errors.phoneNumber && (
                      <p className="text-red-600 text-xs mt-1 flex items-center gap-1">
                        <AlertCircle className="w-3.5 h-3.5 shrink-0" />
                        {errors.phoneNumber}
                      </p>
                    )}
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-[#303030] mb-1">
                    Machinery of Interest
                  </label>
                  <select
                    value={equipmentOrService}
                    onChange={(e) => setEquipmentOrService(e.target.value)}
                    className="w-full px-3 py-2 text-sm rounded-md border border-neutral-300 bg-white text-[#303030] focus:outline-none focus:ring-2 focus:ring-[#FF662C] cursor-pointer"
                  >
                    {TRAINING_EQUIPMENT_OPTIONS.map((opt) => (
                      <option key={opt} value={opt}>
                        {opt}
                      </option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-[#303030] mb-1">
                    Project / Message Details
                  </label>
                  <textarea
                    rows={3}
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    placeholder="Provide details about your project location, equipment needs, or training questions..."
                    className="w-full px-3 py-2 text-sm rounded-md border border-neutral-300 bg-white focus:outline-none focus:ring-2 focus:ring-[#FF662C]"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full bg-[#FF662C] hover:bg-[#E0531D] text-white font-bold py-2.5 px-4 rounded-md text-sm transition-colors cursor-pointer shadow-sm"
                >
                  Send Inquiry Message
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
