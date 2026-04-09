// ─────────────────────────────────────────────────────────────────────────────
//  SALON CONFIGURATION
//  To switch salons, change VITE_SALON_ID in your .env file:
//    VITE_SALON_ID=vizag_hair_company   ← The Vizag Hair Company
//    VITE_SALON_ID=jstudio              ← J Studio Luxury Beauty Studio
// ─────────────────────────────────────────────────────────────────────────────

export interface Review {
  name: string;
  initials: string;
  rating: number;
  text: string;
  service: string;
}

export interface SalonConfig {
  id: string;
  /** Full display name */
  name: string;
  /** Short brand line shown in navbar (line 1) */
  nameShort: string;
  /** Sub-brand / category shown in navbar (line 2) */
  tagline: string;
  /** Footer description blurb */
  footerBlurb: string;
  /** City name */
  city: string;
  /** Numeric rating, e.g. 4.8 */
  rating: number;
  /** Display string for review count, e.g. "1,500+" */
  reviewCount: string;
  /** Display phone, e.g. "+91 81212 12945" */
  phone: string;
  /** Raw phone digits for href/wa.me, e.g. "918121212945" */
  phoneRaw: string;
  address: {
    line1: string;
    line2: string;
    line3?: string;
    cityState: string;
    pincode: string;
    areasServed: string;
    /** Maps embed search query */
    mapsQuery: string;
  };
  hours: {
    label: string; // e.g. "Open Daily" or "Mon – Sat"
    time: string;  // e.g. "9:00 AM – 9:00 PM"
    note?: string; // e.g. "Sunday: 10:00 AM – 6:00 PM"
  };
  /** Hero section */
  hero: {
    subtitle: string;
    stats: { value: string; label: string }[];
  };
  /** About section */
  about: {
    heading: string;
    subHeading: string;
    para1: string;
    para2: string;
    stats: { value: string; label: string }[];
    highlights: { title: string; desc: string }[];
  };
  /** Footer / copyright year */
  foundedYear: string;
  reviews: Review[];
  instagramUrl: string;
  facebookUrl: string;
}

// ─────────────────────────────────────────────────────────────────────────────
//  SALON 1 — THE VIZAG HAIR COMPANY
// ─────────────────────────────────────────────────────────────────────────────
const vizagHairCompany: SalonConfig = {
  id: 'vizag_hair_company',
  name: 'The Vizag Hair Company',
  nameShort: 'The Vizag',
  tagline: 'Hair Company',
  footerBlurb:
    "Visakhapatnam's most trusted hair studio, delivering premium styling experiences since 2019.",
  city: 'Visakhapatnam',
  rating: 4.8,
  reviewCount: '1,500+',
  phone: '+91 81212 12945',
  phoneRaw: '918121212945',
  address: {
    line1: 'GITAM Medical, Varma Complex,',
    line2: 'College Rd, Yendada,',
    cityState: 'Visakhapatnam, Andhra Pradesh',
    pincode: '530045',
    areasServed: 'Yendada & Nearby Locations',
    mapsQuery: 'GITAM+Medical+Varma+Complex+Yendada+Visakhapatnam',
  },
  hours: {
    label: 'Mon – Sat',
    time: '10:00 AM – 8:00 PM',
    note: 'Sunday: 10:00 AM – 6:00 PM',
  },
  hero: {
    subtitle:
      "Visakhapatnam's premier grooming destination. Experience luxury haircare, transformative styling, and a salon ambience crafted for those who value the finest.",
    stats: [
      { value: '1500+', label: 'Happy Clients' },
      { value: '4.8★', label: 'Average Rating' },
      { value: '5+', label: 'Years Serving Vizag' },
    ],
  },
  about: {
    heading: "Vizag's Most Trusted",
    subHeading: 'Hair Studio',
    para1:
      'Nestled in the heart of Yendada, The Vizag Hair Company was born from a passion for exceptional grooming and an obsession with detail. We combine international techniques with personalised care to deliver transformations that speak for themselves.',
    para2:
      "Whether it's a quick trim or a complete style overhaul, every client walks out feeling confident, refreshed, and looking their absolute best.",
    stats: [
      { value: '1500+', label: 'Happy Customers' },
      { value: '4.8', label: 'Google Rating' },
      { value: '5+', label: 'Years Experience' },
      { value: '6+', label: 'Expert Stylists' },
    ],
    highlights: [
      {
        title: 'Friendly & Skilled Staff',
        desc: 'Our trained professionals stay updated with the latest trends and techniques to give you the best results.',
      },
      {
        title: 'Premium Ambience',
        desc: 'A luxurious, clean, and relaxing environment designed to make every visit a memorable experience.',
      },
      {
        title: 'Affordable Pricing',
        desc: "Premium quality services at honest prices — we believe great hair shouldn't cost a fortune.",
      },
      {
        title: 'Latest Trends',
        desc: 'From Korean cuts to global color techniques, we bring world-class styles to Visakhapatnam.',
      },
    ],
  },
  foundedYear: '2019',
  reviews: [
    {
      name: 'Arjun Reddy',
      initials: 'AR',
      rating: 5,
      text: 'Absolutely love this place! The staff is super friendly, and my hair looks amazing after every visit. Best salon in Vizag hands down.',
      service: 'Haircut & Styling',
    },
    {
      name: 'Priya Sharma',
      initials: 'PS',
      rating: 5,
      text: 'Went for a hair spa and the results were incredible. My hair feels so soft and healthy. The ambience is so premium and relaxing.',
      service: 'Hair Spa',
    },
    {
      name: 'Karthik Nair',
      initials: 'KN',
      rating: 5,
      text: 'Got a beard trim and haircut — the precision is outstanding! The barber really listens to what you want and delivers perfectly.',
      service: 'Grooming',
    },
    {
      name: 'Divya Rao',
      initials: 'DR',
      rating: 5,
      text: 'The balayage they did for me was stunning. The color looks so natural and the technique is clearly professional. Will be back!',
      service: 'Hair Color',
    },
    {
      name: 'Rohith Varma',
      initials: 'RV',
      rating: 5,
      text: 'Very clean, well-maintained salon with skilled professionals. Reasonable pricing for the quality of service. Highly recommended!',
      service: 'Facial',
    },
    {
      name: 'Sneha Pillai',
      initials: 'SP',
      rating: 5,
      text: 'Had my bridal makeup done here. They were super professional, listened to all my preferences, and the result was beyond expectations.',
      service: 'Makeup',
    },
  ],
  instagramUrl: '#',
  facebookUrl: '#',
};

