import { Component, DoCheck, inject, OnInit, ViewEncapsulation } from '@angular/core';
import { TestService } from '../test.service';
import { ChildComponent } from '../child/child.component';

@Component({
  selector: 'app-parent',
  imports: [ChildComponent],
  templateUrl: './parent.component.html',
  styleUrl: './parent.component.scss',
  providers:[TestService],
  encapsulation:ViewEncapsulation.ShadowDom

})
export class ParentComponent implements OnInit,DoCheck {
   testService=inject(TestService);
     title = 'angularpractice';
  name:string='';
str1:string[]=[];
  ngOnInit(): void {
    this.name=this.testService.name;
  }

  ngDoCheck(): void {
  console.log('Parent component gets called');
}

click(){
  this.str1.push('Parent component');
  console.log(this.str1);
}
}
