import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CheckoutComponent } from './checkout/checkout.component';
import { ShareModule } from '../share-modules/share.module';
import { RouterModule, Routes } from '@angular/router';

const routes :Routes = [
  {
    path:'',
    component: CheckoutComponent
  }
]

@NgModule({
  declarations: [
    CheckoutComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    ShareModule
  ]
})
export class CheckoutModuleModule { }
