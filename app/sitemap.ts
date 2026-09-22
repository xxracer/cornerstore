import type { MetadataRoute } from "next";
import { getAllSlugs } from "@/lib/articles";

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://cornerstonehomehealth.net";

  const pages = [
    { path: "/", priority: 1.0, changeFrequency: "weekly" as const },
    { path: "/about", priority: 0.9, changeFrequency: "monthly" as const },
    { path: "/services", priority: 0.9, changeFrequency: "monthly" as const },
    { path: "/why-us", priority: 0.9, changeFrequency: "monthly" as const },
    { path: "/articles", priority: 0.8, changeFrequency: "weekly" as const },
    { path: "/careers", priority: 0.8, changeFrequency: "monthly" as const },
    { path: "/contact", priority: 0.8, changeFrequency: "monthly" as const },
    { path: "/schedule", priority: 0.8, changeFrequency: "monthly" as const },
  ];

  const articleSlugs = getAllSlugs();

  return [
    ...pages.map((page) => ({
      url: `${baseUrl}${page.path}`,
      lastModified: new Date(),
      changeFrequency: page.changeFrequency,
      priority: page.priority,
    })),
    ...articleSlugs.map((slug) => ({
      url: `${baseUrl}/articles/${slug}`,
      lastModified: new Date(),
      changeFrequency: "monthly" as const,
      priority: 0.7,
    })),
  ];
}
