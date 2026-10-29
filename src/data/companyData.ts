import { EquipmentCategory, ConstructionService } from '../types';

export const COMPANY_DETAILS = {
  name: 'J.A. Sovereign God Limited',
  shortName: 'J.A. Sovereign God',
  location: 'Tema, Ghana',
  city: 'Tema',
  country: 'Ghana',
  managingDirector: 'Alexander J.A. ACKAH',
  ownerTitle: 'Managing Director',
  phone: '0244 406 085',
  secondaryPhone: '0267 030 688',
  phoneRaw: '0244406085',
  secondaryPhoneRaw: '0267030688',
  phoneIntl: '+233244406085',
  secondaryPhoneIntl: '+233267030688',
  tagline: 'Heavy Construction Equipment Rental & Practical Operator Training',
  services: [
    'Rental of heavy construction machinery and equipment',
    'Construction equipment operation training',
    'Construction equipment services',
  ],
};

// All 10 Equipment Categories with Power Shovel combined into one category
export const EQUIPMENT_CATEGORIES: EquipmentCategory[] = [
  {
    id: 'backhoe-backshovel',
    name: 'Backhoe (Backshovel)',
    displayName: 'Backhoe (Backshovel)',
    primaryImage: 'https://i.ibb.co/RGKGpZdD/001-Backhoe-Backshovel.jpg',
    images: [
      'https://i.ibb.co/RGKGpZdD/001-Backhoe-Backshovel.jpg',
      'https://i.ibb.co/RGLzNTph/002-Backhoe-Backshovel.jpg',
    ],
    description:
      'Versatile dual-action machine equipped with a front loader bucket and rear excavator arm for trenching, loading, backfilling, and general site earthwork.',
    applications: [
      'Trenching for pipelines, cables, and utility installations',
      'Digging foundation footings and drainage ditches',
      'Backfilling trenches and spreading soil',
      'Material handling and light site clearing',
    ],
  },
  {
    id: 'excavator',
    name: 'Excavator',
    displayName: 'Excavator',
    primaryImage: 'https://i.ibb.co/RpmgF9YZ/003-Excavator.jpg',
    images: [
      'https://i.ibb.co/RpmgF9YZ/003-Excavator.jpg',
      'https://i.ibb.co/wZW0gdVW/004-Excavator.jpg',
      'https://i.ibb.co/wqmz7L5/005-Excavator.jpg',
    ],
    description:
      'Heavy-duty hydraulic crawler excavator with 360-degree rotation designed for deep digging, bulk earthmoving, foundation excavation, and heavy material loading.',
    applications: [
      'Deep foundation and basement excavation',
      'Bulk earthmoving and high-volume soil extraction',
      'Digging large canals, trenches, and drainage channels',
      'Demolition support and heavy debris removal',
    ],
  },
  {
    id: 'crawler-type-tractor',
    name: 'Crawler Type Tractor',
    displayName: 'Crawler Type Tractor',
    primaryImage: 'https://i.ibb.co/99CTVrbC/006-Crawler-Type-Tractor.jpg',
    images: [
      'https://i.ibb.co/99CTVrbC/006-Crawler-Type-Tractor.jpg',
      'https://i.ibb.co/Nd3NkzVV/007-Crawler-Type-Tractor.jpg',
      'https://i.ibb.co/gZVpc18H/008-Crawler-Type-Tractor.jpg',
      'https://i.ibb.co/kgsjVyYc/009-Crawler-Type-Tractor.jpg',
    ],
    description:
      'Robust continuous-track tractor delivering exceptional drawbar pull, stability, and ground adhesion over soft, muddy, rough, or steep construction terrain.',
    applications: [
      'Operating on challenging, soft, or steep slopes',
      'Heavy-duty towing of heavy construction implements',
      'Site pioneering and rough terrain clearing',
      'Pushing bulk materials in demanding site conditions',
    ],
  },
  {
    id: 'power-shovel',
    name: 'Power Shovel',
    displayName: 'Power Shovel',
    primaryImage: 'https://i.ibb.co/7JkWXvz3/010-Power-Shovel.jpg',
    images: [
      'https://i.ibb.co/7JkWXvz3/010-Power-Shovel.jpg',
      'https://i.ibb.co/spLrg5mm/031-Power-Shovel.jpg',
      'https://i.ibb.co/rf5GVVWM/032-Power-Shovel.jpg',
    ],
    description:
      'High-capacity front-loading shovel engineered for intensive excavation, quarry face digging, and high-volume material loading into haulage vehicles.',
    applications: [
      'High-capacity excavation of earth, gravel, and shot rock',
      'Rapid loading of heavy dump trucks and haulers',
      'Quarry and open-cut earthmoving operations',
      'Large-scale infrastructure and civil cut operations',
    ],
  },
  {
    id: 'smooth-wheeled-roller',
    name: 'Smooth Wheeled Roller',
    displayName: 'Smooth Wheeled Roller',
    primaryImage: 'https://i.ibb.co/rf3RLW1d/011-Smooth-Wheeled-Roller.jpg',
    images: [
      'https://i.ibb.co/rf3RLW1d/011-Smooth-Wheeled-Roller.jpg',
      'https://i.ibb.co/SDY9j2v4/012-Smooth-Wheeled-Roller.jpg',
    ],
    description:
      'Heavy compaction roller equipped with smooth steel drums to consolidate soils, gravel sub-bases, crushed rock layers, and bituminous road surfaces.',
    applications: [
      'Sub-base and base course compaction for roadways',
      'Soil consolidation and foundation subgrade leveling',
      'Compacting granular materials, gravel, and crushed stone',
      'Finishing surface layers for pavement and roadbeds',
    ],
  },
  {
    id: 'bulldozer',
    name: 'Bulldozer',
    displayName: 'Bulldozer',
    primaryImage: 'https://i.ibb.co/23pNNFxC/013-Bull-Dozer.jpg',
    images: [
      'https://i.ibb.co/23pNNFxC/013-Bull-Dozer.jpg',
      'https://i.ibb.co/nsCv8YdC/014-Bull-Dozer.jpg',
      'https://i.ibb.co/bTStW5p/015-Bull-Dozer.jpg',
      'https://i.ibb.co/VW05N6pM/016-Bull-Dozer.jpg',
    ],
    description:
      'Powerful tracked machine fitted with a heavy front blade to push large volumes of soil, sand, and rubble, and perform rough site grading.',
    applications: [
      'Land clearing, tree felling, and boulder pushing',
      'Stripping topsoil and overburden',
      'Rough grading and pushing bulk earth over short distances',
      'Opening preliminary access roads on construction sites',
    ],
  },
  {
    id: 'wheel-type-tractor',
    name: 'Wheel Type Tractor',
    displayName: 'Wheel Type Tractor',
    primaryImage: 'https://i.ibb.co/qF4cYcxX/017-Wheel-Type-Tractor.jpg',
    images: [
      'https://i.ibb.co/qF4cYcxX/017-Wheel-Type-Tractor.jpg',
      'https://i.ibb.co/YFkrjF9r/018-Wheel-Type-Tractor.jpg',
      'https://i.ibb.co/cckNLJ9Q/019-Wheel-Type-Tractor.jpg',
      'https://i.ibb.co/1YM7x1B5/020-Wheel-Type-Tractor.jpg',
    ],
    description:
      'Pneumatic-tired tractor delivering high maneuverability and travel speed across extended construction sites for hauling, towing, and utility tasks.',
    applications: [
      'Towing earthmoving wagons, scrapers, and water tankers',
      'Rapid transport between work zones on large job sites',
      'Light grading and utility maintenance work',
      'Site logistics support and trailer pulling',
    ],
  },
  {
    id: 'grader',
    name: 'Grader',
    displayName: 'Grader',
    primaryImage: 'https://i.ibb.co/Y71XpTBg/021-Grader.jpg',
    images: [
      'https://i.ibb.co/Y71XpTBg/021-Grader.jpg',
      'https://i.ibb.co/pHTSQGB/022-Grader.jpg',
      'https://i.ibb.co/1JYwRg2N/023-Grader.jpg',
      'https://i.ibb.co/ZpP7wJkT/024-Grader.jpg',
    ],
    description:
      'Precision motor grader equipped with an adjustable central moldboard blade for fine surface leveling, road crown formation, and accurate slope dressing.',
    applications: [
      'Fine grading and finishing of roadbeds and foundations',
      'Forming road crowns, cambers, and drainage contours',
      'Spreading and leveling gravel, sand, and crushed stone bases',
      'Bank cutting and side-slope profiling',
    ],
  },
  {
    id: 'ripper',
    name: 'Ripper',
    displayName: 'Ripper',
    primaryImage: 'https://i.ibb.co/sJDG6z6M/025-Ripper.jpg',
    images: [
      'https://i.ibb.co/sJDG6z6M/025-Ripper.jpg',
      'https://i.ibb.co/5gdxMsSS/026-Ripper.jpg',
      'https://i.ibb.co/HTdHYRTr/027-Ripper.jpg',
      'https://i.ibb.co/S7NnNKTd/028-Ripper.jpg',
      'https://i.ibb.co/wFmJ3pTx/029-Ripper.jpg',
      'https://i.ibb.co/MxP0z68J/030-Ripper.jpg',
    ],
    description:
      'Heavy-duty rear claw shank attachment designed to fracture compacted hardpan ground, break up rocky layers, and loosen dense subsoils before grading or excavation.',
    applications: [
      'Breaking up heavily compacted hardpan and rocky ground',
      'Fracturing weathered rock, shale, and stubborn strata',
      'Ripping deteriorated asphalt and hard pavements',
      'Loosening tough earth to prepare for scrapers and bulldozers',
    ],
  },
];

