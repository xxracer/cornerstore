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

  const blogPosts = [
    { path: "/10-tips-for-family-caregivers", lastModified: "2020-04-15", priority: 0.6 },
    { path: "/caring-for-a-patient-with-alzheimers", lastModified: "2020-06-01", priority: 0.6 },
    { path: "/doctors-visit-checklist", lastModified: "2020-04-28", priority: 0.6 },
    { path: "/home-health-care", lastModified: "2020-05-29", priority: 0.6 },
    { path: "/preparing-for-hurricane-season", lastModified: "2020-06-04", priority: 0.5 },
    { path: "/my-top-tips-for-caregivers-as-seen-on-today-show", lastModified: "2020-06-22", priority: 0.5 },
    { path: "/how-to-reuse-and-sanitize-cloth-and-disposable-face-masks", lastModified: "2020-04-17", priority: 0.4 },
    { path: "/meet-monday-2", lastModified: "2020-04-21", priority: 0.4 },
    { path: "/meet-monday-3", lastModified: "2020-05-11", priority: 0.4 },
    { path: "/meet-monday-4", lastModified: "2020-05-18", priority: 0.4 },
  ];

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
    ...blogPosts.map((post) => ({
      url: `${baseUrl}${post.path}`,
      lastModified: new Date(post.lastModified),
      changeFrequency: "yearly" as const,
      priority: post.priority,
    })),
  ];
}
