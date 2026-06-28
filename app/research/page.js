import Link from "next/link";
import JsonLd from "../components/JsonLd";
import { pageMeta, articleLd, breadcrumbLd, SITE_URL } from "../lib/seo";
import {
  findings,
  findingsMeta,
  impactTiers,
  openSciencePledge,
} from "../lib/findings";

export const metadata = pageMeta({
  title: "Research & Findings — Open Huntington's Disease Research",
  description:
    "We fund AI research models to study Huntington's disease and publish the findings openly for everyone. Plain-language, sourced, and free to reuse.",
  path: "/research",
  keywords: [
    "Huntington's disease research",
    "open science",
    "AI research",
    "HD clinical trials 2026",
    "huntingtin lowering",
  ],
});

function formatDate(iso) {
  return new Date(iso).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}

const steps = [
  {
    icon: "💛",
    title: "You give",
    body: "Donations (and our own time) fund the compute that powers continuous, automated HD research.",
  },
  {
    icon: "🤖",
    title: "AI models research",
    body: "Advanced AI research models read the latest literature, trials, and data, and draft clear, sourced summaries.",
  },
  {
    icon: "👤",
    title: "A human reviews",
    body: "Every finding is edited by a person, checked against primary sources, and labeled with its review status.",
  },
  {
    icon: "🌍",
    title: "Everyone benefits",
    body: "Findings are published here for free, in plain language, under an open license anyone can reuse.",
  },
];

