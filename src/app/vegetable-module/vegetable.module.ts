import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule,Routes } from '@angular/router';
import { VegatebleDetailsComponent } from './vegateble-details/vegateble-details.component';
import { VegetableListComponent } from './vegetable-list/vegetable-list.component';
import { ShareModule } from '../share-modules/share.module';
import { FormsModule } from '@angular/forms';
import { Ng5SliderModule } from 'ng5-slider';
import {CarouselModule } from 'ngx-owl-carousel-o';
const routes:Routes = [
  {
    path:'',
    component:VegetableListComponent
  },
  {
    path:':idVegetable',
    component: VegatebleDetailsComponent
  }

]


@NgModule({
  declarations: [
    VegatebleDetailsComponent,
    VegetableListComponent,
  ],
  imports: [
    CommonModule,
    ShareModule,
    RouterModule.forChild(routes),
    FormsModule,
    Ng5SliderModule,
    CarouselModule
  ]
})
export class VegetableModule { }
