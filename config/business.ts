import type { BusinessConfig } from "@/types/site";

/** Safe, non-client demo defaults. Customize before publishing a real business site. */
export const business: BusinessConfig = {
  previewMode: true,
  businessName: "Your Business Name",
  shortName: "Your Business",
  tagline: "Reliable service. Clear communication. Quality work.",
  description: "A customizable service-business website template. Replace this demonstration content with verified details for your business.",
  cityLine: "Your service area",
  city: "Your City",
  state: "ST",
  phone: "",
  smsNumber: "",
  mobileService: false,
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
    ceramicCoating: false,
    paintCorrection: false,
    fleetServices: false,
    promotions: false,
    beforeAfter: false,
    serviceArea: false
  }
};

/** Demo contact buttons remain on-page until real contact details are configured. */
export const phoneHref = business.phone ? `tel:${business.phone.replace(/[^+\d]/g, "")}` : "#quote";
export const smsHref = business.smsNumber ? `sms:${business.smsNumber.replace(/[^+\d]/g, "")}` : "#quote";
