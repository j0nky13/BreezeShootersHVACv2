export default function auth(req, res, next) {
  const token = req.headers.authorization;
  if (!token) return res.status(403).json({ error: 'No token provided' });

  // Simulate token validation
  try {
    const decoded = JSON.parse(Buffer.from(token.split('.')[1], 'base64').toString());
    req.user = decoded;
    next();
  } catch {
    res.status(403).json({ error: 'Invalid token' });
  }
}
