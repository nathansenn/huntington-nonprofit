// Open-research "findings" — plain-language summaries produced with AI research
// assistance and human editing, grounded in primary sources. These are
// PRELIMINARY and NOT clinically reviewed or medical advice. Each is dated and
// cites its sources so anyone can check the work.

export const findingsMeta = {
  method:
    "Produced with advanced AI research models and edited by a human. Each summary is grounded in the primary sources listed and links back to them.",
  reviewState: "Preliminary — human-edited, not yet reviewed by a medical expert.",
  license: "Creative Commons Attribution (CC BY 4.0) — reuse freely with credit.",
};

export const findings = [
  {
    slug: "hd-treatment-pipeline-june-2026",
    title: "The Huntington's disease treatment pipeline — where things stand",
    date: "2026-06-28",
    tags: ["pipeline", "therapies", "2026"],
    summary:
      "There is still no cure and no approved therapy that slows HD — but the pipeline is the most active in the disease's history. Here's an honest map of what's furthest along, what's newest, and what each result really shows.",
    points: [
      "AMT-130 (uniQure) is the furthest along: a one-time gene therapy that showed ~75% slowing of decline at 36 months (p=0.003) versus an external control in a small Phase I/II. In June 2026 the FDA agreed those data could anchor an accelerated-approval filing planned for around Q3 2026. Not yet approved.",
      "Several drugs lower the huntingtin protein: votoplam (oral, Phase 3 INVEST-HD enrolling), ION993 (a next-generation allele-selective ASO now in Phase 1), WVE-003 (allele-selective, for ~40% of patients), and tominersen (Phase 2 ongoing, no results yet).",
      "A newer strategy targets the repeat's own growth: SKY-0515 (Skyhawk) lowers both huntingtin and the repair gene PMS1 and reported up to ~69% huntingtin lowering in a 2026 interim readout; MSH3-lowering drugs are still preclinical.",
      "hNSC-01 (UC Irvine) is the first stem-cell therapy for HD to reach people, with the first participant dosed in May 2026 — a very early safety study.",
      "Not everything works: the Phase 3 pridopidine trial (PROOF-HD) missed its goals in 2025. We report the setbacks alongside the progress.",
    ],
    sources: [
      { text: "uniQure AMT-130 BLA plan (June 17, 2026)", url: "https://www.globenewswire.com/news-release/2026/06/17/3313322/0/en/uniqure-announces-plan-for-bla-submission-for-amt-130-in-huntington-s-disease.html" },
      { text: "PTC votoplam PIVOT-HD Month-24 results (April 2026)", url: "https://www.prnewswire.com/news-releases/ptc-therapeutics-reports-positive-topline-results-from-month-24-interim-analysis-of-pivot-hd-extension-study-of-votoplam-302756238.html" },
      { text: "Skyhawk SKY-0515 12-month interim (June 2026)", url: "https://huntington-disease.org/2026/06/02/skyhawk-therapeutics-announces-twelve-month-interim-results-from-phase-1-2-clinical-trial-of-sky-0515-in-huntingtons-disease/" },
      { text: "ION993 POINT-HD (ClinicalTrials.gov NCT07246941)", url: "https://clinicaltrials.gov/study/NCT07246941" },
      { text: "UC Irvine hNSC-01 first patient dosed (June 2026)", url: "https://news.uci.edu/2026/06/23/first-patient-receives-neural-stem-cell-therapy-in-groundbreaking-uci-health-huntingtons-disease-clinical-trial/" },
      { text: "Pridopidine PROOF-HD Phase 3 (Nature Medicine, 2025)", url: "https://www.nature.com/articles/s41591-025-03920-3" },
    ],
  },
  {
    slug: "slowing-the-repeat-itself",
    title: "A new way to fight HD: slowing the repeat itself",
    date: "2026-06-28",
    tags: ["somatic expansion", "biomarkers", "mechanism"],
    summary:
      "For years, HD looked like a fixed sentence written at birth. Research now shows the CAG repeat keeps growing inside neurons over a lifetime — and that opens a brand-new way to intervene, plus tests that can see the disease coming.",
    points: [
      "The repeat isn't static: it expands over decades inside vulnerable brain cells, and a 2025 single-cell study found neurons stay relatively healthy until it grows past roughly 150 copies (one study, not yet an established fixed number).",
      "Repair genes control that growth — MSH3 and PMS1 speed it up; FAN1 slows it down — which makes them drug targets. SKY-0515 (clinical) lowers PMS1; MSH3-lowering drugs and FAN1 boosters are earlier-stage.",
      "In the lab, a base-editing approach inserts tiny 'interruptions' into the repeat to stop it snowballing. Preclinical, but a striking proof of concept.",
      "The same biology gives us biomarkers: a 2025 study measured the repeat's growth in a blood test and found it predicts brain changes decades before symptoms. Neurofilament light (NfL) and the HD-ISS staging system also help spot HD early.",
    ],
    sources: [
      { text: "Handsaker et al., somatic expansion drives neurodegeneration (Cell, 2025)", url: "https://www.cell.com/cell/fulltext/S0092-8674(24)01379-5" },
      { text: "Bunting et al., MSH3 suppression in HD neurons (Sci Transl Med, 2025)", url: "https://www.science.org/doi/10.1126/scitranslmed.adn4600" },
      { text: "Somatic expansion as a blood biomarker (Nature Medicine, Jan 2025)", url: "https://www.nature.com/articles/s41591-024-03424-6" },
    ],
  },
  {
    slug: "kids-testing-and-family-planning",
    title: "What HD research means for kids: juvenile HD, testing & family planning",
    date: "2026-06-28",
    tags: ["juvenile HD", "genetic testing", "family planning"],
    summary:
      "The questions that weigh most on HD families with children rarely make headlines. Here's what the evidence and clinical guidance actually say about juvenile HD, testing kids, and having a family.",
    points: [
      "Juvenile HD (onset before 20) is rare and looks different from the adult form: speech changes, stiffness, school difficulties, and sometimes seizures come before chorea. It's tied to very long repeats and is almost always inherited from the father.",
      "Clinical guidance strongly advises against predictive testing of healthy children for adult-onset HD — the choice should wait until they're an informed adult. Testing is only used to diagnose a child who is already showing symptoms.",
      "Families have real options for having children: preimplantation genetic testing (PGT-M) with IVF can select an unaffected embryo with very high accuracy, and exclusion/non-disclosure testing lets a parent avoid passing HD on without learning their own status.",
      "A certified genetic counselor is the right guide for all of these decisions.",
    ],
    sources: [
      { text: "Huntington Disease — GeneReviews (updated Feb 2026)", url: "https://www.ncbi.nlm.nih.gov/books/NBK1305/" },
      { text: "Juvenile Huntington's disease review (Neurology, 2025)", url: "https://pmc.ncbi.nlm.nih.gov/articles/PMC12015966/" },
      { text: "PGT-M for Huntington's disease (Frontiers in Genetics, 2025)", url: "https://www.frontiersin.org/journals/genetics/articles/10.3389/fgene.2025.1599088/full" },
    ],
  },
];

