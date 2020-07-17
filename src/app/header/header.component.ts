import { Component, OnInit, EventEmitter, Output } from '@angular/core';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
@Output() recipeComponent=new EventEmitter<string>();

  constructor() { }

  ngOnInit(): void {
  }

  recipeComp(feature:string){
    console.log("r button clicked")
this.recipeComponent.emit(feature);
  }

}
