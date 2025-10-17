import { motion } from "framer-motion";
import Container from "../common/Container";

export default function PageHero({
  eyebrow = "Membership",
  title = "EZ‑Breezy Maintenance Plan",
  subtitle = "Priority service, seasonal tune‑ups, and honest care that keeps your system humming.",
  logo = "/logo.svg",
}) {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-sky-100/60 via-white to-white">
      <Container className="pt-20 pb-24 sm:pt-24 sm:pb-28 relative z-10">
        <div className="rounded-3xl border border-sky-100 bg-white/70 backdrop-blur shadow-lg p-14 sm:p-20 text-center max-w-4xl mx-auto mt-8">
          <motion.div
            className="flex items-center gap-3 justify-center mb-3"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            {logo && (
              <motion.img
                src={logo}
                alt="BreezeShooters"
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="h-10 w-auto drop-shadow-sm"
              />
            )}
            <motion.span
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-xs font-semibold uppercase tracking-wide text-sky-700"
            >
              {eyebrow}
            </motion.span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="text-4xl sm:text-5xl font-black leading-tight"
          >
            <span className="block text-sky-700">EZ‑Breezy</span>
            <span className="block text-sky-500">Maintenance Plan</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.3 }}
            className="mt-4 max-w-2xl mx-auto text-slate-600"
          >
            {subtitle}
          </motion.p>
        </div>
      </Container>

      <motion.div
        animate={{ y: [0, -8, 0] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        className="absolute right-1/4 top-12 h-24 w-24 bg-sky-200/40 rounded-full blur-2xl"
      />
      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
        className="absolute left-1/3 bottom-10 h-32 w-32 bg-sky-100/40 rounded-full blur-3xl"
      />
    </section>
  );
}