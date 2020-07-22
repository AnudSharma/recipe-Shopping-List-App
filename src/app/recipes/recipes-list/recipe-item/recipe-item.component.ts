import { Component, OnInit,Input,EventEmitter,Output } from '@angular/core';
import { Recipe } from '../../recipe.model';
import { RecipeService } from '../../recipe.service';

@Component({
  selector: 'app-recipe-item',
  templateUrl: './recipe-item.component.html',
  styleUrls: ['./recipe-item.component.css']
})
export class RecipeItemComponent implements OnInit {
  @Input() recipe:Recipe;
  // @Output() recipeDesc=new EventEmitter<void>();
  @Input() index:number;
  constructor(private recipeService:RecipeService) { }

  ngOnInit(){
    // console.log( "the selected:"+this.recipeService.getSelectedRecipe());
    console.log("the:"+this.index);
  }


//   recipeDescription(){
// this.recipeDesc.emit();
//   }
// recipeDescription(){ //use event emitter of service to get to know that some itemm is clicked
//   console.log("rcipe item clicked..");
//   console.log( this.recipeService.getSelectedRecipe())
//   this.recipeService.getSelectedRecipe().emit(this.recipe);
//     }
}
