namespace RecipeService.Database.Entities
{
    using System.ComponentModel.DataAnnotations;

    public class Ingredient
    {
        [Key]
        public int IngredientId { get; set; }

        public string Name { get; set; }
    }
}
