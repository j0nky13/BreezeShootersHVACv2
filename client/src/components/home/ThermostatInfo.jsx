import Thermostat from "./Thermostat";
import { motion } from "framer-motion";
import { CheckCircle2, ShieldCheck, CalendarDays, Timer, Phone, ArrowRight } from "lucide-react";

/**
 * ThermostatInfo (Sticky)
 * - Thermostat column stays in view (CSS sticky) while this section is on screen.
 * - Subtle idle float on the thermostat for a breezy feel.
 * - Tightened spacing to reduce whitespace.
 */
export default function ThermostatInfo() {
  return (
    <section className="py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 lg:gap-12 gap-8 items-start">
          {/* Left: Content Card */}
          <div className="rounded-3xl border border-sky-100 bg-white/70 backdrop-blur shadow-lg p-6 sm:p-8">
            <div className="flex items-center gap-2">
              <img src="/logo.svg" alt="BreezeShooters" className="h-8 w-auto" />
              <span className="text-xs font-semibold uppercase tracking-wide text-sky-700">EZ‑Breezy</span>
            </div>

            <h2 className="mt-3 text-2xl sm:text-3xl font-black text-slate-900">EZ‑Breezy Maintenance Plan</h2>
            <p className="mt-2 text-slate-600">
              Priority service, seasonal tune‑ups, and honest care that keeps your system humming.
            </p>

            <ul className="mt-6 space-y-2 text-slate-700">
              {[
                "2 tune‑ups per year (spring & fall)",
                "Priority scheduling when weather swings",
                "Member discounts on repairs & parts",
                "System health report after each visit",
                "All major brands supported",
                "Newberry + nearby coverage",
              ].map((item) => (
                <li key={item} className="flex items-start gap-2">
                  <CheckCircle2 className="mt-0.5 h-4 w-4 text-emerald-600" />
                  <span className="text-sm">{item}</span>
                </li>
              ))}
            </ul>

            <div className="mt-6">
              <a
                href="/plan"
                className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-[#2196F3] hover:bg-[#1C7ED6] text-white font-semibold shadow"
              >
                Join the plan <ArrowRight className="h-4 w-4" />
              </a>
            </div>
          </div>

          {/* Right: Sticky Thermostat (floats while section is in view) */}
          <div className="sticky top-24 self-start">
            <motion.div
              initial={{ y: 0 }}
              animate={{ y: [0, -6, 0] }}
              transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
              className="w-full max-w-[520px] mx-auto"
            >
              <Thermostat />
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Feature({ icon: Icon, title, text }) {
  return (
    <div className="rounded-2xl border border-sky-100 bg-white/70 p-4">
      <div className="flex items-center gap-2">
        <Icon className="h-5 w-5 text-sky-600" />
        <div className="font-semibold text-slate-900 text-sm">{title}</div>
      </div>
      <p className="mt-1 text-sm text-slate-600">{text}</p>
    </div>
  );
}

function Quick({ label, value }) {
  return (
    <div className="rounded-xl border border-sky-100 bg-white/60 p-3 text-center">
      <div className="text-xs uppercase tracking-wide text-slate-500">{label}</div>
      <div className="font-semibold text-slate-900">{value}</div>
    </div>
  );
}