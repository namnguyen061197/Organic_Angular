import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PaginationComponent } from './pagination/pagination.component';
import { BannerComponent } from './banner/banner.component';
import { ProductItemComponent } from './product-item/product-item.component';
import { ScrollTopComponent } from './scroll-top/scroll-top.component';

@NgModule({
  declarations: [
    PaginationComponent,
    BannerComponent,
    ProductItemComponent,
    ScrollTopComponent,

  ],
  imports: [
    CommonModule,
  ],
  exports: [
    PaginationComponent,
    BannerComponent,
    ProductItemComponent,
    ScrollTopComponent
  ]
})
export class ShareModule { }
