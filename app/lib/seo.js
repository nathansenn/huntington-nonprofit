// Central SEO configuration. Change SITE_URL here once a real domain is live.
export const SITE_URL = "https://huntingtonfamilyhope.org";
export const SITE_NAME = "Huntington Family Hope Foundation";
export const SITE_TAGLINE = "Honest science and support for Huntington's disease families";
export const SITE_DESCRIPTION =
  "A family foundation supporting people affected by Huntington's disease — honest, up-to-date science, real resources, and Connor and Crissy's story. In memory of Crissy, in hope for Connor.";
export const TWITTER_HANDLE = ""; // add when set up, e.g. "@huntingtonhope"
export const ORG_EMAIL = ""; // add a public contact email when accounts are live

// Last meaningful content review — surfaced for E-E-A-T / freshness signals.
export const CONTENT_REVIEWED = "2026-06-28";

/**
 * Build per-page Next.js metadata with canonical + OpenGraph + Twitter.
 * @param {{title:string, description:string, path:string, keywords?:string[]}} opts
 */
export function pageMeta({ title, description, path = "/", keywords = [] }) {
  const url = `${SITE_URL}${path === "/" ? "" : path}`;
  return {
    title,
    description,
    keywords: keywords.length ? keywords : undefined,
    alternates: { canonical: url },
    openGraph: {
      title,
      description,
      url,
      siteName: SITE_NAME,
      type: "website",
      locale: "en_US",
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      creator: TWITTER_HANDLE || undefined,
    },
  };
}

// ---- JSON-LD structured data ---------------------------------------------

export function organizationLd() {
  return {
    "@context": "https://schema.org",
    "@type": ["NGO", "MedicalOrganization"],
    name: SITE_NAME,
    alternateName: "Huntington Family Hope",
    url: SITE_URL,
    logo: `${SITE_URL}/icon.svg`,
    description: SITE_DESCRIPTION,
    foundingDate: "2026",
    knowsAbout: [
      "Huntington's disease",
      "HTT gene",
      "somatic CAG repeat expansion",
      "huntingtin-lowering therapy",
      "juvenile Huntington's disease",
    ],
    ...(ORG_EMAIL ? { email: ORG_EMAIL } : {}),
    sameAs: [],
  };
}

export function websiteLd() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: SITE_NAME,
    url: SITE_URL,
    description: SITE_DESCRIPTION,
    inLanguage: "en-US",
    publisher: { "@type": "Organization", name: SITE_NAME, url: SITE_URL },
  };
}

export function medicalWebPageLd({ name, description, path, reviewed = CONTENT_REVIEWED }) {
  return {
    "@context": "https://schema.org",
    "@type": "MedicalWebPage",
    name,
    description,
    url: `${SITE_URL}${path === "/" ? "" : path}`,
    inLanguage: "en-US",
    lastReviewed: reviewed,
    isPartOf: { "@type": "WebSite", name: SITE_NAME, url: SITE_URL },
    about: {
      "@type": "MedicalCondition",
      name: "Huntington's disease",
      alternateName: "Huntington's chorea",
      code: { "@type": "MedicalCode", codingSystem: "ICD-10", codeValue: "G10" },
    },
    publisher: { "@type": "Organization", name: SITE_NAME, url: SITE_URL },
  };
}

export function breadcrumbLd(items) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((it, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: it.name,
      item: `${SITE_URL}${it.path === "/" ? "" : it.path}`,
    })),
  };
}

export function faqLd(qa) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: qa.map((q) => ({
      "@type": "Question",
      name: q.q,
      acceptedAnswer: { "@type": "Answer", text: q.a },
    })),
  };
}

export function articleLd({ headline, description, path, datePublished, dateModified }) {
  return {
    "@context": "https://schema.org",
    "@type": "Article",
    headline,
    description,
    url: `${SITE_URL}${path}`,
    datePublished,
    dateModified: dateModified || datePublished,
    inLanguage: "en-US",
    author: { "@type": "Organization", name: SITE_NAME, url: SITE_URL },
    publisher: {
      "@type": "Organization",
      name: SITE_NAME,
      logo: { "@type": "ImageObject", url: `${SITE_URL}/icon.svg` },
    },
  };
}
