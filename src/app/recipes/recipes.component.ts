import { Component, OnInit } from '@angular/core';
import { Recipe } from './recipe.model';
import { RecipeService } from './recipe.service';

@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.component.html',
  styleUrls: ['./recipes.component.css'],
  providers:[RecipeService]
})
export class RecipesComponent implements OnInit {
recipeDetails:Recipe;

  constructor(private recipeService:RecipeService) { }

  ngOnInit(){
    console.log("getting value")
    this.recipeService.getSelectedRecipe().subscribe((value:Recipe)=>{
      console.log(value);
      this.recipeDetails=value
    }
    )
  }

  // recipeDescription(recipeD:Recipe){
  //   console.log("the desc:"+recipeD)
  //   this.recipeDetails=recipeD;

  // }

}
