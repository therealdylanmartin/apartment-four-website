import RecipesSection from '../../components/recipes-section/recipes-section.component';
import AboutSection from '../../components/about-section/about-section.component';
import SubscribeSection from '../../components/subscribe-section/subscribe-section.component';

const Home = ({ recipes, aboutInfo }) => {

  return (
    <main>
      <RecipesSection
        idTag="recipes"
        lines={['New Recipes From', 'Apartment Four']}
        recipes={recipes}
        limit="10"
      />
      <AboutSection
        idTag="about-me"
        lines={['The Girl From', 'Apartment Four']}
        aboutInfo={aboutInfo}
      />
      <SubscribeSection
        idTag="subscribe"
        lines={['Sign Up For', 'Updates From', 'Apartment Four']}
      />
    </main>
  )
}

export default Home;