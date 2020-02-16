import { Component, OnInit } from '@angular/core';
import '../../assets/js/ninja-slider';
declare let nslider: any;

@Component({
  selector: 'himg',
  templateUrl: './himg.component.html',
  styleUrls: ['./himg.component.css']
})
export class HimgComponent implements OnInit 
{
  constructor() { }
  ngOnInit() {
  }
  // Section 1 Images Array
  i:Number;
  selected:Boolean=false;
  images = [
        { img: 'mg1.jpg'},
        { img: 'mg6.jpg'},
        { img: 'i1.jpg'}
    ];

  // Section 2 Images Array
  images2 = [
        { img: '11.jpg'},
        { img: '15.jpg'},
        { img: '12.jpg'},
        { img: '14.jpg'},
        { img: '17.jpg'},
        { img: '16.jpg'}
        // { img: '13.jpg'},
        // { img: '18.jpg'},
        // { img: '19.jpg'},
        // { img: '20.jpg'}
    ];
  
  // Section 3 Images Array
  images3 = [
        { img: 'simg0.jpg'},
        { img: 'simg1.jpg'},
        { img: 'simg2.jpg'},
        { img: 'simg7.jpg'},
        { img: 'simg3.jpg'},
        { img: 'simg4.jpg'},
        { img: 'simg8.jpg'},
        { img: 'simg5.jpg'},
        { img: 'simg6.jpg'}
    ];

  lightbox(idx) 
  {
    this.selected=true;
      //show the slider's wrapper: this is required when the transitionType has been set to "slide" in the ninja-slider.js
      var ninjaSldr = document.getElementById("ninja-slider");
      nslider.init(idx);
      var fsBtn = document.getElementById("fsBtn");
      fsBtn.click();
  }
  CloseSlider()
  {
    this.selected=false;
  }  
}