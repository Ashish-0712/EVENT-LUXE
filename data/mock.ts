// ============================================================
// MOCK DATA — Luxury 3D Event Management Website
// ============================================================

// --- Categories ---
export interface Category {
  id: string;
  name: string;
  icon: string;
  description: string;
  gradient: string;
  count: number;
}

export const categories: Category[] = [
  { id: 'wedding', name: 'Wedding', icon: '💍', description: 'Dream weddings crafted with elegance', gradient: 'from-purple-500 to-pink-500', count: 1240 },
  { id: 'birthday', name: 'Birthday', icon: '🎂', description: 'Celebrations that create lasting memories', gradient: 'from-amber-500 to-orange-500', count: 3500 },
  { id: 'haldi', name: 'Haldi Ceremony', icon: '🌼', description: 'Traditional ceremonies with modern flair', gradient: 'from-yellow-400 to-amber-500', count: 870 },
  { id: 'mehendi', name: 'Mehendi', icon: '🎨', description: 'Artistic celebrations of love and tradition', gradient: 'from-green-400 to-emerald-500', count: 920 },
  { id: 'reception', name: 'Reception', icon: '🥂', description: 'Grand receptions that dazzle your guests', gradient: 'from-blue-500 to-indigo-500', count: 1100 },
  { id: 'babyshower', name: 'Baby Shower', icon: '👶', description: 'Sweet celebrations for new beginnings', gradient: 'from-pink-400 to-rose-500', count: 780 },
  { id: 'corporate', name: 'Corporate Event', icon: '🏢', description: 'Professional events with premium execution', gradient: 'from-slate-500 to-zinc-600', count: 2200 },
  { id: 'housewarming', name: 'Housewarming', icon: '🏠', description: 'Welcome your new home in grand style', gradient: 'from-teal-400 to-cyan-500', count: 450 },
  { id: 'anniversary', name: 'Anniversary', icon: '❤️', description: 'Celebrate milestones of love', gradient: 'from-red-500 to-rose-500', count: 660 },
];

// --- Planners ---
export interface Planner {
  id: string;
  company: string;
  ownerName: string;
  ownerImage: string;
  logo: string;
  rating: number;
  reviewCount: number;
  completedEvents: number;
  yearsExperience: number;
  startingPrice: number;
  currency: string;
  verified: boolean;
  city: string;
  specializations: string[];
  about: string;
  awards: string[];
  availableDates: string[];
  packages: Package[];
  gallery: GalleryItem[];
  reviews: Review[];
}

export interface Package {
  name: string;
  price: number;
  features: string[];
  popular?: boolean;
}

export interface GalleryItem {
  id: string;
  url: string;
  category: string;
  title: string;
  gradient: string;
}

export interface Review {
  id: string;
  name: string;
  avatar: string;
  rating: number;
  date: string;
  event: string;
  comment: string;
}