// Construction Services tailored to Section 4C
export const CONSTRUCTION_SERVICES: ConstructionService[] = [
  {
    id: 'excavation-earthmoving',
    title: 'Excavation & Earthmoving',
    shortDescription: 'Deep digging, bulk earth shifting, foundation cuts, and pit excavation.',
    fullDescription:
      'Heavy-duty earthmoving and excavation operations utilizing heavy excavators and high-capacity power shovels for structural foundations, trenches, basements, and bulk cut operations across construction developments.',
    matchedEquipment: ['Excavator', 'Power Shovel', 'Backhoe (Backshovel)'],
    image: 'https://i.ibb.co/RpmgF9YZ/003-Excavator.jpg',
  },
  {
    id: 'land-clearing',
    title: 'Land Clearing & Site Preparation',
    shortDescription: 'Clearing vegetation, stripping topsoil, pushing debris, and pioneering site access.',
    fullDescription:
      'Comprehensive site clearing and ground opening services. Heavy bulldozers and crawler tractors clear bush, trees, stumps, and surface rocks to prepare raw terrain for ongoing construction operations.',
    matchedEquipment: ['Bulldozer', 'Crawler Type Tractor'],
    image: 'https://i.ibb.co/23pNNFxC/013-Bull-Dozer.jpg',
  },
  {
    id: 'ground-levelling-grading',
    title: 'Ground Levelling & Grading',
    shortDescription: 'Precision surface leveling, crown profiling, and slope finishing.',
    fullDescription:
      'Engineered surface grading and site leveling with precision motor graders and wheeled tractors to achieve exact elevations, road cambers, and drainage contours across building pads and access corridors.',
    matchedEquipment: ['Grader', 'Wheel Type Tractor'],
    image: 'https://i.ibb.co/Y71XpTBg/021-Grader.jpg',
  },
  {
    id: 'soil-compaction',
    title: 'Soil Compaction & Road Preparation',
    shortDescription: 'Subgrade consolidation, gravel base compaction, and surface rolling.',
    fullDescription:
      'Mechanical compaction of soil subgrades, aggregate sub-bases, and road foundation layers using smooth wheeled rollers to build high-density, load-bearing platforms for roads and civil structures.',
    matchedEquipment: ['Smooth Wheeled Roller'],
    image: 'https://i.ibb.co/rf3RLW1d/011-Smooth-Wheeled-Roller.jpg',
  },
  {
    id: 'ripping-hard-ground',
    title: 'Ripping & Breaking Up Hard Ground',
    shortDescription: 'Fracturing hardpan ground, rock strata, shale, and old pavements.',
    fullDescription:
      'Tough claw ripping operations to break up dense hardpan, shale, rock strata, and stubbornly compacted soil layers so that subsequent excavation, grading, or dozing can proceed efficiently.',
    matchedEquipment: ['Ripper', 'Crawler Type Tractor'],
    image: 'https://i.ibb.co/sJDG6z6M/025-Ripper.jpg',
  },
  {
    id: 'trenching-backfilling',
    title: 'Trenching & Backfilling',
    shortDescription: 'Digging utility channels, drainage trenches, and controlled backfilling.',
    fullDescription:
      'Targeted trenching for electrical conduits, drainage pipes, and foundations, followed by systematic backfilling and spoil placement using backhoes and compact excavator arms.',
    matchedEquipment: ['Backhoe (Backshovel)', 'Excavator'],
    image: 'https://i.ibb.co/RGKGpZdD/001-Backhoe-Backshovel.jpg',
  },
  {
    id: 'general-heavy-equipment-support',
    title: 'General Heavy Equipment Support',
    shortDescription: 'Machinery coordination, site towing, spoil management, and project earthwork assistance.',
    fullDescription:
      'Integrated heavy equipment deployment supporting civil, industrial, and residential construction projects with the necessary tractors, haulers, and earthmoving units across Tema and surrounding areas.',
    matchedEquipment: ['Wheel Type Tractor', 'Crawler Type Tractor', 'Bulldozer'],
    image: 'https://i.ibb.co/qF4cYcxX/017-Wheel-Type-Tractor.jpg',
  },
];

// Equipment list for Training Registration Dropdown
export const TRAINING_EQUIPMENT_OPTIONS = [
  'Backhoe (Backshovel)',
  'Excavator',
  'Crawler Type Tractor',
  'Power Shovel',
  'Smooth Wheeled Roller',
  'Bulldozer',
  'Wheel Type Tractor',
  'Grader',
  'Ripper',
  'Other / Not Sure Yet',
];
