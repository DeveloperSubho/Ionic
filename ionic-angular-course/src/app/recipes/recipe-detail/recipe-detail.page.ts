import { Component, OnInit } from '@angular/core';
import { RecipesService } from '../recipes.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Recipe } from '../recipes.model';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.page.html',
  styleUrls: ['./recipe-detail.page.scss'],
})
export class RecipeDetailPage implements OnInit {

  loadedRecipe: Recipe;
  constructor(private _recipeService: RecipesService,
              private _route: ActivatedRoute,
              private _router: Router,
              private alertCtrl: AlertController) { }

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

  deleteRecipe() {
    this.alertCtrl.create({header:'Are you sure?', message: 'Do you really want to delete the recipe?',
    buttons: [{
      text: 'Cancel',
      role: 'cancel'
    },
    {
      text: 'Delete',
      handler: () => {
        this._recipeService.deleteRecipe(this.loadedRecipe.id);
        this._router.navigate(['/recipes']);
      }
    }
    ]}).then(alertEl => {
      alertEl.present();
    });
  }

}
