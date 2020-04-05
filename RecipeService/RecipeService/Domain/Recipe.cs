namespace RecipeService.Domain
{
    using System.Collections.Generic;

    public class Recipe
    {
        public Recipe(
            int recipeId,
            string name,
            string directions,
            Course course,
            IEnumerable<RecipeIngredient> ingredients)
        {
            RecipeId = recipeId;
            Name = name;
            Directions = directions;
            Course = course;
            Ingredients = ingredients;
        }

        public int RecipeId { get; }

        public string Name { get; }

        public string Directions { get; }

        public Course Course { get; }

        public IEnumerable<RecipeIngredient> Ingredients { get; }
    }
}
