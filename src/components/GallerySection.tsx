import React, { useState } from 'react';
import { EQUIPMENT_CATEGORIES } from '../data/companyData';
import { Truck } from 'lucide-react';

interface GallerySectionProps {
  onRequestRental?: (equipmentId: string) => void;
}

export const GallerySection: React.FC<GallerySectionProps> = ({ onRequestRental }) => {
  const [selectedFilter, setSelectedFilter] = useState<string>('all');

  // Filter equipment categories
  const filteredEquipment =
    selectedFilter === 'all'
      ? EQUIPMENT_CATEGORIES
      : EQUIPMENT_CATEGORIES.filter((eq) => eq.id === selectedFilter);

  return (
    <section id="gallery" className="py-16 sm:py-20 bg-neutral-50 border-b border-neutral-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        <div className="text-center max-w-2xl mx-auto mb-10">
          <div className="inline-flex items-center gap-2 text-xs font-bold text-[#FF662C] uppercase tracking-wider mb-2">
            <Truck className="w-4 h-4 text-[#FF662C]" />
            <span>Heavy Machinery Gallery</span>
          </div>
          <h2 className="text-2xl sm:text-4xl font-extrabold text-[#303030] tracking-tight">
            Construction Equipment in Action
          </h2>
          <p className="text-neutral-600 text-sm sm:text-base mt-2">
            Visual overview of our heavy construction equipment fleet available for rental, project services, and operator training in Tema, Ghana.
          </p>
        </div>

        {/* Category Filters */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-10">
          <button
            onClick={() => setSelectedFilter('all')}
            className={`px-3.5 py-1.5 rounded-md text-xs font-bold transition-colors cursor-pointer ${
              selectedFilter === 'all'
                ? 'bg-[#FF662C] text-white'
                : 'bg-white text-[#303030] hover:bg-neutral-200 border border-neutral-300'
            }`}
          >
            All Categories ({EQUIPMENT_CATEGORIES.length})
          </button>
          {EQUIPMENT_CATEGORIES.map((eq) => (
            <button
              key={eq.id}
              onClick={() => setSelectedFilter(eq.id)}
              className={`px-3 py-1.5 rounded-md text-xs font-semibold transition-colors cursor-pointer ${
                selectedFilter === eq.id
                  ? 'bg-[#FF662C] text-white'
                  : 'bg-white text-[#303030] hover:bg-neutral-200 border border-neutral-300'
              }`}
            >
              {eq.displayName} ({eq.images.length})
            </button>
          ))}
        </div>

        {/* Gallery Grid of Images */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredEquipment.flatMap((eq) =>
            eq.images.map((imgUrl, idx) => (
              <div
                key={`${eq.id}-${idx}`}
                className="bg-white rounded-lg border border-neutral-300 overflow-hidden shadow-xs hover:shadow-md transition-all group flex flex-col"
              >
                <div className="relative aspect-[16/10] overflow-hidden bg-neutral-900">
                  <img
                    src={imgUrl}
                    alt={`${eq.displayName} - J.A. Sovereign God Limited`}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    loading="lazy"
                  />
                  <div className="absolute bottom-2 left-2 bg-[#303030]/90 backdrop-blur-xs text-white text-[11px] font-bold px-2.5 py-1 rounded">
                    {eq.displayName}
                  </div>
                </div>
                <div className="p-3.5 flex items-center justify-between text-xs border-t border-neutral-100">
                  <span className="text-neutral-500 font-medium">
                    Photo {idx + 1} of {eq.images.length}
                  </span>
                  {onRequestRental && (
                    <button
                      onClick={() => onRequestRental(eq.id)}
                      className="text-[#FF662C] hover:text-[#E0531D] font-bold cursor-pointer"
                    >
                      Inquire Machine &rarr;
                    </button>
                  )}
                </div>
              </div>
            ))
          )}
        </div>
      </div>
    </section>
  );
};
