export default function SplitShowcase() {
  return (
    <section className="py-14">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid lg:grid-cols-2 gap-6 items-stretch">
        <div className="rounded-3xl border border-sky-100 bg-gradient-to-br from-white to-sky-50 p-8">
          <h2 className="text-2xl sm:text-3xl font-bold text-slate-900">
            Installs that lower bills
          </h2>
          <p className="mt-2 text-slate-600">
            Right-sized systems, clean ductwork, smart thermostats.
          </p>
          <ul className="mt-4 list-disc list-inside text-slate-600 space-y-1">
            <li>High-SEER heat pumps</li>
            <li>Ductless mini-splits</li>
            <li>Smart controls</li>
          </ul>
          <a
            href="#/services"
            className="inline-block mt-5 px-4 py-2 rounded-xl bg-sky-600 hover:bg-sky-700 text-white font-semibold"
          >
            Explore services
          </a>
        </div>

        <div className="rounded-3xl border border-sky-100 bg-white p-4 shadow-sm">
          {/* Placeholder image block (swap later) */}
          <div className="aspect-video rounded-2xl bg-gradient-to-br from-sky-100 to-white border border-sky-100" />
        </div>
      </div>
    </section>
  );
}