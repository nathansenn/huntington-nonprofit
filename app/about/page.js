import Link from "next/link";
import JsonLd from "../components/JsonLd";
import { pageMeta, breadcrumbLd, organizationLd, SITE_URL } from "../lib/seo";

export const metadata = pageMeta({
  title: "About & Editorial Policy — How We Work",
  description:
    "Who we are, how we research and review HD findings (AI-assisted, human-edited, primary-sourced), our open-science commitments, and our transparency roadmap.",
  path: "/about",
});

const editorial = [
  {
    title: "Primary sources first",
    body: "Every claim is grounded in primary or authoritative sources — peer-reviewed papers, GeneReviews, official trial registries and company releases, and major HD nonprofits. We link them so you can check our work.",
  },
  {
    title: "AI-assisted, human-edited",
    body: "We use advanced AI research models to read the literature and draft clear summaries, then a person reviews and edits every piece against the sources before it's published.",
  },
  {
    title: "Honest about uncertainty",
    body: "We separate what's proven from what's promising or preliminary, we report failures alongside breakthroughs, and we never claim a cure or use words like \"proven\" where the evidence doesn't support it.",
  },
  {
    title: "Corrections in the open",
    body: "Science moves and we make mistakes. When we learn something is wrong or out of date, we update or retract the page and note what changed.",
  },
];

const roadmap = [
  ["501(c)(3) status", "In progress. We'll post our IRS determination letter here once granted."],
  ["Donations", "Not live yet. Any donation amounts on the site are a preview — no money is being collected."],
  ["Financials", "We'll publish our Form 990 and annual report after our first reporting cycle."],
  ["Governance", "Board members, bios, and our conflict-of-interest and whistleblower policies — to be posted."],
  ["Contact", "A public contact email and mailing address will be added once accounts are set up."],
];

export default function AboutPage() {
  return (
    <>
      <JsonLd
        data={[
          breadcrumbLd([
            { name: "Home", path: "/" },
            { name: "About & Editorial Policy", path: "/about" },
          ]),
          {
            "@context": "https://schema.org",
            "@type": "AboutPage",
            name: "About & Editorial Policy",
            url: `${SITE_URL}/about`,
            about: organizationLd(),
          },
        ]}
      />

      <section className="section section-tight" style={{ background: "var(--paper-soft)" }}>
        <div className="container">
          <p className="eyebrow">About us</p>
          <h1>How we work</h1>
          <p className="lead prose">
            We&rsquo;re a small, family-run foundation built on a simple promise: tell the truth about
            Huntington&rsquo;s disease, share what we learn openly, and put families first. Here&rsquo;s
            who we are and how we hold ourselves to that.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="grid grid-2" style={{ alignItems: "start", gap: "40px" }}>
            <div className="prose">
              <h2 className="mt-0">Who we are</h2>
              <p>
                The Huntington Family Hope Foundation began with one family&rsquo;s loss. Crissy
                developed Huntington&rsquo;s disease as a young woman and passed away at twenty-nine,
                leaving her son Connor &mdash; who, like every child of a parent with HD, carries a 50%
                chance of having inherited the gene.{" "}
                <Link href="/story">Read Connor &amp; Crissy&rsquo;s story</Link>.
              </p>
              <p>
                We are not doctors or a medical institution. We translate real research into plain
                language, point families to trustworthy help, and fund open research so the whole HD
                community benefits. Nothing here is medical advice &mdash; always talk with a qualified
                clinician or genetic counselor about your own situation.
              </p>
            </div>
            <aside className="card">
              <h3 style={{ marginTop: 0 }}>How we use AI, responsibly</h3>
              <p>
                Our research findings are produced with advanced AI models and then edited and checked
                by a person. We disclose this on every finding, cite primary sources, label work that
                hasn&rsquo;t had expert medical review as preliminary, and never let AI output stand as
                medical advice. AI helps us cover more ground &mdash; humans keep it honest.
              </p>
              <p className="mb-0">
                <Link href="/research">See our open-research model &rarr;</Link>
              </p>
            </aside>
          </div>
        </div>
      </section>

      <section className="section" style={{ background: "var(--paper-soft)" }}>
        <div className="container">
          <div className="section-head">
            <p className="eyebrow">Editorial policy</p>
            <h2>How a finding is made</h2>
          </div>
          <div className="grid grid-2">
            {editorial.map((e) => (
              <article className="card" key={e.title}>
                <h3 style={{ marginTop: 0 }}>{e.title}</h3>
                <p className="mb-0">{e.body}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="section-head">
            <p className="eyebrow">Transparency</p>
            <h2>Building in the open</h2>
            <p className="lead">
              We&rsquo;re new, and we&rsquo;d rather show our work-in-progress honestly than overstate
              where we are. Here&rsquo;s our status today.
            </p>
          </div>
          <div className="project-table" style={{ display: "grid", gap: "0" }}>
            {roadmap.map(([k, v]) => (
              <div
                key={k}
                style={{
                  display: "grid",
                  gridTemplateColumns: "minmax(140px, 1fr) 2.4fr",
                  gap: "16px",
                  padding: "16px 0",
                  borderBottom: "1px solid var(--line)",
                }}
              >
                <strong>{k}</strong>
                <span className="muted">{v}</span>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
