import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

// function for getting average rating from recipe ratings array
export const getAverageRating = (ratingsArray) => {
  return ratingsArray.reduce((partialSum, currentNum) => partialSum + currentNum, 0) / ratingsArray.length;
}

// function for rendering star rating
export const renderStars = (score) => {
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