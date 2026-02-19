import PortalHeader from "../components/PortalHeader";
import { extractSection, loadHDCureSystemMap } from "../lib/hdcureData";

export default async function AboutStoryPage() {
  const systemMap = await loadHDCureSystemMap();

  const riskProfileSection = extractSection(
    systemMap,
    "## 7. MODEL 4: CONNOR BAYESIAN RISK PROFILE",
    "## 8. THE SIX VECTORS OF ATTACK",
  );

  const timelineSection = extractSection(
    systemMap,
    "### 12.1 Connor's Window",
    "### 12.2 Critical Milestones",
  );

  const protocolStart = extractSection(
    systemMap,
    "## 15. THE CONNOR PROTOCOL: COMPLETE INTERVENTION PLAN",
    "## 16. THE FORMAL MATHEMATICAL PROOF",
  );

  return (
    <div className="page">
      <PortalHeader />
      <main className="container">
        <section className="section panel">
          <p className="crumb">Family story</p>
          <h1>Connor Story + Family Risk Profile</h1>
          <p className="lead">
            This page publishes Connor-centered risk framing, timeline planning, and intervention
            protocols from the master HD CURE map.
          </p>
        </section>

        <section className="section split-visuals">
          <article className="panel">
            <h2>Risk Profile</h2>
            <p>
              Bayesian risk profile with transmission assumptions, onset modeling, and therapeutic
              probabilities for favorable outcomes.
            </p>
            <div className="figure-card">
              <img
                src="/assets/research/fig02-connor-risk-profile.png"
                alt="Connor Bayesian risk profile"
              />
            </div>
            <div className="markdown-sheet small">
              <pre>{riskProfileSection}</pre>
            </div>
          </article>

          <article className="panel">
            <h2>Timeline</h2>
            <p>
              Intervention planning from age 10 through autonomy milestones and therapy access
              pathways.
            </p>
            <div className="figure-card">
              <img src="/assets/research/fig04-connor-timeline.png" alt="Connor intervention timeline" />
            </div>
            <div className="markdown-sheet small">
              <pre>{timelineSection}</pre>
            </div>
          </article>
        </section>

        <section className="section panel">
          <h2>Protocol Plan (Full)</h2>
          <p className="lead">
            Connor-specific intervention phases are kept as the same timeline used in the source system
            map.
          </p>
          <div className="markdown-sheet">
            <pre>{protocolStart}</pre>
          </div>
        </section>
      </main>
    </div>
  );
}
