import Container from "../common/Container";
import CTAButton from "../common/CTAButton";
import TrustBadges from "../TrustBadges";

export default function Hero(){
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-[#f7fbff] to-white">
      <Container className="grid items-center gap-8 py-16 md:grid-cols-2">
        <div>
          <p className="mb-2 font-extrabold tracking-wide text-[#0a6ea1]">Licensed &amp; Insured • BBB# 115393</p>
          <h1 className="text-4xl/tight font-black text-[#072a40] sm:text-5xl">Service made <em className="not-italic italic font-extrabold">EZ-Breezy</em>.</h1>
          <p className="mt-3 max-w-prose text-zinc-700">
            Reliable installs, fast repairs, and year-round comfort for your home or business.
            Join our EZ-Breezy Maintenance Plan to prevent breakdowns and save on energy.
          </p>
          <div className="mt-5 flex flex-wrap gap-3">
            <CTAButton href="/plan">Explore EZ-Breezy Plan</CTAButton>
            <CTAButton href="/contact" variant="secondary">Request a Quote</CTAButton>
          </div>
          <div className="mt-5"><TrustBadges /></div>
        </div>

        <div className="rounded-2xl border border-zinc-100 bg-white p-6 shadow-md">
          <h3 className="text-lg font-bold">What’s included?</h3>
          <ul className="mt-2 list-disc pl-5 text-zinc-700">
            <li>Spring &amp; Fall tune-ups</li>
            <li>Priority scheduling</li>
            <li>Discounts on parts &amp; repairs</li>
            <li>Full system health report</li>
          </ul>
          {/* <p className="mt-3 text-sm text-zinc-500">* finalize exact benefits/pricing tomorrow</p> */}
        </div>
      </Container>
    </section>
  );
}