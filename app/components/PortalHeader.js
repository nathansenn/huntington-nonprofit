import Link from "next/link";

export default function PortalHeader() {
  return (
    <header className="topbar">
      <div className="container nav-shell">
        <div className="brand">
          <div className="mark" />
          <div>
            <h1>Huntington Family Hope Foundation</h1>
            <p className="muted">SENN family science lab • Transparent research • Community support</p>
          </div>
        </div>
        <nav className="portal-nav" aria-label="Primary">
          <Link className="portal-link" href="/">Home</Link>
          <Link className="portal-link" href="/rd">R&amp;D</Link>
          <Link className="portal-link" href="/science">Science</Link>
          <Link className="portal-link" href="/about">Story</Link>
          <Link className="portal-link" href="/projects">Project Map</Link>
        </nav>
      </div>
    </header>
  );
}
