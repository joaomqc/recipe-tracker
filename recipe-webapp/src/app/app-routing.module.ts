import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NewRecipeComponent } from './new-recipe/new-recipe.component';
import { BrowseRecipeComponent } from './browse-recipe/browse-recipe.component';
import { RecipeComponent } from './recipe/recipe.component';

const routes: Routes = [
    { path: 'browse', component: BrowseRecipeComponent},
    { path: 'create', component: NewRecipeComponent },
    { path: 'recipe/:id', component: RecipeComponent },
    { path: '**', redirectTo: '/browse' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
