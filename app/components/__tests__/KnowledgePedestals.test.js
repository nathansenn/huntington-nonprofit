import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import KnowledgePedestals from "../KnowledgePedestals.js";

const sampleItems = [
  {
    title: "Pathogenesis Model",
    description: "Full cascade model of HD progression.",
    status: "Active",
  },
  {
    title: "Biomarker Engine",
    description: "Multi-analyte tracking system.",
    status: "In Review",
  },
  {
    title: "Gene Silencing",
    description: "ASO and RNAi targeting strategies.",
    status: "Draft",
  },
];

describe("KnowledgePedestals", () => {
  it("renders the section heading", () => {
    render(<KnowledgePedestals items={sampleItems} />);
    expect(screen.getByRole("heading", { level: 3 })).toHaveTextContent(
      "Interactive R&D Library",
    );
  });

  it("renders the lead paragraph", () => {
    render(<KnowledgePedestals items={sampleItems} />);
    expect(screen.getByText(/3D-ready information nodes/)).toBeInTheDocument();
  });

  it("renders all provided items", () => {
    render(<KnowledgePedestals items={sampleItems} />);
    expect(screen.getAllByRole("article")).toHaveLength(3);
  });

  it("displays title, description, and status for each item", () => {
    render(<KnowledgePedestals items={sampleItems} />);

    for (const item of sampleItems) {
      expect(screen.getByText(item.title)).toBeInTheDocument();
      expect(screen.getByText(item.description)).toBeInTheDocument();
      expect(screen.getByText(item.status)).toBeInTheDocument();
    }
  });

  it("generates correct CSS class from status with spaces", () => {
    render(<KnowledgePedestals items={sampleItems} />);
    const articles = screen.getAllByRole("article");

    // "In Review" should become "in-review" class on the light-bar div
    const inReviewArticle = articles[1];
    const lightBar = inReviewArticle.querySelector(".light-bar");
    expect(lightBar).toHaveClass("in-review");
  });

  it("generates lowercase CSS class from single-word status", () => {
    render(<KnowledgePedestals items={sampleItems} />);
    const articles = screen.getAllByRole("article");

    // "Active" should become "active" class
    const activeArticle = articles[0];
    const lightBar = activeArticle.querySelector(".light-bar");
    expect(lightBar).toHaveClass("active");

    // "Draft" should become "draft" class
    const draftArticle = articles[2];
    const draftLightBar = draftArticle.querySelector(".light-bar");
    expect(draftLightBar).toHaveClass("draft");
  });

  it("renders the outer section with correct class names", () => {
    const { container } = render(<KnowledgePedestals items={sampleItems} />);
    const section = container.querySelector("section");
    expect(section).toHaveClass("panel");
    expect(section).toHaveClass("pedestals");
  });

  it("renders the pedestal-grid container", () => {
    const { container } = render(<KnowledgePedestals items={sampleItems} />);
    expect(container.querySelector(".pedestal-grid")).toBeInTheDocument();
  });

  it("renders each article with the pedestal class", () => {
    render(<KnowledgePedestals items={sampleItems} />);
    const articles = screen.getAllByRole("article");
    for (const article of articles) {
      expect(article).toHaveClass("pedestal");
    }
  });

  it("renders nothing in the grid when items is empty", () => {
    const { container } = render(<KnowledgePedestals items={[]} />);
    const grid = container.querySelector(".pedestal-grid");
    expect(grid).toBeInTheDocument();
    expect(grid.children).toHaveLength(0);
  });

  it("renders a single item correctly", () => {
    const single = [
      {
        title: "Solo Node",
        description: "Only item in the list.",
        status: "Complete",
      },
    ];
    render(<KnowledgePedestals items={single} />);
    expect(screen.getAllByRole("article")).toHaveLength(1);
    expect(screen.getByText("Solo Node")).toBeInTheDocument();
    expect(screen.getByText("Complete")).toBeInTheDocument();
  });
});
