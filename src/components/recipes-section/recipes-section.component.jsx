import SectionHeading from '../section-heading/section-heading.component';
import RecipesGrid from '../recipes-grid/recipes-grid.component';

const RecipesSection = ({ idTag, lines, recipes, limit }) => {

  return (
    <section id={idTag} className={`section__${idTag}`}>
      <SectionHeading lines={lines} />
      <RecipesGrid
        recipes={recipes}
        limit={limit}
      />
    </section>
  )
}

export default RecipesSection;