export const planners: Planner[] = [
  {
    id: 'royal-celebrations',
    company: 'Royal Celebrations',
    ownerName: 'Arjun Sharma',
    ownerImage: '',
    logo: '',
    rating: 4.9,
    reviewCount: 342,
    completedEvents: 1250,
    yearsExperience: 12,
    startingPrice: 150000,
    currency: '₹',
    verified: true,
    city: 'Mumbai',
    specializations: ['Luxury Weddings', 'Royal Receptions', 'Destination Weddings'],
    about: 'Royal Celebrations is Mumbai\'s premier luxury event planning company, specializing in creating unforgettable weddings and celebrations. With over 12 years of experience and 1250+ events, we bring dreams to life with meticulous attention to detail and world-class execution.',
    awards: ['Best Wedding Planner 2025 — WeddingSutra', 'Top 10 Event Companies — Forbes India', 'Excellence Award — ILEA'],
    availableDates: ['2026-08-15', '2026-08-22', '2026-09-05', '2026-09-12', '2026-10-01'],
    packages: [
      { name: 'Silver', price: 150000, features: ['Venue decoration', 'Basic lighting', 'Flower arrangements', 'Day-of coordination'] },
      { name: 'Gold', price: 350000, features: ['Premium venue decoration', 'Designer lighting', 'Luxury flower arrangements', 'Full planning', 'Photography', 'Catering coordination'], popular: true },
      { name: 'Platinum', price: 750000, features: ['Complete luxury planning', 'Celebrity decorator', 'International flowers', 'Videography', 'Live entertainment', 'Guest management', 'Honeymoon planning'] },
    ],
    gallery: [],
    reviews: [],
  },
  {
    id: 'dream-events',
    company: 'Dream Events Co.',
    ownerName: 'Priya Patel',
    ownerImage: '',
    logo: '',
    rating: 4.8,
    reviewCount: 289,
    completedEvents: 980,
    yearsExperience: 9,
    startingPrice: 80000,
    currency: '₹',
    verified: true,
    city: 'Delhi',
    specializations: ['Birthday Parties', 'Baby Showers', 'Engagement Ceremonies'],
    about: 'Dream Events Co. transforms ordinary celebrations into extraordinary experiences. Based in Delhi, we specialize in intimate gatherings and milestone celebrations with a focus on personalized themes and creative design.',
    awards: ['Rising Star Award 2024 — EventFaqs', 'Best Birthday Planner — PartySlate'],
    availableDates: ['2026-08-10', '2026-08-18', '2026-09-01', '2026-09-20'],
    packages: [
      { name: 'Essential', price: 80000, features: ['Theme decoration', 'Balloon art', 'Basic photography', 'Cake arrangement'] },
      { name: 'Premium', price: 180000, features: ['Custom theme design', 'Premium decorations', 'Professional photography', 'Entertainment', 'Return gifts'], popular: true },
      { name: 'Ultimate', price: 400000, features: ['Luxury theme experience', 'Celebrity appearances', 'Professional video', 'Live performances', 'Custom cake', 'Full catering'] },
    ],
    gallery: [],
    reviews: [],
  },
  {
    id: 'elite-gatherings',
    company: 'Elite Gatherings',
    ownerName: 'Rahul Kapoor',
    ownerImage: '',
    logo: '',
    rating: 4.7,
    reviewCount: 198,
    completedEvents: 650,
    yearsExperience: 7,
    startingPrice: 200000,
    currency: '₹',
    verified: true,
    city: 'Bangalore',
    specializations: ['Corporate Events', 'Product Launches', 'Award Ceremonies'],
    about: 'Elite Gatherings is Bangalore\'s leading corporate event management company. We deliver flawless corporate experiences from intimate board meetings to large-scale product launches with cutting-edge technology integration.',
    awards: ['Best Corporate Event Company 2025 — ET Awards'],
    availableDates: ['2026-08-05', '2026-08-25', '2026-09-10', '2026-09-28', '2026-10-15'],
    packages: [
      { name: 'Professional', price: 200000, features: ['Venue setup', 'AV equipment', 'Stage design', 'Guest registration'] },
      { name: 'Executive', price: 500000, features: ['Premium venue', 'LED walls', 'Custom branding', 'Catering', 'Photography', 'MC services'], popular: true },
      { name: 'Enterprise', price: 1200000, features: ['Multi-day event', 'International speakers', 'Live streaming', 'Full production', 'VIP management', 'Post-event analytics'] },
    ],
    gallery: [],
    reviews: [],
  },
  {
    id: 'sparkle-moments',
    company: 'Sparkle & Moments',
    ownerName: 'Ananya Reddy',
    ownerImage: '',
    logo: '',
    rating: 4.9,
    reviewCount: 456,
    completedEvents: 1800,
    yearsExperience: 15,
    startingPrice: 100000,
    currency: '₹',
    verified: true,
    city: 'Hyderabad',
    specializations: ['Haldi Ceremony', 'Mehendi', 'Sangeet', 'Traditional Weddings'],
    about: 'Sparkle & Moments brings 15 years of expertise in traditional Indian celebrations. We blend ancient customs with contemporary design to create ceremonies that honor heritage while embracing modern aesthetics.',
    awards: ['Lifetime Achievement — Wedding Planners Association', 'Best Traditional Event Company 2024', 'People\'s Choice Award 2025'],
    availableDates: ['2026-08-08', '2026-08-20', '2026-09-03', '2026-09-15', '2026-10-05', '2026-10-20'],
    packages: [
      { name: 'Traditional', price: 100000, features: ['Traditional decor', 'Flower arrangements', 'Mehendi artists', 'Music setup'] },
      { name: 'Grand', price: 250000, features: ['Luxury traditional decor', 'Premium flowers', 'Top mehendi artists', 'Dhol players', 'Photography', 'Catering'], popular: true },
      { name: 'Royal Heritage', price: 600000, features: ['Palace-style decor', 'Exotic flowers', 'Celebrity artists', 'Live band', 'Fireworks', 'Full management'] },
    ],
    gallery: [],
    reviews: [],
  },
  {
    id: 'coastal-celebrations',
    company: 'Coastal Celebrations',
    ownerName: 'Vikram Menon',
    ownerImage: '',
    logo: '',
    rating: 4.8,
    reviewCount: 167,
    completedEvents: 420,
    yearsExperience: 6,
    startingPrice: 300000,
    currency: '₹',
    verified: true,
    city: 'Goa',
    specializations: ['Beach Weddings', 'Destination Events', 'Sunset Ceremonies'],
    about: 'Coastal Celebrations specializes in breathtaking beach and destination events along India\'s stunning coastline. From intimate sunset ceremonies to grand beachfront weddings, we create magical moments by the sea.',
    awards: ['Best Destination Wedding Planner 2025 — Travel+Leisure'],
    availableDates: ['2026-09-01', '2026-09-15', '2026-10-01', '2026-10-15', '2026-11-01'],
    packages: [
      { name: 'Sunset', price: 300000, features: ['Beach venue', 'Sunset ceremony setup', 'Floral arch', 'Basic catering', 'Photography'] },
      { name: 'Tropical', price: 600000, features: ['Premium beach venue', 'Full decoration', 'DJ + Live music', 'Luxury catering', 'Photography + Video', 'Guest accommodation'], popular: true },
      { name: 'Paradise', price: 1500000, features: ['Private beach', 'International decor', 'Celebrity DJ', 'Gourmet dining', 'Yacht party', 'Fireworks', '3-day event'] },
    ],
    gallery: [],
    reviews: [],
  },
  {
    id: 'opulent-affairs',
    company: 'Opulent Affairs',
    ownerName: 'Neha Singh',
    ownerImage: '',
    logo: '',
    rating: 5.0,
    reviewCount: 128,
    completedEvents: 380,
    yearsExperience: 8,
    startingPrice: 500000,
    currency: '₹',
    verified: true,
    city: 'Jaipur',
    specializations: ['Royal Weddings', 'Palace Events', 'Luxury Anniversaries'],
    about: 'Opulent Affairs creates once-in-a-lifetime royal experiences in the majestic palaces and forts of Rajasthan. We specialize in ultra-luxury celebrations that blend regal grandeur with modern sophistication.',
    awards: ['Luxury Wedding Planner of the Year 2025', 'Rajasthan Tourism Excellence Award'],
    availableDates: ['2026-09-10', '2026-10-05', '2026-10-20', '2026-11-10', '2026-12-01'],
    packages: [
      { name: 'Maharaja', price: 500000, features: ['Palace venue access', 'Royal decor', 'Traditional music', 'Rajasthani catering', 'Photography'] },
      { name: 'Emperor', price: 1200000, features: ['Exclusive palace booking', 'Imperial decoration', 'International cuisine', 'Celebrity entertainment', 'Elephant procession', 'Full planning'], popular: true },
      { name: 'Crown Jewel', price: 3000000, features: ['Multiple palace events', 'International designer decor', 'Michelin-star chef', 'Private jet transfers', 'Week-long celebration', 'Global guest management'] },
    ],
    gallery: [],
    reviews: [],
  },
];

