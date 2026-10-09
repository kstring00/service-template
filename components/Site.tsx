import { Check, Clock3, MapPin, MessageCircle, Phone, ShieldCheck, Droplets } from "lucide-react";
import { business, phoneHref, smsWithBody } from "@/config/business";
import { imageAttrs } from "@/lib/images";
import { addOnPriceLabel, money } from "@/lib/pricing";
import { BeforeAfterSlider } from "@/components/BeforeAfterSlider";
import { BookingForm } from "@/components/BookingForm";
import { PackageButton } from "@/components/PackageButton";
import { TrackedLink } from "@/components/TrackedLink";

/*
 * Every section below answers at least one row of the objection map in the
 * build prompt. Each row is ASSUMED until the owner or a real customer confirms
 * it; the comment on each section names the rows it answers so they can be checked.
 */

const textHello = smsWithBody(`Hi ${business.shortName}, I'd like to book a detail.`);

function SectionHeading({ kicker, title, body }: { kicker?: string; title: string; body?: string }) {
  return (
    <div className="section-heading">
      {kicker ? <span className="kicker">{kicker}</span> : null}
      <h2>{title}</h2>
      {body ? <p>{body}</p> : null}
    </div>
  );
}

export function Header() {
  return (
    <header className="site-header">
      <a className="brand" href="#top" aria-label={`${business.businessName} home`}>
        <span className="brand-mark" aria-hidden="true">{business.shortName.charAt(0)}</span>
        <span className="brand-copy"><strong>{business.shortName}</strong><small>Mobile Detailing</small></span>
      </a>
      <nav className="site-nav" aria-label="Sections">
        <a href="#proof">Results</a>
        <a href="#packages">Packages</a>
        <a href="#reviews">Reviews</a>
        <a href="#area">Area</a>
        <a href="#faq">FAQ</a>
      </nav>
      <div className="header-actions">
        <TrackedLink href={phoneHref} event="call_tap" where="header" className="header-phone" ariaLabel={`Call ${business.phoneDisplay}`}>
          <Phone size={18} aria-hidden="true" /><span>{business.phoneDisplay}</span>
        </TrackedLink>
        <a className="button button-primary button-compact" href="#book">Request a booking</a>
      </div>
    </header>
  );
}

/* Objection rows: "Do you come to me?", "Is this guy any good?" (first screen), one main action. */
export function Hero() {
  const hero = imageAttrs(business.heroImage.src, "(min-width: 900px) 55vw, 100vw");
  const where = business.mobile && !business.shop ? "Mobile only. I come to your home or work." : business.shop && !business.mobile ? "Drop off at the shop." : "Mobile or drop-off, your choice.";
  return (
    <section className="hero" id="top">
      <div className="hero-media">
        <img {...hero} alt={business.heroImage.alt} fetchPriority="high" decoding="async" />
      </div>
      <div className="hero-copy">
        <p className="hero-where"><MapPin size={16} aria-hidden="true" /> {where} {business.serviceArea.slice(0, 3).join(", ")} and nearby.</p>
        <h1>{business.headlines.hero}</h1>
        <p className="hero-sub">{business.headlines.heroSub} {business.headlines.heroNext}</p>
        <div className="hero-actions">
          <a className="button button-primary button-large" href="#book">Request a booking</a>
          <TrackedLink href={textHello} event="text_tap" where="hero" className="button button-ghost button-large">
            <MessageCircle size={20} aria-hidden="true" /> Text {business.phoneDisplay}
          </TrackedLink>
        </div>
        <ul className="hero-facts" aria-label="Quick facts">
          <li><ShieldCheck size={18} aria-hidden="true" /> Insured</li>
          <li><Droplets size={18} aria-hidden="true" /> Brings water and power</li>
          <li><Clock3 size={18} aria-hidden="true" /> Confirmed by text within 2 business hours</li>
        </ul>
      </div>
    </section>
  );
}

/* Objection rows: "Is this guy any good?", "What do I actually get?" (evidence beside packages), "My car is really bad" (bad interior pair). */
export function Proof() {
  if (!business.beforeAfter.length) return null;
  return (
    <section className="section section-proof" id="proof">
      <SectionHeading kicker="Before and after" title={business.headlines.proof} body={business.mode === "concept" ? "Sample pairs. On a live site these are the detailer's own cars, nothing else." : "My own work, no stock photos."} />
      <div className="ba-list">
        {business.beforeAfter.map((pair, i) => <BeforeAfterSlider pair={pair} key={pair.id} eager={i === 0} />)}
      </div>
    </section>
  );
}

