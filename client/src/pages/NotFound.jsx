import Container from "../components/common/Container";
export default function NotFound() {
  return (
    <div className="relative isolate min-h-screen flex flex-col items-center justify-center text-white text-center overflow-hidden">
      {/* Full-screen gradient behind navbar/footer */}
      <div className="fixed inset-0 z-0 pointer-events-none bg-gradient-to-b from-red-800 via-rose-700 via-orange-600 to-amber-500" />
      <div className="fixed inset-0 z-0 pointer-events-none bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.12)_0%,transparent_70%)] animate-pulse" />
      <div className="fixed inset-0 z-0 pointer-events-none backdrop-blur-[2px] bg-gradient-to-t from-transparent via-white/10 to-transparent animate-[pulse_5s_infinite_alternate]" />

      <Container className="relative z-10 px-6 pt-12 pb-16">
        <h1 className="text-8xl sm:text-9xl font-extrabold drop-shadow-[0_4px_10px_rgba(0,0,0,0.3)]">
          404
        </h1>
        <p className="mt-4 text-lg text-amber-100 max-w-xl mx-auto">
          Looks like this page got a little too hot to handle.
        </p>
        <a
          href="/"
          className="mt-8 inline-block rounded-full bg-white/90 hover:bg-white text-red-700 font-bold px-6 py-3 transition-transform duration-300 hover:scale-105 hover:shadow-[0_0_25px_rgba(255,255,255,0.4)]"
        >
          Cool Off & Go Home
        </a>
      </Container>
    </div>
  );
}