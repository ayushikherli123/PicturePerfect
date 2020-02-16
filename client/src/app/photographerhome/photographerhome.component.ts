import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-photographerhome',
  templateUrl: './photographerhome.component.html',
  styleUrls: ['./photographerhome.component.css']
})
export class PhotographerhomeComponent implements OnInit {
  
  name:String = sessionStorage.getItem('p_name');
  constructor(private router: Router) { }

  ngOnInit() {
  }

  logout() {
    sessionStorage.removeItem('photographer_login_status');
    this.router.navigate(['photographer_login']);
  }
}
