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
    title: 'Qualified & Certified Seafarers',
    desc: 'Providing competent, certified, and experienced seafarers for global vessels.',
    iconName: 'ShieldCheck',
  },
  {
    title: 'Transparent Recruitment Process',
    desc: 'Ensuring clear, ethical, and open recruitment procedures for clients and candidates.',
    iconName: 'Search',
  },
  {
    title: 'Professional Recruitment Standards',
    desc: 'Adhering to strict international maritime industry standards and safety regulations.',
    iconName: 'Award',
  },
  {
    title: 'International Maritime Network',
    desc: 'Connecting shipowners and seafarers with global crewing opportunities worldwide.',
    iconName: 'Globe',
  },
  {
    title: 'Fast Response & Reliable Service',
    desc: 'Delivering swift, dependable crewing solutions and 24/7 operational support.',
    iconName: 'Clock',
  },
  {
    title: 'Customer-Oriented Solutions',
    desc: 'Tailoring recruitment and crew management services to specific client operational needs.',
    iconName: 'Users',
  },
  {
    title: 'Long-Term Partnership Commitment',
    desc: 'Building lasting relationships with shipowners based on trust and mutual success.',
    iconName: 'Compass',
  },
];

export const companyValuesData = [
  {
    title: 'Integrity & Trust',
    desc: 'Upholding honesty and transparency in every recruitment process while building lasting trust and strong relationships with clients and seafarers.',
    iconName: 'ShieldCheck',
  },
  {
    title: 'Excellence in Service',
    desc: 'Continuously improving service quality through innovation, efficiency, and a dedication to exceeding client and seafarer expectations.',
    iconName: 'Award',
  },
  {
    title: 'Responsibility',
    desc: 'Prioritizing safety, regulatory compliance, customer satisfaction, and accountability in every aspect of our operations.',
    iconName: 'Shield',
  },
  {
    title: 'Professionalism',
    desc: 'Delivering recruitment and crewing services in accordance with international maritime standards, with a commitment to quality and operational excellence.',
    iconName: 'CheckCircle2',
  },
];

export const companyCommitment =
  'At AZHELIA SHIPPING, we are committed to delivering exceptional maritime recruitment services through professionalism, integrity, and dedication. Our goal is to become a reliable bridge between international shipowners and qualified seafarers by providing efficient, ethical, and high-quality recruitment solutions. We believe that trust is earned through consistent performance, and we are dedicated to maintaining long-term partnerships built on reliability, transparency, and mutual success.';

export const servicesData: ServiceItem[] = [
  {
    id: 'crew-recruitment',
    title: 'Crew Recruitment',
    description: 'Recruiting experienced officers and ratings for various types of international vessels.',
    features: ['Experienced officers & ratings', 'Strict competency evaluations', 'Full STCW certification check'],
    details: 'Our crew recruitment process matches skilled Deck and Engine officers as well as ratings with international shipowners through transparent and professional selection.',
    iconName: 'UserPlus',
  },
  {
    id: 'crew-management',
    title: 'Crew Management',
    description: 'Supporting shipowners in managing crew administration and deployment.',
    features: ['Rotational scheduling', 'Contract administration', 'Crew welfare support'],
    details: 'We support shipowners in complete crewing operations, ensuring smooth rotational planning, administration, and continuous crew welfare.',
    iconName: 'Users',
  },
  {
    id: 'crew-documentation',
    title: 'Crew Documentation',
    description: 'Assisting seafarers with document preparation and employment requirements.',
    features: ['Seaman book & passport verification', 'Flag state endorsements', 'STCW certificate auditing'],
    details: 'We assist seafarers and shipowners with complete document audits, visa arrangements, and flag state endorsement filings.',
    iconName: 'FileCheck',
  },
  {
    id: 'crew-placement',
    title: 'Crew Placement',
    description: "Providing qualified crew members according to shipowners' operational requirements.",
    features: ['Tailored vessel staffing', 'On-demand crew relief', 'Qualified rating complement'],
    details: 'We place certified seafarers matching specific vessel types including bulk carriers, tankers, container ships, and general cargo vessels.',
    iconName: 'Ship',
  },
  {
    id: 'crew-mobilization',
    title: 'Crew Mobilization',
    description: 'Coordinating travel arrangements, visas, and embarkation procedures.',
    features: ['Marine flight ticketing', 'Embarkation visa processing', 'Port agency coordination'],
    details: 'Our mobilization team coordinates seamless international travel, transit visas, and port sign-on procedures for seafarers worldwide.',
    iconName: 'Plane',
  },
  {
    id: 'maritime-consultancy',
    title: 'Maritime Consultancy',
    description: 'Providing recruitment consultation and workforce solutions for international shipping companies.',
    features: ['Workforce planning', 'Crewing cost optimization', 'Regulatory compliance advice'],
    details: 'We offer strategic crewing consultancy and tailored workforce solutions to optimize crewing efficiency and regulatory compliance.',
    iconName: 'GraduationCap',
  },
  {
    id: 'marine-fuel-supply',
    title: 'Marine Fuel Supply',
    description: 'Reliable marine fuel supply services across Indonesian waters.',
    features: ['Marine Fuel Oil (MFO)', 'Low Sulfur MGO (LSMGO)', 'High Speed Diesel (HSD)'],
    details: 'In addition to our shipping agency services, we provide marine fuel supply through our trusted partners. Vessels operating or calling at ports throughout Indonesia can conveniently arrange bunkering with us.',
    iconName: 'Droplet',
  },
];

