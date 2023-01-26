import { SlRating } from '@shoelace-style/shoelace/dist/react';
// function for getting average rating from recipe ratings array
export const getAverageRating = (ratingsArray) => {
  return ratingsArray.reduce((partialSum, currentNum) => partialSum + currentNum, 0) / ratingsArray.length;
}

// function for rendering star rating
export const renderStars = (score) => {
  // round down for number of full stars
  let fullStars = Math.floor(score);
  // grab any partial star data after decimal
  const partialStar = Number(score.toString().split('.')[1][0]);

  // check for partialStar data
  if (partialStar) {
    // if partialStar exists, check value to render another full or half star, if any
    if (partialStar > 7) {
      fullStars++;
    } else if (partialStar > 2) {
      fullStars += .5;
    }
  }

  // return the allStars array of jsx elements
  return (
    <SlRating
      label="Rating"
      precision="0.5"
      value={fullStars}
      readonly
    >
    </SlRating>
  )
}
