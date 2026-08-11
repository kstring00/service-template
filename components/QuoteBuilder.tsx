"use client";

import { useMemo, useState } from "react";
import { ArrowRight, MessageCircle } from "lucide-react";
import { business } from "@/config/business";
import { getSmsUrl } from "@/lib/conversion";

const vehicleOptions = ["Sedan / Coupe", "Small SUV", "Large SUV", "Truck", "Van / Other"];
const serviceOptions = ["Interior + Exterior Detail", "Paint Correction", "Ceramic Coating", "Chrome Polishing", "Not sure yet"];
const conditionOptions = ["Light maintenance", "Moderate buildup", "Heavy buildup / neglected", "Paint defects / scratches", "Not sure"];

export function QuoteBuilder() {
  const [vehicle, setVehicle] = useState(vehicleOptions[0]);
  const [service, setService] = useState(serviceOptions[0]);
  const [condition, setCondition] = useState(conditionOptions[0]);
  const [zip, setZip] = useState("");

  const message = useMemo(
    () => `Hi ${business.shortName}, I'd like a quote. Vehicle: ${vehicle}. Service: ${service}. Condition: ${condition}.${zip ? ` ZIP: ${zip}.` : ""}`,
    [vehicle, service, condition, zip]
  );

  const smsUrl = getSmsUrl(message);

  return (
    <div className="quote-builder">
      <div className="quote-grid">
        <label>
          <span>Vehicle type</span>
          <select value={vehicle} onChange={(event) => setVehicle(event.target.value)}>
            {vehicleOptions.map((option) => <option key={option}>{option}</option>)}
          </select>
        </label>
        <label>
          <span>Service</span>
          <select value={service} onChange={(event) => setService(event.target.value)}>
            {serviceOptions.map((option) => <option key={option}>{option}</option>)}
          </select>
        </label>
        <label>
          <span>Vehicle condition</span>
          <select value={condition} onChange={(event) => setCondition(event.target.value)}>
            {conditionOptions.map((option) => <option key={option}>{option}</option>)}
          </select>
        </label>
        <label>
          <span>ZIP code</span>
          <input inputMode="numeric" maxLength={10} value={zip} onChange={(event) => setZip(event.target.value)} placeholder="77573" />
        </label>
      </div>

      <div className="quote-summary">
        <div>
          <span className="mini-label">YOUR REQUEST</span>
          <strong>{service} · {vehicle}</strong>
          <small>{condition}{zip ? ` · ${zip}` : ""}</small>
        </div>
        <a className="button button-accent button-large" href={smsUrl}>
          <MessageCircle size={18} /> Text this request <ArrowRight size={18} />
        </a>
      </div>
      {business.previewMode ? <p className="quote-note">Private preview: this form does not store or submit personal information. It only prepares a text message for Perfexxion.</p> : null}
    </div>
  );
}
