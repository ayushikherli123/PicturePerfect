import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions } from '@angular/http';

@Injectable()
export class ThemeService {

  url = 'http://localhost:3000/theme';
  constructor(private http: Http) { }

  // Get Themes data
  getThemes()
  {
    return this.http.get(this.url);
  }

}
