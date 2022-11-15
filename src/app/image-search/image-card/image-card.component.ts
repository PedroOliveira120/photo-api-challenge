import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-image-card',
  templateUrl: './image-card.component.html',
  styleUrls: ['./image-card.component.scss']
})
export class ImageCardComponent implements OnInit {

  /*
    imageData contains the entire json response attributed to component
    imageHeigt/Width are usded to randomize component size attributes
    mouseOver used to show/hide div.image-info
  */
  @Input() imageData: any;
  imageHeight: number=0;
  imageWidth: number=0;
  mouseOver:boolean=false;

  constructor() {  }

  ngOnInit(): void {
    this.resizeImage();
  }

  resizeImage() {
    //(W1*H2)/H1=W2 keeping aspect ratio
    const width1=this.imageData.width;
    const height1=this.imageData.height;

    const height2=Math.floor(Math.random() * (1 + 300 - 200)) + 210;
    const width2=(width1*height2)/height1;

    this.imageHeight=height2;
    this.imageWidth=width2;
  }

}
