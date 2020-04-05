namespace RecipeService.Database.Entities
{
    using System.Collections.Generic;
    using System.ComponentModel.DataAnnotations;

    public class Course
    {
        [Key]
        public int CourseId { get; set; }

        public string Name { get; set; }

        public virtual IEnumerable<Recipe> Recipes { get; set; }
    }
}
