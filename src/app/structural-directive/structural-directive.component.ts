import { NgClass, NgFor, NgIf, NgStyle, NgSwitch, NgSwitchCase, NgSwitchDefault } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HighlightDirective } from '../highlight.directive';

@Component({
  selector: 'app-structural-directive',
  imports: [NgIf,NgFor,FormsModule,NgSwitch,NgSwitchCase,NgSwitchDefault,NgClass,NgStyle,HighlightDirective],
  templateUrl: './structural-directive.component.html',
  styleUrl: './structural-directive.component.scss'
})
export class StructuralDirectiveComponent {
  visibility:boolean=false;
  selectedNumber:number=0;
  divisibleBy:number=2
  numbers:string[]=[
    "One",
    "Two",
    "Three",
    "Four",
    "Five"
  ]

msg(visible:boolean){
  this.visibility=visible;
}
}
