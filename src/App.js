import { Routes, Route } from 'react-router-dom';
import ABOUT_INFO from './data/about-info-data.json';

// Page/Route components
import GlobalElements from './routes/global-elements/global-elements.component';
import Home from './routes/home/home.component';
import Recipes from './routes/recipes/recipes.component';
import Recipe from './routes/recipe/recipe.component';
import EditRecipe from './routes/edit-recipe/edit-recipe.component';
// import CreateRecipesData from './routes/create-recipes-data/create-recipes-data.component';
import Admin from './routes/admin/admin';

// Shoelace Style UI
import '@shoelace-style/shoelace/dist/themes/light.css';
import { setBasePath } from '@shoelace-style/shoelace/dist/utilities/base-path';

// Set path for Shoelace Style
setBasePath('https://cdn.jsdelivr.net/npm/@shoelace-style/shoelace@2.0.0/dist/');

// Build app
const App = () => {
  // Use dummy 'About Me' info
  const aboutInfo = ABOUT_INFO;

  // Scroll to About me section if pathname is about-me
  if (window.location.hash === '#about-me') {
    setTimeout(() => {
      const aboutMeElem = document.getElementById('about-me');
      aboutMeElem.scrollIntoView({
        behavior: 'smooth'
      })
    }, 300)
  }

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
            path="new"
            element={
              <EditRecipe />
            }
          />
          <Route path=":recipeId/">
            <Route
              index
              element={
                <Recipe />
              }
            />
            <Route
              path="edit"
              element={
                <EditRecipe />
              }
            />
          </Route>
          {/* <Route
            path="create-database"
            element={
              <CreateRecipesData />
            }
          /> */}
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
