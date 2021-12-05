import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WishlistComponent } from './wishlist/wishlist.component';
import { Router, RouterModule, Routes } from '@angular/router';
import { ShareModule } from '../share-modules/share.module';

const routes :Routes = [
  {
    path:'',
    component: WishlistComponent
  }
]

@NgModule({
  declarations: [
    WishlistComponent,
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    ShareModule
  ]
})
export class HistoryModuleModule { }
