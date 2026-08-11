import {
  ArrowRight,
  ArrowUpRight,
  BadgeCheck,
  Check,
  ChevronRight,
  Clock3,
  Droplets,
  Instagram,
  MapPin,
  MessageCircle,
  Phone,
  ShieldCheck,
  Sparkles,
  Star,
  WandSparkles,
  Zap
} from "lucide-react";
import { business, phoneHref, smsHref } from "@/config/business";
import { addOns, beforeAfter, faqs, gallery, needMatches, packages, reviews, reviewThemes, serviceAreas, services } from "@/data/site";
import { getQuoteUrl, getSmsUrl } from "@/lib/conversion";
import { BeforeAfterSlider } from "@/components/BeforeAfterSlider";
import { QuoteBuilder } from "@/components/QuoteBuilder";

function SectionHeading({ kicker, title, body, light = false }: { kicker: string; title: string; body?: string; light?: boolean }) {
  return (
    <div className={`section-heading ${light ? "section-heading-light" : ""}`}>
      <span className="kicker">{kicker}</span>
      <h2>{title}</h2>
      {body ? <p>{body}</p> : null}
    </div>
  );
}

export function Header() {
  return (
    <header className="site-header" id="top">
      <a className="brand" href="#top" aria-label={`${business.businessName} home`}>
        <span className="brand-mark">V</span>
        <span className="brand-copy"><strong>{business.shortName}</strong><small>MOBILE DETAIL</small></span>
      </a>
      <nav className="desktop-nav" aria-label="Primary navigation">
        <a href="#packages">Packages</a><a href="#results">Results</a><a href="#services">Services</a><a href="#reviews">Reviews</a><a href="#area">Service Area</a><a href="#faq">FAQ</a>
      </nav>
      <div className="header-actions">
        <a className="header-phone desktop-only" href={phoneHref}><Phone size={15} /> {business.phone}</a>
        <a className="button button-accent header-quote" href="#quote">Get My Quote <ArrowRight size={16} /></a>
      </div>
    </header>
  );
}

