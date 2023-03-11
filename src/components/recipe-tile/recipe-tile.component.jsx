import { Link } from 'react-router-dom';
import { getAverageRating, renderStars } from '../../utils/helper-functions.utils';

import './recipe-tile.styles.scss';

const RecipeTile = ({ recipe }) => {
  // Destructure properties off recipe object
  const { recipeId, title, imageForMobile, time, ratings } = recipe;

  // Get average rating for recipe
  const averageRating = getAverageRating(ratings);

  return (
    <Link className="grid__tile-container" to={`/recipes/${recipeId.replaceAll(' ', '-')}`}>
      <div className="grid__tile" style={{ backgroundImage: `url(${imageForMobile.src})` }}>
        <p className="recipe__time">{time.totalTime}m</p>
        {!isNaN(averageRating) &&
          <h6 className="recipe__rating" aria-label={`Rated ${averageRating} stars from ${ratings.length} reviews`}>
            {renderStars(averageRating)}
          </h6>
        }
      </div>
      <h3 className="recipe__title">{title}</h3>
    </Link>
  )
}

export default RecipeTile;