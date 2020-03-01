import { Component } from '@angular/core';
import Recipe from '../domain/recipe';
import { RecipeService } from '../services/recipe.service';

@Component({
  selector: 'app-browse-recipe',
  templateUrl: './browse-recipe.component.html',
  styleUrls: ['./browse-recipe.component.scss']
})
export class BrowseRecipeComponent {

    recipes: Recipe[];
    recipeTypes: any[];

    filteredRecipes: Recipe[];

    searchInput = "";

    constructor(recipeService: RecipeService){
        this.recipes = recipeService.getRecipes();
        this.recipeTypes = recipeService.getRecipeTypes().map(recipeType => ({
            name: recipeType,
            isChecked: false
        }));

        this.filteredRecipes = this.recipes;
    }

    updateList = () => {
        const isAnyRecipeTypeChecked = this.recipeTypes.find(t => t.isChecked);

        this.filteredRecipes = this.recipes
            .filter(r => r.name.contains(this.searchInput) &&
                (!isAnyRecipeTypeChecked || this.recipeTypes.find(t => t.name === r.type).isChecked));
    }
}
