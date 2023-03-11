import { useContext, useState, useEffect } from 'react';
import { useParams, useOutletContext } from 'react-router-dom';
import { AdminUserContext } from '../../context/admin-user.context';
import {
  uploadImageToStorage,
  updateSingleRecipeDocument,
  createSingleRecipeDocument
} from '../../utils/firebase.utils';
import { formatDate } from '../../utils/helper-functions.utils';
import { v4 as uuidv4 } from 'uuid';

import Section from '../../components/section/section.component';
import LoadingSpinner from '../../components/loading-spinner/loading-spinner.component';
import FormInput from '../../components/form-input/form-input.component';
import FormTextarea from '../../components/form-textarea/form-textarea.component';
import FormFileInput from '../../components/form-file-input/form-file-input.component';
import FormCheckbox from '../../components/form-checkbox/form-checkbox.component';
import Button from '../../components/button/button.component';

const EditRecipe = () => {
  // Get admin user from context
  const { currentUser } = useContext(AdminUserContext);
  // Get recipes from context
  const { recipes, setAreRecipesUpToDate } = useOutletContext();
  // State boolean variable to be set to true if a specified recipe is fetched
  const [isRecipeFetched, setIsRecipeFetched] = useState(false);
  // State object variable to be set to empty values unless recipe is fetched
  const [recipe, setRecipe] = useState({
    title: '',
    description: [],
    time: {
      activeTime: '',
      otherTime: {
        marinatingTime: null,
        soakingTime: null
      },
      totalTime: ''
    },
    ingredients: [],
    directions: [],
    imageForMobile: {
      src: '',
      altText: ''
    },
    imageForDesktop: {
      src: '',
      altText: ''
    },
    createdAt: '',
    lastUpdated: '',
    ratings: [],
    recipeNum: ''
  })
  // State object variable for images uploaded using file input
  const [uploadedImages, setUploadedImages] = useState({
    imageForMobile: null,
    mobileFileURL: '',
    imageForDesktop: null,
    desktopFileURL: ''
  })
  // State boolean variable to adjust date lastUpdated if input is checked
  const [isCheckboxChecked, setIsCheckboxChecked] = useState(false);
  // Variable for :recipeId params, if present
  const { recipeId } = useParams();

  useEffect(() => {
    // If there is a :recipeId parameter and recipe is not yet fetched, get recipe from database
    if (Object.keys(recipes).length && recipeId && !isRecipeFetched) {
      setRecipe(recipes[recipeId.replaceAll('-', ' ')]);
      setIsRecipeFetched(true);
    }
  }, [recipes, recipeId, isRecipeFetched])

  // Destructure recipe values from the 'recipe' state object
  const {
    title,
    description,
    time,
    ingredients,
    directions,
    imageForMobile,
    imageForDesktop,
    createdAt,
    lastUpdated
  } = recipe;

  // Create function to map array of ingredients for displaying in textarea
  const createIngredientsText = (ingredients) => {
    // Initialize empty string to build textarea content
    let ingredientsText = '';

    ingredients.forEach((ingredient, index) => {
      // If array item is element, treat as a heading
      if (typeof ingredient === 'object') {
        const heading = Object.values(ingredient);
        ingredientsText += `H: ${heading}\n`;
      } else {
        // If it isn't an object, treat as ingredient
        ingredientsText += ingredient;
        // Add a line break unless it is the final ingredient
        if (index + 1 !== ingredients.length) {
          ingredientsText += '\n';
        }
      }
    })

    return ingredientsText;
  }

  // Create function to map array of directions for displaying in textarea
  const createDirectionsText = (directions) => {
    // Initialize empty string to build textarea content
    let directionsText = '';

    directions.forEach(({ heading, description }, i) => {
      // If array is at first index, render heading without line breaks at beginning
      i === 0 ?
        directionsText += `H: ${heading}\n\n${description.join('\n\n')}` :
        // If past first index, render additional line breaks before heading
        directionsText += `\n\nH: ${heading}\n\n${description.join('\n\n')}`;
    })

    return directionsText;
  }

  // Handle text inputs to update associated 'recipe' state property
  const handleStringInputChange = event => recipe[event.srcElement.name] = event.target.value;

  // Handle number inputs to update associated 'recipe' state time property
  const handleNumberInputChange = event => {
    // Split input name to get time type
    const timeType = event.srcElement.name.split('-')[0];
    // Get value from input and turn into string
    const value = event.target.value;

    // If time type is of the two required values, update on 'time' object property
    return timeType === 'active' || timeType === 'total' ?
      recipe.time[`${timeType}Time`] = value :
      // If time type is optional, update on 'otherTime' object property
      recipe.time.otherTime[`${timeType}Time`] = value;
  }

  // Handle textareas to update associated 'recipe' state property
  const handleTextareaChange = event => {
    const value = event.target.value;

    // Create switch using textarea name based on associated 'recipe' property
    switch (event.srcElement.name) {
      // If decription property, create array based on 2 line breaks
      case 'description':
        const description = value.split('\n\n');
        recipe.description = description;
        break;
      // If ingredients property, create array based on single line breaks
      case 'ingredients':
        const ingredients = value.split('\n').map(ingredient => {
          // If line is a heading, return object with 'heading' property
          return ingredient.startsWith('H: ') ?
            { heading: ingredient.slice(3) } :
            // If line is an ingredient, simply return ingredient
            ingredient;
        })
        recipe.ingredients = ingredients;
        break;
      // If directions property, create array based on double line breaks and heading signifier
      case 'directions':
        const directions = value.slice(3).split('\n\nH: ').map(step => {
          // Initialize object to store each step
          const stepObject = { heading: '', description: [] };
          // Create array based on double line breaks
          step.split('\n\n').forEach((paragraph, index) => {
            // If we're at the first index we have a heading
            index === 0 ?
              stepObject.heading = paragraph :
              // If we're past the first index we push paragraph to description array
              stepObject.description.push(paragraph);
          })
          return stepObject;
        })
        recipe.directions = directions;
        break;
      default:
        console.error('What is this input?', event.srcElement.name);
    }
  }

  // Handle input type='file' for image uploads
  const handleFileInputChange = event => {
    // Split input name to get device type
    const device = event.target.id.split('-')[2];
    // If device is mobile, update imageForMobile in uploaded stat object, else update imageForDesktop
    device === 'mobile'
      ? setUploadedImages({
        ...uploadedImages,
        imageForMobile: event.target.files[0],
        mobileFileURL: URL.createObjectURL(event.target.files[0])
      })
      : setUploadedImages({
        ...uploadedImages,
        imageForDesktop: event.target.files[0],
        desktopFileURL: URL.createObjectURL(event.target.files[0])
      });
  }

  // Handle checkbox clicks
  const handleCheckboxChange = event => {
    // Use __checked value to update isChecked state
    setIsCheckboxChecked(event.srcElement.__checked);
  }

  // Handle form submission
  const onSubmitHandler = async event => {
    event.preventDefault();
    // Destructure properties off uploadedImages state
    const { imageForMobile, imageForDesktop } = uploadedImages;

    // If checkbox is checked, change lastUpdated salue to current date
    if (isCheckboxChecked) {
      const date = new Date();
      recipe.lastUpdated = date.toISOString();
    }
    try {
      // If image for mobile was uploaded, add to firebase storage and update recipe with URL
      if (imageForMobile) {
        const mobileImagePath = await uploadImageToStorage(imageForMobile);
        recipe.imageForMobile.src = mobileImagePath;
      }
      // If image for desktop was uploaded, add to firebase storage and update recipe with URL
      if (imageForDesktop) {
        const desktopImagePath = await uploadImageToStorage(imageForDesktop);
        recipe.imageForDesktop.src = desktopImagePath;
      }
    } catch (error) {
      console.log('Couldn\'t upload images!');
      return;
    }

    // Update recipe in database
    console.log(recipe);
    if (recipeId) {
      updateSingleRecipeDocument(recipeId.replaceAll('-', ' '), recipe);
    } else if (!recipes[recipe.title.toLowerCase()]) {
      const date = new Date();
      const isoDate = date.toISOString();
      recipe.lastUpdated = isoDate;
      recipe.createdAt = isoDate;
      recipe.recipeNum = Object.keys(recipes).length + 1;

      createSingleRecipeDocument(recipe.title.toLowerCase(), recipe);
    } else {
      console.error('Recipe with that title already exists in database!');
      return;
    }

    setAreRecipesUpToDate(false);
  }

  return (
    <main>
      <Section idTag="edit-recipe">
        {currentUser && (isRecipeFetched || !recipeId) ?
          <div>
            {!recipeId ?
              <h1>Create New Recipe</h1>
              :
              <>
                <h1>Edit {title}</h1>
                <p className="text-right mr-small">Recipe created on {formatDate(createdAt)} and last updated {formatDate(lastUpdated)}</p>
              </>
            }
            <form id="recipe_form" onSubmit={onSubmitHandler}>
              <div className="input-single">
                <FormInput
                  label="Recipe Title"
                  type="text"
                  name="title"
                  placeholder="Recipe title"
                  value={title}
                  onChangeHandler={handleStringInputChange}
                />
              </div>
              <div className="input-single">
                <FormTextarea
                  rows={6}
                  label="Description"
                  name="description"
                  placeholder="Short recipe description"
                  value={description.join('\n\n')}
                  onChangeHandler={handleTextareaChange}
                />
              </div>
              <div className="input-group">
                <div className="time-input">
                  <FormInput
                    label="Active Time"
                    type="number"
                    name="active-time"
                    placeholder="Active time (mins)"
                    value={time.activeTime}
                    onChangeHandler={handleNumberInputChange}
                  />
                </div>
                {Object.entries(time.otherTime).map(([key, value]) => {
                  const timeType = key.split('T')[0];
                  const timeTypeCapitalized = `${timeType[0].toUpperCase()}${timeType.slice(1)}`;

                  return (
                    <div key={uuidv4()} className="time-input">
                      <FormInput
                        label={`${timeTypeCapitalized} Time`}
                        type="number"
                        name={`${timeType}-time`}
                        placeholder={`${timeTypeCapitalized} time (mins)`}
                        value={value}
                        onChangeHandler={handleNumberInputChange}
                      />
                    </div>
                  )
                })}
                <div className="time-input">
                  <FormInput
                    label="Total Time"
                    type="number"
                    name="total-time"
                    placeholder="Total time (mins)"
                    value={time.totalTime}
                    onChangeHandler={handleNumberInputChange}
                  />
                </div>
              </div>
              <div className="input-single">
                <FormTextarea
                  rows={12}
                  label="Ingredients"
                  name="ingredients"
                  placeholder="List ingredients separated by line break"
                  value={createIngredientsText(ingredients)}
                  helpText="Create heading by adding 'H:' at the beginning of a line."
                  onChangeHandler={handleTextareaChange}
                />
              </div>
              <div className="input-single">
                <FormTextarea
                  rows={12}
                  label="Directions"
                  name="directions"
                  placeholder="Add directions with two line breaks between headings and paragraphs"
                  value={createDirectionsText(directions)}
                  helpText="Create heading by adding 'H:' at the beginning of a line."
                  onChangeHandler={handleTextareaChange}
                />
              </div>
              <div className="input-group">
                <div className="image-upload-container">
                  <FormFileInput
                    label="Image (Mobile)"
                    name="image-for-mobile"
                    children={<img src={
                      uploadedImages.mobileFileURL
                        ? uploadedImages.mobileFileURL
                        : imageForMobile.src
                    } alt="" />}
                    onChangeHandler={handleFileInputChange}
                  />
                </div>
                <div className="image-upload-container">
                  <FormFileInput
                    label="Image (Desktop)"
                    name="image-for-desktop"
                    children={<img src={
                      uploadedImages.desktopFileURL
                        ? uploadedImages.desktopFileURL
                        : imageForDesktop.src
                    } alt="" />}
                    onChangeHandler={handleFileInputChange}
                  />
                </div>
              </div>
              {recipeId &&
                <div className="input-single">
                  <FormCheckbox
                    label="Change date last updated (Move recipe to top)"
                    name="last-updated"
                    onChangeHandler={handleCheckboxChange}
                  />
                </div>
              }
              <div className="input-group">
                <Button buttonText="Save Recipe" />
                <Button
                  path={document.location.pathname.replace('/edit', '')}
                  buttonText="Cancel"
                  className="button-cancel"
                />
              </div>
            </form>
          </div>
          :
          <LoadingSpinner />
        }
      </Section>
    </main>
  )
}

export default EditRecipe;