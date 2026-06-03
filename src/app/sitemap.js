export default function sitemap() {
  const base = "https://nirjal-portfolio.vercel.app";
  return [
    { url: base, lastModified: new Date(), priority: 1 },
    { url: `${base}/about`, lastModified: new Date(), priority: 0.8 },
    { url: `${base}/work`, lastModified: new Date(), priority: 0.8 },
    { url: `${base}/services`, lastModified: new Date(), priority: 0.8 },
    { url: `${base}/pricing`, lastModified: new Date(), priority: 0.7 },
    { url: `${base}/contact`, lastModified: new Date(), priority: 0.6 },
  ];
}
