import { Component, OnInit,Input } from '@angular/core';
import { Recipe } from '../recipe.model';
import { RecipeService } from '../recipe.service';

@Component({
  selector: 'app-recipes-detail',
  templateUrl: './recipes-detail.component.html',
  styleUrls: ['./recipes-detail.component.css']
})
export class RecipesDetailComponent implements OnInit {
  isToggled:boolean=false;
  @Input() recipeD:Recipe;
  constructor(private recipeService:RecipeService) { }

  ngOnInit(): void {
  }

  toggelDropDown(){
    console.log("toggling...")
    this.isToggled=!this.isToggled
  }

  addIngredientToshoppingList(){
    console.log("updating shopping list..")
this.recipeService.updateShoppingList(this.recipeD.ingredients)
  }
}
