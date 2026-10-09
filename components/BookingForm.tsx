"use client";

import { useEffect, useMemo, useRef, useState, type FormEvent } from "react";
import { ArrowLeft, ArrowRight, Check, MessageCircle, Phone } from "lucide-react";
import { business, phoneHref, smsWithBody } from "@/config/business";
import { addOnPriceLabel, estimate, money, packageById } from "@/lib/pricing";
import { track } from "@/lib/tracking";
import type { VehicleSizeId } from "@/types/site";
import { PACKAGE_SELECT_EVENT, type PackageSelectDetail } from "@/components/PackageButton";

type Step = 1 | 2 | 3 | 4;

type FormState = {
  size?: VehicleSizeId;
  vehicle: string;
  packageId?: string;
  addOns: string[];
  name: string;
  phone: string;
  date: string;
  location: string;
  notes: string;
  photoName: string;
  source: string;
};

const initial: FormState = { vehicle: "", addOns: [], name: "", phone: "", date: "", location: "", notes: "", photoName: "", source: "" };

const sourceOptions = ["Google", "Facebook or Instagram", "A friend", "Saw the van", "Other"];

function todayISO() {
  const d = new Date();
  d.setDate(d.getDate() + 1);
  return d.toISOString().slice(0, 10);
}

export function BookingForm() {
  const [step, setStep] = useState<Step>(1);
  const [form, setForm] = useState<FormState>(initial);
  const [errors, setErrors] = useState<Record<string, string>>({});
  const topRef = useRef<HTMLDivElement>(null);

  const pkg = packageById(form.packageId);
  const est = useMemo(() => estimate(pkg, form.size, form.addOns), [pkg, form.size, form.addOns]);

  // A package card button anywhere on the page carries its package into the form.
  useEffect(() => {
    const onSelect = (event: Event) => {
      const detail = (event as CustomEvent<PackageSelectDetail>).detail;
      setForm((f) => ({ ...f, packageId: detail.packageId }));
      setStep((s) => (s === 4 ? 1 : s));
    };
    window.addEventListener(PACKAGE_SELECT_EVENT, onSelect);
    const fromUrl = new URLSearchParams(window.location.search).get("package");
    if (fromUrl && packageById(fromUrl)) setForm((f) => ({ ...f, packageId: fromUrl }));
    return () => window.removeEventListener(PACKAGE_SELECT_EVENT, onSelect);
  }, []);

  const update = <K extends keyof FormState>(key: K, value: FormState[K]) => setForm((f) => ({ ...f, [key]: value }));

  const goTo = (next: Step) => {
    setStep(next);
    requestAnimationFrame(() => topRef.current?.scrollIntoView({ block: "start", behavior: "smooth" }));
  };

  const validate = (s: Step) => {
    const e: Record<string, string> = {};
    if (s === 1) {
      if (!form.size) e.size = "Pick the size that fits your vehicle.";
      if (form.vehicle.trim().length < 3) e.vehicle = "Tell me the year, make and model, or at least the model.";
    }
    if (s === 2 && !form.packageId) e.packageId = "Pick a package. You can change your mind by text later.";
    if (s === 3) {
      if (form.name.trim().length < 2) e.name = "Your name, so I know who I'm texting.";
      if (form.phone.replace(/\D/g, "").length < 10) e.phone = "A phone number I can text, 10 digits.";
    }
    setErrors(e);
    return Object.keys(e).length === 0;
  };

  const next = () => {
    if (!validate(step)) return;
    if (step === 2 && pkg) track("package_select", { package: pkg.id, from: "form" });
    goTo((step + 1) as Step);
  };

  const submit = (event: FormEvent) => {
    event.preventDefault();
    if (!validate(3) || !pkg || !form.size) return;
    track("booking_request_submit", { package: pkg.id, size: form.size, addons: form.addOns.join("|") });
    if (business.mode === "client") {
      // CLIENT SITE: wire this to the owner's inbox (form endpoint, email API, or CRM).
      // Until an endpoint exists, the compiled request opens as a text message.
      window.location.href = smsWithBody(compileMessage(form, pkg.name, est?.label));
    }
    goTo(4);
  };

  const sizeLabel = business.vehicleSizes.find((v) => v.id === form.size)?.label;

  return (
    <div className="booking" ref={topRef} id="booking-form">
      {step < 4 ? (
        <ol className="booking-steps" aria-label="Booking request steps">
          {["Your vehicle", "Package", "Your details"].map((label, i) => {
            const n = (i + 1) as Step;
            return (
              <li key={label} aria-current={step === n ? "step" : undefined} className={step > n ? "is-done" : step === n ? "is-current" : ""}>
                <span className="booking-step-num">{step > n ? <Check size={14} aria-hidden="true" /> : n}</span>
                <span>{label}</span>
              </li>
            );
          })}
        </ol>
      ) : null}

      <form className="booking-form" onSubmit={submit} noValidate aria-live="polite">
        {step === 1 ? (
          <fieldset className="booking-fieldset">
            <legend className="booking-legend">What are you driving?</legend>
            <div className="choice-grid" role="radiogroup" aria-label="Vehicle size" aria-describedby={errors.size ? "err-size" : undefined}>
              {business.vehicleSizes.map((v) => (
                <label key={v.id} className={`choice ${form.size === v.id ? "is-selected" : ""}`}>
                  <input type="radio" name="size" value={v.id} checked={form.size === v.id} onChange={() => update("size", v.id)} />
                  <span className="choice-title">{v.label}</span>
                  <span className="choice-sub">{v.examples}</span>
                </label>
              ))}
            </div>
            {errors.size ? <p className="field-error" id="err-size">{errors.size}</p> : null}
            <label className="field">
              <span>Year, make and model</span>
              <input type="text" name="vehicle" autoComplete="off" placeholder="2019 Toyota Highlander" value={form.vehicle} onChange={(e) => update("vehicle", e.target.value)} aria-invalid={!!errors.vehicle} aria-describedby={errors.vehicle ? "err-vehicle" : undefined} required />
              {errors.vehicle ? <small className="field-error" id="err-vehicle">{errors.vehicle}</small> : null}
            </label>
          </fieldset>
        ) : null}

        {step === 2 ? (
          <fieldset className="booking-fieldset">
            <legend className="booking-legend">Which package?</legend>
            <div className="choice-grid choice-grid-packages" role="radiogroup" aria-label="Package" aria-describedby={errors.packageId ? "err-package" : undefined}>
              {business.packages.map((p) => (
                <label key={p.id} className={`choice ${form.packageId === p.id ? "is-selected" : ""}`}>
                  <input type="radio" name="package" value={p.id} checked={form.packageId === p.id} onChange={() => update("packageId", p.id)} />
                  <span className="choice-title">{p.name}</span>
                  <span className="choice-price">{form.size ? money(p.price[form.size]) : `from ${money(p.price.sedan)}`}</span>
                  <span className="choice-sub">{p.time}</span>
                </label>
              ))}
            </div>
            {errors.packageId ? <p className="field-error" id="err-package">{errors.packageId}</p> : null}

            <div className="addon-choices">
              <p className="addon-choices-title">Add-ons (optional)</p>
              {business.addOns.map((a) => {
                const checked = form.addOns.includes(a.id);
                return (
                  <label key={a.id} className={`addon-choice ${checked ? "is-selected" : ""}`}>
                    <input type="checkbox" name="addons" value={a.id} checked={checked} onChange={() => update("addOns", checked ? form.addOns.filter((x) => x !== a.id) : [...form.addOns, a.id])} />
                    <span className="addon-choice-body">
                      <span className="addon-choice-name">{a.name}</span>
                      <span className="addon-choice-note">{a.note}</span>
                    </span>
                    <span className="addon-choice-price">{addOnPriceLabel(a)}</span>
                  </label>
                );
              })}
            </div>
          </fieldset>
        ) : null}

        {step === 3 ? (
          <fieldset className="booking-fieldset">
            <legend className="booking-legend">Where do I text you?</legend>
            <div className="field-grid">
              <label className="field">
                <span>Name</span>
                <input type="text" name="name" autoComplete="name" value={form.name} onChange={(e) => update("name", e.target.value)} aria-invalid={!!errors.name} aria-describedby={errors.name ? "err-name" : undefined} required />
                {errors.name ? <small className="field-error" id="err-name">{errors.name}</small> : null}
              </label>
              <label className="field">
                <span>Phone (I'll text this number)</span>
                <input type="tel" name="phone" autoComplete="tel" inputMode="tel" value={form.phone} onChange={(e) => update("phone", e.target.value)} aria-invalid={!!errors.phone} aria-describedby={errors.phone ? "err-phone" : undefined} required />
                {errors.phone ? <small className="field-error" id="err-phone">{errors.phone}</small> : null}
              </label>
              <label className="field">
                <span>Preferred date <em>(optional)</em></span>
                <input type="date" name="date" min={todayISO()} value={form.date} onChange={(e) => update("date", e.target.value)} />
              </label>
              <label className="field">
                <span>Address or ZIP where the car will be <em>(optional)</em></span>
                <input type="text" name="location" autoComplete="postal-code" value={form.location} onChange={(e) => update("location", e.target.value)} placeholder="78701 or a street address" />
              </label>
              <label className="field field-wide">
                <span>Anything I should know? <em>(optional)</em></span>
                <textarea name="notes" rows={3} value={form.notes} onChange={(e) => update("notes", e.target.value)} placeholder="Dog hair in the back, coffee stain on the passenger seat, parking garage with a low ceiling..." />
              </label>
              <label className="field">
                <span>Photo of the car's condition <em>(optional)</em></span>
                <input type="file" name="photo" accept="image/*" onChange={(e) => update("photoName", e.target.files?.[0]?.name ?? "")} />
                {form.photoName ? <small className="field-hint">Attached: {form.photoName}</small> : null}
              </label>
              <label className="field">
                <span>How did you find us? <em>(optional)</em></span>
                <select name="source" value={form.source} onChange={(e) => update("source", e.target.value)}>
                  <option value="">Choose one</option>
                  {sourceOptions.map((o) => <option key={o}>{o}</option>)}
                </select>
              </label>
            </div>
          </fieldset>
        ) : null}

        {step === 4 && pkg ? (
          <div className="booking-done" role="status">
            <span className="booking-done-mark"><Check size={28} aria-hidden="true" /></span>
            <h3>Request received{form.name ? `, ${form.name.trim().split(" ")[0]}` : ""}.</h3>
            <p className="booking-done-lead">{business.booking.responsePromise}</p>
            <dl className="booking-recap">
              <div><dt>Package</dt><dd>{pkg.name}{form.addOns.length ? ` + ${form.addOns.length} add-on${form.addOns.length > 1 ? "s" : ""}` : ""}</dd></div>
              <div><dt>Vehicle</dt><dd>{form.vehicle} ({sizeLabel})</dd></div>
              {form.date ? <div><dt>Preferred date</dt><dd>{new Date(form.date + "T12:00:00").toLocaleDateString("en-US", { weekday: "long", month: "long", day: "numeric" })}</dd></div> : null}
              <div><dt>Estimate</dt><dd>{est?.label} · {pkg.time}</dd></div>
            </dl>
            <p className="booking-done-policy">{business.booking.depositLine} {business.booking.cancellationLine}</p>
            <p className="booking-done-policy">Need to change something before I text? <a href={smsWithBody(`Hi ${business.shortName}, I just sent a booking request for my ${form.vehicle}.`)}>Text me</a> or call {business.phoneDisplay}.</p>
            {business.mode === "concept" ? (
              <p className="booking-demo-note"><strong>Demo:</strong> this is a concept site, so nothing was sent anywhere. On a live site the owner receives this request by text and email.</p>
            ) : null}
            <button type="button" className="button button-ghost" onClick={() => { setForm(initial); goTo(1); }}>Start another request</button>
          </div>
        ) : null}

        {step < 4 ? (
          <div className="booking-footer">
            <div className="booking-estimate" aria-live="polite">
              {est && pkg ? (
                <>
                  <span className="booking-estimate-label">Your estimate</span>
                  <strong>{est.label}</strong>
                  <span className="booking-estimate-sub">{pkg.name} · {sizeLabel} · {pkg.time}</span>
                </>
              ) : (
                <>
                  <span className="booking-estimate-label">Your estimate</span>
                  <strong>{pkg ? `from ${money(pkg.price.sedan)}` : "Pick a package to see a price"}</strong>
                  <span className="booking-estimate-sub">{pkg ? `${pkg.name} · choose a size for the exact price` : "Prices are fixed by vehicle size, no surprises"}</span>
                </>
              )}
            </div>
            <div className="booking-actions">
              {step > 1 ? <button type="button" className="button button-ghost" onClick={() => goTo((step - 1) as Step)}><ArrowLeft size={18} aria-hidden="true" /> Back</button> : null}
              {step < 3 ? (
                <button type="button" className="button button-primary" onClick={next}>Continue <ArrowRight size={18} aria-hidden="true" /></button>
              ) : (
                <button type="submit" className="button button-primary">Request a booking <ArrowRight size={18} aria-hidden="true" /></button>
              )}
            </div>
            {step === 3 ? (
              <p className="booking-policy">
                <strong>No payment now.</strong> {business.booking.depositLine.replace("No payment now. ", "")} {business.booking.cancellationLine} {business.booking.responsePromise}
              </p>
            ) : null}
          </div>
        ) : null}
      </form>

      {step < 4 ? (
        <p className="booking-alt">
          Rather talk? <a href={phoneHref} onClick={() => track("call_tap", { where: "form" })}><Phone size={16} aria-hidden="true" /> Call {business.phoneDisplay}</a> or <a href={smsWithBody(`Hi ${business.shortName}, I'd like to book a detail.`)} onClick={() => track("text_tap", { where: "form" })}><MessageCircle size={16} aria-hidden="true" /> text</a>.
        </p>
      ) : null}
    </div>
  );
}

function compileMessage(form: FormState, packageName: string, estimateLabel?: string) {
  const addOns = business.addOns.filter((a) => form.addOns.includes(a.id)).map((a) => a.name);
  return [
    `Booking request from ${form.name}.`,
    `Vehicle: ${form.vehicle}.`,
    `Package: ${packageName}${addOns.length ? ` + ${addOns.join(", ")}` : ""}.`,
    estimateLabel ? `Estimate: ${estimateLabel}.` : "",
    form.date ? `Preferred date: ${form.date}.` : "",
    form.location ? `Location: ${form.location}.` : "",
    form.notes ? `Notes: ${form.notes}` : ""
  ].filter(Boolean).join(" ");
}
