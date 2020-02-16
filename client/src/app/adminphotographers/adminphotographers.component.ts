import { Component, OnInit } from '@angular/core';
import { PhotographerService } from './../photographer.service';

declare const jQuery: {
    confirm: Function
};

@Component({
  selector: 'app-adminphotographers',
  templateUrl: './adminphotographers.component.html',
  styleUrls: ['./adminphotographers.component.css']
})

export class AdminphotographersComponent implements OnInit {

  // Get Photographers details
  photographers: any[];
  photographersbycity = null;
  searched:Boolean = false;
  city:String='';

  constructor(private photographerService: PhotographerService) { 
        //Get Photographer Data
        this.photographers = JSON.parse(localStorage.getItem('Photographers'));
  }

  //Search Customer by city
  OnSearch()
  {
    this.searched = true;
    this.photographerService
    .getPhotographersByCity(this.city)
    .subscribe((response) => {
        this.photographersbycity = response.json();
        if(this.photographersbycity.length == 0)
          {
            this.openAlert('Data Not Found');
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

  ngOnInit() {
  }


}
