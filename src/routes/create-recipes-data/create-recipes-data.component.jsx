import { useEffect } from 'react';
import { addCollectionAndDocuments } from '../../utils/firebase.utils';
import RECIPES_DATA from '../../data/data';

const CreateRecipesData = () => {
  useEffect(() => {
    addCollectionAndDocuments('recipes', RECIPES_DATA);
  }, [])

  return (
    <h1>Creating a recipes database... look to the console!</h1>
  )
}

export default CreateRecipesData;