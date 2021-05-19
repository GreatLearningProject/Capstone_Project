import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Menu } from '../menu';
import { HotelserviceService } from '../service/hotelservice.service';
import { MenuserviceService } from '../service/menuservice.service';

@Component({
  selector: 'app-sarvanabhavan',
  templateUrl: './sarvanabhavan.component.html',
  styleUrls: ['./sarvanabhavan.component.css']
})
export class SarvanabhavanComponent implements OnInit {
  hotel: string = 'SarvanaBhavan';
  items: Observable<Menu[]> | undefined;
  dishid!: number;


  clicked: boolean = true;

  constructor(private hotelservice: HotelserviceService, private router: Router, private menuService: MenuserviceService) { }

  ngOnInit(): void {
    this.hotelName();
  }

  // In this getData() We are getting the items present in a particular Hotel from database by HotelName

  hotelName() {
    this.items = this.hotelservice.getHotelByName(this.hotel);

  }

   // In this OnAddCart() if a Add Cart Button is Clicked it is going to add to our Cart


  OnAddCart(menu: Menu) {
    this.dishid = menu.dishid;
    this.menuService.addMenu(menu).subscribe(
      
      data => {
        console.log(data);
      },

      error => console.log(error))
  }

  
  // This isAdded() is used to disable the Add to Cart button if the particular dish is already present in the Cart

  isAdded(menu: Menu) {
    return menu.dishid === this.dishid;
  }

}
