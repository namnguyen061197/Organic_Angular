import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ShoppingcartComponent } from './shoppingcart/shoppingcart.component';
import { ShareModule } from '../share-modules/share.module';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';

const routes : Routes = [
  {
    path:'',
    component: ShoppingcartComponent
  }
]

@NgModule({
  declarations: [
    ShoppingcartComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    ShareModule,
    FormsModule
  ]
})
export class ShoppingcartModuleModule { }
