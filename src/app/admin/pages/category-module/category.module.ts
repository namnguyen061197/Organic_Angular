import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CategoryComponent } from './category.component';
import { RouterModule, Routes } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { ShareModule } from 'src/app/share-modules/share.module';


const route : Routes = [
  {
    path:'',
    component: CategoryComponent
  }

]

@NgModule({
  declarations: [
    CategoryComponent
  ],
  imports: [
    CommonModule,
    ShareModule,
    RouterModule.forChild(route),
    ReactiveFormsModule

  ]
})
export class CategoryModule { }
