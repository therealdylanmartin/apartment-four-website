import { Routes, Route } from 'react-router-dom';
import ABOUT_INFO from './data/about-info-data.json';

// Page/Route components
import GlobalElements from './routes/global-elements/global-elements.component';
import Home from './routes/home/home.component';
import Recipes from './routes/recipes/recipes.component';
import Admin from './routes/admin/admin';

// import Fontawesome icons for use
import { library as faLibrary } from '@fortawesome/fontawesome-svg-core';
import { faStar, faStarHalfStroke, faBars, faSpinner } from '@fortawesome/free-solid-svg-icons';
import { faStar as faStarEmpty, faEnvelope } from '@fortawesome/free-regular-svg-icons';
import { faTiktok, faInstagram, faPinterestP } from '@fortawesome/free-brands-svg-icons';

// add imported FA icons to faLibrary
faLibrary.add(
  faStar,
  faStarHalfStroke,
  faBars,
  faSpinner,
  faStarEmpty,
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
        <Route
          path="recipes"
          element={
            <Recipes />
          }
        />
      </Route>
      <Route
        path="/admin"
        element={
          <Admin />
        }
      />
    </Routes>
  )
}

export default App;
