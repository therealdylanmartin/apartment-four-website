import { useState, useEffect } from 'react';
import { useLocation, Outlet } from 'react-router-dom';
import { useAuth } from '../../context/admin-user.context';
import { getRecipesAndDocuments } from '../../utils/firebase.utils';

import Header from '../../components/header/header.components';
import Section from '../../components/section/section.component';
import SectionHeading from '../../components/section-heading/section-heading.component';
import SubscribeForm from '../../components/subscribe-form/subscribe-form.component';
import Footer from '../../components/footer/footer.component';

const GlobalElements = ({ socialMediums }) => {
  // set pathname to variable for useEffect hook
  const location = useLocation();
  const pathname = location.pathname;
  // Get current user for outlet context
  const { currentUser } = useAuth();
  // Set empty object for recipes
  const [recipes, setRecipes] = useState({});
  // Set boolean for recipes updated state
  const [areRecipesUpToDate, setAreRecipesUpToDate] = useState(false);
  const [currentPathname, setCurrentPathname] = useState(pathname);

  useEffect(() => {
    // Update pathname state
    setCurrentPathname(pathname);
    // Scroll to top on link clicks
    window.scrollTo({
      top: 0,
      behavior: 'instant'
    })
  }, [pathname])

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
      <Header
        currentPathname={currentPathname}
      />
      <Outlet context={{
        currentUser,
        recipes,
        areRecipesUpToDate,
        setAreRecipesUpToDate
      }} />
      {!currentPathname.includes('/admin')
        && !currentPathname.includes('/recipes/new')
        && !currentPathname.includes('/edit')
        && <>
          <Section idTag="subscribe">
            <SectionHeading lines={['Sign Up For', 'Updates From', 'Apartment Four']} />
            <SubscribeForm />
          </Section>
          <Footer
            lines={['Follow Me']}
            socialMediums={socialMediums}
          />
        </>
      }
    </>
  )
}

export default GlobalElements;