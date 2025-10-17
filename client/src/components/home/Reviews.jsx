import { useEffect, useMemo, useState } from "react";
import { Star } from "lucide-react";
import { motion } from "framer-motion";

const DEFAULT_GOOGLE_URL = "https://www.google.com/maps/search/?api=1&query=BreezeShooters%20HVAC%20Newberry%20SC";

// Six real quotes for fallback ticker
const TICKER_REVIEWS = [
  { author: "Nathan Ward", text: "Excellent and prompt service.", href: DEFAULT_GOOGLE_URL },
  { author: "Michael Dunphy", text: "Great service. Service person arrived on time and tested all of the equipment quickly and found the problem and then resolved it.", href: DEFAULT_GOOGLE_URL },
  { author: "Rachel Matuszak", text: "Thank you Breeze shooters for coming to see what was thankfully an easy fix (we hope) you guys are always good on timing when making appointments. I will not use anyone else!!", href: DEFAULT_GOOGLE_URL },
  { author: "Chris Miller", text: "They kept me informed of everything they did. And, they were careful to clean up when they were done. Everything was very professional. I would definitely recommend them.", href: DEFAULT_GOOGLE_URL },
  { author: "Adrienne S. (Yelp)", text: "I was looking for a local HVAC company close to me and I ran across Breeze Shooters Heating. I spoke with Brittany and explained what was going on.", href: "https://www.yelp.com/biz/breeze-shooters-heating-ac-and-commercial-refrigeration-pomaria" },
  { author: "Leila K.", text: "Friendly team and quick response.", href: DEFAULT_GOOGLE_URL },
];

function Stars({ count = 5, size = 16 }) {
  return (
    <div className="flex gap-1" aria-label={`${count} star rating`}>
      {Array.from({ length: 5 }).map((_, i) => (
        <Star key={i} style={{ width: size, height: size }} className={`${i < count ? "text-amber-500 fill-amber-500" : "text-slate-300"}`} />
      ))}
    </div>
  );
}

export default function Reviews() {
  const [data, setData] = useState(null);
  const [paused, setPaused] = useState(false);

  // Build request without env vars; allow overrides via URL params.
  const requestUrl = useMemo(() => {
    const params = new URLSearchParams(window.location.search);
    const pid = params.get("reviewsPlaceId");
    const q = params.get("reviewsQuery") || "BreezeShooters HVAC Newberry SC";
    return `/api/get-google-reviews?${pid ? `place_id=${encodeURIComponent(pid)}` : `query=${encodeURIComponent(q)}`}`;
  }, []);

  useEffect(() => {
    const controller = new AbortController();
    fetch(requestUrl, { signal: controller.signal })
      .then(async (r) => {
        const ct = r.headers.get("content-type") || "";
        if (!r.ok) throw new Error(`HTTP ${r.status}`);
        if (!ct.includes("application/json")) {
          await r.text();
          throw new Error("Non-JSON response");
        }
        return r.json();
      })
      .then((json) => setData(json))
      .catch(() => setData(null));
    return () => controller.abort();
  }, [requestUrl]);

  const avg = data?.rating ?? 5;
  const total = data?.userRatingCount ?? data?.total ?? 250;
  const mapsUrl = data?.googleMapsUri ?? data?.mapsUrl ?? DEFAULT_GOOGLE_URL;

  // Build scroller items: prefer live reviews if available; else fall back to our six quotes.
  const live = Array.isArray(data?.reviews) ? data.reviews.slice(0, 6) : [];
  const items = live.length
    ? live.map((r) => ({
        author: r.author || r.authorAttribution?.displayName || "Google user",
        text: r.text,
        href: r.profileUrl || mapsUrl,
        rating: r.rating || 5,
      }))
    : TICKER_REVIEWS.map((r) => ({ ...r, rating: 5 }));

  return (
    <section className="py-16 bg-gradient-to-b from-white via-sky-50/40 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-8 flex flex-col items-center text-center">
          <a
            href={mapsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-full border border-sky-200 bg-white px-3 py-1 text-xs font-semibold text-sky-700 shadow-sm hover:bg-sky-50 hover:-translate-y-[1px] transition"
          >
            <Stars count={Math.round(avg)} />
            <span className="ml-1">{avg.toFixed(1)} average • {total}+ reviews</span>
          </a>
          <h2 className="mt-4 text-4xl font-black text-slate-900">Neighbors who breathe easy</h2>
          <p className="mt-2 max-w-2xl text-slate-600"><strong>Real</strong> feedback from <strong>real</strong> homeowners.</p>
        </div>

        {/* Horizontal ticker of review CARDS (not an embed). Pauses on hover. */}
        <style>{`
          @keyframes reviewMarquee { from { transform: translateX(0); } to { transform: translateX(-50%); } }
        `}</style>
        <div
          className="relative overflow-hidden rounded-3xl border border-sky-100 bg-white/90 shadow-sm py-6 px-6 group"
          onMouseEnter={() => setPaused(true)}
          onMouseLeave={() => setPaused(false)}
        >
          <div className="pointer-events-none absolute inset-x-0 top-0 h-10 z-10 bg-gradient-to-b from-white via-white/80 to-transparent" />
          <div className="pointer-events-none absolute inset-x-0 bottom-0 h-10 z-10 bg-gradient-to-t from-white via-white/80 to-transparent" />
          <div
            className="flex gap-6 whitespace-nowrap"
            style={{ animation: `reviewMarquee 30s linear infinite`, animationPlayState: paused ? "paused" : "running", willChange: "transform" }}
          >
            {[...items, ...items].map((r, i) => (
              <article
                key={`${r.author}-${i}`}
                className="flex flex-col shrink-0 whitespace-normal w-[360px] h-[220px] items-start gap-3 rounded-2xl border border-sky-100 bg-white p-5 shadow-sm hover:shadow-lg hover:-translate-y-1 transition"
              >
                <div className="w-full flex justify-start">
                  <Stars count={r.rating ?? 5} />
                </div>
                <div className="text-left flex-1">
                  <p className="text-slate-700 leading-relaxed whitespace-normal break-words max-h-[96px] overflow-hidden">{r.text}</p>
                </div>
                <div className="w-full">
                  <div className="text-sm font-semibold text-slate-900">{r.author}</div>
                  <a
                    href={r.href || mapsUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-1 inline-block text-xs text-sky-600 hover:text-sky-700"
                  >
                    Read on Google
                  </a>
                </div>
              </article>
            ))}
          </div>
        </div>

        {/* Small footnote attribution for Google policy */}
        <div className="mt-4 text-center text-xs text-slate-500">
          Reviews powered by Google and public listings
        </div>
      </div>
    </section>
  );
}