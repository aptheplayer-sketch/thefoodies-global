import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://thefoodies.com";
  const routes = ["", "/services", "/partners", "/vendors", "/cities", "/blog", "/contact", "/privacy", "/terms"];
  return routes.map((r) => ({
    url: baseUrl + r,
    lastModified: new Date(),
    changeFrequency: "weekly",
    priority: r === "" ? 1 : 0.7,
  }));
}
