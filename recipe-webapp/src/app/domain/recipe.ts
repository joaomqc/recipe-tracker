import Ingredient from './ingredient';
import Course from './course';

export default interface Recipe{
    recipeId: number,
    name: string,
    course: Course,
    ingredients: Ingredient[],
    directions: string
}