import Container from "./common/Container";
import Section from "./common/Section";

export default function QuoteForm(){
  const submit = (e)=>{ e.preventDefault(); alert("Submitted! We’ll contact you shortly."); };
  const input = "w-full rounded-xl border border-zinc-200 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#08AFFF]/50";
  return (
    <Section>
      <Container>
        <div className="max-w-2xl mx-auto">
          <div className="rounded-2xl border border-zinc-100 bg-white p-4 md:p-6 shadow">
            <h2 className="text-xl font-black md:text-2xl text-center">Request a Quote</h2>
            <p className="mt-1 text-sm text-zinc-500 text-center">No pressure — we’ll reach out fast and keep it simple.</p>

            <form onSubmit={submit} className="mt-5 grid gap-3 sm:grid-cols-2">
              <input className={input} placeholder="Full name" required />
              <input className={input} placeholder="Phone" type="tel" required />
              <input className={input} placeholder="Email" type="email" required />
              <input className={input} placeholder="City / ZIP" />
              <textarea className={`${input} sm:col-span-2 resize-none`} rows={4}  placeholder="Tell us what you need (install, repair, maintenance)…" />
              <button className="rounded-full bg-[#08AFFF] px-4 py-2 md:px-5 md:py-3 font-semibold text-[#00324a] sm:col-span-2 justify-self-center">Send Request</button>
            </form>
          </div>
        </div>
      </Container>
    </Section>
  );
}