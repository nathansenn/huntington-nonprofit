import Link from "next/link";
import DnaArt from "./components/DnaArt";

export const metadata = {
  title: "Huntington Family Hope Foundation — support & honest science for HD families",
  description:
    "Started in memory of Crissy and in hope for her son Connor. We help families facing Huntington's disease with compassion, community, and trustworthy science.",
};

const facts = [
  {
    stat: "1 in 2",
    label:
      "Each child of a parent with HD has a 50% chance of inheriting the gene. Connor is one of those children.",
  },
  {
    stat: "~41,000",
    label:
      "People are estimated to live with symptomatic HD in the U.S., with many more at risk.",
  },
  {
    stat: "1993",
    label:
      "The year the HD gene was found. Three decades later, therapies that target the disease itself — not just its symptoms — are showing promise in trials.",
  },
];

const pillars = [
  {
    icon: "🫂",
    title: "Stand with families",
    body: "HD affects the whole family — caregivers, partners, and especially children. We connect families to people who understand and resources they can trust.",
  },
  {
    icon: "🔬",
    title: "Tell the truth about the science",
    body: "We translate real, peer-reviewed HD research into plain language — including what's promising, what's still uncertain, and what isn't proven.",
  },
  {
    icon: "🌅",
    title: "Hold on to honest hope",
    body: "Therapies aimed at the root of HD — not just its symptoms — are now in clinical trials, some with encouraging early results. Hope grounded in evidence is the kind that lasts.",
  },
];

export default function Home() {
  return (
    <>
      <section className="hero">
        <div className="container hero-inner">
          <div>
            <span className="pill">
              <span className="dot" />
              In memory of Crissy &middot; In hope for Connor
            </span>
            <h1>A family&rsquo;s answer to Huntington&rsquo;s disease: hope, honesty, and each other.</h1>
            <p className="lead">
              We are a family foundation born from loss and built on love. We support families
              living with Huntington&rsquo;s disease and share the real science behind today&rsquo;s
              most promising research — without false promises.
            </p>
            <div className="btn-row">
              <Link href="/story" className="btn btn-primary btn-lg">
                Read our story
              </Link>
              <Link href="/science" className="btn btn-ghost btn-lg">
                Explore the science
              </Link>
            </div>
          </div>
          <div className="hero-art">
            <DnaArt />
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="stats">
            {facts.map((f) => (
              <div className="stat" key={f.stat}>
                <strong>{f.stat}</strong>
                <span>{f.label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section" style={{ background: "var(--paper-soft)" }}>
        <div className="container">
          <div className="section-head">
            <p className="eyebrow">Why we exist</p>
            <h2>Crissy&rsquo;s life. Connor&rsquo;s future. Every family in between.</h2>
            <p className="lead">
              Crissy lived with Huntington&rsquo;s disease and passed away far too young. Her son
              Connor is ten years old, and like every child of a parent with HD, he carries a
              fifty-fifty chance of having inherited the gene. This foundation is how their family
              chose to respond — by turning grief into help for others.
            </p>
          </div>
          <div className="grid grid-3">
            {pillars.map((p) => (
              <article className="card" key={p.title}>
                <div className="card-icon" aria-hidden="true">
                  {p.icon}
                </div>
                <h3>{p.title}</h3>
                <p>{p.body}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="grid grid-2" style={{ alignItems: "center", gap: "40px" }}>
            <div className="memorial">
              <p className="eyebrow">A note on hope</p>
              <h2 style={{ marginTop: 0 }}>This is not a cure. It is the closest we have ever been.</h2>
              <p className="mb-0">
                There is no cure for Huntington&rsquo;s disease today, and we will never tell you
                otherwise. But the science has genuinely turned a corner: researchers now understand
                that HD is driven by a repeat of DNA that keeps growing inside neurons over a
                lifetime — and several therapies designed to slow or silence it are now being tested
                in people. We follow that work closely and share it plainly.
              </p>
            </div>
            <div>
              <h3>What you&rsquo;ll find here</h3>
              <ul className="list-check">
                <li>
                  <strong>Our story</strong> — who Crissy and Connor are, and why this foundation exists.
                </li>
                <li>
                  <strong>The science</strong> — an honest, sourced guide to HD and the therapies in development.
                </li>
                <li>
                  <strong>Resources</strong> — vetted organizations that help HD families today.
                </li>
                <li>
                  <strong>Ways to help</strong> — how you can support families like ours.
                </li>
              </ul>
              <Link href="/resources" className="btn btn-accent">
                Find support &amp; resources
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="section band">
        <div className="container center">
          <div className="section-head center">
            <h2>Walk with us.</h2>
            <p className="lead" style={{ color: "rgba(255,255,255,0.9)" }}>
              Whether you&rsquo;re facing HD in your own family, caring for someone who is, or simply
              want to help — there&rsquo;s a place for you here.
            </p>
          </div>
          <div className="btn-row" style={{ justifyContent: "center" }}>
            <Link href="/get-involved" className="btn btn-accent btn-lg">
              Get involved
            </Link>
            <Link href="/story" className="btn btn-ghost btn-lg">
              Meet Connor &amp; Crissy
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
