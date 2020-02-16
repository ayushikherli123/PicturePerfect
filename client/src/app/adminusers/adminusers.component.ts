import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CustomerService } from './../customer.service';

declare const jQuery: {
    confirm: Function
};

@Component({
  selector: 'app-adminusers',
  templateUrl: './adminusers.component.html',
  styleUrls: ['./adminusers.component.css']
})
export class AdminusersComponent implements OnInit {

  // Get All Customers details
  customers = null;
  customersbycity = null;
  searched:Boolean = false;
  city:String=null;
  
  constructor(private router: Router, private custService: CustomerService) { 
    custService
    .getAllCustomers()
    .subscribe((response) => {
        this.customers = response.json();
   });
  }

  //Search Customer by city
  OnSearch()
  {
    if(this.city!=null && this.city!='' && this.city!=undefined)
    {
      this.searched = true;
      this.custService
      .getCustomersByCity(this.city)
      .subscribe((response) => {
          this.customersbycity = response.json();
          if(this.customersbycity.length == 0)
          {
              this.openAlert('Data Not Found');
          }
      });
    }
    else
    {
      // this.openAlert('Please Enter City');
      window.location.reload();
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

  ngOnInit() {
  }
}
