import { motion } from "framer-motion";

export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <motion.footer
      className="bg-transparent py-8"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="rounded-3xl border border-sky-100 bg-white/70 backdrop-blur shadow-lg overflow-hidden">
          <div className="px-4 sm:px-6 lg:px-8 py-10 grid sm:grid-cols-2 lg:grid-cols-4 gap-8 text-center sm:text-left justify-items-center sm:justify-items-start">
            <div>
              <div className="flex items-center justify-center sm:justify-start">
                <img
                  src="/logo.svg"
                  alt="BreezeShooters logo"
                  className="h-8 w-auto object-contain"
                />
              </div>
              <p className="mt-3 text-sm text-slate-600">
                Licensed • Insured • Newberry, SC
              </p>
            </div>

            <div>
              <h4 className="font-semibold text-slate-900">Services</h4>
              <ul className="mt-2 space-y-1 text-sm text-slate-600">
                <li><a href="/services#ac-repair" className="hover:text-sky-700">AC Repair & Install</a></li>
                <li><a href="/services#heating" className="hover:text-sky-700">Heating Repair</a></li>
                <li><a href="/plan" className="hover:text-sky-700">EZ-Breezy Plan</a></li>
                <li><a href="/services#air-quality" className="hover:text-sky-700">Indoor Air Quality</a></li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold text-slate-900">Company</h4>
              <ul className="mt-2 space-y-1 text-sm text-slate-600">
                <li><a href="/about" className="hover:text-sky-700">About</a></li>
                <li><a href="/careers" className="hover:text-sky-700">Careers</a></li>
                <li><a href="/financing" className="hover:text-sky-700">Financing</a></li>
                <li><a href="/contact" className="hover:text-sky-700">Contact</a></li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold text-slate-900">Get help</h4>
              <p className="mt-2 text-sm text-slate-600">
                <a href="tel:+18435551234" className="hover:text-sky-700 block">(843) 555-1234</a>
                <span className="block mt-1">Mon–Fri: 8:00 AM – 6:00 PM</span>
                <span className="block">Sat: 9:00 AM – 3:00 PM</span>
                <span className="block mt-1 font-medium text-sky-700">24/7 Emergency Service Available</span>
              </p>
            </div>
          </div>

          <div className="border-t border-sky-100 py-4 text-center text-xs text-slate-500 space-y-1">
            <div>&copy; {year} BreezeShooters HVAC</div>
            <div>
              Powered by{" "}
              <a
                href="https://marsh.monster"
                target="_blank"
                rel="noopener noreferrer"
                className="text-green-600 hover:text-green-700 font-medium"
              >
                Marsh Monster
              </a>
            </div>
          </div>
        </div>
      </div>
    </motion.footer>
  );
}