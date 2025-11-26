import { NgFor } from '@angular/common';
import { AfterContentChecked, AfterContentInit, AfterViewChecked, AfterViewInit, ChangeDetectionStrategy, Component, computed, ContentChild, contentChild, DoCheck, ElementRef, EventEmitter, input, Input, OnChanges, OnDestroy, OnInit, output, Output, signal, SimpleChanges, ViewChild, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-child',
  imports: [],
  templateUrl: './child.component.html',
  styleUrl: './child.component.scss',
  encapsulation:ViewEncapsulation.None,
})
export class ChildComponent implements OnInit,OnDestroy,OnChanges,DoCheck,AfterContentInit,AfterContentChecked,AfterViewInit,AfterViewChecked {

  @Input()
  str:string[]=[];
  
  @Input()name='';
  @Input() user:{name:string;age:number|undefined}={name:'',age:undefined};

  @ContentChild('content' )content!:ElementRef;
  @ViewChild('child') child!:ElementRef;

  keyValue=input<string>();
  sendMsg= output<string>();

  randomObj:{prop:string,val:string}[]=[{prop:'color',val:'black'},{prop:'color',val:'white'},{prop:'animal',val:'cat'},{prop:'animal',val:'dog'}];
  filteredObj=computed(()=>{
    return this.keyValue() ? this.randomObj.filter(r => r.prop.toLowerCase() === this.keyValue()?.toLowerCase()) : [...this.randomObj];
  });
  counter=0;
  interval:any;

  constructor(){
    console.log('child component constructor gets called...');
  }

  ngOnInit(): void {
    // this.filteredObj=[...this.randomObj];
    console.log('child component ngOnInit gets called...');
  //  this.interval= setInterval(()=>{
  //   this.counter=this.counter+1;
  //   console.log(this.counter);
  //   },1000);
  }

  ngOnChanges(changes: SimpleChanges) {
    // if (changes['keyValue']) {
    // this.filteredObj=this.randomObj.filter(a=>a.prop.toLowerCase()===this.keyValue.toLowerCase());
    // }
    console.log('Child component ngOnChanges gets called', changes);
  }


click(){
this.str.push('Child component');
}

sendMsgToParent(msg:string){
  this.sendMsg.emit(msg);
}

ngDoCheck(): void {
  console.log('ngDoCheck gets called',this.user);
}

ngAfterContentInit(): void {
  console.log('ngAfterContentInIt gets called',this.content);
}

ngAfterContentChecked(): void {
    console.log('ngAfterContentChecked gets called',this.content)
    this.content.nativeElement.innerText=`${this.name}`;
}

ngAfterViewInit(): void {
  console.log('view in it lifecycle hook gets called',this.child);
}

ngAfterViewChecked(): void {
        this.child.nativeElement.innerText=`${this.name}`;
}
ngOnDestroy(): void {
  console.log('Child component ngOnDestroy gets called');
  clearInterval(this.interval);
}
}
