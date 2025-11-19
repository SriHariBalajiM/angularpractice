import { AfterViewInit, Component, ElementRef, OnInit, QueryList, ViewChild, viewChild, ViewChildren } from '@angular/core';
import { ViewTestComponent } from '../view-test/view-test.component';

@Component({
  selector: 'app-view',
  imports: [ViewTestComponent],
  templateUrl: './view.component.html',
  styleUrl: './view.component.scss'
})
export class ViewComponent implements AfterViewInit {
    @ViewChildren('highlight')highlight!:QueryList<ElementRef>;
@ViewChild(ViewTestComponent) viewTestChild: ViewTestComponent | undefined;


ngAfterViewInit(): void {
      this.highlight.forEach((ele,index)=>{
        ele.nativeElement.innerText=index;
      })
}

increment(){
  this.viewTestChild?.inc();
}
decrement(){
    this.viewTestChild?.dec();
}
}
