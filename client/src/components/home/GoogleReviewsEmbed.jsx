

export default function GoogleReviewsEmbed({
  /**
   * Provide a full Google Maps embed src. If you don't have a Place ID embed yet,
   * this search-based embed works without any API key. Replace the default with
   * your exact business URL when ready.
   */
  src = "https://www.google.com/maps?q=BreezeShooters%20HVAC%20Newberry%20SC&output=embed",
  title = "Google reviews",
}) {
  const openUrl = src.replace("&output=embed", "");
  return (
    <div className="rounded-2xl border border-sky-100 bg-white shadow-sm overflow-hidden">
      <div className="aspect-[16/9] sm:aspect-[21/9]">
        <iframe
          src={src}
          title={title}
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          className="w-full h-full"
        />
      </div>
      <div className="p-4 text-center text-sm text-slate-600">
        Don’t see the list here?{' '}
        <a
          href={openUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="text-sky-600 hover:text-sky-700 font-medium"
        >
          Open reviews on Google
        </a>
        .
      </div>
    </div>
  );
}