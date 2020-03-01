import { Component, OnInit } from '@angular/core';
import { RecipeService } from '../services/recipe.service';
import Ingredient from '../domain/ingredient';
import { Router } from '@angular/router';

@Component({
  selector: 'app-new-recipe',
  templateUrl: './new-recipe.component.html',
  styleUrls: ['./new-recipe.component.scss']
})
export class NewRecipeComponent {

    recipeTypes: string[];

    selectedRecipeType = "";
    recipeName = "";
    directions = "";

    ingredients: Ingredient[] = [];
    newIngredientName = "";
    newIngredientQuantity = "";

    constructor(private recipeService: RecipeService, private router: Router) {
        this.recipeTypes = recipeService.getRecipeTypes();
    }

    addIngredient = () => {
        if(!!this.newIngredientName && !!this.newIngredientQuantity){
            this.ingredients.push({
                name: this.newIngredientName,
                quantity: this.newIngredientQuantity
            });
            this.newIngredientName = "";
            this.newIngredientQuantity = "";
        }
    }

    removeIngredient = (index: number) => {
        this.ingredients.splice(index, 1);
    }

    saveRecipe = () => {
        this.recipeService.addRecipe({
            id: 0,
            name: this.recipeName,
            type: this.selectedRecipeType,
            directions: this.directions,
            ingredients: this.ingredients
        });
        this.router.navigate(['/']);
    }
}
