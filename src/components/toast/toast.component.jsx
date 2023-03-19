import { SlAlert, SlIcon } from '@shoelace-style/shoelace/dist/react';

import './toast.styles.scss';

const Toast = ({ variant, duration = 5000, open, onSlAfterHide, title, description }) => {
  const iconName = variant === 'success' ? 'check2-circle' : 'exclamation-octagon';

  return (
    <div className="alert fixed">
      <SlAlert
        variant={variant}
        duration={duration}
        open={open}
        closable
        onSlAfterHide={onSlAfterHide}
      >
        <SlIcon slot="icon" name={iconName} />
        <b>{title}</b>
        <br />{description}
      </SlAlert>
    </div>
  )
}

export default Toast;