import { Injectable } from '@angular/core';
import { Router, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';

@Injectable()
export class AdminauthService {

  constructor(private router: Router) { }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
        console.log("canActivate called");
        // if (sessionStorage.getItem('login_status') == undefined) {
        if (sessionStorage.getItem('adminlogin_status') == undefined) {
            // admin is not logged in
            this.router.navigate(['admin']);
            return false;
        }
        // user is logged in
        return true;
    }
}
