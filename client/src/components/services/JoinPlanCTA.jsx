import { ArrowRight, Phone } from "lucide-react";

export default function JoinPlanCTA() {
  return (
    <section className="relative overflow-hidden py-20 bg-gradient-to-br from-white to-sky-50">
      <div className="max-w-6xl mx-auto px-6">
        <div className="rounded-3xl border border-sky-100 p-10 sm:p-16 bg-white/80 backdrop-blur-xl shadow-xl text-center">
          <h2 className="text-3xl sm:text-4xl font-black text-[#1E88E5] mb-4">Join the EZ-Breezy Plan</h2>
          <p className="text-slate-600 max-w-2xl mx-auto mb-8">
            Priority service, two tune-ups a year, and discounted parts — enjoy year-round comfort the easy way.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a href="tel:+18435551234" className="inline-flex items-center gap-2 px-5 py-3 rounded-xl border border-sky-200 bg-white hover:bg-sky-50 shadow-sm font-medium">
              <Phone className="w-5 h-5 text-sky-600" /> Call Now
            </a>
            <a href="#/plan" className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-sky-600 hover:bg-sky-700 text-white font-semibold shadow-md">
              Join the Plan <ArrowRight className="w-5 h-5" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}