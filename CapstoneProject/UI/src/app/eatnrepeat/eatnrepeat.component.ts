import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Menu } from '../menu';
import { HotelserviceService } from '../service/hotelservice.service';
import { MenuserviceService } from '../service/menuservice.service';

@Component({
  selector: 'app-eatnrepeat',
  templateUrl: './eatnrepeat.component.html',
  styleUrls: ['./eatnrepeat.component.css']
})

export class EatnrepeatComponent implements OnInit {
  hotel: string = 'EatNRepeat';
  items: Observable<Menu[]> | undefined;
  dishid!: number;
  clicked: boolean = true;

  constructor(private hotelservice: HotelserviceService, private router: Router, private menuService: MenuserviceService) { }

  ngOnInit(): void {
    this.getData();
  }

  // In this getData() We are getting the items present in a particular Hotel from database by HotelName

  getData() {
    this.items = this.hotelservice.getHotelByName(this.hotel);
  }

  
  // In this OnAddCart() if a Add Cart Button is Clicked it is going to add to our Cart

  OnAddCart(menu: Menu) {
    this.dishid = menu.dishid;

    this.menuService.addMenu(menu).subscribe(
      (data) => {
        console.log(data);
        let count: string = localStorage.getItem('count') || '';
        let total_price1 = localStorage.getItem('total_price1') || '';

        if (count === undefined) {
          localStorage.setItem('count', '0');
          localStorage.setItem('total_price1', '0');
        }

        else {
          let count1: number = parseInt(count) + 1;
          localStorage.setItem('count', JSON.stringify(count1));
          let c1: number = parseInt(total_price1)
          localStorage.setItem('total_price1', JSON.stringify(c1));
        }

      },

      error => 
      console.log(error));
  }

  // This isAdded() is used to disable the Add to Cart button if the particular dish is already present in the Cart

  isAdded(menu: Menu) {
    return menu.dishid === this.dishid;
  }
}
