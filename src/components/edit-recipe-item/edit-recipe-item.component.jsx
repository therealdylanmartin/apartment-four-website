import { Link } from 'react-router-dom';
import { formatDate } from '../../utils/helper-functions.utils';

import Button from '../button/button.component';

import './edit-recipe-item.styles.scss';

const EditRecipeItem = ({ recipe }) => {
  // Destructure properties off recipe object
  const { imageForMobile, title, createdAt, lastUpdated, recipeId } = recipe;

  return (
    <li className="recipe-item">
      <div
        className="recipe-item__image"
        style={{ backgroundImage: `url(${imageForMobile.src})` }}
      >&nbsp;</div>
      <h3 className="recipe-item__title">
        <Link to={`/recipes/${recipeId.replaceAll(' ', '-')}`}>
          {title}
        </Link>
      </h3>
      <h4>
        <i>Created at:</i>
        <br />{formatDate(createdAt)}
      </h4>
      <h4>
        <i>Last updated:</i>
        <br />{formatDate(lastUpdated)}
      </h4>
      <Button
        path={`/recipes/${recipeId.replaceAll(' ', '-')}/edit`}
        buttonText="Edit Recipe"
        className="transparent width-auto no-margin"
      />
    </li>
  )
}

export default EditRecipeItem;