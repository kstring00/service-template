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
    background: "#090b0d",
    surface: "#13171b",
    ink: "#f6f3ec",
    muted: "#a7adb2",
    accent: "#d8ff54",
    accent2: "#7ce0ff"
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
