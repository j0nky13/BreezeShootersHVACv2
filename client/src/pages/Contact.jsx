import QuoteForm from "../components/QuoteForm";
import Section from "../components/common/Section";
import Container from "../components/common/Container";

export default function Contact(){
  return (
    <>
      <Section className="bg-[#f7fbff]">
        <Container>
          <h1 className="text-3xl font-black">Request a Quote</h1>
          <p className="mt-2 max-w-prose text-zinc-700">
            Prefer to call? <a className="font-bold text-[#0a6ea1]" href="tel:18431321234">(843) 132-1234</a>
          </p>
        </Container>
      </Section>
      <QuoteForm />
      <Section>
        <Container>
          <h2 className="text-2xl font-black">Find Us</h2>
          <p className="mt-2 text-zinc-700">blackberry lane, pomaria, sc 12345</p>
          {/* drop a map embed later */}
        </Container>
      </Section>
    </>
  );
}