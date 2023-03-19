import { Link } from "react-router-dom";

import { SlIcon } from "@shoelace-style/shoelace/dist/react";

import './circle-button.styles.scss'

const CircleButton = ({ path, onClickHandler, iconName, className }) => {
  const buttonClasses = className ? `circle-button ${className}` : 'circle-button';
  const slIcon = <SlIcon name={iconName} />;

  let renderedButton;

  if (path) {
    if (path.includes('mailto:') || path.includes('tel:')) {
      renderedButton = <a className={buttonClasses} href={path}>{slIcon}</a>;
    } else {
      renderedButton = <Link className={buttonClasses} to={path}>{slIcon}</Link>;
    }
  } else {
    renderedButton = <button className={buttonClasses} onClick={onClickHandler}>{slIcon}</button>
  }

  return renderedButton;
}

export default CircleButton;
