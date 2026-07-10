// Prefix a public/-rooted path ('/portrait.png') with the deploy base
// so images work when the site is served from a subpath (GitHub Pages).
export const asset = (p) => import.meta.env.BASE_URL + String(p).replace(/^\/+/, '');
