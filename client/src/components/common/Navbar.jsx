import { Phone, Calendar, Menu, X } from "lucide-react";
import { useState } from "react";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-4 z-50 bg-transparent">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Floating card wrapper */}
        <div className="relative rounded-3xl border border-sky-100 bg-white/90 backdrop-blur shadow-lg shadow-sky-100/60 overflow-visible hover:shadow-sky-200/80 hover:-translate-y-[1px] transition-all duration-300 ease-in-out">
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
              <a href="/" className="inline-flex items-center gap-2 select-none">
                <img src="/logo.svg" alt="BreezeShooters logo" className="h-10 w-auto object-contain" />
              </a>
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
              <a
                href="#/schedule"
                className="inline-flex items-center gap-2 px-3 py-2 rounded-xl bg-sky-600 hover:bg-sky-700 text-white"
              >
                <Calendar className="w-4 h-4" />
                <span className="font-semibold">Schedule</span>
              </a>
            </div>
            {/* Compact action on < md (icon-only to avoid overlap) */}
            <div className="justify-self-end md:hidden flex items-center gap-2">
              <a
                href="#/schedule"
                className="inline-flex items-center justify-center h-9 w-9 rounded-xl bg-sky-600 hover:bg-sky-700 text-white"
                aria-label="Schedule"
                title="Schedule"
              >
                <Calendar className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Row 2 (small links) */}
          <div className="border-t border-sky-100">
            <nav className="px-4 sm:px-6 lg:px-8 py-2 text-sm text-slate-700 hidden md:flex gap-6 justify-center">
              <a href="/" className="hover:text-sky-700">Home</a>
              <a href="/services" className="hover:text-sky-700">Services</a>
              <a href="/plan" className="hover:text-sky-700">EZ‑Breezy Plan</a>
              <a href="#/financing" className="hover:text-sky-700">Financing</a>
              <a href="#/about" className="hover:text-sky-700">About</a>
              <a href="/contact" className="hover:text-sky-700">Contact</a>
            </nav>
          </div>

          {/* Mobile flyout (anchored to this card) */}
          {open && (
            <div className="md:hidden absolute left-4 right-4 top-full mt-2 rounded-2xl border border-sky-100 bg-white shadow-xl overflow-hidden z-20">
              {/* Quick actions */}
              <div className="flex items-center gap-2 p-3 border-b border-sky-100">
                <a
                  href="tel:+18435551234"
                  className="flex-1 inline-flex items-center justify-center gap-2 px-3 py-2 rounded-xl border border-sky-200 bg-white hover:bg-sky-50 hover:-translate-y-[2px] transition-all duration-200 ease-in-out"
                >
                  <Phone className="w-4 h-4" />
                  <span className="font-medium">Call</span>
                </a>
                <a
                  href="#/schedule"
                  className="flex-1 inline-flex items-center justify-center gap-2 px-3 py-2 rounded-xl bg-sky-600 text-white hover:bg-sky-700 hover:-translate-y-[2px] transition-all duration-200 ease-in-out"
                >
                  <Calendar className="w-4 h-4" />
                  <span className="font-semibold">Schedule</span>
                </a>
              </div>
              <nav className="px-4 py-3 grid gap-3">
                {[
                  ["Home", "/"],
                  ["Services", "/services"],
                  ["Comfort Plan", "/plan"],
                  ["Financing", "/financing"],
                  ["About", "/about"],
                  ["Contact", "/contact"],
                ].map(([label, href]) => (
                  <a
                    key={label}
                    href={`#${href}`}
                    onClick={() => setOpen(false)}
                    className="px-3 py-2 rounded-lg hover:bg-sky-50"
                  >
                    {label}
                  </a>
                ))}
              </nav>
            </div>
          )}
        </div>
      </div>
    </header>
  );
}