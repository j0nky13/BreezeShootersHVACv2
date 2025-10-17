import Container from "../common/Container";
import { ChevronDown } from "lucide-react";
import { motion } from "framer-motion";

const QA = [
  { q: "How often are visits?", a: "Two per year: AC in spring, heat in fall." },
  { q: "Do members get priority?", a: "Yes — jump-the-line scheduling during peak weather." },
  { q: "What about parts?", a: "Members receive discounted parts & labor depending on tier." },
  { q: "Which brands do you service?", a: "All major makes, including heat pumps and ductless." },
  { q: "Newberry only?", a: "We cover Newberry and nearby communities." },
];

export default function PlanFAQ({ qa = QA }) {
  return (
    <section className="py-16 sm:py-20 bg-gradient-to-b from-white via-sky-50/40 to-white">
      <Container>
        <div className="text-center">
          <h2 className="text-3xl sm:text-4xl font-black text-[#1E88E5] tracking-tight">FAQ</h2>
          <p className="mt-2 text-slate-600 max-w-2xl mx-auto">Quick answers to the most common questions about the EZ‑Breezy plan.</p>
        </div>

        <div className="mt-10 grid lg:grid-cols-2 gap-4 sm:gap-5">
          {qa.map(({ q, a }, i) => (
            <motion.details
              key={q}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.4, delay: i * 0.03 }}
              className="group rounded-2xl border border-sky-100 bg-white/70 backdrop-blur shadow-sm open:shadow-md open:border-sky-200"
            >
              <summary className="list-none cursor-pointer select-none px-5 py-4 sm:px-6 sm:py-5 flex items-start gap-3">
                <div className="flex-1">
                  <h3 className="text-base sm:text-lg font-semibold text-slate-900">{q}</h3>
                </div>
                <ChevronDown className="mt-1 h-5 w-5 text-slate-500 transition-transform group-open:rotate-180" />
              </summary>

              <div className="px-5 pb-5 sm:px-6 sm:pb-6 -mt-2">
                <p className="text-slate-700 text-sm sm:text-base leading-relaxed">
                  {a}
                </p>
              </div>
            </motion.details>
          ))}
        </div>
      </Container>
    </section>
  );
}