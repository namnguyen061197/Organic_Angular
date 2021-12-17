import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListProductComponent } from './list-product.component';
import { ShareModule } from 'src/app/share-modules/share.module';
import { RouterModule, Routes } from '@angular/router';
import { ItemProductComponent } from './itemProduct/item-product.component';

const routes : Routes = [
  {
    path:'',
    component : ListProductComponent
  }
]


@NgModule({
  declarations: [
    ListProductComponent,
    ItemProductComponent
  ],
  imports: [
    CommonModule,
    ShareModule,
    RouterModule.forChild(routes),

  ]
})
export class ListProductModule { }
