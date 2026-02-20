import Link from "next/link";
import PortalHeader from "../components/PortalHeader";
import { getProjectMemoryMap } from "../lib/hdcureData";

export const metadata = {
  title: "Project Memory Map -- Huntington Hope Platform",
  description:
    "Traceable map of code modules, research artifacts, and git provenance for the HD CURE nonprofit website.",
};

export const dynamic = "force-dynamic";

function formatDate(value) {
  if (!value) return "N/A";
  return new Date(value).toLocaleString("en-US", {
    year: "numeric",
    month: "short",
    day: "2-digit",
    hour: "numeric",
    minute: "2-digit",
    timeZoneName: "short",
  });
}

export default async function ProjectMemoryMapPage() {
  const map = await getProjectMemoryMap();

  return (
    <div className="page">
      <PortalHeader />
      <main className="container lab-main">
        <section className="section panel lab-stream">
          <p className="crumb">Repository Memory Map</p>
          <h1>Project Map: HD CURE Nonprofit + Platform</h1>
          <p className="lead">
            Every source artifact is traced to a commit hash and grouped into a living map for
            reproducible research and development ownership.
          </p>
          <div className="split-links">
            <span>
              Git branch: <strong>{map.branch}</strong>
            </span>
            <span>
              Head SHA: <strong>{map.rootCommit}</strong>
            </span>
            <span>Last artifact update: {formatDate(map.totals.lastUpdated)}</span>
          </div>
          <div className="section split project-summaries">
            <article className="panel">
              <strong>Source Modules</strong>
              <p>{map.totals.files}</p>
            </article>
            <article className="panel">
              <strong>Code lines</strong>
              <p>{map.totals.lines}</p>
            </article>
            <article className="panel">
              <strong>Functions detected</strong>
              <p>{map.totals.functions}</p>
            </article>
            <article className="panel">
              <strong>Research artifacts</strong>
              <p>{map.totals.researchFiles}</p>
            </article>
            <article className="panel">
              <strong>Top function modules</strong>
              <p>{map.topFunctionModules.length}</p>
            </article>
            <article className="panel">
              <a href="#artifact-inventory">Jump to source inventory</a>
            </article>
          </div>
        </section>

        <section className="section panel lab-pod">
          <h2>Top function-heavy modules</h2>
          <p className="lead">Highest function density modules in this repository.</p>
          <div className="research-file-grid">
            {map.topFunctionModules.map((item) => (
              <article key={item.path} className="research-file-row">
                <span className="badge">{item.type}</span>
                <span>{item.path}</span>
                <span>{item.functions} functions</span>
              </article>
            ))}
          </div>
        </section>

        <section id="artifact-inventory" className="section panel lab-pod">
          <h2>Source inventory</h2>
          <p className="lead">
            Live scan of JavaScript/TypeScript modules and their most recent commit touchpoint.
          </p>
          <div className="project-table">
            <div className="project-table-head">
              <span>Path</span>
              <span>Type</span>
              <span>Lines</span>
              <span>Functions</span>
              <span>Commit</span>
              <span>Updated</span>
            </div>
            {map.artifacts.map((item) => (
              <div key={`${item.path}-${item.hash}`} className="project-table-row">
                <span className="mono">{item.path}</span>
                <span>{item.type}</span>
                <span>{item.lines}</span>
                <span>{item.functions}</span>
                <span>{item.lastCommitShort}</span>
                <span>{formatDate(item.lastUpdated)}</span>
              </div>
            ))}
          </div>
        </section>

        <section className="section panel lab-pod">
          <h2>Research artifact digest</h2>
          <p className="lead">
            Documents in <code>docs/</code> with hash-trace and latest commit metadata.
          </p>
          <div className="research-file-grid">
            {map.researchFiles.map((file) => (
              <article key={file.filename} className="research-file-row">
                <span className="badge">{file.type}</span>
                <span>{file.filename}</span>
                <span>{file.shortCommit}</span>
                <span className="project-date">{formatDate(file.updated)}</span>
              </article>
            ))}
          </div>
        </section>

        <section className="section split-links">
          <Link href="/">Home</Link>
          <Link href="/rd">R&amp;D Archive</Link>
          <Link href="/science">Science</Link>
          <Link href="/about">Connor Story</Link>
        </section>
      </main>
    </div>
  );
}
