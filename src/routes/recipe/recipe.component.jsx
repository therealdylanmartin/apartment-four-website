import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { GetSingleRecipeDocument } from '../../utils/firebase.utils';
import { getAverageRating, renderStars } from '../../utils/helper-functions.utils';

import Section from '../../components/section/section.component';
import SectionHeading from '../../components/section-heading/section-heading.component';
import LoadingSpinner from '../../components/loading-spinner/loading-spinner.component';

const Recipe = () => {
  const [recipe, setRecipe] = useState({});
  const { recipeId } = useParams();

  useEffect(() => {
    const getRecipe = async () => {
      const fetchedRecipe = await GetSingleRecipeDocument(recipeId);
      setRecipe(fetchedRecipe);
    }


    getRecipe();
  }, [recipeId])

  const {
    createdAt,
    lastUpdated,
    title,
    description,
    imageForMobile,
    imageForDesktop,
    time,
    ingredients,
    directions,
    ratings
  } = recipe;

  const formatDate = (date) => {
    let month, day, year;

    const dateArray = date.substring(0, 10).split(/-/g);

    year = dateArray[0];

    if (dateArray[1].charAt(0) === '0') {
      month = dateArray[1].charAt(1);
    } else {
      month = dateArray[1];
    }

    if (dateArray[2].charAt(0) === '0') {
      day = dateArray[2].charAt(1);
    } else {
      day = dateArray[2];
    }

    return `${month}/${day}/${year}`;
  }

  const renderOtherTimeCategories = () => {
    let otherTimeItems = [];

    if (time.otherTime) {
      for (const [key, value] of Object.entries(time.otherTime)) {
        if (value) {
          let formattedKey = key.replace(/([A-Z]+)/g, ' $1');
          formattedKey = formattedKey.charAt(0).toUpperCase() + formattedKey.slice(1);

          otherTimeItems.push(<li>{formattedKey}: {value}</li>);
        }
      }
    }

    return otherTimeItems;
  }

  return (
    <main>
      <Section idTag="single-recipe">

        {/* map through recipes array to display grid items */}
        {recipe.title ?
          <div>
            <figure>
              <img
                className="image--mobile"
                src={imageForMobile.src}
                alt={imageForMobile.altText}
              />
              <img
                className="image--desktop"
                src={imageForDesktop.src}
                alt={imageForDesktop.altText}
              />
            </figure>
            <SectionHeading lines={[title]} />
            <p>Recipe created at {formatDate(createdAt)} and last updated {formatDate(lastUpdated)}.</p>
            {description.map((paragraph, index) => {
              return <p key={index}>{paragraph}</p>;
            })}
            {ratings.length ?
              renderStars(getAverageRating(ratings))
              :
              ''
            }
            <ul>
              <li>Active Time: {time.activeTime}</li>
              {renderOtherTimeCategories()}
              <li>Total Time: {time.totalTime}</li>
            </ul>
            <ul>
              {ingredients.map((ingredient, index) => {
                const renderedIngredient = ingredient.heading ? <h3>{ingredient.heading}</h3> : ingredient;
                return <li key={index}>{renderedIngredient}</li>;
              })}
            </ul>
            {directions.map((step, index) => {
              return (
                <div className="recipe__step" key={index}>
                  <h3>{step.heading}</h3>
                  <p>{step.description}</p>
                </div>
              )
            })}
          </div>
          :
          <LoadingSpinner />
        }
      </Section>
    </main>
  )
}

export default Recipe;