import { PhotographerService } from './../photographer.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { element } from 'protractor';

declare const jQuery: {
    confirm: Function
};

@Component({
  selector: 'app-photographerforgotemail',
  templateUrl: './photographerforgotemail.component.html',
  styleUrls: ['./photographerforgotemail.component.css']
})
export class PhotographerforgotemailComponent implements OnInit {

  email:String = '';

  constructor(private photoService: PhotographerService, 
    private router: Router) { }

  //Send Mail for password update
  submitMyyForm(form) 
  {
    this.email = form.value.email;
    localStorage.setItem('photographerEmail', this.email.toString());
     var msg = 'http://localhost:4200/updatepswd_photographer';
      this.photoService.sendQMail(this.email, msg)
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
