import Thermostat from "./Thermostat"; // if you have one; otherwise replace with your visual

export default function GlassThermostat() {
  return (
    <section className="py-14">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="rounded-3xl border border-sky-100 bg-white/70 backdrop-blur p-6 sm:p-10 shadow-sm">
          <Thermostat />
        </div>
      </div>
    </section>
  );
}