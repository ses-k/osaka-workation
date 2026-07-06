import type { MetadataRoute } from "next";
import { POSTS } from "@/lib/blog";

const BASE = "https://osakaworkation.com";

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = ["", "/stays", "/events", "/community", "/blog", "/about", "/contact"].map(
    (path) => ({
      url: `${BASE}${path}`,
      lastModified: new Date(),
      changeFrequency: "weekly" as const,
      priority: path === "" ? 1 : 0.8,
    }),
  );

  const posts = POSTS.map((p) => ({
    url: `${BASE}/blog/${p.slug}`,
    lastModified: new Date(p.date),
    changeFrequency: "monthly" as const,
    priority: 0.6,
  }));

  return [...routes, ...posts];
}
