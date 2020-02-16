import { PhotographerService } from './../photographer.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { element } from 'protractor';

declare const jQuery: {
    confirm: Function
};

@Component({
  selector: 'app-updatepswdphotographer',
  templateUrl: './updatepswdphotographer.component.html',
  styleUrls: ['./updatepswdphotographer.component.css']
})
export class UpdatepswdphotographerComponent implements OnInit {

  // Form Input Variables
  password: String = '';
  confirm_password: String = '';
  email:String = '';
  errText:String = '';

  constructor(private photoService: PhotographerService,
  private router: Router) { }

  //Update Password via CustomerService
  submitMyForm(form) 
  { 
    this.errText = '';
    this.email = localStorage.getItem('photographerEmail');
    this.password = form.value.password;
    this.confirm_password = form.value.confirm_password;
    if(this.password === this.confirm_password)
    {
      this.photoService
      .updatePassword(this.email, this.password, this.confirm_password)
      .subscribe((response) => {
        const Result = response.json();
        if (Result.affectedRows >= 1) 
        {
            this.openAlert('Password Updated Successfully');
            this.router.navigate(['photographer_login']);
        }
        else 
        {
          this.openAlert('Your Data Not Found, Kindly Register');
          this.router.navigate(['photographer_register']);
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
