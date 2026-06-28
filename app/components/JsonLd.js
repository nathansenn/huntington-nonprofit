// Renders one or more schema.org JSON-LD blocks.
// Accepts a single object or an array of objects via the `data` prop.
export default function JsonLd({ data }) {
  const blocks = Array.isArray(data) ? data : [data];
  return (
    <>
      {blocks.map((block, i) => (
        <script
          key={i}
          type="application/ld+json"
          // JSON.stringify output is safe to inline; escape '<' defensively.
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(block).replace(/</g, "\\u003c"),
          }}
        />
      ))}
    </>
  );
}
