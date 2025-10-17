export default function Section({ id, className = "", children }) {
  return (
    <section id={id} className={`py-14 sm:py-16 ${className}`}>
      {children}
    </section>
  );
}