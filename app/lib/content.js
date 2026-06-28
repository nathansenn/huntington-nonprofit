// Static, sourced content for the site. Every figure here is grounded in the
// research briefing and an independent adversarial fact-check, both compiled
// from primary sources (see /science "Sources"). Status language is
// deliberately careful: nothing here is an approved cure.

export const therapeuticPrograms = [
  {
    name: "AMT-130",
    sponsor: "uniQure",
    approach: "AAV gene therapy that lowers huntingtin in the striatum (one-time delivery).",
    status: "clinic",
    statusLabel: "Phase I/II — not approved",
    detail:
      "The furthest-advanced disease-modifying candidate. In its Phase I/II program, the high dose showed a 75% slowing of decline on the cUHDRS clinical scale at 36 months (p=0.003), compared against a matched external group drawn from natural-history data. That headline result rests on the 12 high-dose participants who had reached 36 months — a small number, and measured against external controls rather than the trial's own small randomized sham group. uniQure has announced plans to file for U.S. accelerated approval around Q3 2026, with a UK submission in parallel. A confirmatory trial is still required, and the therapy is not yet approved.",
  },
  {
    name: "Votoplam (PTC518)",
    sponsor: "PTC Therapeutics / Novartis",
    approach: "Oral pill that reduces production of the huntingtin protein (splicing modifier).",
    status: "trial",
    statusLabel: "Phase 3 enrolling",
    detail:
      "An oral huntingtin-lowering drug. In a 24-month interim look at an open-label extension, the higher (10 mg) dose showed roughly 52% slowing on the cUHDRS scale in Stage 2 patients versus a matched natural-history comparison — the lower dose showed about 28%. These are early interim signals, reported without formal statistical testing and compared to natural history rather than a placebo group. A large Phase 3 trial (INVEST-HD), now run by Novartis, is enrolling; that randomized study is what would confirm the effect.",
  },
  {
    name: "WVE-003",
    sponsor: "Wave Life Sciences",
    approach: "Allele-selective ASO that lowers the mutant huntingtin while sparing the healthy copy.",
    status: "trial",
    statusLabel: "Early clinical",
    detail:
      "Designed to silence only the disease-causing copy of the gene — for the roughly 40% of patients who carry the specific genetic marker it targets. In a small early trial it lowered mutant huntingtin by about 46% while preserving the healthy protein, and was generally well tolerated. The degree of lowering correlated with slower shrinkage of a key brain region, but the study was not built to prove that effect. A larger study is planned, pending a development partner.",
  },
  {
    name: "MSH3 inhibitors (e.g. LQT-23)",
    sponsor: "LoQus23 and others",
    approach: "Aim to slow the somatic expansion of the CAG repeat by reducing the MSH3 repair protein.",
    status: "preclin",
    statusLabel: "Preclinical",
    detail:
      "A newer strategy that targets the engine of the disease — the ongoing growth of the repeat inside neurons. In patient-derived neurons grown in a lab, a dose-response model predicted that reducing MSH3 by about 83% would halt further expansion (and roughly 41% would halve it). No MSH3 therapy has yet been tested in people; the first candidates are expected to enter human trials over the coming years. (The only repeat-expansion drug in human trials so far targets a related gene, PMS1, not MSH3.)",
  },
  {
    name: "Tominersen",
    sponsor: "Roche / Ionis",
    approach: "ASO that lowers total huntingtin, delivered into the spinal fluid.",
    status: "trial",
    statusLabel: "Phase 2 ongoing",
    detail:
      "An earlier Phase 3 trial was halted in 2021 after an interim review found no benefit, but a redesigned Phase 2 study (GENERATION HD2) in earlier-stage patients is ongoing; in 2025 it was streamlined to its higher dose, with results expected around 2026. It is a key test of whether dose and timing make the difference.",
  },
  {
    name: "Symptomatic medicines",
    sponsor: "Approved & in use today",
    approach: "VMAT2 inhibitors (tetrabenazine, deutetrabenazine, valbenazine) and supportive care.",
    status: "clinic",
    statusLabel: "FDA-approved",
    detail:
      "These approved medicines reduce chorea (involuntary movements) and help with specific symptoms. They improve quality of life but do not slow the underlying disease. Multidisciplinary care — physiotherapy, speech and swallow therapy, nutrition, and mental-health support — is an essential part of living well with HD.",
  },
];

