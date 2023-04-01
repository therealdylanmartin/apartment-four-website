import { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  signInWithGooglePopup,
  signOutAdminUser
} from '../../utils/firebase.utils';

import { SlIcon, SlDrawer } from '@shoelace-style/shoelace/dist/react';

import CircleButton from '../circle-button/circle-button.component';

import './header.styles.scss';

const Header = ({ currentPathname, currentUser }) => {
  const [isOpen, setIsOpen] = useState(false);

  const signInAdminUser = async () => {
    await signInWithGooglePopup();
  }

  const hashLinkClickHandler = (event) => {
    setIsOpen(false);
    setTimeout(() => {
      const aboutMeElem = document.getElementById('about-me');
      aboutMeElem.scrollIntoView({
        behavior: 'smooth'
      })
    }, 300)
  }

  return (
    <>
      <header>
        <nav className="top-nav">
          <Link className="top-nav__logo" to="/">
            <img src="/assets/images/logos/logo_header.png" alt="Apartment Four" />
          </Link>
          <div className="top-nav__sandwich-nav">
            {currentPathname.includes('/admin')
              && !currentUser
              && <CircleButton
                iconName="person-check-fill"
                onClickHandler={signInAdminUser}
                tooltip="sign in"
              />
            }
            <button className="sandwich-nav__toggle" onClick={() => setIsOpen(true)}>
              <SlIcon name="list" />
            </button>
            <SlDrawer
              className="sandwich-nav__links"
              open={isOpen}
              onSlAfterHide={() => setIsOpen(false)}
            >
              <ul>
                {currentUser
                  && <li>
                    <Link
                      to="/admin"
                      onClick={() => setIsOpen(false)}
                    >
                      Admin
                    </Link>
                  </li>
                }
                <li>
                  <Link
                    to="/recipes"
                    onClick={() => setIsOpen(false)}
                  >
                    Recipes
                  </Link>
                </li>
                <li>
                  <Link
                    to="/#about-me"
                    onClick={hashLinkClickHandler}
                  >
                    About Me
                  </Link>
                </li>
                <li>
                  <a
                    href="mailto:rachael@fromapartmentfour.com"
                    onClick={() => setIsOpen(false)}
                  >
                    Contact
                  </a>
                </li>
              </ul>
            </SlDrawer>
          </div>
        </nav>
      </header>
      {currentUser
        && <CircleButton
          iconName="person-fill-slash"
          onClickHandler={signOutAdminUser}
          className="fixed cancel"
          tooltip="sign out"
        />
      }
    </>
  )
}

export default Header;