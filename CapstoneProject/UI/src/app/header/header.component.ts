import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Menu } from '../menu';
import { MenuserviceService } from '../service/menuservice.service';
import { RegistrationService } from '../service/registration.service';
import { UserService } from '../service/user.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  total: number = 0;
  price: number = 0;
  dishid!: number;
  quantity1: number = 0;
  dishes!: Observable<Menu[]>;
  quantity2: number = 0;
  qty2!: any;
  qty1: any;
  email1!: string | null;

  constructor(private menuService: MenuserviceService, public login: RegistrationService, public service: UserService) { }

  //Here I am using getData() to get this data from Database which is connected to backend

  ngOnInit(): void {
    console.log(this.qty1)
    this.qty1 = JSON.parse(localStorage.getItem('count1') || '{}');
    console.log(this.qty2);
    this.qty2 = JSON.parse(localStorage.getItem('price1') || '{}');
    this.email1 = localStorage.getItem('email');
    console.log(this.email1)
    this.getData();
  }


  // here i am getting the items from the menu service

  getData() {
    this.dishes = this.menuService.getItems();
  }
}
