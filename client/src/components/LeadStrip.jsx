import Container from "./common/Container";

export default function LeadStrip(){
  const submit = (e)=>{ e.preventDefault(); alert("Thanks! We’ll follow up soon."); };
  return (
    <div className="w-full bg-gradient-to-r from-[#08AFFF] to-[#46c3ff] text-[#00324a]">
      <Container className="flex flex-wrap items-center justify-center gap-3 py-4 font-bold">
        <div>Get seasonal reminders & tips — stay EZ-Breezy year-round.</div>
        <form onSubmit={submit} className="flex flex-wrap items-center gap-2">
          <input type="email" required placeholder="Enter your email"
                 className="min-w-64 rounded-full border border-white/30 bg-white px-4 py-2 text-sm text-zinc-800 shadow" />
          <button className="rounded-full bg-white px-4 py-2 text-sm font-extrabold text-[#00324a] shadow">Subscribe</button>
        </form>
      </Container>
    </div>
  );
}