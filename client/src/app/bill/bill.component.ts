import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-bill',
  templateUrl: './bill.component.html',
  styleUrls: ['./bill.component.css']
})
export class BillComponent implements OnInit 
{
  data=null;
  constructor() { 
    this.data = JSON.parse(sessionStorage.getItem('billData'));
  }
  ngOnInit() {
  }

 printBill() 
 {
   window.print();
 }
}
