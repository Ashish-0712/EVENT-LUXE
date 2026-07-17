export interface Package {
  name: string;
  price: number;
  features: string[];
  popular?: boolean;
}

export interface PortfolioItem {
  id: string;
  title: string;
  category: string;
  location: string;
  description: string;
  images: string[]; // High quality Unsplash URLs
  videoUrl?: string; // Optional mockup video URL
  beforeAfterImages?: { before: string; after: string }[];
}

export interface Planner {
  id: string;
  company: string;
  ownerName: string;
  rating: number;
  reviewCount: number;
  completedEvents: number;
  city: string;
  specializations: string[];
  about: string;
  packages: Package[];
  verified: boolean;
  image: string;
  availableDates: string[]; // ISO strings
  awards?: string[];
  portfolio: PortfolioItem[];
  droneFootageAvailable: boolean;
  decorationThemes: string[];
  setupProcess: string[];
}

export const galleryCategories = [
  "All",
  "Luxury Beach Weddings",
  "Royal Palace Weddings",
  "Traditional Indian Weddings",
  "Destination Weddings",
  "Haldi Ceremony",
  "Mehendi Ceremony",
  "Sangeet Night",
  "Wedding Reception",
  "Birthday Parties (Kids)",
  "Luxury Birthday Celebrations",
  "Baby Shower",
  "Engagement Ceremony",
  "Anniversary Celebration",
  "Housewarming Ceremony",
  "Corporate Events",
  "College Fest",
  "Cultural Programs",
  "Music Concerts",
  "Fashion Shows",
  "Award Functions"
];

// Helper to generate unsplash queries
const unsplash = (query: string, width = 1920, height = 1080) => `https://source.unsplash.com/${width}x${height}/?${query}`;

export const galleryEvents = [
  {
    id: "g1",
    title: "Sunset Serenade",
    category: "Luxury Beach Weddings",
    location: "Goa, India",
    description: "An ethereal beach wedding as the sun dipped below the horizon.",
    image: unsplash("beach,wedding,luxury"),
    images: [unsplash("beach,wedding,sunset"), unsplash("beach,wedding,decor")],
    gradient: "from-[#ff7e5f] to-[#feb47b]"
  },
  {
    id: "g2",
    title: "The Royal Heritage",
    category: "Royal Palace Weddings",
    location: "Udaipur, India",
    description: "A grand celebration reflecting centuries of royal heritage.",
    image: unsplash("palace,wedding,royal"),
    images: [unsplash("palace,wedding"), unsplash("royal,decor,wedding")],
    gradient: "from-[#8E2DE2] to-[#4A00E0]"
  },
  {
    id: "g3",
    title: "Vibrant Haldi",
    category: "Haldi Ceremony",
    location: "Jaipur, India",
    description: "A joyous splash of yellow and floral extravagance.",
    image: unsplash("haldi,wedding,indian"),
    images: [unsplash("yellow,flowers,wedding"), unsplash("haldi,ceremony")],
    gradient: "from-[#f12711] to-[#f5af19]"
  },
  {
    id: "g4",
    title: "Tech Innovators Summit",
    category: "Corporate Events",
    location: "Bangalore, India",
    description: "A state-of-the-art corporate gathering for 1000+ industry leaders.",
    image: unsplash("corporate,event,conference"),
    images: [unsplash("conference,stage"), unsplash("corporate,networking")],
    gradient: "from-[#00c6ff] to-[#0072ff]"
  },
  {
    id: "g5",
    title: "Rhythm & Lights",
    category: "Music Concerts",
    location: "Mumbai, India",
    description: "A high-octane musical night featuring top artists and laser shows.",
    image: unsplash("concert,stage,lights"),
    images: [unsplash("concert,crowd"), unsplash("laser,show,concert")],
    gradient: "from-[#833ab4] via-[#fd1d1d] to-[#fcb045]"
  },
  {
    id: "g6",
    title: "Enchanted Garden Party",
    category: "Luxury Birthday Celebrations",
    location: "Delhi, India",
    description: "A milestone birthday set in a transformed magical garden.",
    image: unsplash("birthday,luxury,garden"),
    images: [unsplash("birthday,decor"), unsplash("luxury,party")],
    gradient: "from-[#11998e] to-[#38ef7d]"
  }
  // We can scale this to 50+ items in production. Keeping 6 for initial mock to prevent file bloat.
];

