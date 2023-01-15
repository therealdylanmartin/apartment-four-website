import Section from '../../components/section/section.component';
import SectionHeading from '../../components/section-heading/section-heading.component';
import RecipesGrid from '../../components/recipes-grid/recipes-grid.component';
import Button from '../../components/button/button.component';

const Home = ({ aboutInfo }) => {
  const { image, description } = aboutInfo;

  return (
    <main>
      <Section idTag="recipes">
        <SectionHeading lines={['New Recipes From', 'Apartment Four']} />
        <RecipesGrid
          limit="12"
        />
        <Button
          buttonText="View All Recipes"
          path="/recipes"
        />
      </Section>
      <Section
        idTag="about-me"
        inverted
      >
        <SectionHeading lines={['The Girl From', 'Apartment Four']} />
        <figure>
          <img
            className="about-me__img"
            src={image.src}
            alt={image.altText}
          />
        </figure>
        <p className="p">
          {description}
        </p>
        <Button
          buttonText="Get in Touch"
          path="mailto:rachael@fromapartmentfour.com"
          faCode={{ style: 'regular', icon: 'envelope' }}
        />
      </Section>
    </main>
  )
}

export default Home;