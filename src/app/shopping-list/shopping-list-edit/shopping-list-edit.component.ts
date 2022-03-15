import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Ingredient } from 'src/app/shared/ingredient.model';
import { ShoppingService } from 'src/app/shared/shopping.service';

@Component({
  selector: 'app-shopping-list-edit',
  templateUrl: './shopping-list-edit.component.html',
  styleUrls: ['./shopping-list-edit.component.css'],
})
export class ShoppingListEditComponent implements OnInit {
  @ViewChild('nameRef') nameRef: ElementRef;
  @ViewChild('amtRef') amountRef: ElementRef;
  constructor(private shoppingService: ShoppingService) {}

  ngOnInit(): void {}

  addShoppingList() {
    this.shoppingService.addIngredients(
      new Ingredient(
        this.nameRef.nativeElement.value,
        this.amountRef.nativeElement.value
      )
    );
  }
}
