import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CustomerService } from './../customer.service';

declare const jQuery: {
    confirm: Function
};

@Component({
  selector: 'app-updateprofile',
  templateUrl: './updateprofile.component.html',
  styleUrls: ['./updateprofile.component.css']
})
export class UpdateprofileComponent implements OnInit 
{
  // List of States 
  states: string[] = [
    'NCR','Andaman/Nicobar','Islands','Andhra Pradesh',
    'Arunachal Pradesh','Assam','Bihar','Chandigarh',
    'Chhattisgarh','Dadra/Nagar Haveli','Daman/Diu','Goa',
    'Gujarat','Haryana','Himachal Pradesh','Jammu/Kashmir','Jharkhand',
    'Karnataka','Kerala','Lakshadweep','Madhya Pradesh','Maharashtra',
    'Manipur','Meghalaya','Mizoram','Nagaland','Orissa','Pondicherry',
    'Punjab','Rajasthan','Sikkim','Tamil Nadu','Tripura','Uttaranchal',
    'Uttar Pradesh','West Bengal'
  ]

  countries: string[] = ['India']
  // Form Input Variables
  email: String = '';
  mobile: String = '';
  houseno: String = '';
  locality: String = '';
  city: String = '';
  state: String;
  country: String;
  pincode: String = '';

  selected:Boolean = false;
  selected1:Boolean = false;
 // Get profile details for respective user
  profile = null;
  constructor(private customerService: CustomerService, private router: Router) 
    {
      customerService
      .getCustomerDetail()
      .subscribe((response) => {
          this.profile = response.json();
      });
   }

   //Update values via CustomerService
  submitMyForm(form) 
  { 
    let contact= form.value;
    this.email = contact.email;
    this.mobile = contact.mobile;
    this.houseno = contact.houseno;
    this.locality = contact.locality;
    this.city = contact.city;
    this.state = contact.state;
    this.country = contact.country;
    this.pincode = contact.pincode;
    
    this.customerService
      .updateProfile(this.email, this.mobile, this.houseno, this.locality, this.city, this.state, this.country, this.pincode)
      .subscribe((response) => {
        const result = response.json();
        if(result != null)
        {
          this.openAlert('Profile Updated Successfully');
          this.router.navigate(['profile']);
        }
      });
  }
  
  // Cancel Registration
  onCancel() 
  {
    this.router.navigate(['profile']);
  }

  select()
  {
    this.selected = true;
  }
  select1()
  {
    this.selected1 = true;
  }

  //Alert
  openAlert(msg:String)
  {
    jQuery.confirm({
     content: msg,
     type: 'green',
     theme: 'Modern',
     buttons: {   
         ok: {
             text: "ok",
             btnClass: 'btn-primary',
             keys: ['enter'],
             action: function(){
               console.log('');
             }
          }
     }
   });
  }
  
  ngOnInit() {
  }

}
