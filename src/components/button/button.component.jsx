import { Link } from "react-router-dom";

import { SlIcon } from "@shoelace-style/shoelace/dist/react";

import './button.styles.scss'

const Button = ({ buttonText, path, onClickHandler, iconName }) => {
  let slIcon;

  if (iconName) {
    slIcon = <SlIcon name={iconName} />;
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
      currentChildren = <a className="button" href={path}>{buttonText}{slIcon}</a>;
    } else {
      currentChildren = <Link className="button" to={path}>{buttonText}{slIcon}</Link>;
    }
  } else {
    currentChildren = <button className="button" onClick={onClickHandler}>{buttonText}{slIcon}</button>
  }

  return buttonContainer(currentChildren);
}

export default Button;

