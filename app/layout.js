import "./globals.css";
import SiteHeader from "./components/SiteHeader";
import SiteFooter from "./components/SiteFooter";

export const metadata = {
  metadataBase: new URL("https://huntingtonfamilyhope.org"),
  title: {
    default: "Huntington Family Hope Foundation",
    template: "%s · Huntington Family Hope Foundation",
  },
  description:
    "A family foundation supporting people affected by Huntington's disease — honest science, real resources, and Connor and Crissy's story.",
  openGraph: {
    title: "Huntington Family Hope Foundation",
    description:
      "Supporting HD families with compassion and trustworthy, up-to-date science. In memory of Crissy, in hope for Connor.",
    type: "website",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <a className="skip-link" href="#main">
          Skip to content
        </a>
        <SiteHeader />
        <main id="main">{children}</main>
        <SiteFooter />
      </body>
    </html>
  );
}
