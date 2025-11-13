import { Component, Input, model } from '@angular/core';

@Component({
  selector: 'app-parent1',
  imports: [],
  templateUrl: './parent1.component.html',
  styleUrl: './parent1.component.scss'
})
export class Parent1Component {
value=model();

toggle(){
  this.value.update(val=>!val);
}
}
