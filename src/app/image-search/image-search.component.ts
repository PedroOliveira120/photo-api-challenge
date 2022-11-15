import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UnsplashService } from '../unsplash.service';

@Component({
  selector: 'app-image-search',
  templateUrl: './image-search.component.html',
  styleUrls: ['./image-search.component.scss']
})
export class ImageSearchComponent implements OnInit {

  constructor(private unsplash: UnsplashService, private router: Router) { }
                          //ALTERAR NOME DE DATA PARA PHOTO

  /* Variables:
    data: reserved for photographs
    collection: reserved for collection
    search: value returned from text-box
    topic: value returned from select-box
    */

  photos:any;
  collection:any;
  search: string='';
  topic: string = 'photos'

  /* When our component starts it starts with a GET request to get a list of the tio 20 photos and collections.
    search and list Photo functions do two calls simultaneously, populations DATA and collections variable.
  */

  ngOnInit(): void {
    this.listPhotos();
  }

  searchPhoto(search:string) {
    this.unsplash.searchPhotographs(search, 'photos').subscribe(
      (res:any) => {
        this.photos=res.results;
      }
    )
    this.unsplash.searchPhotographs(search, 'collections').subscribe(
      (res:any) => {
        this.collection=res.results;
      }
    )
  }

  listPhotos() {
    this.unsplash.listPhotographs('photos').subscribe(
      (res:any) => {
        this.photos=res;
      }
    );
    this.unsplash.listPhotographs('collections').subscribe(
      (res:any) => {
        this.collection=res;
      }
    );
  }

  /* click function is activaded when clicking on an image-card.component
  when navigating we pass the image id as a parameter, this way, when
  image-page is initializing we can retrieve the id and use it on a http call
  */
  onClick(item:any) {
    this.router.navigate(['/image-page', {id: item.id}])
  }

  /*
    The sole purpose of this function is to verify if our text box cotains any value
    choosing which function we chould call, listPhoto does not require a query (search term) param

  */
  onSearch() {
     if(this.search==="") {
      this.listPhotos();
    } else {
      this.searchPhoto(this.search);
    }
  }

}
