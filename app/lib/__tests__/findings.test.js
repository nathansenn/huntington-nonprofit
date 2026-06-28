import { describe, it, expect } from "vitest";
import { findings, impactTiers, openSciencePledge } from "../findings";
import { organizationLd, websiteLd, medicalWebPageLd, SITE_URL } from "../seo";

describe("research findings", () => {
  it("each finding has a summary, points, and valid sources", () => {
    expect(findings.length).toBeGreaterThan(0);
    for (const f of findings) {
      expect(f.slug).toMatch(/^[a-z0-9-]+$/);
      expect(f.title).toBeTruthy();
      expect(f.summary).toBeTruthy();
      expect(f.points.length).toBeGreaterThan(0);
      expect(f.sources.length).toBeGreaterThan(0);
      for (const s of f.sources) {
        expect(() => new URL(s.url)).not.toThrow();
      }
    }
  });

  it("never claims an approved cure or false certainty", () => {
    const blob = findings
      .flatMap((f) => [f.summary, ...f.points])
      .join(" ")
      .toLowerCase();
    expect(blob).not.toContain("mathematically proven");
    expect(blob).not.toContain("guaranteed cure");
    expect(blob).not.toContain("99.9");
  });
});

describe("donation impact (illustrative, not live)", () => {
  it("has labeled tiers and an open-science pledge", () => {
    expect(impactTiers.length).toBeGreaterThanOrEqual(3);
    for (const t of impactTiers) {
      expect(t.amount).toMatch(/\$/);
      expect(t.blurb).toBeTruthy();
    }
    expect(openSciencePledge.length).toBeGreaterThan(0);
  });
});

describe("structured data (SEO)", () => {
  it("builds valid Organization + WebSite JSON-LD", () => {
    const org = organizationLd();
    expect(org["@context"]).toBe("https://schema.org");
    expect(org.url).toBe(SITE_URL);
    expect(Array.isArray(org["@type"]) ? org["@type"] : [org["@type"]]).toContain("NGO");
    expect(websiteLd().url).toBe(SITE_URL);
  });

  it("medicalWebPage references HD and a canonical url", () => {
    const ld = medicalWebPageLd({ name: "X", description: "Y", path: "/science" });
    expect(ld["@type"]).toBe("MedicalWebPage");
    expect(ld.url).toBe(`${SITE_URL}/science`);
    expect(ld.about.name.toLowerCase()).toContain("huntington");
  });
});
