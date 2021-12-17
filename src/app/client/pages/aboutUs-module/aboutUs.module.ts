import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AboutUsComponent } from './about-us/about-us.component';
import { RouterModule, Routes } from '@angular/router';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { FarmerItemComponent } from './farmer-item/farmer-item.component';
import { ShareModule } from 'src/app/share-modules/share.module';



const routes : Routes = [
  {
    path:"",
    component : AboutUsComponent
  }
]

@NgModule({
  declarations: [
    AboutUsComponent,
    FarmerItemComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    CarouselModule,
    ShareModule,

  ],
  exports: [
    AboutUsComponent
  ]
})
export class AboutUsModuleModule {

}