export function Hero() {
  return (
    <section className="hero">
      <div className="hero-media" aria-hidden="true">
        <img src="https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?auto=format&fit=crop&w=2000&q=90" alt="" />
        <div className="hero-shade" />
      </div>
      <div className="shell hero-inner">
        <div className="hero-copy">
          <div className="eyebrow-row">
            <span className="eyebrow"><Zap size={14} /> WE COME TO YOU</span>
            <span className="eyebrow"><MapPin size={14} /> {business.cityLine}</span>
          </div>
          <h1>Showroom results.<br /><em>Your driveway.</em></h1>
          <p className="hero-lede">Premium mobile detailing built around clear packages, visible transformation, and a quote process that takes minutes—not phone tag.</p>
          <div className="hero-actions">
            <a className="button button-accent button-large" href="#quote">Get My Quote <ArrowRight size={18} /></a>
            <a className="button button-ghost button-large" href={smsHref}><MessageCircle size={18} /> Text Us</a>
          </div>
          <div className="hero-proof">
            {business.googleRating ? <div><Star size={17} fill="currentColor" /><strong>{business.googleRating}/5</strong><span>{business.googleReviewCount}+ Google reviews*</span></div> : null}
            {business.startingPrice ? <div><span>DETAILS FROM</span><strong>{business.startingPrice}</strong></div> : null}
            <div><span>MOBILE SERVICE</span><strong>{business.mobileService ? "At your home or office" : "Ask about service options"}</strong></div>
          </div>
          {business.previewMode ? <p className="hero-demo-note">* Demo content for the master template. Replace all claims with verified prospect information.</p> : null}
        </div>

        <div className="hero-card">
          <span className="mini-label">FASTEST PATH</span>
          <h2>Tell us what your car needs.</h2>
          <p>Start with the result you want. We’ll route you to the right package or specialty service.</p>
          <div className="hero-card-list">
            {needMatches.slice(0, 3).map((item) => (
              <a href={`#${item.targetId}`} key={item.prompt}><span>0{needMatches.indexOf(item) + 1}</span><div><strong>{item.prompt}</strong><small>{item.recommendation}</small></div><ChevronRight size={17} /></a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export function TrustBar() {
  const items = [
    business.mobileService ? { icon: MapPin, value: "Fully mobile", label: "home · office · garage" } : null,
    business.insured ? { icon: ShieldCheck, value: "Insured", label: "configured demo claim" } : null,
    business.bringsWaterPower ? { icon: Droplets, value: "Water + power", label: "we bring the setup" } : null,
    business.vehiclesDetailed ? { icon: Sparkles, value: business.vehiclesDetailed, label: "vehicles detailed*" } : null,
  ].filter(Boolean) as { icon: typeof MapPin; value: string; label: string }[];

  return <section className="trust-strip"><div className="shell trust-grid">{items.map(({ icon: Icon, value, label }) => <div className="trust-item" key={value}><Icon size={19} /><div><strong>{value}</strong><span>{label}</span></div></div>)}</div></section>;
}

export function Packages() {
  return (
    <section className="section section-light" id="packages">
      <div className="shell">
        <div className="split-heading">
          <SectionHeading kicker="DETAIL PACKAGES" title="Choose the level of reset." body="Clear packages reduce uncertainty before the quote. Prices below are demo values for this master and should be replaced with the real detailer's pricing." />
          <a className="text-link" href="#quote">Not sure? Build a quote <ArrowRight size={16} /></a>
        </div>
        <div className="package-grid">
          {packages.map((pkg) => (
            <article className={`package-card ${pkg.featured ? "package-featured" : ""}`} id={pkg.id} key={pkg.id}>
              {pkg.featured ? <span className="package-badge">MOST POPULAR</span> : null}
              <div className="package-top"><div><span className="mini-label">{pkg.tagline}</span><h3>{pkg.name}</h3></div><div className="package-price"><span>FROM</span><strong>{pkg.startingPrice ?? "Custom"}</strong></div></div>
              <p>{pkg.description}</p>
              <div className="package-meta"><span><Clock3 size={14} /> {pkg.duration ?? "Varies"}</span><span><Sparkles size={14} /> {pkg.idealFor}</span></div>
              <ul>{pkg.features.map((feature) => <li key={feature}><Check size={15} /> {feature}</li>)}</ul>
              <a className={`button ${pkg.featured ? "button-accent" : "button-outline-dark"}`} href={getQuoteUrl(pkg)}>Get Quote for {pkg.name} <ArrowRight size={16} /></a>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export function NeedFinder() {
  return (
    <section className="section section-dark need-section">
      <div className="shell">
        <SectionHeading light kicker="WHAT DOES MY CAR NEED?" title="Start with the problem—not the package name." body="Help customers self-select before they ever enter a scheduler or quote form." />
        <div className="need-grid">{needMatches.map((item, index) => <a href={`#${item.targetId}`} className="need-card" key={item.prompt}><span className="need-index">0{index + 1}</span><div><h3>{item.prompt}</h3><p>{item.detail}</p></div><div className="need-route"><span>Recommended</span><strong>{item.recommendation}</strong></div><ArrowRight size={18} /></a>)}</div>
      </div>
    </section>
  );
}

export function Results() {
  if (!business.features.beforeAfter) return null;
  return (
    <section className="section result-section" id="results">
      <div className="shell">
        <SectionHeading kicker="BEFORE / AFTER" title="Detailing sells transformation." body="A result should be visible before a customer is asked to trust a price. Drag the divider to compare." />
        <div className="ba-wrap">{beforeAfter.map((item) => <BeforeAfterSlider item={item} key={item.id} />)}</div>
      </div>
    </section>
  );
}

export function Gallery() {
  return (
    <section className="section gallery-section">
      <div className="shell">
        <div className="split-heading"><SectionHeading kicker="RECENT RESULTS" title="Proof, not promises." body="Large editorial imagery makes the operator's actual work the visual centerpiece of the site." />{business.instagramUrl ? <a className="text-link text-link-light" href={business.instagramUrl} target="_blank" rel="noreferrer"><Instagram size={16} /> See more recent work</a> : null}</div>
        <div className="gallery-grid">{gallery.map((item, index) => <figure className={`gallery-item gallery-item-${index + 1}`} key={item.id}><img src={item.src} alt={item.alt} loading="lazy" /><figcaption><span>{item.category}</span><strong>{item.caption}</strong></figcaption></figure>)}</div>
      </div>
    </section>
  );
}

export function Process() {
  const steps = [
    ["01", "Tell us about your vehicle", "Choose the vehicle, service, condition, and ZIP."],
    ["02", "Confirm the right package", "Scope and pricing get aligned before the appointment."],
    ["03", "Pick a time", "Use the operator's existing booking or scheduling system."],
    ["04", "We come to you", "Home, office, or another approved service location."],
    ["05", "Enjoy the result", "No waiting room. No driving across town."]
  ];
  return <section className="section section-light process-section"><div className="shell"><SectionHeading kicker="HOW IT WORKS" title="Five steps. Zero mystery." /><div className="process-grid">{steps.map(([number, title, copy]) => <article key={number}><span>{number}</span><h3>{title}</h3><p>{copy}</p></article>)}</div></div></section>;
}

export function Services() {
  const enabled = services.filter((service) => service.enabled !== false && (!service.id.includes("ceramic") || business.features.ceramicCoating) && (!service.id.includes("paint-correction") || business.features.paintCorrection));
  return (
    <section className="section section-warm" id="services">
      <div className="shell">
        <SectionHeading kicker="PREMIUM SERVICES" title="When a standard detail isn't the whole answer." body="Specialty services get enough context to feel valuable without turning the page into a giant price catalog." />
        <div className="service-grid">{enabled.map((service) => <article className="service-card" id={service.id} key={service.id}><div className="service-image"><img src={service.image} alt={service.name} loading="lazy" /><span>{service.eyebrow}</span></div><div className="service-body"><div><h3>{service.name}</h3><p>{service.description}</p></div><div className="service-footer"><strong>{service.startingPrice ? `From ${service.startingPrice}` : "Custom quote"}</strong><a href="#quote">Get quote <ArrowRight size={16} /></a></div></div></article>)}</div>
      </div>
    </section>
  );
}

export function AddOns() {
  return <section className="section add-on-section"><div className="shell"><SectionHeading light kicker="ADD-ONS" title="Small extras. Clear expectations." body="Optional services should make the quote more accurate—not make the buying experience harder." /><div className="addon-grid">{addOns.map((item) => <article key={item.name}><WandSparkles size={20} /><div><h3>{item.name}</h3><p>{item.description}</p></div><strong>{item.startingPrice ? `From ${item.startingPrice}` : "Ask"}</strong></article>)}</div></div></section>;
}

export function Maintenance() {
  if (!business.features.maintenancePlans) return null;
  return <section className="maintenance-section"><div className="shell maintenance-card"><div><span className="kicker">MAINTENANCE PLANS</span><h2>Keep the clean car feeling.</h2><p>For repeat clients who want consistent upkeep instead of waiting until the vehicle needs another full reset. Exact benefits and terms belong in client config—not the component.</p></div><div className="maintenance-points"><span><BadgeCheck size={18} /> Priority scheduling potential</span><span><BadgeCheck size={18} /> Consistent maintenance cadence</span><span><BadgeCheck size={18} /> Easier future appointments</span><a className="button button-dark" href="#quote">Ask about maintenance <ArrowRight size={16} /></a></div></div></section>;
}

export function ServiceArea() {
  if (!business.features.serviceArea) return null;
  return (
    <section className="section section-light" id="area"><div className="shell area-layout"><div><SectionHeading kicker="WE COME TO YOU" title="Your driveway is the waiting room." body="Service-area businesses need coverage information, not a storefront map. Only configured cities appear here." /><div className="area-actions"><a className="button button-dark" href={getSmsUrl("Hi, can you confirm whether you service my ZIP code?")}><MessageCircle size={17} /> Text your ZIP</a><a className="button button-outline-dark" href={phoneHref}><Phone size={17} /> Call</a></div></div><div className="area-card"><span className="mini-label">CURRENT DEMO AREA</span>{serviceAreas.map((area) => <div className="area-row" key={`${area.city}-${area.state}`}><MapPin size={17} /><span><strong>{area.city}, {area.state}</strong><small>{area.notes}</small></span>{area.travelFee ? <em>{area.travelFee}</em> : null}</div>)}<p>Not sure if you're in range? Text the ZIP code before booking.</p></div></div></section>
  );
}

export function Reviews() {
  return (
    <section className="section reviews-section" id="reviews"><div className="shell reviews-layout"><div className="review-summary"><span className="kicker">SOCIAL PROOF</span><div className="big-rating"><strong>{business.googleRating ?? "—"}</strong><span>/5</span></div><div className="stars">{Array.from({ length: 5 }).map((_, index) => <Star key={index} size={19} fill="currentColor" />)}</div><p>{business.googleReviewCount ? `${business.googleReviewCount}+ Google reviews in this demo config.` : "Add verified review data for the client."}</p><div className="theme-list">{reviewThemes.map((theme) => <span key={theme}><Check size={13} /> {theme}</span>)}</div>{business.googleReviewsUrl ? <a className="text-link text-link-light" href={business.googleReviewsUrl} target="_blank" rel="noreferrer">Read Google reviews <ArrowUpRight size={16} /></a> : null}</div><div className="review-cards">{reviews.map((review) => <article className="review-card" key={review.id}><div className="review-stars">{Array.from({ length: review.rating }).map((_, i) => <Star key={i} size={14} fill="currentColor" />)}</div><blockquote>“{review.quote}”</blockquote><div><strong>{review.name}</strong><span>{review.detail}</span></div></article>)}</div></div></section>
  );
}

export function Quote() {
  return <section className="section quote-section" id="quote"><div className="shell quote-layout"><div><SectionHeading light kicker="GET MY QUOTE" title="Four answers. A much better starting point." body="The master demonstrates a short quote flow without collecting sensitive or unnecessary information. In preview mode, nothing is submitted to a server." /><div className="quote-trust"><span><ShieldCheck size={17} /> Preview-safe</span><span><Zap size={17} /> Built for mobile</span><span><MessageCircle size={17} /> Text fallback</span></div></div><QuoteBuilder /></div></section>;
}

export function FAQ() {
  return <section className="section section-light" id="faq"><div className="shell faq-layout"><SectionHeading kicker="FAQ" title="Answer the questions that delay a quote." body="Every answer is data-driven so each clone can match the operator's actual policies." /><div className="faq-list">{faqs.map((item) => <details key={item.question}><summary>{item.question}<span>+</span></summary><p>{item.answer}</p></details>)}</div></div></section>;
}

export function FinalCTA() {
  return <section className="final-cta"><div className="shell final-inner"><div><span className="kicker">READY WHEN YOU ARE</span><h2>Your car can look better than this.</h2><p>We'll come to you.</p></div><div className="final-actions"><a className="button button-accent button-large" href="#quote">Get My Quote <ArrowRight size={18} /></a><a className="button button-ghost button-large" href={smsHref}><MessageCircle size={18} /> Text Us</a></div></div></section>;
}

export function Footer() {
  return <footer className="footer"><div className="shell footer-grid"><div><a className="brand footer-brand" href="#top"><span className="brand-mark">V</span><span className="brand-copy"><strong>{business.shortName}</strong><small>MOBILE DETAIL</small></span></a><p>{business.tagline}</p></div><div><strong>Explore</strong><a href="#packages">Packages</a><a href="#results">Results</a><a href="#services">Services</a><a href="#reviews">Reviews</a></div><div><strong>Service area</strong>{serviceAreas.slice(0, 4).map((area) => <span key={area.city}>{area.city}, {area.state}</span>)}</div><div><strong>Contact</strong><a href={phoneHref}>{business.phone}</a><a href={smsHref}>Text us</a>{business.instagramUrl ? <a href={business.instagramUrl} target="_blank" rel="noreferrer">Instagram</a> : null}</div></div><div className="shell footer-bottom"><span>© {new Date().getFullYear()} {business.businessName}</span>{business.previewMode ? <span className="preview-note">Concept preview · not an official business website</span> : null}</div></footer>;
}

export function MobileActionBar() {
  return <div className="mobile-action-bar"><a href={smsHref}><MessageCircle size={17} /> Text</a><a className="mobile-primary" href="#quote">Get Quote <ArrowRight size={17} /></a></div>;
}
