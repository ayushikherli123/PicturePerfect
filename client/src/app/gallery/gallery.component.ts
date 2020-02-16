import { element } from 'protractor';
import { GalleryService } from './../gallery.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import '../../assets/js/ninja-slider';
declare let nslider: any;

@Component({
  selector: 'gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.css']
})
export class GalleryComponent implements OnInit {
 themes: any[];
 selected:Boolean=false;
 selectTheme:Boolean=false;
 themeImages=null;
 // Slider Images
 galleryImages = [
        { img: 'f6.jpg'},
        { img: 'f8.jpg'},
        { img: 'p1.jpg'},
        { img: 'p7.jpg'},
        { img: 'pf6.jpg'},
        { img: 'pf7.jpg'},
        { img: 'pw3.jpg'},
        { img: 'pw5.jpg'},
        { img: 'w7.jpg'},
        { img: 'w9.jpg'},
        { img: 'wf8.jpg'},
        { img: 'wf9.jpg'},
        { img: 'wf10.jpg'},
    ];

  constructor(private imgService: GalleryService, 
              private router: Router) 
  {
      //Get Themes Data
      this.themes = JSON.parse(localStorage.getItem('Themes'));
  }

  // Booking Navigation
  book()
  {
      this.router.navigate(['booking']);
  }
  
  // Get Theme Gallery Images from Database
  getImg(theme_name:String)
  {
      this.imgService
        .getImages(theme_name)
        .subscribe((response) => {
        this.themeImages = response.json();
        this.selectTheme=true;
      });
  }

  //Close Gallery
  close()
  {
    this.selectTheme=false;
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

  ngOnInit() {
  }
}
