import type { MetadataRoute } from "next";
import { absoluteUrl, routes } from "@/lib/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const paths = [
    routes.home,
    routes.freeCheck,
    routes.pricing,
    routes.tuneUp,
    routes.fixUp,
    routes.newWebsite,
    routes.monthly,
    routes.howItWorks,
    routes.whoItsFor,
    routes.about,
    routes.faq,
    routes.contact,
    routes.privacy,
    routes.terms,
  ];

  return paths.map((path) => ({
    url: absoluteUrl(path),
    lastModified: new Date(),
    changeFrequency: path === routes.home ? "weekly" : "monthly",
    priority: path === routes.home ? 1 : 0.7,
  }));
}
