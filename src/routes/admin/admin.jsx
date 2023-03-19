import { useOutletContext } from 'react-router-dom';

import Section from '../../components/section/section.component';
import SectionHeading from '../../components/section-heading/section-heading.component';
import EditRecipesList from '../../components/edit-recipes-list/edit-recipes-list.component';
import Button from '../../components/button/button.component';

const Admin = () => {
  const { currentUser } = useOutletContext();

  return (
    <>
      {!currentUser ?
        <Section idTag="admin-sign-in">
          <SectionHeading
            lines={['Sign In for Admin Access']}
            centered
          />

        </Section>
        :
        <>
          <Section idTag="admin-dashboard">
            <SectionHeading
              lines={['Admin Dashboard']}
              centered
            />
            <Button
              path="/recipes/new"
              buttonText="Add New Recipe"
            />
            <EditRecipesList />
          </Section>
          <Section idTag="edit-profile">
            <SectionHeading
              lines={['Edit Profile Info']}
              centered
            />
          </Section>
        </>
      }
    </>
  )
}

export default Admin;