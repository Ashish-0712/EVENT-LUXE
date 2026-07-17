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
  images: string[];
  videoUrl?: string;
  beforeAfterImages?: { before: string; after: string }[];
}

export interface Category {
  id: string;
  name: string;
  description: string;
  icon: string;
  gradient: string;
  count: number;
}

export interface Planner {
  id: string;
  company: string;
  ownerName: string;
  rating: number;
  reviewCount: number;
  completedEvents: number;
  yearsExperience: number;
  startingPrice: number;
  city: string;
  specializations: string[];
  about: string;
  packages: Package[];
  verified: boolean;
  image: string;
  availableDates: string[];
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

export const categories: Category[] = [
  { id: "wedding", name: "Luxury Weddings", description: "Grand ceremonies with world-class decor, from beach to palace venues.", icon: "💍", gradient: "from-[#D4AF37] to-[#F3E5AB]", count: 120 },
  { id: "corporate", name: "Corporate Events", description: "Professional conferences, galas, product launches, and award nights.", icon: "🏢", gradient: "from-[#00c6ff] to-[#0072ff]", count: 85 },
  { id: "birthday", name: "Birthday Parties", description: "From kids' parties to luxurious milestone celebrations.", icon: "🎂", gradient: "from-[#f093fb] to-[#f5576c]", count: 200 },
  { id: "cultural", name: "Cultural Programs", description: "Traditional ceremonies, festive celebrations, and cultural showcases.", icon: "🎭", gradient: "from-[#ff7e5f] to-[#feb47b]", count: 60 },
  { id: "concert", name: "Concerts & Music", description: "Electric nights with top artists and unforgettable stage experiences.", icon: "🎵", gradient: "from-[#833ab4] via-[#fd1d1d] to-[#fcb045]", count: 45 },
  { id: "baby-shower", name: "Baby Showers & More", description: "Elegant intimate events for life's most joyful milestones.", icon: "🌸", gradient: "from-[#11998e] to-[#38ef7d]", count: 90 }
];

// Direct working high-quality Unsplash URLs
export const galleryEvents = [
  {
    id: "g1",
    title: "Sunset Serenade",
    category: "Luxury Beach Weddings",
    location: "Goa, India",
    description: "An ethereal beach wedding as the sun dipped below the horizon.",
    image: "https://images.unsplash.com/photo-1515934751635-c81c6bc9a2d8?auto=format&fit=crop&w=1200&q=80",
    images: [
      "https://images.unsplash.com/photo-1515934751635-c81c6bc9a2d8?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1519225495810-7517c319b53b?auto=format&fit=crop&w=1200&q=80"
    ],
    gradient: "from-[#ff7e5f] to-[#feb47b]"
  },
  {
    id: "g2",
    title: "The Royal Heritage",
    category: "Royal Palace Weddings",
    location: "Udaipur, India",
    description: "A grand celebration reflecting centuries of royal heritage.",
    image: "https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=1200&q=80",
    images: [
      "https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1544078751-58feb2d78f74?auto=format&fit=crop&w=1200&q=80"
    ],
    gradient: "from-[#8E2DE2] to-[#4A00E0]"
  },
  {
    id: "g3",
    title: "Vibrant Haldi",
    category: "Haldi Ceremony",
    location: "Jaipur, India",
    description: "A joyous splash of yellow and floral extravagance.",
    image: "https://images.unsplash.com/photo-1607190074257-dd4b7af0309f?auto=format&fit=crop&w=1200&q=80",
    images: [
      "https://images.unsplash.com/photo-1607190074257-dd4b7af0309f?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1591604466107-ec97de577aff?auto=format&fit=crop&w=1200&q=80"
    ],
    gradient: "from-[#f12711] to-[#f5af19]"
  },
  {
    id: "g4",
    title: "Tech Innovators Summit",
    category: "Corporate Events",
    location: "Bangalore, India",
    description: "A state-of-the-art corporate gathering for 1000+ industry leaders.",
    image: "https://images.unsplash.com/photo-1511578314322-379afb476865?auto=format&fit=crop&w=1200&q=80",
    images: [
      "https://images.unsplash.com/photo-1511578314322-379afb476865?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1475721027785-f74eccf877e2?auto=format&fit=crop&w=1200&q=80"
    ],
    gradient: "from-[#00c6ff] to-[#0072ff]"
  },
  {
    id: "g5",
    title: "Rhythm & Lights",
    category: "Music Concerts",
    location: "Mumbai, India",
    description: "A high-octane musical night featuring top artists and laser shows.",
    image: "https://images.unsplash.com/photo-1470225620780-dba8ba36b745?auto=format&fit=crop&w=1200&q=80",
    images: [
      "https://images.unsplash.com/photo-1470225620780-dba8ba36b745?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1506157786151-b8491531f063?auto=format&fit=crop&w=1200&q=80"
    ],
    gradient: "from-[#833ab4] via-[#fd1d1d] to-[#fcb045]"
  },
  {
    id: "g6",
    title: "Enchanted Garden Party",
    category: "Luxury Birthday Celebrations",
    location: "Delhi, India",
    description: "A milestone birthday set in a transformed magical garden.",
    image: "https://images.unsplash.com/photo-1530103862676-de8c9debad1d?auto=format&fit=crop&w=1200&q=80",
    images: [
      "https://images.unsplash.com/photo-1530103862676-de8c9debad1d?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1464366400600-7168b8af9bc3?auto=format&fit=crop&w=1200&q=80"
    ],
    gradient: "from-[#11998e] to-[#38ef7d]"
  }
];

export const planners: Planner[] = [
  {
    id: "royal-celebrations",
    company: "Royal Celebrations",
    ownerName: "Rahul Kapoor",
    rating: 4.9,
    reviewCount: 128,
    completedEvents: 300,
    yearsExperience: 12,
    startingPrice: 1500000,
    city: "Udaipur",
    specializations: ["Royal Palace Weddings", "Destination Weddings", "Haldi Ceremony"],
    about: "Specializing in crafting majestic, larger-than-life experiences in India's most historic palaces. We blend traditional grandeur with modern luxury.",
    verified: true,
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=600&q=80",
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
        description: "A 3-day royal affair with over 800 guests.",
        images: [
          "https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=1200&q=80",
          "https://images.unsplash.com/photo-1544078751-58feb2d78f74?auto=format&fit=crop&w=1200&q=80"
        ],
        beforeAfterImages: [
          {
            before: "https://images.unsplash.com/photo-1519167758481-83f550bb49b3?auto=format&fit=crop&w=800&q=80",
            after: "https://images.unsplash.com/photo-1519225495810-7517c319b53b?auto=format&fit=crop&w=800&q=80"
          }
        ]
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
    yearsExperience: 9,
    startingPrice: 500000,
    city: "Mumbai",
    specializations: ["Corporate Events", "Award Functions", "Luxury Birthday Celebrations"],
    about: "The go-to agency for high-profile corporate summits, glamorous award nights, and milestone birthdays.",
    verified: true,
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=600&q=80",
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
        description: "Recognizing the top tech talent of the year.",
        images: [
          "https://images.unsplash.com/photo-1511578314322-379afb476865?auto=format&fit=crop&w=1200&q=80",
          "https://images.unsplash.com/photo-1475721027785-f74eccf877e2?auto=format&fit=crop&w=1200&q=80"
        ]
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
    yearsExperience: 7,
    startingPrice: 800000,
    city: "Goa",
    specializations: ["Luxury Beach Weddings", "Music Concerts", "Sangeet Night"],
    about: "Masters of creating breathtaking beachfront celebrations and electrifying music events under the stars.",
    verified: true,
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=600&q=80",
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
        images: [
          "https://images.unsplash.com/photo-1515934751635-c81c6bc9a2d8?auto=format&fit=crop&w=1200&q=80",
          "https://images.unsplash.com/photo-1506157786151-b8491531f063?auto=format&fit=crop&w=1200&q=80"
        ],
        beforeAfterImages: [
          {
            before: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=800&q=80",
            after: "https://images.unsplash.com/photo-1519225495810-7517c319b53b?auto=format&fit=crop&w=800&q=80"
          }
        ]
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

export const bookingSteps = [
  { step: 1, title: "Tell Us Your Vision", description: "Share your event details, budget, and preferences through our smart form.", icon: "📝" },
  { step: 2, title: "Get Matched", description: "Our AI matches you with the perfect premium planners for your specific needs.", icon: "✨" },
  { step: 3, title: "Compare & Select", description: "Review customized quotations, portfolios, and chat with planners.", icon: "🤝" },
  { step: 4, title: "Celebrate", description: "Relax and enjoy your spectacular event while the experts handle everything.", icon: "🥂" }
];

export const testimonials = [
  {
    id: "t1",
    name: "Anjali & Rahul",
    role: "Happy Couple",
    event: "Royal Palace Wedding",
    planner: "Royal Celebrations",
    image: "https://images.unsplash.com/photo-1621184455862-c163dfb30e0f?auto=format&fit=crop&w=100&q=80",
    comment: "EventLuxe made our dream wedding a reality. The planners we found here were incredibly professional and brought our vision to life beautifully.",
    rating: 5
  },
  {
    id: "t2",
    name: "Vikram Singh",
    role: "Corporate Director",
    event: "Annual Tech Summit",
    planner: "Dream Events Co.",
    image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=100&q=80",
    comment: "We used EventLuxe for our annual corporate gala. The seamless booking process and top-tier event managers exceeded our expectations.",
    rating: 5
  },
  {
    id: "t3",
    name: "Priya Patel",
    role: "Birthday Organizer",
    event: "Sweet Sixteen Celebration",
    planner: "Elite Gatherings",
    image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=100&q=80",
    comment: "Finding a planner for my daughter's sweet sixteen was so stressful until I found this platform. Highly recommended!",
    rating: 4
  },
  {
    id: "t4",
    name: "Rohan Mehta",
    role: "Groom",
    event: "Beachside Sangeet Night",
    planner: "Elite Gatherings",
    image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=100&q=80",
    comment: "Our sangeet was the talk of the town! Every single detail was handled perfectly. Thank you EventLuxe!",
    rating: 5
  },
  {
    id: "t5",
    name: "Sunita Rao",
    role: "Event Head",
    event: "National Award Function",
    planner: "Dream Events Co.",
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=100&q=80",
    comment: "A flawless award night with 700+ guests. Impeccable staging, lighting, and hospitality. Would absolutely use again.",
    rating: 5
  }
];

export const statistics = [
  { label: "Events Planned", value: 5000, suffix: "+", icon: "🎉" },
  { label: "Happy Clients", value: 12000, suffix: "+", icon: "😊" },
  { label: "Cities Covered", value: 50, suffix: "+", icon: "📍" },
  { label: "Expert Planners", value: 300, suffix: "+", icon: "⭐" }
];
