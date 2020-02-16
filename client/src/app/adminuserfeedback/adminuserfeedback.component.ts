import { Component, OnInit } from '@angular/core';
import { FeedbackService } from './../feedback.service';

declare const jQuery: {
    confirm: Function
};
  
@Component({
  selector: 'app-adminuserfeedback',
  templateUrl: './adminuserfeedback.component.html',
  styleUrls: ['./adminuserfeedback.component.css']
})
export class AdminuserfeedbackComponent implements OnInit {

  // Get All Feedbacks
  feedbacks = null;
  feedbacksByPid = null;
  searched:Boolean = false;
  p_id:Number;

  constructor(private feedbackService: FeedbackService) {
    feedbackService
    .getAllFeedbacks()
    .subscribe((response) => {
        this.feedbacks = response.json();
   });
   }

  //Search Feedback by Photographer Id
  OnSearch()
  {
    if(this.p_id == undefined)
      this.searched = false;
    if(this.p_id != undefined)
    {
     this.searched = true;
        this.feedbackService
        .getAFeedbacksByPid(this.p_id)
        .subscribe((response) => {
            this.feedbacksByPid = response.json();
            if(this.feedbacksByPid.length == 0)
              {
                this.openAlert('Data Not Found');
              }
      });
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
