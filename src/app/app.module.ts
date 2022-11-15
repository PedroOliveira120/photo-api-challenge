import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HttpClientModule } from '@angular/common/http';
import { ImageSearchComponent } from './image-search/image-search.component';
import { ImageCardComponent } from './image-search/image-card/image-card.component';
import { FormsModule } from '@angular/forms';
import { ImagePageComponent } from './image-page/image-page.component';
import { CollectionCardComponent } from './image-search/collection-card/collection-card.component';
import { RandomImageComponent } from './random-image/random-image.component';

@NgModule({
  declarations: [
    AppComponent,
    ImageSearchComponent,
    ImageCardComponent,
    ImagePageComponent,
    CollectionCardComponent,
    RandomImageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    HttpClientModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
