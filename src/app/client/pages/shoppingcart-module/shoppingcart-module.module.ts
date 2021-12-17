import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ShoppingcartComponent } from './shoppingcart/shoppingcart.component';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { ShareModule } from 'src/app/share-modules/share.module';

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
