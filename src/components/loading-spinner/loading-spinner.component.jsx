import { SlSpinner } from '@shoelace-style/shoelace/dist/react';

import './loading-spinner.styles.scss';

const LoadingSpinner = () => {
  return (
    <h3 aria-label="Content loading">
      <SlSpinner />
    </h3>
  )
}

export default LoadingSpinner;