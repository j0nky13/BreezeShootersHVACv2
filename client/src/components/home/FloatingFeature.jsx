import { motion } from "framer-motion";

export default function FloatingFeature({ icon: Icon, title, text, delay = 0 }) {
  return (
    <motion.div
      initial={{ y: 16, opacity: 0 }}
      whileInView={{ y: 0, opacity: 1 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.6, delay }}
      className="relative rounded-2xl p-5 bg-white border border-sky-100 shadow-sm hover:shadow-md transition"
    >
      <motion.div
        aria-hidden
        initial={{ y: 0 }}
        animate={{ y: [0, -6, 0] }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
        className="absolute -top-4 -right-4 h-10 w-10 rounded-full bg-sky-50 border border-sky-100"
      />
      <div className="flex items-start gap-3">
        {Icon && <Icon className="w-6 h-6 text-sky-500 mt-0.5" />}
        <div>
          <h3 className="text-base font-semibold text-slate-800">{title}</h3>
          <p className="text-sm text-slate-600 mt-1">{text}</p>
        </div>
      </div>
    </motion.div>
  );
}