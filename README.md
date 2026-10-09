# Reusable Service Business Website Template

A neutral Next.js service-business starter with a responsive homepage, service packages, inquiry guide, optional proof sections and theme configuration.

This repository deliberately contains **no Perfexxion business identity, customer reviews, real phone number, or claimed project outcomes**. The default site is a demonstration, not an operational business.

## Customize for a real business
1. Update `config/business.ts`: name, service area, verified contact information, description, brand colors and features.
2. Edit `data/site.ts`: packages, services, FAQs, approved photos, legitimate reviews and coverage areas.
3. Replace demo editorial imagery with photos you are licensed to use.
4. Configure a real phone or SMS destination; the quote builder is demo-only until then.
5. Enable optional before/after, service areas or reviews **only with real permission-backed data**.
6. Verify every claim and test links, accessibility, responsiveness and the production build before public launch.
7. Set `previewMode: false` only after everything is verified and approved.

## Safety defaults
- `previewMode: true` means `noindex, nofollow`.
- Empty review arrays never render a review section.
- Before/after examples are disabled until real matched photos are provided.
- No phone number or SMS is configured, so the demo does not direct inquiries to a real prospect.
- Pricing is illustrative only and not presented as factual.
- The layout is reusable for many local service industries, but all service descriptions must be tailored to the client.

Run `npm install`, `npm run build` and `npm run dev` to check the template locally.
