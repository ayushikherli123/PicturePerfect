import { Component, OnInit } from '@angular/core';
import { BookingService } from '../booking.service';
declare const jQuery: {
    confirm: Function
};

@Component({
  selector: 'app-user-bookings',
  templateUrl: './user-bookings.component.html',
  styleUrls: ['./user-bookings.component.css']
})
export class UserBookingsComponent implements OnInit
{
  name:String = localStorage.getItem('user_name');
  // Get Booking details for respective user
  bookings = null;
  Result = null;
  constructor(private bookService: BookingService) {
    bookService
    .getBookings()
    .subscribe((response) => {
        this.bookings = response.json();
   });
  }

  OnCancel(book_id:Number, cust_emailid:String)
  {
     jQuery.confirm({
     title: 'Confirmation?',
     content: 'Are you sure You want to cancel booking?',
      type: 'green',
      theme: 'supervan',
      buttons: {   
          yes: {
              text: "Yes",
              btnClass: 'btn-primary',
              keys: ['enter'],
              action: () =>
              {
                this.cancel(book_id, cust_emailid);
              } 
           },
          no:{
            text: "No",
            btnClass: 'btn-primary',
              keys: ['enter'],
              action: () =>
              {}
          } 
      }
    });
  }

  cancel(book_id:Number, cust_emailid:String)
  {
    this.bookService.doCancel(book_id)
    .subscribe((response) => {
      this.Result = response.json();
      if(this.Result.result=='Cancelled')
         {
           var name = localStorage.getItem('user_name');
           var msg = 'Dear '+ name +' Your Booking has been Cancelled Successfully.';
           this.bookService.sendQMail(cust_emailid, msg)
              .subscribe((response)=>{
              const resul = response.json();
            });  
           this.openAlert('Your Booking Cancelled Successfully');
         }
    });
  }

  // Alert Open
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
