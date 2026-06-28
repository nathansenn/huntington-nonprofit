import Link from "next/link";

export const metadata = {
  title: "Page not found",
  robots: { index: false, follow: true },
};

export default function NotFound() {
  return (
    <section className="section">
      <div className="container center" style={{ maxWidth: "640px" }}>
        <p className="eyebrow">404</p>
        <h1>We couldn&rsquo;t find that page</h1>
        <p className="lead">
          The link may be old or mistyped. Let&rsquo;s get you back to something useful.
        </p>
        <div className="btn-row" style={{ justifyContent: "center", marginTop: "8px" }}>
          <Link href="/" className="btn btn-primary">
            Go home
          </Link>
          <Link href="/resources" className="btn btn-ghost">
            Find support
          </Link>
          <Link href="/science" className="btn btn-ghost">
            The science
          </Link>
        </div>
      </div>
    </section>
  );
}
