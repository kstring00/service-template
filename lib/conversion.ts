import { business, phoneHref, smsHref } from "@/config/business";
import type { DetailPackage } from "@/types/site";

export function getQuoteUrl(pkg?: DetailPackage) {
  return pkg?.quoteUrl || business.quoteUrl || "#quote";
}

export function getBookingUrl() {
  return business.bookingUrl || business.quoteUrl || "#quote";
}

export function getCallUrl() {
  return phoneHref;
}

export function getSmsUrl(message?: string) {
  if (!message) return smsHref;
  const divider = smsHref.includes("?") ? "&" : "?";
  return `${smsHref}${divider}body=${encodeURIComponent(message)}`;
}
