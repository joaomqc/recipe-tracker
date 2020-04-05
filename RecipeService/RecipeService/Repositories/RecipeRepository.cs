namespace RecipeService.Repositories
{
    using System;
    using System.Collections.Generic;
    using System.Linq;
    using System.Linq.Expressions;
    using System.Threading.Tasks;
    using Database.Context;
    using Domain;
    using Microsoft.EntityFrameworkCore;

    public class RecipeRepository
    {
        private readonly RecipesDbContext _dbContext;

        public RecipeRepository(RecipesDbContext dbContext)
        {
            _dbContext = dbContext;
        }

        public async Task CreateRecipeAsync(NewRecipe recipe)
        {
            var recipeEntity = _dbContext.Recipes.Add(
                new Database.Entities.Recipe
                {
                    Name = recipe.Name,
                    Directions = recipe.Directions,
                    CourseId = recipe.CourseId
                });

            await _dbContext.SaveChangesAsync();

            var newIngredients = (
                from recipeIngredient in recipe.Ingredients
                join ingredient in _dbContext.Ingredients
                    on recipeIngredient.Name equals ingredient.Name
                    into joinedIngredients
                from joinedIngredient in joinedIngredients.DefaultIfEmpty()
                where joinedIngredient is null
                select new Database.Entities.Ingredient
                {
                    Name = recipeIngredient.Name
                });

            _dbContext.Ingredients
                .AddRange(newIngredients);

            await _dbContext.SaveChangesAsync();

            var recipeIngredients = (
                from recipeIngredient in recipe.Ingredients
                join ingredient in _dbContext.Ingredients
                    on recipeIngredient.Name equals ingredient.Name
                select new Database.Entities.RecipeIngredient
                {
                    RecipeId = recipeEntity.Entity.RecipeId,
                    IngredientId = ingredient.IngredientId,
                    Quantity = recipeIngredient.Quantity
                });

            _dbContext.RecipeIngredients
                .AddRange(recipeIngredients);

            await _dbContext.SaveChangesAsync();
        }

        public async Task<IEnumerable<Recipe>> GetRecipesAsync()
        {
            return await GetRecipesQuery()
                .ToListAsync();
        }

        public async Task<Recipe> GetRecipeByIdAsync(int recipeId)
        {
            return await GetRecipesQuery(r => r.RecipeId == recipeId)
                .FirstOrDefaultAsync();
        }

        private IQueryable<Recipe> GetRecipesQuery(
            Expression<Func<Database.Entities.Recipe, bool>> whereClause = null)
        {
            var query =
                _dbContext.Recipes
                    .AsNoTracking()
                    .Include(r => r.Course)
                    .Include(r => r.RecipeIngredients)
                    .ThenInclude(i => i.Ingredient)
                    .AsQueryable();
            
            if (whereClause != null)
            {
                query = query.Where(whereClause);
            }

            return query
                .Select(r => new Recipe(
                    r.RecipeId,
                    r.Name,
                    r.Directions,
                    new Domain.Course(
                        r.Course.CourseId,
                        r.Course.Name),
                    r.RecipeIngredients
                        .Select(i =>
                            new RecipeIngredient(
                                i.Ingredient.Name,
                                i.Quantity))));
        }
    }
}
