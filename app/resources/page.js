import Link from "next/link";
import { resources } from "../lib/content";

export const metadata = {
  title: "Resources — trusted help for HD families",
  description:
    "Vetted organizations, support lines, and youth resources for families affected by Huntington's disease.",
};

export default function ResourcesPage() {
  return (
    <>
      <section className="section section-tight" style={{ background: "var(--paper-soft)" }}>
        <div className="container">
          <p className="eyebrow">Resources</p>
          <h1>You don&rsquo;t have to do this alone</h1>
          <p className="lead prose">
            These are established, trustworthy organizations that help people affected by
            Huntington&rsquo;s disease — whether you&rsquo;re newly facing it, caring for someone, at
            risk yourself, or a young person trying to make sense of it all.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="grid grid-2">
            {resources.map((r) => (
              <article className="resource" key={r.name}>
                <span className="region">{r.region}</span>
                <h3>{r.name}</h3>
                <p>{r.description}</p>
                <a className="resource-link" href={r.url} target="_blank" rel="noopener noreferrer">
                  Visit {new URL(r.url).hostname.replace("www.", "")} &rarr;
                </a>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section" style={{ background: "var(--paper-soft)" }}>
        <div className="container">
          <div className="grid grid-2" style={{ alignItems: "start", gap: "40px" }}>
            <div className="prose">
              <h2 className="mt-0">For young people and kids</h2>
              <p>
                Huntington&rsquo;s affects children too — those who watch a parent change, and those
                who carry questions about their own future. <strong>HDYO</strong> (the Huntington&rsquo;s
                Disease Youth Organization) exists entirely for them, with explanations matched to
                every age, a welcoming community, and camps and events. It&rsquo;s the first place we
                point families with kids.
              </p>
              <p>
                <a href="https://www.hdyo.org/" target="_blank" rel="noopener noreferrer" className="btn btn-accent">
                  Explore HDYO
                </a>
              </p>
            </div>
            <div className="prose">
              <h2 className="mt-0">Thinking about genetic testing?</h2>
              <p>
                Deciding whether to be tested for HD is deeply personal and has no single right answer.
                The strong recommendation across the HD community is to make that choice as an informed
                adult, with the help of a <strong>genetic counselor</strong>. They can walk you through
                what results would and wouldn&rsquo;t tell you, the emotional side, and questions like
                family planning.
              </p>
              <p>
                Your neurologist, an HDSA Center of Excellence, or your national HD society can connect
                you with a counselor who specializes in HD.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="callout info">
            <span className="callout-icon" aria-hidden="true">💙</span>
            <p>
              <strong>In crisis?</strong> Huntington&rsquo;s places a real emotional burden on patients
              and caregivers alike. If you&rsquo;re in the U.S. and struggling, call or text{" "}
              <a href="tel:988">988</a> for the free, confidential Suicide &amp; Crisis Lifeline, any
              time, day or night. Outside the U.S., your national HD society can point you to local
              support.
            </p>
          </div>
          <p style={{ marginTop: "28px" }}>
            <Link href="/get-involved" className="btn btn-primary">
              Want to help other families? Get involved &rarr;
            </Link>
          </p>
        </div>
      </section>
    </>
  );
}
