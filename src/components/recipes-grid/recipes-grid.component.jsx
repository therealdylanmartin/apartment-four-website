import { useContext, useEffect } from 'react';
import { RecipesContext } from '../../context/recipes.context';

import RecipeTile from '../recipe-tile/recipe-tile.component';
import LoadingSpinner from '../loading-spinner/loading-spinner.component';

import './recipes-grid.styles.scss';

const RecipesGrid = ({ limit, pagination }) => {
  // intialize recipes from context
  let { recipes } = useContext(RecipesContext);

  // render the recipes grid
  return (
    <div className="grid">

      {/* map through recipes array to display grid items */}
      {Array.isArray(recipes) ?
        recipes.map(recipe => {
          return (
            <RecipeTile recipe={recipe} key={recipe.id} />
          )
        })
        :
        <LoadingSpinner />
      }
    </div>
  )
}

export default RecipesGrid;