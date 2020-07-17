import { Component } from '@angular/core';
import { Ingredient } from './shopping-list/ingredient.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'myRecipeShopping';
  recipeC:string='Recipe';
  shoppingListC:boolean;

  recipeComp(event:string){
    console.log("event fired",+event)
    if(event=='Recipe'){
this.recipeC='Recipe'

    }
    else if(event=='shopping-list'){
      this.recipeC='shopping-list'
    }
  }


}
