import { useState } from "react";
import { motion } from "framer-motion";

export default function ContactForm() {
  const [submitting, setSubmitting] = useState(false);
  const [sent, setSent] = useState(false);

  async function onSubmit(e) {
    e.preventDefault();
    if (submitting) return;
    setSubmitting(true);

    // Collect form data
    const form = new FormData(e.currentTarget);
    const payload = Object.fromEntries(form.entries());

    try {
      // TODO: wire to your backend/email service
      // await fetch("/api/contact", { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify(payload) });
      await new Promise((r) => setTimeout(r, 700));
      setSent(true);
      e.currentTarget.reset();
    } catch (err) {
      console.error("Contact form error", err);
      alert("Something went wrong. Please try again or call us.");
    } finally {
      setSubmitting(false);
    }
  }

  return (
    <motion.form
      onSubmit={onSubmit}
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.35 }}
      className="grid grid-cols-1 sm:grid-cols-2 gap-5"
    >
      {/* Honeypot */}
      <input type="text" name="company" className="hidden" tabIndex={-1} autoComplete="off" />

      <Field label="Full name" name="name" autoComplete="name" required />
      <Field label="Email" name="email" type="email" autoComplete="email" required />
      <Field label="Phone (optional)" name="phone" type="tel" autoComplete="tel" />
      <Field label="Service (optional)" name="service" as="select">
        <option value=""></option>
        <option>Cooling</option>
        <option>Heating</option>
        <option>Maintenance</option>
        <option>Air Quality</option>
        <option>Crawlspace</option>
        <option>Replacement</option>
      </Field>

      <Field label="Subject" name="subject" className="sm:col-span-2" required />
      <Field label="Message" name="message" as="textarea" rows={5} className="sm:col-span-2" required />

      <div className="sm:col-span-2 flex items-center justify-between gap-3 pt-2">
        <p className="text-sm text-slate-500">
          Prefer to talk? Call us at <a className="font-medium text-[#2196F3] hover:underline" href="tel:18435551234">(843) 555‑1234</a>
        </p>
        <button
          type="submit"
          disabled={submitting}
          className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-[#2196F3] hover:bg-[#1C7ED6] disabled:opacity-60 disabled:cursor-not-allowed text-white font-semibold shadow transition-colors"
        >
          {submitting ? "Sending…" : sent ? "Sent ✓" : "Send message"}
        </button>
      </div>
    </motion.form>
  );
}

function Field({ label, name, type = "text", as, className = "", children, rows = 4, autoComplete, required }) {
  const id = `cf-${name}`;
  const [focused, setFocused] = useState(false);
  const [value, setValue] = useState("");

  const floating = focused || (value ?? "").toString().trim().length > 0;

  const baseWrap = `relative ${className}`;
  const controlBase =
    "w-full rounded-xl border border-sky-200 bg-white/70 backdrop-blur px-4 py-3 text-sm text-slate-900 shadow-sm outline-none transition focus:border-[#2196F3] focus:ring-2 focus:ring-[#2196F3]/20";

  const labelBase =
    "pointer-events-none absolute left-3 px-1 rounded transition-all duration-200";

  const labelPos =
    name === "message"
      ? (value && value.trim().length > 0
          ? `top-0 -translate-y-1/2 ${focused ? "text-[#2196F3]" : "text-slate-500"} bg-white`
          : "top-2 left-3 text-slate-500 bg-white")
      : floating
      ? `top-0 -translate-y-1/2 ${focused ? "text-[#2196F3]" : "text-slate-500"} bg-white`
      : "top-1/2 -translate-y-1/2 text-slate-500 bg-transparent";

  let control = null;

  if (as === "textarea") {
    control = (
      <textarea
        id={id}
        name={name}
        rows={rows}
        required={required}
        autoComplete={autoComplete}
        value={value}
        onChange={(e) => setValue(e.target.value)}
        onFocus={() => setFocused(true)}
        onBlur={() => setFocused(false)}
        className={`${controlBase} resize-none`}
      />
    );
  } else if (as === "select") {
    control = (
      <select
        id={id}
        name={name}
        required={required}
        autoComplete={autoComplete}
        value={value}
        onChange={(e) => setValue(e.target.value)}
        onFocus={() => setFocused(true)}
        onBlur={() => setFocused(false)}
        className={controlBase}
      >
        {children}
      </select>
    );
  } else {
    control = (
      <input
        id={id}
        name={name}
        type={type}
        required={required}
        autoComplete={autoComplete}
        value={value}
        onChange={(e) => setValue(e.target.value)}
        onFocus={() => setFocused(true)}
        onBlur={() => setFocused(false)}
        className={controlBase}
      />
    );
  }

  return (
    <div className={baseWrap}>
      {control}
      <label htmlFor={id} className={`${labelBase} ${labelPos}`}>
        {label}
      </label>
      <div className="pointer-events-none absolute inset-0 rounded-xl ring-0 transition-shadow" />
    </div>
  );
}