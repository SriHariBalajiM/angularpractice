import { Component, DoCheck, inject, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ParentComponent } from './parent/parent.component';
import { ChildComponent } from './child/child.component';
import { TestService } from './test.service';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet,ParentComponent],
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
  console.log('getting called');
this.testService.name='Ananth';
this.name=this.testService.name;
}

ngDoCheck(): void {
  console.log('App component gets called');
}

click(){}
}
