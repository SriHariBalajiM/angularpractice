import { Component } from '@angular/core';

@Component({
  selector: 'app-view-test',
  imports: [],
  templateUrl: './view-test.component.html',
  styleUrl: './view-test.component.scss'
})
export class ViewTestComponent {
counter:number=0;

inc(){
  this.counter++;
}

dec(){
  this.counter--;
}
}
