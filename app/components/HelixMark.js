// Small decorative brand mark: two strands forming a helix + a heart.
export default function HelixMark({ className }) {
  return (
    <svg
      className={className}
      viewBox="0 0 48 48"
      role="img"
      aria-label="Huntington Family Hope Foundation logo"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect width="48" height="48" rx="12" fill="#12454f" />
      <path
        d="M17 11c0 7 14 7 14 13s-14 6-14 13"
        stroke="#e0913a"
        strokeWidth="2.4"
        strokeLinecap="round"
      />
      <path
        d="M31 11c0 7-14 7-14 13s14 6 14 13"
        stroke="#7fc6cf"
        strokeWidth="2.4"
        strokeLinecap="round"
      />
      <line x1="18.5" y1="16" x2="29.5" y2="16" stroke="#cfe3e7" strokeWidth="1.6" strokeLinecap="round" />
      <line x1="20" y1="24" x2="28" y2="24" stroke="#cfe3e7" strokeWidth="1.6" strokeLinecap="round" />
      <line x1="18.5" y1="32" x2="29.5" y2="32" stroke="#cfe3e7" strokeWidth="1.6" strokeLinecap="round" />
    </svg>
  );
}
