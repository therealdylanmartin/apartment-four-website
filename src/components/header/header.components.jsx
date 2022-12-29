import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Header = () => {

  return (
    <header>
      <nav className="top-nav">
        <h1 className="top-nav__logo">
          <img src="/assets/images/logos/logo_header.png" alt="Apartment Four" />
        </h1>
        <div className="top-nav__sandwich-nav">
          <button className="sandwich-nav__toggle">
            <FontAwesomeIcon icon="fa-solid fa-bars" />
          </button>
          <ul className="sandwich-nav__hidden">
            <li><a href="/recipes">Recipes</a></li>
            <li><a href="#about-me">About Me</a></li>
            <li><a href="mailto:rachael@fromapartmentfour.com">Contact</a></li>
          </ul>
        </div>
      </nav>
    </header>
  )
}

export default Header;