/* Objection rows: "What will it cost for my vehicle?", "What do I actually get?", "How long will my car be tied up?", "My car is really bad". */
export function Packages() {
  const sizes = business.vehicleSizes;
  return (
    <section className="section" id="packages">
      <SectionHeading kicker="Packages" title={business.headlines.packages} body={`Prices are by vehicle size and they're the price. ${business.mode === "concept" ? "Sample prices for a concept build." : "The only extras are the add-ons listed below, and you choose those."}`} />
      <div className="package-grid">
        {business.packages.map((pkg, index) => {
          const proof = business.beforeAfter.find((p) => p.id === pkg.proofPairId);
          return (
            <article className={`package ${pkg.featured ? "is-featured" : ""}`} id={`package-${pkg.id}`} key={pkg.id} aria-labelledby={`pkg-${pkg.id}-title`}>
              {pkg.featured ? <span className="package-flag">Most people choose this</span> : null}
              <h3 id={`pkg-${pkg.id}-title`}>{pkg.name}</h3>
              <p className="package-summary">{pkg.summary}</p>
              <table className="price-table">
                <caption className="sr-only">{pkg.name} price by vehicle size</caption>
                <tbody>
                  {sizes.map((s) => (
                    <tr key={s.id}><th scope="row">{s.label}</th><td>{money(pkg.price[s.id])}</td></tr>
                  ))}
                </tbody>
              </table>
              <p className="package-time"><Clock3 size={18} aria-hidden="true" /> Car tied up about <strong>{pkg.time}</strong></p>
              <ul className="package-includes">
                {pkg.includes.map((item) => {
                  const added = pkg.addsOverPrevious?.some((a) => item.toLowerCase().includes(a.toLowerCase().split(" ")[0]));
                  return <li key={item} className={added ? "is-added" : ""}><Check size={18} aria-hidden="true" /><span>{item}</span></li>;
                })}
              </ul>
              {pkg.addsOverPrevious && index > 0 ? <p className="package-diff">Highlighted items are what this adds over {business.packages[index - 1].name}.</p> : null}
              {pkg.badCarNote ? <p className="package-note"><strong>Really dirty car?</strong> {pkg.badCarNote}</p> : null}
              {proof ? <a className="package-proof" href="#proof">See a {proof.label.split(" · ")[1]?.toLowerCase() ?? "result"} before and after</a> : null}
              <PackageButton packageId={pkg.id} label={`Request ${pkg.name}`} primary={pkg.featured} />
            </article>
          );
        })}
      </div>

      <div className="addons" id="add-ons">
        <h3>Add-ons and surcharges</h3>
        <p>Chosen by you in the form, never added on the day without asking. Here is what each one does and what it can't.</p>
        <ul className="addon-list">
          {business.addOns.map((a) => (
            <li key={a.id}><div><strong>{a.name}</strong><span>{a.note}</span></div><em>{addOnPriceLabel(a)}</em></li>
          ))}
        </ul>
      </div>
    </section>
  );
}

/* Objection rows: "Do you need my water or power?", "Will you damage my paint or interior?", "What happens after I send this?" */
export function Process() {
  const van = imageAttrs(business.vanImage.src, "(min-width: 900px) 40vw, 100vw");
  return (
    <section className="section section-process" id="how">
      <SectionHeading kicker="How it works" title={business.headlines.process} />
      <div className="process-layout">
        <ol className="process-steps">
          {business.process.map((step, i) => (
            <li key={step.title}><span className="process-num" aria-hidden="true">{i + 1}</span><div><h3>{step.title}</h3><p>{step.body}</p></div></li>
          ))}
        </ol>
        <aside className="process-aside">
          <img {...van} alt={business.vanImage.alt} loading="lazy" decoding="async" />
          <dl>
            <div><dt>Do you need my water or power?</dt><dd>{business.waterPowerAnswer}</dd></div>
            <div><dt>Are you insured?</dt><dd>{business.insuredStatement}</dd></div>
          </dl>
        </aside>
      </div>
    </section>
  );
}

/* Objection row: "Is this guy any good?" with reviewer name and source. */
export function Reviews() {
  if (!business.reviews.length) return null;
  return (
    <section className="section section-reviews" id="reviews">
      <SectionHeading kicker="Reviews" title={business.headlines.reviews} body={business.mode === "concept" ? "Sample reviews written for this concept build. A live site shows real reviews, with permission, and links to the source." : undefined} />
      <ul className="review-list">
        {business.reviews.map((r) => (
          <li className="review" key={r.name + r.quote.slice(0, 12)}>
            <blockquote>{r.quote}</blockquote>
            <footer><strong>{r.name}</strong><span>{r.service ? `${r.service} · ` : ""}{r.source}{business.mode === "concept" ? " (sample)" : ""}</span></footer>
          </li>
        ))}
      </ul>
    </section>
  );
}

