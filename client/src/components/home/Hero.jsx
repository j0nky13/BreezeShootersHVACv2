import Container from "../common/Container";
import CTAButton from "../common/CTAButton";

export default function Hero(){
  return (
    <section className="relative overflow-hidden bg-transparent min-h-[70vh] md:min-h-[80vh] flex items-center">
      <video
        autoPlay
        loop
        muted
        playsInline
        preload="metadata"
        className="absolute inset-0 h-full w-full object-cover"
      >
        <source src="/hero-vid.mp4" type="video/mp4" />
        <source src="/hero-vid.webm" type="video/webm" />
        <source src="/hero-vid.mov" type="video/quicktime" />
      </video>

      {/* Composite overlay: dark → soft white → solid white at bottom */}
      <div className="absolute inset-0 z-0 bg-[linear-gradient(180deg,rgba(0,0,0,.38)_0%,rgba(0,0,0,.6)_75%,rgba(255,255,255,.25)_88%,rgba(255,255,255,1)_100%)]" />

      {/* Content */}
      <Container className="relative z-20 py-16 md:py-24">
        <div className="max-w-2xl text-white [text-shadow:0_1px_18px_rgba(0,0,0,.25)]">
          <p className="mb-2 font-extrabold tracking-wide text-[#0a6ea1]">Licensed &amp; Insured • BBB# 115393</p>
          <h1 className="text-4xl/tight font-black text-white sm:text-6xl">
            Newberry&apos;s #1 HVAC Company.
            <span className="block h-1 w-0 bg-[#08AFFF] mt-2 rounded-full animate-[underlineGrow_.7s_ease-out_forwards]" />
          </h1>
          <p className="mt-3 max-w-prose text-lg text-white/85">
            Trusted heating &amp; cooling installs, repairs, and maintenance.
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            <CTAButton href="https://your-hcp-link.com" className="rounded-full bg-[#08AFFF] text-[#00324A] px-5 py-3 font-semibold shadow-sm hover:brightness-95 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#08AFFF]/70">
              Schedule Service
            </CTAButton>
          </div>
        </div>
      </Container>
      <style jsx global>{`
        @keyframes driftSlow {
          0% { transform: translateX(0); }
          50% { transform: translateX(8px); }
          100% { transform: translateX(0); }
        }
        @keyframes underlineGrow {
          from { width: 0; }
          to { width: 9rem; } /* ~144px underline; adjust as needed */
        }
      `}</style>
      {/* Scroll down arrow */}
      <button
        onClick={() => {
          const target = document.getElementById("thermostat") || document.getElementById("services");
          if (target) {
            const header = document.querySelector("header");
            const offset = header ? header.offsetHeight : 80; // fallback if no header found
            const top = target.getBoundingClientRect().top + window.pageYOffset - offset - 40; // cushion
            window.scrollTo({ top, behavior: "smooth" });
          }
        }}
        className="absolute bottom-6 left-1/2 z-30 -translate-x-1/2 animate-bounce text-white/80 hover:text-white focus:outline-none"
        aria-label="Scroll to thermostat"
      >
        <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
          <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
        </svg>
      </button>
    </section>
  );
    
}