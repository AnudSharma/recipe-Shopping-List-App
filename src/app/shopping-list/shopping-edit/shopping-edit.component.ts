import { Component, OnInit, ViewChild, ElementRef, Output, EventEmitter } from '@angular/core';
import { Ingredient } from '../ingredient.model';
import { ShoppingListService } from '../shopping-list.service';


@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit {
ingredient:Ingredient[];

// @Output() newIngredient=new EventEmitter<Ingredient>();

@ViewChild('nameInput',{static:false}) name:ElementRef;
@ViewChild('amountInput',{static:false}) amount:ElementRef;
  constructor(private shoppingListService:ShoppingListService) { }

  ngOnInit(): void {
  }
//   addIngredient(){
//     const ingrName=this.name.nativeElement.value;
//     const ingrAmount=this.amount.nativeElement.value
// const newIngre=new Ingredient(ingrName,ingrAmount);
// this.newIngredient.emit(newIngre);


//   }

addIngredient(){
  const ingrName=this.name.nativeElement.value;
  const ingrAmount=this.amount.nativeElement.value
const newIngre=new Ingredient(ingrName,ingrAmount);
this.shoppingListService.addIngredient(newIngre);


}

}
