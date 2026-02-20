import fs from "node:fs/promises";
import path from "node:path";
import { createHash } from "node:crypto";
import { execSync } from "node:child_process";

const REPO_ROOT = process.cwd();
const DOCS_ROOT = path.join(REPO_ROOT, "docs");
const SYSTEM_MAP_PATH = path.join(DOCS_ROOT, "6967_HD_CURE_COMPLETE_SYSTEM_MAP.md");
const SRC_DIRS = [
  path.join(REPO_ROOT, "app"),
  path.join(REPO_ROOT, "components"),
  path.join(REPO_ROOT, "scripts"),
  path.join(REPO_ROOT, "public"),
];

const FILE_TYPES = {
  ".md": "Research Memo",
  ".png": "Figure",
  ".jpg": "Figure",
  ".jpeg": "Figure",
  ".webp": "Figure",
  ".json": "Data",
  ".py": "Script",
  ".docx": "Document",
  ".doc": "Document",
  ".jsx": "Application Code",
  ".js": "Application Code",
  ".ts": "Application Code",
  ".tsx": "Application Code",
  ".css": "Style",
  ".html": "Archive",
};

const CODE_EXTENSIONS = new Set([".js", ".jsx", ".ts", ".tsx", ".json"]);
const SKIP_DIRS = new Set(["node_modules", ".next", ".git", "public/.next"]);

function safeReadText(filePath) {
  return fs.readFile(filePath, "utf8");
}

function gitCommitFor(filePath = "") {
  try {
    const safePath = filePath.replaceAll(`"`, `\\"`);
    const raw = execSync(
      `git log -1 --pretty=format:%h|%ad|%s --date=iso-strict ${filePath ? `-- "${safePath}"` : "HEAD"}`,
      {
        cwd: REPO_ROOT,
        stdio: ["ignore", "pipe", "ignore"],
        encoding: "utf8",
      },
    ).trim();
    if (!raw) return null;
    const [short, date, ...message] = raw.split("|");
    return {
      short,
      date,
      message: message.join("|"),
    };
  } catch {
    return null;
  }
}

function gitBranchInfo() {
  try {
    const branch = execSync("git rev-parse --abbrev-ref HEAD", {
      cwd: REPO_ROOT,
      stdio: ["ignore", "pipe", "ignore"],
      encoding: "utf8",
    }).trim();
    const head = execSync("git rev-parse HEAD", {
      cwd: REPO_ROOT,
      stdio: ["ignore", "pipe", "ignore"],
      encoding: "utf8",
    }).trim();
    return { branch, head };
  } catch {
    return { branch: "unknown", head: "unknown" };
  }
}

function fileFingerprint(content) {
  return createHash("sha256").update(content).digest("hex");
}

function countFunctions(content) {
  const patterns = [
    /\bfunction\s+[A-Za-z_][A-Za-z0-9_]*\s*\(/g,
    /\b(?:const|let|var)\s+[A-Za-z_][A-Za-z0-9_]*\s*=\s*(?:async\s*)?\([^)]*\)\s*=>/g,
    /\bclass\s+[A-Za-z_][A-Za-z0-9_]*\b/g,
  ];
  return patterns.reduce((total, re) => total + [...content.matchAll(re)].length, 0);
}

function countLines(content) {
  return content.split("\n").filter((line) => line.trim()).length;
}

function isSkippableDir(name) {
  return SKIP_DIRS.has(name);
}

function classifyFileType(filename) {
  const ext = path.extname(filename).toLowerCase();
  return FILE_TYPES[ext] || "Archive";
}

function classifyDocFileType(ext) {
  return FILE_TYPES[ext] || "Archive";
}

async function listCodeArtifactsFromDir(rootDir) {
  const artifacts = [];
  const stack = [rootDir];

  while (stack.length > 0) {
    const current = stack.pop();
    let entries = [];
    try {
      entries = await fs.readdir(current, { withFileTypes: true });
    } catch {
      continue;
    }

    for (const entry of entries) {
      if (isSkippableDir(entry.name)) continue;
      const fullPath = path.join(current, entry.name);
      if (entry.isDirectory()) {
        stack.push(fullPath);
        continue;
      }
      if (!entry.isFile()) continue;
      const ext = path.extname(entry.name).toLowerCase();
      if (!CODE_EXTENSIONS.has(ext)) continue;

      const content = await safeReadText(fullPath);
      const rel = path.relative(REPO_ROOT, fullPath);
      const commit = gitCommitFor(rel);
      artifacts.push({
        path: rel,
        type: classifyFileType(entry.name),
        lines: countLines(content),
        functions: countFunctions(content),
        hash: fileFingerprint(content).slice(0, 16),
        lastCommit: commit,
      });
    }
  }
  return artifacts;
}

function stripArtifactsForTable(items) {
  return [...items]
    .sort((a, b) => a.path.localeCompare(b.path))
    .map(({ path: filePath, type, lines, functions, hash, lastCommit }) => ({
      path: filePath,
      type,
      lines,
      functions,
      hash,
      lastCommitShort: lastCommit?.short ?? "N/A",
      lastUpdated: lastCommit?.date ?? null,
    }));
}

export async function loadHDCureSystemMap() {
  return safeReadText(SYSTEM_MAP_PATH);
}

export async function getResearchFiles() {
  const files = await fs.readdir(DOCS_ROOT);
  const hydrated = await Promise.all(
    files.sort().map(async (filename) => {
      const ext = path.extname(filename).toLowerCase();
      const commit = gitCommitFor(path.join("docs", filename));
      return {
        filename,
        ext,
        type: classifyDocFileType(ext),
        shortCommit: commit?.short ?? "N/A",
        updated: commit?.date ?? null,
        commitMessage: commit?.message ?? null,
      };
    }),
  );
  return hydrated;
}

export function extractSection(mdText, startHeading, endHeading = null) {
  const start = mdText.indexOf(startHeading);
  if (start < 0) {
    return `Section not found: ${startHeading}`;
  }
  const end = endHeading ? mdText.indexOf(endHeading, start + 1) : -1;
  return (endHeading && end >= 0 ? mdText.slice(start, end) : mdText.slice(start)).trim();
}

export async function getProjectMemoryMap() {
  const [systemMap, branchInfo, researchFiles, ...artifactBuckets] = await Promise.all([
    loadHDCureSystemMap(),
    Promise.resolve(gitBranchInfo()),
    getResearchFiles(),
    ...SRC_DIRS.map((dir) => listCodeArtifactsFromDir(dir)),
  ]);

  const rawArtifacts = artifactBuckets.flat();
  const artifacts = stripArtifactsForTable(rawArtifacts);
  const totalFunctions = artifacts.reduce((sum, item) => sum + (item.functions ?? 0), 0);
  const totalLines = artifacts.reduce((sum, item) => sum + (item.lines ?? 0), 0);
  const topFunctionModules = artifacts
    .filter((item) => item.functions > 0)
    .sort((a, b) => b.functions - a.functions)
    .slice(0, 16);
  const lastUpdated = artifacts
    .map((item) => item.lastUpdated)
    .filter(Boolean)
    .sort()
    .at(-1);

  return {
    branch: branchInfo.branch,
    rootCommit: branchInfo.head,
    headline: extractSection(
      systemMap,
      "## 1. EXECUTIVE SUMMARY",
      "## 2. THE DISEASE: WHAT HD ACTUALLY IS",
    ),
    totals: {
      files: artifacts.length,
      lines: totalLines,
      functions: totalFunctions,
      lastUpdated,
      researchFiles: researchFiles.length,
    },
    artifacts,
    topFunctionModules,
    researchFiles,
  };
}
