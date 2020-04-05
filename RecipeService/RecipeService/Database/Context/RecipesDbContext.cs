namespace RecipeService.Database.Context
{
    using Entities;
    using Microsoft.EntityFrameworkCore;

    public class RecipesDbContext : DbContext
    {
        public RecipesDbContext(
            DbContextOptions options)
            : base(options)
        {
        }

        public DbSet<Recipe> Recipes { get; set; }

        public DbSet<Ingredient> Ingredients { get; set; }

        public DbSet<RecipeIngredient> RecipeIngredients { get; set; }

        public DbSet<Course> Courses { get; set; }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.Entity<RecipeIngredient>(
                entity =>
                {
                    entity.HasKey(ri =>
                        new
                        {
                            ri.RecipeId,
                            ri.IngredientId
                        });

                    entity.HasOne<Recipe>(e => e.Recipe)
                        .WithMany(e => e.RecipeIngredients)
                        .HasForeignKey(e => e.RecipeId);

                    entity.HasOne<Ingredient>(e => e.Ingredient)
                        .WithMany()
                        .HasForeignKey(e => e.IngredientId);
                });

            modelBuilder.Entity<Ingredient>()
                .HasIndex(i => i.Name)
                .IsUnique();

            modelBuilder.Entity<Recipe>()
                .HasOne<Course>(e => e.Course)
                .WithMany(e => e.Recipes)
                .HasForeignKey(e => e.CourseId);

            modelBuilder.Entity<Course>()
                .HasData(
                    new Course
                    {
                        CourseId = 1,
                        Name = "Appetizer"
                    },
                    new Course
                    {
                        CourseId = 2,
                        Name = "Dessert"
                    },
                    new Course
                    {
                        CourseId = 3,
                        Name = "Main Course"
                    });
        }
    }
}
