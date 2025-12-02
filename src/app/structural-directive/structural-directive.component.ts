import { NgFor, NgIf, NgSwitch, NgSwitchCase, NgSwitchDefault } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-structural-directive',
  imports: [NgIf,NgFor,FormsModule,NgSwitch,NgSwitchCase,NgSwitchDefault],
  templateUrl: './structural-directive.component.html',
  styleUrl: './structural-directive.component.scss'
})
export class StructuralDirectiveComponent {
  visibility:boolean=false;
  selectedNumber:number=0;
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
