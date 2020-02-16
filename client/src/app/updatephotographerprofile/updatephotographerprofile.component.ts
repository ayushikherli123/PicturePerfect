import { PhotographerService } from './../photographer.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

declare const jQuery: {
    confirm: Function
};

@Component({
  selector: 'app-updatephotographerprofile',
  templateUrl: './updatephotographerprofile.component.html',
  styleUrls: ['./updatephotographerprofile.component.css']
})
export class UpdatephotographerprofileComponent implements OnInit 
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
  address: String = '';
  city: String = '';
  state: String;
  country: String;
  pincode: String = '';
  experience: Number;

  selected:Boolean = false;
  selected1:Boolean = false;

  // Get profile details for respective user
  profile = null;

  constructor(private photoService: PhotographerService, private router: Router) 
  {
      photoService
      .getPhotographerDetail()
      .subscribe((response) => {
          this.profile = response.json();
      });
  }

  //Update values via PhotographerService
  submitMyForm(form) 
  { 
    let contact= form.value;
    this.email = contact.email;
    this.mobile = contact.mobile;
    this.address = contact.address;
    this.city = contact.city;
    this.state = contact.state;
    this.country = contact.country;
    this.pincode = contact.pincode;
    this.experience = contact.experience;

    this.photoService
      .updateProfile(this.email, this.mobile, this.address, this.city, this.state, this.country, this.pincode, this.experience)
      .subscribe((response) => {
        const result = response.json();
        if(result != null)
        {
          this.openAlert('Profile Updated Successfully');
          this.router.navigate(['phome']);
        }
      });
  }
  
  // Cancel Registration
  onCancel() 
  {
    this.router.navigate(['photographer_profile']);
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
