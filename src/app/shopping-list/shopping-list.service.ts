import { Ingredient } from './ingredient.model';
import { EventEmitter } from '@angular/core';

export class ShoppingListService{
  updatedIngredientList=new EventEmitter<Ingredient[]>();
  ingredients=[
    new Ingredient("Apple",3),
    new Ingredient("Orange",2),
  ];

  getIngredient(){
    return this.ingredients.slice();
  }
  addIngredient(ingr:Ingredient){
    console.log("the new ingr" +ingr.name)
    this.ingredients.push(ingr);
    this.updatedIngredientList.emit(this.ingredients.slice()) //this will be needed to have the copy of the ingredient list updated
  }

  addIngredients(ingredients:Ingredient[]){ //always remember to move the provider from the component level to root level in case there is cross-component exchange (singleton instance) else the list on the shopping-list component will not be updated
    ingredients.forEach(element => {
      this.addIngredient(element);
});
  }
}
