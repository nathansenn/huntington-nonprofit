import Link from "next/link";

export const metadata = {
  title: "Our Story — Connor & Crissy",
  description:
    "In memory of Crissy, who lived with Huntington's disease, and in hope for her son Connor. The story behind the Huntington Family Hope Foundation.",
};

export default function StoryPage() {
  return (
    <>
      <section className="section section-tight" style={{ background: "var(--paper-soft)" }}>
        <div className="container">
          <p className="eyebrow">Our story</p>
          <h1>Connor &amp; Crissy</h1>
          <p className="lead prose">
            Every foundation begins with a reason. Ours has a name — two of them. This is the story
            of a mother we lost to Huntington&rsquo;s disease, and a son we are walking beside with
            everything we have.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="grid grid-2" style={{ alignItems: "start", gap: "44px" }}>
            <div className="memorial">
              <p className="eyebrow">In loving memory</p>
              <h2 style={{ marginTop: 0 }}>Crissy</h2>
              <div className="portrait" role="img" aria-label="A space held in memory of Crissy">
                <span>
                  Crissy
                  <br />
                  Connor&rsquo;s mother
                  <br />
                  Forever loved
                </span>
              </div>
            </div>
            <div className="prose">
              <p>
                Crissy was Connor&rsquo;s mother. She developed Huntington&rsquo;s disease as a young
                woman and died far too soon — long before any child should have to say goodbye to a
                parent.
              </p>
              <p>
                Huntington&rsquo;s is a cruel illness. It arrives slowly and takes a great deal: the
                steadiness of a hand, the ease of a sentence, the small daily things that make
                someone feel like themselves. But it does not erase who a person was. Crissy was a
                daughter, a partner, and a mom. She is the reason this foundation exists, and she is
                remembered with love every single day.
              </p>
              <blockquote>
                We could not change how her story ended. But we can change what happens next — for
                Connor, and for other families who hear the word &ldquo;Huntington&rsquo;s&rdquo; for
                the first time.
              </blockquote>
              <p>
                When someone you love dies of HD, you are handed two things at once: a grief that
                doesn&rsquo;t leave, and a question that won&rsquo;t wait. Because Huntington&rsquo;s
                is inherited, the people who mourned Crissy were also left to wonder what it means for
                the children she left behind.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="section" style={{ background: "var(--paper-soft)" }}>
        <div className="container">
          <div className="section-head">
            <p className="eyebrow">A childhood worth protecting</p>
            <h2>Connor</h2>
          </div>
          <div className="grid grid-2" style={{ alignItems: "start", gap: "44px" }}>
            <div className="prose">
              <p>
                Connor is ten years old. He is, first and most importantly, a kid — with the same
                curiosity, energy, and capacity for joy as any other ten-year-old. That is exactly
                what his family is determined to protect.
              </p>
              <p>
                Because Huntington&rsquo;s disease is passed down in an autosomal-dominant pattern,
                every child of a parent with HD has a <strong>50% chance</strong> of inheriting the
                gene. Connor is one of those children. Right now, that means a coin that has not been
                flipped — a future that is genuinely open.
              </p>
              <p>
                Medical guidance is clear that healthy children are generally not tested for
                adult-onset HD, so that the choice of whether and when to know stays with them when
                they grow up. So our family does what HD families everywhere do: we love him fully, we
                keep him healthy and active, we stay close to good doctors, and we take things one
                season at a time.
              </p>
              <p>
                What gives us real hope is timing. Connor is growing up in the first era when
                therapies aimed at the <em>root</em> of Huntington&rsquo;s are actually being tested
                in people. We don&rsquo;t pretend that&rsquo;s a cure. But it is a reason to face the
                future with our heads up.
              </p>
            </div>
            <aside className="card">
              <h3 style={{ marginTop: 0 }}>What &ldquo;50%&rdquo; really means</h3>
              <ul className="list-check">
                <li>It is a coin flip, not a sentence — half of at-risk children do not inherit HD.</li>
                <li>
                  A positive test would not tell us <em>when</em> symptoms might begin — and research
                  is working hard to push that day further away.
                </li>
                <li>
                  Predictive testing is a deeply personal decision, ideally made as an informed adult
                  with genetic counseling.
                </li>
                <li>
                  Whatever the result would be, the plan is the same: a full, healthy, well-loved
                  childhood.
                </li>
              </ul>
              <p className="mb-0">
                <Link href="/science">See the science behind our hope &rarr;</Link>
              </p>
            </aside>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="section-head">
            <p className="eyebrow">Why we started this</p>
            <h2>From grief to purpose</h2>
            <p className="lead">
              We could not save Crissy. But sitting still was never an option. The Huntington Family
              Hope Foundation is how we channel love into action.
            </p>
          </div>
          <div className="grid grid-3">
            <article className="card">
              <div className="card-icon" aria-hidden="true">🫂</div>
              <h3>Support families</h3>
              <p>
                Point families — especially kids — to people who understand HD and resources they can
                trust, so no one faces this diagnosis feeling alone.
              </p>
            </article>
            <article className="card">
              <div className="card-icon" aria-hidden="true">📖</div>
              <h3>Share honest science</h3>
              <p>
                Translate real, peer-reviewed HD research into plain language, including what is still
                uncertain. Hope built on facts is the only kind we offer.
              </p>
            </article>
            <article className="card">
              <div className="card-icon" aria-hidden="true">🤝</div>
              <h3>Stand with researchers</h3>
              <p>
                Champion the scientists, clinicians, and study participants who are moving HD from
                untreatable toward treatable — and someday, we believe, beyond.
              </p>
            </article>
          </div>
        </div>
      </section>

      <section className="section band">
        <div className="container center">
          <h2>For Crissy. For Connor. For every family living with HD.</h2>
          <p className="lead" style={{ color: "rgba(255,255,255,0.9)", maxWidth: "44ch", margin: "0 auto 24px" }}>
            If our story sounds like yours, you are not alone — and there is more reason for hope now
            than ever before.
          </p>
          <div className="btn-row" style={{ justifyContent: "center" }}>
            <Link href="/resources" className="btn btn-accent btn-lg">
              Find support
            </Link>
            <Link href="/get-involved" className="btn btn-ghost btn-lg">
              Help a family
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
