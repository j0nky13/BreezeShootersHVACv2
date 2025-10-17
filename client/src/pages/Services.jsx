import ServicesGrid from "../components/ServicesGrid";
import Section from "../components/common/Section";
import Container from "../components/common/Container";

export default function Services(){
  return (
    <>
      <Section className="bg-[#f7fbff]">
        <Container>
          <h1 className="text-3xl font-black">Our Services</h1>
          <p className="mt-2 max-w-prose text-zinc-700">
            We install, repair, and maintain all major HVAC brands. Honest diagnostics and quality work.
          </p>
        </Container>
      </Section>
      <ServicesGrid />
      <Section>
        <Container>
          <h2 className="text-2xl font-black">Emergency Service</h2>
          <p className="mt-2 text-zinc-700">Call us for same-day help during peak heat or cold.</p>
        </Container>
      </Section>
    </>
  );
}