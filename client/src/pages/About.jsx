import Section from "../components/common/Section";
import Container from "../components/common/Container";

export default function About(){
  return (
    <>
      <Section className="bg-[#f7fbff]">
        <Container>
          <h1 className="text-3xl font-black">About Us</h1>
          <p className="mt-2 max-w-prose text-zinc-700">
            Locally owned and proudly serving Pomaria and surrounding areas. Licensed, insured, and BBB accredited.
          </p>
        </Container>
      </Section>
      <Section>
        <Container className="grid gap-6 md:grid-cols-3">
          <div className="rounded-2xl border border-zinc-100 bg-white p-6 shadow">
            <h3 className="font-bold">Local & Trusted</h3>
            <p className="mt-1 text-zinc-700">We treat every home like it’s our own.</p>
          </div>
          <div className="rounded-2xl border border-zinc-100 bg-white p-6 shadow">
            <h3 className="font-bold">Clean Installs</h3>
            <p className="mt-1 text-zinc-700">Professional workmanship and tidy finishes.</p>
          </div>
          <div className="rounded-2xl border border-zinc-100 bg-white p-6 shadow">
            <h3 className="font-bold">Straightforward</h3>
            <p className="mt-1 text-zinc-700">Clear options and recommendations you can trust.</p>
          </div>
        </Container>
      </Section>
    </>
  );
}