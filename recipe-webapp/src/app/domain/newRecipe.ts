import Ingredient from './ingredient';

export default interface NewRecipe{
    name: string,
    directions: string,
    courseId: number,
    ingredients: Ingredient[]
}