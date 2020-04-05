namespace RecipeService.Database.Entities
{
    using System.ComponentModel.DataAnnotations;

    public class RecipeIngredient
    {
        public int RecipeId { get; set; }

        public int IngredientId { get; set; }

        public string Quantity { get; set; }

        public virtual Recipe Recipe { get; set; }

        public virtual Ingredient Ingredient { get; set; }
    }
}
