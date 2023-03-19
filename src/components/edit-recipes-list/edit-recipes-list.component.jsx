import { useOutletContext } from 'react-router-dom';
import { v4 as uuidv4 } from 'uuid';
import { sortRecipes } from '../../utils/helper-functions.utils';

import EditRecipeItem from '../edit-recipe-item/edit-recipe-item.component';

import './edit-recipes-list.styles.scss';

const EditRecipesList = () => {
  // intialize recipes from context
  const { recipes } = useOutletContext();
  // Sort recipes to display
  let renderedRecipes = sortRecipes(recipes);

  // render the list of recipes available to edit
  return (
    <ul className="recipes-list">

      {/* map through recipes array to display grid items */}
      {renderedRecipes.length ?
        renderedRecipes.map(recipe => {
          return (
            <EditRecipeItem recipe={recipe} key={uuidv4()} />
          )
        })
        :
        ''
      }
    </ul>
  )
}

export default EditRecipesList;