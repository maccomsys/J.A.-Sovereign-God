import React from 'react';
import { X, HardHat } from 'lucide-react';
import { TrainingRegistrationForm } from './TrainingRegistrationForm';

interface TrainingRegistrationModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialEquipment?: string;
}

export const TrainingRegistrationModal: React.FC<TrainingRegistrationModalProps> = ({
  isOpen,
  onClose,
  initialEquipment,
}) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-black/60 backdrop-blur-xs flex items-center justify-center p-4">
      <div className="bg-white rounded-xl shadow-2xl max-w-2xl w-full border border-neutral-300 overflow-hidden animate-in fade-in zoom-in-95 duration-150 relative">
        <div className="bg-[#303030] text-white px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-2.5">
            <div className="w-8 h-8 rounded-md bg-[#FF662C] flex items-center justify-center text-white">
              <HardHat className="w-4 h-4" />
            </div>
            <div>
              <h3 className="font-bold text-base sm:text-lg">Operator Training Registration</h3>
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

        <div className="p-4 sm:p-6 max-h-[85vh] overflow-y-auto">
          <TrainingRegistrationForm initialEquipment={initialEquipment} />
        </div>
      </div>
    </div>
  );
};