// Illustrative donation-impact tiers. NOT a live donation system — these are
// estimates tied to real 2026 AI research costs, shown to convey scale.
export const impactTiers = [
  {
    name: "Spark",
    amount: "$10",
    blurb: "Roughly one automated literature-review run — an AI agent reads and summarizes recent HD papers, posted openly.",
  },
  {
    name: "Inquiry",
    amount: "$50",
    blurb: "About one full multi-step research run: an AI agent forms a question, searches the literature, reasons it through, and drafts a finding for human review.",
  },
  {
    name: "Sustained",
    amount: "$250",
    blurb: "Helps cover roughly a week of the research pipeline running, with all outputs published for everyone.",
  },
  {
    name: "Patron",
    amount: "$1,000+",
    blurb: "Supports about a month of continuous AI research plus the human review time that keeps findings honest.",
  },
];

export const openSciencePledge = [
  "Open access: every finding is free to read here — no paywall, no signup.",
  "Open license: written outputs are released under Creative Commons Attribution (CC BY 4.0); reuse them with credit.",
  "Open methods: we publish the models, sources, and inputs behind each finding so others can check our work.",
  "Plain language: every finding includes an everyday-language summary for the HD community.",
  "Preprints, not hype: we share work early as preliminary, and update or retract when better evidence appears.",
];
