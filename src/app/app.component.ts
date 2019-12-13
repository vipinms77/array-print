import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {
  name = '';
  numArr = [];
  array = [];
  constructor() {
    for(let i = 50; i > 0; i--){
      this.numArr.push(i);
      if(i%Math.sqrt(i) === 0 &&  (i%3 == 0||i%5 == 0)){
        this.array.push(`Perfect ${i}`);     
      } else if (i%3 == 0 && i%5 == 0){
        this.array.push(`Milk Shake`);
      } else if (i%3 == 0){
        this.array.push(`Milk`);
      } else if (i%5 == 0) {
        this.array.push(`shake`)
      } else if(i%Math.sqrt(i) == 0) {
        this.array.push(`Perfect`);
      } else {
        this.array.push(i);
      }
    }
  }
}
