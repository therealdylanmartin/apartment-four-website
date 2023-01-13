import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import './loading-spinner.styles.scss';

const LoadingSpinner = () => {
  return (
    <h2 className="loading-spinner" aria-label="Content loading">
      <FontAwesomeIcon icon={'fa-solid fa-spinner'} />
    </h2>
  )
}

export default LoadingSpinner;