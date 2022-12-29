import SectionHeading from '../section-heading/section-heading.component';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const AboutSection = ({ idTag, lines, aboutInfo }) => {
  const { image, description } = aboutInfo;

  return (
    <section id={idTag} className={`section__${idTag}`}>
      <SectionHeading lines={lines} inverted={true} />
      <figure>
        <img className="about-me__img" src={image.path} alt={image.altText} />
      </figure>
      <p>
        {description}
      </p>
      <a href="mailto:rachael@fromapartmentfour.com">
        Get in Touch <FontAwesomeIcon icon="fa-regular fa-envelope" />
      </a>
    </section>
  )
}

export default AboutSection;