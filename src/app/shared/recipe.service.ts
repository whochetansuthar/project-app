import { EventEmitter, Injectable } from '@angular/core';
import { Recipe } from '../recipes/recipe.model';
import { Ingredient } from './ingredient.model';
import { ShoppingService } from './shopping.service';

@Injectable()
export class RecipeService {
  constructor(private shoppingService:ShoppingService){}
  private recipes: Array<Recipe> = [
    new Recipe(
      'A test recipe',
      'recipe description',
      'https://img.delicious.com.au/Whdi4i8g/w759-h506-cfill/del/2021/05/slow-roasted-butter-eggplant-curry-152139-2.jpg',
      [new Ingredient('Meat', 1), new Ingredient('French Fries', 1)]
    ),
  ];
  getRecipes = () => {
    return [...this.recipes];
  };
  addToShoppingList(ingredients:Array<Ingredient>)
  {
    ingredients.forEach((item)=>{
      this.shoppingService.addIngredients(item);
    })
  }

  recipeSelector: EventEmitter<Recipe> = new EventEmitter();
}
