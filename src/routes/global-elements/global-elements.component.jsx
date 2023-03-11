import { useState, useEffect } from 'react';
import { Outlet } from 'react-router-dom';
import { getRecipesAndDocuments } from '../../utils/firebase.utils';

import Header from '../../components/header/header.components';
import Section from '../../components/section/section.component';
import SectionHeading from '../../components/section-heading/section-heading.component';
import SubscribeForm from '../../components/subscribe-form/subscribe-form.component';
import Footer from '../../components/footer/footer.component';

const GlobalElements = ({ socialMediums }) => {
  // Set empty array for recipes
  const [recipes, setRecipes] = useState({});
  const [areRecipesUpToDate, setAreRecipesUpToDate] = useState(false);

  useEffect(() => {
    // Create function to fetch recipes from Firestore database
    const getRecipes = async () => {
      // Initiate fetch
      const fetchedRecipes = await getRecipesAndDocuments();
      // Set the recipes state with the sorted recipes object
      setRecipes(fetchedRecipes);
      setAreRecipesUpToDate(true);
    }

    // Trigger the function to initiate recipes fetch from Firestore database
    if (!areRecipesUpToDate) {
      getRecipes();
    }
  }, [recipes, areRecipesUpToDate])

  return (
    <>
      <Header />
      <Outlet context={{
        recipes,
        setRecipes,
        areRecipesUpToDate,
        setAreRecipesUpToDate
      }} />
      <Section idTag="subscribe">
        <SectionHeading lines={['Sign Up For', 'Updates From', 'Apartment Four']} />
        <SubscribeForm />
      </Section>
      <Footer
        lines={['Follow Me']}
        socialMediums={socialMediums}
      />
    </>
  )
}

export default GlobalElements;