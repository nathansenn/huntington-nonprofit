export default function KnowledgePedestals({ items }) {
  return (
    <section className="panel pedestals">
      <h3>Interactive R&amp;D Library</h3>
      <p className="lead">
        3D-ready information nodes for every model and workflow in the HD Master Engine.
      </p>
	      <div className="pedestal-grid">
	        {items.map((item) => (
	          <article key={item.title} className="pedestal">
	            <div className={`light-bar ${item.status.toLowerCase().replace(/\s+/g, '-')}`} />
	            <h4>{item.title}</h4>
            <p>{item.description}</p>
            <span>{item.status}</span>
          </article>
        ))}
      </div>
    </section>
  );
}
