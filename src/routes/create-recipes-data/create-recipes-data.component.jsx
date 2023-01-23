import { useEffect, useContext } from 'react';
import { AdminUserContext } from '../../context/admin-user.context';
import { addCollectionAndDocuments } from '../../utils/firebase.utils';

import RECIPES_DATA from '../../data/data';

const CreateRecipesData = () => {
  const { currentUser } = useContext(AdminUserContext);
  // if (redirect) {
  //   document.location.assign('/');
  // }

  useEffect(() => {
    // addCollectionAndDocuments('recipes', RECIPES_DATA);
    console.log('logged in');
  }, [])

  return (
    <div>

      <h2>Creating a recipes database... look to the console!</h2>
    </div>
  )
}

export default CreateRecipesData;