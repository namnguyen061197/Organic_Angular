import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddProductComponent } from './add-product.component';
import { ShareModule } from 'src/app/share-modules/share.module';
import { RouterModule, Routes } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { CarouselModule } from 'ngx-owl-carousel-o';

const routes : Routes = [
  {
    path: '',
    component: AddProductComponent,
  },
  {
    path:':idPrd',
    component: AddProductComponent,
  }
]

@NgModule({
  declarations: [
    AddProductComponent
  ],
  imports: [
    CommonModule,
    ShareModule,
    RouterModule.forChild(routes),
    ReactiveFormsModule,
    CarouselModule

  ]
})
export class AddProductModule { }
