import { Injectable } from '@angular/core';
import { Recipe } from './recipes.model';

@Injectable({
  providedIn: 'root'
})
export class RecipesService {
  private recipes: Recipe[] = [
    {
      id: '1',
      title: 'Pizza',
      // tslint:disable-next-line: max-line-length
      imageUrl:
        'https://www.seriouseats.com/recipes/images/2011/08/20110818-pizza-lab-greek-primary-1.jpg',
      ingredients: ['French Fries', 'Pork Meat']
    },
    {
      id: '2',
      title: 'Biryani',
      // tslint:disable-next-line: max-line-length
      imageUrl: 'https://recipes.timesofindia.com/photo/52397749.cms',
      ingredients: ['Egg', 'Masala']
    },
    {
      id: '3',
      title: 'Mocktail',
      // tslint:disable-next-line: max-line-length
      imageUrl:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSk4ti1Y1OqkBomXdGOybLc59WCs1XtCnjFkeiz5gfloWPPYTz2',
      ingredients: ['Water', 'Soda']
    }
  ];

  constructor() {}

  getAllRecipes() {
    return [...this.recipes];
  }

  getRecipe(recipeId: string) {
    return {
      ...this.recipes.find(recipe => {
        return recipe.id === recipeId;
      })
    };
  }
}
