const Section = ({ idTag, inverted, children }) => {

  return (
    <section
      id={idTag}
      className={`section__${idTag}${inverted ? ' section--inverted' : ''}`}
    >
      {children}
    </section>
  )
}

export default Section;