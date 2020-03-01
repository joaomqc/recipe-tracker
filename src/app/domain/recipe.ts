import Ingredient from './ingredient';

export default interface Recipe{
    id: number,
    name: string,
    type: string,
    ingredients: Ingredient[],
    directions: string
}