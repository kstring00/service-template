import type { AddOn, BeforeAfter, DetailPackage, FAQ, GalleryItem, NeedMatch, Review, Service, ServiceArea } from "@/types/site";

export const packages: DetailPackage[] = [
  {
    id: "full-detail",
    name: "Interior + Exterior Detail",
    tagline: "COMPLETE RESET",
    description: "A thorough inside-and-out detail built around the actual condition of the vehicle rather than a rushed wash-and-wipe approach.",
    idealFor: "Daily drivers, family vehicles, and vehicles that need a true reset",
    features: ["Interior detailing", "Exterior detailing", "Hard-to-reach areas", "Condition-based attention", "Finish-focused cleanup", "Custom quote based on the vehicle"]
  },
  {
    id: "paint-correction",
    name: "Paint Correction",
    tagline: "RESTORE THE FINISH",
    description: "Correction-focused work for paint that needs more than cleaning, including visible imperfections, haze, and finish defects.",
    featured: true,
    idealFor: "Owners who want the paint to look dramatically better before protection",
    features: ["Paint inspection", "Defect-focused correction", "Gloss restoration", "Scratch assessment", "Rock-chip assessment", "Protection recommendations"]
  },
  {
    id: "ceramic",
    name: "Ceramic Coating",
    tagline: "LONG-TERM PROTECTION",
    description: "Professional ceramic coating installed with proper preparation for customers who want durable protection and a finish that is easier to maintain.",
    idealFor: "Drivers who want to protect their investment for the long term",
    features: ["Professional-grade protection", "Proper surface preparation", "Gloss-focused finish", "Long-term paint protection", "Maintenance guidance", "Custom quote based on vehicle condition"]
  }
];

export const needMatches: NeedMatch[] = [
  { prompt: "My whole vehicle needs a reset", recommendation: "Interior + Exterior Detail", detail: "Start with a complete detail and let the vehicle's condition determine the level of attention.", targetId: "full-detail" },
  { prompt: "My interior has years of buildup", recommendation: "Interior + Exterior Detail", detail: "Perfexxion reviews repeatedly highlight deep, time-intensive interior transformations.", targetId: "full-detail" },
  { prompt: "My paint has swirls, haze, or defects", recommendation: "Paint Correction", detail: "A correction-focused path for restoring clarity and gloss before protection.", targetId: "paint-correction" },
  { prompt: "I want long-term paint protection", recommendation: "Ceramic Coating", detail: "A professionally prepared coating path designed around protection, not a quick temporary shine.", targetId: "ceramic" },
  { prompt: "I have chrome that needs attention", recommendation: "Chrome Polishing", detail: "Chrome polishing is one of Perfexxion's publicly listed specialty services.", targetId: "chrome-polishing" }
];

export const services: Service[] = [
  {
    id: "ceramic",
    name: "Ceramic Coating",
    eyebrow: "PROTECTION",
    description: "Professionally installed ceramic protection with the preparation needed for a durable, high-gloss result.",
    image: "https://images.unsplash.com/photo-1503736334956-4c8f8e92946d?auto=format&fit=crop&w=1200&q=85"
  },
  {
    id: "paint-correction",
    name: "Paint Correction",
    eyebrow: "RESTORATION",
    description: "Finish correction for visible paint defects, swirls, haze, and imperfections that a standard detail cannot address.",
    image: "https://images.unsplash.com/photo-1494976388531-d1058494cdd8?auto=format&fit=crop&w=1200&q=85"
  },
  {
    id: "chrome-polishing",
    name: "Chrome Polishing",
    eyebrow: "DETAIL WORK",
    description: "Focused polishing for chrome surfaces when the details need the same level of attention as the rest of the vehicle.",
    image: "https://images.unsplash.com/photo-1542282088-72c9c27ed0cd?auto=format&fit=crop&w=1200&q=85"
  }
];

