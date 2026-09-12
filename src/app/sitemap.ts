import type { MetadataRoute } from "next";
import { absoluteUrl, routes } from "@/lib/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const paths = [
    routes.home,
    routes.snapshot,
    routes.audit,
    routes.foundation,
    routes.retainer,
    routes.about,
    routes.contact,
  ];

  return paths.map((path) => ({
    url: absoluteUrl(path),
    lastModified: new Date(),
    changeFrequency: path === routes.home ? "weekly" : "monthly",
    priority: path === routes.home ? 1 : 0.7,
  }));
}
