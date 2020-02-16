import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { element } from 'protractor';
import { BookingService } from '../booking.service';

declare const jQuery: {
    confirm: Function
};

@Component({
  selector: 'booking',
  templateUrl: './booking.component.html',
  styleUrls: ['./booking.component.css']
})
export class BookingComponent implements OnInit {
  // List of States & Country 
  states: string[] = [
    'NCR','Andaman/Nicobar','Islands','Andhra Pradesh',
    'Arunachal Pradesh','Assam','Bihar','Chandigarh',
    'Chhattisgarh','Dadra/Nagar Haveli','Daman/Diu','Goa',
    'Gujarat','Haryana','Himachal Pradesh','Jammu/Kashmir','Jharkhand',
    'Karnataka','Kerala','Lakshadweep','Madhya Pradesh','Maharashtra',
    'Manipur','Meghalaya','Mizoram','Nagaland','Orissa','Pondicherry',
    'Punjab','Rajasthan','Sikkim','Tamil Nadu','Tripura','Uttaranchal',
    'Uttar Pradesh','West Bengal'
  ];
  countries: string[] = ['India'];

  //Date Binding Variables
  today:Date = new Date();
  now:String='';
  nowDD:String='';
  nowMM:String='';

 // Select Component Enable Variables
  state_selected:Boolean = false;
  country_selected:Boolean = false;
  theme_selected:Boolean = false;
  photo_selected:Boolean = false;

 //Booking Form Related Variables 
  themes = null;
  photographers = null;
  
  cust_id:Number=0;
  cust_name:String='';
  cust_emailid:String='';
  cust_contact:String='';
  cust_address:String='';
  city:String='';
  state:String='';
  country:String='';
  pincode:String='';
  booking_date:String='';
  theme:String='';
  service_amount:Number=0;
  p_id:Number=0;
  p_name:String='';
  status:String='Booked';

 constructor( private bookService: BookingService,
              private router: Router ) 
   {
        //Date Binding Code
          var dd =  this.today.getDate();
          var mm = this.today.getMonth()+1;
          var yy = String(this.today.getFullYear());
          
          dd<10 ? (this.nowDD = '0'+dd) : (this.nowDD = String(dd));
          mm<10 ? (this.nowMM = '0'+mm) : (this.nowMM = String(mm));
          this.now = yy+'-'+this.nowMM+'-'+this.nowDD;

        //Get Themes Data
          this.themes = JSON.parse(localStorage.getItem('Themes'));

        //Get Photographer Data
        this.photographers = JSON.parse(localStorage.getItem('Photographers'));
  }
      
 ngOnInit() {
  }

 //Book Slot
 submitMyForm(form) 
  { 
    let contact= form.value;
    this.p_id = form.value.p_name.p_id;
    this.booking_date = form.value.booking_date;
    this.bookService.getAvailability(this.p_id, this.booking_date, this.status)
    .subscribe((response) => {
      const Result = response.json();
      if (Result.result == 'available')
      {
        this.cust_id = parseInt(localStorage.getItem('user_id'));
        this.cust_name = form.value.cust_name;
        this.cust_emailid = form.value.cust_emailid;
        this.cust_contact = form.value.cust_contact;
        this.cust_address = form.value.cust_address;
        this.city = form.value.city;
        this.state = form.value.state;
        this.country = form.value.country;
        this.pincode = form.value.pincode;
        this.theme = form.value.theme.theme_name;
        this.service_amount = form.value.theme.price;
        this.p_name = form.value.p_name.name;

        this.bookService.bookSlot(this.cust_id, this.cust_name, this.cust_emailid, this.cust_contact,
                                  this.cust_address, this.city, this.state, this.country, this.pincode, this.booking_date, 
                                  this.theme, this.service_amount, this.p_id, this.p_name)
        .subscribe((response) => {
          const result = response.json();
          if (result.status == 'ok') 
          {
              this.openAlert('Booking successfully :)');
              var billData = {
                  cust_name : this.cust_name,
                  cust_contact: this.cust_contact,
                  booking_date: this.booking_date,
                  theme: this.theme,
                  billAmount: this.service_amount,
                  p_name: this.p_name,
                  p_email: form.value.p_name.email,
                  p_mob: form.value.p_name.mobile
              };
              sessionStorage.setItem('billData', JSON.stringify(billData));
              var msg = 'Dear '+ this.cust_name +
              ' You have Booked Successfully. Your Booking Details are : 1. Booking Date => '+this.booking_date+
               ' 2. Theme => '+this.theme+' 3. Bill Amount => '+this.service_amount +
                ' 4. Photographer Name => '+this.p_name + ' 5. Photographer Mobile => '+
                 form.value.p_name.mobile + ' 6. Photographer Email => '+form.value.p_name.email+'. Have a Good Day!!! :)';

              this.bookService.sendQMail(this.cust_emailid, msg)
              .subscribe((response)=>{
              const resul = response.json();
            }); 

            // navigate to path: Bill
            this.router.navigate(['bill']); 
          } 
          else 
          {
             this.openAlert('Try Again After Some Time');
             this.onClear();
          }
      });
      }
      else
      {
          this.openAlert('Dates for this Photographer are Booked, Please Select another date !! :(');
      }
    });
 }
 
 //Clear Form Data
 onClear()
  {
   var data = document.getElementsByTagName('input');
   var data1 = document.getElementsByTagName('select');
   var data2 = document.getElementsByTagName('textarea');
   for(var i=0; i<data.length; i++)
   data[i].value='';
   for(var i=0; i<data1.length; i++)
   data1[i].value='';
   for(var i=0; i<data2.length; i++)
   data2[i].value='';
 }

 //Cancel form filling
 onCancel()
  {
   this.router.navigate(['home']);
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

  // Select Component Enable Functions
  selState()
  {
    this.state_selected = true;
  }

  selCountry()
  {
    this.country_selected = true;
  }

  selTheme()
  {
    this.theme_selected = true;
  }

  selPhoto()
  {
    this.photo_selected = true;
  }
}
