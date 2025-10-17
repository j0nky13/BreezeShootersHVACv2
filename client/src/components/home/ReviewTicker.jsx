import { Star } from "lucide-react";

const items = [
  "“Showed up fast and fixed it even faster.”",
  "“Clean install. Bills dropped noticeably.”",
  "“Finally an honest HVAC crew.”",
];

export default function ReviewTicker() {
  return (
    <section className="py-10">
      <div className="border-y border-sky-100 bg-white">
        <div className="overflow-hidden">
          <div className="animate-[marquee_20s_linear_infinite] whitespace-nowrap py-3">
            {items.concat(items).map((t, i) => (
              <span key={i} className="inline-flex items-center px-6 text-slate-700">
                <Star className="w-4 h-4 text-amber-500 mr-2" />
                {t}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* minimal marquee keyframes (Tailwind add via arbitrary) */}
      <style>{`
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
      `}</style>
    </section>
  );
}