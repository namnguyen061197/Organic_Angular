import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CheckoutComponent } from './checkout/checkout.component';
import { RouterModule, Routes } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { ShareModule } from 'src/app/share-modules/share.module';

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
    ShareModule,
    ReactiveFormsModule
  ]
})
export class CheckoutModuleModule { }