export const resources = [
  {
    name: "Huntington's Disease Society of America (HDSA)",
    region: "United States",
    url: "https://hdsa.org/",
    description:
      "The largest U.S. HD nonprofit, founded in 1967 by Marjorie Guthrie. Runs a national helpline, a network of Centers of Excellence, local support groups, and social-worker support for families.",
  },
  {
    name: "HD Youth Organization (HDYO)",
    region: "International · for young people",
    url: "https://www.hdyo.org/",
    description:
      "Dedicated entirely to children and young adults affected by HD. Age-appropriate explanations, peer community, and one-to-one support — a wonderful first stop for kids like Connor.",
  },
  {
    name: "Huntington Society of Canada",
    region: "Canada",
    url: "https://www.huntingtonsociety.ca/",
    description:
      "National Canadian charity founded in 1973, offering family services, counseling, local chapters, and research funding across the country.",
  },
  {
    name: "Enroll-HD",
    region: "Global research platform",
    url: "https://www.enroll-hd.org/",
    description:
      "A worldwide observational study with tens of thousands of participants. Joining helps researchers understand HD and connects families to trial opportunities. Run by CHDI Foundation.",
  },
  {
    name: "CHDI Foundation",
    region: "Research nonprofit",
    url: "https://chdifoundation.org/",
    description:
      "A nonprofit research organization devoted solely to developing HD therapies, coordinating scientists and companies worldwide and managing Enroll-HD.",
  },
  {
    name: "988 Suicide & Crisis Lifeline",
    region: "United States · 24/7",
    url: "https://988lifeline.org/",
    description:
      "HD takes an emotional toll on the whole family. If you or someone you love is in crisis, call or text 988 any time for free, confidential support.",
  },
];

export const sources = [
  {
    text:
      "Huntington Disease — GeneReviews (NCBI Bookshelf), updated 2026. Genetics, repeat ranges, inheritance, juvenile HD.",
    url: "https://www.ncbi.nlm.nih.gov/books/NBK1305/",
  },
  {
    text:
      "GeM-HD Consortium. Genetic modifiers of HD onset (Cell 2019; Nature Genetics 2025). MSH3 hastens onset; FAN1 is protective.",
    url: "https://pubmed.ncbi.nlm.nih.gov/31398342/",
  },
  {
    text:
      "Handsaker et al. “Long somatic DNA-repeat expansion drives neurodegeneration in HD.” Cell, Jan 2025. Single-cell evidence; ~150-CAG threshold in striatal neurons (single study).",
    url: "https://www.cell.com/cell/fulltext/S0092-8674(24)01379-5",
  },
  {
    text:
      "Bunting et al. “ASO-mediated MSH3 suppression reduces CAG expansion in HD iPSC-derived striatal neurons.” Science Translational Medicine, 2025.",
    url: "https://www.science.org/doi/10.1126/scitranslmed.adn4600",
  },
  {
    text:
      "uniQure. Positive topline Phase I/II results for AMT-130, Sept 24, 2025 (cUHDRS 75% slowing, p=0.003 vs external control).",
    url: "https://www.globenewswire.com/news-release/2025/09/24/3155348/0/en/uniQure-Announces-Positive-Topline-Results-from-Pivotal-Phase-I-II-Study-of-AMT-130-in-Patients-with-Huntington-s-Disease.html",
  },
  {
    text: "uniQure. Plan for BLA submission for AMT-130 (accelerated approval, Q3 2026), June 17, 2026.",
    url: "https://www.globenewswire.com/news-release/2026/06/17/3313322/0/en/uniqure-announces-plan-for-bla-submission-for-amt-130-in-huntington-s-disease.html",
  },
  {
    text: "Quinn et al. Physical therapy clinical practice guideline for HD (Grade A for exercise). Neurology, 2020.",
    url: "https://pmc.ncbi.nlm.nih.gov/articles/PMC7080285/",
  },
];

export const statusTagClass = {
  clinic: "tag-clinic",
  trial: "tag-trial",
  preclin: "tag-preclin",
  paused: "tag-paused",
};
