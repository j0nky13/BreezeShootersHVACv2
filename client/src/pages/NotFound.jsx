import Container from "../components/common/Container";
export default function NotFound(){
  return (
    <div className="py-24">
      <Container className="text-center">
        <h1 className="text-4xl font-black">404</h1>
        <p className="mt-2 text-zinc-600">Page not found.</p>
        <a href="/" className="mt-4 inline-block rounded-full bg-[#08AFFF] px-5 py-3 font-semibold text-[#00324a]">Back home</a>
      </Container>
    </div>
  );
}