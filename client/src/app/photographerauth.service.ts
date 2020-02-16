import { Injectable } from '@angular/core';
import { Router, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';

@Injectable()
export class PhotographerauthService {

  constructor(private router: Router) { }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
        console.log("canActivate called");
        // if (sessionStorage.getItem('login_status') == undefined) {
        if (sessionStorage.getItem('photographer_login_status') == undefined) {
            // user is not logged in
            this.router.navigate(['photographer_login']);
            return false;
        }
        // user is logged in
        return true;
    }
}
