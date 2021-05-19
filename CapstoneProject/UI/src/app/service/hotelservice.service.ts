import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HotelserviceService {
  private baseUrl = 'http://localhost:8080/api/menu';

  constructor(private http: HttpClient) { }

  // getHotelByName() method is used to get all dishes present in a particular hotel by the hotelname
  getHotelByName(hotel: string): Observable<any> {
    return this.http.get(`${this.baseUrl}/hotel/${hotel}`);
  }

  // getDishByName() method is used to search the particular dish by dishname

  getDishByName(dishname: string): Observable<any> {
    return this.http.get(`${this.baseUrl}/dishname/${dishname}`);

  }
}

