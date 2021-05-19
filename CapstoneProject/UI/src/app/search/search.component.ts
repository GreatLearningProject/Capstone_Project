import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Menu } from '../menu';
import { HotelserviceService } from '../service/hotelservice.service';
import { MenuserviceService } from '../service/menuservice.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  menu: Menu[] = [];
  dishname: string = '';
  items: Observable<Menu[]> | undefined;
  dishid!: number;
  constructor(private _service: HotelserviceService, private _router: Router, private menuService: MenuserviceService) { }

  ngOnInit(): void {
  }

  submitted = false;

  // onClick() method is used to get all the details of the particular dish by its name

  onClick() {
    this.menu = [];
    this._service.getDishByName(this.dishname).subscribe(
      data => {

        this.menu = data;
        this.submitted = true;
      },
      error => {
        console.log("exception occured");
      }
    )
  }

  //onAddCart is used to the particualr dish we want to Add to Cart through Searching

  OnAddCart(menu1: Menu) {
    this.dishid = menu1.dishid;
    this.menuService.addMenu(menu1).subscribe(
      data => {
        console.log(data);
      },
      error => console.log(error))
  }
  
  isAdded(menu1: Menu) {
    return menu1.dishid === this.dishid;
  }
}


