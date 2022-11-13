import { Component, OnInit } from '@angular/core';
import { UnsplashService } from './unsplash.service';

@Component({
  selector: 'app-image-search',
  templateUrl: './image-search.component.html',
  styleUrls: ['./image-search.component.scss']
})
export class ImageSearchComponent implements OnInit {

  constructor(private unsplash: UnsplashService) { }

  ngOnInit(): void {
    this.unsplash.listPhotographs();
  }

}
