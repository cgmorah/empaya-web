import type { MetadataRoute } from "next";

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = "https://empaya.co";
  const now = new Date();
  return [
    { url: `${base}/`, lastModified: now, changeFrequency: "weekly", priority: 1 },
    { url: `${base}/#menu`, lastModified: now, changeFrequency: "weekly", priority: 0.9 },
    { url: `${base}/#packs`, lastModified: now, changeFrequency: "monthly", priority: 0.8 },
    { url: `${base}/#receta`, lastModified: now, changeFrequency: "yearly", priority: 0.6 },
    { url: `${base}/#opiniones`, lastModified: now, changeFrequency: "monthly", priority: 0.6 },
    { url: `${base}/#ubicacion`, lastModified: now, changeFrequency: "yearly", priority: 0.7 },
  ];
}
