import { Component, OnInit } from '@angular/core';
import { CustomerService } from '../customer.service';
import { Router } from '@angular/router';
import { element } from 'protractor';

declare const jQuery: {
    confirm: Function
};

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit 
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
  name: String = '';
  email: String = '';
  mobile: String;
  password: String = '';
  confirm_password: String = '';
  houseno: String = '';
  locality: String = '';
  city: String = '';
  state: String;
  country: String;
  pincode: String;

  errText:String = '';
  selected:Boolean = false;
  selected1:Boolean = false;

  constructor(private customerService: CustomerService,
  private router: Router) { }

  //Register values via CustomerService
  submitMyForm(form) 
  { 
    this.errText = '';
    let contact= form.value;
    this.name = contact.name;
    this.email = contact.email;
    this.password = contact.password;
    this.confirm_password = contact.confirm_password;
    if(this.password === this.confirm_password)
    {
      this.customerService
      .registerUser(contact)
      .subscribe((response) => {
        const result = response.json();
        if (result.status == 'ok') 
          {
            this.openAlert('Registered Successfully!!!');
            var msg = 'Dear '+ this.name +' You have Registered Successfully. Have a Good Day!!';
            this.customerService.sendQMail(this.email, msg)
            .subscribe((response)=>{
            const resul = response.json();
            });

            // navigate to path: login
            this.router.navigate(['login']);
        }
        else 
        {
          this.openAlert('Try Again!!!');
          var data = document.getElementsByTagName('input');
          for(var i=0; i<data.length; i++)
          {
            data[i].value = null;
          }
        }
      });
    }
    else
      {
      this.errText = "Password Mismatch";
      }
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

  // Cancel Registration
  onCancel() 
  {
    this.router.navigate(['home']);
  }

  select()
  {
    this.selected = true;
  }
  select1()
  {
    this.selected1 = true;
  }
  ngOnInit() {
  }
}