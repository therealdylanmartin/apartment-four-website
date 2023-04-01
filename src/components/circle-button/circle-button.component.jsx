import { Link } from "react-router-dom";

import { SlIcon, SlTooltip } from "@shoelace-style/shoelace/dist/react";

import './circle-button.styles.scss'

const CircleButton = ({ path, onClickHandler, iconName, className, tooltip }) => {
  const buttonClasses = className ? `circle-button ${className}` : 'circle-button';
  const slIcon = <SlIcon name={iconName} />;

  let renderedButton;

  if (path) {
    if (path.includes('mailto:') || path.includes('tel:')) {
      renderedButton = <a className={buttonClasses} href={path} aria-label={tooltip}>{slIcon}</a>;
    } else {
      renderedButton = <Link className={buttonClasses} to={path} aria-label={tooltip}>{slIcon}</Link>;
    }
  } else {
    renderedButton = <button className={buttonClasses} onClick={onClickHandler} aria-label={tooltip}>{slIcon}</button>
  }

  return (
    <>
      {tooltip ?
        <SlTooltip className="sl-tooltip" content={tooltip}>
          {renderedButton}
        </SlTooltip>
        :
        <>
          {renderedButton}
        </>
      }
    </>
  )
}

export default CircleButton;
