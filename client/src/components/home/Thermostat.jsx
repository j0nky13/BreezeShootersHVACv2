import { useEffect, useMemo, useState } from "react";

/**
 * Thermostat.jsx
 * A playful, dependency‑free thermostat/breeze widget.
 * - Shows a big temperature readout
 * - Animated "breeze" lines in the background
 * - Heat↔Cool gradient slider (60–80°F by default)
 * - Comfort indicator + optional callback when value changes
 */
export default function Thermostat({
  initialTemp = 72,
  min = 60,
  max = 95,
  onChange, // (temp:number) => void
  className = "",
  compact = false,
}) {
  const clamp = (v) => Math.min(max, Math.max(min, v));
  const [temp, setTemp] = useState(() => clamp(initialTemp));

  useEffect(() => {
    if (typeof onChange === "function") onChange(temp);
  }, [temp, onChange]);

  const mode = useMemo(() => {
    if (temp >= 90) return "hot";      // 90+ → hot
    if (temp >= 80) return "warm";     // 80–89 → warm
    if (temp <= 67) return "cool";     // ≤67 → cool
    return "comfy";                     // 68–79 → comfy
  }, [temp]);

  const percent = ((temp - min) / (max - min)) * 100; // slider fill

  // Card background color is always white
  const cardBg = "#FFFFFF";
  // Section background color based on mode (tint changes with temp)
  const sectionBg =
    mode === "cool"
      ? "#E7F6FF"  // cool: light blue
      : mode === "warm"
      ? "#FFE7CC"  // warm: light orange
      : mode === "hot"
      ? "#FFB3B3"  // hot: vivid red tint
      : "#FFFFFF"; // comfy: white

  // Interpolate breeze color to match slider gradient (blue → orange)
  const lerp = (a, b, t) => a + (b - a) * t;
  const hexToRgb = (hex) => {
    const m = hex.replace('#','');
    const bigint = parseInt(m.length === 3 ? m.split('').map(c=>c+c).join('') : m, 16);
    return { r: (bigint >> 16) & 255, g: (bigint >> 8) & 255, b: bigint & 255 };
  };
  const rgbToHex = ({r,g,b}) => `#${[r,g,b].map(v=>v.toString(16).padStart(2,'0')).join('')}`;
  const BLUE = hexToRgb('#08AFFF');
  const ORANGE = hexToRgb('#FF7A00');
  const t = Math.min(1, Math.max(0, percent/100));
  const breezeColor = rgbToHex({
    r: Math.round(lerp(BLUE.r, ORANGE.r, t)),
    g: Math.round(lerp(BLUE.g, ORANGE.g, t)),
    b: Math.round(lerp(BLUE.b, ORANGE.b, t)),
  });

  // Mid-band color: blue → orange → red based on temp
  const RED = hexToRgb('#FF0000');
  let midColorRgb;
  if (t < 0.7) {
    // 0–70% of slider (roughly up to ~78°F): blend BLUE → ORANGE
    const t1 = t / 0.7;
    midColorRgb = {
      r: Math.round(lerp(BLUE.r, ORANGE.r, t1)),
      g: Math.round(lerp(BLUE.g, ORANGE.g, t1)),
      b: Math.round(lerp(BLUE.b, ORANGE.b, t1)),
    };
  } else {
    // 70–100% (warmer): blend ORANGE → RED
    const t2 = (t - 0.7) / 0.3;
    midColorRgb = {
      r: Math.round(lerp(ORANGE.r, RED.r, t2)),
      g: Math.round(lerp(ORANGE.g, RED.g, t2)),
      b: Math.round(lerp(ORANGE.b, RED.b, t2)),
    };
  }
  const midColor = rgbToHex(midColorRgb);

  if (compact) {
    // Compact card-only thermostat (no section tint/gradients)
    return (
      <div className={`relative ${className}`}>
        <div className="relative mx-auto w-full max-w-xs sm:max-w-sm overflow-hidden rounded-2xl border border-zinc-100 p-5 sm:p-6 shadow-lg" style={{ backgroundColor: cardBg }}>
          <BreezePattern color={breezeColor} />

          {/* Header */}
          <div className="relative z-10 flex items-end justify-between gap-3">
            <div>
              <h3 className="text-base sm:text-lg font-black text-[#072A40]">EZ‑Breezy Meter</h3>
              <p className="text-xs text-zinc-600">Set your comfort — see your breeze score.</p>
            </div>
            <ModePill mode={mode} />
          </div>

          {/* Temperature readout */}
          <div className="relative z-10 mt-3 flex items-baseline gap-2">
            <span className="text-3xl sm:text-4xl font-black tracking-tight text-[#072A40]">{temp}</span>
            <span className="text-base sm:text-lg font-bold text-[#072A40]/70">°F</span>
            <ComfortDots mode={mode} temp={temp} />
          </div>

          {/* Slider */}
          <div className="relative z-10 mt-4 h-6 sm:h-7">
            <label htmlFor="thermostat" className="sr-only">Temperature</label>
            <input
              id="thermostat"
              type="range"
              min={min}
              max={max}
              step={1}
              value={temp}
              onChange={(e) => setTemp(clamp(parseInt(e.target.value, 10)))}
              className="absolute inset-0 z-20 w-full cursor-ew-resize appearance-none opacity-0"
            />
            <div className="absolute left-0 right-0 top-1/2 z-0 h-2 -translate-y-1/2 rounded-full bg-gradient-to-r from-[#08AFFF] via-[#a5e1ff] to-[#FF7A00]/80" />
            <div className="absolute left-0 top-1/2 z-10 h-2 -translate-y-1/2 rounded-full bg-white/70 shadow-inner" style={{ width: `${percent}%` }} />
            <div className="absolute top-1/2 z-10 h-4 w-4 -translate-y-1/2 -translate-x-1/2 rounded-full border border-[#00324A]/20 bg-white shadow" style={{ left: `calc(${percent}%)` }} aria-hidden />
          </div>

          {/* Footer actions */}
          <div className="relative z-10 mt-5 flex flex-wrap items-center gap-3">
            <span className="text-xs text-zinc-600">Breeze score:</span>
            <div className="w-28 sm:w-32">
              <ScoreBar percent={scoreFromTemp(temp, min, max)} />
            </div>
          </div>
        </div>
      </div>
    );
  }

  // Default: plain container (no tint/gradients)
  return (
    <div id="thermostat" className={`relative mx-auto w-full overflow-visible scroll-mt-28 pt-10 pb-10 ${className}`}>
      <div className="relative z-10 mx-auto w-full max-w-lg sm:max-w-xl overflow-hidden rounded-2xl border border-zinc-100 p-6 sm:p-8 shadow-lg" style={{ backgroundColor: cardBg }}>
        <BreezePattern color={breezeColor} />

        {/* Header */}
        <div className="relative z-10 flex items-end justify-between gap-3">
          <div>
            <h3 className="text-lg sm:text-xl font-black text-[#072A40]">EZ‑Breezy Meter</h3>
            <p className="text-sm text-zinc-600">Set your comfort — see your breeze score.</p>
          </div>
          <ModePill mode={mode} />
        </div>

        {/* Temperature readout */}
        <div className="relative z-10 mt-4 flex items-baseline gap-2">
          <span className="text-4xl sm:text-5xl font-black tracking-tight text-[#072A40]">{temp}</span>
          <span className="text-lg sm:text-xl font-bold text-[#072A40]/70">°F</span>
          <ComfortDots mode={mode} temp={temp} />
        </div>

        {/* Slider */}
        <div className="relative z-10 mt-5 h-7 sm:h-8">
          <label htmlFor="thermostat" className="sr-only">Temperature</label>
          <input
            id="thermostat"
            type="range"
            min={min}
            max={max}
            step={1}
            value={temp}
            onChange={(e) => setTemp(clamp(parseInt(e.target.value, 10)))}
            className="absolute inset-0 z-20 w-full cursor-ew-resize appearance-none opacity-0"
          />
          <div className="absolute left-0 right-0 top-1/2 z-0 h-2 sm:h-3 -translate-y-1/2 rounded-full bg-gradient-to-r from-[#08AFFF] via-[#a5e1ff] to-[#FF7A00]/80" />
          <div className="absolute left-0 top-1/2 z-10 h-2 sm:h-3 -translate-y-1/2 rounded-full bg-white/70 shadow-inner" style={{ width: `${percent}%` }} />
          <div className="absolute top-1/2 z-10 h-5 w-5 sm:h-6 sm:w-6 -translate-y-1/2 -translate-x-1/2 rounded-full border border-[#00324A]/20 bg-white shadow" style={{ left: `calc(${percent}%)` }} aria-hidden />
        </div>

        <div className="relative z-10 mt-6 flex flex-wrap items-center gap-3">
          <span className="text-sm text-zinc-600">Breeze score:</span>
          <div className="w-32 sm:w-40">
            <ScoreBar percent={scoreFromTemp(temp, min, max)} />
          </div>
          <a href="/plan" className="ml-auto inline-flex items-center gap-2 rounded-full bg-[#08AFFF] px-4 py-2 text-sm font-semibold text-[#00324A] shadow-sm hover:brightness-95">
            Make it EZ‑Breezy <span aria-hidden>→</span>
          </a>
        </div>

        <style jsx global>{`
          input[type=range] { height: 24px; }
          input[type=range]::-webkit-slider-thumb { -webkit-appearance: none; appearance: none; width: 0; height: 0; }
          input[type=range]::-moz-range-thumb { width: 0; height: 0; border: none; }
          input[type=range]:focus-visible { outline: none; }
        `}</style>
      </div>
    </div>
  );
}

