export interface ServiceItem {
  id: string;
  title: string;
  description: string;
  features: string[];
  details: string;
  iconName: string;
}

export interface VesselItem {
  id: string;
  name: string;
  image: string;
  specs: string;
  description: string;
}

export interface StepItem {
  step: number;
  title: string;
  desc: string;
  iconName: string;
}

export interface JobItem {
  id: string;
  title: string;
  rank: 'captain' | 'chief-engineer' | 'officer' | 'rating';
  vesselType: string;
  contractDuration: string;
  location: string;
  postedDate: string;
  salary: string;
  description: string;
  requirements: string[];
}

export interface GalleryItem {
  id: string;
  title: string;
  category: string;
  description: string;
  src: string;
  alt: string;
}

export interface TeamMember {
  id: string;
  name: string;
  title: string;
  photo: string;
  bio: string;
  linkedin: string;
  email: string;
}

export interface FAQItem {
  question: string;
  answer: string;
}

export interface TestimonialItem {
  quote: string;
  author: string;
  company: string;
  role: string;
  vesselType: string;
}

export const statisticsData = [
  { number: '500+', label: 'Seafarers Deployed', iconName: 'Users' },
  { number: '15+', label: 'Vessel Types Managed', iconName: 'Ship' },
  { number: '100%', label: 'STCW Compliance Rate', iconName: 'Shield' },
  { number: '10+', label: 'Years Global Experience', iconName: 'Award' },
];

export const whyChooseUsData = [
  {
    title: 'Certified & STCW Compliant',
    desc: 'All seafarers undergo strict verification adhering strictly to MLC 2006 and STCW standards.',
    iconName: 'ShieldCheck',
  },
  {
    title: 'Global Crewing Network',
    desc: 'Extensive database of experienced officers and ratings ready for immediate global deployment.',
    iconName: 'Globe',
  },
  {
    title: '24/7 Operations Support',
    desc: 'Round-the-clock emergency support and crew mobilization for international shipowners.',
    iconName: 'Clock',
  },
  {
    title: 'End-to-End Management',
    desc: 'Comprehensive services covering recruitment, visa processing, travel logistics, and payroll.',
    iconName: 'Compass',
  },
];

export const servicesData: ServiceItem[] = [
  {
    id: 'crew-recruitment',
    title: 'Crew Recruitment & Selection',
    description: 'Strategic sourcing and evaluation of qualified officers and ratings tailored to specific vessel requirements.',
    features: ['Rigorous technical screening', 'Comprehensive background check', 'English proficiency assessment'],
    details: 'Our crew recruitment process combines deep maritime expertise with rigorous competency evaluations. We verify all STCW certificates, sea time logbooks, and medical fitness records to match top-tier seafarers with prestigious shipowners.',
    iconName: 'UserPlus',
  },
  {
    id: 'crew-management',
    title: 'Full Crew Management',
    description: 'Complete operational management of crew rotations, welfare, performance monitoring, and contract admin.',
    features: ['Contract administration', 'Performance evaluations', 'Rotational scheduling'],
    details: 'We handle complete crew complement management for bulk carriers, tankers, and container ships. From contract execution to relief planning and crew welfare, we guarantee smooth vessel operation.',
    iconName: 'Users',
  },
  {
    id: 'document-compliance',
    title: 'Document & Flag State Verification',
    description: 'End-to-end processing of flag state endorsements, visa logistics, and regulatory compliance.',
    features: ['Panama, Marshall Islands, Liberia endorsements', 'C1/D & Schengen visa assistance', 'MLC 2006 compliance auditing'],
    details: 'Navigating maritime regulations can be complex. AZHELIA SHIPPING ensures full compliance with international flag state administrations and international maritime law.',
    iconName: 'FileCheck',
  },
  {
    id: 'maritime-training',
    title: 'Maritime Training & Upgrading',
    description: 'Pre-deployment briefing, safety refresher courses, and specialized technical skill enhancements.',
    features: ['Bridge Resource Management (BRM)', 'Engine Room Resource Management (ERM)', 'Safety & Survival refresher'],
    details: 'We prepare crew members thoroughly before mobilization through customized safety briefings, environmental policy orientation, and company-specific SMS procedures.',
    iconName: 'GraduationCap',
  },
  {
    id: 'payroll-services',
    title: 'Crew Payroll & Allotment Management',
    description: 'Secure multi-currency payroll processing, family allotment transfers, and transparent financial reporting.',
    features: ['Direct multi-bank transfers', 'Tax & insurance compliance', 'On-time monthly allotments'],
    details: 'Our automated payroll system guarantees timely monthly salary payments and family allotment transfers, keeping crew morale high and compliant with MLC guidelines.',
    iconName: 'CreditCard',
  },
  {
    id: 'travel-logistics',
    title: 'Crew Travel & Mobilization',
    description: 'Seamless international travel booking, airport transfers, port agency coordination, and emergency logistics.',
    features: ['Marine fare ticket booking', 'Port agent coordination', '24/7 travel emergency desk'],
    details: 'We partner with leading marine travel agencies to secure flexible seaman fares and ensure frictionless crew sign-on and sign-off at ports worldwide.',
    iconName: 'Plane',
  },
];

