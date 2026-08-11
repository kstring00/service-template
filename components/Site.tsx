import {
  ArrowRight,
  ArrowUpRight,
  Check,
  ChevronRight,
  Clock3,
  MapPin,
  MessageCircle,
  Phone,
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
        <span className="brand-mark">P</span>
        <span className="brand-copy"><strong>{business.shortName}</strong><small>MOBILE DETAILING</small></span>
      </a>
      <nav className="desktop-nav" aria-label="Primary navigation">
        <a href="#packages">Services</a><a href="#results">Results</a><a href="#reviews">Reviews</a><a href="#area">Service Area</a><a href="#faq">FAQ</a>
      </nav>
      <div className="header-actions">
        <a className="header-phone desktop-only" href={phoneHref}><Phone size={15} /> {business.phone}</a>
        <a className="button button-accent header-quote" href="#quote">Request a Quote <ArrowRight size={16} /></a>
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
            <span className="eyebrow"><Zap size={14} /> MOBILE DETAILING</span>
            <span className="eyebrow"><MapPin size={14} /> {business.cityLine}</span>
          </div>
          <h1>Detailing for people who notice <em>everything.</em></h1>
          <p className="hero-lede">Perfexxion is built around meticulous work, serious paint care, and the belief that if a part of the vehicle needs attention, it should not be ignored.</p>
          <div className="hero-actions">
            <a className="button button-accent button-large" href="#quote">Request a Quote <ArrowRight size={18} /></a>
            <a className="button button-ghost button-large" href={smsHref}><MessageCircle size={18} /> Text Perfexxion</a>
          </div>
          <div className="hero-proof">
            {business.googleRating ? <div><Star size={17} fill="currentColor" /><strong>{business.googleRating}/5</strong><span>{business.googleReviewCount} public reviews</span></div> : null}
            {business.yearsInBusiness ? <div><span>ESTABLISHED</span><strong>2016</strong></div> : null}
            <div><span>SERVICE MODEL</span><strong>Mobile detailing in League City</strong></div>
          </div>
          {business.previewMode ? <p className="hero-demo-note">Private concept preview. Business details shown here are based on public information and should be confirmed before launch.</p> : null}
        </div>

        <div className="hero-card">
          <span className="mini-label">START WITH THE RESULT</span>
          <h2>What does your vehicle need?</h2>
          <p>Choose the problem first. Perfexxion can then help determine the right level of detailing, correction, or protection.</p>
          <div className="hero-card-list">
            {needMatches.slice(0, 3).map((item, index) => (
              <a href={`#${item.targetId}`} key={item.prompt}><span>0{index + 1}</span><div><strong>{item.prompt}</strong><small>{item.recommendation}</small></div><ChevronRight size={17} /></a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export function TrustBar() {
  const items = [
    { icon: MapPin, value: "League City", label: "mobile service" },
    { icon: Sparkles, value: "Established 2016", label: "local detailing business" },
    { icon: Star, value: "4.9 / 5", label: "public rating" },
    { icon: Check, value: "High-attention work", label: "reviewed for thoroughness" }
  ];

  return <section className="trust-strip"><div className="shell trust-grid">{items.map(({ icon: Icon, value, label }) => <div className="trust-item" key={value}><Icon size={19} /><div><strong>{value}</strong><span>{label}</span></div></div>)}</div></section>;
}

export function Packages() {
  return (
    <section className="section section-light" id="packages">
      <div className="shell">
        <div className="split-heading">
          <SectionHeading kicker="CORE SERVICES" title="Start with what the vehicle actually needs." body="Perfexxion's public information emphasizes thorough detailing, paint correction, and ceramic coating rather than a one-size-fits-all menu." />
          <a className="text-link" href="#quote">Tell us about your vehicle <ArrowRight size={16} /></a>
        </div>
        <div className="package-grid">
          {packages.map((pkg) => (
            <article className={`package-card ${pkg.featured ? "package-featured" : ""}`} id={pkg.id} key={pkg.id}>
              {pkg.featured ? <span className="package-badge">SPECIALTY SERVICE</span> : null}
              <div className="package-top"><div><span className="mini-label">{pkg.tagline}</span><h3>{pkg.name}</h3></div><div className="package-price"><span>PRICING</span><strong>{pkg.startingPrice ?? "Quote"}</strong></div></div>
              <p>{pkg.description}</p>
              <div className="package-meta"><span><Clock3 size={14} /> Time varies by condition</span><span><Sparkles size={14} /> {pkg.idealFor}</span></div>
              <ul>{pkg.features.map((feature) => <li key={feature}><Check size={15} /> {feature}</li>)}</ul>
              <a className={`button ${pkg.featured ? "button-accent" : "button-outline-dark"}`} href={getQuoteUrl(pkg)}>Request {pkg.name} Quote <ArrowRight size={16} /></a>
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
        <SectionHeading light kicker="WHAT DOES MY CAR NEED?" title="Describe the problem. Start there." body="The fastest way to a useful quote is to explain the vehicle, its condition, and the result you want." />
        <div className="need-grid">{needMatches.map((item, index) => <a href={`#${item.targetId}`} className="need-card" key={item.prompt}><span className="need-index">0{index + 1}</span><div><h3>{item.prompt}</h3><p>{item.detail}</p></div><div className="need-route"><span>Good starting point</span><strong>{item.recommendation}</strong></div><ArrowRight size={18} /></a>)}</div>
      </div>
    </section>
  );
}

export function Results() {
  if (!business.features.beforeAfter) return null;
  return (
    <section className="section result-section" id="results">
      <div className="shell">
        <SectionHeading kicker="BEFORE / AFTER" title="The work should speak for itself." body="This private preview is ready for Perfexxion's real before-and-after photography in the next pass." />
        <div className="ba-wrap">{beforeAfter.map((item) => <BeforeAfterSlider item={item} key={item.id} />)}</div>
      </div>
    </section>
  );
}

export function Gallery() {
  return (
    <section className="section gallery-section">
      <div className="shell">
        <div className="split-heading"><SectionHeading kicker="RESULTS" title="Built to showcase Perfexxion's actual work." body="The current images are temporary editorial placeholders. The next step is replacing them with Perfexxion's own vehicles, interiors, correction work, and coating results." /></div>
        <div className="gallery-grid">{gallery.map((item, index) => <figure className={`gallery-item gallery-item-${index + 1}`} key={item.id}><img src={item.src} alt={item.alt} loading="lazy" /><figcaption><span>{item.category}</span><strong>{item.caption}</strong></figcaption></figure>)}</div>
      </div>
    </section>
  );
}

export function Process() {
  const steps = [
    ["01", "Tell Ryan about the vehicle", "Share the vehicle type, condition, problem areas, and the result you want."],
    ["02", "Get the scope right", "The service and price can be aligned to the actual work instead of guessing from a generic package."],
    ["03", "Confirm the appointment", "Use the contact method Ryan confirms for scheduling."],
    ["04", "Perfexxion comes to you", "Mobile detailing is the core service model publicly associated with the business."],
    ["05", "Inspect the result", "The standard is simple: if it needs attention, it should not be overlooked."]
  ];
  return <section className="section section-light process-section"><div className="shell"><SectionHeading kicker="HOW IT WORKS" title="Simple from quote to finished vehicle." /><div className="process-grid">{steps.map(([number, title, copy]) => <article key={number}><span>{number}</span><h3>{title}</h3><p>{copy}</p></article>)}</div></div></section>;
}

export function Services() {
  const enabled = services.filter((service) => service.enabled !== false && (!service.id.includes("ceramic") || business.features.ceramicCoating) && (!service.id.includes("paint-correction") || business.features.paintCorrection));
  return (
    <section className="section section-warm" id="services">
      <div className="shell">
        <SectionHeading kicker="SPECIALTY WORK" title="More than a quick clean." body="Perfexxion's public service information points to correction, coating, and finish work for customers who care about the details." />
        <div className="service-grid">{enabled.map((service) => <article className="service-card" id={service.id} key={service.id}><div className="service-image"><img src={service.image} alt={service.name} loading="lazy" /><span>{service.eyebrow}</span></div><div className="service-body"><div><h3>{service.name}</h3><p>{service.description}</p></div><div className="service-footer"><strong>{service.startingPrice ? `From ${service.startingPrice}` : "Request a quote"}</strong><a href="#quote">Get quote <ArrowRight size={16} /></a></div></div></article>)}</div>
      </div>
    </section>
  );
}

export function AddOns() {
  return <section className="section add-on-section"><div className="shell"><SectionHeading light kicker="DETAIL-LEVEL ATTENTION" title="The small problem areas still matter." body="These are examples of issues publicly associated with Perfexxion's work. Exact scope should be confirmed with the vehicle." /><div className="addon-grid">{addOns.map((item) => <article key={item.name}><WandSparkles size={20} /><div><h3>{item.name}</h3><p>{item.description}</p></div><strong>{item.startingPrice ? `From ${item.startingPrice}` : "Ask"}</strong></article>)}</div></div></section>;
}

export function Maintenance() {
  if (!business.features.maintenancePlans) return null;
  return null;
}

export function ServiceArea() {
  if (!business.features.serviceArea) return null;
  return (
    <section className="section section-light" id="area"><div className="shell area-layout"><div><SectionHeading kicker="MOBILE IN LEAGUE CITY" title="Tell us where the vehicle is." body="League City is the publicly verified home market. For locations outside the area, text your ZIP so Ryan can confirm availability." /><div className="area-actions"><a className="button button-dark" href={getSmsUrl("Hi Perfexxion, can you confirm whether you service my ZIP code?")}><MessageCircle size={17} /> Text your ZIP</a><a className="button button-outline-dark" href={phoneHref}><Phone size={17} /> Call</a></div></div><div className="area-card"><span className="mini-label">PUBLICLY VERIFIED AREA</span>{serviceAreas.map((area) => <div className="area-row" key={`${area.city}-${area.state}`}><MapPin size={17} /><span><strong>{area.city}, {area.state}</strong><small>{area.notes}</small></span>{area.travelFee ? <em>{area.travelFee}</em> : null}</div>)}<p>Outside League City? Text the ZIP code before scheduling.</p></div></div></section>
  );
}

export function Reviews() {
  return (
    <section className="section reviews-section" id="reviews"><div className="shell reviews-layout"><div className="review-summary"><span className="kicker">PUBLIC REPUTATION</span><div className="big-rating"><strong>{business.googleRating ?? "—"}</strong><span>/5</span></div><div className="stars">{Array.from({ length: 5 }).map((_, index) => <Star key={index} size={19} fill="currentColor" />)}</div><p>{business.googleReviewCount ? `${business.googleReviewCount} public reviews on the local listing used for this preview.` : "Review data pending confirmation."}</p><div className="theme-list">{reviewThemes.map((theme) => <span key={theme}><Check size={13} /> {theme}</span>)}</div>{business.googleReviewsUrl ? <a className="text-link text-link-light" href={business.googleReviewsUrl} target="_blank" rel="noreferrer">Read reviews <ArrowUpRight size={16} /></a> : null}</div><div className="review-cards">{reviews.map((review) => <article className="review-card" key={review.id}><div className="review-stars">{Array.from({ length: review.rating }).map((_, i) => <Star key={i} size={14} fill="currentColor" />)}</div><blockquote>“{review.quote}”</blockquote><div><strong>{review.name}</strong><span>{review.detail}</span></div></article>)}</div></div></section>
  );
}

export function Quote() {
  return <section className="section quote-section" id="quote"><div className="shell quote-layout"><div><SectionHeading light kicker="REQUEST A QUOTE" title="Give Perfexxion the useful details up front." body="Choose the vehicle, service, condition, and ZIP. The site prepares a text message so nothing is stored here." /><div className="quote-contact"><a href={phoneHref}><Phone size={17} /> {business.phone}</a><a href={smsHref}><MessageCircle size={17} /> Text Perfexxion</a></div></div><QuoteBuilder /></div></section>;
}

export function FAQ() {
  return <section className="section section-light" id="faq"><div className="shell"><SectionHeading kicker="FAQ" title="The questions customers ask before reaching out." /><div className="faq-list">{faqs.map((item) => <details key={item.question}><summary>{item.question}<span>+</span></summary><p>{item.answer}</p></details>)}</div></div></section>;
}

export function FinalCTA() {
  return <section className="final-cta"><div className="shell"><span className="kicker">PERFEXXION MOBILE DETAILING</span><h2>{business.tagline}</h2><p>Tell Ryan what you are driving, what condition it is in, and what result you want.</p><div><a className="button button-accent button-large" href="#quote">Request a Quote <ArrowRight size={18} /></a><a className="button button-ghost button-large" href={phoneHref}><Phone size={18} /> Call {business.phone}</a></div></div></section>;
}

export function Footer() {
  return <footer className="site-footer"><div className="shell footer-grid"><div><a className="brand brand-footer" href="#top"><span className="brand-mark">P</span><span className="brand-copy"><strong>{business.shortName}</strong><small>MOBILE DETAILING</small></span></a><p>League City mobile detailing with a reputation for thoroughness, correction work, ceramic coating, and high-attention results.</p></div><div><strong>Explore</strong><a href="#packages">Services</a><a href="#results">Results</a><a href="#reviews">Reviews</a><a href="#faq">FAQ</a></div><div><strong>Contact</strong><a href={phoneHref}>{business.phone}</a><a href={smsHref}>Text for a quote</a><span>League City, TX</span></div></div><div className="shell footer-bottom"><span>© {new Date().getFullYear()} {business.businessName}</span>{business.previewMode ? <span>Private concept preview · details require owner confirmation before launch</span> : null}</div></footer>;
}

export function MobileActionBar() {
  return <div className="mobile-action-bar"><a href={smsHref}><MessageCircle size={18} /> Text</a><a className="mobile-primary" href="#quote">Request Quote <ArrowRight size={18} /></a></div>;
}
