import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule,Routes } from '@angular/router';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { ProductListComponent } from './product-list/product-list.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Ng5SliderModule } from 'ng5-slider';
import {CarouselModule } from 'ngx-owl-carousel-o';
import { ShareModule } from 'src/app/share-modules/share.module';
const routes:Routes = [
  {
    path:'',
    component:ProductListComponent
  },
  {
    path:':idVegetable',
    component: ProductDetailsComponent
  }

]


@NgModule({
  declarations: [
    ProductDetailsComponent,
    ProductListComponent,
  ],
  imports: [
    CommonModule,
    ShareModule,
    RouterModule.forChild(routes),
    FormsModule,
    Ng5SliderModule,
    CarouselModule,
    ReactiveFormsModule
  ]
})
export class VegetableModule { }
