import PortalHeader from "../components/PortalHeader";
import { extractSection, loadHDCureSystemMap } from "../lib/hdcureData";

export default async function SciencePage() {
  const systemMap = await loadHDCureSystemMap();

  const cascadeSection = extractSection(
    systemMap,
    "## 14. COMPLETE PATHOGENESIS CASCADE MAP",
    "## 15. THE CONNOR PROTOCOL: COMPLETE INTERVENTION PLAN",
  );

  const proofSection = extractSection(
    systemMap,
    "## 16. THE FORMAL MATHEMATICAL PROOF",
    "## 17. UPDATED REGULATORY LANDSCAPE (FEBRUARY 2026)",
  );

  const synergySection = extractSection(
    systemMap,
    "## 9. MODEL 5: MULTI-VECTOR THERAPEUTIC SYNERGY",
    "## 10. MODEL 6: CURE TIMELINE MONTE CARLO",
  );

  return (
    <div className="page">
      <PortalHeader />
      <main className="container">
        <section className="section panel">
          <p className="crumb">Science hub</p>
          <h1>Science and Evidence</h1>
          <p className="lead">
            The science section includes the complete pathogenesis map and mathematical proof material
            from the local complete system map.
          </p>
        </section>

        <section className="section grid section-stacked">
          <article className="panel">
            <h2>Pathogenesis Cascade</h2>
            <p>
              The disease progression model maps six levels of mechanism. The full cascade figure is
              included here with the extracted text block from the protocol.
            </p>
            <div className="figure-card">
              <img
                src="/assets/research/fig06-pathogenesis-cascade.png"
                alt="HD pathogenesis cascade map"
              />
            </div>
            <div className="markdown-sheet small">
              <pre>{cascadeSection}</pre>
            </div>
          </article>

          <article className="panel">
            <h2>Mathematical Proof</h2>
            <p>
              The formal proof package includes deductive logic, causal chain analysis, and verified
              quantitative calculations.
            </p>
            <div className="figure-card">
              <img
                src="/assets/research/fig07-mathematical-proof.png"
                alt="Mathematical proof summary"
              />
            </div>
            <div className="markdown-sheet small">
              <pre>{proofSection}</pre>
            </div>
          </article>
        </section>

        <section className="section panel">
          <h2>Multi-Vector Synergy Model Snapshot</h2>
          <p className="lead">
            This section tracks the 6-vector combination framework and the reported 99.97% blocked
            outcome in the source map.
          </p>
          <div className="markdown-sheet">
            <pre>{synergySection}</pre>
          </div>
        </section>
      </main>
    </div>
  );
}
