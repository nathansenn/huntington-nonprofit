import Link from "next/link";

export default function PortalHeader() {
  return (
    <header className="topbar container">
      <div className="brand">
        <div className="mark" />
        <div>
          <h1>Huntington Family Hope Foundation</h1>
          <p>Connor + all children and families, powered by open, applied R&amp;D.</p>
        </div>
      </div>
      <nav className="portal-nav" aria-label="Primary">
        <Link href="/">Home</Link>
        <Link href="/rd">R&amp;D</Link>
        <Link href="/science">Science</Link>
        <Link href="/about">Story</Link>
      </nav>
    </header>
  );
}