function ModePill({ mode }) {
  const map = {
    cool:  { label: "Cool",  bg: "bg-[#08AFFF]",      text: "text-[#00324A]" },
    comfy: { label: "Comfy", bg: "bg-emerald-100",    text: "text-emerald-800" },
    warm:  { label: "Warm",  bg: "bg-[#FF7A00]/20",  text: "text-[#7A3A00]" },
    hot:   { label: "Hot",   bg: "bg-red-100",       text: "text-red-800" },
  };
  const s = map[mode] || map.comfy;
  return (
    <span className={`inline-flex items-center rounded-full px-3 py-1 text-xs font-bold ${s.bg} ${s.text}`}>
      {s.label}
    </span>
  );
}

function ComfortDots({ mode, temp }) {
  let active = 2;
  if (mode === "cool") {
    active = 1; // cool stays 1
  } else if (temp >= 85) {
    active = 1; // 85+ → 1 dot
  } else if (temp >= 80) {
    active = 2; // 80–84 → 2 dots
  } else if (mode === "comfy") {
    active = 3; // 68–79 comfy → 3 dots
  }
  return (
    <span className="ml-2 inline-flex items-center gap-1">
      {[0,1,2].map((i) => (
        <span key={i} className={`h-2.5 w-2.5 rounded-full ${i < active ? "bg-[#08AFFF]" : "bg-zinc-300"}`} />
      ))}
    </span>
  );
}