export const vesselTypesData: VesselItem[] = [
  {
    id: 'bulk-carrier',
    name: 'Bulk Carrier',
    image: 'https://images.unsplash.com/photo-1559136555-9303baea8ebd?auto=format&fit=crop&w=1200&q=80',
    specs: 'Handysize to Capesize (40,000 - 180,000 DWT)',
    description: 'We supply skilled Deck and Engine crew with extensive experience operating modern gearless and geared bulk carriers carrying dry bulk cargoes.',
  },
  {
    id: 'tanker',
    name: 'Oil & Chemical Tanker',
    image: 'https://images.unsplash.com/photo-1518709268805-4e9042af9f23?auto=format&fit=crop&w=1200&q=80',
    specs: 'Product, Crude & Chemical (10,000 - 320,000 DWT)',
    description: 'Specialized tanker crews holding Advanced Oil/Chemical Tanker endorsements, well-trained in SIRE vetting standards and cargo handling safety.',
  },
  {
    id: 'container',
    name: 'Container Vessel',
    image: 'https://images.unsplash.com/photo-1578575437130-527eed3abbec?auto=format&fit=crop&w=1200&q=80',
    specs: 'Feeder to Ultra Large Container Vessel (1,000 - 24,000 TEU)',
    description: 'Fast-paced container operations require agile seafarers proficient in reefer monitoring, lashing inspection, and tight port turnaround schedules.',
  },
  {
    id: 'mpp',
    name: 'Multi-Purpose Cargo (MPP)',
    image: 'https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?auto=format&fit=crop&w=1200&q=80',
    specs: 'Heavy Lift & Project Cargo (5,000 - 30,000 DWT)',
    description: 'Deck officers skilled in heavy-lift cargo stowage, securing calculation, and crane operations.',
  },
  {
    id: 'lpg',
    name: 'LPG / Gas Carrier',
    image: 'https://images.unsplash.com/photo-1509316975850-ff9c5deb0cd9?auto=format&fit=crop&w=1200&q=80',
    specs: 'Pressurized & Fully Refrigerated (5,000 - 84,000 CBM)',
    description: 'Gas tanker specialists experienced in cryogenic liquid handling, inert gas systems, and strict SIGTTO safety guidelines.',
  },
  {
    id: 'general-cargo',
    name: 'General Cargo Vessel',
    image: 'https://images.unsplash.com/photo-1494412574643-ff11b0a5c1c3?auto=format&fit=crop&w=1200&q=80',
    specs: 'Versatile Fleet (3,000 - 25,000 DWT)',
    description: 'Adaptable seafarers capable of managing diverse breakbulk, timber, and steel coil shipments safely.',
  },
];

export const recruitmentStepsData: StepItem[] = [
  {
    step: 1,
    title: 'Application & CV Submission',
    desc: 'Submit your updated resume, sea logbook, and STCW certificates online or at our Jakarta office.',
    iconName: 'FileText',
  },
  {
    step: 2,
    title: 'Screening & Verification',
    desc: 'Our crewing team verifies certificate authenticity with government portals and checks sea service records.',
    iconName: 'Search',
  },
  {
    step: 3,
    title: 'Technical & CES Interview',
    desc: 'Technical competency evaluation conducted by experienced Master Mariners and Chief Engineers.',
    iconName: 'Users',
  },
  {
    step: 4,
    title: 'Medical Check-Up',
    desc: 'Comprehensive medical assessment at approved medical centers conforming to WHO & ILO standards.',
    iconName: 'Activity',
  },
  {
    step: 5,
    title: 'Pre-Deployment Briefing',
    desc: 'Familiarization with shipowner SMS policies, safety culture, and contract signing.',
    iconName: 'GraduationCap',
  },
  {
    step: 6,
    title: 'Deployment & Sign-On',
    desc: 'Flight arrangement, flag state endorsement issuance, and seamless mobilization to vessel port.',
    iconName: 'Plane',
  },
];

