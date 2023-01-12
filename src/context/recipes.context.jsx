import { createContext, useState } from 'react';

import RECIPES from '../data/recipes-data.json';

export const RecipesContext = createContext({
  recipes: []
})

export const RecipesProvider = ({ children }) => {
  const [recipes, setRecipes] = useState(RECIPES);
  const value = { recipes };

  return (
    <RecipesContext.Provider value={value}>
      {children}
    </RecipesContext.Provider>
  )
}