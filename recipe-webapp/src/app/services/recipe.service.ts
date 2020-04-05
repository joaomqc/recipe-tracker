import { Injectable } from '@angular/core';
import Recipe from '../domain/recipe';
import NewRecipe from '../domain/newRecipe';
import { RestApiService } from './rest-api.service';
import Course from '../domain/course';

@Injectable({
    providedIn: 'root'
})
export class RecipeService {

    private recipeBaseUrl = 'recipe/';
    private courseBaseUrl = 'course/';

    constructor(private restApi: RestApiService) { }

    getRecipes = async (): Promise<Recipe[]> => {
        return await this.restApi.get<Recipe[]>(this.recipeBaseUrl);
    }

    addRecipe = async (recipe: NewRecipe): Promise<any> => {
        return await this.restApi.post(this.recipeBaseUrl, recipe);
    }

    getById = async (id: number): Promise<Recipe> => {
        return await this.restApi.get<Recipe>(this.recipeBaseUrl + id);
    }

    getCourses = async (): Promise<Course[]> => {
        return await this.restApi.get<Course[]>(this.courseBaseUrl);
    }
}
