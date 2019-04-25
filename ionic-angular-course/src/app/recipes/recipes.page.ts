import { Component, OnInit, OnDestroy } from '@angular/core';
import { RecipesService } from './recipes.service';
import { Recipe } from './recipes.model';

@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.page.html',
  styleUrls: ['./recipes.page.scss']
})
export class RecipesPage implements OnInit, OnDestroy {

  recipes: Recipe[];

  constructor(private _recipeService: RecipesService) {}

  ngOnInit() {
    console.log('ngOnInit');
  }

  ionViewWillEnter() {
    console.log('ionViewWillEnter');
    this.recipes = this._recipeService.getAllRecipes();
    console.log(this.recipes);
  }

  ionViewDidEnter() {
    console.log('ionViewDidEnter');
  }

  ngOnDestroy() {
    console.log('On Destroy');
  }
}
