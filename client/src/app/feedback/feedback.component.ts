import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { element } from 'protractor';
import { FeedbackService } from './../feedback.service';

declare const jQuery: {
    confirm: Function
};

@Component({
  selector: 'feedback',
  templateUrl: './feedback.component.html',
  styleUrls: ['./feedback.component.css']
})
export class FeedbackComponent implements OnInit 
{

 //Photographer names and ratings
  photographer_list: any[];
  rating: Number[] = [0,1,2,3,4,5];

 //Feedback Form Related Variables 
  cust_id:Number=0;
  cust_name:String='';
  p_id:Number=0;
  p_name:String='';
  ratings:Number=0;
  feedback:String='';

 // Select Component Enable Variables
  photo_selected:Boolean = false;
  rating_selected:Boolean = false;
  
  constructor(private router: Router, private feedService: FeedbackService) 
  {  
    this.photographer_list = JSON.parse(localStorage.getItem('Photographers'));
  }
  ngOnInit() {
  }

  //Book Slot
 submitMyForm(form) 
  { 
    let contact= form.value;
    this.cust_id = parseInt(localStorage.getItem('user_id'));
    this.cust_name = localStorage.getItem('user_name');
    this.p_id = form.value.p_name.p_id;
    this.p_name = form.value.p_name.name;
    this.ratings = form.value.ratings;
    this.feedback = form.value.feedback;
    this.feedService
      .submitFeedback(this.cust_id, this.cust_name, this.p_id, this.p_name, this.ratings, this.feedback)
      .subscribe((response) => {
        const result = response.json();
        if (result.status == 'ok') {
          this.openAlert();
          // navigate to path: Home
          this.router.navigate(['home']); 
        } 
      });
 }
 
 //Alert Box
 openAlert()
   {
    jQuery.confirm({
     content: 'Feedback submitted successfully',
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

 //Cancel form filling
 onCancel()
  {
   this.router.navigate(['home']);
 }
 
 selPhoto()
  {
    this.photo_selected = true;
  }
 selRating()
 {
   this.rating_selected = true;
 }
}