export const vesselTypesData: VesselItem[] = [
  {
    id: 'bulk-carrier',
    name: 'Bulk Carrier',
    image: '/gambar_1.jpg',
    specs: 'Handysize to Capesize (40,000 - 180,000 DWT)',
    description: 'We supply skilled Deck and Engine crew with extensive experience operating modern gearless and geared bulk carriers carrying dry bulk cargoes.',
  },
  {
    id: 'tanker',
    name: 'Oil & Chemical Tanker',
    image: '/gambar_2.jpg',
    specs: 'Product, Crude & Chemical (10,000 - 320,000 DWT)',
    description: 'Specialized tanker crews holding Advanced Oil/Chemical Tanker endorsements, well-trained in SIRE vetting standards and cargo handling safety.',
  },
  {
    id: 'container',
    name: 'Container Vessel',
    image: '/gambar_3.jpg',
    specs: 'Feeder to Ultra Large Container Vessel (1,000 - 24,000 TEU)',
    description: 'Fast-paced container operations require agile seafarers proficient in reefer monitoring, lashing inspection, and tight port turnaround schedules.',
  },
  {
    id: 'mpp',
    name: 'Multi-Purpose Cargo (MPP)',
    image: '/gambar_4.jpg',
    specs: 'Heavy Lift & Project Cargo (5,000 - 30,000 DWT)',
    description: 'Deck officers skilled in heavy-lift cargo stowage, securing calculation, and crane operations.',
  },
  {
    id: 'lpg',
    name: 'LPG / Gas Carrier',
    image: '/gambar_5.jpg',
    specs: 'Pressurized & Fully Refrigerated (5,000 - 84,000 CBM)',
    description: 'Gas tanker specialists experienced in cryogenic liquid handling, inert gas systems, and strict SIGTTO safety guidelines.',
  },
  {
    id: 'general-cargo',
    name: 'General Cargo Vessel',
    image: '/gambar_6.jpg',
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
    src: '/gambar_1.jpg',
    alt: 'Crew mobilization Tanjung Priok',
  },
  {
    id: 'gal-2',
    title: 'Bulk Carrier Cargo Operation',
    category: 'Vessels',
    description: 'Safe loading inspection managed by our qualified Deck Officers.',
    src: '/gambar_2.jpg',
    alt: 'Bulk Carrier cargo operation',
  },
  {
    id: 'gal-3',
    title: 'Engine Room Maintenance Simulation',
    category: 'Training',
    description: 'Engineers undergoing simulator training for electronic main engines.',
    src: '/gambar_3.jpg',
    alt: 'Engine room simulator training',
  },
  {
    id: 'gal-4',
    title: 'Container Ship Navigation Deck',
    category: 'Vessels',
    description: 'Advanced bridge navigation equipment operated by certified watchkeeping officers.',
    src: '/gambar_4.jpg',
    alt: 'Container vessel navigation deck',
  },
  {
    id: 'gal-5',
    title: 'Safety & Survival Training Session',
    category: 'Training',
    description: 'STCW refresher course on life-saving appliances and firefighting.',
    src: '/gambar_5.jpg',
    alt: 'Safety training session',
  },
  {
    id: 'gal-6',
    title: 'Annual Principal & Crew Meet',
    category: 'Events',
    description: 'Building strong relationships between shipowners and top-performing seafarers.',
    src: '/gambar_6.jpg',
    alt: 'Annual crew gather event',
  },
  {
    id: 'gal-7',
    title: 'Maritime Safety Briefing',
    category: 'Operations',
    description: 'Comprehensive briefing on international maritime safety standards.',
    src: '/gambar_7.jpg',
    alt: 'Maritime Safety Briefing',
  },
  {
    id: 'gal-8',
    title: 'Vessel Inspection at Anchorage',
    category: 'Vessels',
    description: 'Routine vessel audit and crew welfare check conducted by management.',
    src: '/gambar_8.jpg',
    alt: 'Vessel Inspection',
  },
  {
    id: 'gal-9',
    title: 'Bridge Simulator Refresher',
    category: 'Training',
    description: 'Advanced navigation and collision avoidance training.',
    src: '/gambar_9.jpg',
    alt: 'Bridge Simulator Refresher',
  },
  {
    id: 'gal-10',
    title: 'Officer Briefing Session',
    category: 'Events',
    description: 'Interactive session with senior officers prior to contract sign-on.',
    src: '/gambar_10.jpg',
    alt: 'Officer Briefing Session',
  },
  {
    id: 'gal-11',
    title: 'Port Mobilization Logistics',
    category: 'Operations',
    description: 'Seamless seafarer transport and document verification at harbor.',
    src: '/gambar_11.jpg',
    alt: 'Port Mobilization Logistics',
  },
];

