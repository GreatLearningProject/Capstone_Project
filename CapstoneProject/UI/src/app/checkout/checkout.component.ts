import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Address } from '../address';
import { CheckoutService } from '../service/checkout.service';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css']
})
export class CheckoutComponent implements OnInit {

  address = new Address();
  msg = '';

  constructor(private checkoutservice: CheckoutService, private _router: Router) { }

  ngOnInit() {
  }

  //  This addressDetails is going to store all the address details of the Customer 
  //  from the customerform and store it in database using checkoutservice 

  addressDetails() {
    this.checkoutservice.customerAddress(this.address).subscribe(
      data => {
        console.log("response received");
        alert('Yahoooo!!! Your Order is placed successfully');
      },

      error => {
        console.log("exception occured");
      }

    )}
}