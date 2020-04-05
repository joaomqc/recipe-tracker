namespace RecipeService.Domain
{
    public class RecipeIngredient
    {
        public RecipeIngredient(
            string name,
            string quantity)
        {
            Name = name;
            Quantity = quantity;
        }

        public string Name { get; }

        public string Quantity { get; }
    }
}
