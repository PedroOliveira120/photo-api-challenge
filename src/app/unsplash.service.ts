import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UnsplashService {

  //According to Unsplash API you only need CLIENT_ID to make calls regarding users
  //Although this was not the case once I started testing in Postman.
  CLIENT_ID='DbhiaBPRA2oGfEtbxKkaQ7BR8Ac6TQOwa_AgZ0nsScA'


  constructor(private http: HttpClient) { }

  /* Unsplash api says:
    query -> Search term
    per-page -> Number of items per page. (Optional; default: 10)

    topic is a parameter declared by me, it gets it's value in image-search component
      inside a select box, this way we can choose between photographs or collections

    example: api.unsplash.com/search/(photos/collections)
   */
  searchPhotographs(query: string, topic: string) {
    return this.http.get('https://api.unsplash.com/search/'+topic+'?query='+query+'&per_page=20&client_id='+this.CLIENT_ID);
  }

  listPhotographs(topic?: string): Observable<any> {
    return this.http.get('https://api.unsplash.com/'+topic+'?per_page=20&client_id='+this.CLIENT_ID)
  }

  getPhotograph(photoId: string) {
    return this.http.get('https://api.unsplash.com/photos/'+photoId+'?client_id='+this.CLIENT_ID);
  }

  getRandomPhotograph() {
    return this.http.get('https://api.unsplash.com/photos/random?client_id='+this.CLIENT_ID)
  }
}
