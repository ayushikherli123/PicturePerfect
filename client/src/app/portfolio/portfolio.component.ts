import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import '../../assets/js/ninja-slider';
declare let nslider: any;

@Component({
  selector: 'portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.css']
})
export class PortfolioComponent implements OnInit {
  //Carosal Images
  carosalImages = [
        { img: 'c2.jpg'},
        { img: 'c3.jpg'},
        { img: 'c4.jpg'},
        { img: 'c5.jpg'},
        { img: 'c7.jpg'}
    ];

  photos = [
    { img: '10.jpg', pname: 'Keshav Samanth'},
    { img: '11.jpg', pname: 'Tejaswini Gupta'},
    { img: '12.jpg', pname: 'Anikesh Jain'},
    { img: '13.jpg', pname: 'Nivedita Joshi'},
    { img: '14.jpg', pname: 'Anirudhdha Shrivastava'},
    { img: '15.jpg', pname: 'Keshav Samanth'},
    { img: '16.jpg', pname: 'Tejaswini Gupta'},
    { img: '17.jpg', pname: 'Anikesh Jain'},
    { img: '18.jpg', pname: 'Nivedita Joshi'},
    { img: '19.jpg', pname: 'Anirudhdha Shrivastava'}
  ]

  photographerdetail: any[];
  selected:Boolean=false;
  constructor(private router: Router) 
  {
    this.photographerdetail = JSON.parse(localStorage.getItem('Photographers'));
  }

  // Open Slider
  lightbox(idx) 
  {
      this.selected=true;
      //show the slider's wrapper: this is required when the transitionType has been set to "slide" in the ninja-slider.js
      var ninjaSldr = document.getElementById("ninja-slider");
      nslider.init(idx);
      var fsBtn = document.getElementById("fsBtn");
      fsBtn.click();
  }

  // Close Slider
  CloseSlider()
  {
    this.selected=false;
  }  

  // Booking Navigation
  book()
  {
      this.router.navigate(['booking']);
  }

  ngOnInit() {
  }

}
