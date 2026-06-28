import fs from "node:fs";
import path from "node:path";
import Link from "next/link";

export const metadata = {
  title: "Our Story — Connor & Crissy",
  description:
    "In memory of Crissy, who lived with Huntington's disease, and in hope for her son Connor. The story behind the Huntington Family Hope Foundation.",
};

// --- Photo memorial -------------------------------------------------------
// Drop the photo files into /public/assets/family using the base names below
// (any of .jpg/.jpeg/.png/.webp). Each appears automatically once present;
// until then a gentle placeholder with its caption is shown.
const FAMILY_DIR = path.join(process.cwd(), "public", "assets", "family");
const PHOTO_EXTS = [".jpg", ".jpeg", ".png", ".webp"];

function findPhoto(baseName) {
  for (const ext of PHOTO_EXTS) {
    const rel = `/assets/family/${baseName}${ext}`;
    try {
      if (fs.existsSync(path.join(FAMILY_DIR, `${baseName}${ext}`))) return rel;
    } catch {
      // ignore — directory may not exist yet
    }
  }
  return null;
}

const portrait = {
  base: "crissy-before",
  caption: "Crissy, before Connor.",
  alt: "Crissy, a young woman with bright red hair and a warm smile.",
};

const arc = [
  {
    base: "crissy-connor-birth",
    caption: "The day Connor was born.",
    alt: "Crissy holding her newborn son Connor in the hospital.",
  },
  {
    base: "crissy-connor-baby",
    caption: "A week or so later, home together.",
    alt: "Crissy cradling baby Connor at home.",
  },
  {
    base: "crissy-connor-2021-a",
    caption: "Crissy and Connor, 2021.",
    alt: "Crissy and a six-year-old Connor sitting together.",
  },
  {
    base: "crissy-connor-2021-b",
    caption: "Mother and son.",
    alt: "Crissy and Connor close together, smiling.",
  },
];

function PhotoFrame({ src, caption, alt }) {
  return (
    <figure className="photo-frame">
      <div className="frame-inner">
        {src ? (
          <img src={src} alt={alt} loading="lazy" />
        ) : (
          <div className="ph">
            <span>Photo to be added</span>
          </div>
        )}
      </div>
      <figcaption>{caption}</figcaption>
    </figure>
  );
}

export default function StoryPage() {
  const portraitSrc = findPhoto(portrait.base);
  const arcPhotos = arc.map((p) => ({ ...p, src: findPhoto(p.base) }));

  return (
    <>
      <section className="section section-tight" style={{ background: "var(--paper-soft)" }}>
        <div className="container">
          <p className="eyebrow">Our story</p>
          <h1>Connor &amp; Crissy</h1>
          <p className="lead prose">
            Every foundation begins with a reason. Ours has a name — two of them. This is the story
            of a mother we lost to Huntington&rsquo;s disease, and the bright, beloved son she left
            behind.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="grid grid-2" style={{ alignItems: "start", gap: "44px" }}>
            <div className="memorial">
              <p className="eyebrow">In loving memory</p>
              <h2 style={{ marginTop: 0 }}>Crissy</h2>
              <div className="photo-feature">
                {portraitSrc ? (
                  <img src={portraitSrc} alt={portrait.alt} />
                ) : (
                  <div className="ph">
                    <span>A photo of Crissy</span>
                  </div>
                )}
              </div>
              <p className="muted" style={{ marginTop: "12px", marginBottom: 0, fontStyle: "italic" }}>
                {portrait.caption}
              </p>
            </div>
            <div className="prose">
              <p>
                This is Crissy — Connor&rsquo;s mom. Bright red hair, a wide smile, her whole life
                ahead of her.
              </p>
              <p>
                Huntington&rsquo;s disease doesn&rsquo;t usually arrive until middle age. For Crissy,
                it came at <strong>twenty</strong>. The years that should have been her freest were
                shadowed by an illness that slowly takes the steadiness of a hand, the ease of a
                sentence, the small daily things that make someone feel like themselves. Through all
                of it, she became a mother — and she loved Connor with everything she had.
              </p>
              <blockquote>
                HD took so much from Crissy. It never took the fact that she was Connor&rsquo;s
                mom.
              </blockquote>
              <p>
                She passed away at <strong>twenty-nine</strong>, far too young, leaving a little boy
                who carries her smile and her memory. We could not change how her story ended. But we
                can change what happens next — for Connor, and for other families who hear the word
                &ldquo;Huntington&rsquo;s&rdquo; for the first time.
              </p>
            </div>
          </div>

          <div style={{ marginTop: "48px" }}>
            <h3 style={{ marginBottom: "6px" }}>Her life, in moments</h3>
            <p className="muted" style={{ marginBottom: "22px" }}>
              From the young woman she was, to the day Connor arrived, to the years they shared.
            </p>
            <div className="photo-arc">
              {arcPhotos.map((p) => (
                <PhotoFrame key={p.base} src={p.src} caption={p.caption} alt={p.alt} />
              ))}
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
                Connor is ten years old now. He is, first and most importantly, a kid — with the same
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
                What gives us real hope is timing. Connor is growing up at a moment when therapies
                aimed at the <em>root</em> of Huntington&rsquo;s are showing genuine promise in
                trials. We don&rsquo;t pretend that&rsquo;s a cure. But it is a reason to face the
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
