import { Component, OnInit } from '@angular/core';
import { CustomerService } from '../customer.service';
import { Router } from '@angular/router';
import { element } from 'protractor';

declare const jQuery: {
    confirm: Function
};

@Component({
  selector: 'app-forgotemail',
  templateUrl: './forgotemail.component.html',
  styleUrls: ['./forgotemail.component.css']
})
export class ForgotemailComponent implements OnInit {

  email:String = '';
  
  constructor(private customerService: CustomerService, 
    private router: Router) { }

  //Send Mail for password update
  submitMyyForm(form) 
  {
    this.email = form.value.email;
    localStorage.setItem('userEmail', this.email.toString());
     var msg = 'http://localhost:4200/updatepswd';
      this.customerService.sendQMail(this.email, msg)
      .subscribe((response)=>{
      const resul = response.json();
    });
    this.openAlert('A link has been sent to you to reset your password, kindly hit the link to change your password.');
    this.router.navigate(['home']);
  }

  //Open Alert
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

  // Forget Password Cancel
  onCancel() 
  {
    this.router.navigate(['home']);
  }  

  ngOnInit() {
  }
}
