import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms'
import { User } from '../user';
import { RegistrationService } from '../service/registration.service';
import { Route, Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  user = new User();
  msg = '';
  constructor(private _service: RegistrationService, private _router: Router) { }
  ngOnInit() {

  }

  // loginUser() method is used for Login form and it checks whether the user is valid or not then only it will be allowed to
  // place the order

  loginUser() {
    this._service.loginUserFromRemote(this.user).subscribe(
      data => {
        console.log("response received");
        localStorage.setItem('email', this.user.email);
        localStorage.setItem('password', this.user.password);
        this._router.navigate([''])
      },
      error => {
        console.log("exception occured");
        this.msg = "Bad Credentials, Please enter Valid Email id and Password"
      }

    )
  }

  // This is for user to navigate to Registration page
  gotoregistration() {
    this._router.navigate(['/registration'])
  }

}
