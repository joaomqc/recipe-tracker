import { Component, OnInit } from '@angular/core';
import { RecipeService } from '../services/recipe.service';
import Recipe from '../domain/recipe';
import { Route, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-recipe',
  templateUrl: './recipe.component.html',
  styleUrls: ['./recipe.component.scss']
})
export class RecipeComponent {

    recipe: Recipe;

    constructor(recipeService: RecipeService, private route: ActivatedRoute) {
        const id = this.route.snapshot.paramMap.get('id');
        this.recipe = recipeService.getById(parseInt(id));
    }
}
