import { Phone } from "lucide-react";

export default function FloatingCallButton() {
  return (
    <a
      href="tel:+18435551234"
      className="fixed bottom-6 right-6 z-40 inline-flex items-center gap-2 px-4 py-2 rounded-full bg-sky-600 hover:bg-sky-700 text-white shadow-lg"
    >
      <Phone className="w-4 h-4" />
      Call Now
    </a>
  );
}