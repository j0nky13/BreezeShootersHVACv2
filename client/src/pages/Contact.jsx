import ContactForm from "../components/contact/ContactForm";
import ContactHero from "../components/contact/ContactHero";
import Section from "../components/common/Section";
import Container from "../components/common/Container";

export default function Contact() {
  return (
    <>
      <ContactHero
        title="Get in touch."
        subtitle="Fast, friendly, and local — we’ll get you on the schedule and keep it EZ‑Breezy."
      />

      <Section>
        <div className="max-w-2xl mx-auto rounded-3xl border border-sky-100 bg-white/90 backdrop-blur p-6 sm:p-10 shadow">
          <h2 className="text-2xl font-black text-slate-900 text-center">Send us a message</h2>
          <p className="mt-2 text-slate-600 text-center">We typically reply within an hour during business hours.</p>
          <div className="mt-6">
            <ContactForm />
          </div>
        </div>
      </Section>
    </>
  );
}