export const teamMembersData: TeamMember[] = [
  {
    id: 'team-1',
    name: 'Capt. Hendra Wijaya',
    title: 'Managing Director & CEO',
    photo: '/gambar_7.jpg',
    bio: 'Over 20 years of maritime industry experience, including 10 years as Master Mariner on international oil tankers.',
    linkedin: 'https://linkedin.com',
    email: 'hendra@azheliashipping.com',
  },
  {
    id: 'team-2',
    name: 'Budi Santoso, M.Mar.E',
    title: 'Director of Crewing Operations',
    photo: '/gambar_9.jpg',
    bio: 'Former Chief Engineer with extensive experience managing international crew recruitment and flag state compliance.',
    linkedin: 'https://linkedin.com',
    email: 'budi@azheliashipping.com',
  },
  {
    id: 'team-3',
    name: 'Siti Rahmawati',
    title: 'Head of Quality & Compliance',
    photo: '/gambar_10.jpg',
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

export const faqData = [
  {
    question: 'How can I apply for a job?',
    answer:
      'You can apply online through our Careers page by submitting your application form, or directly contact our Crewing Team via WhatsApp through our contact desk. Our team will review your qualifications for active vessel vacancies.',
  },
  {
    question: 'What are the minimum requirements?',
    answer:
      'Minimum requirements include: minimum 2 years of experience on foreign-going vessels, valid Passport and Seaman Book, valid STCW Certificates, valid Medical Certificate, valid COC/COP (if applicable) with at least 12 months validity remaining, fluency in English, good knowledge of onboard operations, and being physically and mentally fit for sea service.',
  },
  {
    question: 'What documents are required?',
    answer:
      'Required documents include your Updated CV, Passport, Seaman Book, STCW Certificates, Medical Certificate, COC/COP (if applicable), Sea Service Record, and a recent Passport-size Photo.',
  },
  {
    question: 'Is there any recruitment fee?',
    answer:
      'No. PT AZHELIA SHIPPING AGENCY INTERNATIONAL strictly adheres to MLC 2006 regulations. We NEVER charge any recruitment fees, placement fees, or processing charges to seafarers.',
  },
  {
    question: 'How long does the recruitment process take?',
    answer:
      'The timeline depends on vessel relief schedules, client interview approvals, and document verification. Profile review and document verification usually take between 3 to 7 working days upon receipt of complete documents.',
  },
  {
    question: 'How will I know the status of my application?',
    answer:
      'Our Crewing Team will review your profile and contact you directly via WhatsApp or email when a suitable vacancy matching your qualifications becomes available. You can also contact our Crewing Team anytime via WhatsApp for real-time application updates.',
  },
];
