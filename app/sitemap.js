import { SITE_URL, CONTENT_REVIEWED } from "./lib/seo";

const routes = [
  { path: "/", priority: 1.0, changeFrequency: "monthly" },
  { path: "/story", priority: 0.9, changeFrequency: "yearly" },
  { path: "/science", priority: 0.9, changeFrequency: "monthly" },
  { path: "/research", priority: 0.8, changeFrequency: "weekly" },
  { path: "/resources", priority: 0.7, changeFrequency: "monthly" },
  { path: "/get-involved", priority: 0.6, changeFrequency: "monthly" },
  { path: "/about", priority: 0.5, changeFrequency: "monthly" },
];

export default function sitemap() {
  const lastModified = new Date(CONTENT_REVIEWED);
  return routes.map((r) => ({
    url: `${SITE_URL}${r.path === "/" ? "" : r.path}`,
    lastModified,
    changeFrequency: r.changeFrequency,
    priority: r.priority,
  }));
}
