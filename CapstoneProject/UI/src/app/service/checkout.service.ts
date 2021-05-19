import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { Observable } from 'rxjs';
import { Address } from '../address';

@Injectable({
  providedIn: 'root'
})
export class CheckoutService {

  constructor(private _http: HttpClient) { }


  // This customerAddress() method will store all the Address details of customer to database
  
  public customerAddress(address: Address): Observable<any> {
    return this._http.post<any>("http://localhost:8080/address", address);

  }
}