import { useContext } from 'react';
import { RecipesContext } from '../../context/recipes.context';

import RecipeTile from '../recipe-tile/recipe-tile.component';

import './recipes-grid.styles.scss';

const RecipesGrid = ({ limit, pagination }) => {
  // intialize recndered recipes as incoming recipes object
  const { recipes } = useContext(RecipesContext);
  let renderedRecipes = recipes;
  // if a limit is set, slice array at chosen limit
  if (limit) {
    renderedRecipes = renderedRecipes.slice(0, limit);
  }

  // render the recipes grid
  return (
    <div className="grid">

      {/* map through recipes array to display grid items */}
      {renderedRecipes.map(recipe => {
        return (
          <RecipeTile recipe={recipe} key={recipe.id} />
        )
      })}
    </div>
  )
}

export default RecipesGrid;