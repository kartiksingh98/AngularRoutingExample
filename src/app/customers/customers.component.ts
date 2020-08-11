import { Component, OnInit } from '@angular/core';
import { Customer } from '../customer/Customer';
import { CustomerService } from '../customer/customer.service';

@Component({
  selector: 'app-customers',
  templateUrl: './customers.component.html',
  styleUrls: ['./customers.component.css']
})
export class CustomersComponent implements OnInit {
customers:Customer[];
customer:Customer;
  constructor(private customerSer:CustomerService) 
  {
    this.customers=this.customerSer.getCustomers();
   }

  ngOnInit(): void {
  }
showOption(id)
{
  this.customer=this.customerSer.getCustomer(id);
}
}
