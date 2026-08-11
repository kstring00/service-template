import type { BusinessConfig } from "@/types/site";

/**
 * CLIENT CLONE CHECKLIST — START HERE.
 * Replace demo values with verified prospect information before launch.
 */
export const business: BusinessConfig = {
  previewMode: true,
  businessName: "Vanta Mobile Detail",
  shortName: "Vanta",
  tagline: "Showroom results. Your driveway.",
  description:
    "A premium mobile detailing concept built around clear packages, visible results, and a frictionless quote experience.",
  cityLine: "Serving Sugar Land + Southwest Houston",
  phone: "+1 (281) 555-0198",
  smsNumber: "+1 (281) 555-0198",
  email: "hello@vantadetail.com",
  city: "Sugar Land",
  state: "TX",
  googleRating: 4.9,
  googleReviewCount: 214,
  googleReviewsUrl: "https://www.google.com/maps",
  instagramUrl: "https://www.instagram.com/",
  facebookUrl: "https://www.facebook.com/",
  yearsInBusiness: 6,
  vehiclesDetailed: "2,000+",
  insured: true,
  mobileService: true,
  shopAvailable: false,
  bringsWaterPower: true,
  sameWeekAvailability: true,
  startingPrice: "$129",
  quoteUrl: undefined,
  bookingUrl: undefined,
  crmUrl: undefined,
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
    maintenancePlans: true,
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
