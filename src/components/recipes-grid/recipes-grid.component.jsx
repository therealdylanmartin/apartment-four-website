import { useContext } from 'react';
import { RecipesContext } from '../../context/recipes.context';

import RecipeTile from '../recipe-tile/recipe-tile.component';
import LoadingSpinner from '../loading-spinner/loading-spinner.component';

import './recipes-grid.styles.scss';

const RecipesGrid = ({ limit, pagination }) => {
  // intialize recipes from context
  const { recipes } = useContext(RecipesContext);
  let renderedRecipes = recipes;

  if (recipes.length && limit) {
    renderedRecipes = renderedRecipes.slice(0, limit);
  }

  // render the recipes grid
  return (
    <div className="grid">

      {/* map through recipes array to display grid items */}
      {renderedRecipes.length ?
        renderedRecipes.map(recipe => {
          return (
            <RecipeTile recipe={recipe} key={recipe.recipeNum} />
          )
        })
        :
        <LoadingSpinner />
      }
    </div>
  )
}

export default RecipesGrid;