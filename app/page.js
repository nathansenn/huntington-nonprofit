import GenomicMap from "./components/GenomicMap";
import HashLedger from "./components/HashLedger";
import KnowledgePedestals from "./components/KnowledgePedestals";
import PortalHeader from "./components/PortalHeader";
import CureHelixCanvas from "./components/CureHelixCanvas";

const researchLines = [
  {
    title: "HD CURE Protocol",
    summary:
      "Computational pathology, onset forecasting, multi-vector therapeutic modeling, and Bayesian risk workflow aligned to pediatric safety.",
    status: "Active",
    artifacts: [
      "Master Engine (modeling + sensitivity): 7006_doc.py",
      "Pathogenesis and risk references",
      "Dashboard visualizations in React",
    ],
  },
  {
    title: "ShedAi 3D Builder R&D",
    summary:
      "AI-led 3D design and pricing system for sheds, including style validation, sizing logic, and conversational sales tooling.",
    status: "Active",
    artifacts: ["Pricing pipeline", "Style/size/option pricing graph", "3D interaction layer"],
  },
  {
    title: "Pattern of Mind Framework",
    summary:
      "11-stage cognitive architecture for safer AI reasoning: Receive, Decompose, Classify, Scope, Retrieve, Verify, Synthesize, Evaluate, Communicate, Reflect.",
    status: "Active",
    artifacts: ["Stage maps and specs", "Operationalized checklists", "Human-in-loop validation"],
  },
  {
    title: "Memory Palace / Creative Logic",
    summary:
      "3D node-based memory systems and visual logic worlds for institutional knowledge, long-term retrieval, and skill synthesis.",
    status: "Experimental",
    artifacts: ["Skills map", "Skill graph nodes", "Spatial learning layers"],
  },
  {
    title: "Ordered Light Framework",
    summary:
      "Knowledge architecture for domain mapping, source authority hierarchy, and reproducible synthesis pathways.",
    status: "Active",
    artifacts: ["Process schematics", "Source quality scoring", "Review protocol"],
  },
  {
    title: "Clinical Support Platform",
    summary:
      "Family access tools, care navigation, sibling support materials, and transparent outcome reporting.",
    status: "Active",
    artifacts: ["Resource mapping", "Support referral pathways", "Quarterly impact reporting"],
  },
];

const orderedLightPedestals = [
  {
    title: "Knowledge Pedestals",
    description: "Model capsules for HD Master Engine components and evidence packets.",
    status: "Active",
  },
  {
    title: "Somatic Expansion Kinetics",
    description: "Age-to-threshold trajectories with configurable simulation controls.",
    status: "In Progress",
  },
  {
    title: "Risk Profile Engine",
    description: "Bayesian profile cards for family-level scenario planning.",
    status: "Active",
  },
  {
    title: "Therapeutic Pathways",
    description: "Decision surface views with intervention and safety metadata.",
    status: "Experimental",
  },
];

const metrics = [
  { value: "100+", label: "Research assets cataloged" },
  { value: "6+", label: "Core development lanes" },
  { value: "11", label: "Reasoning stages operationalized" },
];

export default function Home() {
  return (
    <div className="page">
      <PortalHeader />

      <main className="container lab-main">
        <section className="section panel lab-hero">
          <div className="lab-hero-grid">
            <div className="hero-copy">
              <span className="lab-badge">SENN Family Science Lab</span>
              <span className="chip">Non-profit + R&D mission</span>
              <h2>
                Fighting Huntington’s through direct family support and transparent, reproducible research.
              </h2>
              <p>
                We combine compassionate care with engineering discipline. Every initiative must move both support
                and science forward with measurable output, open evidence, and family-first outcomes.
              </p>
              <div className="cta">
                <a href="#support">Support a Family</a>
                <a href="#research">Explore R&D</a>
                <a href="/science">Science Hub</a>
                <a href="/rd">R&amp;D Archive</a>
                <a href="/projects">Project Map</a>
                <a href="/about">Connor Story</a>
              </div>
            </div>
            <div className="lab-canvas-shell">
              <CureHelixCanvas />
            </div>
          </div>
          <div className="proof">
            <div className="proof-copy">
              <h4>Proof of Hope</h4>
              <p>
                Six therapeutic vectors are modeled as active blockers in the HD pathway.
                Visual pathways are mapped in a live lab workflow designed for investor, family,
                and patient trust.
              </p>
            </div>
            <div className="proof-cascade">
              {proof.map((entry) => (
                <div key={entry} className="light-badge">
                  {entry}
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="grid section lab-metrics">
          {metrics.map((metric) => (
            <article key={metric.label} className="metric panel">
              <strong>{metric.value}</strong>
              <span>{metric.label}</span>
            </article>
          ))}
        </section>

        <section id="research" className="section panel lab-stream">
          <h2>R&D Portfolio (Active and Ongoing)</h2>
          <p className="lead">
            We include every core project in this portal: biomedical, AI, and memory systems.
          </p>
          <div className="research-grid">
            {researchLines.map((project) => (
              <article key={project.title} className="panel card">
                <div className={`status ${project.status.toLowerCase().replace(/\s+/g, "-")}`}>
                  {project.status}
                </div>
                <h3>{project.title}</h3>
                <p>{project.summary}</p>
                <ul>
                  {project.artifacts.map((artifact) => (
                    <li key={artifact}>{artifact}</li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </section>

        <section id="ordered-light" className="section panel">
          <h2>Ordered Light Frontend</h2>
          <p className="lead">
            Ordered Light development tracks are now mapped to the homepage for real navigation and direct visibility.
          </p>
          <KnowledgePedestals items={orderedLightPedestals} />
          <div className="ordered-light-grid">
            <GenomicMap />
            <HashLedger />
          </div>
        </section>

        <section className="section split lab-split">
          <article className="panel">
            <h2>How donations are used</h2>
            <ul>
              <li>Family navigation and education support in real time.</li>
              <li>Modeling and validation work for pediatric Huntington pathways.</li>
              <li>Open tooling for transparent progress and measurable outputs.</li>
            </ul>
          </article>
          <article className="panel" id="support">
            <h2>Get involved</h2>
            <p>
              Families, clinicians, and researchers can collaborate through direct support channels.
              This is a living system: updates are published, impact is tracked, and decisions are data-backed.
            </p>
            <div className="actions">
              <a href="mailto:familysupport@huntingtonhope.org">Contact Family Support</a>
              <a href="mailto:research@huntingtonhope.org">Partner on Research</a>
            </div>
          </article>
        </section>
      </main>
    </div>
  );
}

const proof = [
  "Molecular modeling in production",
  "Real-time pathway scoring",
  "Open artifact hash trail",
  "Direct family impact channels",
  "No-profit workflow + traceability",
  "7/24 family-first response",
];
