/**
 * Event tracking. Uses Microsoft Clarity when config.clarityProjectId is set;
 * otherwise events are no-ops (and logged in development so you can see them).
 *
 * Events: booking_request_submit (package), call_tap, text_tap, package_select,
 * slider_interaction. Traffic source is read once from utm_source / referrer and
 * attached as a Clarity tag so every event can be filtered by it.
 */
type ClarityFn = (cmd: string, ...args: unknown[]) => void;

declare global {
  interface Window {
    clarity?: ClarityFn;
  }
}

export type TrackEvent = "booking_request_submit" | "call_tap" | "text_tap" | "package_select" | "slider_interaction";

let sourceTagged = false;

export function trafficSource(): string {
  if (typeof window === "undefined") return "server";
  try {
    const params = new URLSearchParams(window.location.search);
    const utm = params.get("utm_source");
    if (utm) return utm;
    const ref = document.referrer ? new URL(document.referrer).hostname : "";
    if (!ref) return "direct";
    if (/google\./.test(ref)) return "google";
    if (/facebook\.|fb\./.test(ref)) return "facebook";
    if (/instagram\./.test(ref)) return "instagram";
    return ref;
  } catch {
    return "unknown";
  }
}

export function track(event: TrackEvent, detail?: Record<string, string | number | undefined>) {
  if (typeof window === "undefined") return;
  const source = trafficSource();
  if (window.clarity) {
    if (!sourceTagged) {
      window.clarity("set", "traffic_source", source);
      sourceTagged = true;
    }
    window.clarity("event", event);
    if (detail) for (const [k, v] of Object.entries(detail)) if (v !== undefined) window.clarity("set", `${event}_${k}`, String(v));
  } else if (process.env.NODE_ENV !== "production") {
    console.info("[track]", event, { ...detail, source });
  }
}
