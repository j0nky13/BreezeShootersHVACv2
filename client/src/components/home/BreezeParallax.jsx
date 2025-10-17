import { motion, useScroll, useTransform } from "framer-motion";

function Gust({ className }) {
  return (
    <svg viewBox="0 0 600 100" className={className} aria-hidden>
      <path
        d="M0 70 Q150 40 300 70 T600 70"
        fill="none"
        stroke="currentColor"
        strokeWidth="3"
        strokeLinecap="round"
      />
    </svg>
  );
}

export default function BreezeParallax() {
  const { scrollY } = useScroll();
  const y1 = useTransform(scrollY, [0, 400], [0, 40]);
  const y2 = useTransform(scrollY, [0, 400], [0, 80]);
  const y3 = useTransform(scrollY, [0, 400], [0, 120]);
  const op = useTransform(scrollY, [0, 400], [1, 0.85]);

  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-sky-900 via-sky-700 via-80% to-sky-300">
      {/* Cloud layers */}
      <motion.div
        style={{ y: y1, opacity: op }}
        className="pointer-events-none absolute inset-0 bg-[url('/clouds.svg')] bg-repeat-x bg-[length:auto_120%] bg-[position:0_10%] opacity-95 mix-blend-lighten"
      />
      <motion.div
        style={{ y: y2, opacity: op }}
        className="pointer-events-none absolute inset-0 bg-[url('/clouds.svg')] bg-repeat-x bg-[length:auto_140%] bg-[position:0_35%] opacity-90 mix-blend-lighten"
      />

      <div className="h-24" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative rounded-3xl p-8 sm:p-12 bg-white/85 backdrop-blur border border-sky-100 shadow-2xl">
          <motion.div
            style={{ y: y1 }}
            className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-slate-900"
          >
            Feel the Fix. <span className="text-sky-600">Not the Fuss.</span>
          </motion.div>

          <motion.p
            style={{ y: y2 }}
            className="mt-3 max-w-2xl text-slate-700"
          >
            Comfort so effortless it feels like the air itself is helping.
          </motion.p>

          <div className="mt-6 flex flex-wrap gap-3">
            <a
              href="tel:+18435551234"
              className="px-4 py-2 rounded-xl bg-white border border-sky-200 shadow-sm hover:bg-sky-50 font-medium"
            >
              Call now
            </a>
            <a
              href="#/schedule"
              className="px-4 py-2 rounded-xl bg-sky-600 hover:bg-sky-700 text-white shadow font-semibold"
            >
              Schedule a visit
            </a>
          </div>

          {/* Gust lines */}
          <motion.div style={{ y: y1 }} className="absolute -top-4 -left-6 text-sky-300/90">
            <Gust className="w-[420px]" />
          </motion.div>
          <motion.div style={{ y: y2 }} className="absolute top-6 left-10 text-sky-400/90">
            <Gust className="w-[520px]" />
          </motion.div>
          <motion.div style={{ y: y3 }} className="absolute top-14 left-28 text-sky-500/90">
            <Gust className="w-[620px]" />
          </motion.div>
        </div>
      </div>
      <div className="h-10" />
    </section>
  );
}