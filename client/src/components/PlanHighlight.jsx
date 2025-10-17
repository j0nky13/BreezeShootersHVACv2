import Container from "./common/Container";
import Section from "./common/Section";
import CTAButton from "./common/CTAButton";

export default function PlanHighlight(){
  return (
    <Section id="plan" className="bg-white">
      <Container>
        <div className="rounded-2xl border border-zinc-100 bg-white p-6 shadow">
          <span className="inline-block rounded-full border border-[#08AFFF]/40 bg-[#08AFFF]/10 px-3 py-1 text-sm font-bold text-[#075b87]">Featured</span>
          <h2 className="mt-2 text-2xl font-black">EZ-Breezy Maintenance Plan</h2>
          <p className="mt-1 max-w-prose text-zinc-700">
            A simple, affordable plan that keeps your system efficient and your home comfortable.
          </p>

          <div className="mt-5 grid gap-4 sm:grid-cols-3">
            {[
              ["Twice-Yearly Tune-Ups", "Spring & Fall visits to clean, test, and optimize your system."],
              ["Priority Service", "Jump the line on the hottest and coldest days."],
              ["Member Savings", "Exclusive discounts on parts and labor when you need repairs."]
            ].map(([t,d])=>(
              <div key={t} className="rounded-xl border border-zinc-100 bg-white p-4 shadow-sm">
                <h3 className="font-bold">{t}</h3>
                <p className="mt-1 text-zinc-700">{d}</p>
              </div>
            ))}
          </div>

          <div className="mt-5 flex flex-wrap gap-3">
            <CTAButton href="/contact">I’m Interested</CTAButton>
            <CTAButton href="/plan" variant="secondary">Get the Details</CTAButton>
          </div>
        </div>
      </Container>
    </Section>
  );
}