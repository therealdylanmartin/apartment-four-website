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

  const buttonContainer = (children) => {
    return (
      <div className="button__container">
        {children}
      </div>
    )
  }

  let currentChildren;

  if (path) {
    if (path.includes('mailto:') || path.includes('tel:')) {
      currentChildren = <a className="button" href={path}>{renderedText}{faIcon}</a>;
    } else {
      currentChildren = <Link className="button" to={path}>{renderedText}{faIcon}</Link>;
    }
  } else {
    currentChildren = <button className="button" onClick={onClickHandler}>{renderedText}{faIcon}</button>
  }

  return buttonContainer(currentChildren);
}

export default Button;

