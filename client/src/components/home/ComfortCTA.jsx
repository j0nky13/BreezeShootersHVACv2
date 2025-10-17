import { useState } from "react";
import { Link } from "react-router-dom";

// Inline helper component (compact thermostat only)
function Thermostat({ compact, initialTemp = 70, min = 50, max = 90, className }) {
  const clamp = (value) => Math.min(Math.max(value, min), max);
  const [temp, setTemp] = useState(clamp(initialTemp));
  const cardBg = "#FFFFFF";

  // Mode label based on temperature (fixed thresholds)
  const mode = temp >= 88 ? 'hot' : temp >= 78 ? 'warm' : temp <= 66 ? 'cool' : 'comfy';

  // Breeze score: 100% at 72°F, 0% at min or max.
  // We use the **nearest bound** so both ends hit 0 exactly, even if 72 isn’t centered.
  const scoreFromTemp = (t) => {
    const mid = 72;
    const leftSpan = Math.max(1, mid - min);
    const rightSpan = Math.max(1, max - mid);
    const span = Math.min(leftSpan, rightSpan); // nearest edge to 72
    const delta = Math.abs(t - mid);
    const raw = 100 - (delta / span) * 100;
    return Math.round(Math.max(0, Math.min(100, raw)));
  };
  const breezeScore = scoreFromTemp(temp);

  const ModePill = ({ mode }) => {
    const s = mode === 'hot'  ? 'bg-red-100 text-red-800' :
              mode === 'warm' ? 'bg-amber-100 text-amber-800' :
              mode === 'cool'  ? 'bg-sky-100 text-sky-800' :
                                 'bg-emerald-100 text-emerald-800';
    const label = mode === 'hot' ? 'Hot' : mode === 'warm' ? 'Warm' : mode === 'cool' ? 'Cool' : 'Comfy';
    return (
      <span className={`inline-flex items-center rounded-full px-3 py-1 text-xs font-bold ${s}`}>{label}</span>
    );
  };

  if (compact) {
    return (
      <div
        className={`relative mx-auto shrink-0 flex-none w-[440px] min-w-[440px] max-w-[440px] overflow-hidden rounded-2xl p-6 shadow-xl ring-1 ring-black/5 box-border ${className || ''}`}
        style={{ backgroundColor: cardBg }}
      >
        {/* Header */}
        <div className="relative z-10 flex items-end justify-between gap-3 min-h-[44px]">
          <div>
            <h3 className="text-2xl font-black text-[#072A40]">EZ‑Breezy Meter</h3>
            <p className="text-sm text-zinc-600">Set your comfort — see your breeze score.</p>
          </div>
          <div className="w-[140px] h-9 flex items-end justify-end">
            <ModePill mode={mode} />
          </div>
        </div>

        {/* Temp */}
        <div className="relative z-10 mt-4 flex items-center gap-3 min-h-[64px]">
          <div className="rounded-md border border-zinc-300 bg-white px-3 py-2 tabular-nums font-extrabold tracking-tight text-[#072A40] text-5xl w-[160px] text-center flex items-center justify-center gap-1">
            <span className="inline-block w-[2ch] text-right">{temp}</span>
            <span className="text-3xl">°F</span>
          </div>
        </div>

        {/* Slider */}
        <div className="relative z-10 mt-5 h-10">
          <input
            type="range"
            min={min}
            max={max}
            step={1}
            value={temp}
            onChange={(e) => setTemp(clamp(parseInt(e.target.value, 10)))}
            onInput={(e) => setTemp(clamp(parseInt(e.target.value, 10)))}
            className="absolute inset-0 z-20 w-full appearance-none bg-transparent cursor-grab active:cursor-grabbing touch-none"
          />
          <div className="absolute left-0 right-0 top-1/2 z-0 h-3 -translate-y-1/2 rounded-full bg-zinc-200" />
          <div
            className="absolute left-0 top-1/2 z-0 h-3 -translate-y-1/2 rounded-full bg-gradient-to-r from-[#08AFFF] via-[#4FC3F7] to-[#FF3B30]"
            style={{ width: `${((temp - min) / (max - min)) * 100}%` }}
          />
          <div
            className="pointer-events-none absolute top-1/2 z-10 h-6 w-6 -translate-y-1/2 -translate-x-1/2 rounded-full bg-white shadow-md ring-1 ring-black/10"
            style={{ left: `calc(${((temp - min) / (max - min)) * 100}%)` }}
            aria-hidden
          />
        </div>

        {/* Breeze Score */}
        <div className="mt-6">
          <div className="mb-1 flex items-center justify-between text-xs text-zinc-600">
            <span>Breeze score</span>
            <span>{breezeScore}%</span>
          </div>
          <div className="relative h-2 w-full overflow-hidden rounded-full bg-zinc-200">
            <div
              className="h-full bg-gradient-to-r from-emerald-400 via-sky-500 to-amber-400"
              style={{ width: `${breezeScore}%` }}
            />
          </div>
        </div>
      </div>
    );
  }

  // Fallback if compact not passed
  return (
    <div className={`relative mx-auto w-[440px] min-w-[440px] max-w-[440px] overflow-hidden rounded-2xl p-6 shadow-lg box-border ${className || ''}`} style={{ backgroundColor: cardBg }}>
      <div className="text-sm text-zinc-600">Thermostat</div>
    </div>
  );
}

export default function ComfortCTA() {
  return (
    <section className="relative mx-auto max-w-6xl px-4 py-14 md:py-20">
      <div className="grid gap-10 md:grid-cols-2 items-center">
        {/* Thermostat (compact) */}
        <div className="flex items-center justify-center">
          <Thermostat compact initialTemp={72} min={55} max={95} className="mx-auto" />
        </div>

        {/* Copy + CTA */}
        <div>
          <h2 className="text-3xl md:text-4xl font-semibold tracking-tight">Your Comfort, Your Control</h2>
          <p className="mt-3 text-slate-600">
            Keep temps steady, bills lower, and equipment happy. Our {" "}
            <span className="font-semibold text-sky-700">EZ-Breezy Maintenance Plan</span> keeps your system tuned up and your home feeling just right—year round.
          </p>

          <ul className="mt-6 grid gap-3 text-slate-700">
            <li className="flex items-center gap-2 leading-tight"><span className="inline-block h-1.5 w-1.5 rounded-full bg-slate-400 flex-none translate-y-[1px]" />Seasonal tune-ups & priority scheduling</li>
            <li className="flex items-center gap-2 leading-tight"><span className="inline-block h-1.5 w-1.5 rounded-full bg-slate-400 flex-none translate-y-[1px]" />Discounts on repairs & parts</li>
            <li className="flex items-center gap-2 leading-tight"><span className="inline-block h-1.5 w-1.5 rounded-full bg-slate-400 flex-none translate-y-[1px]" />Same-day service window options</li>
          </ul>

          <div className="mt-8 flex flex-wrap gap-3">
            <Link to="/plans/ez-breezy" className="rounded-xl bg-[#08AFFF] px-6 py-3 font-medium text-white shadow-sm transition hover:brightness-90">View EZ-Breezy Plan</Link>
            <Link to="/services" className="rounded-xl border border-slate-300 px-6 py-3 font-medium text-slate-700 hover:bg-slate-50">Explore Services</Link>
          </div>
        </div>
      </div>
    </section>
  );
}