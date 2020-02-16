import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-registerhome',
  templateUrl: './registerhome.component.html',
  styleUrls: ['./registerhome.component.css']
})
export class RegisterhomeComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }
  userReg()
  {
    this.router.navigate(['register']);
  }
  photographerReg()
  {
    this.router.navigate(['photographer_register']);
  }
}
