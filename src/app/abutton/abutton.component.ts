import {Component} from '@angular/core';
@Component({
    selector:'app-button1',
    template: `
    <h2> Like Button </h2>
    <button [class]="decreaseLike?'liked like-button':'like-button'" (click)="reducelikes()">
    Like | <span class="likes-counter">{{initialCount}} </span></button>
    `,
    styles: [`
    .like-button {
        font-size: 1rem;
        padding: 5px 10px;
        color:  #585858;
    }

    .liked {
        font-weight: bold;
        color: #1565c0;
    }
    .likes-counter
    {

    }

`]
})
export class AbuttonComponent
{
    public initialCount=100;
    decreaseLike:boolean;
    constructor()
    {   
        this.decreaseLike=false;

    }
    reducelikes()
    {
        if(this.decreaseLike==false)
        {
            this.initialCount++;
            this.decreaseLike=true;
        }
        else
        {
            this.initialCount--;
            this.decreaseLike=false;
        }
    }
}