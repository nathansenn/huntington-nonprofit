import Link from "next/link";
import PortalHeader from "../components/PortalHeader";
import { extractSection, getResearchFiles, loadHDCureSystemMap } from "../lib/hdcureData";

export default async function RAndDPage() {
  const [systemMap, researchFiles] = await Promise.all([
    loadHDCureSystemMap(),
    getResearchFiles(),
  ]);

  const executiveSection = extractSection(
    systemMap,
    "## 1. EXECUTIVE SUMMARY",
    "## 2. THE DISEASE: WHAT HD ACTUALLY IS",
  );

  return (
    <div className="page">
      <PortalHeader />
      <main className="container">
        <section className="section panel">
          <p className="crumb">Research portal</p>
          <h1>R&amp;D Archive: HD CURE + Platform Operations</h1>
          <p className="lead">
            This section is sourced directly from local research documentation and reflects all
            development assets present in the nonprofit repository.
          </p>
          <div className="cta">
            <a href="/science">View Science Hub</a>
            <a href="/about">View Connor Story</a>
          </div>
        </section>

        <section className="section panel">
          <h2>Source Artifact Inventory</h2>
          <p className="lead">
            Every file in <strong>docs/</strong> is included for traceability and reproducibility.
          </p>
          <div className="research-file-grid">
            {researchFiles.map((file) => (
              <article key={file.filename} className="research-file-row">
                <span className="badge">{file.type}</span>
                <span>{file.filename}</span>
              </article>
            ))}
          </div>
        </section>

        <section className="section panel">
          <h2>Complete System Map (Primary Source)</h2>
          <p className="lead">
            Full protocol document rendered directly from{" "}
            <code>HD_CURE_COMPLETE_SYSTEM_MAP.md</code> to preserve the original scientific
            language and all calculations.
          </p>
          <div className="markdown-sheet">
            <pre>{systemMap}</pre>
          </div>
        </section>

        <section className="section panel">
          <h2>Executive Summary Snapshot</h2>
          <div className="markdown-sheet">
            <pre>{executiveSection}</pre>
          </div>
        </section>

        <section className="section panel">
          <h2>Related Work</h2>
          <div className="split-links">
            <Link href="/">Return to homepage</Link>
            <Link href="/science">View science visuals</Link>
            <Link href="/about">Open Connor timeline</Link>
          </div>
        </section>
      </main>
    </div>
  );
}
