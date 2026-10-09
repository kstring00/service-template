import { business } from "@/config/business";
import type { AddOn, DetailPackage, VehicleSizeId } from "@/types/site";

export function money(n: number) {
  return `$${n.toLocaleString("en-US")}`;
}

export function addOnPriceLabel(addOn: AddOn) {
  if (addOn.priceRange) return `${money(addOn.priceRange[0])} to ${money(addOn.priceRange[1])}`;
  if (typeof addOn.price === "number") return money(addOn.price);
  return "Ask";
}

export function addOnMin(addOn: AddOn) {
  return addOn.priceRange ? addOn.priceRange[0] : addOn.price ?? 0;
}
export function addOnMax(addOn: AddOn) {
  return addOn.priceRange ? addOn.priceRange[1] : addOn.price ?? 0;
}

export type Estimate = { min: number; max: number; label: string };

/** Running estimate shown in the booking form. Ranges only widen when a ranged add-on is picked. */
export function estimate(pkg: DetailPackage | undefined, size: VehicleSizeId | undefined, addOnIds: string[]): Estimate | null {
  if (!pkg || !size) return null;
  const base = pkg.price[size];
  const chosen = business.addOns.filter((a) => addOnIds.includes(a.id));
  const min = base + chosen.reduce((sum, a) => sum + addOnMin(a), 0);
  const max = base + chosen.reduce((sum, a) => sum + addOnMax(a), 0);
  return { min, max, label: min === max ? money(min) : `${money(min)} to ${money(max)}` };
}

export function packageById(id: string | undefined) {
  return business.packages.find((p) => p.id === id);
}
