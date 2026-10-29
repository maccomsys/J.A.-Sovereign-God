import React from 'react';
import { Truck, Wrench, HardHat, ArrowRight } from 'lucide-react';

interface CoreServicesSectionProps {
  onNavigateRental: () => void;
  onNavigateServices: () => void;
  onNavigateTraining: () => void;
}

export const CoreServicesSection: React.FC<CoreServicesSectionProps> = ({
  onNavigateRental,
  onNavigateServices,
  onNavigateTraining,
}) => {
  const services = [
    {
      id: 'rental',
      title: 'Heavy Construction Equipment Rental',
      description:
        'Rental of heavy construction machinery including excavators, bulldozers, graders, rollers, and backhoes for civil, infrastructure, and commercial sites in Tema and across Ghana.',
      image: 'https://i.ibb.co/23pNNFxC/013-Bull-Dozer.jpg',
      icon: Truck,
      actionText: 'View Rental Machinery',
      action: onNavigateRental,
    },
    {
      id: 'services',
      title: 'Construction Equipment Services',
      description:
        'Professional heavy equipment services including excavation, bulk earthmoving, land clearing, precision ground levelling, soil compaction, trenching, and hard ground ripping.',
      image: 'https://i.ibb.co/Y71XpTBg/021-Grader.jpg',
      icon: Wrench,
      actionText: 'Explore Equipment Services',
      action: onNavigateServices,
    },
    {
      id: 'training',
      title: 'Equipment Operation Training',
      description:
        'Practical training on how to operate heavy construction machinery. Hands-on learning covering machine controls, safety checks, and practical site operating techniques in Tema.',
      image: 'https://i.ibb.co/RGKGpZdD/001-Backhoe-Backshovel.jpg',
      icon: HardHat,
      actionText: 'Learn About Training',
      action: onNavigateTraining,
    },
  ];

  return (
    <section className="py-16 sm:py-20 bg-neutral-50 border-b border-neutral-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 text-xs font-bold text-[#FF662C] uppercase tracking-wider mb-2">
            <span>What We Offer</span>
          </div>
          <h2 className="text-2xl sm:text-4xl font-extrabold text-[#303030] tracking-tight">
            Our Core Offerings
          </h2>
          <p className="text-neutral-600 text-sm sm:text-base mt-2">
            Professional heavy equipment rental, specialized construction machinery work, and practical equipment operator training in Tema, Ghana.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service) => {
            const Icon = service.icon;
            return (
              <div
                key={service.id}
                className="bg-white rounded-xl border border-neutral-300 overflow-hidden shadow-sm hover:shadow-md transition-shadow flex flex-col group"
              >
                {/* Image */}
                <div className="relative h-48 overflow-hidden bg-neutral-800">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    loading="lazy"
                  />
                  <div className="absolute top-3 left-3 bg-[#303030]/90 backdrop-blur-xs text-white p-2 rounded-md shadow">
                    <Icon className="w-5 h-5 text-[#FF662C]" />
                  </div>
                </div>

                {/* Content */}
                <div className="p-6 flex-1 flex flex-col justify-between">
                  <div>
                    <h3 className="text-lg font-bold text-[#303030] mb-2.5 leading-snug">
                      {service.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-neutral-600 leading-relaxed mb-6">
                      {service.description}
                    </p>
                  </div>

                  <button
                    onClick={service.action}
                    className="w-full inline-flex items-center justify-between font-bold text-xs sm:text-sm text-[#FF662C] hover:text-[#E0531D] py-2.5 px-3 bg-orange-50 hover:bg-orange-100 rounded-md transition-colors cursor-pointer"
                  >
                    <span>{service.actionText}</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
