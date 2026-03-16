
function Section({ id, title, children }) {
  return (
    <section id={id} className="app-section">
      <div className="section-content">
        {children}
      </div>
    </section>
  );
}

export default Section;