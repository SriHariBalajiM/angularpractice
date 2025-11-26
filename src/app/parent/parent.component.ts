import { Component, DoCheck, inject, OnInit, ViewEncapsulation } from '@angular/core';
import { TestService } from '../test.service';
import { ChildComponent } from '../child/child.component';
import { NgIf } from '@angular/common';
import { Parent1Component } from './parent1/parent1.component';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-parent',
  imports: [ChildComponent,FormsModule],
  templateUrl: './parent.component.html',
  styleUrl: './parent.component.scss',
  providers:[TestService],
  encapsulation:ViewEncapsulation.ShadowDom

})
export class ParentComponent implements OnInit,DoCheck {
   testService=inject(TestService);
     title = 'angularpractice';
  name:string='';
  age:number|undefined;
str1:string[]=[];

keyMsg:string='';
selected:string='';
val:boolean=false;
showChild=false;

user:{name:string;age:number|undefined}={name:'',age:undefined};

constructor(){
console.log('Parent constructor gets called');
}

  ngOnInit(): void {
    // this.name=this.testService.name;
console.log('Parent ngOnInit gets called...');
  }

  ngDoCheck(): void {
}

click(){
  this.str1.push('Parent component');
}

handleSelection(key:string){
  this.keyMsg=key;
}

hanldeChildMsg(e:any){
this.selected=e;
}

toggle(){
this.val=true;
}

toggleChild(){
  this.showChild=!this.showChild;
}

updateProfile(){
this.user.name=this.name;
this.user.age=this.age;
}
}
