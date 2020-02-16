import { Injectable } from '@angular/core';
import { Router, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';

@Injectable()
export class AuthService 
{

  constructor(private router: Router) { }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
        console.log("canActivate called");
        // if (sessionStorage.getItem('login_status') == undefined) {
        if (localStorage.getItem('login_status') == undefined) {
            // user is not logged in
            this.router.navigate(['login']);
            return false;
        }
        // user is logged in
        return true;
    }
}
