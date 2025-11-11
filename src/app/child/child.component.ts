import { NgFor } from '@angular/common';
import { ChangeDetectionStrategy, Component, DoCheck, Input, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-child',
  imports: [NgFor],
  templateUrl: './child.component.html',
  styleUrl: './child.component.scss',
  encapsulation:ViewEncapsulation.None,
})
export class ChildComponent implements DoCheck {

  @Input()
  str:string[]=[];
  
ngDoCheck(): void {
  console.log('Child component gets called');
}

click(){
this.str.push('Child component');
}
}
