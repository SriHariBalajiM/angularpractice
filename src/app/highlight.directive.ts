import { Directive, ElementRef, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';

@Directive({
  selector: '[appHighlight]'
})
export class HighlightDirective implements OnChanges {
  private el!:ElementRef;
@Input() number=0;
@Input() divisibleBy:number=0;
  constructor(el:ElementRef) 
  { this.el=el;}
  ngOnChanges(changes: SimpleChanges): void {
    if(this.number%this.divisibleBy===0){
      this.el.nativeElement.style.backgroundColor='green';
    }
    else{
      this.el.nativeElement.style.backgroundColor='red';
    }
  }

}
