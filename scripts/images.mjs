/**
 * Image pipeline. Drop originals (jpg, png, svg, webp) into assets/source and run:
 *
 *   npm run images
 *
 * Each source becomes public/images/<name>-{480,960,1600}.webp (never upscaled)
 * and public/images/manifest.json records the natural width/height so every
 * <img> on the site can set width and height and avoid layout shift.
 *
 * Name before/after pairs <something>-before and <something>-after and point
 * config/business.ts at those basenames.
 */
import { readdir, mkdir, writeFile, rm } from "node:fs/promises";
import path from "node:path";
import sharp from "sharp";

const SRC = path.resolve("assets/source");
const OUT = path.resolve("public/images");
const WIDTHS = [480, 960, 1600];

await mkdir(OUT, { recursive: true });
for (const stale of await readdir(OUT)) await rm(path.join(OUT, stale));

const manifest = {};
const files = (await readdir(SRC)).filter((f) => /\.(jpe?g|png|webp|svg|avif)$/i.test(f)).sort();

for (const file of files) {
  const name = path.parse(file).name;
  const input = sharp(path.join(SRC, file), { density: 144 });
  const meta = await input.metadata();
  const natural = { width: meta.width, height: meta.height };
  const produced = [];

  for (const width of WIDTHS) {
    if (width > natural.width && produced.length) continue;
    const target = Math.min(width, natural.width);
    const outName = `${name}-${target}.webp`;
    await sharp(path.join(SRC, file), { density: 144 })
      .resize({ width: target, withoutEnlargement: true })
      .webp({ quality: 78, effort: 5 })
      .toFile(path.join(OUT, outName));
    produced.push(target);
  }

  manifest[name] = { width: natural.width, height: natural.height, widths: produced };
  console.log(`${file} -> ${produced.map((w) => `${name}-${w}.webp`).join(", ")}`);
}

await writeFile(path.join(OUT, "manifest.json"), JSON.stringify(manifest, null, 2));
console.log(`wrote manifest for ${files.length} image(s)`);