/* Objection rows: "Do you come to me?" (map or list of towns), hours. */
export function Area() {
  return (
    <section className="section section-area" id="area">
      <SectionHeading kicker="Service area and hours" title={business.headlines.area} />
      <div className="area-layout">
        <div className="area-card">
          <h3><MapPin size={20} aria-hidden="true" /> Towns I cover</h3>
          <ul className="town-list">{business.serviceArea.map((t) => <li key={t}>{t}</li>)}</ul>
          <p>{business.serviceAreaNote}</p>
          <TrackedLink href={smsWithBody(`Hi ${business.shortName}, do you cover my ZIP? `)} event="text_tap" where="area" className="button button-outline">
            <MessageCircle size={18} aria-hidden="true" /> Text your ZIP
          </TrackedLink>
        </div>
        <div className="area-card">
          <h3><Clock3 size={20} aria-hidden="true" /> Hours</h3>
          <table className="hours-table"><caption className="sr-only">Business hours</caption><tbody>{business.hours.map((h) => <tr key={h.days}><th scope="row">{h.days}</th><td>{h.hours}</td></tr>)}</tbody></table>
          <p>Texts outside these hours get a reply the next morning.</p>
        </div>
      </div>
    </section>
  );
}

/* Objection rows: "Will you damage my paint?" (insured), "What happens after I send this?" (owner's name and photo by the form). */
export function Owner() {
  const photo = imageAttrs(business.owner.photo, "(min-width: 900px) 320px, 40vw");
  return (
    <section className="section section-owner" id="owner">
      <div className="owner-layout">
        <img className="owner-photo" {...photo} alt={business.owner.photoAlt} loading="lazy" decoding="async" />
        <div>
          <span className="kicker">{business.headlines.owner}</span>
          <h2>{business.owner.name}</h2>
          <p className="owner-role">{business.owner.role} · {business.yearsInBusiness} years detailing in {business.town}</p>
          <p>{business.owner.bio}</p>
          <ul className="owner-facts">
            <li><ShieldCheck size={18} aria-hidden="true" /> {business.insuredStatement}</li>
            <li><Droplets size={18} aria-hidden="true" /> {business.waterPowerAnswer}</li>
          </ul>
        </div>
      </div>
    </section>
  );
}

/* Objection rows: "How do I book, do I pay up front?", "What happens after I send this?" */
export function Booking() {
  return (
    <section className="section section-book" id="book">
      <div className="book-layout">
        <div className="book-intro">
          <span className="kicker">Two minutes, no payment</span>
          <h2>{business.headlines.booking}</h2>
          <p>A request, not a charge. {business.booking.responsePromise}</p>
          <ul className="book-promises">
            <li><Check size={18} aria-hidden="true" /> {business.booking.depositLine}</li>
            <li><Check size={18} aria-hidden="true" /> {business.booking.cancellationLine}</li>
            <li><Check size={18} aria-hidden="true" /> Price is set by vehicle size. It only changes if the car is in worse shape than described, and I'll say so before I start.</li>
          </ul>
          <p className="book-owner"><strong>{business.owner.name}</strong> reads every request. Owner, insured, {business.yearsInBusiness} years in {business.town}.</p>
        </div>
        <BookingForm />
      </div>
    </section>
  );
}

/* Only what the sections above don't answer. */
export function FAQ() {
  if (!business.faqs.length) return null;
  return (
    <section className="section section-faq" id="faq">
      <SectionHeading kicker="FAQ" title={business.headlines.faq} />
      <div className="faq-list">
        {business.faqs.map((f) => (
          <details key={f.question}><summary>{f.question}</summary><p>{f.answer}</p></details>
        ))}
      </div>
    </section>
  );
}

export function Footer() {
  return (
    <footer className="site-footer">
      <div className="footer-grid">
        <div>
          <strong>{business.businessName}</strong>
          <p>{business.mobile ? "Mobile detailing" : "Detailing"} in {business.town}, {business.state}.</p>
        </div>
        <div>
          <strong>Contact</strong>
          <a href={phoneHref}>{business.phoneDisplay}</a>
          <a href={`mailto:${business.email}`}>{business.email}</a>
        </div>
        <div>
          <strong>Site</strong>
          <a href="#packages">Packages</a>
          <a href="#book">Request a booking</a>
          <a href="/privacy">Privacy</a>
        </div>
      </div>
      <div className="footer-bottom">
        <span>© {new Date().getFullYear()} {business.businessName}</span>
        {business.mode === "concept" ? <span className="footer-concept">{business.concept.footerLine}</span> : null}
      </div>
    </footer>
  );
}

export function MobileBar() {
  return (
    <div className="mobile-bar">
      <TrackedLink href={phoneHref} event="call_tap" where="sticky" className="mobile-bar-call" ariaLabel={`Call ${business.phoneDisplay}`}>
        <Phone size={20} aria-hidden="true" /> Call
      </TrackedLink>
      <a className="mobile-bar-primary" href="#book">Request a booking</a>
    </div>
  );
}
