import { motion, useScroll, useTransform, useSpring, useReducedMotion } from "framer-motion";
import { useMemo } from "react";

export default function ServicesHero() {
  const prefersReduced = useReducedMotion();
  const { scrollY } = useScroll();
  const yCloudFarRaw = useTransform(scrollY, [0, 600], [0, 120]);
  const yCloudNearRaw = useTransform(scrollY, [0, 600], [0, 220]);
  const springCfg = useMemo(() => ({ stiffness: 70, damping: 18, mass: 0.6 }), []);
  const yCloudFar = useSpring(prefersReduced ? 0 : yCloudFarRaw, springCfg);
  const yCloudNear = useSpring(prefersReduced ? 0 : yCloudNearRaw, springCfg);

  return (
    <section className="relative h-[70vh] min-h-[480px] overflow-hidden bg-gradient-to-b from-sky-100 to-white flex items-center justify-center text-center px-4">
      {/* Cloud layers */}
      <motion.div aria-hidden style={{ y: yCloudFar }} className="pointer-events-none absolute inset-0 bg-[url('/clouds.svg')] bg-repeat-x bg-top opacity-60" />
      <motion.div aria-hidden style={{ y: yCloudNear, backgroundSize: 'auto 110%' }} className="pointer-events-none absolute inset-0 bg-[url('/clouds.svg')] bg-repeat-x bg-[length:auto_100%] bg-[position:0_30%] opacity-90" />
      <div className="relative z-10 bg-white/80 backdrop-blur-xl border border-sky-100 shadow-2xl rounded-3xl p-8 sm:p-12 max-w-3xl mx-auto">
        <h1 className="text-5xl sm:text-6xl font-black text-[#1E88E5] leading-tight">Reliable HVAC Services</h1>
        <p className="mt-4 text-lg text-slate-600">
          From maintenance to crawlspace encapsulation, we keep your comfort flowing year-round.
        </p>
      </div>
    </section>
  );
}