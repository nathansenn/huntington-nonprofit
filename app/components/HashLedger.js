const artifactHashes = [
  {
    artifact: "7006_hd_master_engine.py",
    hash: "c4e71f5ceea3f3a834be58ed1962ba3a044024eb9fe70d0e161018b3fe5c488c",
  },
  {
    artifact: "6978_HD_Cure_Protocol_v1.0_Senn_Biomedical.docx",
    hash: "21900718c4f0a1030e4a9d95b657269bdd8c9a73b6ae08583bf180c8a63dcac3",
  },
  {
    artifact: "6967_HD_CURE_COMPLETE_SYSTEM_MAP.md",
    hash: "8267949106dbbce2734bdc8c05cf8a60d6aa15f756c4aeabec7cee0bec9cae70",
  },
];

export default function HashLedger() {
  return (
    <section id="ordered-light-hash" className="panel">
      <h3>Verification Hashing</h3>
      <p className="lead">
        Hive provenance placeholders can be replaced with live on-chain hashes once posting keys are active.
      </p>
      <div className="hash-table">
        <div className="hash-row hash-head">
          <span>Artifact</span>
          <span>Integrity Hash</span>
        </div>
        {artifactHashes.map((row) => (
          <div key={row.artifact} className="hash-row">
            <span>{row.artifact}</span>
            <code>{row.hash}</code>
          </div>
        ))}
      </div>
    </section>
  );
}
