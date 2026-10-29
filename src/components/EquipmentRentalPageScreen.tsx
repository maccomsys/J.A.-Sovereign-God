import React, { useState } from 'react';
import { Phone, Truck, Search, Filter } from 'lucide-react';
import { EQUIPMENT_CATEGORIES, COMPANY_DETAILS } from '../data/companyData';
import { EquipmentImageGallery } from './EquipmentImageGallery';

interface EquipmentRentalPageScreenProps {
  onNavigateHome: () => void;
  onNavigateAbout: () => void;
  onNavigateServices: () => void;
  onNavigateTraining: () => void;
  onNavigateContact: () => void;
  onRequestRental: (equipmentId: string) => void;
}

export const EquipmentRentalPageScreen: React.FC<EquipmentRentalPageScreenProps> = ({
  onRequestRental,
}) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedFilter, setSelectedFilter] = useState('all');

  const filteredList = EQUIPMENT_CATEGORIES.filter((eq) => {
    const matchesSearch =
      eq.displayName.toLowerCase().includes(searchQuery.toLowerCase()) ||
      eq.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
      eq.applications.some((app) => app.toLowerCase().includes(searchQuery.toLowerCase()));

    const matchesFilter = selectedFilter === 'all' || eq.id === selectedFilter;

    return matchesSearch && matchesFilter;
  });

  return (
    <div className="bg-white min-h-screen">
      {/* Page Header */}
      <div className="bg-[#303030] text-white py-14 sm:py-18 border-b border-neutral-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-8">
          <div className="inline-flex items-center gap-2 text-xs font-bold text-[#FF662C] uppercase tracking-wider mb-2">
            <span>Equipment Rental Catalogue</span>
          </div>
          <h1 className="text-3xl sm:text-5xl font-black text-white tracking-tight">
            Heavy Construction Machinery Rental
          </h1>
          <p className="text-neutral-300 text-sm sm:text-base mt-3 max-w-2xl">
            Browse our comprehensive heavy machinery categories available for project rental and site work in Tema and across Ghana.
          </p>
        </div>
      </div>

      {/* Main Content Area */}
      <div className="max-w-7xl mx-auto px-4 sm:px-8 py-12">
        {/* Controls: Search and Filter */}
        <div className="bg-neutral-50 rounded-xl p-4 sm:p-6 border border-neutral-300 mb-10">
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-4">
            {/* Search Input */}
            <div className="relative flex-1">
              <Search className="w-4 h-4 text-neutral-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search equipment by name or application..."
                className="w-full pl-10 pr-4 py-2.5 text-sm rounded-md border border-neutral-300 bg-white focus:outline-none focus:ring-2 focus:ring-[#FF662C]"
              />
            </div>

            {/* Quick Category Select */}
            <div className="flex items-center gap-2 shrink-0">
              <Filter className="w-4 h-4 text-neutral-500" />
              <select
                value={selectedFilter}
                onChange={(e) => setSelectedFilter(e.target.value)}
                className="px-3 py-2.5 text-sm rounded-md border border-neutral-300 bg-white text-[#303030] focus:outline-none focus:ring-2 focus:ring-[#FF662C] cursor-pointer"
              >
                <option value="all">All Machinery ({EQUIPMENT_CATEGORIES.length})</option>
                {EQUIPMENT_CATEGORIES.map((eq) => (
                  <option key={eq.id} value={eq.id}>
                    {eq.displayName}
                  </option>
                ))}
              </select>
            </div>
          </div>
        </div>

        {/* Equipment Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredList.map((equipment) => (
            <div
              key={equipment.id}
              className="bg-white rounded-xl border border-neutral-300 overflow-hidden shadow-xs hover:shadow-md transition-shadow flex flex-col justify-between"
            >
              <div>
                {/* Multi-Image Carousel / Gallery */}
                <EquipmentImageGallery
                  images={equipment.images}
                  equipmentName={equipment.displayName}
                />

                {/* Information */}
                <div className="p-6">
                  <div className="flex items-start justify-between gap-2 mb-2">
                    <h2 className="text-xl font-bold text-[#303030]">
                      {equipment.displayName}
                    </h2>
                  </div>

                  <p className="text-xs sm:text-sm text-neutral-600 leading-relaxed mb-4">
                    {equipment.description}
                  </p>

                  <div className="border-t border-neutral-200 pt-4">
                    <h3 className="text-xs font-bold uppercase tracking-wider text-neutral-700 mb-2">
                      Typical Construction Uses:
                    </h3>
                    <ul className="text-xs text-neutral-600 space-y-1.5">
                      {equipment.applications.map((app, idx) => (
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
              <div className="p-6 pt-0">
                <div className="grid grid-cols-2 gap-2.5 pt-4 border-t border-neutral-200">
                  <button
                    onClick={() => onRequestRental(equipment.id)}
                    className="w-full bg-[#FF662C] hover:bg-[#E0531D] text-white font-bold py-2.5 px-3 rounded-md text-xs sm:text-sm inline-flex items-center justify-center gap-1.5 transition-colors cursor-pointer shadow-sm"
                  >
                    <Truck className="w-4 h-4" />
                    <span>Request Rental</span>
                  </button>

                  <a
                    href={`tel:${COMPANY_DETAILS.phoneRaw}`}
                    className="w-full bg-[#303030] hover:bg-[#202020] text-white font-bold py-2.5 px-3 rounded-md text-xs sm:text-sm inline-flex items-center justify-center gap-1.5 transition-colors text-center"
                  >
                    <Phone className="w-3.5 h-3.5 text-[#FF662C]" />
                    <span>Call to Inquire</span>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Notice on Rental Pricing & Dispatch */}
        <div className="mt-14 bg-neutral-50 rounded-xl p-6 sm:p-8 border border-neutral-300">
          <div className="max-w-3xl">
            <h3 className="text-lg font-bold text-[#303030] mb-2">
              Rental Inquiries &amp; Site Dispatch
            </h3>
            <p className="text-xs sm:text-sm text-neutral-600 leading-relaxed">
              Rental rates and machine availability depend on site location, project duration, ground conditions, and machine operator arrangements. Contact our Tema office directly at{' '}
              <a
                href={`tel:${COMPANY_DETAILS.phoneRaw}`}
                className="text-[#FF662C] font-bold underline font-mono"
              >
                {COMPANY_DETAILS.phone}
              </a>{' '}
              or{' '}
              <a
                href={`tel:${COMPANY_DETAILS.secondaryPhoneRaw}`}
                className="text-[#FF662C] font-bold underline font-mono"
              >
                {COMPANY_DETAILS.secondaryPhone}
              </a>{' '}
              to discuss your specific site requirements and schedule equipment dispatch.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
