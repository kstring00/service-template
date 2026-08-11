import type { CSSProperties } from "react";
import { business } from "@/config/business";
import {
  AddOns,
  FAQ,
  FinalCTA,
  Footer,
  Gallery,
  Header,
  Hero,
  Maintenance,
  MobileActionBar,
  NeedFinder,
  Packages,
  Process,
  Quote,
  Results,
  Reviews,
  ServiceArea,
  Services,
  TrustBar
} from "@/components/Site";

export default function Home() {
  const brandStyles = {
    "--site-bg": business.brand.background,
    "--site-surface": business.brand.surface,
    "--site-ink": business.brand.ink,
    "--site-muted": business.brand.muted,
    "--site-accent": business.brand.accent,
    "--site-accent-2": business.brand.accent2
  } as CSSProperties;

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: business.businessName,
    description: business.description,
    telephone: business.phone,
    email: business.email || undefined,
    address: {
      "@type": "PostalAddress",
      addressLocality: business.city,
      addressRegion: business.state,
      addressCountry: "US"
    },
    areaServed: business.cityLine,
    aggregateRating: business.googleRating && business.googleReviewCount ? {
      "@type": "AggregateRating",
      ratingValue: business.googleRating,
      reviewCount: business.googleReviewCount
    } : undefined,
    sameAs: [business.instagramUrl, business.facebookUrl, business.tiktokUrl].filter(Boolean)
  };

  return (
    <div className="site-root" style={brandStyles}>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }} />
      <Header />
      <main>
        <Hero />
        <TrustBar />
        <Packages />
        <NeedFinder />
        <Results />
        <Gallery />
        <Process />
        <Services />
        <AddOns />
        <Maintenance />
        <ServiceArea />
        <Reviews />
        <Quote />
        <FAQ />
        <FinalCTA />
      </main>
      <Footer />
      <MobileActionBar />
    </div>
  );
}
