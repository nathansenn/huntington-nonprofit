import Link from "next/link";
import { therapeuticPrograms, sources, statusTagClass } from "../lib/content";

export const metadata = {
  title: "The Science — Huntington's disease, explained honestly",
  description:
    "A plain-language, sourced guide to Huntington's disease: what it is, the somatic-expansion discovery that reshaped the field, and the therapies now in clinical trials. No false promises.",
};

const repeatRanges = [
  { range: "26 or fewer", label: "Typical", note: "Not associated with HD." },
  { range: "27 – 35", label: "Intermediate", note: "Usually no symptoms, but the repeat can expand into the disease range in the next generation." },
  { range: "36 – 39", label: "Reduced penetrance", note: "May or may not cause symptoms, often later in life." },
  { range: "40 or more", label: "Full penetrance", note: "Associated with HD; longer repeats tend to mean earlier onset." },
];

const mechanism = [
  {
    title: "An inherited repeat",
    body: "Everyone has the HTT gene. In HD, one copy carries an over-long run of a three-letter DNA sequence (CAG). The longer that run, the earlier symptoms tend to begin.",
  },
  {
    title: "It keeps growing — inside neurons",
    body: "For decades, scientists focused on the inherited length. We now know the repeat continues to expand over a lifetime inside vulnerable brain cells, a process called somatic expansion.",
  },
  {
    title: "A tipping point",
    body: "A 2025 single-cell study found that affected neurons may stay relatively healthy until the repeat grows past roughly 150 copies — after which the cell begins to malfunction. This threshold is promising but comes from one study and is still being confirmed.",
  },
  {
    title: "A new place to intervene",
    body: "If the disease is driven by ongoing expansion, then slowing that expansion — alongside lowering the harmful protein — becomes a powerful new strategy. That insight is reshaping HD drug development.",
  },
];

