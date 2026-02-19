import fs from "node:fs/promises";
import path from "node:path";

const DOCS_ROOT = path.join(process.cwd(), "docs");
const SYSTEM_MAP_PATH = path.join(DOCS_ROOT, "6967_HD_CURE_COMPLETE_SYSTEM_MAP.md");

export async function loadHDCureSystemMap() {
  return fs.readFile(SYSTEM_MAP_PATH, "utf8");
}

export async function getResearchFiles() {
  const files = await fs.readdir(DOCS_ROOT);
  return files.sort().map((filename) => {
    const ext = path.extname(filename).toLowerCase();
    return {
      filename,
      ext,
      type:
        ext === ".md"
          ? "Research Memo"
          : ext === ".png" || ext === ".jpg" || ext === ".jpeg"
            ? "Figure"
            : ext === ".json"
              ? "Data"
              : ext === ".py"
                ? "Script"
                : ext === ".docx" || ext === ".doc"
                  ? "Document"
                  : ext === ".jsx"
                    ? "Interface"
                    : "Archive",
    };
  });
}

export function extractSection(mdText, startHeading, endHeading = null) {
  const start = mdText.indexOf(startHeading);
  if (start < 0) {
    return `Section not found: ${startHeading}`;
  }
  const end = endHeading ? mdText.indexOf(endHeading, start + 1) : -1;
  return (endHeading && end >= 0 ? mdText.slice(start, end) : mdText.slice(start)).trim();
}
