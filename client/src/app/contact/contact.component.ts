import { Component, OnInit } from '@angular/core';
import { QueryService } from '../query.service';
import { Router } from '@angular/router';
import { element } from 'protractor';

declare const jQuery:{
    confirm: Function
};

@Component({
  selector: 'contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {
  name: String = '';
  email: String = '';
  
  constructor(
    private queryService: QueryService,
    private router: Router
  ) { }

  ngOnInit() {
  }

  // Post Query data to QueryService
  submitMyForm(form) 
  {     
    let contact= form.value;
    this.name = contact.name;
    this.email = contact.email;
    this.queryService
      .createQuery(contact)
      .subscribe((response) => {
        const result = response.json();
        if (result.status == 'ok') {
          this.openAlert();
          //Send Email to User
          var msg = 'Dear '+ this.name +' We have Received Your Query, We will answer you shortly. Have a Good Day!!';
          this.queryService.sendQMail(this.email, msg)
          .subscribe((response)=>{
            const resul = response.json();
          });
          this.onClear();
        } 
      });
  }

  openAlert()
  {
    jQuery.confirm({
     content: 'Query submitted successfully',
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
  onClear() 
  {
   var data = document.getElementsByTagName('input');
   var data2 = document.getElementsByTagName('textarea');
   for(var i=0; i<data.length; i++)
   data[i].value='';
   for(var i=0; i<data2.length; i++)
   data2[i].value='';
  }
}
