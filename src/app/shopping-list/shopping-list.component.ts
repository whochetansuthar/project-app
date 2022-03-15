import { Component, OnInit } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';
import { ShoppingService } from '../shared/shopping.service';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit {
  Ingredients:Array<Ingredient>=[];
  constructor(private shoppingService:ShoppingService) { }

  ngOnInit(): void {
    this.Ingredients=this.shoppingService.getIngredients();
    this.shoppingService.ingredientChanged.subscribe((ingredients:Array<Ingredient>)=>{
      this.Ingredients=ingredients;
    });
  }

  

}
