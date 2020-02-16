import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions } from '@angular/http';

@Injectable()
export class CustomerService 
{
    url = 'http://localhost:3000/register';
    url2 = 'http://localhost:3000/sendemail';
    url3 = 'http://localhost:3000/login';
    url4 = 'http://localhost:3000/customers';
    url5 = 'http://localhost:3000/passwordupdate';
    url6 = 'http://localhost:3000/profileupdate';
    url7 = 'http://localhost:3000/customerdata';

    constructor(private http: Http) 
    {
    }

    // Register new user
    registerUser(contact) 
      {
        let contactStr = JSON.stringify(contact);  
        const header = new Headers({ 'Content-Type': 'application/json' });
        const requestOptions = new RequestOptions({ headers: header });
        return this.http.post(this.url, contactStr, requestOptions);
    }

    // Update user profile
    updateProfile(email:String, mobile: String, houseno: String, locality: String, city: String, state: String, country: String, pincode: String) 
      {
        const cid = localStorage.getItem('user_id');
        const body = {
          cid: cid,
          email: email,
          mobile: mobile,
          houseno: houseno,
          locality: locality,
          city: city,
          state: state,
          country: country,
          pincode: pincode
        };

        const headers = new Headers({ 'Content-Type': 'application/json' });
        const requestOptions = new RequestOptions({headers: headers});
        return this.http.put(this.url6, body, requestOptions);
    }
      
    // Login user
    login(contact) 
      {
        let contactStr = JSON.stringify(contact);
        const headers = new Headers({ 'Content-Type': 'application/json' });
        const requestOptions = new RequestOptions({headers: headers});
        return this.http.post(this.url3, contactStr, requestOptions);
    }

    // Get All Customers Details
     getAllCustomers() {
      return this.http.get(this.url4);
    }

     // get User Details related to user
     getCustomerDetail() {
      const cid = localStorage.getItem('user_id');
      return this.http.get(this.url4 + '/' + cid);
    }

    //Get Customers By City
    getCustomersByCity(city:String) {
      return this.http.get(this.url7 + '/' + city);
    }

    // Update Password
    updatePassword(email:String, password:String, confirm_password:String ) 
      {
            const body = {
            email: email,
            password: password,
            confirm_password: confirm_password
            };

            const headers = new Headers({ 'Content-Type': 'application/json' });
            const requestOptions = new RequestOptions({headers: headers});
            return this.http.put(this.url5, body, requestOptions);
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

        return this.http.post(this.url2, body, requestOptions);
    }
}