import { Recipe } from './recipe.model';
import { EventEmitter, Injectable } from '@angular/core';
import { Ingredient } from '../shopping-list/ingredient.model';
import { ShoppingListService } from '../shopping-list/shopping-list.service';
@Injectable()
export class RecipeService{
  recipeSelected=new EventEmitter<Recipe>();
recipe=[
  new Recipe('Pot Roast stock','Its super simple ripe made of potatoes','/assets/images/food-1505942_640.jpg',[
    new Ingredient('Apple',2),
    new Ingredient('Tomato',1)
  ]),
  new Recipe('Mash-Potato','Its super simple ripe made of potatoes','/assets/images/burning-love-1579246_640.jpg',[
    new Ingredient('Potato',2),
    new Ingredient('Green Coriander',1),
    new Ingredient('French Fries',1)
  ])

];
constructor(private shoppingListService:ShoppingListService){}

getRecipe(){
  return this.recipe.slice(); //slice will return the reference-a copy of this recipe array
}
getSelectedRecipe(){
  return this.recipeSelected;
}

updateShoppingList(ingredients:Ingredient[]){
  this.shoppingListService.addIngredients(ingredients)
//   ingredient.forEach(element => {
//     this.shoppingListService.addIngredient(element);

// });
}
}
