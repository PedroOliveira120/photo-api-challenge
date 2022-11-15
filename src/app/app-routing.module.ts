import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ImagePageComponent } from './image-page/image-page.component';
import { ImageSearchComponent } from './image-search/image-search.component';
import { RandomImageComponent } from './random-image/random-image.component';

const routes: Routes = [
  { path: 'image-search', component: ImageSearchComponent},
  { path: 'image-page', component: ImagePageComponent},
  { path: 'random-image', component: RandomImageComponent},
  { path: '', redirectTo: '/image-search', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
