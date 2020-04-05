namespace RecipeService.Database.Entities
{
    using System.Collections.Generic;
    using System.ComponentModel.DataAnnotations;

    public class Recipe
    {
        [Key]
        public int RecipeId { get; set; }

        public string Name { get; set; }

        public string Directions { get; set; }

        public int CourseId { get; set; }

        public virtual Course Course { get; set; }

        public virtual IEnumerable<RecipeIngredient> RecipeIngredients { get; set; }
    }
}
