import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FaqComponent } from './faq/faq.component';
import { RouterModule, Routes } from '@angular/router';
import { ShareModule } from 'src/app/share-modules/share.module';

const routes: Routes = [
  {
    path:'',
    component: FaqComponent
  }
]


@NgModule({
  declarations: [
    FaqComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    ShareModule
  ]
})
export class FaqModuleModule { }
