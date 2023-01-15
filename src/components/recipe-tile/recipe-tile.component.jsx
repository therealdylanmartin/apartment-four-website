import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import './recipe-tile.styles.scss';

const RecipeTile = ({ recipe }) => {
  // destructure properties off recipe object
  const { title, imageForMobile, time, ratings } = recipe;
  // convert recipe title to a lower case hyphenated slug
  const recipeSlug = title.toLowerCase().replace(' ', '-');
  // Get average rating for recipe
  const averageRating = ratings.reduce((partialSum, currentNum) => partialSum + currentNum, 0) / ratings.length;

  // function for rendering star rating
  const renderStars = (score) => {
    // round down for number of full stars
    const fullStars = Math.floor(score);
    // grab any partial star data after decimal
    const partialStar = Number(score.toString().split('.')[1].split('')[0]);
    // initialize allStars as empty array, set current key to 1
    let allStars = [];
    let currentKey = 1;
    // loop through all full stars and push icons to allStars array
    for (let i = 0; i < fullStars; i++) {
      allStars.push(<FontAwesomeIcon icon="fa-solid fa-star" key={currentKey} />);
      currentKey++;
    }
    // check for partialStar data
    if (partialStar) {
      // if partialStar exists, check value to render full, half, or empty star icon
      if (partialStar > 7) {
        allStars.push(<FontAwesomeIcon icon="fa-solid fa-star" key={currentKey} />);
        currentKey++;
      } else if (partialStar > 2) {
        allStars.push(<FontAwesomeIcon icon="fa-solid fa-star-half-stroke" key={currentKey} />);
        currentKey++;
      } else {
        allStars.push(<FontAwesomeIcon icon="fa-regular fa-star" key={currentKey} />);
        currentKey++;
      }
    }
    // if the length of allStars hasn't reached 5, there are empty stars to render
    if (allStars.length !== 5) {
      for (let i = allStars.length; i < 5; i++) {
        allStars.push(<FontAwesomeIcon icon="fa-regular fa-star" key={currentKey} />);
        currentKey++;
      }
    }
    // return the allStars array of jsx elements
    return allStars;
  }

  return (
    <a className="grid__tile-container" href={`/recipes/${recipeSlug}`}>
      <div className="grid__tile" style={{ backgroundImage: `url(${imageForMobile.src})` }}>
        <p className="recipe__time">{time.totalTime}m</p>
        <h6 className="recipe__rating" aria-label={`Rated ${averageRating} stars from ${ratings.length} reviews`}>
          {renderStars(averageRating)}
        </h6>
      </div>
      <h3 className="recipe__title">{title}</h3>
    </a>
  )
}

export default RecipeTile;