import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-like',
  templateUrl: './like.component.html',
  styleUrls: ['./like.component.css']
})
export class LikeComponent implements OnInit {
 count:number;
 favStatus:boolean;
  likeclassname:string;
  favstatus1:boolean;

  constructor() {
    this.count=0;
    this.favStatus=false;
    this.favstatus1=true;
    this.likeclassname="glyphicon glyphicon-heart-empty"
  }

  ngOnInit(): void {
  }
likecount()
{
  this.count++;
}
likedicrease()
{
  this.count--;
}
favChange()
{
  this.favStatus=!this.favStatus;
}
favChange1()
{
this.favstatus1=!this.favstatus1;
if(this.favstatus1)
{
  this.likeclassname="glyphicon glyphicon-heart";
}
else
{
  this.likeclassname="glyphicon glyphicon-heart-empty"
}
}
}
