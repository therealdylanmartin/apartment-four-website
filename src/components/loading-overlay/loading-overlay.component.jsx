import LoadingSpinner from '../loading-spinner/loading-spinner.component';

import './loading-overlay.styles.scss';

const LoadingOverlay = () => {
  return (
    <div className="loading-overlay__container">
      <LoadingSpinner />
    </div>
  )
}

export default LoadingOverlay;