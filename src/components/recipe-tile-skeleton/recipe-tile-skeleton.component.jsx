import LoadingSpinner from '../loading-spinner/loading-spinner.component';

import { SlSkeleton } from '@shoelace-style/shoelace/dist/react';

import './recipe-tile-skeleton.styles.scss';

const RecipeTileSkeleton = () => (
  <div className="grid__tile-container">
    <div className="grid__tile">
      <div className="recipe-skeleton__spinner">
        <LoadingSpinner />
      </div>
      <SlSkeleton effect="sheen" className="recipe-skeleton__time" />
      <div className="recipe-skeleton__rating">
        <SlSkeleton effect="sheen" className="recipe-skeleton__star" />
        <SlSkeleton effect="sheen" className="recipe-skeleton__star" />
        <SlSkeleton effect="sheen" className="recipe-skeleton__star" />
        <SlSkeleton effect="sheen" className="recipe-skeleton__star" />
        <SlSkeleton effect="sheen" className="recipe-skeleton__star" />
      </div>
    </div>
    <SlSkeleton effect="sheen" className="recipe-skeleton__title" />
  </div>
)

export default RecipeTileSkeleton;