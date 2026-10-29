import React, { useState, useEffect } from 'react';
import { X, Phone, Truck, AlertCircle, Info, Calendar } from 'lucide-react';
import { COMPANY_DETAILS, EQUIPMENT_CATEGORIES } from '../data/companyData';

interface RentalInquiryModalProps {
  isOpen: boolean;
  initialEquipmentId?: string;
  onClose: () => void;
}

export const RentalInquiryModal: React.FC<RentalInquiryModalProps> = ({
  isOpen,
  initialEquipmentId,
  onClose,
}) => {
  const [fullName, setFullName] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [equipmentRequired, setEquipmentRequired] = useState('');
  const [intendedProject, setIntendedProject] = useState('');
  const [projectLocation, setProjectLocation] = useState('Tema, Greater Accra');
  const [rentalStartDate, setRentalStartDate] = useState('');
  const [expectedDuration, setExpectedDuration] = useState('1 - 2 Weeks');
  const [additionalInfo, setAdditionalInfo] = useState('');

  const [errors, setErrors] = useState<{ [key: string]: string }>({});
  const [submittedDemo, setSubmittedDemo] = useState(false);

  useEffect(() => {
    if (initialEquipmentId) {
      const match = EQUIPMENT_CATEGORIES.find((eq) => eq.id === initialEquipmentId);
      if (match) {
        setEquipmentRequired(match.displayName);
      }
    } else if (!equipmentRequired && EQUIPMENT_CATEGORIES.length > 0) {
      setEquipmentRequired(EQUIPMENT_CATEGORIES[0].displayName);
    }
  }, [initialEquipmentId, isOpen]);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const newErrors: { [key: string]: string } = {};

    if (!fullName.trim()) {
      newErrors.fullName = 'Full Name is required.';
    }
    if (!phoneNumber.trim()) {
      newErrors.phoneNumber = 'Phone Number is required.';
    } else if (phoneNumber.trim().length < 8) {
      newErrors.phoneNumber = 'Please enter a valid phone number.';
    }
    if (!equipmentRequired) {
      newErrors.equipmentRequired = 'Please specify the equipment required.';
    }
    if (!projectLocation.trim()) {
      newErrors.projectLocation = 'Location of project is required.';
    }

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      setSubmittedDemo(false);
      return;
    }

    setErrors({});
    setSubmittedDemo(true);
  };

  const handleReset = () => {
    setFullName('');
    setPhoneNumber('');
    setIntendedProject('');
    setProjectLocation('Tema, Greater Accra');
    setRentalStartDate('');
    setExpectedDuration('1 - 2 Weeks');
    setAdditionalInfo('');
    setSubmittedDemo(false);
    setErrors({});
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-black/60 backdrop-blur-xs flex items-center justify-center p-4">
      <div className="bg-white rounded-xl shadow-2xl max-w-2xl w-full border border-neutral-300 overflow-hidden animate-in fade-in zoom-in-95 duration-150">
        {/* Modal Header */}
        <div className="bg-[#303030] text-white px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-2.5">
            <div className="w-8 h-8 rounded-md bg-[#FF662C] flex items-center justify-center text-white">
              <Truck className="w-4 h-4" />
            </div>
            <div>
              <h3 className="font-bold text-base sm:text-lg">Equipment Rental Inquiry</h3>
              <p className="text-xs text-neutral-300">J.A. Sovereign God Limited • Tema, Ghana</p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="text-neutral-400 hover:text-white p-1 rounded-md transition-colors cursor-pointer"
            aria-label="Close dialog"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Body */}
        <div className="p-6">
          {submittedDemo ? (
            <div className="space-y-4">
              <div className="p-4 bg-orange-50/70 border border-[#FF662C] rounded-lg flex items-start gap-3">
                <Info className="w-5 h-5 text-[#FF662C] shrink-0 mt-0.5" />
                <div className="space-y-1.5 text-sm">
                  <h4 className="font-bold text-[#303030]">Frontend Demonstration Notice</h4>
                  <p className="text-neutral-700 leading-relaxed text-xs sm:text-sm">
                    This inquiry form is a <strong>frontend demonstration</strong>. To ensure equipment schedule coordination and site logistics, no information is saved or transmitted online, and no automated rental reservation has been made.
                  </p>
                  <div className="p-2.5 bg-white border border-neutral-200 rounded text-xs text-[#303030] mt-2">
                    <strong>Inquiry Machine:</strong> {equipmentRequired} | <strong>Applicant:</strong> {fullName}
                  </div>
                </div>
              </div>

              <div className="bg-neutral-50 p-4 rounded-lg border border-neutral-200 space-y-3">
                <p className="text-sm font-semibold text-[#303030]">
                  Please call our Tema office directly to confirm machinery availability and deployment:
                </p>
                <div className="flex flex-col sm:flex-row gap-2.5">
                  <a
                    href={`tel:${COMPANY_DETAILS.phoneRaw}`}
                    className="flex-1 inline-flex items-center justify-center gap-2 bg-[#FF662C] hover:bg-[#E0531D] text-white py-2.5 px-4 rounded-md font-bold text-sm shadow-sm transition-colors"
                  >
                    <Phone className="w-4 h-4" />
                    <span>Call {COMPANY_DETAILS.phone}</span>
                  </a>
                  <a
                    href={`tel:${COMPANY_DETAILS.secondaryPhoneRaw}`}
                    className="flex-1 inline-flex items-center justify-center gap-2 bg-[#303030] hover:bg-[#202020] text-white py-2.5 px-4 rounded-md font-bold text-sm shadow-sm transition-colors"
                  >
                    <Phone className="w-4 h-4 text-[#FF662C]" />
                    <span>Call {COMPANY_DETAILS.secondaryPhone}</span>
                  </a>
                </div>
              </div>

              <div className="flex justify-end pt-2">
                <button
                  onClick={handleReset}
                  className="px-4 py-2 bg-neutral-200 hover:bg-neutral-300 text-[#303030] font-bold text-xs rounded-md cursor-pointer transition-colors"
                >
                  Close Window
                </button>
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmit} noValidate className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                {/* Full Name */}
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-[#303030] mb-1">
                    Full Name <span className="text-[#FF662C]">*</span>
                  </label>
                  <input
                    type="text"
                    value={fullName}
                    onChange={(e) => setFullName(e.target.value)}
                    placeholder="e.g. Kwabena Asante"
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

                {/* Phone Number */}
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-[#303030] mb-1">
                    Phone Number <span className="text-[#FF662C]">*</span>
                  </label>
                  <input
                    type="tel"
                    value={phoneNumber}
                    onChange={(e) => setPhoneNumber(e.target.value)}
                    placeholder="e.g. 0244 000 000"
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

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                {/* Equipment Required */}
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-[#303030] mb-1">
                    Equipment Required <span className="text-[#FF662C]">*</span>
                  </label>
                  <select
                    value={equipmentRequired}
                    onChange={(e) => setEquipmentRequired(e.target.value)}
                    className="w-full px-3 py-2 text-sm rounded-md border border-neutral-300 bg-white focus:outline-none focus:ring-2 focus:ring-[#FF662C] cursor-pointer"
                  >
                    {EQUIPMENT_CATEGORIES.map((eq) => (
                      <option key={eq.id} value={eq.displayName}>
                        {eq.displayName}
                      </option>
                    ))}
                  </select>
                </div>

                {/* Location of Project */}
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-[#303030] mb-1">
                    Location of Project <span className="text-[#FF662C]">*</span>
                  </label>
                  <input
                    type="text"
                    value={projectLocation}
                    onChange={(e) => setProjectLocation(e.target.value)}
                    placeholder="e.g. Tema Community 25, Kpone, Accra"
                    className={`w-full px-3 py-2 text-sm rounded-md border bg-white focus:outline-none focus:ring-2 focus:ring-[#FF662C] ${
                      errors.projectLocation ? 'border-red-500 bg-red-50/20' : 'border-neutral-300'
                    }`}
                  />
                  {errors.projectLocation && (
                    <p className="text-red-600 text-xs mt-1 flex items-center gap-1">
                      <AlertCircle className="w-3.5 h-3.5 shrink-0" />
                      {errors.projectLocation}
                    </p>
                  )}
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                {/* Intended Project or Construction Application */}
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-[#303030] mb-1">
                    Intended Project / Application
                  </label>
                  <input
                    type="text"
                    value={intendedProject}
                    onChange={(e) => setIntendedProject(e.target.value)}
                    placeholder="e.g. Foundation digging, site levelling, roadwork"
                    className="w-full px-3 py-2 text-sm rounded-md border border-neutral-300 bg-white focus:outline-none focus:ring-2 focus:ring-[#FF662C]"
                  />
                </div>

                {/* Expected Rental Duration */}
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-[#303030] mb-1">
                    Expected Duration
                  </label>
                  <select
                    value={expectedDuration}
                    onChange={(e) => setExpectedDuration(e.target.value)}
                    className="w-full px-3 py-2 text-sm rounded-md border border-neutral-300 bg-white focus:outline-none focus:ring-2 focus:ring-[#FF662C] cursor-pointer"
                  >
                    <option value="Daily / 1 - 3 Days">Daily / 1 - 3 Days</option>
                    <option value="1 - 2 Weeks">1 - 2 Weeks</option>
                    <option value="1 Month">1 Month</option>
                    <option value="Multi-Month Project">Multi-Month Project</option>
                    <option value="To Be Determined">To Be Determined</option>
                  </select>
                </div>
              </div>

              {/* Rental Start Date */}
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-[#303030] mb-1">
                  Target Rental Start Date
                </label>
                <input
                  type="date"
                  value={rentalStartDate}
                  onChange={(e) => setRentalStartDate(e.target.value)}
                  className="w-full px-3 py-2 text-sm rounded-md border border-neutral-300 bg-white focus:outline-none focus:ring-2 focus:ring-[#FF662C]"
                />
              </div>

              {/* Additional Information */}
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-[#303030] mb-1">
                  Additional Information
                </label>
                <textarea
                  rows={2}
                  value={additionalInfo}
                  onChange={(e) => setAdditionalInfo(e.target.value)}
                  placeholder="Provide access constraints, soil conditions, or project notes..."
                  className="w-full px-3 py-2 text-sm rounded-md border border-neutral-300 bg-white focus:outline-none focus:ring-2 focus:ring-[#FF662C]"
                />
              </div>

              <div className="pt-2 flex flex-col sm:flex-row items-center justify-between gap-3">
                <span className="text-[11px] text-neutral-500">
                  Direct Dispatch: <strong className="text-[#303030]">{COMPANY_DETAILS.phone}</strong>
                </span>
                <div className="flex items-center gap-2 w-full sm:w-auto">
                  <button
                    type="button"
                    onClick={onClose}
                    className="flex-1 sm:flex-none px-4 py-2.5 text-xs font-bold text-neutral-600 hover:text-[#303030] bg-neutral-100 hover:bg-neutral-200 rounded-md transition-colors cursor-pointer"
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    className="flex-1 sm:flex-none px-5 py-2.5 text-xs font-bold text-white bg-[#FF662C] hover:bg-[#E0531D] rounded-md shadow-sm transition-colors cursor-pointer inline-flex items-center justify-center gap-1.5"
                  >
                    <Truck className="w-3.5 h-3.5" />
                    <span>Submit Rental Inquiry</span>
                  </button>
                </div>
              </div>
            </form>
          )}
        </div>
      </div>
    </div>
  );
};