export default function ResearchPage() {
  return (
    <>
      <JsonLd
        data={[
          breadcrumbLd([
            { name: "Home", path: "/" },
            { name: "Research & Findings", path: "/research" },
          ]),
          ...findings.map((f) =>
            articleLd({
              headline: f.title,
              description: f.summary,
              path: `/research#${f.slug}`,
              datePublished: f.date,
            }),
          ),
          {
            "@context": "https://schema.org",
            "@type": "CollectionPage",
            name: "Research & Findings",
            url: `${SITE_URL}/research`,
            description:
              "Open, AI-assisted, human-reviewed Huntington's disease research findings.",
          },
        ]}
      />

      <section className="section section-tight" style={{ background: "var(--paper-soft)" }}>
        <div className="container">
          <p className="eyebrow">Open research</p>
          <h1>Research that belongs to everyone</h1>
          <p className="lead prose">
            We use advanced AI research models to continuously study Huntington&rsquo;s disease &mdash;
            and we publish what we find <strong>openly, for free, in plain language</strong>. No
            paywalls, no hype. Just honest, sourced summaries that any family, caregiver, clinician, or
            researcher can read and reuse.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="section-head">
            <h2>How it works</h2>
            <p className="lead">A simple loop: fund the research, review it honestly, give it away.</p>
          </div>
          <div className="grid grid-4">
            {steps.map((s) => (
              <article className="card" key={s.title}>
                <div className="card-icon" aria-hidden="true">{s.icon}</div>
                <h3>{s.title}</h3>
                <p>{s.body}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section" style={{ background: "var(--paper-soft)" }}>
        <div className="container">
          <div className="grid grid-2" style={{ alignItems: "start", gap: "40px" }}>
            <div>
              <p className="eyebrow">Your impact</p>
              <h2 className="mt-0">What a donation powers</h2>
              <p>
                Because this research runs on AI compute, we can show you roughly what different gifts
                support. The tiers below are <strong>illustrative estimates</strong> tied to real 2026
                AI-research costs &mdash; a way to picture the scale, not a promise of any specific
                result.
              </p>
              <div className="grid grid-2" style={{ gap: "16px", marginTop: "20px" }}>
                {impactTiers.map((t) => (
                  <article className="card" key={t.name} style={{ padding: "20px" }}>
                    <strong style={{ fontSize: "1.5rem", color: "var(--brand-deep)" }}>{t.amount}</strong>
                    <div style={{ fontWeight: 700, marginBottom: "6px" }}>{t.name}</div>
                    <p className="mb-0" style={{ fontSize: "0.92rem" }}>{t.blurb}</p>
                  </article>
                ))}
              </div>
            </div>
            <aside>
              <div className="callout note" style={{ marginBottom: "18px" }}>
                <span className="callout-icon" aria-hidden="true">🚧</span>
                <p>
                  <strong>Donations aren&rsquo;t live yet.</strong> We&rsquo;re a brand-new
                  organization still setting up accounts and nonprofit status. Any donation amounts
                  shown are a <strong>preview</strong> &mdash; no money is being collected. We&rsquo;ll
                  publish our real costs and our 501(c)(3) details once everything is in place.
                </p>
              </div>
              <div className="card">
                <h3 style={{ marginTop: 0 }}>Our open-science pledge</h3>
                <ul className="list-check" style={{ marginBottom: 0 }}>
                  {openSciencePledge.map((p) => (
                    <li key={p}>{p}</li>
                  ))}
                </ul>
              </div>
            </aside>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="section-head">
            <p className="eyebrow">Latest findings</p>
            <h2>What we&rsquo;re learning</h2>
            <p className="lead">
              Open summaries of the HD research landscape, updated as the science moves. Each is dated
              and cites its sources so you can check the work.
            </p>
          </div>

          <div className="callout info" style={{ marginBottom: "30px" }}>
            <span className="callout-icon" aria-hidden="true">ℹ️</span>
            <p>
              <strong>About these findings.</strong> {findingsMeta.method} They are{" "}
              <strong>not medical advice</strong> and describe investigational research, not approved
              cures. Status: <em>{findingsMeta.reviewState}</em> License: {findingsMeta.license}
            </p>
          </div>

          <div className="grid" style={{ gap: "26px" }}>
            {findings.map((f) => (
              <article key={f.slug} id={f.slug} className="program" style={{ scrollMarginTop: "90px" }}>
                <div style={{ display: "flex", flexWrap: "wrap", gap: "10px", alignItems: "center", marginBottom: "10px" }}>
                  {f.tags.map((t) => (
                    <span key={t} className="tag tag-trial">{t}</span>
                  ))}
                  <span className="muted" style={{ fontSize: "0.85rem", marginLeft: "auto" }}>
                    {formatDate(f.date)}
                  </span>
                </div>
                <h3 style={{ marginTop: 0 }}>{f.title}</h3>
                <p style={{ color: "var(--ink-soft)" }}>{f.summary}</p>
                <h4 style={{ margin: "14px 0 8px" }}>What we found</h4>
                <ul style={{ margin: "0 0 14px", paddingLeft: "20px", color: "var(--ink-soft)" }}>
                  {f.points.map((p, i) => (
                    <li key={i} style={{ marginBottom: "8px" }}>{p}</li>
                  ))}
                </ul>
                <details>
                  <summary style={{ cursor: "pointer", fontWeight: 600, color: "var(--brand)" }}>
                    Sources ({f.sources.length})
                  </summary>
                  <ol className="sources" style={{ marginTop: "10px" }}>
                    {f.sources.map((s) => (
                      <li key={s.url}>
                        {s.text}{" "}
                        <a href={s.url} target="_blank" rel="noopener noreferrer">Link</a>
                      </li>
                    ))}
                  </ol>
                </details>
                <p className="muted" style={{ fontSize: "0.82rem", marginTop: "14px", marginBottom: 0 }}>
                  🤖 AI-assisted &middot; 👤 human-edited &middot; preliminary, not clinical advice &middot; CC BY 4.0
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section band">
        <div className="container center">
          <h2>Open research, for every family.</h2>
          <p className="lead" style={{ color: "rgba(255,255,255,0.9)", maxWidth: "46ch", margin: "0 auto 24px" }}>
            Help us keep the research running — and keep giving it away.
          </p>
          <div className="btn-row" style={{ justifyContent: "center" }}>
            <Link href="/get-involved" className="btn btn-accent btn-lg">Get involved</Link>
            <Link href="/science" className="btn btn-ghost btn-lg">Read the science</Link>
          </div>
        </div>
      </section>
    </>
  );
}
