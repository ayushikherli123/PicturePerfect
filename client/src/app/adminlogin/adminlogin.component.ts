import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { element } from 'protractor';
import { CustomerService } from '../customer.service';

declare const jQuery: {
    confirm: Function
};

@Component({
  selector: 'app-adminlogin',
  templateUrl: './adminlogin.component.html',
  styleUrls: ['./adminlogin.component.css']
})
export class AdminloginComponent implements OnInit 
{ 
  email:String = '';
  password:String = '';

  constructor(private customerService: CustomerService,
  private router: Router) { }
  
  ngOnInit() {
  }

  //Admin Login
  submitMyyForm(form) 
  {
    let contact = form.value;
    this.email = contact.email;
    this.password = contact.password;
    if(this.email=='ceopicturep@gmail.com' && this.password=='pictureperfect')
    {
      sessionStorage.setItem('adminlogin_status', 'yes');
      this.router.navigate(['adminhome']);
    }
    else
    {
      this.openAlert('Invalid user name or password');
    }
  }

  //Forgot Password
  forgotPasswordAdmin()
  {
         this.openAlert('We have sent your Password, Kindly check mail');
         var  email = 'ceopicturep@gmail.com';
         var password = 'pictureperfect';
         var msg = 'Hi Admin, Your Password is : ' + password;
         this.customerService.sendQMail(email, msg)
         .subscribe((response)=>{
         const resul = response.json();
         this.router.navigate(['admin']); 
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

  // Login Cancel
  onCancel() 
  {
    this.router.navigate(['home']);
  }
}
