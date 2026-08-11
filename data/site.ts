import type { AddOn, BeforeAfter, DetailPackage, FAQ, GalleryItem, NeedMatch, Review, Service, ServiceArea } from "@/types/site";

export const packages: DetailPackage[] = [
  {
    id: "essential",
    name: "Essential",
    tagline: "Maintenance Detail",
    description: "A crisp reset for vehicles that are already in decent shape and need consistent upkeep.",
    startingPrice: "$129",
    duration: "1.5–2.5 hrs",
    idealFor: "Weekly drivers + regular maintenance",
    features: ["Hand wash + dry", "Wheels + tires", "Interior vacuum", "Dash + console wipe-down", "Interior glass", "Tire finish"]
  },
  {
    id: "signature",
    name: "Signature",
    tagline: "Inside + Out",
    description: "The full Vanta treatment with a deeper interior clean and exterior protection.",
    startingPrice: "$219",
    duration: "3–4 hrs",
    featured: true,
    idealFor: "Most first-time clients",
    features: ["Everything in Essential", "Deep interior clean", "Mats + crevices", "Door jambs", "Paint decontamination", "Premium sealant"]
  },
  {
    id: "restore",
    name: "Restore",
    tagline: "Deep Transformation",
    description: "For vehicles that need significantly more time, extraction, correction, or specialty attention.",
    startingPrice: "$329",
    duration: "4–6+ hrs",
    idealFor: "Heavy buildup + neglected interiors",
    features: ["Everything in Signature", "Fabric extraction", "Leather deep clean", "Stain treatment", "Pet-hair assessment", "Detail-brush deep clean"]
  }
];

export const needMatches: NeedMatch[] = [
  { prompt: "Just needs maintenance", recommendation: "Essential", detail: "Fast, polished upkeep without overbuying.", targetId: "essential" },
  { prompt: "Interior is getting rough", recommendation: "Restore", detail: "More time for buildup, stains, mats, and crevices.", targetId: "restore" },
  { prompt: "I want the whole vehicle transformed", recommendation: "Signature", detail: "Our most balanced inside-and-out reset.", targetId: "signature" },
  { prompt: "Paint has swirls or haze", recommendation: "Paint Correction", detail: "A focused route for gloss and defect reduction.", targetId: "paint-correction" },
  { prompt: "I want long-term paint protection", recommendation: "Ceramic Coating", detail: "Protection-focused service after proper prep.", targetId: "ceramic" }
];

export const services: Service[] = [
  {
    id: "ceramic",
    name: "Ceramic Coating",
    eyebrow: "PROTECTION",
    description: "A premium protection path for easier maintenance, deeper gloss, and longer-lasting surface performance.",
    startingPrice: "$699",
    image: "https://images.unsplash.com/photo-1503736334956-4c8f8e92946d?auto=format&fit=crop&w=1200&q=85"
  },
  {
    id: "paint-correction",
    name: "Paint Correction",
    eyebrow: "GLOSS",
    description: "Machine-polishing options for visible swirls, haze, oxidation, and tired-looking paint.",
    startingPrice: "$449",
    image: "https://images.unsplash.com/photo-1494976388531-d1058494cdd8?auto=format&fit=crop&w=1200&q=85"
  },
  {
    id: "interior",
    name: "Interior Reset",
    eyebrow: "DEEP CLEAN",
    description: "Focused interior cleaning for high-touch surfaces, seats, carpets, mats, vents, and hard-to-reach areas.",
    startingPrice: "$179",
    image: "https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&w=1200&q=85"
  }
];

export const addOns: AddOn[] = [
  { name: "Pet Hair Removal", description: "Added time for embedded fur in carpet, mats, and fabric.", startingPrice: "$40" },
  { name: "Engine Bay Detail", description: "Careful cosmetic clean and dressing of visible engine-bay surfaces.", startingPrice: "$55" },
  { name: "Headlight Restoration", description: "Clarity-focused correction for oxidized exterior lenses.", startingPrice: "$75" },
  { name: "Odor Treatment", description: "Targeted deodorizing after the source has been identified and cleaned.", startingPrice: "$45" }
];

