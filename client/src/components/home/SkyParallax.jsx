import { motion, useScroll, useTransform } from "framer-motion";

export default function SkyParallax() {
  const { scrollY } = useScroll();
  const yBack = useTransform(scrollY, [0, 600], [0, 60]);
  const yMid = useTransform(scrollY, [0, 600], [0, 120]);
  const yFront = useTransform(scrollY, [0, 600], [0, 180]);

  const Gust = ({ className }) => (
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

  return (
    <section className="relative overflow-hidden h-[70vh] min-h-[520px] bg-gradient-to-b from-sky-100 via-white to-transparent">
      <motion.div style={{ y: yBack }} className="absolute inset-0 pointer-events-none">
        <div className="absolute inset-0 bg-gradient-to-b from-sky-100/70 via-white to-transparent" />
      </motion.div>

      <motion.div style={{ y: yMid }} className="absolute left-6 top-10 text-sky-300/70">
        <Gust className="w-[520px]" />
      </motion.div>
      <motion.div style={{ y: yFront }} className="absolute left-24 top-24 text-sky-500/70">
        <Gust className="w-[700px]" />
      </motion.div>

      {/* Slot for foreground content */}
      <div className="relative z-10 h-full flex items-center">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          {/* Children go in HeroBillboard */}
        </div>
      </div>
    </section>
  );
}