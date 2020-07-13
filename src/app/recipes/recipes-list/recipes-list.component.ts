import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipes-list',
  templateUrl: './recipes-list.component.html',
  styleUrls: ['./recipes-list.component.css']
})
export class RecipesListComponent implements OnInit {
recipes:Recipe[]=[
  new Recipe('Pot Roast stock','Its super simple ripe made of potatoes','https://media.istockphoto.com/photos/pot-roast-picture-id1151460402'),
  new Recipe('Mash-Potato','Its super simple ripe made of potatoes','https://cdn.pixabay.com/photo/2017/03/04/16/07/eat-2116422_960_720.jpg')

]
  constructor() { }

  ngOnInit(): void {
  }

}
