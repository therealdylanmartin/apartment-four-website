import { useState } from 'react';
import { Link } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import './header.styles.scss'

const Header = () => {
  const [isNavToggled, setIsNavToggled] = useState(false);

  const toggleNavMenu = () => {
    setIsNavToggled(!isNavToggled);
  }

  return (
    <header>
      <nav className="top-nav">
        <h1 className="top-nav__logo">
          <img src="/assets/images/logos/logo_header.png" alt="Apartment Four" />
        </h1>
        <div className="top-nav__sandwich-nav">
          <button className="sandwich-nav__toggle" onClick={toggleNavMenu}>
            <FontAwesomeIcon icon="fa-solid fa-bars" />
          </button>
          <div className={`sandwich-nav__links ${isNavToggled ? '' : 'hidden'}`}>
            <button className="sandwich-nav__close" onClick={toggleNavMenu}>&times;</button>
            <ul>
              <li>
                <Link
                  to="/recipes"
                  onClick={toggleNavMenu}
                >
                  Recipes
                </Link>
              </li>
              <li>
                <HashLink
                  smooth
                  to="/#about-me"
                  onClick={toggleNavMenu}
                >
                  About Me
                </HashLink>
              </li>
              <li>
                <a
                  href="mailto:rachael@fromapartmentfour.com"
                  onClick={toggleNavMenu}
                >
                  Contact
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  )
}

export default Header;