import { useContext } from 'react';
import { RecipesContext } from '../../context/recipes.context';

import RecipeTile from '../recipe-tile/recipe-tile.component';
import RecipeTileSkeleton from '../recipe-tile-skeleton/recipe-tile-skeleton.component';

import './recipes-grid.styles.scss';

const RecipesGrid = ({ limit = 24, pagination }) => {
  // intialize recipes from context
  const { recipes } = useContext(RecipesContext);
  let renderedRecipes = recipes;
  let dummyRecipes = [];

  for (let i = 0; i < limit; i++) {
    dummyRecipes.push('');
  }

  if (recipes.length && limit && !pagination) {
    renderedRecipes = renderedRecipes.slice(0, limit);
  } else if (pagination) {
    console.log('pagination set to true');
  }

  // render the recipes grid
  return (
    <div className="grid">

      {/* map through recipes array to display grid items */}
      {renderedRecipes.length ?
        renderedRecipes.map((recipe, i) => {
          return (
            <RecipeTile recipe={recipe} key={recipe.recipeNum} />
          )
        })
        :
        dummyRecipes.map((dummyRecipe, i) => {
          return (
            <RecipeTileSkeleton key={i} />
          )
        })
      }
    </div>
  )
}

export default RecipesGrid;