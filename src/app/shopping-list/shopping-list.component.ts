import { Component, OnInit } from '@angular/core';
import { Ingredient } from './ingredient.model';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit {

  constructor() { }
ingredients:Ingredient[]=[
  new Ingredient("Apple",3),
  new Ingredient("Orange",2),
];
  ngOnInit(): void {
  }

  updateShoppingList(shoppingItem:Ingredient){
    this.ingredients.push(shoppingItem);
    console.log(shoppingItem);
      }

}
