import type { Metadata } from "next";
import { business } from "@/config/business";

export const metadata: Metadata = { title: `Privacy | ${business.businessName}`, robots: { index: false, follow: false } };

/* Plain-language privacy note. On a client site, confirm it matches what the owner actually does with requests. */
export default function Privacy() {
  return (
    <main className="simple-page">
      <span className="kicker">Privacy</span>
      <h1>What happens with what you send.</h1>
      <p>The booking form asks for your name, phone, vehicle and preferred date so {business.owner.name} can text you to confirm a date. That's the only use.</p>
      <p>Nothing is sold or shared. If analytics is on, it records which buttons are tapped and where visitors come from, not what you type.</p>
      {business.mode === "concept" ? <p><strong>Concept site:</strong> this form does not send anything anywhere. {business.concept.footerLine}</p> : null}
      <p>Questions: <a href={`mailto:${business.email}`}>{business.email}</a>.</p>
      <a className="button button-primary" href="/">Back to the home page</a>
    </main>
  );
}
