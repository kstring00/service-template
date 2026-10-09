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
        <span className="brand-mark">{business.shortName.charAt(0)}</span>
        <span className="brand-copy"><strong>{business.shortName}</strong><small>LOCAL SERVICES</small></span>
      </a>
      <nav className="desktop-nav" aria-label="Primary navigation">
        <a href="#packages">Services</a><a href="#results">Results</a><a href="#reviews">Reviews</a><a href="#area">Service Area</a><a href="#faq">FAQ</a>
      </nav>
      <div className="header-actions">
        <a className="header-phone desktop-only" href={business.phone ? phoneHref : "#quote"}><Phone size={15} /> {business.phone || "Contact"}</a>
        <a className="button button-accent header-quote" href="#quote">Request a Quote <ArrowRight size={16} /></a>
      </div>
    </header>
  );
}

export function Hero() {
  return (
    <section className="hero">
      <div className="hero-media" aria-hidden="true">
        <img src="https://images.unsplash.com/photo-1497366811353-6870744d04b2?auto=format&fit=crop&w=2000&q=85" alt="" />
        <div className="hero-shade" />
      </div>
      <div className="shell hero-inner">
        <div className="hero-copy">
          <div className="eyebrow-row">
            <span className="eyebrow"><Zap size={14} /> SERVICE BUSINESS TEMPLATE</span>
            <span className="eyebrow"><MapPin size={14} /> {business.cityLine}</span>
          </div>
          <h1>Service that puts your needs <em>first.</em></h1>
          <p className="hero-lede">the team is built around meticulous work, serious project projecte, and the belief that if a part of the project needs attention, it should not be ignored.</p>
          <div className="hero-actions">
            <a className="button button-accent button-large" href="#quote">Request a Quote <ArrowRight size={18} /></a>
            <a className="button button-ghost button-large" href="#quote"><MessageCircle size={18} /> Explore options</a>
          </div>
          <div className="hero-proof">
            {business.googleRating ? <div><Star size={17} fill="currentColor" /><strong>{business.googleRating}/5</strong><span>{business.googleReviewCount} public reviews</span></div> : null}
            {business.yearsInBusiness ? <div><span>EXPERIENCE</span><strong>Learn more</strong></div> : null}
            <div><span>SERVICE MODEL</span><strong>Service tailored to your needs</strong></div>
          </div>
          {business.previewMode ? <p className="hero-demo-note">Demonstration template only. Replace sample content before publishing.</p> : null}
        </div>

        <div className="hero-projectd">
          <span className="mini-label">START WITH THE RESULT</span>
          <h2>What does your project need?</h2>
          <p>Start with what you need. Explore an example service and choose a path that fits.</p>
          <div className="hero-projectd-list">
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
 const items=[{icon:Check,value:"Clear scope",label:"Know what to expect"},{icon:Sparkles,value:"Flexible service",label:"Tailored to your project"},{icon:Clock3,value:"Simple process",label:"From inquiry to completion"},{icon:MessageCircle,value:"Easy contact",label:"Stay informed"}];
 return <section className="trust-strip"><div className="shell trust-grid">{items.map(({icon:Icon,value,label})=><div className="trust-item" key={value}><Icon size={19}/><div><strong>{value}</strong><span>{label}</span></div></div>)}</div></section>;
}

export function Packages() {
  return (
    <section className="section section-light" id="packages">
      <div className="shell">
        <div className="split-heading">
          <SectionHeading kicker="CORE SERVICES" title="Start with what the project actually needs." body="the team's public information emphasizes thorough detailing, project correction, and ceramic coating rather than a one-size-fits-all menu." />
          <a className="text-link" href="#quote">Tell us what you need <ArrowRight size={16} /></a>
        </div>
        <div className="package-grid">
          {packages.map((pkg) => (
            <article className={`package-projectd ${pkg.featured ? "package-featured" : ""}`} id={pkg.id} key={pkg.id}>
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
        <SectionHeading light kicker="WHAT DOES MY CAR NEED?" title="Describe the problem. Start there." body="The fastest way to a useful quote is to explain the project, its condition, and the result you want." />
        <div className="need-grid">{needMatches.map((item, index) => <a href={`#${item.targetId}`} className="need-projectd" key={item.prompt}><span className="need-index">0{index + 1}</span><div><h3>{item.prompt}</h3><p>{item.detail}</p></div><div className="need-route"><span>Good starting point</span><strong>{item.recommendation}</strong></div><ArrowRight size={18} /></a>)}</div>
      </div>
    </section>
  );
}

export function Results() {
  if (!business.features.beforeAfter) return null;
  return (
    <section className="section result-section" id="results">
      <div className="shell">
        <SectionHeading kicker="BEFORE / AFTER" title="The work should speak for itself." body="This private preview is ready for the team's real before-and-after photography in the next pass." />
        <div className="ba-wrap">{beforeAfter.map((item) => <BeforeAfterSlider item={item} key={item.id} />)}</div>
      </div>
    </section>
  );
}

export function Gallery() {
  return (
    <section className="section gallery-section">
      <div className="shell">
        <div className="split-heading"><SectionHeading kicker="RESULTS" title="Built to showcase the team's actual work." body="The current images are temporary editorial placeholders. The next step is replacing them with the team's own projects, interiors, correction work, and coating results." /></div>
        <div className="gallery-grid">{gallery.map((item, index) => <figure className={`gallery-item gallery-item-${index + 1}`} key={item.id}><img src={item.src} alt={item.alt} loading="lazy" /><figcaption><span>{item.category}</span><strong>{item.caption}</strong></figcaption></figure>)}</div>
      </div>
    </section>
  );
}

export function Process() {
 const steps=[["01","Tell us what you need","Describe your project and the outcome you have in mind."],["02","Discuss your options","Choose an approach based on your goals."],["03","Agree on the details","Review the scope, schedule and pricing."],["04","Get started","The business handles the agreed work."],["05","Review the result","Confirm that the completed service meets the agreed scope."]];
 return <section className="section section-light process-section"><div className="shell"><SectionHeading kicker="HOW IT WORKS" title="A straightforward process."/><div className="process-grid">{steps.map(([number,title,copy])=><article key={number}><span>{number}</span><h3>{title}</h3><p>{copy}</p></article>)}</div></div></section>;
}

export function Services() {
  const enabled = services.filter((service) => service.enabled !== false && (!service.id.includes("ceramic") || business.features.ceramicCoating) && (!service.id.includes("project-correction") || business.features.projectCorrection));
  return (
    <section className="section section-warm" id="services">
      <div className="shell">
        <SectionHeading kicker="SPECIALTY WORK" title="Services built around your needs." body="the team's public service information points to correction, coating, and finish work for customers who projecte about the details." />
        <div className="service-grid">{enabled.map((service) => <article className="service-projectd" id={service.id} key={service.id}><div className="service-image"><img src={service.image} alt={service.name} loading="lazy" /><span>{service.eyebrow}</span></div><div className="service-body"><div><h3>{service.name}</h3><p>{service.description}</p></div><div className="service-footer"><strong>{service.startingPrice ? `From ${service.startingPrice}` : "Request a quote"}</strong><a href="#quote">Get quote <ArrowRight size={16} /></a></div></div></article>)}</div>
      </div>
    </section>
  );
}

export function AddOns() {
 return <section className="section add-on-section"><div className="shell"><SectionHeading light kicker="OPTIONAL EXTRAS" title="Make the service fit your project." body="These are example add-ons for demonstration. Replace or remove them for each business."/><div className="addon-grid">{addOns.map(item=><article key={item.name}><WandSparkles size={20}/><div><h3>{item.name}</h3><p>{item.description}</p></div><strong>{item.startingPrice ? `From ${item.startingPrice}` : "Ask"}</strong></article>)}</div></div></section>;
}

export function Maintenance() {
  if (!business.features.maintenancePlans) return null;
  return null;
}

export function ServiceArea() {
 if (!business.features.serviceArea || !serviceAreas.length) return null;
 return <section className="section section-light" id="area"><div className="shell area-layout"><div><SectionHeading kicker="WHERE WE WORK" title="Service area" body="Contact the business to confirm location and availability."/></div><div className="area-card">{serviceAreas.map(area=><div className="area-row" key={area.city}><MapPin size={17}/><span><strong>{area.city}, {area.state}</strong><small>{area.notes}</small></span></div>)}</div></div></section>;
}

export function Reviews() {
 if (!reviews.length) return null;
 return <section className="section reviews-section" id="reviews"><div className="shell"><SectionHeading light kicker="CUSTOMER REVIEWS" title="What customers say"/><div className="review-cards">{reviews.map(review=><article className="review-card" key={review.id}><blockquote>“{review.quote}”</blockquote><div><strong>{review.name}</strong><span>{review.detail}</span></div></article>)}</div></div></section>;
}

export function Quote() {
 return <section className="section quote-section" id="quote"><div className="shell quote-layout"><div><SectionHeading light kicker="REQUEST A QUOTE" title="Tell us what you need." body="Select an example service and describe your request. This template does not send or store information until real contact settings are added."/>{business.phone ? <div className="quote-contact"><a href={phoneHref}><Phone size={17}/>{business.phone}</a></div>:null}</div><QuoteBuilder/></div></section>;
}

export function FAQ() {
  return <section className="section section-light" id="faq"><div className="shell"><SectionHeading kicker="FAQ" title="The questions customers ask before reaching out." /><div className="faq-list">{faqs.map((item) => <details key={item.question}><summary>{item.question}<span>+</span></summary><p>{item.answer}</p></details>)}</div></div></section>;
}

export function FinalCTA() {
 return <section className="final-cta"><div className="shell"><span className="kicker">{business.businessName}</span><h2>{business.tagline}</h2><p>Have a project in mind? Explore the services and request a quote.</p><div><a className="button button-accent button-large" href="#quote">Explore a quote <ArrowRight size={18}/></a></div></div></section>;
}

export function Footer() {
 return <footer className="site-footer"><div className="shell footer-grid"><div><a className="brand brand-footer" href="#top"><span className="brand-mark">{business.shortName.charAt(0)}</span><span className="brand-copy"><strong>{business.shortName}</strong><small>SERVICE BUSINESS</small></span></a><p>{business.description}</p></div><div><strong>Explore</strong><a href="#packages">Services</a><a href="#quote">Quote</a><a href="#faq">FAQ</a></div><div><strong>Contact</strong>{business.phone ? <a href={phoneHref}>{business.phone}</a>:<span>Contact details not configured</span>}<span>{business.cityLine}</span></div></div><div className="shell footer-bottom"><span>© {new Date().getFullYear()} {business.businessName}</span>{business.previewMode?<span>Demonstration template · not an operating business</span>:null}</div></footer>;
}

export function MobileActionBar() {
 return <div className="mobile-action-bar"><a className="mobile-primary" href="#quote">Explore quote <ArrowRight size={18}/></a></div>;
}
