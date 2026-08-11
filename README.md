# Master Mobile Detailing

Reusable, mobile-first detailing website built for:

**Master → Clone → Tailor → Deploy → Show Owner**

This repository is the master. Each prospect/client should receive a separate cloned repository and separate Vercel deployment.

## Fast client customization

Most prospect-specific work should happen in two files:

- `config/business.ts` — business identity, contact info, service model, verified claims, links, brand colors, feature flags, preview mode.
- `data/site.ts` — packages, specialty services, add-ons, before/after content, gallery, reviews, service areas, FAQs.

The components should rarely need to change when creating a new client site.

## Create a new detailing client site

1. Clone this repository into a new repo named for the prospect.
2. Update `config/business.ts`.
3. Replace the business name, tagline, phone, SMS number, city, social links, brand colors, and conversion URLs.
4. Replace hero and gallery photography with the operator's real work that you have permission to use.
5. Update packages and real pricing.
6. Update specialty services and add-ons.
7. Replace the before/after comparison with matched real before/after photography.
8. Enter only the real service areas the operator covers.
9. Replace all demo review data with accurate review information.
10. Configure quote, booking, CRM, phone, and SMS destinations.
11. Enable/disable optional modules with feature flags.
12. Test the full site at 375px mobile width.
13. Deploy the clone as its own Vercel project.

## Feature flags

```ts
features: {
  instantQuote: true,
  onlineBooking: false,
  maintenancePlans: true,
  ceramicCoating: true,
  paintCorrection: true,
  fleetServices: false,
  promotions: false,
  beforeAfter: true,
  serviceArea: true
}
```

Optional modules should disappear cleanly instead of leaving empty UI.

## Conversion logic

The primary conversion for this master is **Get My Quote**. The website remains the customer-facing layer while the operator's existing CRM, scheduler, booking system, phone, or SMS flow remains the engine.

- Add `quoteUrl` when the operator has a real quote destination.
- Add `bookingUrl` if they support online booking.
- Leave `previewMode: true` for speculative demos. The quote builder stays local and routes toward SMS instead of transmitting personal information to a server.

## Prospect preview mode

```ts
previewMode: true
```

Preview mode adds `noindex, nofollow`, displays a concept-preview disclaimer, and prevents the demo from behaving like an official client lead-capture form.

After the owner approves the site and all facts are verified:

```ts
previewMode: false
```

## Accuracy rule

Do not publish invented reviews, prices, certifications, insurance status, travel areas, years in business, availability, or customer counts for a real prospect. The demo brand and data in this master are intentionally placeholders.

## Master rule

Before changing a component for a prospect, ask:

**Can this difference be handled with config/data instead?**

If yes, keep the component generic. The target is to clone this master and create a convincing prospect preview in **30–60 minutes** without rewriting the underlying UI.
