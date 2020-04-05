namespace RecipeService.Repositories
{
    using System.Collections.Generic;
    using System.Linq;
    using System.Threading.Tasks;
    using Database.Context;
    using Domain;
    using Microsoft.EntityFrameworkCore;

    public class CourseRepository
    {
        private readonly RecipesDbContext _dbContext;

        public CourseRepository(RecipesDbContext dbContext)
        {
            _dbContext = dbContext;
        }

        public async Task<IEnumerable<Course>> GetCoursesAsync()
        {
            return await _dbContext.Courses
                .AsNoTracking()
                .Select(c =>
                    new Course(
                        c.CourseId,
                        c.Name))
                .ToListAsync();
        }
    }
}
