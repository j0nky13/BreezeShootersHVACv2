import { Wrench, ThermometerSun, Leaf, Droplets } from "lucide-react";
import { motion, useReducedMotion } from "framer-motion";

const services = [
  {
    icon: <Wrench className="w-6 h-6 text-sky-700" />,
    title: "Repairs Done Right",
    desc: "Fast, honest HVAC fixes that get you back to comfy—same-day service, transparent pricing, and expert technicians you can trust."
  },
  {
    icon: <ThermometerSun className="w-6 h-6 text-amber-600" />,
    title: "Energy-Smart Installs",
    desc: "Right-sized systems designed for efficiency, better airflow, and long-term comfort—installed with precision and care."
  },
  {
    icon: <Leaf className="w-6 h-6 text-emerald-600" />,
    title: "Comfort Plans",
    desc: "Seasonal tune-ups, priority booking, extended warranties, and savings that keep your system running strong year after year."
  },
  {
    icon: <Droplets className="w-6 h-6 text-blue-600" />,
    title: "Air Quality",
    desc: "Whole-home filtration and humidity control solutions to help your family breathe cleaner, healthier air indoors."
  }
];

export default function ServicesGrid() {
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
        delay: reduced ? 0 : i * 0.06
      }
    })
  };

  return (
    <section className="py-20 bg-gradient-to-b from-white via-sky-50/60 to-white">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-center text-4xl font-black text-slate-900 mb-12">
          Our Services
        </h2>
        <p className="text-center max-w-2xl mx-auto text-slate-600 mb-14">
          From fast repairs to efficient installations, BreezeShooters keeps your home comfortable year-round. Explore our core services below.
        </p>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((s, i) => (
            <motion.article
              key={s.title}
              className="group rounded-3xl bg-white border border-sky-100 shadow-lg p-6 will-change-transform"
              initial="hidden"
              whileInView="show"
              viewport={{ amount: 0.35, once: false }}
              custom={i}
              variants={variants}
              whileHover={{
                y: -6,
                boxShadow: "0 20px 40px rgba(2,132,199,0.12)",
                transition: { type: "spring", stiffness: 140, damping: 12 }
              }}
            >
              <div className="flex items-center gap-3 mb-3">
                {s.icon}
                <h3 className="text-lg font-semibold text-slate-900">{s.title}</h3>
              </div>
              <p className="text-slate-600 leading-relaxed text-sm">{s.desc}</p>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}