import { Helmet } from "react-helmet";

import Section from '../../components/section/section.component';
import SectionHeading from '../../components/section-heading/section-heading.component';
import RecipesGrid from '../../components/recipes-grid/recipes-grid.component';
import Button from '../../components/button/button.component';

import './home.styles.scss';

const Home = ({ aboutInfo }) => {
  const { image, description } = aboutInfo;

  return (
    <main>
      <Helmet>
        <title>Apartment Four | A Place for Recipes</title>
        <meta
          name="description"
          content="I develop recipes with pant-based whole food ingredients for the busy minded modern foodie. These delightful and delicious recipes prove you can live a healthy lifestyle without sacrificing on flavor. You can have your cake... and eat it too!"
        />
        <link rel="canonical" href="https://fromapartmentfour.com/" />
        <meta property="og:type" content="website" />
      </Helmet>
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
        <div className="about-me__composition">
          <figure>
            <img
              className="about-me__img"
              src={image.src}
              alt={image.altText}
            />
          </figure>
          <div className="content--right">
            <p className="p">
              {description}
            </p>
            <Button
              buttonText="Get in Touch"
              path="mailto:rachael@fromapartmentfour.com"
              iconName="envelope-at"
              className="inverted"
            />
          </div>
        </div>
      </Section>
    </main>
  )
}

export default Home;