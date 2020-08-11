import {Component} from '@angular/core';
@Component({
    selector:'app-shopping',
    template:`
   <input type="text" #productname>
   <button (click)=decreasecount(productname); >Button</button>
   <div *ngFor= "let m of pname">
   {{m}}
   </div>
   <div *ngFor="let a of count">
   {{a}}
   </div>
    `
})
export class ShoppingComponent
{   pname:string[];
    count:number[];
    constructor()
    {
        this.pname=["toy", "pen"];
        this.count=[20, 10];
    }
    decreasecount(productname)
    {
        for(let index=0; index<this.pname.length;index++)
        {
            if(productname.value==this.pname[index])
            {
                const i=index;
                this.count[i]--;
            }
            
        }
    }

}