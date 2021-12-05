import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MyacountComponent } from './myacount/myacount.component';
import { ShareModule } from '../share-modules/share.module';
import { RouterModule, Routes } from '@angular/router';

const routes :Routes = [
  {
    path:'',
    component: MyacountComponent,
  }
]

@NgModule({
  declarations: [
    MyacountComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    ShareModule
  ]
})
export class MyacountModule { }
