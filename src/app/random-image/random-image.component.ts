import { Component, OnInit } from '@angular/core';
import { UnsplashService } from '../unsplash.service';

@Component({
  selector: 'app-random-image',
  templateUrl: './random-image.component.html',
  styleUrls: ['./random-image.component.scss']
})
export class RandomImageComponent implements OnInit {

  constructor(private unsplash: UnsplashService) { }

  data: any;

  ngOnInit(): void {
    this.getPhotograph();
  }

  getPhotograph() {
    this.unsplash.getRandomPhotograph().subscribe(
      (res: Object) => {
        this.data=res;
      }
    );
  }

}
