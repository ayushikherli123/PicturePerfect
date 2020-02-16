import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions } from '@angular/http';

@Injectable()
export class GalleryService 
{
  url = 'http://localhost:3000/themegallery';
  constructor(private http: Http) { }

  // get Booking related to user
  getImages(theme_name:String) {
      return this.http.get(this.url + '/' + theme_name);
 }

}
