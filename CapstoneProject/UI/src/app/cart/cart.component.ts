import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Menu } from '../menu';
import { MenuserviceService } from '../service/menuservice.service';
import { RegistrationService } from '../service/registration.service';
import { UserService } from '../service/user.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  price: number = 0;
  menu: Menu[] = [];
  dishes!: Menu[];
  qty: number = 0;
  subtotal: number = 0;
  subtotal1: number = 0;
  count: number = 0;
  quantity!: number;
  total_price1!: number;
  qty1: number = 0;
  qty2!: any;
  key!: number;


  constructor
    (private menuService: MenuserviceService, public login: RegistrationService, public service: UserService) { }

  ngOnInit(): void {
    this.getData();
  }

  // getData() method is used to get the Items present in the Cart

  getData() {

    this.menuService.getItems().subscribe((item) => {
      this.dishes = item;
      for (let item of this.dishes) {
        this.subtotal = item.quantity * item.dishcost;
        this.price = this.price + this.subtotal;
        this.count = this.dishes.length;
        
        console.log(this.count);
        localStorage.setItem('count1', JSON.stringify(this.dishes.length));

      }
    });

    this.qty1 = JSON.parse(localStorage.getItem('count') || '{}');
    this.qty2 = JSON.parse(localStorage.getItem('sum') || '{}');

  }

  // add() method is used to increment the quantity of the item 

  add(item: any) {
    if (item.quantity != 20) {
      item.quantity += 1;
      this.subtotal1 = 1 * item.dishcost;
      this.price = this.price + this.subtotal1;

      this.key = this.price;
      console.log(this.price);

      console.log(this.key)
      localStorage.setItem('price1', JSON.stringify(this.key));

      this.qty += 1;
      if (item.quantity === 0) {
        this.qty = 0;
      }

      else {
        console.log(this.qty)
      }

    }
  }

  // remove() method is used to decrement the quantity of the product

  remove(item: any) {
    if (item.quantity != 1) {
      item.quantity -= 1;
      this.subtotal1 = 1 * item.dishcost;
      this.price = this.price - this.subtotal1;
      console.log(this.price)
      this.qty -= 1;

    }
  }

  // deleteDish() is used to delete a particular dish using dishid

  deleteDish(dishid: number) {
    this.menuService.deleteItems(dishid).subscribe(

      (data) => {
        this.getData();

      },

      error => {
        console.log("exception occured");

      }
    )

  }


}
