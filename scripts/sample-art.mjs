/**
 * Writes clearly-labeled SAMPLE artwork into assets/source so the concept build
 * has self-hosted imagery without hotlinking or passing stock off as real work.
 * Replace these with real photos (same basenames) and run `npm run images`.
 *
 *   node scripts/sample-art.mjs && npm run images
 */
import { mkdir, writeFile } from "node:fs/promises";
import path from "node:path";

const SRC = path.resolve("assets/source");
await mkdir(SRC, { recursive: true });

const W = 1600;
const H = 1000;

const tag = (x = W - 30, anchor = "end") =>
  `<text x="${x}" y="${H - 34}" text-anchor="${anchor}" font-family="Helvetica, Arial, sans-serif" font-size="30" font-weight="700" letter-spacing="4" fill="rgba(255,255,255,.55)">SAMPLE IMAGE</text>`;

const car = (fill, extra = "") => `
  <g transform="translate(140 300)">
    <path d="M0 330 C0 250 60 240 120 220 L300 90 C340 60 400 40 480 40 L820 40 C920 40 980 70 1060 140 L1180 220 C1260 240 1320 260 1320 330 L1320 360 L0 360 Z" fill="${fill}"/>
    <path d="M330 120 L470 70 C500 60 520 60 560 60 L720 60 L760 210 L300 210 Z" fill="rgba(10,16,20,.85)"/>
    <path d="M780 60 L900 64 C960 70 1000 100 1060 160 L1080 210 L800 210 Z" fill="rgba(10,16,20,.85)"/>
    <circle cx="300" cy="360" r="110" fill="#0a0f12"/><circle cx="300" cy="360" r="62" fill="#9aa5ab"/>
    <circle cx="1020" cy="360" r="110" fill="#0a0f12"/><circle cx="1020" cy="360" r="62" fill="#9aa5ab"/>
    ${extra}
  </g>`;

const svg = (body, bg) => `<svg xmlns="http://www.w3.org/2000/svg" width="${W}" height="${H}" viewBox="0 0 ${W} ${H}">
  ${bg}
  ${body}
  ${tag()}
</svg>`;

const defs = `<defs>
  <linearGradient id="sky" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#0b2a33"/><stop offset="1" stop-color="#07161b"/></linearGradient>
  <linearGradient id="gloss" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#2b3a42"/><stop offset=".45" stop-color="#0f171b"/><stop offset=".5" stop-color="#6fd6e6"/><stop offset=".55" stop-color="#0f171b"/><stop offset="1" stop-color="#1a262c"/></linearGradient>
  <linearGradient id="dull" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#5a6369"/><stop offset="1" stop-color="#3e474c"/></linearGradient>
  <linearGradient id="floorwet" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#0d2a33"/><stop offset="1" stop-color="#1ec8e0" stop-opacity=".25"/></linearGradient>
  <pattern id="swirl" width="60" height="60" patternUnits="userSpaceOnUse"><circle cx="30" cy="30" r="22" fill="none" stroke="rgba(255,255,255,.18)" stroke-width="1.5"/><circle cx="30" cy="30" r="12" fill="none" stroke="rgba(255,255,255,.12)" stroke-width="1"/></pattern>
  <pattern id="grit" width="40" height="40" patternUnits="userSpaceOnUse"><circle cx="8" cy="12" r="2.2" fill="rgba(60,40,20,.55)"/><circle cx="26" cy="30" r="1.6" fill="rgba(60,40,20,.5)"/><circle cx="33" cy="8" r="1.2" fill="rgba(60,40,20,.4)"/></pattern>
</defs>`;

