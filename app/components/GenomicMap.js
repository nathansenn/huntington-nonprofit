"use client";

import { useEffect, useMemo, useState } from "react";

function buildSeries(seed) {
  const points = [];
  for (let i = 0; i < 20; i += 1) {
    const age = i + 1;
    const base = 140 + Math.sin(seed + age * 0.22) * 20;
    const wave = (Math.cos(age * 0.4) * 12);
    const noise = ((seed * 7 + age * 13) % 11) - 5;
    points.push({
      label: `${age * 4}`,
      value: Math.max(60, Math.round(base + wave + noise)),
    });
  }
  return points;
}

export default function GenomicMap() {
  const [tick, setTick] = useState(0);
  const points = useMemo(() => buildSeries(tick), [tick]);

  useEffect(() => {
    const timer = setInterval(() => {
      setTick((current) => (current + 1) % 10000);
    }, 450);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="panel">
      <h3>Genomic Map (Somatic Expansion Kinetics)</h3>
      <p className="lead">
        Real-time simulation of age-vs-threshold trajectory.
      </p>
      <div className="genomic-map" aria-label="Live somatic expansion chart">
        {points.map((point) => (
          <div className="genomic-point" key={point.label}>
            <span>{point.label}</span>
            <div className="genomic-bar-wrap">
              <span style={{ height: `${(point.value / 200) * 100}%` }} />
            </div>
          </div>
        ))}
      </div>
      <div className="muted mini-note">Tick: {tick}</div>
    </section>
  );
}
