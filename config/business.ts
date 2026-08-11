import type { BusinessConfig } from "@/types/site";

/**
 * PERFEXXION PROSPECT PREVIEW
 * Publicly verified facts are populated below. Anything not verified is intentionally omitted.
 * Keep previewMode on until Ryan confirms the content and approves launch.
 */
export const business: BusinessConfig = {
  previewMode: true,
  businessName: "Perfexxion Mobile Detailing",
  shortName: "Perfexxion",
  tagline: "If it's not perfect, I'm not done yet!",
  description:
    "League City mobile auto detailing focused on meticulous interior and exterior detailing, paint correction, ceramic coating, chrome polishing, and high-attention vehicle restoration.",
  cityLine: "League City, TX · Mobile Detailing",
  phone: "+1 (409) 877-8754",
  smsNumber: "+1 (409) 877-8754",
  city: "League City",
  state: "TX",
  googleRating: 4.9,
  googleReviewCount: 9,
  yearsInBusiness: 10,
  mobileService: true,
  shopAvailable: false,
  brand: {
    background: "#f5f8fa",
    surface: "#0c2632",
    ink: "#0d171c",
    muted: "#69777e",
    accent: "#00c8e8",
    accent2: "#ff5b35"
  },
  features: {
    instantQuote: true,
    onlineBooking: false,
    maintenancePlans: false,
    ceramicCoating: true,
    paintCorrection: true,
    fleetServices: false,
    promotions: false,
    beforeAfter: true,
    serviceArea: true
  }
};

export const phoneHref = `tel:${business.phone.replace(/[^+\d]/g, "")}`;
export const smsHref = `sms:${business.smsNumber.replace(/[^+\d]/g, "")}`;
