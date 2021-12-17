import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OrderComponent } from './order/order.component';
import { RouterModule, Routes } from '@angular/router';
import { ShareModule } from 'src/app/share-modules/share.module';

const routes : Routes = [
  {
    path:'',
    component: OrderComponent
  }
]

@NgModule({
  declarations: [
    OrderComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    ShareModule
  ]
})
export class OrderModuleModule { }
