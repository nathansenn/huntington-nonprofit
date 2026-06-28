// Decorative hero artwork: a stylized DNA double helix.
// Purely illustrative — not a data visualization.
export default function DnaArt() {
  const rungs = [];
  for (let i = 0; i < 11; i += 1) {
    const t = i / 10;
    const y = 24 + t * 252;
    const phase = t * Math.PI * 3;
    const x1 = 90 + Math.sin(phase) * 54;
    const x2 = 90 - Math.sin(phase) * 54;
    const front = Math.sin(phase) >= 0;
    rungs.push({ y, x1, x2, front, key: i });
  }

  const strand = (dir) => {
    let d = "";
    for (let i = 0; i <= 60; i += 1) {
      const t = i / 60;
      const y = 24 + t * 252;
      const x = 90 + dir * Math.sin(t * Math.PI * 3) * 54;
      d += `${i === 0 ? "M" : "L"}${x.toFixed(1)} ${y.toFixed(1)} `;
    }
    return d.trim();
  };

  return (
    <div className="helix-card">
      <svg viewBox="0 0 180 300" role="img" aria-label="Illustration of a DNA double helix">
        <defs>
          <linearGradient id="s1" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0" stopColor="#1f7a8c" />
            <stop offset="1" stopColor="#12454f" />
          </linearGradient>
          <linearGradient id="s2" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0" stopColor="#e0913a" />
            <stop offset="1" stopColor="#c2576b" />
          </linearGradient>
        </defs>
        {rungs.map((r) => (
          <line
            key={r.key}
            x1={r.x1}
            y1={r.y}
            x2={r.x2}
            y2={r.y}
            stroke={r.front ? "#cfe3e7" : "#e7dccb"}
            strokeWidth="3"
            strokeLinecap="round"
          />
        ))}
        <path d={strand(1)} fill="none" stroke="url(#s1)" strokeWidth="5" strokeLinecap="round" />
        <path d={strand(-1)} fill="none" stroke="url(#s2)" strokeWidth="5" strokeLinecap="round" />
        {rungs.map((r) => (
          <g key={`n-${r.key}`}>
            <circle cx={r.x1} cy={r.y} r="4.5" fill="#1f7a8c" />
            <circle cx={r.x2} cy={r.y} r="4.5" fill="#e0913a" />
          </g>
        ))}
      </svg>
      <p className="caption">
        Huntington&rsquo;s disease begins in a single gene — and that is exactly where
        today&rsquo;s most promising research is aimed.
      </p>
    </div>
  );
}
