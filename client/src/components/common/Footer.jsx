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
              <p className="mtmau-3 text-sm text-slate-600">
                Licensed &bull; Insured &bull; Newberry, SC
              </p>
            </div>
            <div>
              <h4 className="font-semibold text-slate-900">Services</h4>
              <ul className="mt-2 space-y-1 text-sm text-slate-600">
                <li>AC Repair &amp; Install</li>
                <li>Heating Repair</li>
                <li>Maintenance Plans</li>
                <li>Indoor Air Quality</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-slate-900">Company</h4>
              <ul className="mt-2 space-y-1 text-sm text-slate-600">
                <li>About</li>
                <li>Careers</li>
                <li>Financing</li>
                <li>Contact</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-slate-900">Get help</h4>
              <p className="mt-2 text-sm text-slate-600">
                (843) 555-1234<br />support@breezeshooters.com
              </p>
            </div>
          </div>
          <div className="border-t border-sky-100 py-4 text-center text-xs text-slate-500 space-y-1">
            <div>&copy; {year} BreezeShooters HVAC</div>
            <div>
              Powered by <a href="https://marsh.monster" target="_blank" rel="noopener noreferrer" className="text-green-600 hover:text-green-700 font-medium">Marsh Monster</a>
            </div>
          </div>
        </div>
      </div>
    </motion.footer>
  );
}