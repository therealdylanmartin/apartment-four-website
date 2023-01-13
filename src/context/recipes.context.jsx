import { createContext, useState, useEffect } from 'react';
import { getRecipesAndDocuments } from '../utils/firebase/firebase.utils';

export const RecipesContext = createContext({
  recipes: {}
})

export const RecipesProvider = ({ children }) => {
  const [recipes, setRecipes] = useState({});
  const value = { recipes };

  useEffect(() => {
    const getRecipes = async () => {
      const fetchedRecipes = await getRecipesAndDocuments();
      setRecipes(fetchedRecipes);
    }

    getRecipes();
  }, [])

  return (
    <RecipesContext.Provider value={value}>
      {children}
    </RecipesContext.Provider>
  )
}