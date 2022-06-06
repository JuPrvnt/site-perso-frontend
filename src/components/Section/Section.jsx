import "./Section.scss";

const Section = ({ id, children }) => {
  return (
    <section id={id}>
      <div className="container">{children}</div>
    </section>
  );
};

export default Section;
