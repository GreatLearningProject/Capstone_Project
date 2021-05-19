import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { User } from '../user';

@Injectable({
  providedIn: 'root'
})
export class RegistrationService {
  email!: string | null;
  password!: string | null;

  constructor(private _http: HttpClient) { }


  // loginUserFromRemote() allows the valid user to login
  
  public loginUserFromRemote(user: User): Observable<any> {
    this.email = localStorage.getItem('email');
    this.password = localStorage.getItem('password');
    return this._http.post<any>("http://localhost:8080/login", user, { responseType: "text" as "json" });

  }

  // regiterUserFromRemote() is used to register the user and stores data in user database

  public registerUserFromRemote(user: User): Observable<any> {
    return this._http.post<any>("http://localhost:8080/registeruser", user);

  }

}

