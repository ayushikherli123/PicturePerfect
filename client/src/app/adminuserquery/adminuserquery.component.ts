import { Component, OnInit } from '@angular/core';
import { QueryService } from './../query.service';

declare const jQuery: {
    confirm: Function
};

@Component({
  selector: 'app-adminuserquery',
  templateUrl: './adminuserquery.component.html',
  styleUrls: ['./adminuserquery.component.css']
})
export class AdminuserqueryComponent implements OnInit {

  // Get All Queries
  queries = null;
  message:String='';

  constructor(private queryService: QueryService) { 
    queryService
    .getAllQueriess()
    .subscribe((response) => {
        this.queries = response.json();
   });
  }

  //Reply to Customer Queries
  reply(emaill:String)
  {
    this.openMsgAlert(emaill);
  }

  // Open message Box
  openMsgAlert(email:String)
  {
    jQuery.confirm({
    title: 'Send Message',
    content: '' +
    '<form action="" class="formName">' +
    '<div class="form-group">' +
    '<label>Enter Reply Message Here</label>' +
    '<input type="text" placeholder="Enter Message" class="name form-control" required />' +
    '</div>' +
    '</form>',
    type: 'green',
    theme: 'Modern',
    buttons: {
        formSubmit: {
            text: 'Send Mail',
            btnClass: 'btn-blue',
            keys: ['enter'],
            action: function () {
                var msg = this.$content.find('.name').val();
                sessionStorage.setItem('msg', msg);
            }
        },
        cancel: {
            text: 'Cancel',
            btnClass: 'btn-blue',
            action: function(){
              //Close
            }
          }
        },
        onClose: () => {
              this.sendReplyMail(email, sessionStorage.getItem('msg'));
            }
        });
  }

  // Send Reply Mail
  sendReplyMail(email:String, msg:String)
  {
      this.queryService.sendQMail(email, msg)
      .subscribe((response)=>{
      const resul = response.json();
      });
  }

  ngOnInit() {
  }

}
