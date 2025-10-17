import Container from "../common/Container";
import { ArrowRight } from "lucide-react";

export default function PlanCTA({
  title = "Ready to breathe easy all year?",
  text = "Join the EZ-Breezy plan in minutes. You can change tiers anytime.",
  href = "#/membership",
  button = "Join the plan",
}) {
  return (
    <section className="py-14">
      <Container>
        <div className="rounded-3xl border border-sky-100 bg-gradient-to-br from-white/80 to-sky-50/60 backdrop-blur p-8 shadow-sm">
          <div className="grid md:grid-cols-3 gap-6 items-center">
            <div className="md:col-span-2">
              <h3 className="text-2xl font-bold text-slate-900">{title}</h3>
              <p className="mt-2 text-slate-600">{text}</p>
            </div>
            <div className="flex md:justify-end">
              <a
                href={href}
                className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-sky-600 hover:bg-sky-700 text-white font-semibold shadow"
              >
                {button} <ArrowRight className="h-4 w-4" />
              </a>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}