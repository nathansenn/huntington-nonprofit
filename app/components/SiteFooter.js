import Link from "next/link";
import HelixMark from "./HelixMark";

export default function SiteFooter() {
  return (
    <footer className="site-footer">
      <div className="container">
        <div className="disclaimer">
          <strong>Medical disclaimer:</strong> Huntington Family Hope Foundation shares
          information for education and support. Nothing on this site is medical advice, and
          no treatment described here is a cure. Research summaries describe investigational
          therapies that are not yet approved. Always consult a qualified clinician or genetic
          counselor about your own situation.
        </div>
        <div className="footer-grid">
          <div className="footer-brand">
            <Link href="/" className="brand" aria-label="Home">
              <HelixMark className="brand-mark" />
              <span className="brand-text">
                <strong style={{ color: "#fff" }}>Huntington Family Hope</strong>
              </span>
            </Link>
            <p>
              A family foundation started in memory of Crissy and in hope for Connor —
              supporting families affected by Huntington&rsquo;s disease and pointing them to
              trustworthy science and care.
            </p>
          </div>
          <div>
            <h4>Explore</h4>
            <Link href="/story">Our Story</Link>
            <Link href="/science">The Science</Link>
            <Link href="/research">Research &amp; Findings</Link>
            <Link href="/resources">Resources</Link>
            <Link href="/get-involved">Get Involved</Link>
            <Link href="/about">About &amp; Editorial Policy</Link>
          </div>
          <div>
            <h4>If you need support now</h4>
            <a href="https://hdsa.org/" target="_blank" rel="noopener noreferrer">
              HDSA (USA)
            </a>
            <a href="https://www.hdyo.org/" target="_blank" rel="noopener noreferrer">
              HDYO (for young people)
            </a>
            <a href="https://www.huntingtonsociety.ca/" target="_blank" rel="noopener noreferrer">
              Huntington Society of Canada
            </a>
            <a href="tel:988">Crisis support: call or text 988 (US)</a>
          </div>
        </div>
        <div className="footer-bottom">
          <span>&copy; {new Date().getFullYear()} Huntington Family Hope Foundation.</span>
          <span>Made with love, for Connor — and for every family living with HD.</span>
        </div>
      </div>
    </footer>
  );
}
