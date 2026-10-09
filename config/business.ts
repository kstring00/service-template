import type { BusinessConfig } from "@/types/site";

/**
 * SAMPLE BUSINESS — CONCEPT BUILD
 * ------------------------------------------------------------------
 * "Still Water Mobile Detailing" in "Cedar Bend, TX" is fictional.
 * Every price, review, policy, person and photo in this file is a sample
 * written to show how the template handles real content. Nothing here is a
 * claim about a real business. The site itself says so in the footer and in
 * the persistent concept tag.
 *
 * To make a client site: set mode to "client", replace every value below with
 * facts the owner confirmed, and remove anything they cannot confirm (a blank
 * hides its section). Never invent prices, reviews, ratings or credentials.
 */
export const business: BusinessConfig = {
  mode: "concept",
  businessName: "Still Water Mobile Detailing",
  shortName: "Still Water",
  town: "Cedar Bend",
  state: "TX",
  serviceArea: ["Cedar Bend", "Oak Hollow", "Larkspur", "Mill Creek", "North Bend", "Hollis"],
  serviceAreaNote: "Inside this list there is no travel fee. A few miles outside, text your ZIP and I'll tell you if it works and what the trip adds.",
  mobile: true,
  shop: false,
  phoneDisplay: "(512) 555-0147",
  phoneE164: "+15125550147",
  email: "hello@example.com",
  hours: [
    { days: "Monday to Friday", hours: "8:00 am to 6:00 pm" },
    { days: "Saturday", hours: "8:00 am to 3:00 pm" },
    { days: "Sunday", hours: "Closed" }
  ],
  waterPowerAnswer: "No. The van carries its own water tank and generator. I only need a spot to park next to the car.",
  insuredStatement: "Insured with a general liability policy. Ask and I'll send the certificate before your appointment.",
  yearsInBusiness: 6,
  owner: {
    name: "Danny Alvarez",
    role: "Owner and the person who details your car",
    photo: "owner",
    photoAlt: "Sample portrait placeholder for the owner",
    bio: "I've detailed cars in Cedar Bend for six years. It's just me, so the person you text is the person who shows up. I work on one car at a time and I don't rush interiors."
  },
  booking: {
    model: "owner-confirms",
    responsePromise: "I'll text you within 2 business hours to confirm your date.",
    depositLine: "No payment now. A $25 deposit holds your date once I confirm it, and it comes off the total.",
    cancellationLine: "Cancel or move your appointment up to 24 hours before and the deposit is refunded in full."
  },
  headlines: {
    hero: "Car detailing in Cedar Bend. We come to you.",
    heroSub: "Pick a package, tell me about the car, and I'll confirm a date by text.",
    heroNext: "Most requests get a date within the same week.",
    proof: "Drag to see the difference.",
    packages: "Packages and prices",
    process: "How it works",
    reviews: "What customers say",
    area: "Where I work, and when",
    owner: "Who shows up",
    booking: "Request a booking",
    faq: "Other questions"
  },
  heroImage: { src: "hero", alt: "Sample image: a freshly detailed sedan with light reflecting off the hood" },
  vanImage: { src: "van", alt: "Sample image: the detailing van with its water tank and generator" },
  vehicleSizes: [
    { id: "sedan", label: "Sedan or coupe", examples: "Civic, Camry, Mustang" },
    { id: "mid", label: "Mid SUV or small truck", examples: "RAV4, CR-V, Tacoma" },
    { id: "large", label: "Large SUV, full truck or van", examples: "Tahoe, F-150, Sienna" }
  ],
  packages: [
    {
      id: "maintenance",
      name: "Maintenance Detail",
      summary: "A proper wash and interior clean for a car that's looked after every month or two.",
      price: { sedan: 110, mid: 140, large: 170 },
      time: "1.5 to 2 hours",
      includes: [
        "Hand wash and dry",
        "Wheels, tires and wheel wells",
        "Spray wax (about 1 month of protection)",
        "Full vacuum, including trunk",
        "Wipe-down of dash, console and door panels",
        "Interior glass"
      ],
      badCarNote: "This package assumes light dirt. If the interior has pet hair, stains or a smell, pick Full Detail instead so I have the time to do it right.",
      proofPairId: "exterior-sedan"
    },
    {
      id: "full",
      name: "Full Detail",
      summary: "Inside and out, done once properly. The right choice for most first visits.",
      price: { sedan: 230, mid: 280, large: 330 },
      time: "4 to 5 hours",
      includes: [
        "Everything in Maintenance Detail",
        "Clay bar to pull grit out of the paint",
        "Sealant (about 4 months of protection)",
        "Shampoo and extraction of carpets and cloth seats",
        "Leather cleaned and conditioned",
        "Steam cleaning of vents, cup holders and seams",
        "Door jambs and trunk jambs"
      ],
      addsOverPrevious: ["Clay bar", "4-month sealant", "Carpet and seat extraction", "Leather conditioning", "Steam cleaning"],
      badCarNote: "Heavy pet hair, set-in stains and odor are add-ons because they take real extra time. Most of it comes out. Old sun-faded stains and cigarette smoke in the headliner usually improve but may not disappear. I'll tell you honestly when I see the car.",
      proofPairId: "interior-suv",
      featured: true
    },
    {
      id: "paint",
      name: "Full Detail + Paint Polish",
      summary: "Full Detail plus a single-stage machine polish to remove light swirls and bring the gloss back.",
      price: { sedan: 420, mid: 490, large: 560 },
      time: "7 to 8 hours",
      includes: [
        "Everything in Full Detail",
        "Paint inspected and measured before polishing",
        "Single-stage machine polish (removes most light swirls and haze)",
        "Sealant applied after polishing",
        "Trim and plastics dressed"
      ],
      addsOverPrevious: ["Paint measurement", "Machine polish", "Trim dressing"],
      badCarNote: "A single-stage polish removes most light swirls. Deep scratches you can feel with a fingernail need a two-stage correction, which I quote in person.",
      proofPairId: "exterior-sedan"
    }
  ],
  addOns: [
    { id: "pet-hair", name: "Pet hair removal", priceRange: [40, 80], note: "Priced on how much there is. Most of it comes out with the right brushes and time." },
    { id: "stains", name: "Heavy stain treatment", price: 50, note: "Extra passes on set-in food, drink or mud stains. Old sun-faded stains may lighten but not vanish." },
    { id: "odor", name: "Odor treatment", price: 60, note: "Ozone treatment after cleaning. Works well on food, pet and mildew smells. Smoke needs it plus the headliner cleaned." },
    { id: "engine", name: "Engine bay clean", price: 45, note: "Degreased, rinsed and dressed. Sensitive parts covered first." },
    { id: "headlights", name: "Headlight restoration", price: 60, note: "Wet-sanded, polished and sealed. For yellowed or cloudy lenses." },
    { id: "oversize", name: "Oversize or lifted vehicle", price: 40, note: "Three-row SUVs with the third row up, lifted trucks, dually or long-bed." }
  ],
  beforeAfter: [
    {
      id: "interior-suv",
      label: "Full Detail · Family SUV interior",
      caption: "Sample pair. Seats extracted, carpets shampooed, vents steamed. Drop real pairs into assets/source and run npm run images.",
      before: "pair-interior-before",
      after: "pair-interior-after",
      beforeAlt: "Sample before image: a soiled SUV interior with debris on the seats and floor",
      afterAlt: "Sample after image: the same interior clean, seats and carpet restored"
    },
    {
      id: "exterior-sedan",
      label: "Full Detail + Paint Polish · Sedan",
      caption: "Sample pair. Clay, single-stage polish and sealant on a daily driver.",
      before: "pair-exterior-before",
      after: "pair-exterior-after",
      beforeAlt: "Sample before image: dull sedan paint with swirl marks and road film",
      afterAlt: "Sample after image: the same sedan with a glossy, reflective finish"
    }
  ],
  process: [
    {
      title: "Send a request",
      body: "Pick a package and a date that suits you. I'll text you within 2 business hours to confirm. No payment until I do."
    },
    {
      title: "I come to you",
      body: "Home, work, or wherever the car is parked. I bring water and power, so you don't need to leave a hose or an outlet out."
    },
    {
      title: "Done properly, and checked with you",
      body: "pH-neutral soaps, clean microfiber for every panel, and no harsh chemicals on your interior. I'm insured. We walk the car together before I leave."
    }
  ],
  reviews: [
    { name: "Marisol T.", source: "Google", service: "Full Detail", quote: "Two kids and a dog. I didn't think the back seat was salvageable. He texted when he was on the way, took about four hours, and it looks like a different car." },
    { name: "Derek P.", source: "Google", service: "Full Detail + Paint Polish", quote: "Swirls from years of automatic washes are gone. He showed me the paint readings before he started, which I appreciated." },
    { name: "Janelle O.", source: "Facebook", service: "Maintenance Detail", quote: "Easy to book over text, showed up on time, worked in my office parking lot. I'm on the every-six-weeks plan now." },
    { name: "Tom R.", source: "Google", service: "Full Detail", quote: "Honest about what he could and couldn't fix on an old stain. It came out better than he said it would." }
  ],
  faqs: [
    { question: "Can I pay by card?", answer: "Yes. Card, cash, Venmo or Zelle after the job. The deposit is by card or Venmo once I confirm your date." },
    { question: "Can you work in an apartment lot or a parking garage?", answer: "Usually. I need one open space next to the car and a garage ceiling of at least 7 feet for the van. Mention it in the notes and I'll confirm." },
    { question: "What if it rains?", answer: "Light rain is fine for interiors. For exterior work I'll text you the morning of and we'll move it to the next dry day at no charge." },
    { question: "Do you detail boats, RVs or motorcycles?", answer: "Not right now. Cars, SUVs, trucks and vans only." },
    { question: "Can I set up regular visits?", answer: "Yes. After your first Full Detail, a Maintenance Detail every 4 to 8 weeks keeps it there. Tell me in the notes and I'll suggest a schedule." }
  ],
  concept: {
    tagText: "Concept build by Stringham Web Design",
    tagUrl: "https://stringhamwebdesign.com/partners",
    footerLine: "This is a concept site. The business, prices, reviews and images are samples."
  },
  clarityProjectId: "",
  brand: { accent: "#1ec8e0", accentDeep: "#0b6f80", ink: "#10181c", paper: "#f6f9fa" }
};

export const phoneHref = `tel:${business.phoneE164}`;
export const smsHref = `sms:${business.phoneE164}`;

export function smsWithBody(message: string) {
  return `${smsHref}?body=${encodeURIComponent(message)}`;
}
