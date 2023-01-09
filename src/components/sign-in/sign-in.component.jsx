import {
  signInWithGooglePopup,
  createUserDocumentFromAuth
} from '../../utils/firebase/firebase.utils';

import Button from '../button/button.component';

const SignIn = () => {
  const logGoogleUser = async () => {
    const { user } = await signInWithGooglePopup();
    if (user.email === 'fromapartmentfour@gmail.com' || user.email === 'dylanmmartin84@gmail.com') {
      console.log(user.email);
      await createUserDocumentFromAuth(user);
    }
  }

  return (
    <div>
      <Button
        buttonText="Sign in With Google Popup"
        onClickHandler={logGoogleUser}
      />
    </div>
  )
}

export default SignIn;