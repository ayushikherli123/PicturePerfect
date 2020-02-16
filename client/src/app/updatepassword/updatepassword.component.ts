import { Component, OnInit } from '@angular/core';
import { CustomerService } from '../customer.service';
import { Router } from '@angular/router';
import { element } from 'protractor';

declare const jQuery: {
    confirm: Function
};

@Component({
  selector: 'app-updatepassword',
  templateUrl: './updatepassword.component.html',
  styleUrls: ['./updatepassword.component.css']
})
export class UpdatepasswordComponent implements OnInit {
  
  // Form Input Variables
  password: String = '';
  confirm_password: String = '';
  email:String = '';
  errText:String = '';

  constructor(private customerService: CustomerService,
  private router: Router) { }

  //Update Password via CustomerService
  submitMyForm(form) 
  { 
    this.errText = '';
    this.email = localStorage.getItem('userEmail');
    this.password = form.value.password;
    this.confirm_password = form.value.confirm_password;
    if(this.password === this.confirm_password)
    {
      this.customerService
      .updatePassword(this.email, this.password, this.confirm_password)
      .subscribe((response) => {
        const Result = response.json();
        if (Result.affectedRows >= 1) 
        {
            this.openAlert('Password Updated Successfully');
            this.router.navigate(['login']);
        }
        else 
        {
          this.openAlert('Your Data Not Found, Kindly Register');
          this.router.navigate(['register']);
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

  ngOnInit() {
  }

}
