import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UnsplashService {

  CLIENT_ID='DbhiaBPRA2oGfEtbxKkaQ7BR8Ac6TQOwa_AgZ0nsScA'
  //temp var
  query='cat';

  data:any;

  constructor(private http: HttpClient) { }

  listPhotographs() {
    this.http.get('https://api.unsplash.com/search/photos?query='+this.query+'&client_id='+this.CLIENT_ID).subscribe(
      (response: any) => {
        console.log(response);
      }
    )
  }

  searchPhotographs() {
    this.http.get('https://api.unsplash.com/photos?per_page=10&client_id='+this.CLIENT_ID).subscribe(
      (response: any) => {
        this.data='0merda';
        console.log(this.data);
      }
    )
  }
}
