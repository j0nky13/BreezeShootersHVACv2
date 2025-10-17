import { motion, useScroll, useTransform, useSpring, useReducedMotion } from "framer-motion";
import { Phone, Calendar } from "lucide-react";
import { useMemo } from "react";

/**
 * Smooth parallax hero: cloud layers move at different speeds using a SPRINGed y-value.
 * Floating card uses a lighter, opposing motion for depth. No hero image inside the card.
 */
export default function HeroSection() {
  const prefersReduced = useReducedMotion();
  const { scrollY } = useScroll();

  // Raw transforms
  const yCloudFarRaw = useTransform(scrollY, [0, 600], [0, 120]);   // slowest
  const yCloudNearRaw = useTransform(scrollY, [0, 600], [0, 220]);  // faster
  const yCardRaw = useTransform(scrollY, [0, 600], [0, -90]);       // subtle opposite motion

  // SPRING to remove jerkiness (critical for smoothness)
  const springCfg = useMemo(() => ({ stiffness: 70, damping: 18, mass: 0.6 }), []);
  const yCloudFar = useSpring(prefersReduced ? 0 : yCloudFarRaw, springCfg);
  const yCloudNear = useSpring(prefersReduced ? 0 : yCloudNearRaw, springCfg);
  const yCard = useSpring(prefersReduced ? 0 : yCardRaw, springCfg);

  return (
    <section className="relative h-[92vh] min-h-[560px] overflow-hidden bg-gradient-to-b from-sky-50 to-white">
      {/* Far clouds */}
      <motion.div
        aria-hidden
        style={{ y: yCloudFar, willChange: "transform" }}
        className="pointer-events-none absolute inset-0 bg-[url('/clouds.svg')] bg-repeat-x bg-top opacity-70"
      />
      {/* Near clouds (slightly bigger, more opaque) */}
      <motion.div
        aria-hidden
        style={{ y: yCloudNear, willChange: "transform", backgroundSize: "auto 110%" }}
        className="pointer-events-none absolute inset-0 bg-[url('/clouds.svg')] bg-repeat-x bg-[length:auto_100%] bg-[position:0_30%] opacity-90 mix-blend-normal"
      />

      {/* Floating intro card */}
      <div className="relative z-10 h-full flex items-center justify-center px-4">
        <motion.div
          style={{ y: yCard, willChange: "transform" }}
          className="max-w-3xl w-full text-center bg-white/85 backdrop-blur-xl border border-sky-100 shadow-2xl rounded-3xl px-8 py-10"
        >
          <h1 className="text-5xl sm:text-6xl font-black text-slate-900 leading-tight">
            Feel the Fix.
            <span className="block text-sky-700">Not the Fuss.</span>
          </h1>
          <p className="mt-4 text-lg text-slate-600">
            Comfort so effortless it feels like the air itself is helping.
          </p>

          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <a
              href="tel:+18435551234"
              className="inline-flex items-center gap-2 px-5 py-3 rounded-xl border border-sky-200 bg-white hover:bg-sky-50 shadow-sm"
            >
              <Phone className="w-5 h-5 text-sky-600" />
              <span className="font-medium">Call Us</span>
            </a>
            <a
              href="#/schedule"
              className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-sky-600 hover:bg-sky-700 text-white font-semibold shadow-md"
            >
              <Calendar className="w-5 h-5" />
              <span>Schedule Visit</span>
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}