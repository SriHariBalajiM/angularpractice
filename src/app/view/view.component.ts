import { AfterViewInit, Component, computed, effect, ElementRef, OnInit, QueryList, ViewChild, viewChild, viewChildren, ViewChildren } from '@angular/core';
import { ViewTestComponent } from '../view-test/view-test.component';

@Component({
  selector: 'app-view',
  imports: [ViewTestComponent],
  templateUrl: './view.component.html',
  styleUrl: './view.component.scss'
})
export class ViewComponent  {
viewTestChildSignal=viewChild<ViewTestComponent>(ViewTestComponent);
result=viewChild<ElementRef>('result');

highlight=viewChildren<ElementRef>('highlight');

totalListedPTags=computed(()=>this.highlight().length);
constructor(){
  effect(() => {
  const res=this.result();
  if(res){
res.nativeElement.innerText=`Result of total <p> Tags are ${this.totalListedPTags()}`;
  }
  }
  )
}

increment(){
  this.viewTestChildSignal()?.inc();
}
decrement(){
    this.viewTestChildSignal()?.dec();
}
}
