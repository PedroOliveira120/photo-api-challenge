import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-collection-card',
  templateUrl: './collection-card.component.html',
  styleUrls: ['./collection-card.component.scss']
})
export class CollectionCardComponent implements OnInit {

  @Input() collectionData: any;
  imageHeight: number=0;
  imageWidth: number=0;
  mouseOver:boolean=false;

  constructor() { }

  ngOnInit(): void {
    this.resizeImage();
  }

  resizeImage() {
    //(W1*H2)/H1=W2 keeping aspect ratio
    const width1=this.collectionData.cover_photo.width;
    const height1=this.collectionData.cover_photo.height;

    const height2=Math.floor(Math.random() * (1 + 300 - 200)) + 210;
    const width2=(width1*height2)/height1;

    this.imageHeight=height2;
    this.imageWidth=width2;
  }

}
