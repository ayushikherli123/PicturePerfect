import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-adminthemes',
  templateUrl: './adminthemes.component.html',
  styleUrls: ['./adminthemes.component.css']
})
export class AdminthemesComponent implements OnInit {
  themes: any[];
  constructor() { 
    this.themes = JSON.parse(localStorage.getItem('Themes'));
  }

  ngOnInit() {
  }
  
}
