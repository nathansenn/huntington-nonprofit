import { describe, it, expect } from "vitest";
import {
  therapeuticPrograms,
  resources,
  sources,
  statusTagClass,
} from "../content";

describe("therapeutic programs", () => {
  it("lists programs with the required fields", () => {
    expect(therapeuticPrograms.length).toBeGreaterThan(0);
    for (const p of therapeuticPrograms) {
      expect(p.name).toBeTruthy();
      expect(p.sponsor).toBeTruthy();
      expect(p.statusLabel).toBeTruthy();
      expect(statusTagClass[p.status]).toBeTruthy();
    }
  });

  it("never claims an approved cure or false certainty", () => {
    const blob = therapeuticPrograms
      .map((p) => `${p.statusLabel} ${p.approach} ${p.detail}`)
      .join(" ")
      .toLowerCase();
    expect(blob).not.toContain("cure");
    expect(blob).not.toContain("mathematically proven");
    expect(blob).not.toContain("guaranteed");
    expect(blob).not.toContain("99.9");
  });
});

describe("resources", () => {
  it("provides real, linkable organizations", () => {
    expect(resources.length).toBeGreaterThanOrEqual(4);
    for (const r of resources) {
      expect(r.name).toBeTruthy();
      expect(r.description).toBeTruthy();
      expect(() => new URL(r.url)).not.toThrow();
    }
  });
});

describe("sources", () => {
  it("backs claims with valid source links", () => {
    expect(sources.length).toBeGreaterThan(0);
    for (const s of sources) {
      expect(s.text).toBeTruthy();
      expect(() => new URL(s.url)).not.toThrow();
    }
  });
});
