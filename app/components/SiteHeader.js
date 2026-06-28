import Link from "next/link";
import HelixMark from "./HelixMark";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/story", label: "Our Story" },
  { href: "/science", label: "The Science" },
  { href: "/research", label: "Research" },
  { href: "/resources", label: "Resources" },
  { href: "/get-involved", label: "Get Involved" },
];

export default function SiteHeader() {
  return (
    <header className="site-header">
      <div className="header-inner">
        <Link href="/" className="brand" aria-label="Huntington Family Hope Foundation home">
          <HelixMark className="brand-mark" />
          <span className="brand-text">
            <strong>Huntington Family Hope</strong>
            <span>A family foundation for HD families</span>
          </span>
        </Link>
        <nav className="site-nav" aria-label="Primary">
          {navLinks.map((link) => (
            <Link key={link.href} href={link.href}>
              {link.label}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}
