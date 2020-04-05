namespace RecipeService.Domain
{
    using System.Collections.Generic;

    public class NewRecipe
    {
        public NewRecipe(
            string name,
            string directions,
            int courseId,
            IEnumerable<RecipeIngredient> ingredients)
        {
            Name = name;
            Directions = directions;
            CourseId = courseId;
            Ingredients = ingredients;
        }

        public string Name { get; }

        public string Directions { get; }

        public int CourseId { get; }

        public IEnumerable<RecipeIngredient> Ingredients { get; }
    }
}
