import { Injectable } from '@angular/core';
import Recipe from '../domain/recipe';

@Injectable({
  providedIn: 'root'
})
export class RecipeService {

    private recipes: Recipe[] = [
        {
            id: 1,
            name: "Bolo de chocolate",
            type: "dessert",
            ingredients: [{
                name: "ovos",
                quantity: "2"
            }],
            directions: "Cozer a coisa"
        },
        {
            id: 2,
            name: "Quiche de atum",
            type: "meal",
            ingredients: [{
                name: "ovos",
                quantity: "2"
            }],
            directions: "Cozer a coisa"
        }
    ];

    private recipeTypes: string[] = [
        "meal",
        "dessert"
    ];

  constructor() { }

  getRecipes = (): Recipe[] => {
      return this.recipes;
  }

  getRecipeTypes = (): string[] => {
      return this.recipeTypes;
  }

  addRecipe = (recipe: Recipe): void => {
      recipe.id = this.recipes.length;
      this.recipes.push(recipe);
  }

  getById = (id: number): Recipe => {
      return this.recipes.find(recipe => recipe.id == id);
  }
}
