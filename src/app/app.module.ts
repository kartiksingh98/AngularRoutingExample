import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Component } from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {LoginComponent} from './login/login.component';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MycomponentComponent } from './mycomponent/mycomponent.component';
import {LikeComponent} from './like/like.component';
import { MovieComponent } from './movie/movie.component';
import { FlowersComponent } from './flowers/flowers.component';
import { MoviesComponent } from './movies/movies.component';
import { MovieService } from './movie/movie.service';
import { CartComponent } from './cart/cart.component';
import { FoodComponent } from './food/food.component';
import { CustomerComponent } from './customer/customer.component';
import { CustomersComponent } from './customers/customers.component';
import {CustomerService} from './customer/customer.service';
import {RouterModule, Routes} from '@angular/router';
import { EmployeeComponent } from './employee/employee.component';
import { SalaryComponent } from './salary/salary.component';
import {Like1Component} from './like1/like1.component'
import {TestComponent} from './test/test.component';
import {ShoppingComponent} from './shopping/shopping.component';
import {UpperCaseComponent} from './uppercase/uppercase.component';
import {AbuttonComponent} from './abutton/abutton.component'

var myRoutes:Routes=[
  {path: "customer", component:CustomerComponent},
  {path:"movie", component:MovieComponent},
  {path:"food", component:FoodComponent},
  {path:"like", component:LikeComponent},
  {path:"customer", component:CustomersComponent},
  {path: "", component:MoviesComponent},
  {path:"employee", component:EmployeeComponent, children:[
    {path:"salary", component:SalaryComponent},
    {path:"like1", component:Like1Component}
  ]},
  {path: '**', component:FlowersComponent} //routes when not used
]

@NgModule({
  declarations: 
  [
    AppComponent,
    MycomponentComponent,
    LikeComponent,
    MovieComponent,
    FlowersComponent,
    MoviesComponent,
    CartComponent,
    FoodComponent,
    CustomerComponent,
    CustomersComponent,
    LoginComponent,
    EmployeeComponent,
    SalaryComponent,
    TestComponent,
    ShoppingComponent,
    UpperCaseComponent,
    AbuttonComponent
  ],

  imports: 
  [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot(myRoutes)
  ],
  providers: [MovieService, CustomerService ],
  bootstrap: [AppComponent]
})
export class AppModule { }
