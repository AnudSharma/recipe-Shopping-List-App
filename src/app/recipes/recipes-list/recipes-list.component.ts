import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipes-list',
  templateUrl: './recipes-list.component.html',
  styleUrls: ['./recipes-list.component.css']
})
export class RecipesListComponent implements OnInit {
  @Output() recipeSelected=new EventEmitter<Recipe>();
recipeList:Recipe[]=[
  new Recipe('Pot Roast stock','Its super simple ripe made of potatoes','/assets/images/food-1505942_640.jpg'),
  new Recipe('Mash-Potato','Its super simple ripe made of potatoes','/assets/images/food-1505942_640.jpg')

];



  constructor() { }

  ngOnInit(): void {
  }

  rescD(recipe:Recipe){
this.recipeSelected.emit(recipe);
  }

}
