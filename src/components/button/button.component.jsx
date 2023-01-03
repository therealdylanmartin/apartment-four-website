import { Link } from "react-router-dom";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import './button.styles.scss'

const Button = ({ buttonText, path, onClickHandler, faCode }) => {
  let faIcon;
  let renderedText = buttonText;

  if (faCode) {
    faIcon = <FontAwesomeIcon icon={`fa-${faCode.style} fa-${faCode.icon}`} />;
    renderedText += ' ';
  }

  if (path.includes('mailto:') || path.includes('tel:')) {
    return (
      <div className="button__container">
        <a className="button" href={path}>
          {renderedText}{faIcon}
        </a>
      </div>
    )
  } else if (path) {
    return (
      <div className="button__container">
        <Link className="button" to={path}>
          {renderedText}{faIcon}
        </Link>
      </div>
    )
  } else {
    return (
      <div className="button__container">
        <button className="button" onClick={onClickHandler}>
          {renderedText}{faIcon}
        </button>
      </div>
    )
  }
}

export default Button;

