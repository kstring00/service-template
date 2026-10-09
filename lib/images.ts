import manifest from "@/public/images/manifest.json";

type Entry = { width: number; height: number; widths: number[] };
const entries = manifest as Record<string, Entry>;

/**
 * Builds the attributes for a self-hosted image produced by scripts/images.mjs.
 * Always returns width and height so the browser reserves space (no layout shift).
 */
export function imageAttrs(name: string, sizes = "100vw") {
  const entry = entries[name];
  if (!entry) throw new Error(`No image named "${name}" in public/images/manifest.json. Add it to assets/source and run npm run images.`);
  const largest = entry.widths[entry.widths.length - 1];
  return {
    src: `/images/${name}-${largest}.webp`,
    srcSet: entry.widths.map((w) => `/images/${name}-${w}.webp ${w}w`).join(", "),
    sizes,
    width: entry.width,
    height: entry.height
  };
}
