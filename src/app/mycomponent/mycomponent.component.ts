import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-mycomponent',
  templateUrl: './mycomponent.component.html',
  styleUrls: ['./mycomponent.component.css']
})
export class MycomponentComponent implements OnInit {
  username:string;
  qty:number;

  constructor() { 
    this.username="Kartik";
    this.qty=0;
  }

  ngOnInit(): void {
  }
changeName()
{
  this.username="kaddi";
}

incrqty(ctrl)
{

  this.qty=ctrl;
}
}
