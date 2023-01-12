import { useContext } from 'react';
import { AdminUserContext } from '../../context/admin-user.context';
import {
  signInWithGooglePopup,
  signOutAdminUser
} from '../../utils/firebase/firebase.utils';

import Section from '../../components/section/section.component';
import SectionHeading from '../../components/section-heading/section-heading.component';
import Button from '../../components/button/button.component';

const Admin = () => {
  const { currentUser } = useContext(AdminUserContext);

  const signInAdminUser = async () => {
    await signInWithGooglePopup();
  }

  return (
    <>
      {!currentUser ?
        <Section idTag="admin-sign-in">
          <SectionHeading
            lines={['Sign In for Admin Access']}
            centered
          />
          <Button
            buttonText="Sign in with Google"
            onClickHandler={signInAdminUser}
          />
        </Section>
        :
        <Section idTag="admin-dashboard">
          <SectionHeading
            lines={['Admin Dashboard']}
            centered
          />
          <Button
            buttonText="Sign Out"
            onClickHandler={signOutAdminUser}
          />
        </Section>
      }
    </>
  )
}

export default Admin;