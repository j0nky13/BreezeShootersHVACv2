import { Link } from "react-router-dom";

const SERVICES = [
  {
    title: "Cooling Systems",
    desc: "AC installs, repair & tune-ups.",
    hue: "from-sky-500 to-blue-600",
    link: "/services/cooling",
  },
  {
    title: "Heating Systems",
    desc: "Furnace & heat pump expertise.",
    hue: "from-amber-500 to-orange-600",
    link: "/services/heating",
  },
  {
    title: "Smart Thermostats",
    desc: "Comfort meets automation.",
    hue: "from-emerald-500 to-teal-600",
    link: "/services/thermostats",
  },
  {
    title: "Air Duct Cleaning",
    desc: "Breathe easier at home.",
    hue: "from-slate-500 to-gray-700",
    link: "/services/duct-cleaning",
  },
  {
    title: "Emergency Repairs",
    desc: "When it quits, we don’t.",
    hue: "from-rose-500 to-red-600",
    link: "/services/emergency",
  },
];

export default function ServicesShowcase() {
  return (
    <section className="mx-auto max-w-6xl px-4 py-16 md:py-20">
      <header className="mb-8">
        <h2 className="text-3xl md:text-4xl font-semibold tracking-tight">Services that actually blow you away</h2>
        <p className="mt-2 text-slate-600">Less sterile. More style. Same reliable expertise.</p>
      </header>

      <div className="rounded-2xl overflow-hidden">
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-0">
          {SERVICES.slice(0, 4).map((s, i) => (
            <Link
              key={s.title}
              to={s.link}
              className="group relative block h-56 sm:h-64 md:h-[22rem] bg-white transition will-change-transform"
              style={{ transitionTimingFunction: 'cubic-bezier(.2,.8,.2,1)' }}
            >
              {/* lift effect on hover (desktop only) */}
              <div className="absolute inset-0 transition-transform duration-300 md:group-hover:-translate-y-1 md:group-hover:scale-[1.01]"></div>

              {/* 3D flip container (desktop flip, mobile stays front) */}
              <div className="relative h-full w-full [transform-style:preserve-3d] transition-transform duration-500 md:group-hover:[transform:rotateY(180deg)]">
                {/* FRONT */}
                <div className="absolute inset-0 backface-hidden p-6">
                  {/* gradient wash for identity on hover */}
                  <div className={`pointer-events-none absolute inset-0 -z-10 opacity-0 transition-opacity duration-300 md:group-hover:opacity-30 bg-gradient-to-br ${s.hue}`} />
                  <h3 className="text-xl font-semibold tracking-tight">{s.title}</h3>
                  <p className="mt-1 text-slate-600">{s.desc}</p>
                  <div className="mt-6 inline-flex items-center gap-2 text-sky-700">
                    Explore
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" className="stroke-current">
                      <path d="M5 12h14M13 5l7 7-7 7" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </div>
                </div>

                {/* BACK (revealed on desktop hover) */}
                <div className="absolute inset-0 rotate-y-180 backface-hidden p-6">
                  <div className={`absolute inset-0 -z-10 bg-gradient-to-br ${s.hue} opacity-90`} />
                  <h3 className="text-xl font-semibold tracking-tight text-white">{s.title}</h3>
                  <p className="mt-3 text-white/90">
                    We handle installs, diagnostics, and preventative care with fast scheduling and clear pricing.
                  </p>
                  <div className="mt-6 inline-flex items-center gap-2 text-white/90">
                    Learn more
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" className="stroke-current">
                      <path d="M5 12h14M13 5l7 7-7 7" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
      <style>{`
  .backface-hidden { backface-visibility: hidden; }
  .rotate-y-180 { transform: rotateY(180deg); }
`}</style>
    </section>
  );
}