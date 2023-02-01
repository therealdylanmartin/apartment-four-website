import { useState } from 'react';
import { Link } from 'react-router-dom';

import { SlIcon, SlDrawer } from '@shoelace-style/shoelace/dist/react';

import './header.styles.scss';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

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
    <header>
      <nav className="top-nav">
        <Link className="top-nav__logo" to="/">
          <img src="/assets/images/logos/logo_header.png" alt="Apartment Four" />
        </Link>
        <div className="top-nav__sandwich-nav">
          <button className="sandwich-nav__toggle" onClick={() => setIsOpen(true)}>
            <SlIcon name="list" />
          </button>
          <SlDrawer
            className="sandwich-nav__links"
            open={isOpen}
            onSlAfterHide={() => setIsOpen(false)}
          >
            <ul>
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
  )
}

export default Header;