function ScoreBar({ percent }) {
  return (
    <div className="relative h-2 w-full overflow-hidden rounded-full bg-zinc-200">
      <div className="h-full bg-[#08AFFF]" style={{ width: `${percent}%` }} />
    </div>
  );
}

function scoreFromTemp(temp, min, max){
  // Score peaks around 71–73°F (comfy zone)
  const mid = 72;
  const span = Math.max(1, (max - min) / 2);
  const delta = Math.abs(temp - mid);
  const score = Math.max(0, 100 - (delta / span) * 100);
  return Math.round(score);
}

function BreezePattern({ color = '#08AFFF' }){
  return (
    <div className="pointer-events-none absolute inset-0 z-0">
      {/* top right breeze 1 */}
      <svg className="absolute right-3 top-2 h-20 w-40 animate-[drift_10s_linear_infinite]" viewBox="0 0 120 40" xmlns="http://www.w3.org/2000/svg" aria-hidden>
        <path d="M5 15c20 0 20-10 40-10s 20 10 40 10 20-10 30-10" fill="none" stroke={color} strokeWidth="2.5" strokeLinecap="round" />
      </svg>
      {/* top right breeze 2 (slightly lower) */}
      <svg className="absolute right-6 top-9 h-20 w-40 animate-[drift_12s_linear_infinite_reverse]" viewBox="0 0 120 40" xmlns="http://www.w3.org/2000/svg" aria-hidden>
        <path d="M15 28c15 0 15-8 30-8s15 8 30 8 15-8 25-8" fill="none" stroke={color} strokeWidth="2.5" strokeLinecap="round" />
      </svg>
      <style jsx global>{`
        @keyframes drift { 0% { transform: translateX(0) } 50% { transform: translateX(8px) } 100% { transform: translateX(0) } }
      `}</style>
    </div>
  );
}