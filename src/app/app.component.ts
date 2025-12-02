import { Component, DoCheck, inject, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ParentComponent } from './parent/parent.component';
import { ChildComponent } from './child/child.component';
import { TestService } from './test.service';
import { ViewComponent } from './view/view.component';
import { DataBindingComponent } from './data-binding/data-binding.component';
import { StructuralDirectiveComponent } from './structural-directive/structural-directive.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet,StructuralDirectiveComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent implements OnInit, DoCheck {
  public testService=inject(TestService);
  ngOnInit(): void {
    this.testService.name='Sri';
    this.name=this.testService.name;
  }
  title = 'angularpractice';
  name:string='';

changeName(){
this.testService.name='Ananth';
this.name=this.testService.name;
}

ngDoCheck(): void {
}

click(){}
}
