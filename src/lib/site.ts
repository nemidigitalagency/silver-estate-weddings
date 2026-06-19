export const SITE = {
  name: "Silver Estate Resort",
  tagline: "The Perfect Destination For Grand Weddings",
  location: "Tikamgarh, Madhya Pradesh, India",
  phone: "+91 9651018681",
  phoneRaw: "+919651018681",
  email: "akjshopqr@gmail.com",
  instagram: "https://instagram.com/silver_estate_resort",
  instagramHandle: "@silver_estate_resort",
  whatsapp: "https://wa.me/919651018681",
  mapsQuery: "Silver Estate Resort Tikamgarh",
};

export const NAV = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About" },
  { to: "/weddings", label: "Weddings" },
  { to: "/rooms", label: "Rooms" },
  { to: "/restaurant", label: "Restaurant" },
  { to: "/amenities", label: "Amenities" },
  { to: "/booking", label: "Booking" },
  { to: "/contact", label: "Contact" },
] as const;

export const WEDDING_SERVICES = [
  { title: "Destination Weddings", desc: "Pan-India couples choose Silver Estate for a flawless destination affair." },
  { title: "Royal Weddings", desc: "Regal mandaps, baraat processions and palatial décor." },
  { title: "Luxury Weddings", desc: "White-glove planning, gourmet catering and cinematic décor." },
  { title: "Engagements", desc: "Intimate evenings with curated lighting and live music." },
  { title: "Haldi", desc: "Sun-drenched lawns dressed in marigold and turmeric tones." },
  { title: "Mehendi", desc: "Boho-luxe canopies, live henna artists and signature mocktails." },
  { title: "Sangeet", desc: "Grand stage, LED walls and DJ-lit dance floors." },
  { title: "Receptions", desc: "Ballroom-style receptions with premium plated dining." },
  { title: "Family Celebrations", desc: "Birthdays, anniversaries and milestone moments." },
  { title: "Corporate Events", desc: "Conferences, off-sites and brand launches." },
];

export const AMENITIES = [
  "Swimming Pool", "Kids Play Area", "Parking", "Power Backup",
  "AC Rooms", "WiFi", "Conference Hall", "Garden Lawn",
  "DJ Area", "Stage Setup", "Decoration Services", "Catering",
  "Live Music", "Premium Food", "Security Staff", "Reception Services",
];

export const EVENT_TYPES = [
  "Wedding", "Engagement", "Haldi", "Mehendi", "Sangeet",
  "Reception", "Birthday", "Anniversary", "Corporate Event", "Other",
];
