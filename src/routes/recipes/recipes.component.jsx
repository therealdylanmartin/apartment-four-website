import Section from '../../components/section/section.component';
import SectionHeading from '../../components/section-heading/section-heading.component';
import RecipesGrid from '../../components/recipes-grid/recipes-grid.component';

const Recipes = ({ recipes }) => {

  return (
    <main>
      <Section idTag="all-recipes">
        <SectionHeading lines={['Recipes From', 'Apartment Four']} />
        <RecipesGrid
          recipes={recipes}
          limit="24"
          pagination
        />
      </Section>
    </main>
  )
}

export default Recipes;