import Link from "next/link";

export const metadata = {
  title: "Get Involved — help families facing Huntington's disease",
  description:
    "Ways to support HD families and research: give to trusted HD nonprofits, join research, volunteer, and share honest information.",
};

const ways = [
  {
    icon: "💛",
    title: "Give to HD research & support",
    body: "Until our own giving channel is live, the most effective thing you can do today is support established HD nonprofits. Gifts to HDSA fund family services and research; gifts to CHDI Foundation fund therapy development directly.",
    cta: { label: "Donate via HDSA", href: "https://hdsa.org/" },
  },
  {
    icon: "🧪",
    title: "Join HD research",
    body: "Research only moves as fast as families let it. Enroll-HD is a global observational study open to people with HD, those at risk, and family members. Participating helps every future patient — including kids like Connor.",
    cta: { label: "Learn about Enroll-HD", href: "https://www.enroll-hd.org/" },
  },
  {
    icon: "📣",
    title: "Share honest information",
    body: "Misinformation hurts HD families. Share trustworthy science and resources, correct false 'cure' claims kindly, and help newly diagnosed families find the real support that exists.",
    cta: { label: "Share our science page", href: "/science" },
  },
  {
    icon: "🤲",
    title: "Support a family near you",
    body: "Caregiving for someone with HD is relentless. A meal, a ride to a clinic, an afternoon of childcare, or simply showing up consistently can change a family's week. Local HD support groups can connect you.",
    cta: { label: "Find local support", href: "/resources" },
  },
];

export default function GetInvolvedPage() {
  return (
    <>
      <section className="section section-tight" style={{ background: "var(--paper-soft)" }}>
        <div className="container">
          <p className="eyebrow">Get involved</p>
          <h1>Turn care into action</h1>
          <p className="lead prose">
            This foundation grew out of one family&rsquo;s loss and hope. It grows further every time
            someone else decides to help. Here are real, concrete ways to make a difference for
            families living with Huntington&rsquo;s disease.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="grid grid-2">
            {ways.map((w) => {
              const external = w.cta.href.startsWith("http");
              return (
                <article className="card" key={w.title}>
                  <div className="card-icon" aria-hidden="true">
                    {w.icon}
                  </div>
                  <h3>{w.title}</h3>
                  <p>{w.body}</p>
                  <p className="mb-0" style={{ marginTop: "16px" }}>
                    {external ? (
                      <a className="btn btn-ghost" href={w.cta.href} target="_blank" rel="noopener noreferrer">
                        {w.cta.label}
                      </a>
                    ) : (
                      <Link className="btn btn-ghost" href={w.cta.href}>
                        {w.cta.label}
                      </Link>
                    )}
                  </p>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      <section className="section" style={{ background: "var(--paper-soft)" }}>
        <div className="container">
          <div className="callout note">
            <span className="callout-icon" aria-hidden="true">🚧</span>
            <p>
              <strong>We&rsquo;re just getting started.</strong> The Huntington Family Hope Foundation
              is a young, family-run effort. Our own donation, newsletter, and contact channels are
              being set up — this page will be updated with verified details as soon as they&rsquo;re
              ready. In the meantime, every link above goes to an established organization you can trust
              today.
            </p>
          </div>
        </div>
      </section>

      <section className="section band">
        <div className="container center">
          <h2>Hope is a team effort.</h2>
          <p className="lead" style={{ color: "rgba(255,255,255,0.9)", maxWidth: "46ch", margin: "0 auto 24px" }}>
            Crissy&rsquo;s memory and Connor&rsquo;s future are part of a much bigger story — one that
            includes thousands of families and the researchers fighting for them. Thank you for being
            part of it.
          </p>
          <div className="btn-row" style={{ justifyContent: "center" }}>
            <Link href="/story" className="btn btn-ghost btn-lg">
              Read our story
            </Link>
            <Link href="/science" className="btn btn-accent btn-lg">
              Understand the science
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
