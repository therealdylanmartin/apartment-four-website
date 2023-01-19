import { createContext, useState, useEffect } from 'react';
import { getRecipesAndDocuments } from '../utils/firebase.utils';

export const RecipesContext = createContext({
  recipes: {}
})

export const RecipesProvider = ({ children }) => {
  // Set empty array for recipes
  const [recipes, setRecipes] = useState([]);
  // Point to recipes reference for Provider value
  const value = { recipes };

  useEffect(() => {
    // Create function to fetch recipes from Firestore database
    const getRecipes = async () => {
      // Initiate fetch
      const fetchedRecipes = await getRecipesAndDocuments();
      // Once fetched, use sort() function to order recipes
      const sortedRecipes = fetchedRecipes.sort((recipe1, recipe2) => {
        // Get date string from incoming recipe objects date last updated
        const date1 = recipe1.lastUpdated.slice(0, 10).replace(/-/g, '');
        const date2 = recipe2.lastUpdated.slice(0, 10).replace(/-/g, '');
        // If dates don't match, sort by newest date
        if (date2 - date1 !== 0) {
          return date2 - date1;
        } else {
          // Else sort by descending recipe number
          return recipe2.recipeNum - recipe1.recipeNum;
        }
      })
      // Set the recipes state with the sorted recipes object
      setRecipes(sortedRecipes);
    }

    // Trigger the function to initiate recipes fetch from Firestore database
    getRecipes();
  }, [])

  // Use the state recipes object as value for the context provider
  return (
    <RecipesContext.Provider value={value}>
      {children}
    </RecipesContext.Provider>
  )
}