import { describe, it, expect, vi, beforeEach } from "vitest";

// Mock node:fs/promises at the module level (hoisted by Vitest)
vi.mock("node:fs/promises", () => ({
  default: {
    readFile: vi.fn(),
    readdir: vi.fn(),
  },
  readFile: vi.fn(),
  readdir: vi.fn(),
}));

import fs from "node:fs/promises";
import { extractSection, getResearchFiles, loadHDCureSystemMap } from "../hdcureData.js";

// ---------------------------------------------------------------------------
// extractSection — pure function, no mocking needed
// ---------------------------------------------------------------------------
describe("extractSection", () => {
  const sampleMd = [
    "# Introduction",
    "This is the intro paragraph.",
    "",
    "## Methods",
    "Describe the methods here.",
    "",
    "## Results",
    "Here are the results.",
    "",
    "## Conclusion",
    "Final thoughts.",
  ].join("\n");

  it("returns text from startHeading to endHeading", () => {
    const result = extractSection(sampleMd, "## Methods", "## Results");
    // slice(start, end) does NOT include the endHeading; .trim() removes trailing whitespace
    expect(result).toBe("## Methods\nDescribe the methods here.");
  });

  it("returns text from startHeading to end of string when endHeading is null", () => {
    const result = extractSection(sampleMd, "## Results", null);
    expect(result).toContain("## Results");
    expect(result).toContain("Here are the results.");
    expect(result).toContain("## Conclusion");
    expect(result).toContain("Final thoughts.");
  });

  it("returns text from startHeading to end of string when endHeading is omitted", () => {
    const result = extractSection(sampleMd, "## Conclusion");
    expect(result).toBe("## Conclusion\nFinal thoughts.");
  });

  it("returns 'Section not found' when heading does not exist", () => {
    const result = extractSection(sampleMd, "## Nonexistent");
    expect(result).toBe("Section not found: ## Nonexistent");
  });

  it("returns 'Section not found' for empty content", () => {
    const result = extractSection("", "## Anything");
    expect(result).toBe("Section not found: ## Anything");
  });

  it("returns from startHeading to end when endHeading is not found in text", () => {
    const result = extractSection(sampleMd, "## Methods", "## Missing");
    // endHeading not found => end is -1, condition fails, so full slice from start
    expect(result).toContain("## Methods");
    expect(result).toContain("## Conclusion");
    expect(result).toContain("Final thoughts.");
  });

  it("handles overlapping / adjacent headings correctly", () => {
    const adjacent = "## A\n## B\nContent B\n## C\nContent C";
    const result = extractSection(adjacent, "## A", "## B");
    expect(result).toBe("## A");
  });

  it("finds the first occurrence when multiple identical headings exist", () => {
    const duped = "## Dup\nFirst\n## Dup\nSecond";
    const result = extractSection(duped, "## Dup");
    expect(result).toContain("First");
    expect(result).toContain("Second");
  });
});

// ---------------------------------------------------------------------------
// getResearchFiles — uses mocked fs.readdir
// ---------------------------------------------------------------------------
describe("getResearchFiles", () => {
  beforeEach(() => {
    vi.clearAllMocks();
  });

  it("returns sorted file list with correct type classification", async () => {
    const fakeFiles = [
      "report.md",
      "figure.png",
      "photo.jpg",
      "snapshot.jpeg",
      "data.json",
      "engine.py",
      "protocol.docx",
      "legacy.doc",
      "dashboard.jsx",
      "archive.zip",
    ];

    fs.readdir.mockResolvedValue(fakeFiles);

    const result = await getResearchFiles();

    // Should be sorted alphabetically
    const filenames = result.map((r) => r.filename);
    const sorted = [...filenames].sort();
    expect(filenames).toEqual(sorted);

    // Verify type mappings
    const typeOf = (name) => result.find((r) => r.filename === name)?.type;
    expect(typeOf("report.md")).toBe("Research Memo");
    expect(typeOf("figure.png")).toBe("Figure");
    expect(typeOf("photo.jpg")).toBe("Figure");
    expect(typeOf("snapshot.jpeg")).toBe("Figure");
    expect(typeOf("data.json")).toBe("Data");
    expect(typeOf("engine.py")).toBe("Script");
    expect(typeOf("protocol.docx")).toBe("Document");
    expect(typeOf("legacy.doc")).toBe("Document");
    expect(typeOf("dashboard.jsx")).toBe("Interface");
    expect(typeOf("archive.zip")).toBe("Archive");
  });

  it("returns each item with filename, ext, and type fields", async () => {
    fs.readdir.mockResolvedValue(["test.md"]);

    const result = await getResearchFiles();
    expect(result).toHaveLength(1);
    expect(result[0]).toEqual({
      filename: "test.md",
      ext: ".md",
      type: "Research Memo",
    });
  });

  it("returns empty array when docs folder is empty", async () => {
    fs.readdir.mockResolvedValue([]);

    const result = await getResearchFiles();
    expect(result).toEqual([]);
  });

  it("classifies unknown extensions as Archive", async () => {
    fs.readdir.mockResolvedValue(["data.csv", "readme.txt"]);

    const result = await getResearchFiles();
    expect(result.every((r) => r.type === "Archive")).toBe(true);
  });
});

// ---------------------------------------------------------------------------
// loadHDCureSystemMap — uses mocked fs.readFile
// ---------------------------------------------------------------------------
describe("loadHDCureSystemMap", () => {
  beforeEach(() => {
    vi.clearAllMocks();
  });

  it("reads and returns the system map file content", async () => {
    const mockContent = "# HD Cure System Map\nSome content here.";
    fs.readFile.mockResolvedValue(mockContent);

    const result = await loadHDCureSystemMap();
    expect(result).toBe(mockContent);
    expect(fs.readFile).toHaveBeenCalledWith(
      expect.stringContaining("6967_HD_CURE_COMPLETE_SYSTEM_MAP.md"),
      "utf8",
    );
  });

  it("propagates errors when file cannot be read", async () => {
    fs.readFile.mockRejectedValue(
      new Error("ENOENT: no such file or directory"),
    );

    await expect(loadHDCureSystemMap()).rejects.toThrow("ENOENT");
  });
});
