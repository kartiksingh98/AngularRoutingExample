import {Component} from '@angular/core';
@Component({
    selector:'app-test',
    template:`
    Add this: <input type="text" #text1>
    Count: <input type="number" #countfield>
    <button (click)="addtocart(text1, countfield)">Add to List </button>
   <ul>
   <li *ngFor="let hero of addition1;let i=index">
     {{hero}} 
     {{count[i]}}
   </li>
 </ul>
 
<ul>
<li *ngFor="let k1 of adding">
  {{k1|json}}
</li>
</ul>

 `
})
//<ul>
//  <li *ngFor="let h1 of count">
//    {{h1}}
//  </li>
// </ul>

export class TestComponent
{   
    
    addition1:string[];
    count:number[];
    adding=[
        {

        }
    ]
    constructor()
    {   
        this.addition1=["Ramu", "Somu"];
        this.count=[21,32];
        
    }
    addtocart(str, count1)
    {   //console.log(listele);
        this.addition1.push(str.value);
        this.count.push(count1.value);
        this.adding.push({name:str.value, count:count1.value});
        
    }
}
 