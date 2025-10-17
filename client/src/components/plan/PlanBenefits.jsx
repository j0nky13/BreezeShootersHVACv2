import Container from "../common/Container";
import {
  CheckCircle2,
  CalendarDays,
  Timer,
  ShieldCheck,
  ThermometerSun,
  Leaf,
  Wrench,
  Droplets,
  Gauge,
  Wind,
  Tag,
} from "lucide-react";
import { motion, useReducedMotion } from "framer-motion";

const HIGHLIGHTS = [
  { icon: CalendarDays, title: "2 tune-ups / year", text: "Spring AC & Fall heat checks to keep performance dialed-in." },
  { icon: Timer, title: "Priority service", text: "Jump the line when Newberry heats up or cools down." },
  { icon: Tag, title: "Discounted parts", text: "Member-only savings on parts and repairs when needed." },
];

const EXTRAS = [
  { icon: CheckCircle2, title: "System health report", text: "Photos & recommendations after every visit." },
  { icon: ThermometerSun, title: "Thermostat calibration", text: "We dial controls so comfort feels effortless." },
  { icon: Leaf, title: "Cleaner air options", text: "Add-ons for filtration, UV, and humidity control." },
  { icon: Wrench, title: "Repairs done right", text: "Certified techs for all major brands — no upsell games." },
  { icon: Droplets, title: "Humidity control", text: "Whole‑home solutions to keep sticky air in check." },
  { icon: Gauge, title: "Efficiency checks", text: "Airflow, refrigerant, and electrical tuned for lower bills." },
  { icon: Wind, title: "Ductless & heat pumps", text: "Mini‑split expertise, variable‑speed systems, sized right." },
  { icon: ShieldCheck, title: "Warranty‑friendly", text: "Maintenance docs that keep warranties in good standing." },
  { icon: Timer, title: "After‑hours priority", text: "Members get first slots when weather swings after 5pm." },
];

export default function PlanBenefits() {
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
        delay: reduced ? 0 : i * 0.06,
      },
    }),
  };

  return (
    <section className="relative py-28 sm:py-36 bg-gradient-to-b from-white via-sky-50/40 to-white overflow-hidden">
      <Container>
        <h2 className="text-center text-3xl sm:text-4xl font-black text-[#1E88E5] tracking-tight">What You Get</h2>
        <p className="mt-5 text-center text-slate-600 max-w-3xl mx-auto text-lg leading-relaxed">
          The EZ‑Breezy plan keeps your system efficient and reliable, with friendly techs who treat your home like their own.
        </p>

        {/* Standout benefits */}
        <div className="mt-12 grid md:grid-cols-3 gap-6">
          {HIGHLIGHTS.map(({ icon: Icon, title, text }, i) => (
            <motion.article
              key={title}
              className="group rounded-3xl bg-white border border-sky-100 shadow-lg p-8 will-change-transform"
              initial="hidden"
              whileInView="show"
              viewport={{ amount: 0.35, once: false }}
              custom={i}
              variants={variants}
              whileHover={{
                y: -6,
                boxShadow: "0 20px 40px rgba(2,132,199,0.12)",
                transition: { type: "spring", stiffness: 140, damping: 12 },
              }}
            >
              <div className="flex items-center gap-3 mb-2">
                <Icon className="h-6 w-6 text-[#1E88E5]" />
                <h3 className="text-lg font-semibold text-slate-900">{title}</h3>
              </div>
              <p className="text-slate-600 leading-relaxed text-sm">{text}</p>
            </motion.article>
          ))}
        </div>

        {/* You also get */}
        <h3 className="mt-14 text-center text-sm font-semibold tracking-wide text-slate-500 uppercase">You also get</h3>
        <ul className="mt-10 max-w-4xl mx-auto space-y-6 text-slate-700 text-base">
          {EXTRAS.map(({ icon: Icon, title, text }, i) => (
            <motion.li
              key={title}
              className="flex items-start gap-4 bg-white/70 rounded-xl border border-sky-100 shadow-sm p-4 hover:shadow-md transition-shadow duration-200"
              initial="hidden"
              whileInView="show"
              viewport={{ amount: 0.35, once: false }}
              custom={i}
              variants={variants}
            >
              <CheckCircle2 className="h-6 w-6 text-green-600 mt-1 flex-shrink-0" />
              <p className="leading-relaxed text-base sm:text-lg">
                <span className="font-semibold text-slate-900">{title}:</span> {text}
              </p>
            </motion.li>
          ))}
        </ul>
      </Container>

      <div className="absolute inset-0 -z-10 opacity-60 bg-[radial-gradient(circle_at_center,_rgba(56,189,248,0.25),_transparent_70%)]" />
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[80%] h-[50%] bg-sky-100/30 blur-3xl rounded-full -z-20" />
    </section>
  );
}