// --- Testimonials ---
export interface Testimonial {
  id: string;
  name: string;
  avatar: string;
  role: string;
  rating: number;
  event: string;
  planner: string;
  comment: string;
  date: string;
}

export const testimonials: Testimonial[] = [
  {
    id: '1',
    name: 'Meera & Rohan Gupta',
    avatar: '',
    role: 'Bride & Groom',
    rating: 5,
    event: 'Luxury Wedding',
    planner: 'Royal Celebrations',
    comment: 'Our wedding was nothing short of a fairytale. Every detail was perfect — from the stunning floral arrangements to the breathtaking lighting. Our guests are still talking about it months later!',
    date: 'March 2026',
  },
  {
    id: '2',
    name: 'Kavita Sharma',
    avatar: '',
    role: 'Mother',
    rating: 5,
    event: 'Baby Shower',
    planner: 'Dream Events Co.',
    comment: 'Dream Events turned my daughter\'s baby shower into a magical experience. The pastel theme with floating balloons and custom dessert table was absolutely gorgeous. Highly recommended!',
    date: 'January 2026',
  },
  {
    id: '3',
    name: 'Rajesh Nair',
    avatar: '',
    role: 'CEO, TechVentures',
    rating: 5,
    event: 'Product Launch',
    planner: 'Elite Gatherings',
    comment: 'Elite Gatherings executed our product launch flawlessly. The LED wall setup, live streaming quality, and guest management were world-class. They truly understand corporate events.',
    date: 'February 2026',
  },
  {
    id: '4',
    name: 'Sunita & Anil Reddy',
    avatar: '',
    role: 'Anniversary Couple',
    rating: 5,
    event: '25th Anniversary',
    planner: 'Sparkle & Moments',
    comment: 'Our silver jubilee celebration was the most beautiful night of our lives. Sparkle & Moments recreated our wedding venue with modern touches. There wasn\'t a dry eye in the house.',
    date: 'December 2025',
  },
  {
    id: '5',
    name: 'Aisha & James Miller',
    avatar: '',
    role: 'Bride & Groom',
    rating: 5,
    event: 'Beach Wedding',
    planner: 'Coastal Celebrations',
    comment: 'Getting married on a Goan beach at sunset was our dream, and Coastal Celebrations made it even more beautiful than we imagined. The floral arch with the ocean backdrop was pure magic.',
    date: 'November 2025',
  },
  {
    id: '6',
    name: 'Deepak & Pooja Joshi',
    avatar: '',
    role: 'Bride & Groom',
    rating: 5,
    event: 'Royal Palace Wedding',
    planner: 'Opulent Affairs',
    comment: 'Opulent Affairs gave us a wedding fit for royalty. The Jaipur palace venue, the elephant procession, the fireworks — every moment was cinematic. Worth every penny!',
    date: 'April 2026',
  },
];

