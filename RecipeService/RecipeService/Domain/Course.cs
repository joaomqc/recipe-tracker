namespace RecipeService.Domain
{
    public class Course
    {
        public Course(
            int courseId,
            string name)
        {
            CourseId = courseId;
            Name = name;
        }

        public int CourseId { get; }

        public string Name { get; }
    }
}
