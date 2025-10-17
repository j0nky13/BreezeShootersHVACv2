// src/components/landing/ReviewsCarousel.jsx
const REVIEWS = [
  { name: "Jenna L.", stars: 5, text: "Fast, friendly, and fixed our AC in one visit. A+!" },
  { name: "Marcus P.", stars: 5, text: "Techs were on time and super respectful. Highly recommend." },
  { name: "Allison R.", stars: 5, text: "Signed up for EZ-Breezy—money well spent. House feels great." },
  { name: "Devon C.", stars: 4, text: "Clear pricing and they explained everything. Solid work!" },
  { name: "Priya S.", stars: 5, text: "Scheduling was easy and they actually showed up early!" },
];

export default function ReviewsCarousel() {
  return (
    <section className="mx-auto max-w-6xl px-4 py-16 md:py-20">
      <header className="mb-8">
        <h2 className="text-3xl md:text-4xl font-semibold tracking-tight">What neighbors are saying</h2>
        <p className="mt-2 text-slate-600">Real reviews from real people. Coming soon: live Google & Facebook import.</p>
      </header>

      <div className="relative overflow-hidden rounded-2xl bg-gradient-to-r from-sky-50 to-indigo-50 p-4">
        <div className="flex animate-[marquee_28s_linear_infinite] gap-4 hover:[animation-play-state:paused]">
          {[...REVIEWS, ...REVIEWS].map((r, i) => (
            <article
              key={i}
              className="min-w-[280px] max-w-sm rounded-xl border border-slate-200 bg-white/80 p-4 shadow-sm backdrop-blur"
            >
              <div className="flex items-center gap-2 text-amber-500">
                {"★".repeat(r.stars)}
                <span className="text-slate-500 text-sm">({r.stars}.0)</span>
              </div>
              <p className="mt-2 text-slate-700">{r.text}</p>
              <div className="mt-3 text-sm text-slate-500">— {r.name}</div>
            </article>
          ))}
        </div>
      </div>

      {/* marquee keyframes */}
      <style>{`
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
      `}</style>
    </section>
  );
}