import "./globals.css";

export const metadata = {
  title: "Huntington Family Hope Foundation",
  description:
    "Research and support nonprofit for Huntington's families and pediatric-focused R&D collaboration.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
