import { Component, OnInit } from '@angular/core';
import { Ingredient } from './ingredient.model';
import { ShoppingListService } from './shopping-list.service';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css'],

})
export class ShoppingListComponent implements OnInit {

  constructor(private shoppingListService:ShoppingListService) { }
ingredients:Ingredient[]
  ngOnInit(): void {
    this.ingredients=this.shoppingListService.getIngredient();
    this.shoppingListService.updatedIngredientList.subscribe((ingredientList:Ingredient[])=>
    this.ingredients=ingredientList)
  }

  // updateShoppingList(shoppingItem:Ingredient){
  //   this.ingredients.push(shoppingItem);
  //   console.log(shoppingItem);
  //     }

}
