import { Component } from '@angular/core';
import Recipe from '../domain/recipe';
import { RecipeService } from '../services/recipe.service';

@Component({
  selector: 'app-browse-recipe',
  templateUrl: './browse-recipe.component.html',
  styleUrls: ['./browse-recipe.component.scss']
})
export class BrowseRecipeComponent {

    recipes: Recipe[] = [];
    courses: any[] = [];

    filteredRecipes: Recipe[] = [];

    searchInput = "";

    constructor(recipeService: RecipeService){
        recipeService.getRecipes().then(recipes => {
            this.filteredRecipes = recipes;
            this.recipes = recipes;
        });
        recipeService.getCourses().then(courses =>
            this.courses = courses.map(course => ({
                courseId: course.courseId,
                name: course.name,
                isChecked: false
            }))
        );
    }

    updateList = () => {
        const coursesChecked = this.courses.filter(t => t.isChecked);

        this.filteredRecipes = this.recipes
            .filter(r => r.name.contains(this.searchInput)
                &&(!coursesChecked.length
                    || !!coursesChecked.find(c => c.courseId === r.course.courseId)));
    }
}
