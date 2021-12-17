import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule,Routes } from '@angular/router';
import {CarouselModule } from 'ngx-owl-carousel-o';
import { PopupEmailComponent } from './popup-email/popup-email.component';
import { ReactiveFormsModule } from '@angular/forms';
import { ShareModule } from 'src/app/share-modules/share.module';
import { HomeComponent } from './home.component';
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
    ShareModule,
    ReactiveFormsModule
  ],
})
export class HomeModule { }
