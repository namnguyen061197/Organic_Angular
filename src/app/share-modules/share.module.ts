import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PaginationComponent } from './pagination/pagination.component';
import { BannerComponent } from './banner/banner.component';
import { ProductItemComponent } from './product-item/product-item.component';
import { ScrollTopComponent } from './scroll-top/scroll-top.component';
import { TableAdminComponent } from './table-admin/table-admin.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    PaginationComponent,
    BannerComponent,
    ProductItemComponent,
    ScrollTopComponent,
    TableAdminComponent,
  ],
  imports: [
    CommonModule,
  ],
  exports: [
    PaginationComponent,
    BannerComponent,
    ProductItemComponent,
    ScrollTopComponent,
    TableAdminComponent,
    ReactiveFormsModule,
    FormsModule
  ]
})
export class ShareModule { }
