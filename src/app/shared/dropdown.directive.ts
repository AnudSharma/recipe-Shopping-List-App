import { Directive, Input, TemplateRef, ViewContainerRef, HostListener, HostBinding } from '@angular/core';

@Directive({
  selector: '[appDropdown]'
})
export class DropdownDirective {

  // One way of doing togling of class
// @Input() set appDropdown(condition:boolean){
// if(condition){
//   this.vcRef.createEmbeddedView(this.tempRef)
// }else{
//   this.vcRef.clear()
// }
// }
//   constructor(private tempRef:TemplateRef<any>,private vcRef:ViewContainerRef) { }

// }

// Other way of toggling class-better way

@HostBinding('class.open') isOpen=false; //'open' class is part of bootstrap css which we are supposed to attach/detach dynamically on toggling-so here the class will be attached if the isOpen is true, it will attach and false it will be removed

@HostListener('click') toggleOpen(){
  this.isOpen=!this.isOpen
}

}
