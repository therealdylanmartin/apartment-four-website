import { useState, useEffect } from 'react';
import { useParams, useOutletContext } from 'react-router-dom';
import { v4 as uuidv4 } from 'uuid';
import { SlIcon } from '@shoelace-style/shoelace/dist/react';
import { getAverageRating, renderStars, formatDate } from '../../utils/helper-functions.utils';

import Section from '../../components/section/section.component';
import CircleButton from '../../components/circle-button/circle-button.component';
import SectionHeading from '../../components/section-heading/section-heading.component';
import LoadingOverlay from '../../components/loading-overlay/loading-overlay.component';
import Modal from '../../components/modal/modal.component'

import './recipe.styles.scss';

const Recipe = () => {
  // Get recipes from context
  const { currentUser, recipes } = useOutletContext();
  // Initialize empty object for recipe state
  const [recipe, setRecipe] = useState({});
  // Set modal state
  const [isModalOpen, setIsModalOpen] = useState(false);
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
    servings,
    ingredients,
    preparation,
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
          otherTimeItems.push(<li><b>{timeTypeCapitalized} Time:</b> {value}m</li>);
        }
      }
    }

    return otherTimeItems;
  }

  return (
    <main itemScope itemType="https://schema.org/Recipe">
      <div id="fb-root"></div>
      <Section idTag="single-recipe">

        {/* check title to see if it is loaded and render recipe */}
        {recipe.title ?
          <>
            <SectionHeading
              itemProp="name"
              lines={[title]}
              isTitle
            />
            <figure>
              <img
                itemProp="image"
                className="image--mobile"
                src={imageForMobile.src}
                alt={imageForMobile.altText}
              />
              <img
                className="image--desktop"
                src={imageForDesktop.src}
                alt={imageForDesktop.altText}
              />
              <figcaption>
                <meta
                  itemProp="datePublished"
                  content={createdAt}
                />
                {createdAt !== lastUpdated &&
                  <meta
                    itemProp="dateModified"
                    content={lastUpdated}
                  />
                }
                Recipe created on {formatDate(createdAt)}
                {createdAt !== lastUpdated &&
                  ` and last updated ${formatDate(lastUpdated)}`
                }
              </figcaption>
            </figure>
            <meta
              itemProp="description"
              content={description.join(' ')}
            />
            <div className="recipe__description text-center">
              <div className="recipe__left">
                <CircleButton
                  iconName="printer"
                  onClickHandler={() => window.print()}
                  className="recipe__button"
                  tooltip="print recipe"
                />
                <CircleButton
                  iconName="box-arrow-up"
                  onClickHandler={() => setIsModalOpen(true)}
                  className="recipe__button"
                  tooltip="share recipe"
                />
                {ratings.length !== 0 &&
                  <>
                    <h3 className="star-rating">{renderStars(getAverageRating(ratings))}</h3>
                    <p>~ rated {getAverageRating(ratings).toString().substring(0, 4)} out of {ratings.length} reviews ~</p>
                  </>
                }
                <ul className="recipe__details">
                  <li><b>Active Time:</b> {time.activeTime}m</li>
                  {renderOtherTimeCategories()}
                  <li>
                    <meta
                      itemProp="totalTime"
                      content={`PT${time.totalTime}M`}
                    />
                    <b>Total Time:</b> {time.totalTime}m
                  </li>
                  <li>
                    <meta
                      itemProp="recipeYield"
                      content={`${servings} servings`}
                    />
                    <b>Servings:</b> {servings}
                  </li>
                </ul>
              </div>
              <div className="recipe__right">
                {description.map(paragraph => {
                  return <h3 key={uuidv4()}>{paragraph}</h3>;
                })}
              </div>
            </div>
            <div className="recipe__composition">
              <div className="recipe__left">
                <h2 className="h2 recipe__heading">Ingredients</h2>
                <ul className="recipe__ingredients">
                  {ingredients.map(ingredient => {
                    const renderedIngredient = ingredient.heading ?
                      <li className="ingredient--heading" key={uuidv4()} >
                        <h3 className="recipe__heading">{ingredient.heading}</h3>
                      </li>
                      :
                      <li itemProp="recipeIngredient" key={uuidv4()}>{ingredient}</li>;
                    return renderedIngredient;
                  })}
                </ul>
              </div>
              <div className="recipe__right">
                <h2 className="h2 recipe__heading">Preparation</h2>
                {preparation.map(step => {
                  return (
                    <div className="recipe__step" key={uuidv4()}>
                      <h3 className="recipe__heading">{step.heading}</h3>
                      {step.description.map(paragraph => (
                        <p
                          className="p"
                          itemProp="recipeInstructions"
                          key={uuidv4()}
                        >
                          {paragraph}
                        </p>
                      ))}
                    </div>
                  )
                })}
              </div>
            </div>
            <Modal
              title="Share Recipe"
              isOpen={isModalOpen}
              setIsOpen={setIsModalOpen}
            >
              <div className="recipe__share-container">
                <a
                  target="_blank"
                  rel="noreferrer"
                  data-pin-do="buttonBookmark"
                  href="https://www.pinterest.com/pin/create/button/"
                  aria-label="Share via Pinterest"
                  onClick={() => setIsModalOpen(false)}
                >
                  <SlIcon
                    name="pinterest"
                    className="sl-icon pinterest"
                  />
                </a>
                <a
                  target="_blank"
                  rel="noreferrer"
                  href="https://www.facebook.com/sharer/sharer.php?u=https%3A%2F%2Fdevelopers.facebook.com%2Fdocs%2Fplugins%2F&amp;src=sdkpreparse"
                  className="fb-xfbml-parse-ignore"
                  aria-label="Share via Facebook"
                  onClick={() => setIsModalOpen(false)}
                >
                  <SlIcon
                    name="facebook"
                    className="sl-icon facebook"
                  />
                </a>
                <a
                  href={`sms:?&body=${window.location.href}`}
                  aria-label="Share via text"
                  onClick={() => setIsModalOpen(false)}
                >
                  <SlIcon
                    name="chat-dots-fill"
                    className="sl-icon text"
                  />
                </a>
                <a
                  href={`mailto:mail@address.com?subject=${title}&body=Enjoy the recipe!`}
                  onClick={() => setIsModalOpen(false)}
                  aria-label="Share via email"
                >
                  <SlIcon
                    name="envelope-at-fill"
                    className="sl-icon email"
                  />
                </a>
              </div>
            </Modal>
            {currentUser
              && <CircleButton
                iconName="pencil-fill"
                path={`/recipes/${recipeId}/edit`}
                className="fixed push-left"
                tooltip="edit recipe"
              />
            }
          </>
          :
          <LoadingOverlay />
        }
      </Section>
      <script async defer src="//assets.pinterest.com/js/pinit.js"></script>
      <script async defer crossOrigin="anonymous" src="https://connect.facebook.net/en_US/sdk.js#xfbml=1&version=v16.0" nonce="S1FWThQc"></script>
    </main>
  )
}

export default Recipe;