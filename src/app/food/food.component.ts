import { Component, OnInit } from '@angular/core';
import { food } from "./food";
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-food',
  templateUrl: './food.component.html',
  styleUrls: ['./food.component.css']
})
export class FoodComponent implements OnInit {
  food1:food;
  myform:FormGroup;
  showDetails:boolean;
    constructor() 
    {
  
      this.food1=new food();
      this.myform=new FormGroup({
        foodname:new FormControl(null, Validators.required), //this and go to line 29
        foodtype:new FormControl(null, Validators.required),
        foodlike:new FormControl(null, [Validators.required, Validators.min(1)]),
        foodhate:new FormControl(null, Validators.required)
      });
      this.showDetails=false;
      //this.food1=foodser.getfood();
    }

    public get foodname() //this and that written in formControlName in food.component.html should be same
    {
      return this.myform.get('foodname'); //this should be same
    }
   public get foodtype()
   {
     return this.myform.get('foodtype');
    }
  public get foodlike()
  {
    return this.myform.get('foodlike');
  }
  public get foodhate()
  {
    return this.myform.get('foodhate');
  }
  showfood()
  {
  console.log(this.myform);
  
  if(this.myform.valid)
  {
    this.showDetails=true;
    this.food1.name=this.foodname.value;
    this.food1.type=this.foodtype.value;
    this.food1.likeCount=this.foodlike.value;
    this.food1.hateCount=this.foodhate.value;
   
  }
  console.log(this.showDetails)
  }
    increaselike()
    {
      this.food1.likeCount++;
    }
    increasehate()
    {
      this.food1.hateCount++;
    }
    ngOnInit(): void {
    }
  
  }
