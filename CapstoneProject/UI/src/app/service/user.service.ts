import { stringify } from '@angular/compiler/src/util';
import { Injectable } from '@angular/core';
import { EmailValidator } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})

export class UserService {

  // This is used to check whether the person who is trying to login was valid or not

  loginUserFromRemote(email: string, password: string) {
    let email1 = localStorage.getItem('email');
    let password1 = localStorage.getItem('password');

    if (email === email1 && password === password1) {
      console.log('valid');
      return true;
    }

    else {
      console.log('invalid');
      return false;
    }
  }

  //  This isLoggedIn() is used to know whether the user is login or not
  isLoggedIn() {
    return !!localStorage.getItem('email');
  }

  logout() {
    console.log("logging out");
    localStorage.removeItem('email');
  }


}
