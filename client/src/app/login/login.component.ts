import { Component, OnInit } from '@angular/core';
import { CustomerService } from '../customer.service';
import { Router } from '@angular/router';
import { element } from 'protractor';

declare const jQuery: {
    confirm: Function
};

@Component({
  selector: 'login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit 
{
  email:String = '';
  password:String = '';

  constructor(private customerService: CustomerService,
  private router: Router) { }

  ngOnInit() {
  }

  //User Login
  submitMyyForm(form) 
  {
    let contact = form.value;
    this.customerService
      .login(contact)
      .subscribe((response) => {
        const loginResult = response.json();
        if (loginResult.result == 'ok')
        {
          localStorage.setItem('login_status', 'yes');
          localStorage.setItem('user_id', loginResult.customer.cid);
          localStorage.setItem('user_name', loginResult.customer.name)

          this.router.navigate(['home']);
        }
        else
        {
          this.openAlert('Invalid user name or password');
        }
      });
  }

  //Forgot Password
  forgotPassword()
  {
    this.router.navigate(['forgotEmail']); 
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

  // Login Cancel
  onCancel() 
  {
    this.router.navigate(['home']);
  }
}
