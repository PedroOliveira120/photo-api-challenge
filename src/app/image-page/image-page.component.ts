import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UnsplashService } from '../unsplash.service';

@Component({
  selector: 'app-image-page',
  templateUrl: './image-page.component.html',
  styleUrls: ['./image-page.component.scss']
})
export class ImagePageComponent implements OnInit {

  imageData: any;

  constructor(private unsplash: UnsplashService, private route: ActivatedRoute) { }

  ngOnInit() {
    const imageId=this.route.snapshot.paramMap.get('id');
    if(imageId) {
      this.unsplash.getPhotograph(imageId).subscribe(
        (res:any) => {
          this.imageData=res;
          console.log(this.imageData);
        }
      )
    }
  }

}
