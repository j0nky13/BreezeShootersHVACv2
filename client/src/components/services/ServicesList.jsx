import { motion, useReducedMotion } from "framer-motion";
import {
  Wrench,
  Thermometer,
  Wind,
  Droplets,
  Leaf,
  Layers,
  Fan,
  Gauge,
} from "lucide-react";

const SERVICES = [
  {
    icon: Thermometer,
    title: "Heating",
    intro:
      "Repairs, tune-ups, and replacements for furnaces and heat pumps — sized right for comfort and lower bills.",
    bullets: [
      "Heat pump & furnace repair",
      "High‑efficiency replacements",
      "Safety & performance checks",
    ],
    badge: "Winter Ready",
  },
  {
    icon: Wind,
    title: "Cooling",
    intro:
      "Fast AC service and installs that tame Carolina summers — with airflow and efficiency dialed in.",
    bullets: [
      "Same‑day AC repair",
      "SEER2‑rated systems",
      "Airflow & refrigerant tuning",
    ],
    badge: "Beat the Heat",
  },
  {
    icon: Wrench,
    title: "Maintenance",
    intro:
      "Prevent surprise breakdowns with seasonal tune‑ups that extend lifespan and keep comfort steady.",
    bullets: [
      "Spring & fall tune‑ups",
      "Coils, airflow, electrical",
      "Photo health report",
    ],
    badge: "EZ‑Breezy Plan",
  },
  {
    icon: Layers,
    title: "Crawlspace Encapsulation",
    intro:
      "Seal moisture at the source. A dry crawlspace improves air quality, protects structure, and boosts efficiency.",
    bullets: [
      "Vapor barrier + sealing",
      "Insulation & dehumidifiers",
      "Mold & odor reduction",
    ],
    badge: "Dry & Healthy",
  },
  {
    icon: Droplets,
    title: "Air Quality",
    intro:
      "Whole‑home filtration and humidity control to reduce allergens and keep your family breathing easy.",
    bullets: [
      "Media & HEPA filtration",
      "UV & IAQ upgrades",
      "Humidity balancing",
    ],
    badge: "Breathe Better",
  },
  {
    icon: Gauge,
    title: "System Replacements",
    intro:
      "When it’s time to upgrade, we spec a right‑sized system for comfort, quiet operation, and savings.",
    bullets: [
      "Load‑based sizing",
      "Quiet, efficient options",
      "Transparent estimates",
    ],
    badge: "Right‑Sized",
  },
  {
    icon: Fan,
    title: "Dehumidifiers & Ventilation",
    intro:
      "Balance moisture and bring in fresh air where it matters most — crawlspaces, basements, and stuffy rooms.",
    bullets: [
      "Whole‑home dehumidifiers",
      "Fresh‑air exchangers",
      "Targeted room solutions",
    ],
    badge: "Balanced Air",
  },
  {
    icon: Leaf,
    title: "Smart Thermostats",
    intro:
      "Wi‑Fi thermostats installed and calibrated so comfort feels automatic and energy stays in check.",
    bullets: [
      "Pro install & setup",
      "App control anywhere",
      "Energy reports",
    ],
    badge: "Smarter Control",
  },
];

export default function ServicesList() {
  const reduced = useReducedMotion();
  const variants = {
    hidden: { y: 28, opacity: 0 },
    show: (i) => ({
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 90,
        damping: 16,
        delay: reduced ? 0 : (i % 2) * 0.06, // slight stagger per row
      },
    }),
  };

  return (
    <section className="py-20 bg-gradient-to-b from-white via-sky-50/60 to-white">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-center text-4xl font-black text-[#1E88E5] mb-12">Our Services</h2>

        <div className="space-y-12">
          {SERVICES.map(({ icon: Icon, title, intro, bullets, badge }, i) => {
            const flip = i % 2 === 1; // alternate sides
            return (
              <motion.section
                key={title}
                initial="hidden"
                whileInView="show"
                viewport={{ once: false, amount: 0.3 }}
                custom={i}
                variants={variants}
                className="grid items-center md:grid-cols-2 gap-8 md:gap-12"
              >
                {/* Text column */}
                <div className={flip ? "md:order-2" : ""}>
                  <div className="inline-flex items-center gap-3 mb-3">
                    <span className="inline-flex p-3 rounded-full bg-sky-50 border border-sky-100">
                      <Icon className="w-6 h-6 text-sky-700" />
                    </span>
                    <h3 className="text-2xl font-bold text-slate-900">{title}</h3>
                  </div>
                  <p className="text-slate-600 leading-relaxed">{intro}</p>
                  <ul className="mt-4 grid sm:grid-cols-2 gap-2 text-slate-700 text-sm">
                    {bullets.map((b) => (
                      <li key={b} className="flex items-start gap-2">
                        <span className="mt-1 h-2.5 w-2.5 rounded-full bg-[#1E88E5] opacity-70" />
                        <span>{b}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Spec / visual panel */}
                <div className={!flip ? "md:order-2" : ""}>
                  <div className="relative rounded-3xl border border-sky-100 bg-white/70 backdrop-blur p-6 sm:p-8 shadow-lg overflow-hidden">
                    {/* glow */}
                    <div className="absolute -top-16 -right-16 w-64 h-64 rounded-full bg-[#1E88E5]/10 blur-2xl" />
                    <div className="absolute -bottom-20 -left-16 w-72 h-72 rounded-full bg-sky-300/10 blur-3xl" />

                    <div className="flex items-center justify-between">
                      <span className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wide text-[#1E88E5] bg-[#1E88E5]/10 px-3 py-1 rounded-full border border-[#1E88E5]/20">
                        {badge}
                      </span>
                      <Icon className="w-6 h-6 text-sky-700 opacity-70" />
                    </div>

                    <div className="mt-4 grid sm:grid-cols-2 gap-3 text-sm">
                      <div className="rounded-xl border border-sky-100 bg-white/80 p-3 shadow-sm">
                        <div className="text-slate-500">What we check</div>
                        <div className="mt-1 font-medium text-slate-900">Airflow • Electrical • Controls</div>
                      </div>
                      <div className="rounded-xl border border-sky-100 bg-white/80 p-3 shadow-sm">
                        <div className="text-slate-500">Benefits</div>
                        <div className="mt-1 font-medium text-slate-900">Comfort • Efficiency • Reliability</div>
                      </div>
                    </div>

                    <div className="mt-4 rounded-xl border border-sky-100 bg-gradient-to-br from-white to-sky-50 p-4 text-slate-700 text-sm">
                      Need ongoing care? <a href="/plan" className="font-semibold text-[#1E88E5] hover:underline">Join the EZ‑Breezy Plan</a> for priority service & seasonal tune‑ups.
                    </div>
                  </div>
                </div>
              </motion.section>
            );
          })}
        </div>
      </div>
    </section>
  );
}