// --- Gallery Items ---
export const galleryCategories = [
  'All', 'Luxury Weddings', 'Beach Weddings', 'Royal Weddings',
  'Birthday Celebrations', 'Corporate Events', 'Haldi Ceremony',
  'Mehendi', 'Reception', 'Baby Shower'
];

export interface GalleryEvent {
  id: string;
  title: string;
  category: string;
  location: string;
  gradient: string;
  description: string;
}

export const galleryEvents: GalleryEvent[] = [
  { id: '1', title: 'The Grand Mehta Wedding', category: 'Luxury Weddings', location: 'Mumbai', gradient: 'from-purple-600 to-pink-500', description: 'A 3-day celebration with 2000 guests' },
  { id: '2', title: 'Sunset Beach Vows', category: 'Beach Weddings', location: 'Goa', gradient: 'from-orange-400 to-rose-500', description: 'Intimate ceremony by the Arabian Sea' },
  { id: '3', title: 'Palace of Dreams', category: 'Royal Weddings', location: 'Jaipur', gradient: 'from-amber-500 to-yellow-400', description: 'Royal wedding at Jai Mahal Palace' },
  { id: '4', title: 'Little Prince Turns 5', category: 'Birthday Celebrations', location: 'Delhi', gradient: 'from-blue-500 to-cyan-400', description: 'Superhero themed birthday extravaganza' },
  { id: '5', title: 'TechCon 2026', category: 'Corporate Events', location: 'Bangalore', gradient: 'from-slate-600 to-blue-500', description: 'Annual tech conference for 5000 attendees' },
  { id: '6', title: 'Golden Haldi Celebration', category: 'Haldi Ceremony', location: 'Hyderabad', gradient: 'from-yellow-400 to-orange-400', description: 'Traditional haldi with floral pools' },
  { id: '7', title: 'Mehendi Magic Night', category: 'Mehendi', location: 'Udaipur', gradient: 'from-green-500 to-teal-400', description: 'Lakeside mehendi with live music' },
  { id: '8', title: 'Crystal Reception', category: 'Reception', location: 'Chennai', gradient: 'from-indigo-500 to-purple-500', description: 'Chandelier-lit grand reception' },
  { id: '9', title: 'Bundle of Joy', category: 'Baby Shower', location: 'Pune', gradient: 'from-pink-400 to-purple-400', description: 'Enchanted garden baby shower' },
  { id: '10', title: 'The Royal Kapoor Wedding', category: 'Royal Weddings', location: 'Jodhpur', gradient: 'from-red-500 to-amber-500', description: 'Fort wedding with elephant procession' },
  { id: '11', title: 'Seaside Engagement', category: 'Beach Weddings', location: 'Kerala', gradient: 'from-teal-400 to-blue-400', description: 'Backwater engagement ceremony' },
  { id: '12', title: 'Neon Birthday Bash', category: 'Birthday Celebrations', location: 'Mumbai', gradient: 'from-violet-500 to-fuchsia-500', description: 'Neon-themed 21st birthday party' },
];

