import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Menu } from '../menu';

@Injectable({
  providedIn: 'root'
})
export class MenuserviceService {
  private baseUrl = 'http://localhost:8080/api/cartitems';

  constructor(private http: HttpClient) { }

  // addMenu() method is used to add the dish from particualr restaurent to Cart

  addMenu(menu: any): Observable<any> {
    localStorage.setItem('count', JSON.stringify(menu));
    localStorage.setItem('price', JSON.stringify(menu));

    return this.http.post(this.baseUrl, menu);
  }

  // getItems() is used to see what are the items present in our Cart

  getItems(): Observable<Menu[]> {
    return this.http.get<Menu[]>(`${this.baseUrl}`);
  }

  // deleteItems() method is used to remove a particular dish from Cart using dishid

  deleteItems(dishid: number): Observable<any> {
    console.log("deleting" + dishid)
    return this.http.delete(`${this.baseUrl}/${dishid}`)
  }
}
