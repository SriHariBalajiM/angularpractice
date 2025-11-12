import { NgFor } from '@angular/common';
import { ChangeDetectionStrategy, Component, DoCheck, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-child',
  imports: [NgFor],
  templateUrl: './child.component.html',
  styleUrl: './child.component.scss',
  encapsulation:ViewEncapsulation.None,
})
export class ChildComponent implements OnChanges,OnInit {

  @Input()
  str:string[]=[];

  @Input() keyValue='';
  @Output() sendMsg= new EventEmitter();

  randomObj:{prop:string,val:string}[]=[{prop:'color',val:'black'},{prop:'color',val:'white'},{prop:'animal',val:'cat'},{prop:'animal',val:'dog'}];
  filteredObj:{prop:string,val:string}[]=[];
  
  ngOnInit(): void {
    this.filteredObj=[...this.randomObj];
  }
  ngOnChanges(changes: SimpleChanges) {
    if (changes['keyValue']) {
    this.filteredObj=this.randomObj.filter(a=>a.prop.toLowerCase()===this.keyValue.toLowerCase());
    }
  }

click(){
this.str.push('Child component');
}

sendMsgToParent(msg:string){
  this.sendMsg.emit(msg);
}
}
