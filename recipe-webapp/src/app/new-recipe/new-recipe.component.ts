import { Component, OnInit } from '@angular/core';
import { RecipeService } from '../services/recipe.service';
import Ingredient from '../domain/ingredient';
import { Router } from '@angular/router';
import Course from '../domain/course';

@Component({
  selector: 'app-new-recipe',
  templateUrl: './new-recipe.component.html',
  styleUrls: ['./new-recipe.component.scss']
})
export class NewRecipeComponent {

    courses: Course[];

    selectedCourseId = "";
    recipeName = "";
    directions = "";

    ingredients: Ingredient[] = [];
    newIngredientName = "";
    newIngredientQuantity = "";

    constructor(private recipeService: RecipeService, private router: Router) {
        recipeService.getCourses().then(courses => this.courses = courses);
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
            name: this.recipeName,
            courseId: parseInt(this.selectedCourseId),
            directions: this.directions,
            ingredients: this.ingredients
        }).then(() => {
            this.router.navigate(['/']);
        });
    }
}
