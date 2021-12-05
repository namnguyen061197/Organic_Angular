import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { RouterModule,Routes } from '@angular/router';
import {CarouselModule } from 'ngx-owl-carousel-o';
import { ShareModule } from '../share-modules/share.module';
import { PopupEmailComponent } from './popup-email/popup-email.component';
const routes:Routes = [
  {
    path:'',
    component:HomeComponent
  }
]
@NgModule({
  declarations: [
    HomeComponent,
    PopupEmailComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    CarouselModule,
    ShareModule
  ],
})
export class HomeModule { }
