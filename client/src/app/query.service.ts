import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions } from '@angular/http';

@Injectable()
export class QueryService 
{
 url = 'http://localhost:3000/query';
 url1 = 'http://localhost:3000/userqueries';
 url2 = 'http://localhost:3000/sendemail'
  constructor(private http: Http) { }

  // Send user query
  createQuery(contact) 
      {
        let contactStr = JSON.stringify(contact);
        const header = new Headers({ 'Content-Type': 'application/json' });
        const requestOptions = new RequestOptions({ headers: header });
        return this.http.post(this.url, contactStr, requestOptions);
  }
  
  // get All User Queries
  getAllQueriess() {
      return this.http.get(this.url1);
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