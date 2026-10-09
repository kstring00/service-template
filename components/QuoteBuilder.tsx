"use client";

import { useMemo, useState } from "react";
import { ArrowRight, MessageCircle } from "lucide-react";
import { business } from "@/config/business";
import { getSmsUrl } from "@/lib/conversion";
import { packages } from "@/data/site";

const timingOptions = ["As soon as practical", "Within the next month", "Flexible timing"];

export function QuoteBuilder() {
  const [service, setService] = useState(packages[0]?.name ?? "General inquiry");
  const [timing, setTiming] = useState(timingOptions[0]);
  const [details, setDetails] = useState("");
  const message = useMemo(() => `Hi ${business.shortName}, I'd like to discuss ${service}. Timing: ${timing}. ${details}`, [service, timing, details]);
  const contactReady = Boolean(business.smsNumber);
  return <div className="quote-builder">
    <div className="quote-grid">
      <label><span>What do you need?</span><select value={service} onChange={e => setService(e.target.value)}>{packages.map(p => <option key={p.id}>{p.name}</option>)}</select></label>
      <label><span>Ideal timing</span><select value={timing} onChange={e => setTiming(e.target.value)}>{timingOptions.map(t => <option key={t}>{t}</option>)}</select></label>
      <label style={{gridColumn:"1 / -1"}}><span>Project details (optional)</span><input value={details} onChange={e => setDetails(e.target.value)} maxLength={250} placeholder="Describe your project" /></label>
    </div>
    <div className="quote-summary"><div><span className="mini-label">YOUR REQUEST</span><strong>{service}</strong><small>{timing}{details ? ` · ${details}` : ""}</small></div>
      {contactReady ? <a className="button button-accent button-large" href={getSmsUrl(message)}><MessageCircle size={18}/> Text this request <ArrowRight size={18}/></a> : <span className="quote-note">Demo only — configure a real contact number to enable submissions.</span>}
    </div>
  </div>;
}
