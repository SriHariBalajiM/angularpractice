import { NgFor } from '@angular/common';
import { ChangeDetectionStrategy, Component, computed, DoCheck, EventEmitter, input, Input, OnChanges, OnInit, output, Output, signal, SimpleChanges, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-child',
  imports: [NgFor],
  templateUrl: './child.component.html',
  styleUrl: './child.component.scss',
  encapsulation:ViewEncapsulation.None,
})
export class ChildComponent {

  @Input()
  str:string[]=[];

  keyValue=input<string>();
  sendMsg= output<string>();

  randomObj:{prop:string,val:string}[]=[{prop:'color',val:'black'},{prop:'color',val:'white'},{prop:'animal',val:'cat'},{prop:'animal',val:'dog'}];
  filteredObj=computed(()=>{
    return this.keyValue() ? this.randomObj.filter(r => r.prop.toLowerCase() === this.keyValue()?.toLowerCase()) : [...this.randomObj];
  });
  
  // ngOnInit(): void {
  //   this.filteredObj=[...this.randomObj];
  // }
  // ngOnChanges(changes: SimpleChanges) {
  //   if (changes['keyValue']) {
  //   this.filteredObj=this.randomObj.filter(a=>a.prop.toLowerCase()===this.keyValue.toLowerCase());
  //   }
  // }


click(){
this.str.push('Child component');
}

sendMsgToParent(msg:string){
  this.sendMsg.emit(msg);
}
}
