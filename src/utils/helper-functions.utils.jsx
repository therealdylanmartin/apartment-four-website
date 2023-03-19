import { SlRating } from '@shoelace-style/shoelace/dist/react';

export const sortRecipes = recipes => {
  const recipesArray = Object.values(recipes);
  // Once fetched, use sort() function to order recipes
  const sortedRecipes = recipesArray.sort((recipe1, recipe2) => {
    // Get date string from incoming recipe objects date last updated
    const date1 = recipe1.lastUpdated.slice(0, 10).replace(/-/g, '');
    const date2 = recipe2.lastUpdated.slice(0, 10).replace(/-/g, '');
    // If dates don't match, sort by newest date
    if (date2 - date1 !== 0) {
      return date2 - date1;
    } else {
      // Else sort by descending recipe number
      return recipe2.recipeNum - recipe1.recipeNum;
    }
  })

  return sortedRecipes;
}

// function for getting average rating from recipe ratings array
export const getAverageRating = ratingsArray => {
  return ratingsArray.reduce((partialSum, currentNum) => partialSum + currentNum, 0) / ratingsArray.length;
}

// function for rendering star rating
export const renderStars = score => {
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
      style={{ '--symbol-size': '1rem' }}
      readonly
    >
    </SlRating>
  )
}

// function for formatting date
export const formatDate = date => {
  let month, day, year;
  const dateArray = date.substring(0, 10).split(/-/g);
  year = dateArray[0];

  dateArray[1].charAt(0) === '0' ? month = dateArray[1].charAt(1) : month = dateArray[1];
  dateArray[2].charAt(0) === '0' ? day = dateArray[2].charAt(1) : day = dateArray[2];

  return `${month}/${day}/${year}`;
}
