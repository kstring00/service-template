export type FeatureFlags = {
  instantQuote: boolean;
  onlineBooking: boolean;
  maintenancePlans: boolean;
  ceramicCoating: boolean;
  paintCorrection: boolean;
  fleetServices: boolean;
  promotions: boolean;
  beforeAfter: boolean;
  serviceArea: boolean;
};

export type BusinessConfig = {
  previewMode: boolean;
  businessName: string;
  shortName: string;
  tagline: string;
  description: string;
  cityLine: string;
  phone: string;
  smsNumber: string;
  email: string;
  city: string;
  state: string;
  googleRating?: number;
  googleReviewCount?: number;
  googleReviewsUrl?: string;
  instagramUrl?: string;
  facebookUrl?: string;
  tiktokUrl?: string;
  yearsInBusiness?: number;
  vehiclesDetailed?: string;
  insured?: boolean;
  mobileService: boolean;
  shopAvailable: boolean;
  bringsWaterPower?: boolean;
  sameWeekAvailability?: boolean;
  startingPrice?: string;
  quoteUrl?: string;
  bookingUrl?: string;
  crmUrl?: string;
  brand: { background: string; surface: string; ink: string; muted: string; accent: string; accent2: string };
  features: FeatureFlags;
};

export type DetailPackage = {
  id: string;
  name: string;
  tagline: string;
  description: string;
  startingPrice?: string;
  duration?: string;
  featured?: boolean;
  idealFor: string;
  features: string[];
  quoteUrl?: string;
};

export type Service = {
  id: string;
  name: string;
  description: string;
  eyebrow: string;
  startingPrice?: string;
  image: string;
  enabled?: boolean;
};

export type AddOn = { name: string; description: string; startingPrice?: string };
export type GalleryItem = { id: string; src: string; alt: string; category: string; caption?: string };
export type BeforeAfter = { id: string; before: string; after: string; category: string; title: string; description: string };
export type Review = { id: string; name: string; quote: string; rating: number; detail: string };
export type ServiceArea = { city: string; state: string; travelFee?: string; notes?: string };
export type FAQ = { question: string; answer: string };
export type NeedMatch = { prompt: string; recommendation: string; detail: string; targetId: string };
