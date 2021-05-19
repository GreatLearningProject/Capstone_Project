import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { UserService } from '../service/user.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(private service: UserService, private router: Router) {
  }

  // canActivate() method is used to see whether the customer is loggedIn or loggedOut

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    console.log('can activate');
    if (this.service.isLoggedIn()) {
      return true;
    }

    this.router.navigate(['/login'])
    return false;

  }
}
