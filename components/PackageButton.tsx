"use client";

import { ArrowRight } from "lucide-react";
import { track } from "@/lib/tracking";

export const PACKAGE_SELECT_EVENT = "stillwater:select-package";
export type PackageSelectDetail = { packageId: string };

/**
 * The button on each package card. It tells the booking form which package was
 * chosen, records the choice, then scrolls to the form. Without JavaScript it is
 * still a plain link to the form.
 */
export function PackageButton({ packageId, label, primary }: { packageId: string; label: string; primary?: boolean }) {
  return (
    <a
      className={`button ${primary ? "button-primary" : "button-outline"}`}
      href={`#book?package=${packageId}`}
      onClick={(event) => {
        event.preventDefault();
        track("package_select", { package: packageId, from: "card" });
        window.dispatchEvent(new CustomEvent<PackageSelectDetail>(PACKAGE_SELECT_EVENT, { detail: { packageId } }));
        document.getElementById("booking-form")?.scrollIntoView({ behavior: "smooth", block: "start" });
        history.replaceState(null, "", `#book`);
      }}
    >
      {label} <ArrowRight size={18} aria-hidden="true" />
    </a>
  );
}
