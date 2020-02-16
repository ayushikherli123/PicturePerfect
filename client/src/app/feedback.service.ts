import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions } from '@angular/http';

@Injectable()
export class FeedbackService 
{
  url = 'http://localhost:3000/feedback';
  url2 = 'http://localhost:3000/feedbacks';
  
  constructor(private http: Http) { }
  
  // get All Feedbacks
  getAllFeedbacks() {
      return this.http.get(this.url2);
 }

 // get Feedbacks By Photographer Id
  getAFeedbacksByPid(p_id:Number) {
      return this.http.get(this.url2 + '/' + p_id);
 }

  // Submit customer feedback
  submitFeedback(cust_id:Number, cust_name:String, p_id:Number, p_name:String, ratings:Number, feedback:String) 
  {
        const body = {
        cust_id: cust_id,
        cust_name: cust_name,
        p_id: p_id,
        p_name: p_name,
        ratings: ratings,
        feedback: feedback
        };

        const headers = new Headers({ 'Content-Type': 'application/json' });
        const requestOptions = new RequestOptions({headers: headers});
        return this.http.post(this.url, body, requestOptions);
 }
}
