// Requires GOOGLE_MAPS_API_KEY in your server/env (backend only)
const fetch = (...a) => import('node-fetch').then(({default:f}) => f(...a));
const PLACES_BASE = 'https://places.googleapis.com/v1';
const FIELDS = ['reviews','rating','userRatingCount','displayName','googleMapsUri','formattedAddress'];

async function findPlaceId(query, key) {
  const res = await fetch(`${PLACES_BASE}/places:searchText?key=${key}`, {
    method: 'POST',
    headers: { 'Content-Type':'application/json' },
    body: JSON.stringify({
      textQuery: query,
      locationBias: { circle: { center: { latitude: 34.2740, longitude: -81.6187 }, radius: 30000 } }
    })
  });
  if (!res.ok) throw new Error(`TextSearch ${res.status}`);
  const data = await res.json();
  return data.places?.[0]?.id || null;
}
async function getDetails(placeId, key) {
  const url = `${PLACES_BASE}/places/${encodeURIComponent(placeId)}?key=${key}&fields=${FIELDS.join(',')}`;
  const r = await fetch(url);
  if (!r.ok) throw new Error(`Details ${r.status}`);
  return r.json();
}
module.exports = async (req, res) => {
  try {
    const key = process.env.GOOGLE_MAPS_API_KEY;
    if (!key) return res.status(500).json({ error: 'Missing GOOGLE_MAPS_API_KEY' });
    const { query, place_id } = req.query;
    let pid = place_id;
    if (!pid) {
      if (!query) return res.status(400).json({ error: 'Provide query or place_id' });
      pid = await findPlaceId(query, key);
      if (!pid) return res.status(404).json({ error: 'Place not found' });
    }
    const details = await getDetails(pid, key);
    const reviews = (details.reviews || []).map(r => ({
      author: r.authorAttribution?.displayName || 'Google user',
      profileUrl: r.authorAttribution?.uri || null,
      photoUri: r.authorAttribution?.photoUri || null,
      rating: r.rating,
      text: r.text?.text || '',
      publishTime: r.publishTime
    }));
    res.setHeader('Cache-Control', 's-maxage=600, stale-while-revalidate=86400');
    res.json({
      placeId: pid,
      displayName: details.displayName,
      formattedAddress: details.formattedAddress,
      rating: details.rating,
      userRatingCount: details.userRatingCount,
      googleMapsUri: details.googleMapsUri,
      reviews
    });
  } catch (e) {
    res.status(500).json({ error: e.message });
  }
};