export default function SciencePage() {
  return (
    <>
      <section className="section section-tight" style={{ background: "var(--paper-soft)" }}>
        <div className="container">
          <p className="eyebrow">The science</p>
          <h1>Huntington&rsquo;s disease, explained honestly</h1>
          <p className="lead prose">
            Here is what is actually known about HD and the therapies being developed to fight it —
            in plain language, drawn from peer-reviewed research and primary sources. We&rsquo;re
            careful to separate what is <strong>proven</strong>, what is <strong>promising</strong>,
            and what is still <strong>uncertain</strong>.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="section-head">
            <h2>What Huntington&rsquo;s disease is</h2>
            <p className="lead">
              HD is a rare, inherited, progressive brain disease. It gradually affects movement,
              thinking, and mood, usually beginning in adulthood.
            </p>
          </div>
          <div className="grid grid-2" style={{ alignItems: "start", gap: "40px" }}>
            <div className="prose">
              <p>
                HD is caused by a change in a single gene, called <em>HTT</em>, on chromosome 4.
                Within that gene is a short DNA sequence — the letters C-A-G — that normally repeats a
                modest number of times. In Huntington&rsquo;s, that repeat is too long.
              </p>
              <p>
                HD is <strong>autosomal dominant</strong>: a person needs only one altered copy of the
                gene to be affected, and each of their children has a <strong>50% chance</strong> of
                inheriting it. The repeat can also grow slightly from one generation to the next — a
                phenomenon called anticipation — which is why some forms appear earlier in later
                generations. A rare, more aggressive juvenile form (symptoms before age 20) is usually
                linked to very long repeats, often more than 55 — though that is a tendency
                rather than a rule, and it is most often inherited from an affected father.
              </p>
              <p>
                Symptoms vary widely, but commonly include involuntary movements (chorea), changes in
                thinking and planning, and mood or psychiatric changes. Onset and progression differ
                from person to person — even with the same repeat length.
              </p>
            </div>
            <div className="card">
              <h3 style={{ marginTop: 0 }}>CAG repeat length &amp; risk</h3>
              <p className="muted" style={{ fontSize: "0.92rem" }}>
                A genetic test counts the CAG repeats in the HTT gene. The ranges below reflect current
                clinical guidance.
              </p>
              <div className="timeline" style={{ marginTop: "8px" }}>
                <ul style={{ listStyle: "none", margin: 0, padding: 0 }}>
                  {repeatRanges.map((r) => (
                    <li key={r.range} style={{ marginBottom: "14px" }}>
                      <strong>
                        {r.range} repeats — {r.label}
                      </strong>
                      <span style={{ color: "var(--ink-soft)", fontSize: "0.92rem", fontWeight: 400, textTransform: "none", letterSpacing: 0 }}>
                        {r.note}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section" style={{ background: "var(--paper-soft)" }}>
        <div className="container">
          <div className="section-head">
            <p className="eyebrow">The discovery that changed the field</p>
            <h2>Huntington&rsquo;s isn&rsquo;t static — and that is good news</h2>
            <p className="lead">
              For years HD looked like a fixed sentence written at birth. Recent research tells a more
              hopeful story: the disease unfolds through a process that may be slowed.
            </p>
          </div>
          <div className="steps">
            {mechanism.map((m) => (
              <div className="step" key={m.title}>
                <span className="num" aria-hidden="true" />
                <div>
                  <h4>{m.title}</h4>
                  <p>{m.body}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="callout info" style={{ marginTop: "28px" }}>
            <span className="callout-icon" aria-hidden="true">🧬</span>
            <p>
              Large studies of HD families (the GeM-HD consortium) found that DNA-repair genes
              strongly influence when symptoms begin — independent of the inherited repeat length.
              One, the mismatch-repair gene <strong>MSH3</strong>, speeds the repeat&rsquo;s growth
              and tends to bring symptoms earlier; another, <strong>FAN1</strong>, does the opposite,
              slowing that growth and delaying onset. That&rsquo;s strong evidence that the{" "}
              <em>speed of expansion</em> — not just the inherited length — shapes the disease, and
              points to it as a target worth pursuing.
            </p>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="section-head">
            <h2>Therapies in development</h2>
            <p className="lead">
              Several approaches are being tested. None is an approved cure, and most are still in
              trials — but a real pipeline of treatments aimed at the biology of HD, not just its
              symptoms, is now being studied in patients, with several showing encouraging early
              results.
            </p>
          </div>
          <div className="grid grid-2">
            {therapeuticPrograms.map((p) => (
              <article className="program" key={p.name}>
                <div className="program-head">
                  <h3>{p.name}</h3>
                  <span className={`tag ${statusTagClass[p.status]}`}>{p.statusLabel}</span>
                </div>
                <p className="sponsor">{p.sponsor}</p>
                <p style={{ marginBottom: "12px", fontWeight: 600, color: "var(--ink)" }}>{p.approach}</p>
                <p>{p.detail}</p>
              </article>
            ))}
          </div>
          <p className="muted" style={{ fontSize: "0.88rem", marginTop: "18px" }}>
            Clinical timelines and trial results change frequently. Treatment decisions should always
            be made with an HD specialist. Ask your care team about{" "}
            <a href="https://www.enroll-hd.org/" target="_blank" rel="noopener noreferrer">
              Enroll-HD
            </a>{" "}
            and current trials.
          </p>
        </div>
      </section>

      <section className="section" style={{ background: "var(--paper-soft)" }}>
        <div className="container">
          <div className="section-head">
            <p className="eyebrow">Straight talk</p>
            <h2>What&rsquo;s proven, and what isn&rsquo;t</h2>
            <p className="lead">
              You&rsquo;ll see bold claims about HD online. Here is an honest scorecard, so you can tell
              real progress from hype.
            </p>
          </div>
          <div className="grid grid-2">
            <div className="callout note">
              <span className="callout-icon" aria-hidden="true">✅</span>
              <p>
                <strong>Real and encouraging.</strong> AMT-130&rsquo;s Phase I/II showed a 75% slowing
                of clinical decline at 36 months (p=0.003) versus a matched external comparison group,
                and its maker has announced plans to file for U.S. accelerated approval around late
                2026. Genuine progress on the underlying disease — though still from a small,
                early-stage study.
              </p>
            </div>
            <div className="callout note">
              <span className="callout-icon" aria-hidden="true">⚠️</span>
              <p>
                <strong>Promising but early.</strong> A lab model predicted that reducing the MSH3
                protein by ~83% would halt further CAG expansion — but that was in HD neurons grown in
                a dish, not in people, and no MSH3 therapy has yet entered human trials. &ldquo;Halt&rdquo;
                means stop further growth, not reverse it.
              </p>
            </div>
            <div className="callout info">
              <span className="callout-icon" aria-hidden="true">🔍</span>
              <p>
                <strong>Needs confirmation.</strong> The idea that neurons fail past ~150 CAG repeats
                comes from one important 2025 study. It&rsquo;s compelling and consistent with the
                genetics, but not yet independently established as a fixed number.
              </p>
            </div>
            <div className="callout" style={{ background: "var(--rose-soft)", borderColor: "#eccdd4" }}>
              <span className="callout-icon" aria-hidden="true">🚫</span>
              <p>
                <strong>Not true.</strong> Claims that HD is &ldquo;cured,&rdquo; &ldquo;mathematically
                proven&rdquo; to be solved, or blocked &ldquo;99.9%&rdquo; by some combination of
                therapies are false. There is no cure today, and no approved therapy that stops the
                disease. Be cautious of anyone who tells you otherwise.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="section-head">
            <h2>Living well today</h2>
            <p className="lead">
              While we wait for disease-modifying therapies, a lot can be done right now to support
              quality of life.
            </p>
          </div>
          <div className="grid grid-3">
            <article className="card">
              <h3>Movement &amp; exercise</h3>
              <p>
                Physical-therapy guidelines give a strong recommendation to aerobic exercise and
                supervised gait training to improve fitness and motor function. It hasn&rsquo;t been
                proven to slow the disease, but it genuinely helps people feel and function better.
              </p>
            </article>
            <article className="card">
              <h3>Multidisciplinary care</h3>
              <p>
                Neurologists, physical and occupational therapists, speech and swallow specialists,
                dietitians, and mental-health professionals together make a real difference. HDSA
                Centers of Excellence bring these teams under one roof.
              </p>
            </article>
            <article className="card">
              <h3>Symptom relief</h3>
              <p>
                Approved medicines can ease specific symptoms such as chorea (involuntary movement) and
                mood changes. They don&rsquo;t slow HD, but they can improve daily life. A clinician can
                tailor these to each person.
              </p>
            </article>
          </div>
        </div>
      </section>

      <section className="section" style={{ background: "var(--paper-soft)" }}>
        <div className="container">
          <div className="section-head">
            <h2>Sources</h2>
            <p className="lead">
              The statements on this page are drawn from primary, peer-reviewed, and official sources.
              Where the science is uncertain, we say so.
            </p>
          </div>
          <div className="sources card">
            <ol>
              {sources.map((s) => (
                <li key={s.url}>
                  {s.text}{" "}
                  <a href={s.url} target="_blank" rel="noopener noreferrer">
                    Link
                  </a>
                </li>
              ))}
            </ol>
          </div>
          <p style={{ marginTop: "24px" }}>
            <Link href="/resources" className="btn btn-primary">
              Find support &amp; trusted organizations
            </Link>
          </p>
        </div>
      </section>
    </>
  );
}
