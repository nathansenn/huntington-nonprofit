import { SITE_URL } from "./lib/seo";

// This foundation's mission is OPEN research that everyone — including AI
// assistants — can read, index, and reuse. So we explicitly welcome the major
// search AND AI crawlers. (robots rules are a preference signal, not access
// control.) See public/llms.txt for an AI-friendly content guide.
const AI_BOTS = [
  "GPTBot",
  "OAI-SearchBot",
  "ChatGPT-User",
  "ClaudeBot",
  "Claude-SearchBot",
  "Claude-User",
  "Google-Extended",
  "PerplexityBot",
  "Perplexity-User",
  "CCBot",
];

export default function robots() {
  return {
    rules: [
      { userAgent: "*", allow: "/" },
      { userAgent: AI_BOTS, allow: "/" },
    ],
    sitemap: `${SITE_URL}/sitemap.xml`,
    host: SITE_URL,
  };
}
