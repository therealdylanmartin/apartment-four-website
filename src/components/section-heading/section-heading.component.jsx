import { v4 as uuidv4 } from 'uuid';

const SectionHeading = ({ lines, centered }) => {

  const getInnerContent = () => {
    let innerContent = [];

    lines.forEach(line => {
      innerContent.push(line);
      innerContent.push(<br key={uuidv4()} />);
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