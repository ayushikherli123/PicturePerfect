import { Component } from '@angular/core';
import { ThemeService } from './theme.service';
import { PhotographerService } from './photographer.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent 
{
  title = 'app';
  //Booking Form Related Variables 
  themes = null;
  photographers = null;

  constructor(private thmSer: ThemeService,
              private phtoService: PhotographerService) 
   {
       //Get Themes Data
       this.themes = JSON.parse(localStorage.getItem('Themes'));
       if (this.themes == null)
       {
           thmSer.getThemes()
           .subscribe((response) => {
           this.themes = response.json();
           localStorage.setItem('Themes', JSON.stringify(this.themes));
         });
       }
       //Get Photographer Data
       this.photographers = JSON.parse(localStorage.getItem('Photographers'));
       if (this.photographers == null)
       {
           phtoService.getPhotographers()
           .subscribe((response) => {
           this.photographers = response.json();
           localStorage.setItem('Photographers', JSON.stringify(this.photographers));
         });
       }
   }

  // To Open Menu Navigation
  openNav() {
    document.getElementById("mySidenav").style.width = "250px";
    document.getElementById("menubtn").style.display = "none";
  }

  // To Close Menu Navigation
  closeNav() {
    document.getElementById("mySidenav").style.width = "0";
    document.getElementById("menubtn").style.display = "block";
  }
  //User Login Status Check
  isUserLoggedIn() {
    return localStorage.getItem('login_status') != undefined;
  }

  isUserNotLoggedIn() {
    return localStorage.getItem('login_status') == undefined;
  }

  logout() {
    localStorage.removeItem('login_status');
  }

  //Admin Login Status Check
  isAdminNotLoggedIn() {
    return sessionStorage.getItem('adminlogin_status') == undefined;
  }

  //Photographer Login Status Check
  isPhotographerNotLoggedIn() {
    return sessionStorage.getItem('photographer_login_status') == undefined;
  }
}