// --- Statistics ---
export const statistics = [
  { label: 'Events Managed', value: 10000, suffix: '+', icon: '🎉' },
  { label: 'Event Partners', value: 500, suffix: '+', icon: '🤝' },
  { label: 'Cities Covered', value: 50, suffix: '+', icon: '🌆' },
  { label: 'Customer Satisfaction', value: 98, suffix: '%', icon: '⭐' },
];

// --- Booking Steps ---
export const bookingSteps = [
  { step: 1, title: 'Choose Event', description: 'Select your event type', icon: '🎯' },
  { step: 2, title: 'Choose Planner', description: 'Browse and select a planner', icon: '👤' },
  { step: 3, title: 'Select Date', description: 'Pick your preferred date', icon: '📅' },
  { step: 4, title: 'Customize', description: 'Add your requirements', icon: '✨' },
  { step: 5, title: 'Payment', description: 'Secure payment', icon: '💳' },
  { step: 6, title: 'Confirmation', description: 'Booking confirmed!', icon: '✅' },
];

// --- AI Search Suggestions ---
export const searchSuggestions = [
  'I need a wedding planner under ₹2 lakhs',
  'I want a birthday decorator in Hyderabad',
  'Find me a beach wedding planner in Goa',
  'Corporate event planner for 500+ guests',
  'Haldi ceremony decorator in Delhi',
  'Luxury anniversary planner in Jaipur',
  'Baby shower organizer under ₹1 lakh',
  'Mehendi artist and planner in Mumbai',
];
