import { Component, OnInit,Input } from '@angular/core';
import { Recipe } from '../recipe.model';
import { RecipeService } from '../recipe.service';
import { ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-recipes-detail',
  templateUrl: './recipes-detail.component.html',
  styleUrls: ['./recipes-detail.component.css']
})
export class RecipesDetailComponent implements OnInit {
  isToggled:boolean=false;
  // @Input() recipeD:Recipe;
  recipeD:Recipe;
  id:number;
  constructor(private recipeService:RecipeService,
    private route:ActivatedRoute) { }

  ngOnInit(){
this.route.params.subscribe((params:Params)=>{
this.id=+params['id'];//cast string to number by adding +
this.recipeD=this.recipeService.getSelectedRecipebyIndex(this.id);
})
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
