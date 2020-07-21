import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Recipe } from '../recipe.model';
import { RecipeService } from '../recipe.service';

@Component({
  selector: 'app-recipes-list',
  templateUrl: './recipes-list.component.html',
  styleUrls: ['./recipes-list.component.css']
})
export class RecipesListComponent implements OnInit {
  // @Output() recipeSelected=new EventEmitter<Recipe>();
recipeList:Recipe[]



  constructor(private recipeSevice:RecipeService) { }

  ngOnInit(): void {
    this.recipeList=this.recipeSevice.getRecipe();
  }

//   rescD(recipe:Recipe){
// this.recipeSelected.emit(recipe);
//   }

}
