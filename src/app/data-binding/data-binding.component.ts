import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Event } from '@angular/router';

@Component({
  selector: 'app-data-binding',
  imports: [FormsModule],
  templateUrl: './data-binding.component.html',
  styleUrl: './data-binding.component.scss'
})
export class DataBindingComponent {
testData:string='Default';
toggle:boolean= false;

submitData(e:any){
 this.testData=e.target.value;
}

toggleFunc(){
this.toggle=!this.toggle;
console.log(this.toggle);
}
}
