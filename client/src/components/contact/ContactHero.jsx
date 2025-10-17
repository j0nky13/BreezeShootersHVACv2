export default function ContactHero({
  title = "Get in touch.",
  subtitle = "Fast, friendly, and local — we’ll get you on the schedule and keep it EZ‑Breezy.",
}) {
  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-white to-sky-50" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 sm:py-28 text-center">
        <div className="relative rounded-3xl border border-sky-100 bg-white/80 backdrop-blur p-10 sm:p-16 shadow mx-auto max-w-3xl">
          <h1 className="text-4xl sm:text-5xl font-black text-slate-900 leading-tight">
            {title}
            <span className="block text-[#2196F3]">We’re here to help today.</span>
          </h1>
          <p className="mt-4 text-slate-600 max-w-xl mx-auto">{subtitle}</p>

          <div className="mt-8 flex justify-center">
            <a
              href="tel:18435551234"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-[#2196F3] hover:bg-[#1C7ED6] text-white font-semibold shadow transition-all duration-300 hover:shadow-lg"
            >
              <svg aria-hidden viewBox="0 0 24 24" className="w-5 h-5 fill-current"><path d="M6.62 10.79a15.05 15.05 0 006.59 6.59l2.2-2.2a1 1 0 011.01-.24c1.12.37 2.33.57 3.58.57a1 1 0 011 1V21a1 1 0 01-1 1C10.4 22 2 13.6 2 3a1 1 0 011-1h3.5a1 1 0 011 1c0 1.25.2 2.46.57 3.58a1 1 0 01-.24 1.01l-2.2 2.2z"/></svg>
              Call (843) 555‑1234
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}