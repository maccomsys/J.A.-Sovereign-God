import React from 'react';
import { Phone, Truck, ArrowRight } from 'lucide-react';
import { EQUIPMENT_CATEGORIES, COMPANY_DETAILS } from '../data/companyData';
import { EquipmentImageGallery } from './EquipmentImageGallery';

interface MaterialsSectionProps {
  onRequestRental: (equipmentId: string) => void;
  onNavigateRental: () => void;
}

export const MaterialsSection: React.FC<MaterialsSectionProps> = ({
  onRequestRental,
  onNavigateRental,
}) => {
  return (
    <section id="equipment-catalog" className="py-16 sm:py-20 bg-white border-b border-neutral-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 text-xs font-bold text-[#FF662C] uppercase tracking-wider mb-2">
              <span>Machinery Catalogue</span>
            </div>
            <h2 className="text-2xl sm:text-4xl font-extrabold text-[#303030] tracking-tight">
              Featured Heavy Construction Equipment
            </h2>
            <p className="text-neutral-600 text-sm sm:text-base mt-2">
              Browse our complete range of heavy machinery available for project rental and practical equipment operation training in Tema, Ghana.
            </p>
          </div>

          <button
            onClick={onNavigateRental}
            className="inline-flex items-center gap-2 text-sm font-bold text-[#FF662C] hover:text-[#E0531D] cursor-pointer shrink-0"
          >
            <span>View All Equipment Categories</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>

        {/* Equipment Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {EQUIPMENT_CATEGORIES.map((equipment) => (
            <div
              key={equipment.id}
              className="bg-white rounded-xl border border-neutral-300 overflow-hidden shadow-sm hover:shadow-md transition-all flex flex-col justify-between"
            >
              <div>
                {/* Multi-Image Carousel / Gallery */}
                <EquipmentImageGallery
                  images={equipment.images}
                  equipmentName={equipment.displayName}
                />

                {/* Details */}
                <div className="p-5">
                  <div className="flex items-start justify-between gap-2 mb-2">
                    <h3 className="text-lg font-bold text-[#303030]">
                      {equipment.displayName}
                    </h3>
                  </div>

                  <p className="text-xs sm:text-sm text-neutral-600 leading-relaxed mb-4">
                    {equipment.description}
                  </p>

                  <div className="border-t border-neutral-100 pt-3">
                    <p className="text-[11px] font-bold uppercase tracking-wider text-neutral-500 mb-1.5">
                      Typical Construction Uses:
                    </p>
                    <ul className="text-xs text-neutral-600 space-y-1">
                      {equipment.applications.slice(0, 2).map((app, idx) => (
                        <li key={idx} className="flex items-start gap-1.5">
                          <span className="text-[#FF662C] font-bold leading-none mt-0.5">•</span>
                          <span>{app}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="p-5 pt-0">
                <div className="grid grid-cols-2 gap-2 pt-3 border-t border-neutral-200">
                  <button
                    onClick={() => onRequestRental(equipment.id)}
                    className="w-full bg-[#FF662C] hover:bg-[#E0531D] text-white font-bold py-2.5 px-3 rounded-md text-xs inline-flex items-center justify-center gap-1.5 transition-colors cursor-pointer shadow-sm"
                  >
                    <Truck className="w-3.5 h-3.5" />
                    <span>Request Rental</span>
                  </button>

                  <a
                    href={`tel:${COMPANY_DETAILS.phoneRaw}`}
                    className="w-full bg-[#303030] hover:bg-[#202020] text-white font-bold py-2.5 px-3 rounded-md text-xs inline-flex items-center justify-center gap-1.5 transition-colors text-center"
                  >
                    <Phone className="w-3.5 h-3.5 text-[#FF662C]" />
                    <span>Call Inquire</span>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
