import { EventEmitter, Injectable } from "@angular/core";
import { Ingredient } from "./ingredient.model";

@Injectable()
export class ShoppingService{
    ingredientChanged:EventEmitter<Array<Ingredient>>=new EventEmitter();
    private Ingredients:Array<Ingredient>=[
        new Ingredient('Apple',5),
        new Ingredient('Tomatoes',10)
      ];

      getIngredients()
      {
          return [...this.Ingredients];
      }

      addIngredients(ingredient:Ingredient)
      {
            this.Ingredients.push(ingredient);
            this.ingredientChanged.emit([...this.Ingredients]);
      }
      

}