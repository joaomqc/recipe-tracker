namespace RecipeService.Controllers
{
    using System.Threading.Tasks;
    using Domain;
    using Microsoft.AspNetCore.Mvc;
    using Repositories;

    [ApiController]
    [Route("api/recipe")]
    public class RecipeController : ControllerBase
    {
        private readonly RecipeRepository _recipeRepository;

        public RecipeController(RecipeRepository recipeRepository)
        {
            _recipeRepository = recipeRepository;
        }

        [HttpGet]
        public async Task<IActionResult> GetRecipes()
        {
            var recipes =
                await _recipeRepository.GetRecipesAsync();

            return Ok(recipes);
        }

        [HttpGet("{id:int}")]
        public async Task<IActionResult> GetRecipeById(int id)
        {
            var recipe =
                await _recipeRepository.GetRecipeByIdAsync(id);

            if (recipe == null)
            {
                return NotFound();
            }

            return Ok(recipe);
        }

        [HttpPost]
        public async Task<IActionResult> CreateRecipe(
            NewRecipe recipe)
        {
            await _recipeRepository.CreateRecipeAsync(recipe);

            return Ok();
        }
    }
}
