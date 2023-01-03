const SectionHeading = ({ lines, centered }) => {

  const getInnerContent = () => {
    let innerContent = [];

    for (let i = 0; i < lines.length; i++) {
      innerContent.push(lines[i]);
      innerContent.push(<br key={i} />);
    }
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