export const jobsData: JobItem[] = [
  {
    id: 'job-1',
    title: 'Master / Captain',
    rank: 'captain',
    vesselType: 'Bulk Carrier (Panamax)',
    contractDuration: '4 - 6 Months',
    location: 'Worldwide Trading',
    postedDate: '2 Days Ago',
    salary: '$8,500 - $9,500 / month',
    description: 'Seeking an experienced Master with minimum 24 months sea time in rank on Capesize/Panamax Bulk Carriers.',
    requirements: ['Master Unlimited Certificate (Class 1)', 'Valid STCW 2010 refresher', 'Clean safety record & positive principal references'],
  },
  {
    id: 'job-2',
    title: 'Chief Engineer',
    rank: 'chief-engineer',
    vesselType: 'Oil / Chemical Tanker',
    contractDuration: '4 Months',
    location: 'Far East / Middle East',
    postedDate: '1 Day Ago',
    salary: '$11,000 - $12,500 / month',
    description: 'Looking for a Chief Engineer with extensive MAN B&W ME Electronic engine experience for chemical tankers.',
    requirements: ['Chief Engineer Unlimited Certificate', 'Advanced Oil & Chemical Tanker endorsement', 'SIRE vetting experience'],
  },
  {
    id: 'job-3',
    title: 'Chief Officer / 2nd Mate',
    rank: 'officer',
    vesselType: 'Container Vessel (8,000 TEU)',
    contractDuration: '6 Months',
    location: 'Asia - Europe Route',
    postedDate: '3 Days Ago',
    salary: '$6,200 - $7,000 / month',
    description: 'Urgent opening for Chief Officer proficient in stowage planning software and fast port turnarounds.',
    requirements: ['Chief Mate Unlimited Certificate', 'Experienced in reefer container cargo', 'Fluent in Maritime English'],
  },
  {
    id: 'job-4',
    title: '2nd Engineer',
    rank: 'officer',
    vesselType: 'General Cargo / MPP',
    contractDuration: '6 Months',
    location: 'Southeast Asia',
    postedDate: '4 Days Ago',
    salary: '$5,800 - $6,500 / month',
    description: 'Experienced 2nd Engineer needed for heavy lift multi-purpose vessel operations.',
    requirements: ['2nd Engineer Certificate', 'Experience with heavy-lift auxiliary machinery', 'Valid Yellow Fever & US Visa'],
  },
  {
    id: 'job-5',
    title: 'Able Seaman (AB)',
    rank: 'rating',
    vesselType: 'Bulk Carrier',
    contractDuration: '8 - 9 Months',
    location: 'Global',
    postedDate: '5 Days Ago',
    salary: '$1,800 - $2,200 / month',
    description: 'Required AB Deck with good watchkeeping experience and deck maintenance skills.',
    requirements: ['Able Seafarer Deck Certificate', 'Valid Seaman Book & Passport', 'Minimum 12 months bulk carrier experience'],
  },
  {
    id: 'job-6',
    title: 'Oiler / Fitter',
    rank: 'rating',
    vesselType: 'Container Ship',
    contractDuration: '8 Months',
    location: 'Intra-Asia',
    postedDate: 'Just Now',
    salary: '$1,850 - $2,250 / month',
    description: 'Oiler with welding and fitting capabilities for routine engine room maintenance.',
    requirements: ['Able Seafarer Engine Certificate', 'Welding certification is a plus', 'Valid Medical Certificate'],
  },
];

export const galleryData: GalleryItem[] = [
  {
    id: 'gal-1',
    title: 'Crew Mobilization at Port of Tanjung Priok',
    category: 'Operations',
    description: 'Pre-deployment briefing and safety gear inspection before sign-on.',
    src: 'https://images.unsplash.com/photo-1518709268805-4e9042af9f23?auto=format&fit=crop&w=1200&q=80',
    alt: 'Crew mobilization Tanjung Priok',
  },
  {
    id: 'gal-2',
    title: 'Bulk Carrier Cargo Operation',
    category: 'Vessels',
    description: 'Safe loading inspection managed by our qualified Deck Officers.',
    src: 'https://images.unsplash.com/photo-1559136555-9303baea8ebd?auto=format&fit=crop&w=1200&q=80',
    alt: 'Bulk Carrier cargo operation',
  },
  {
    id: 'gal-3',
    title: 'Engine Room Maintenance Simulation',
    category: 'Training',
    description: 'Engineers undergoing simulator training for electronic main engines.',
    src: 'https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=1200&q=80',
    alt: 'Engine room simulator training',
  },
  {
    id: 'gal-4',
    title: 'Container Ship Navigation Deck',
    category: 'Vessels',
    description: 'Advanced bridge navigation equipment operated by certified watchkeeping officers.',
    src: 'https://images.unsplash.com/photo-1578575437130-527eed3abbec?auto=format&fit=crop&w=1200&q=80',
    alt: 'Container vessel navigation deck',
  },
  {
    id: 'gal-5',
    title: 'Safety & Survival Training Session',
    category: 'Training',
    description: 'STCW refresher course on life-saving appliances and firefighting.',
    src: 'https://images.unsplash.com/photo-1509316975850-ff9c5deb0cd9?auto=format&fit=crop&w=1200&q=80',
    alt: 'Safety training session',
  },
  {
    id: 'gal-6',
    title: 'Annual Principal & Crew Meet',
    category: 'Events',
    description: 'Building strong relationships between shipowners and top-performing seafarers.',
    src: 'https://images.unsplash.com/photo-1511632765486-a01980e01a18?auto=format&fit=crop&w=1200&q=80',
    alt: 'Annual crew gather event',
  },
];

