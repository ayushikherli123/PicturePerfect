import { PhotographerService } from './../photographer.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { element } from 'protractor';

declare const jQuery: {
    confirm: Function
};

@Component({
  selector: 'app-photographerlogin',
  templateUrl: './photographerlogin.component.html',
  styleUrls: ['./photographerlogin.component.css']
})
export class PhotographerloginComponent implements OnInit 
{

  email:String = '';
  password:String = '';

  constructor(private photoService: PhotographerService,
  private router: Router) { }

  ngOnInit() {
  }

   //Photographer Login
  submitMyyForm(form) 
  {
    let contact = form.value;
    this.photoService
      .login(contact)
      .subscribe((response) => {
        const loginResult = response.json();
        if (loginResult.result == 'ok')
        {
          sessionStorage.setItem('photographer_login_status', 'yes');
          sessionStorage.setItem('p_id', loginResult.photographer.p_id);
          sessionStorage.setItem('p_name', loginResult.photographer.name)
          this.router.navigate(['phome']);
        }
        else
        {
          this.openAlert('Invalid user name or password');
        }
      });
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

  //Forgot Password
  forgotPassword()
  {
    this.router.navigate(['forgot_photographerEmail']); 
  }
  
  // Login Cancel
  onCancel() 
  {
    this.router.navigate(['home']);
  }
}
