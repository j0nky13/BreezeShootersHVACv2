import { Phone, Calendar, Menu, X } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { createPortal } from "react-dom";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  const anchorRef = useRef(null);
  const [panelStyle, setPanelStyle] = useState(null);

  function computePanelStyle() {
    const el = anchorRef.current;
    if (!el) return;
    const r = el.getBoundingClientRect();
    // Match previous: absolute left-4 right-4 inside the card, with mt-2 below it
    const inset = 16; // Tailwind left-4/right-4
    const topOffset = 8; // mt-2
    setPanelStyle({
      position: "fixed",
      top: Math.round(r.bottom + topOffset) + "px",
      left: Math.round(r.left + inset) + "px",
      width: Math.max(0, Math.round(r.width - inset * 2)) + "px",
    });
  }

  useEffect(() => {
    if (!open) return;
    computePanelStyle();
    const onWin = () => computePanelStyle();
    window.addEventListener("resize", onWin);
    window.addEventListener("scroll", onWin, { passive: true });
    return () => {
      window.removeEventListener("resize", onWin);
      window.removeEventListener("scroll", onWin);
    };
  }, [open]);

  return (
    <header className="sticky top-4 z-50 bg-transparent">
      <div className="mx-auto max-w-6xl px-4 sm:px-5 lg:px-6">
        {/* Floating card wrapper */}
        <div ref={anchorRef} className="relative rounded-3xl border border-sky-100 bg-white/90 backdrop-blur shadow-lg shadow-sky-100/60 overflow-visible hover:shadow-sky-200/80 hover:-translate-y-[1px] transition-all duration-300 ease-in-out">
          {/* Row 1 */}
          <div className="px-4 sm:px-6 lg:px-8 py-3 grid grid-cols-[1fr_auto_1fr] items-center">
            {/* Left: mobile menu */}
            <div className="justify-self-start">
              <button
                className={`md:hidden inline-flex items-center justify-center p-2 rounded-lg border border-sky-200 bg-white transition-colors duration-200 hover:bg-sky-50 ${open ? 'text-sky-600' : 'text-slate-700'}`}
                onClick={() => setOpen((v) => !v)}
                aria-label={open ? 'Close menu' : 'Open menu'}
              >
                {open ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
              </button>
            </div>

            {/* Center: logo (mathematically centered) */}
            <div className="justify-self-center">
              <Link to="/" className="inline-flex items-center gap-2 select-none" onClick={() => setOpen(false)}>
                <img src="/logo.svg" alt="BreezeShooters logo" className="h-10 w-auto object-contain" />
              </Link>
            </div>

            {/* Right: actions */}
            {/* Full buttons on md+ */}
            <div className="hidden md:flex justify-self-end items-center gap-3">
              <a
                href="tel:+18435551234"
                className="inline-flex items-center gap-2 px-3 py-2 rounded-xl border border-sky-200 bg-white hover:bg-sky-50"
              >
                <Phone className="w-4 h-4" />
                <span className="font-medium">Call</span>
              </a>
              <Link
                to="/plan"
                className="inline-flex items-center gap-2 px-3 py-2 rounded-xl bg-sky-600 hover:bg-sky-700 text-white"
                onClick={() => setOpen(false)}
              >
                <Calendar className="w-4 h-4" />
                <span className="font-semibold">Schedule</span>
              </Link>
            </div>
            {/* Compact action on < md (icon-only to avoid overlap) */}
            <div className="justify-self-end md:hidden flex items-center gap-2">
              <Link
                to="/plan"
                className="inline-flex items-center justify-center h-9 w-9 rounded-xl bg-sky-600 hover:bg-sky-700 text-white"
                aria-label="Schedule"
                title="Schedule"
                onClick={() => setOpen(false)}
              >
                <Calendar className="w-4 h-4" />
              </Link>
            </div>
          </div>

          {/* Row 2 (small links) */}
          <div className="border-t border-sky-100">
            <nav className="px-4 sm:px-6 lg:px-8 py-2 text-sm text-slate-700 hidden md:flex gap-6 justify-center">
              <Link to="/" className="hover:text-sky-700">Home</Link>
              <Link to="/services" className="hover:text-sky-700">Services</Link>
              <Link to="/plan" className="hover:text-sky-700">EZ‑Breezy Plan</Link>
              <Link to="/financing" className="hover:text-sky-700">Financing</Link>
              <Link to="/about" className="hover:text-sky-700">About</Link>
              <Link to="/contact" className="hover:text-sky-700">Contact</Link>
            </nav>
          </div>

          {/* Mobile flyout (anchored to this card) */}
          {open &&
            createPortal(
              <div className="fixed inset-0 z-[60]" onClick={() => setOpen(false)}>
                <div
                  style={panelStyle || undefined}
                  className="fixed rounded-2xl border border-sky-100 bg-white shadow-xl overflow-hidden z-[70]"
                  onClick={(e) => e.stopPropagation()}
                  role="dialog"
                  aria-modal="true"
                >
                  {/* Quick actions */}
                  <div className="flex items-center gap-2 p-3 border-b border-sky-100">
                    <a
                      href="tel:+18435551234"
                      className="flex-1 inline-flex items-center justify-center gap-2 px-3 py-2 rounded-xl border border-sky-200 bg-white hover:bg-sky-50 hover:-translate-y-[2px] transition-all duration-200 ease-in-out"
                    >
                      <Phone className="w-4 h-4" />
                      <span className="font-medium">Call</span>
                    </a>
                    <Link
                      to="/plan"
                      className="flex-1 inline-flex items-center justify-center gap-2 px-3 py-2 rounded-xl bg-sky-600 text-white hover:bg-sky-700 hover:-translate-y-[2px] transition-all duration-200 ease-in-out"
                      onClick={() => setOpen(false)}
                    >
                      <Calendar className="w-4 h-4" />
                      <span className="font-semibold">Schedule</span>
                    </Link>
                  </div>
                  <nav className="px-4 py-3 grid gap-3">
                    {[
                      ["Home", "/"],
                      ["Services", "/services"],
                      ["EZ‑Breezy Plan", "/plan"],
                      ["Financing", "/financing"],
                      ["About", "/about"],
                      ["Contact", "/contact"],
                    ].map(([label, to]) => (
                      <Link
                        key={label}
                        to={to}
                        onClick={() => setOpen(false)}
                        className="px-3 py-2 rounded-lg hover:bg-sky-50"
                      >
                        {label}
                      </Link>
                    ))}
                  </nav>
                </div>
              </div>,
              document.body
            )}
        </div>
      </div>
    </header>
  );
}