export const teamMembersData: TeamMember[] = [
  {
    id: 'team-1',
    name: 'Capt. Hendra Wijaya',
    title: 'Managing Director & CEO',
    photo: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=800&q=80',
    bio: 'Over 20 years of maritime industry experience, including 10 years as Master Mariner on international oil tankers.',
    linkedin: 'https://linkedin.com',
    email: 'hendra@azheliashipping.com',
  },
  {
    id: 'team-2',
    name: 'Budi Santoso, M.Mar.E',
    title: 'Director of Crewing Operations',
    photo: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&w=800&q=80',
    bio: 'Former Chief Engineer with extensive experience managing international crew recruitment and flag state compliance.',
    linkedin: 'https://linkedin.com',
    email: 'budi@azheliashipping.com',
  },
  {
    id: 'team-3',
    name: 'Siti Rahmawati',
    title: 'Head of Quality & Compliance',
    photo: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=800&q=80',
    bio: 'Expert in MLC 2006 regulations, STCW 2010 auditing, and ISO 9001 quality management systems.',
    linkedin: 'https://linkedin.com',
    email: 'siti@azheliashipping.com',
  },
];

export const testimonialsData: TestimonialItem[] = [
  {
    quote: 'AZHELIA SHIPPING consistently delivers highly competent, well-briefed crews on schedule. Their dedication to safety and MLC compliance is unmatched.',
    author: 'Capt. James Wilson',
    company: 'Pacific Maritime Lines',
    role: 'Fleet Personnel Director',
    vesselType: 'Bulk Carriers & Container Ships',
  },
  {
    quote: 'Working with AZHELIA has been seamless for over 5 years. Their seafarers are disciplined, proficient in English, and hold excellent technical skills.',
    author: 'Markus Lindner',
    company: 'Hamburg Ship Management',
    role: 'Senior Crew Manager',
    vesselType: 'Chemical Tankers',
  },
  {
    quote: 'Joining my current container vessel through AZHELIA was the smoothest process of my career. Transparent contracts and on-time salary allotments!',
    author: 'Chief Officer Denny Kurniawan',
    company: 'AZHELIA Deployed Seafarer',
    role: 'Chief Officer',
    vesselType: 'Container Vessel',
  },
];

export const faqData = {
  shipowners: [
    {
      question: 'What types of vessels do you provide crew for?',
      answer: 'We provide fully qualified crew for Bulk Carriers, Oil/Chemical Tankers, Container Ships, Multi-Purpose Vessels (MPP), LPG Carriers, and General Cargo ships.',
    },
    {
      question: 'How do you ensure crew qualifications and STCW compliance?',
      answer: 'Every candidate undergoes document verification through official maritime authority portals, technical interviews by senior officers, medical fitness exams, and English proficiency testing.',
    },
    {
      question: 'Can you handle emergency crew replacements at short notice?',
      answer: 'Yes, our 24/7 crewing operations team maintains a pool of pre-screened, standby seafarers with valid visas ready for fast global mobilization.',
    },
    {
      question: 'Are your crewing services MLC 2006 certified?',
      answer: 'Yes, AZHELIA SHIPPING operates in full compliance with the Maritime Labour Convention (MLC 2006) and holds ISO 9001 quality certification.',
    },
  ],
  seafarers: [
    {
      question: 'How can I apply for open seafarer positions?',
      answer: 'You can search available jobs on our Careers page and submit your application online via our multi-step form, or visit our Jakarta office with your original certificates.',
    },
    {
      question: 'Do you charge any placement fees to seafarers?',
      answer: 'No! AZHELIA SHIPPING adheres strictly to MLC 2006. We NEVER charge seafarers any recruitment, placement, or processing fees.',
    },
    {
      question: 'What documents are required when applying?',
      answer: 'You need a valid Passport, Seaman Book, STCW Basic Safety Training, COP/COC certificates according to your rank, and recent sea service references.',
    },
    {
      question: 'How long does the recruitment and deployment process take?',
      answer: 'Depending on vessel relief schedules and visa requirements, deployment typically takes between 1 to 3 weeks following successful interview and medical clearance.',
    },
  ],
};
