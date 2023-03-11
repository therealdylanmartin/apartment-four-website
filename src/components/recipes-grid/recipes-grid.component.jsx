import { useOutletContext } from 'react-router-dom';
import { v4 as uuidv4 } from 'uuid';
import { sortRecipes } from '../../utils/helper-functions.utils';

import RecipeTile from '../recipe-tile/recipe-tile.component';
import RecipeTileSkeleton from '../recipe-tile-skeleton/recipe-tile-skeleton.component';

import './recipes-grid.styles.scss';

const RecipesGrid = ({ limit = 24, pagination }) => {
  // intialize recipes from context
  const { recipes } = useOutletContext();
  // Sort recipes to display
  let renderedRecipes = sortRecipes(recipes);
  let dummyRecipes = [];

  for (let i = 0; i < limit; i++) {
    dummyRecipes.push('');
  }

  if (renderedRecipes.length && limit && !pagination) {
    renderedRecipes = renderedRecipes.slice(0, limit);
    console.log(renderedRecipes);
  } else if (pagination) {
    console.log('pagination set to true');
  }

  // render the recipes grid
  return (
    <div className="grid">

      {/* map through recipes array to display grid items */}
      {renderedRecipes.length ?
        renderedRecipes.map(recipe => {
          return (
            <RecipeTile recipe={recipe} key={uuidv4()} />
          )
        })
        :
        dummyRecipes.map(dummyRecipe => {
          return (
            <RecipeTileSkeleton key={uuidv4()} />
          )
        })
      }
    </div>
  )
}

export default RecipesGrid;