import { Phone, Calendar, Wind } from "lucide-react";

export default function HeroBillboard() {
  return (
    <div className="relative -mt-[60vh] pointer-events-none">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="pointer-events-auto inline-flex items-center gap-2 rounded-full border border-sky-200 bg-white/80 backdrop-blur px-3 py-1 text-xs font-medium text-sky-700 shadow-sm">
          <Wind className="w-4 h-4" /> Same-day in Charleston
        </div>

        <h1 className="mt-4 text-5xl sm:text-6xl font-black tracking-tight text-slate-900">
          Feel the Fix.
          <span className="block text-sky-600">Not the Fuss.</span>
        </h1>

        <p className="mt-3 max-w-xl text-slate-600">
          Upfront pricing. Clean work. AC and heat that just works.
        </p>

        <div className="mt-6 flex flex-wrap gap-3">
          <a
            href="tel:+18435551234"
            className="px-4 py-2 rounded-xl bg-white border border-sky-200 hover:bg-sky-50 font-medium inline-flex items-center gap-2 shadow-sm"
          >
            <Phone className="w-4 h-4" /> Call now
          </a>
          <a
            href="#/schedule"
            className="px-4 py-2 rounded-xl bg-sky-600 hover:bg-sky-700 text-white font-semibold inline-flex items-center gap-2 shadow"
          >
            <Calendar className="w-4 h-4" /> Schedule a visit
          </a>
        </div>
      </div>
    </div>
  );
}