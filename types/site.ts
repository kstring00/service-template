/**
 * Shape of config/business.ts. Every piece of customer-facing business content
 * lives in that one file so a clone only ever edits config, never components.
 */

export type VehicleSizeId = "sedan" | "mid" | "large";

export type VehicleSize = {
  id: VehicleSizeId;
  label: string;
  /** Examples shown under the label, e.g. "Civic, Camry, Mustang". */
  examples: string;
};

export type DetailPackage = {
  id: string;
  name: string;
  /** One-line plain summary under the name. */
  summary: string;
  /** Price per vehicle size, in whole dollars. */
  price: Record<VehicleSizeId, number>;
  /** Time the car is tied up, in plain words, e.g. "2 to 3 hours". */
  time: string;
  /** Plain checklist of what is included. */
  includes: string[];
  /** Items this package adds over the one before it. Shown highlighted. */
  addsOverPrevious?: string[];
  /** Honest note about heavily soiled vehicles, shown on interior packages. */
  badCarNote?: string;
  /** id of the before/after pair that shows this package's result. */
  proofPairId?: string;
  featured?: boolean;
};

export type AddOn = {
  id: string;
  name: string;
  /** Flat price in dollars. Use priceRange for "from/to" items. */
  price?: number;
  priceRange?: [number, number];
  /** What it fixes and what it cannot, in one or two plain sentences. */
  note: string;
};

export type BeforeAfterPair = {
  id: string;
  /** Short label, e.g. "Full Detail · Pickup interior". */
  label: string;
  /** One line on what was done and what the owner should notice. */
  caption: string;
  /** Image basenames under public/images (without extension); see scripts/images.mjs. */
  before: string;
  after: string;
  beforeAlt: string;
  afterAlt: string;
};

export type Review = {
  /** First name and last initial only, e.g. "Marisol T." */
  name: string;
  source: string;
  quote: string;
  /** Package or service the review is about, shown as context. */
  service?: string;
};

export type FAQ = { question: string; answer: string };

export type ProcessStep = { title: string; body: string };

export type HoursRow = { days: string; hours: string };

export type BusinessConfig = {
  /** CONCEPT: nothing sends anywhere, every claim is labeled as a sample. */
  mode: "concept" | "client";
  businessName: string;
  shortName: string;
  town: string;
  state: string;
  /** Whole-number list of towns served, shown in the service-area section. */
  serviceArea: string[];
  serviceAreaNote: string;
  mobile: boolean;
  shop: boolean;
  phoneDisplay: string;
  phoneE164: string;
  email: string;
  hours: HoursRow[];
  /** Answers the "do you need my water or power?" question in one line. */
  waterPowerAnswer: string;
  insuredStatement: string;
  yearsInBusiness: number;
  owner: {
    name: string;
    role: string;
    photo: string;
    photoAlt: string;
    bio: string;
  };
  booking: {
    /** "owner-confirms" means the form is a request, not a booking. */
    model: "owner-confirms";
    /** "I'll text you within 2 business hours to confirm your date." */
    responsePromise: string;
    depositLine: string;
    cancellationLine: string;
  };
  headlines: {
    hero: string;
    heroSub: string;
    heroNext: string;
    proof: string;
    packages: string;
    process: string;
    reviews: string;
    area: string;
    owner: string;
    booking: string;
    faq: string;
  };
  heroImage: { src: string; alt: string };
  vanImage: { src: string; alt: string };
  vehicleSizes: VehicleSize[];
  packages: DetailPackage[];
  addOns: AddOn[];
  beforeAfter: BeforeAfterPair[];
  process: ProcessStep[];
  reviews: Review[];
  faqs: FAQ[];
  concept: {
    tagText: string;
    tagUrl: string;
    footerLine: string;
  };
  /** Microsoft Clarity project id. Leave empty to disable tracking. */
  clarityProjectId: string;
  brand: { accent: string; accentDeep: string; ink: string; paper: string };
};
