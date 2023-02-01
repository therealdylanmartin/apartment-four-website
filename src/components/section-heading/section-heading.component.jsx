const SectionHeading = ({ lines, centered }) => {

  const getInnerContent = () => {
    let innerContent = [];

    lines.forEach((line, i) => {
      innerContent.push(line);
      innerContent.push(<br key={i} />);
    })
    innerContent.pop();

    return innerContent;
  }

  return (
    <h2 className={
      `h2${centered ? ' text-center' : ''}`
    }>
      {getInnerContent()}
    </h2>
  )
}

export default SectionHeading;