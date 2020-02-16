import { PhotographerService } from './../photographer.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-photographerprofile',
  templateUrl: './photographerprofile.component.html',
  styleUrls: ['./photographerprofile.component.css']
})

export class PhotographerprofileComponent implements OnInit 
{
  // Get profile details for respective Photographer
  profile = null;
  constructor(private photoService: PhotographerService, private router: Router) 
  {
    photoService
    .getPhotographerDetail()
    .subscribe((response) => {
        this.profile = response.json();
   });
  }

  //Update Profile Route
  updateRoute()
  {
      this.router.navigate(['update_photographer_profile']);
  }

  ngOnInit() {
  }

}
