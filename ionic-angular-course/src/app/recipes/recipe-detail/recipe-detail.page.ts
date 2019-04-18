import { Component, OnInit } from '@angular/core';
import { RecipesService } from '../recipes.service';
import { ActivatedRoute } from '@angular/router';
import { Recipe } from '../recipes.model';

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.page.html',
  styleUrls: ['./recipe-detail.page.scss'],
})
export class RecipeDetailPage implements OnInit {

  loadedRecipe: Recipe;
  constructor(private _recipeService: RecipesService, private _route: ActivatedRoute) { }

  ngOnInit() {
    this._route.paramMap.subscribe(paramMap => {
      if (!paramMap.has('recipeId')) {
        // Redirect
        return;
      }
      const recipeId = paramMap.get('recipeId');
      this.loadedRecipe = this._recipeService.getRecipe(recipeId);
    });
  }

}