const files = {
  hero: svg(
    `${defs}
     <rect width="${W}" height="${H}" fill="url(#sky)"/>
     <rect y="640" width="${W}" height="360" fill="url(#floorwet)"/>
     ${car("url(#gloss)", `<rect x="200" y="140" width="900" height="26" rx="13" fill="rgba(255,255,255,.75)"/>`)}
     <ellipse cx="800" cy="690" rx="640" ry="40" fill="rgba(0,0,0,.45)"/>
     <rect x="300" y="720" width="1000" height="14" rx="7" fill="rgba(111,214,230,.35)"/>`,
    ""
  ),
  "pair-exterior-before": svg(
    `${defs}
     <rect width="${W}" height="${H}" fill="#2a3338"/>
     <rect y="640" width="${W}" height="360" fill="#1c2327"/>
     ${car("url(#dull)", `<rect x="0" y="40" width="1320" height="320" fill="url(#swirl)"/><rect x="0" y="260" width="1320" height="100" fill="rgba(120,100,70,.35)"/>`)}`,
    ""
  ),
  "pair-exterior-after": svg(
    `${defs}
     <rect width="${W}" height="${H}" fill="url(#sky)"/>
     <rect y="640" width="${W}" height="360" fill="url(#floorwet)"/>
     ${car("url(#gloss)", `<rect x="200" y="140" width="900" height="26" rx="13" fill="rgba(255,255,255,.75)"/>`)}`,
    ""
  ),
  "pair-interior-before": svg(
    `${defs}
     <rect width="${W}" height="${H}" fill="#4a4540"/>
     <rect x="120" y="120" width="1360" height="760" rx="60" fill="#5e5852"/>
     <rect x="200" y="200" width="560" height="600" rx="50" fill="#6b645d"/>
     <rect x="840" y="200" width="560" height="600" rx="50" fill="#6b645d"/>
     <rect x="120" y="120" width="1360" height="760" rx="60" fill="url(#grit)"/>
     <ellipse cx="520" cy="520" rx="140" ry="90" fill="rgba(70,45,25,.5)"/>
     <ellipse cx="1080" cy="640" rx="100" ry="60" fill="rgba(60,40,30,.45)"/>`,
    ""
  ),
  "pair-interior-after": svg(
    `${defs}
     <rect width="${W}" height="${H}" fill="#1f2529"/>
     <rect x="120" y="120" width="1360" height="760" rx="60" fill="#2b3338"/>
     <rect x="200" y="200" width="560" height="600" rx="50" fill="#36404a"/>
     <rect x="840" y="200" width="560" height="600" rx="50" fill="#36404a"/>
     <rect x="240" y="240" width="480" height="40" rx="20" fill="rgba(255,255,255,.08)"/>
     <rect x="880" y="240" width="480" height="40" rx="20" fill="rgba(255,255,255,.08)"/>`,
    ""
  ),
  van: svg(
    `${defs}
     <rect width="${W}" height="${H}" fill="url(#sky)"/>
     <rect y="700" width="${W}" height="300" fill="#0a1a20"/>
     <g transform="translate(180 220)">
       <path d="M0 440 L0 160 C0 120 30 100 70 100 L760 100 C840 100 900 130 960 200 L1100 200 C1180 200 1240 260 1240 340 L1240 440 Z" fill="#e9eef0"/>
       <rect x="40" y="140" width="640" height="200" rx="18" fill="#0f171b"/>
       <path d="M780 140 L900 140 C940 140 980 160 1010 200 L1040 240 L780 240 Z" fill="#0f171b"/>
       <rect x="80" y="180" width="560" height="26" rx="13" fill="#1ec8e0"/>
       <circle cx="260" cy="450" r="90" fill="#0a0f12"/><circle cx="260" cy="450" r="48" fill="#9aa5ab"/>
       <circle cx="1000" cy="450" r="90" fill="#0a0f12"/><circle cx="1000" cy="450" r="48" fill="#9aa5ab"/>
       <text x="620" y="620" text-anchor="middle" font-family="Helvetica, Arial, sans-serif" font-size="40" font-weight="700" fill="#e9eef0">WATER TANK · GENERATOR ON BOARD</text>
     </g>`,
    ""
  ),
  owner: `<svg xmlns="http://www.w3.org/2000/svg" width="800" height="800" viewBox="0 0 800 800">
    <rect width="800" height="800" fill="#0f2a33"/>
    <circle cx="400" cy="320" r="150" fill="#9fb3bb"/>
    <path d="M120 800 C120 600 250 520 400 520 C550 520 680 600 680 800 Z" fill="#9fb3bb"/>
    <text x="400" y="750" text-anchor="middle" font-family="Helvetica, Arial, sans-serif" font-size="28" font-weight="700" letter-spacing="4" fill="rgba(255,255,255,.6)">SAMPLE PORTRAIT</text>
  </svg>`
};

for (const [name, body] of Object.entries(files)) {
  await writeFile(path.join(SRC, `${name}.svg`), body.trim());
  console.log(`wrote assets/source/${name}.svg`);
}
