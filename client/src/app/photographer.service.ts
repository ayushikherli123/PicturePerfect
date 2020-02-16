import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions } from '@angular/http';

@Injectable()
export class PhotographerService 
{
  url = 'http://localhost:3000/photographer';
  url2 = 'http://localhost:3000/photographer_register';
  url3 = 'http://localhost:3000/sendemail';
  url4 = 'http://localhost:3000/photographer_login';
  url5 = 'http://localhost:3000/photographerpasswordupdate';
  url6 = 'http://localhost:3000/photographerprofile';
  url7 = 'http://localhost:3000/photographerprofileupdate';

  constructor(private http: Http) { }

  // Register new user
  registerPhotographer(contact) 
  {
    let contactStr = JSON.stringify(contact);  
    const header = new Headers({ 'Content-Type': 'application/json' });
    const requestOptions = new RequestOptions({ headers: header });
    return this.http.post(this.url2, contactStr, requestOptions);
  }

  // Update Photographer profile
  updateProfile(email:String, mobile: String, address: String, city: String, state: String, country: String, pincode: String, experience:Number) 
  {
    const p_id = sessionStorage.getItem('p_id');
    const body = {
      p_id: p_id,
      email: email,
      mobile: mobile,
      address: address,
      city: city,
      state: state,
      country: country,
      pincode: pincode,
      experience: experience
    };

    const headers = new Headers({ 'Content-Type': 'application/json' });
    const requestOptions = new RequestOptions({headers: headers});
    return this.http.put(this.url7, body, requestOptions);
  }
      
  // Login user
  login(contact) 
  {
    let contactStr = JSON.stringify(contact);
    const headers = new Headers({ 'Content-Type': 'application/json' });
    const requestOptions = new RequestOptions({headers: headers});
    return this.http.post(this.url4, contactStr, requestOptions);
  }

  // Get Photographers details
  getPhotographers()
  {
    return this.http.get(this.url);
  }

  // get Photographer Profile
  getPhotographerDetail() 
  {
      const p_id = sessionStorage.getItem('p_id');
      return this.http.get(this.url6 + '/' + p_id);
  }

  //Get Photographers details By City
  getPhotographersByCity(city:String) 
  {
      return this.http.get(this.url + '/' + city);
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

        return this.http.post(this.url3, body, requestOptions);
    }
}
