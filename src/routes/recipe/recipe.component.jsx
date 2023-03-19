import { useState, useEffect } from 'react';
import { useParams, useOutletContext } from 'react-router-dom';
import { useAuth } from '../../context/admin-user.context';
import { v4 as uuidv4 } from 'uuid';
import { getAverageRating, renderStars, formatDate } from '../../utils/helper-functions.utils';

import Section from '../../components/section/section.component';
import CircleButton from '../../components/circle-button/circle-button.component';
import SectionHeading from '../../components/section-heading/section-heading.component';
import LoadingSpinner from '../../components/loading-spinner/loading-spinner.component';

const Recipe = () => {
  // Get recipes from context
  const { recipes } = useOutletContext();
  const { currentUser } = useAuth();
  // Initialize empty object for recipe state
  const [recipe, setRecipe] = useState({});
  // Get recipe id from params
  const { recipeId } = useParams();

  useEffect(() => {
    // Set current recipe if recipes object has items
    if (Object.keys(recipes).length && recipeId) {
      setRecipe(recipes[recipeId.replaceAll('-', ' ')]);
    }
  }, [recipes, recipeId])

  // Deconstruct properties from recipe object
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

  const renderOtherTimeCategories = () => {
    // Initialize empty array for otherTimes to render
    let otherTimeItems = [];

    if (time.otherTime) {
      for (const [key, value] of Object.entries(time.otherTime)) {
        // If value for other time category isn't null, format for rendering
        if (value) {
          const timeType = key.split('T')[0];
          const timeTypeCapitalized = `${timeType[0].toUpperCase()}${timeType.slice(1)}`;
          // Push <li> element to other time array for rendering
          otherTimeItems.push(<li>{timeTypeCapitalized} Time: {value}m</li>);
        }
      }
    }

    return otherTimeItems;
  }

  return (
    <main>
      <Section idTag="single-recipe">

        {/* check title to see if it is loaded and render recipe */}
        {recipe.title ?
          <>
            {currentUser
              && <CircleButton
                iconName="pencil-fill"
                path={`/recipes/${recipeId}/edit`}
                className="fixed push-left"
              />
            }
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
            <p>Recipe created on {formatDate(createdAt)} and last updated {formatDate(lastUpdated)}</p>
            {description.map(paragraph => {
              return <p key={uuidv4()}>{paragraph}</p>;
            })}
            {ratings.length ?
              renderStars(getAverageRating(ratings))
              :
              ''
            }
            <ul>
              <li>Active Time: {time.activeTime}m</li>
              {renderOtherTimeCategories()}
              <li>Total Time: {time.totalTime}m</li>
            </ul>
            <ul>
              {ingredients.map(ingredient => {
                const renderedIngredient = ingredient.heading ? <h3>{ingredient.heading}</h3> : ingredient;
                return <li key={uuidv4()}>{renderedIngredient}</li>;
              })}
            </ul>
            {directions.map(step => {
              return (
                <div className="recipe__step" key={uuidv4()}>
                  <h3>{step.heading}</h3>
                  {step.description.map(paragraph => (
                    <p key={uuidv4()}>{paragraph}</p>
                  ))}
                </div>
              )
            })}
          </>
          :
          <LoadingSpinner />
        }
      </Section>
    </main>
  )
}

export default Recipe;