// ─────────────────────────────────────────────────────────────────────────────
//  SALON 2 — J STUDIO LUXURY BEAUTY STUDIO
// ─────────────────────────────────────────────────────────────────────────────
const jStudio: SalonConfig = {
  id: 'jstudio',
  name: 'J Studio Luxury Beauty Studio',
  nameShort: 'J Studio',
  tagline: 'Luxury Beauty Studio',
  footerBlurb:
    'A premium luxury beauty destination in Visakhapatnam, delivering expert styling, bridal makeup, and personalized care since 2018.',
  city: 'Visakhapatnam',
  rating: 4.7,
  reviewCount: '1,655',
  phone: '+91 98826 89999',
  phoneRaw: '919882689999',
  address: {
    line1: '1st Floor, 9-29-18, Beside New Vizag Central,',
    line2: 'VIP Road, Above TVS Showroom,',
    line3: 'Balaji Nagar, Siripuram,',
    cityState: 'Visakhapatnam, Andhra Pradesh',
    pincode: '530003',
    areasServed: 'Siripuram & Nearby Locations',
    mapsQuery: 'J+Studio+Luxury+Beauty+VIP+Road+Siripuram+Visakhapatnam',
  },
  hours: {
    label: 'Open Daily',
    time: '9:00 AM – 9:00 PM',
  },
  hero: {
    subtitle:
      "Visakhapatnam's premium luxury beauty studio. Experience expert stylists, advanced techniques, and personalised care in a relaxing, hygienic environment.",
    stats: [
      { value: '1,655+', label: 'Happy Clients' },
      { value: '4.7★', label: 'Average Rating' },
      { value: 'VIP', label: 'Branch, Vizag' },
    ],
  },
  about: {
    heading: "Vizag's Premier",
    subHeading: 'Luxury Beauty Studio',
    para1:
      'J Studio Luxury Beauty Studio (V.I.P Branch, Vizag) is a premium destination for all your beauty and grooming needs. We specialize in delivering a luxurious salon experience with expert stylists, advanced techniques, and personalized care.',
    para2:
      'Our services include luxury haircuts, bridal makeup, microblading, facials, Ayurveda therapies, and complete beauty & skincare solutions. We focus on enhancing your natural beauty while ensuring comfort, hygiene, and professionalism.',
    stats: [
      { value: '1,655+', label: 'Happy Customers' },
      { value: '4.7', label: 'Google Rating' },
      { value: '6+', label: 'Years Experience' },
      { value: '10+', label: 'Expert Stylists' },
    ],
    highlights: [
      {
        title: 'Expert & Experienced Stylists',
        desc: 'Our skilled team brings years of experience in luxury haircare, bridal makeup, and advanced beauty techniques.',
      },
      {
        title: 'Premium & Hygienic Environment',
        desc: 'A spotlessly clean and welcoming studio that meets the highest hygiene standards for your peace of mind.',
      },
      {
        title: 'Personalized Beauty Solutions',
        desc: 'Every client receives tailored recommendations and care to enhance their unique natural beauty.',
      },
      {
        title: 'Advanced Techniques & Products',
        desc: 'We use only premium, professional-grade products and the latest global beauty techniques.',
      },
    ],
  },
  foundedYear: '2018',
  reviews: [
    {
      name: 'Yashasvi Sri Sanjana G',
      initials: 'YS',
      rating: 5,
      text: 'Tailored perfectly to my style. The stylist also explained how to maintain it. The salon has a clean, professional, and welcoming atmosphere. Highly recommended!',
      service: 'Haircut & Styling',
    },
    {
      name: 'Bukari Mohammed',
      initials: 'BM',
      rating: 5,
      text: 'My hair felt rejuvenated, and the color was vibrant and long-lasting. I felt truly pampered throughout my visit.',
      service: 'Hair Color',
    },
    {
      name: 'Jay Kishan',
      initials: 'JK',
      rating: 5,
      text: "One of the best haircuts I've ever had. Kudos to Murthy, my hairstylist. I'll definitely stick with him!",
      service: 'Grooming',
    },
  ],
  instagramUrl: '#',
  facebookUrl: '#',
};

// ─────────────────────────────────────────────────────────────────────────────
//  REGISTRY — add new salons here
// ─────────────────────────────────────────────────────────────────────────────
const salons: Record<string, SalonConfig> = {
  vizag_hair_company: vizagHairCompany,
  jstudio: jStudio,
};

// Read the active salon ID from .env (VITE_SALON_ID=jstudio)
const activeSalonId = import.meta.env.VITE_SALON_ID ?? 'vizag_hair_company';

// Export the active salon config
export const salon: SalonConfig =
  salons[activeSalonId] ?? vizagHairCompany;
