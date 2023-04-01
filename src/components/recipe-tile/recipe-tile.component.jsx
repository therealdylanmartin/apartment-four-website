import { Link } from 'react-router-dom';

import './recipe-tile.styles.scss';

const RecipeTile = ({ recipe }) => {
  // Destructure properties off recipe object
  const { recipeId, title, imageForMobile } = recipe;

  return (
    <Link className="grid__tile-container" to={`/recipes/${recipeId.replaceAll(' ', '-')}`}>
      <div className="grid__tile" style={{ backgroundImage: `url(${imageForMobile.src})` }}>
      </div>
      <h3 className="recipe__title">{title}</h3>
    </Link>
  )
}

export default RecipeTile;