export const beforeAfter: BeforeAfter[] = [
  {
    id: "paint",
    category: "Paint Correction",
    title: "From flat to reflective.",
    description: "A concept example of the transformation-focused proof this master is designed to showcase.",
    before: "https://images.unsplash.com/photo-1519641471654-76ce0107ad1b?auto=format&fit=crop&w=1400&q=80",
    after: "https://images.unsplash.com/photo-1504215680853-026ed2a45def?auto=format&fit=crop&w=1400&q=90"
  }
];

export const gallery: GalleryItem[] = [
  { id: "g1", src: "https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?auto=format&fit=crop&w=1400&q=85", alt: "Dark performance car with polished paint", category: "Exterior", caption: "Deep gloss" },
  { id: "g2", src: "https://images.unsplash.com/photo-1553440569-bcc63803a83d?auto=format&fit=crop&w=1000&q=85", alt: "Premium vehicle interior", category: "Interior", caption: "Cabin reset" },
  { id: "g3", src: "https://images.unsplash.com/photo-1542282088-72c9c27ed0cd?auto=format&fit=crop&w=1000&q=85", alt: "Detailed sports car wheel and body", category: "Wheels", caption: "Finished details" },
  { id: "g4", src: "https://images.unsplash.com/photo-1555215695-3004980ad54e?auto=format&fit=crop&w=1200&q=85", alt: "Clean luxury vehicle", category: "Premium", caption: "Protection ready" }
];

export const serviceAreas: ServiceArea[] = [
  { city: "Sugar Land", state: "TX", notes: "Core service area" },
  { city: "Missouri City", state: "TX", notes: "Core service area" },
  { city: "Stafford", state: "TX", notes: "Core service area" },
  { city: "Pearland", state: "TX", notes: "Availability varies by day" },
  { city: "Richmond", state: "TX", notes: "Availability varies by day" },
  { city: "Southwest Houston", state: "TX", notes: "ZIP-code confirmation recommended" }
];

export const reviewThemes = ["On-time arrival", "Professional", "Convenient", "Great communication", "Showroom finish"];

export const reviews: Review[] = [
  { id: "r1", name: "Demo Customer", rating: 5, quote: "The kind of review that should go here: specific, believable, and focused on the actual customer experience.", detail: "PLACEHOLDER REVIEW — REPLACE FOR CLIENT" },
  { id: "r2", name: "Demo Customer", rating: 5, quote: "Use verified Google review content here when tailoring this master for a real detailing business.", detail: "PLACEHOLDER REVIEW — REPLACE FOR CLIENT" }
];

export const faqs: FAQ[] = [
  { question: "Do you come to my house?", answer: "Yes. This demo is configured as a mobile service. For a real client, update this answer to match the business's actual service model." },
  { question: "Do I need to provide water or electricity?", answer: "The demo config says the team brings water and power. Confirm this with the real business before publishing." },
  { question: "How long does detailing take?", answer: "Timing depends on vehicle size, condition, and package. The package cards give a useful starting range rather than promising an exact finish time." },
  { question: "What happens if it rains?", answer: "Weather policies vary by operator. Replace this answer with the detailer's actual rescheduling or covered-workspace policy." },
  { question: "Do you work on trucks and SUVs?", answer: "This template supports vehicle-size pricing and notes. Configure the real operator's vehicle restrictions and surcharges before launch." },
  { question: "Do you remove pet hair and stains?", answer: "Specialty cleanup can require added time and pricing. Use the add-ons section to make that expectation clear before the quote." },
  { question: "What's the difference between detailing and a car wash?", answer: "Detailing is a more thorough, hands-on service focused on cleaning, restoration, and protection rather than a quick exterior wash." },
  { question: "How far do you travel?", answer: "Check the service-area section or text your ZIP code. The real client site should list only verified areas they actually serve." }
];
