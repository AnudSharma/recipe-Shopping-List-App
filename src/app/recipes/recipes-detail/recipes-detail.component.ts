import { Component, OnInit,Input } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipes-detail',
  templateUrl: './recipes-detail.component.html',
  styleUrls: ['./recipes-detail.component.css']
})
export class RecipesDetailComponent implements OnInit {
  isToggled:boolean=false;
  @Input() recipeD:Recipe;
  constructor() { }

  ngOnInit(): void {
  }

  toggelDropDown(){
    console.log("toggling...")
    this.isToggled=!this.isToggled
  }
}
