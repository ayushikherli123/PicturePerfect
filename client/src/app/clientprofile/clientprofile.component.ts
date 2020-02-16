import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CustomerService } from './../customer.service';

@Component({
  selector: 'app-clientprofile',
  templateUrl: './clientprofile.component.html',
  styleUrls: ['./clientprofile.component.css']
})
export class ClientprofileComponent implements OnInit
{
  name:String = localStorage.getItem('user_name');
  // Get profile details for respective user
  profile = null;
  constructor(private customerService: CustomerService, private router: Router) {
    customerService
    .getCustomerDetail()
    .subscribe((response) => {
        this.profile = response.json();
   });
   }

   //Update Profile Route
   updateRoute()
   {
      this.router.navigate(['update_profile']);
   }
  ngOnInit() {
  }

}
