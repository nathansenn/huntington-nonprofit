import { SITE_NAME } from "./lib/seo";

export default function manifest() {
  return {
    name: SITE_NAME,
    short_name: "Huntington Hope",
    description:
      "Honest science and support for families affected by Huntington's disease.",
    start_url: "/",
    display: "standalone",
    background_color: "#f7f6f2",
    theme_color: "#12454f",
    icons: [
      { src: "/icon.svg", type: "image/svg+xml", sizes: "any", purpose: "any" },
      { src: "/favicon.svg", type: "image/svg+xml", sizes: "any" },
    ],
  };
}
