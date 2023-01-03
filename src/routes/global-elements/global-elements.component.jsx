import { Fragment } from 'react';
import { Outlet } from 'react-router-dom';

import Header from '../../components/header/header.components';
import Section from '../../components/section/section.component';
import SectionHeading from '../../components/section-heading/section-heading.component';
import SubscribeForm from '../../components/subscribe-form/subscribe-form.component';
import Footer from '../../components/footer/footer.component';

const GlobalElements = ({ socialMediums }) => {
  return (
    <Fragment>
      <Header />
      <Outlet />
      <Section idTag="subscribe">
        <SectionHeading lines={['Sign Up For', 'Updates From', 'Apartment Four']} />
        <SubscribeForm />
      </Section>
      <Footer
        lines={['Follow Me']}
        socialMediums={socialMediums}
      />
    </Fragment>
  )
}

export default GlobalElements;