import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MyacountComponent } from './myacount/myacount.component';
import { RouterModule, Routes } from '@angular/router';
import { ShareModule } from 'src/app/share-modules/share.module';

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
