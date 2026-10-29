import React, { useState } from 'react';
import { Phone, AlertCircle, Info, HardHat, Check } from 'lucide-react';
import { COMPANY_DETAILS, TRAINING_EQUIPMENT_OPTIONS } from '../data/companyData';
import { TrainingExperienceLevel } from '../types';

interface TrainingRegistrationFormProps {
  initialEquipment?: string;
  onSuccessNoticeClose?: () => void;
}

export const TrainingRegistrationForm: React.FC<TrainingRegistrationFormProps> = ({
  initialEquipment,
}) => {
  const [fullName, setFullName] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [email, setEmail] = useState('');
  const [preferredEquipment, setPreferredEquipment] = useState(
    initialEquipment || TRAINING_EQUIPMENT_OPTIONS[0]
  );
  const [trainingExperience, setTrainingExperience] = useState<TrainingExperienceLevel>('Beginner');
  const [preferredDate, setPreferredDate] = useState('');
  const [additionalInfo, setAdditionalInfo] = useState('');
  const [consent, setConsent] = useState(false);

  const [errors, setErrors] = useState<{ [key: string]: string }>({});
  const [demoNoticeSubmitted, setDemoNoticeSubmitted] = useState(false);

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
    if (!preferredEquipment) {
      newErrors.preferredEquipment = 'Please select a preferred training equipment.';
    }
    if (!consent) {
      newErrors.consent = 'You must confirm consent before submitting.';
    }

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      setDemoNoticeSubmitted(false);
      return;
    }

    setErrors({});
    // Prompt instruction:
    // "Display appropriate validation messages and a clear explanation that the form is a demonstration and does not transmit or permanently save the registration.
    // Do not show a successful registration or booking confirmation that could mislead visitors into believing their inquiry has been received.
    // Include an alternative instruction to call 0244 406 085 or 0267 030 688 to complete the inquiry.
    // Do not store personal information in local storage, session storage, or browser cookies."
    setDemoNoticeSubmitted(true);
  };

  const handleReset = () => {
    setFullName('');
    setPhoneNumber('');
    setEmail('');
    setPreferredEquipment(TRAINING_EQUIPMENT_OPTIONS[0]);
    setTrainingExperience('Beginner');
    setPreferredDate('');
    setAdditionalInfo('');
    setConsent(false);
    setDemoNoticeSubmitted(false);
    setErrors({});
  };

  return (
    <div className="bg-white rounded-xl border border-neutral-300 p-6 sm:p-8 shadow-sm">
      <div className="mb-6 border-b border-neutral-200 pb-4">
        <div className="inline-flex items-center gap-2 text-xs font-bold text-[#FF662C] uppercase tracking-wider mb-1">
          <HardHat className="w-4 h-4 text-[#FF662C]" />
          <span>Operator Training Inquiry</span>
        </div>
        <h3 className="text-xl sm:text-2xl font-bold text-[#303030]">
          Register for Practical Equipment Training
        </h3>
        <p className="text-neutral-600 text-sm mt-1">
          Learn how to operate heavy construction machinery with practical hands-on training in Tema, Ghana.
        </p>
      </div>

      {demoNoticeSubmitted ? (
        <div className="bg-neutral-50 border-2 border-[#FF662C] rounded-lg p-6 space-y-4 animate-in fade-in duration-200">
          <div className="flex items-start gap-3">
            <Info className="w-6 h-6 text-[#FF662C] shrink-0 mt-0.5" />
            <div className="space-y-2">
              <h4 className="font-bold text-lg text-[#303030]">
                Frontend Demonstration Notice
              </h4>
              <p className="text-sm text-neutral-700 leading-relaxed">
                This website form is a <strong>frontend demonstration</strong>. To ensure accurate scheduling and protect applicant data, this form <strong>does not transmit or permanently save</strong> your registration details. No automated booking has been created.
              </p>
              <div className="p-3 bg-white border border-neutral-300 rounded-md">
                <p className="text-xs font-semibold text-neutral-500 uppercase tracking-wide">
                  Form Entry Summary (Not Saved):
                </p>
                <p className="text-sm font-medium text-[#303030] mt-1">
                  <strong>Name:</strong> {fullName} | <strong>Equipment:</strong> {preferredEquipment} | <strong>Level:</strong> {trainingExperience}
                </p>
              </div>
              <p className="text-sm font-semibold text-[#303030]">
                To complete your practical training inquiry, please call our Tema dispatch team directly:
              </p>
              <div className="flex flex-wrap gap-3 pt-1">
                <a
                  href={`tel:${COMPANY_DETAILS.phoneRaw}`}
                  className="inline-flex items-center gap-2 bg-[#FF662C] hover:bg-[#E0531D] text-white px-4 py-2.5 rounded-md text-sm font-bold shadow-sm transition-all"
                >
                  <Phone className="w-4 h-4" />
                  <span>Call {COMPANY_DETAILS.phone}</span>
                </a>
                <a
                  href={`tel:${COMPANY_DETAILS.secondaryPhoneRaw}`}
                  className="inline-flex items-center gap-2 bg-[#303030] hover:bg-[#202020] text-white px-4 py-2.5 rounded-md text-sm font-bold shadow-sm transition-all"
                >
                  <Phone className="w-4 h-4 text-[#FF662C]" />
                  <span>Call {COMPANY_DETAILS.secondaryPhone}</span>
                </a>
              </div>
            </div>
          </div>
          <div className="pt-2 border-t border-neutral-200 flex justify-end">
            <button
              onClick={handleReset}
              className="text-xs font-bold text-neutral-600 hover:text-[#FF662C] underline cursor-pointer"
            >
              Reset Form
            </button>
          </div>
        </div>
      ) : (
        <form onSubmit={handleSubmit} noValidate className="space-y-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {/* Full Name */}
            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-[#303030] mb-1.5">
                Full Name <span className="text-[#FF662C]">*</span>
              </label>
              <input
                type="text"
                value={fullName}
                onChange={(e) => setFullName(e.target.value)}
                placeholder="e.g. Samuel Mensah"
                className={`w-full px-3.5 py-2.5 rounded-md border text-sm text-[#303030] bg-white focus:outline-none focus:ring-2 focus:ring-[#FF662C] transition-colors ${
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
              <label className="block text-xs font-bold uppercase tracking-wider text-[#303030] mb-1.5">
                Phone Number <span className="text-[#FF662C]">*</span>
              </label>
              <input
                type="tel"
                value={phoneNumber}
                onChange={(e) => setPhoneNumber(e.target.value)}
                placeholder="e.g. 0244 000 000"
                className={`w-full px-3.5 py-2.5 rounded-md border text-sm text-[#303030] bg-white focus:outline-none focus:ring-2 focus:ring-[#FF662C] transition-colors ${
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

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {/* Email Address (optional) */}
            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-[#303030] mb-1.5">
                Email Address <span className="text-neutral-400 font-normal">(Optional)</span>
              </label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="name@example.com"
                className="w-full px-3.5 py-2.5 rounded-md border border-neutral-300 text-sm text-[#303030] bg-white focus:outline-none focus:ring-2 focus:ring-[#FF662C] transition-colors"
              />
            </div>

            {/* Preferred Training Equipment (required dropdown) */}
            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-[#303030] mb-1.5">
                Preferred Equipment <span className="text-[#FF662C]">*</span>
              </label>
              <select
                value={preferredEquipment}
                onChange={(e) => setPreferredEquipment(e.target.value)}
                className={`w-full px-3.5 py-2.5 rounded-md border text-sm text-[#303030] bg-white focus:outline-none focus:ring-2 focus:ring-[#FF662C] transition-colors cursor-pointer ${
                  errors.preferredEquipment ? 'border-red-500 bg-red-50/20' : 'border-neutral-300'
                }`}
              >
                {TRAINING_EQUIPMENT_OPTIONS.map((item) => (
                  <option key={item} value={item}>
                    {item}
                  </option>
                ))}
              </select>
              {errors.preferredEquipment && (
                <p className="text-red-600 text-xs mt-1 flex items-center gap-1">
                  <AlertCircle className="w-3.5 h-3.5 shrink-0" />
                  {errors.preferredEquipment}
                </p>
              )}
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {/* Training Experience */}
            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-[#303030] mb-1.5">
                Training Experience <span className="text-[#FF662C]">*</span>
              </label>
              <select
                value={trainingExperience}
                onChange={(e) => setTrainingExperience(e.target.value as TrainingExperienceLevel)}
                className="w-full px-3.5 py-2.5 rounded-md border border-neutral-300 text-sm text-[#303030] bg-white focus:outline-none focus:ring-2 focus:ring-[#FF662C] transition-colors cursor-pointer"
              >
                <option value="Beginner">Beginner (No prior operating experience)</option>
                <option value="Some Previous Experience">Some Previous Experience</option>
                <option value="Experienced Operator">Experienced Operator (Refresher/Skill Up)</option>
              </select>
            </div>

            {/* Preferred Training Date (optional) */}
            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-[#303030] mb-1.5">
                Preferred Start Date <span className="text-neutral-400 font-normal">(Optional)</span>
              </label>
              <input
                type="date"
                value={preferredDate}
                onChange={(e) => setPreferredDate(e.target.value)}
                className="w-full px-3.5 py-2.5 rounded-md border border-neutral-300 text-sm text-[#303030] bg-white focus:outline-none focus:ring-2 focus:ring-[#FF662C] transition-colors"
              />
            </div>
          </div>

          {/* Additional Information (optional) */}
          <div>
            <label className="block text-xs font-bold uppercase tracking-wider text-[#303030] mb-1.5">
              Additional Information <span className="text-neutral-400 font-normal">(Optional)</span>
            </label>
            <textarea
              rows={3}
              value={additionalInfo}
              onChange={(e) => setAdditionalInfo(e.target.value)}
              placeholder="Tell us about your learning goals or specific scheduling inquiries..."
              className="w-full px-3.5 py-2.5 rounded-md border border-neutral-300 text-sm text-[#303030] bg-white focus:outline-none focus:ring-2 focus:ring-[#FF662C] transition-colors"
            />
          </div>

          {/* Consent Checkbox */}
          <div className="pt-1">
            <label className="flex items-start gap-2.5 cursor-pointer">
              <input
                type="checkbox"
                checked={consent}
                onChange={(e) => setConsent(e.target.checked)}
                className="mt-1 h-4 w-4 rounded border-neutral-300 text-[#FF662C] focus:ring-[#FF662C] accent-[#FF662C]"
              />
              <span className="text-xs text-neutral-700 leading-relaxed">
                I confirm that the information provided may be used to respond to this training inquiry.
                <span className="text-[#FF662C] ml-1 font-bold">*</span>
              </span>
            </label>
            {errors.consent && (
              <p className="text-red-600 text-xs mt-1 flex items-center gap-1">
                <AlertCircle className="w-3.5 h-3.5 shrink-0" />
                {errors.consent}
              </p>
            )}
          </div>

          {/* Submit Button & Call Alternative */}
          <div className="pt-2 flex flex-col sm:flex-row items-center gap-3">
            <button
              type="submit"
              className="w-full sm:w-auto bg-[#FF662C] hover:bg-[#E0531D] text-white font-bold px-6 py-3 rounded-md shadow-sm hover:shadow transition-all inline-flex items-center justify-center gap-2 cursor-pointer"
            >
              <HardHat className="w-4 h-4" />
              <span>Submit Training Inquiry</span>
            </button>
            <span className="text-xs text-neutral-500">
              Or call dispatch directly at <strong className="text-[#303030]">{COMPANY_DETAILS.phone}</strong>
            </span>
          </div>
        </form>
      )}
    </div>
  );
};