export const planners: Planner[] = [
  {
    id: "royal-celebrations",
    company: "Royal Celebrations",
    ownerName: "Rahul Kapoor",
    rating: 4.9,
    reviewCount: 128,
    completedEvents: 300,
    city: "Udaipur",
    specializations: ["Royal Palace Weddings", "Destination Weddings", "Haldi Ceremony"],
    about: "Specializing in crafting majestic, larger-than-life experiences in India's most historic palaces. We blend traditional grandeur with modern luxury.",
    verified: true,
    image: unsplash("wedding,planner,portrait"),
    awards: ["Best Destination Planner 2025", "Vogue Wedding of the Year"],
    availableDates: ["2026-11-15T00:00:00Z", "2026-12-01T00:00:00Z"],
    droneFootageAvailable: true,
    decorationThemes: ["Rajputana Grandeur", "Mughal Elegance", "Modern Minimalist"],
    setupProcess: ["Initial Consultation", "Venue Scouting", "3D Theme Rendering", "Vendor Onboarding", "Execution"],
    portfolio: [
      {
        id: "p1",
        title: "The Mewar Extravaganza",
        category: "Royal Palace Weddings",
        location: "Taj Lake Palace",
        description: "A 3-day royal affair.",
        images: [unsplash("palace,wedding"), unsplash("wedding,mandap")],
        beforeAfterImages: [{ before: unsplash("empty,hall"), after: unsplash("decorated,wedding,hall") }]
      }
    ],
    packages: [
      { name: "Silver Package", price: 1500000, features: ["Venue Selection", "Basic Decor", "Photography"] },
      { name: "Gold Package", price: 3500000, features: ["Premium Decor", "Catering", "Cinematography", "Entertainment"], popular: true },
      { name: "Platinum Package", price: 8000000, features: ["End-to-End Management", "Celebrity Artist", "Helicopter Entry"] }
    ]
  },
  {
    id: "dream-events",
    company: "Dream Events Co.",
    ownerName: "Priya Sharma",
    rating: 4.8,
    reviewCount: 95,
    completedEvents: 210,
    city: "Mumbai",
    specializations: ["Corporate Events", "Award Functions", "Luxury Birthday Celebrations"],
    about: "The go-to agency for high-profile corporate summits, glamorous award nights, and milestone birthdays.",
    verified: true,
    image: unsplash("corporate,planner"),
    availableDates: ["2026-10-20T00:00:00Z", "2026-10-25T00:00:00Z"],
    droneFootageAvailable: false,
    decorationThemes: ["Cyberpunk Corporate", "Classic Gala", "Neon Nights"],
    setupProcess: ["Briefing", "Concept Design", "Logistics Planning", "Rehearsals", "Showtime"],
    portfolio: [
      {
        id: "p2",
        title: "Tech Innovators Awards",
        category: "Award Functions",
        location: "Jio World Centre",
        description: "Recognizing the top tech talent.",
        images: [unsplash("award,stage"), unsplash("corporate,gala")]
      }
    ],
    packages: [
      { name: "Standard", price: 500000, features: ["Stage Setup", "AV Equipment", "Basic Catering"] },
      { name: "Premium", price: 1200000, features: ["LED Walls", "Artist Management", "Gourmet Catering"], popular: true }
    ]
  },
  {
    id: "elite-gatherings",
    company: "Elite Gatherings",
    ownerName: "Arjun Desai",
    rating: 4.7,
    reviewCount: 82,
    completedEvents: 150,
    city: "Goa",
    specializations: ["Luxury Beach Weddings", "Music Concerts", "Sangeet Night"],
    about: "Masters of creating breathtaking beachfront celebrations and electrifying music events under the stars.",
    verified: true,
    image: unsplash("beach,planner"),
    availableDates: ["2026-12-10T00:00:00Z", "2026-12-25T00:00:00Z"],
    droneFootageAvailable: true,
    decorationThemes: ["Boho Chic", "Tropical Paradise", "Sunset Glow"],
    setupProcess: ["Theme Selection", "Permits & Licensing", "Stage Construction", "Lighting Design", "Execution"],
    portfolio: [
      {
        id: "p3",
        title: "Sunset Vows",
        category: "Luxury Beach Weddings",
        location: "South Goa",
        description: "A private beach wedding with bohemian decor.",
        images: [unsplash("beach,wedding,sunset"), unsplash("boho,wedding,decor")],
        beforeAfterImages: [{ before: unsplash("empty,beach"), after: unsplash("decorated,beach,wedding") }]
      }
    ],
    packages: [
      { name: "Intimate", price: 800000, features: ["Beach Permit", "Floral Arch", "Acoustic Band"] },
      { name: "Grand", price: 2500000, features: ["Private Cove", "Fire Show", "DJ Setup", "Premium Catering"], popular: true }
    ]
  }
];

export const searchSuggestions = [
  "Luxury Beach Wedding in Goa",
  "Corporate Event for 500 in Mumbai",
  "Royal Palace Wedding under 50 Lakhs",
  "Kids Birthday Party Planners in Delhi",
  "Award Function Organizers"
];

// Mock Dealer Dashboard Data (Simulating new marketplace requests)
export const mockMarketplaceRequests = [
  {
    id: "req-1",
    customer: "Vikram Malhotra",
    eventType: "Luxury Beach Weddings",
    budget: "₹25L - ₹50L",
    date: "Dec 15, 2026",
    venue: "Goa",
    status: "Pending",
    requirements: ["Drone Photography", "Fire Dancers", "Premium Bar Setup"]
  },
  {
    id: "req-2",
    customer: "Neha Gupta",
    eventType: "Haldi Ceremony",
    budget: "₹5L - ₹15L",
    date: "Nov 02, 2026",
    venue: "Jaipur",
    status: "Pending",
    requirements: ["Yellow Floral Theme", "Live Dhol", "Traditional Catering"]
  }
];
