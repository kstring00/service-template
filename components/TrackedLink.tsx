"use client";

import type { ReactNode } from "react";
import { track, type TrackEvent } from "@/lib/tracking";

/** A plain link that records a tracking event on tap. Works as a normal link without JavaScript. */
export function TrackedLink({ href, event, where, className, children, ariaLabel }: { href: string; event: TrackEvent; where: string; className?: string; children: ReactNode; ariaLabel?: string }) {
  return (
    <a href={href} className={className} aria-label={ariaLabel} onClick={() => track(event, { where })}>
      {children}
    </a>
  );
}
