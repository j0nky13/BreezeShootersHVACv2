import { Phone, ArrowRight } from "lucide-react";

export default function BreezyCTA() {
  return (
    <section className="py-14">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="rounded-3xl border border-sky-100 p-8 sm:p-12 bg-gradient-to-br from-white to-sky-50">
          <div className="grid md:grid-cols-3 gap-6 items-center">
            <div className="md:col-span-2">
              <h2 className="text-2xl sm:text-3xl font-bold text-slate-900">
                Breathe easy. We’ll be there today.
              </h2>
              <p className="mt-2 text-slate-600">
                Same-day service, tidy work, honest pricing.
              </p>
            </div>
            <div className="flex md:justify-end gap-3">
              <a
                href="tel:+18435551234"
                className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-white border border-sky-200 hover:bg-sky-50 font-medium"
              >
                <Phone className="w-4 h-4" /> Call
              </a>
              <a
                href="#/schedule"
                className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-sky-600 hover:bg-sky-700 text-white font-semibold"
              >
                Book now <ArrowRight className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}