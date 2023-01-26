import { Routes, Route } from 'react-router-dom';
import ABOUT_INFO from './data/about-info-data.json';

// Page/Route components
import GlobalElements from './routes/global-elements/global-elements.component';
import Home from './routes/home/home.component';
import Recipes from './routes/recipes/recipes.component';
import CreateRecipesData from './routes/create-recipes-data/create-recipes-data.component';
import Admin from './routes/admin/admin';

// Shoelace Style UI
import '@shoelace-style/shoelace/dist/themes/light.css';
import { setBasePath } from '@shoelace-style/shoelace/dist/utilities/base-path';

// import Fontawesome icons for use
import { library as faLibrary } from '@fortawesome/fontawesome-svg-core';
import { faBars, faSpinner } from '@fortawesome/free-solid-svg-icons';
import { faEnvelope } from '@fortawesome/free-regular-svg-icons';
import { faTiktok, faInstagram, faPinterestP } from '@fortawesome/free-brands-svg-icons';
import Recipe from './routes/recipe/recipe.component';

// Set path for Shoelace Style
setBasePath('https://cdn.jsdelivr.net/npm/@shoelace-style/shoelace@2.0.0/dist/');

// add imported FA icons to faLibrary
faLibrary.add(
  faBars,
  faSpinner,
  faEnvelope,
  faTiktok,
  faInstagram,
  faPinterestP
);

// Build app
const App = () => {
  // Use dummy 'About Me' info
  const aboutInfo = ABOUT_INFO;

  // Render the app with Header, Footer, and Pages inside Router element
  return (
    <Routes>
      <Route
        path="/"
        element={
          <GlobalElements
            socialMediums={aboutInfo.socialMediums}
          />
        }
      >
        <Route
          index
          element={
            <Home
              aboutInfo={aboutInfo}
            />
          }
        />
        <Route path="recipes/">
          <Route
            index
            element={
              <Recipes />
            }
          />
          <Route
            path=":recipeId"
            element={
              <Recipe />
            }
          />
          <Route
            path="create-database"
            element={
              <CreateRecipesData />
            }
          />
        </Route>
      </Route>
      <Route
        path="admin"
        element={
          <Admin />
        }
      />
    </Routes>
  )
}

export default App;
