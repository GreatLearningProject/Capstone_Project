import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../service/user.service';

@Component({
  selector: 'app-logout',
  templateUrl: './logout.component.html',
  styleUrls: ['./logout.component.css']
})
export class LogoutComponent implements OnInit {


  constructor(private service: UserService, private router: Router) { }

  // This method is used when user clicks on logout then in header login button will appear
  ngOnInit(): void {
    this.service.logout();
    this.router.navigate(['/login']);
  }

}
