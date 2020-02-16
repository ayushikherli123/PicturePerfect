import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions } from '@angular/http';

@Injectable()
export class BookingService 
{
  url = 'http://localhost:3000/book';
  url2 = 'http://localhost:3000/isavailable';
  url3 = 'http://localhost:3000/sendemail';
  url4 = 'http://localhost:3000/bookings';
  url5 = 'http://localhost:3000/bookingcancel';
  url6 = 'http://localhost:3000/photographerbookings';

  constructor(private http: Http) { }

  // Check Dates Availability for Photographer
  getAvailability(p_id: Number, booking_date:String, status:String) 
  {
        const body = {
        p_id: p_id,
        booking_date: booking_date,
        status: status
        };

        const headers = new Headers({ 'Content-Type': 'application/json' });
        const requestOptions = new RequestOptions({headers: headers});
        return this.http.post(this.url2, body, requestOptions);
 }

  // get Booking related to user
  getBookings() {
      const cust_id = localStorage.getItem('user_id');
      return this.http.get(this.url4 + '/' + cust_id);
 }

    // get Booking related to Photographer
  getPhotographerBookings() {
      const p_id = sessionStorage.getItem('p_id');
      return this.http.get(this.url6 + '/' + p_id);
 }

 // get All Bookings
  getAllBookings() {
      return this.http.get(this.url4);
 }

 //Cancel the booking
  doCancel(book_id:Number) {
    var book_id = book_id;
    const body = {
        status: 'Cancelled'
    };
    const headers = new Headers({ 'Content-Type': 'application/json' });
    const requestOptions = new RequestOptions({headers: headers});

    return this.http
            .put(this.url5 + '/' + book_id, body, requestOptions);
 }

 // Book Slot for Customer
 bookSlot(cust_id:Number, cust_name:String, cust_emailid:String, cust_contact:String, cust_address:String,
        city:String, state:String, country:String, pincode:String, booking_date:String, theme:String,
      service_amount:Number, p_id:Number, p_name:String ) 
  {
        const body = {
        cust_id: cust_id,
        cust_name: cust_name,
        cust_emailid: cust_emailid,
        cust_contact: cust_contact,
        cust_address: cust_address,
        city: city,
        state: state,
        country: country,
        pincode: pincode,
        booking_date: booking_date,
        theme: theme,
        service_amount: service_amount,
        p_id: p_id,
        p_name: p_name
        };

        const headers = new Headers({ 'Content-Type': 'application/json' });
        const requestOptions = new RequestOptions({headers: headers});
        return this.http.post(this.url, body, requestOptions);
 }

  // Calling send email post method of Server.js
  sendQMail(email:String, msg:String)
    {
        const body = {
            email: email,
            msg: msg
        };

        const header = new Headers({ 'Content-Type': 'application/json' });
        const requestOptions = new RequestOptions({ headers: header });

        return this.http.post(this.url3, body, requestOptions);
    }

}
