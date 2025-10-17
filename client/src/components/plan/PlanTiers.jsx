import Container from "../common/Container";
import { ArrowRight, Sparkles, Zap, Star } from "lucide-react";

const DEFAULT_TIERS = [
  {
    name: "Breezy",
    badge: Sparkles,
    blurb: "Solid preventive care for a typical single-stage system.",
    points: [
      "2 seasonal tune-ups",
      "Priority scheduling",
      "10% off parts & labor",
      "System health report",
    ],
    cta: { href: "#/membership?tier=breezy", label: "Join Breezy" },
  },
  {
    name: "Super Breezy",
    badge: Zap,
    featured: true,
    blurb: "Added perks for homes with higher usage or multiple systems.",
    points: [
      "Everything in Breezy",
      "15% off parts & labor",
      "No after-hours fee",
      "Filter program guidance",
    ],
    cta: { href: "#/membership?tier=super", label: "Join Super Breezy" },
  },
  {
    name: "Ultimate",
    badge: Star,
    blurb: "Top-tier coverage, best for variable-speed/ductless setups.",
    points: [
      "Everything in Super Breezy",
      "20% off parts & labor",
      "Annual IAQ check",
      "Ductless add-on friendly",
    ],
    cta: { href: "#/membership?tier=ultimate", label: "Join Ultimate" },
  },
];

export default function PlanTiers({ tiers = DEFAULT_TIERS }) {
  return (
    <section className="py-12 sm:py-16">
      <Container>
        <h2 className="text-2xl sm:text-3xl font-black text-slate-900">Pick your breeze</h2>
        <p className="mt-2 text-slate-600 max-w-prose">
          Choose the coverage level that fits your home. You can switch tiers anytime.
        </p>

        <div className="mt-8 grid md:grid-cols-3 gap-6">
          {tiers.map((tier) => (
            <div
              key={tier.name}
              className={[
                "rounded-3xl border p-6 shadow-sm backdrop-blur",
                tier.featured
                  ? "border-sky-200 bg-white/80 shadow-sky-100"
                  : "border-sky-100 bg-white/70",
              ].join(" ")}
            >
              <div className="flex items-center gap-2">
                {tier.badge && <tier.badge className="h-5 w-5 text-sky-700" />}
                <h3 className="text-xl font-bold text-slate-900">{tier.name}</h3>
              </div>
              <p className="mt-2 text-sm text-slate-600">{tier.blurb}</p>

              <ul className="mt-4 space-y-2 text-sm text-slate-700">
                {tier.points.map((p) => (
                  <li key={p} className="flex items-start gap-2">
                    <span className="mt-1 inline-block h-1.5 w-1.5 rounded-full bg-sky-500" />
                    <span>{p}</span>
                  </li>
                ))}
              </ul>

              <a
                href={tier.cta.href}
                className="mt-6 inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-sky-600 hover:bg-sky-700 text-white font-semibold shadow"
              >
                {tier.cta.label} <ArrowRight className="h-4 w-4" />
              </a>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}