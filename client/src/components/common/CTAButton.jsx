export default function CTAButton({ href="#", children, variant="primary", className="" }) {
  const base = "inline-flex items-center justify-center rounded-full px-5 py-3 font-semibold transition-transform hover:-translate-y-0.5";
  const styles = variant === "primary"
    ? "bg-[#08AFFF] text-[#00324a] hover:brightness-95"
    : "border border-zinc-200 bg-white hover:shadow";
  return <a href={href} className={`${base} ${styles} ${className}`}>{children}</a>;
}