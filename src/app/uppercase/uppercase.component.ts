import {Component} from '@angular/core';
@Component({
    selector:'app-uppercase',
    template: 
    `
   <input type="text" [(ngModel)]="name">
   <div>
   {{name|uppercase}}
   </div>
    `
})
export class UpperCaseComponent{
    name:string;
    constructor()
    {}
}