export const addOns: AddOn[] = [
  { name: "Scratch Assessment", description: "Have visible scratches evaluated as part of the quote so the right correction approach can be discussed." },
  { name: "Rock-Chip Attention", description: "Perfexxion publicly lists rock-chip work among the finish issues it can address." },
  { name: "Deep Interior Attention", description: "For neglected interiors, stains, family vehicles, and hard-to-reach areas that need more time." },
  { name: "Chrome Polishing", description: "Specialty polishing for chrome surfaces that need restoration and finishing attention." }
];

/** Temporary editorial placeholders. Replace with Perfexxion's own before/after photos in the next pass. */
export const beforeAfter: BeforeAfter[] = [
  {
    id: "paint",
    category: "Paint Correction",
    title: "The proof should be visible.",
    description: "Temporary imagery for the private preview. Perfexxion's real transformation photos will replace this in the next pass.",
    before: "https://images.unsplash.com/photo-1519641471654-76ce0107ad1b?auto=format&fit=crop&w=1400&q=80",
    after: "https://images.unsplash.com/photo-1504215680853-026ed2a45def?auto=format&fit=crop&w=1400&q=90"
  }
];

/** Temporary editorial placeholders. Replace with Perfexxion's own photos next. */
export const gallery: GalleryItem[] = [
  { id: "g1", src: "https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?auto=format&fit=crop&w=1400&q=85", alt: "Temporary performance car placeholder", category: "Exterior", caption: "Perfexxion photos coming next" },
  { id: "g2", src: "https://images.unsplash.com/photo-1553440569-bcc63803a83d?auto=format&fit=crop&w=1000&q=85", alt: "Temporary vehicle interior placeholder", category: "Interior", caption: "Deep-clean proof" },
  { id: "g3", src: "https://images.unsplash.com/photo-1542282088-72c9c27ed0cd?auto=format&fit=crop&w=1000&q=85", alt: "Temporary wheel and body placeholder", category: "Finish", caption: "Detail-level attention" },
  { id: "g4", src: "https://images.unsplash.com/photo-1555215695-3004980ad54e?auto=format&fit=crop&w=1200&q=85", alt: "Temporary clean vehicle placeholder", category: "Protection", caption: "Ceramic-ready finish" }
];

export const serviceAreas: ServiceArea[] = [
  { city: "League City", state: "TX", notes: "Publicly verified home market" }
];

export const reviewThemes = ["Meticulous attention", "Professional", "Fair value", "Deep transformations", "Responsive"];

export const reviews: Review[] = [
  { id: "r1", name: "Verified local customer", rating: 5, quote: "Our car hasn't looked this good since it was new.", detail: "Public customer review" },
  { id: "r2", name: "Verified local customer", rating: 5, quote: "It feels brand new.", detail: "Public customer review" }
];

export const faqs: FAQ[] = [
  { question: "Is Perfexxion mobile?", answer: "Yes. Perfexxion Mobile Detailing is publicly listed as a mobile detailing business based in League City, Texas." },
  { question: "What services do you offer?", answer: "Public listings identify interior and exterior detailing, paint correction, ceramic coating, and chrome polishing as core services. If you have a specific issue, text or call and describe the vehicle." },
  { question: "How much does a detail cost?", answer: "Public sources do not list a fixed menu of current prices, so this preview intentionally does not invent one. Pricing should be confirmed directly based on the vehicle, its condition, and the work requested." },
  { question: "Can you work on a heavily neglected interior?", answer: "Customer reviews repeatedly describe deep interior transformations on older and heavily used vehicles, including hard-to-reach areas. Send the vehicle condition when requesting a quote." },
  { question: "Do you offer paint correction?", answer: "Yes. Paint correction is one of Perfexxion's publicly listed specialty services for paint that needs more than a standard detail." },
  { question: "Do you install ceramic coating?", answer: "Yes. Ceramic coating is publicly listed as a specialty service, with an emphasis on professional preparation and long-term protection." },
  { question: "What areas do you serve?", answer: "League City is the publicly verified home market. Text your ZIP code to confirm availability outside League City before scheduling." },
  { question: "How do I get started?", answer: "Use the quote builder on this page or call/text Perfexxion at (409) 877-8754 with your vehicle type, condition, and the result you want." }
];
